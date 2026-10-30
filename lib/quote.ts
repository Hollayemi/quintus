import { site } from "@/config/site";

// Keep in sync with the options in components/ContactForm.tsx.
export const quoteTypes = [
  "Building construction",
  "Civil engineering works",
  "Renovation and fit-out",
  "Project management",
  "Cost consultancy (BoQ / estimates)",
  "Maintenance and facility works",
  "Something else",
] as const;

export type QuoteRequest = {
  name: string;
  phone: string;
  email: string;
  location: string;
  type: string;
  message: string;
};

export type QuoteErrors = Partial<Record<keyof QuoteRequest, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(v: unknown, max: number, multiline = false): string {
  if (typeof v !== "string") return "";
  const s = multiline ? v : v.replace(/[\r\n]+/g, " ");
  return s.trim().slice(0, max);
}

/** Validates untrusted input. Returns the cleaned request or per-field errors. */
export function parseQuote(
  input: unknown,
): { ok: true; data: QuoteRequest } | { ok: false; errors: QuoteErrors } {
  const o = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;

  const data: QuoteRequest = {
    name: str(o.name, 120),
    phone: str(o.phone, 40),
    email: str(o.email, 200),
    location: str(o.location, 200),
    type: str(o.type, 100),
    message: str(o.message, 5000, true),
  };

  const errors: QuoteErrors = {};
  if (data.name.length < 2) errors.name = "Please enter your full name.";
  if (data.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!(quoteTypes as readonly string[]).includes(data.type)) errors.type = "Please choose what you need.";
  if (data.message.length < 10) errors.message = "Please tell us a little more about the project.";

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Strips CR/LF so user input can never inject extra mail headers. */
export function oneLine(s: string): string {
  return s.replace(/[\r\n]+/g, " ").trim();
}

export function buildQuoteEmail(q: QuoteRequest) {
  const subject = `Request Quote: ${oneLine(q.type)} (${oneLine(q.name)})`;

  const rows: [string, string][] = [
    ["Name", q.name],
    ["Phone", q.phone],
    ["Email", q.email],
    ["Site location", q.location || "-"],
    ["Enquiry type", q.type],
  ];

  const text = [
    "New quote request from the Quintus Projects website",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Project brief:",
    q.message,
  ].join("\n");

  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f4f1ea;font-family:Arial,Helvetica,sans-serif;color:#1c1c1c">
  <table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #d9d4c7">
    <tr><td style="padding:20px 24px;background:#14264a;color:#ffffff;font-size:18px;font-weight:bold">
      Request Quote
      <div style="font-size:12px;font-weight:normal;opacity:.8;margin-top:4px">${escapeHtml(site.name)} website</div>
    </td></tr>
    <tr><td style="padding:24px">
      <table role="presentation" width="100%" style="border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 0;border-bottom:1px solid #eee;width:130px;color:#666">${escapeHtml(k)}</td><td style="padding:8px 0;border-bottom:1px solid #eee">${escapeHtml(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <p style="margin:24px 0 6px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#666">Project brief</p>
      <div style="font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(q.message)}</div>
    </td></tr>
    <tr><td style="padding:14px 24px;background:#faf8f3;font-size:12px;color:#777">
      Reply to this email to respond directly to ${escapeHtml(q.name)}.
    </td></tr>
  </table>
</body></html>`;

  return { subject, text, html };
}
