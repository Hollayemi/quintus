import Link from "next/link";
import { Logo } from "./Header";
import { nav, services, site } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed text-white/65">
            {site.tagline}. Building, civil and structural works across Nigeria,
            from costing to handover.
          </p>
        </div>

        <div className="md:col-span-2">
          <h2 className="label text-white/50">Company</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/85 hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="label text-white/50">Services</h2>
          <ul className="mt-4 space-y-2.5 text-white/85">
            {services.map((s) => (
              <li key={s.n}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="label text-white/50">Head office</h2>
          <address className="mt-4 space-y-1 not-italic text-white/85">
            {site.address.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </address>
          <p className="mt-4">
            <a href={site.phoneHref} className="text-white/85 hover:text-white">
              {site.phoneDisplay}
            </a>
          </p>
          <p>
            <a href={`mailto:${site.email}`} className="text-white/85 hover:text-white">
              {site.email}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-white/50 md:flex-row md:justify-between">
          <p className="label">
            © {site.legalName} · RC {site.rc}
          </p>
          <p className="label">Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
