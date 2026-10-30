import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

// Zoho Mail SMTP. The host depends on the data centre the Zoho account lives in:
//   .com -> smtp.zoho.com | .eu -> smtp.zoho.eu | .in -> smtp.zoho.in
//   .com.au -> smtp.zoho.com.au | .jp -> smtp.zoho.jp
// Set ZOHO_SMTP_HOST if the account is not on the default (.com) data centre.

export class MailConfigError extends Error {}

let cached: Transporter | null = null;

function getTransporter(): Transporter {
  if (cached) return cached;

  const user = process.env.ZOHO_SMTP_USER;
  const pass = process.env.ZOHO_SMTP_PASS;
  if (!user || !pass) {
    throw new MailConfigError("ZOHO_SMTP_USER and ZOHO_SMTP_PASS are not set.");
  }

  const port = Number(process.env.ZOHO_SMTP_PORT || 465);
  cached = nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.com",
    port,
    secure: port === 465, // 465 = implicit TLS, 587 = STARTTLS
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
  return cached;
}

export type QuoteMail = {
  subject: string;
  text: string;
  html: string;
  replyTo: string;
};

export async function sendQuoteMail(mail: QuoteMail) {
  const transporter = getTransporter();
  // Zoho only allows sending from the authenticated mailbox (or its aliases).
  const from = process.env.ZOHO_FROM || process.env.ZOHO_SMTP_USER!;
  const to = process.env.QUOTE_TO_EMAIL || "hello@quintusprojects.com";

  return transporter.sendMail({
    from: `"Quintus Projects Website" <${from}>`,
    to,
    replyTo: mail.replyTo,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
  });
}
