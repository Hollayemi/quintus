"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { quoteTypes, type QuoteErrors } from "@/lib/quote";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<QuoteErrors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const f = new FormData(form);
    setStatus("sending");
    setError("");
    setFieldErrors({});

    try {
      const res = await fetch("/api/request-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(f)),
      });
      const data = (await res.json().catch(() => null)) as
        | { ok: boolean; error?: string; errors?: QuoteErrors }
        | null;

      if (res.ok && data?.ok) {
        form.reset();
        setStatus("sent");
        return;
      }
      setFieldErrors(data?.errors ?? {});
      setError(data?.error ?? "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setError("Network problem. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const field =
    "mt-2 w-full border border-ink/25 bg-white/60 px-4 py-3 text-base outline-none transition-colors focus:border-navy focus:bg-white";
  const plain = "font-sans normal-case tracking-normal";
  const err = (k: keyof QuoteErrors) =>
    fieldErrors[k] ? (
      <span className="mt-1 block text-sm font-sans normal-case tracking-normal text-red-700">{fieldErrors[k]}</span>
    ) : null;

  if (status === "sent") {
    return (
      <div className="border border-ink/25 bg-white/60 p-8" role="status" aria-live="polite">
        <p className="label">Request received</p>
        <p className="mt-3 text-xl">Thank you. Your quote request has been sent to our team.</p>
        <p className="mt-3 text-muted">
          We will come back to you shortly with next steps. If it is urgent, call{" "}
          <a href={site.phoneHref} className="link-u">
            {site.phoneDisplay}
          </a>
          .
        </p>
        <button type="button" className="btn btn-copper mt-6" onClick={() => setStatus("idle")}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2" noValidate={false}>
      <label className="label block">
        Full name
        <input name="name" required autoComplete="name" maxLength={120} className={`${field} ${plain}`} />
        {err("name")}
      </label>
      <label className="label block">
        Phone
        <input name="phone" type="tel" required autoComplete="tel" maxLength={40} className={`${field} ${plain}`} />
        {err("phone")}
      </label>
      <label className="label block">
        Email
        <input name="email" type="email" required autoComplete="email" maxLength={200} className={`${field} ${plain}`} />
        {err("email")}
      </label>
      <label className="label block">
        Site location
        <input name="location" maxLength={200} placeholder="e.g. Lekki, Lagos" className={`${field} ${plain}`} />
      </label>
      <label className="label block sm:col-span-2">
        What do you need?
        <select name="type" className={`${field} ${plain}`} defaultValue={quoteTypes[0]}>
          {quoteTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        {err("type")}
      </label>
      <label className="label block sm:col-span-2">
        Project brief
        <textarea
          name="message"
          required
          rows={6}
          maxLength={5000}
          placeholder="Building type, size, drawings available, target start date, budget range…"
          className={`${field} ${plain}`}
        />
        {err("message")}
      </label>

      {/* Honeypot: hidden from people, tempting to bots. Must stay empty. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-copper" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request a quote"}
        </button>
        <p
          className={`mt-4 text-sm ${status === "error" ? "text-red-700" : "text-muted"}`}
          aria-live="polite"
          role={status === "error" ? "alert" : undefined}
        >
          {status === "error"
            ? error
            : "Your request goes straight to our team. We reply by email or phone."}
        </p>
      </div>
    </form>
  );
}
