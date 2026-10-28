"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/config/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Image
        src={light ? site.logo.light : site.logo.dark}
        alt=""
        width={390}
        height={319}
        className="h-9 w-auto"
        priority
      />
      <span className="display text-[1.15rem] leading-[1.02] tracking-normal">
        <span className={light ? "text-white" : "text-navy"}>Quintus</span>
        <br />
        <span className={light ? "text-white/60" : "text-muted"}>Projects</span>
      </span>
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="hidden border-b border-line bg-navy-deep text-white/70 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <p className="label">
            {site.address.join(", ")}
          </p>
          <p className="label">
            RC {site.rc} · {site.phoneDisplay}
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" aria-label="Quintus Projects, home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav
            .filter((n) => n.href !== "/contact")
            .map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={isActive(n.href) ? "page" : undefined}
                className={`text-[0.95rem] font-medium ${
                  isActive(n.href)
                    ? "text-ink shadow-[inset_0_-2px_0_var(--copper)]"
                    : "text-muted hover:text-ink"
                } py-1`}
              >
                {n.label}
              </Link>
            ))}
          <Link
            href="/contact"
            className="bg-navy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-deep"
          >
            Request a quote
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M5 5l16 16M21 5L5 21" />
            ) : (
              <path d="M3 8h20M3 13h20M3 18h20" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-paper px-6 pb-6 md:hidden"
        >
          <ul>
            {nav.map((n) => (
              <li key={n.href} className="border-b border-line">
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`display block py-4 text-2xl ${
                    isActive(n.href) ? "text-copper" : "text-ink"
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="label mt-5 text-muted">{site.phoneDisplay}</p>
        </nav>
      )}
    </header>
  );
}
