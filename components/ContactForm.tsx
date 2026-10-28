"use client";

import { useState } from "react";
import { site } from "@/config/site";

const types = [
  "Building construction",
  "Civil engineering works",
  "Renovation and fit-out",
  "Project management",
  "Cost consultancy (BoQ / estimates)",
  "Maintenance and facility works",
  "Something else",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Email: ${f.get("email")}`,
      `Location: ${f.get("location") || "-"}`,
      `Enquiry: ${f.get("type")}`,
      "",
      `${f.get("message")}`,
    ].join("\n");
    const subject = `Project enquiry: ${f.get("type")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-2 w-full border border-ink/25 bg-white/60 px-4 py-3 text-base outline-none transition-colors focus:border-navy focus:bg-white";

  return (
    <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
      <label className="label block">
        Full name
        <input name="name" required autoComplete="name" className={`${field} font-sans normal-case tracking-normal`} />
      </label>
      <label className="label block">
        Phone
        <input name="phone" type="tel" required autoComplete="tel" className={`${field} font-sans normal-case tracking-normal`} />
      </label>
      <label className="label block">
        Email
        <input name="email" type="email" required autoComplete="email" className={`${field} font-sans normal-case tracking-normal`} />
      </label>
      <label className="label block">
        Site location
        <input name="location" placeholder="e.g. Lekki, Lagos" className={`${field} font-sans normal-case tracking-normal`} />
      </label>
      <label className="label block sm:col-span-2">
        What do you need?
        <select name="type" className={`${field} font-sans normal-case tracking-normal`} defaultValue={types[0]}>
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="label block sm:col-span-2">
        Project brief
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Building type, size, drawings available, target start date, budget range…"
          className={`${field} font-sans normal-case tracking-normal`}
        />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-copper">
          Send enquiry
        </button>
        <p className="mt-4 text-sm text-muted" aria-live="polite">
          {sent
            ? "Your email app should now open with the enquiry ready to send. If it doesn't, write to us directly at the address on this page."
            : "This opens your email app with your enquiry filled in."}
        </p>
      </div>
    </form>
  );
}
