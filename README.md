# Quintus Projects website

Next.js (App Router) + Tailwind CSS v4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Where to edit things

| What | File |
| --- | --- |
| Company info, contacts, nav, services, process, sectors, team, project register | `config/site.ts` |
| Every photo on the site (hero, banners, project gallery) | `config/images.ts` |
| Logo files | `public/logo-mark*.png` (paths set in `config/site.ts`) |
| Fonts (self-hosted) | `app/fonts/` |

Real project media in `public/images` (tank-farm photos + `vid1.mp4`) is wired into the Projects page, sector panel, About/Services banners and the home structure section. The remaining photos are **placeholder Unsplash images**. To use real project photos, put files in
`public/images/` and change the `src` in `config/images.ts` to `/images/<file>.jpg`.
Items marked `CONFIRM` in `config/site.ts` (phone number, year established) need checking.

## Request-quote email (Zoho Mail)

`POST /api/request-quote` (`app/api/request-quote/route.ts`) validates the Contact form and emails it to
`hello@quintusprojects.com` through Zoho Mail SMTP (subject starts with "Request Quote"; Reply-To is the
customer's email). Copy `.env.example` to `.env.local` and set `ZOHO_SMTP_USER` / `ZOHO_SMTP_PASS`
(a Zoho **app password**). On the host (Vercel etc.) set the same variables in the project settings.
