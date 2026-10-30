import type { NextRequest } from "next/server";
import { buildQuoteEmail, parseQuote } from "@/lib/quote";
import { MailConfigError, sendQuoteMail } from "@/lib/zoho-mail";

// Runs on the default Node.js runtime (nodemailer needs net/tls). Don't export `runtime`
// here: it is incompatible with `cacheComponents` in next.config.ts.

// Best-effort per-IP throttle. In-memory, so it is per server instance and resets on
// restart; it stops casual spam, not a determined attacker. Put a WAF / Turnstile in
// front if the form gets abused.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return false;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json(
      { ok: false, error: "Too many requests. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 20_000) {
      return Response.json({ ok: false, error: "Request too large." }, { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. Pretend success to bots.
  if (typeof (body as Record<string, unknown>)?.website === "string" && (body as Record<string, string>).website) {
    return Response.json({ ok: true });
  }

  const parsed = parseQuote(body);
  if (!parsed.ok) {
    return Response.json({ ok: false, error: "Please check the highlighted fields.", errors: parsed.errors }, { status: 422 });
  }

  const { subject, text, html } = buildQuoteEmail(parsed.data);

  try {
    await sendQuoteMail({ subject, text, html, replyTo: parsed.data.email });
    return Response.json({ ok: true });
  } catch (err) {
    if (err instanceof MailConfigError) {
      console.error("[request-quote] Mail is not configured:", err.message);
    } else {
      console.error("[request-quote] Zoho send failed:", err);
    }
    return Response.json(
      { ok: false, error: "We couldn't send your request right now. Please email hello@quintusprojects.com or call us." },
      { status: 502 },
    );
  }
}
