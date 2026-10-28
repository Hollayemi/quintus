"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { sectorImages } from "@/config/images";
import { sectors } from "@/config/site";

const EASE = [0.2, 0.7, 0.2, 1] as const;
const WIPE = [0.76, 0, 0.24, 1] as const;

const icons: Record<string, string> = {
  residential: "M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6",
  commercial: "M5 21V4h9v17M14 9h5v12M8 8h3M8 12h3M8 16h3M3 21h18",
  industrial: "M3 21V11l6 4v-4l6 4V5h4v16H3zM8 21v-3M12 21v-3",
  healthcare: "M12 7v10M7 12h10M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z",
  education: "M2 9l10-5 10 5-10 5-10-5zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5M22 9v6",
  faith: "M4 21V12a8 8 0 0116 0v9M12 4V2M9 21v-6a3 3 0 016 0v6M2 21h20",
  infrastructure: "M2 18h20M4 18V9M20 18V9M4 9c3 6 13 6 16 0M12 15v3M8 13.5V18M16 13.5V18",
};

function Icon({ slug }: { slug: string }) {
  return (
    <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-navy-deep text-copper">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d={icons[slug]} />
      </svg>
    </span>
  );
}

function More() {
  return (
    <>
      View projects
      <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M0 6h16M11 1l5 5-5 5" />
      </svg>
    </>
  );
}

export function SectorShowcase() {
  const [active, setActive] = useState(0);
  const rm = useReducedMotion();

  return (
    <div>
      {/* Desktop: hover-to-expand panels */}
      <ul className="hidden h-[34rem] border-l border-line lg:flex" onMouseLeave={() => undefined}>
        {sectors.map((s, i) => {
          const on = i === active;
          const photo = sectorImages[s.slug];
          return (
            <li
              key={s.slug}
              onMouseEnter={() => setActive(i)}
              className="relative flex min-w-0 flex-col border-r border-line pl-4 pr-0 pt-0 transition-[flex-grow] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
              style={{ flexGrow: on ? 7 : 1, flexBasis: 0 }}
            >
              <div className="relative min-h-0 flex-1 overflow-hidden">
                {/* image always mounted (so it is preloaded), uncovered when active */}
                <motion.div
                  className="absolute inset-0"
                  initial={false}
                  animate={{ clipPath: on ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
                  transition={{ duration: rm ? 0 : 0.8, ease: WIPE }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width:1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                </motion.div>

                {/* vertical label when collapsed */}
                <span
                  aria-hidden={on}
                  className={`absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-2xl [writing-mode:vertical-rl] rotate-180 transition-opacity duration-300 ${
                    on ? "opacity-0" : "opacity-100 delay-200"
                  }`}
                  style={{ fontFamily: "var(--font-display)", fontStretch: "100%", fontWeight: 500 }}
                >
                  {s.title}
                </span>

                {/* caption when open */}
                <AnimatePresence>
                  {on && (
                    <motion.div
                      key="cap"
                      className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8"
                      initial={rm ? false : { opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, transition: { duration: 0.15 } }}
                      transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
                    >
                      <p className="max-w-md text-lg leading-snug">{s.text}</p>
                      <Link href="/projects" className="mt-5 inline-flex items-center gap-3 font-medium text-copper hover:text-white">
                        <More />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!on && (
                  <button
                    type="button"
                    className="absolute inset-0 z-10"
                    aria-label={`Show ${s.title}`}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                  />
                )}
              </div>

              <div className="flex h-14 items-center gap-5 overflow-hidden">
                <Icon slug={s.slug} />
                <span
                  className={`display whitespace-nowrap text-xl normal-case transition-opacity duration-300 ${on ? "opacity-100 delay-300" : "opacity-0"}`}
                  style={{ fontStretch: "100%", fontWeight: 500, letterSpacing: 0 }}
                >
                  {s.title}
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Mobile / tablet: tap accordion */}
      <ul className="border-t border-ink/30 lg:hidden">
        {sectors.map((s, i) => {
          const on = i === active;
          const photo = sectorImages[s.slug];
          return (
            <li key={s.slug} className="border-b border-ink/15">
              <button
                type="button"
                aria-expanded={on}
                onClick={() => setActive(on ? -1 : i)}
                className="flex w-full items-center gap-4 py-3 text-left"
              >
                <Icon slug={s.slug} />
                <span className="display flex-1 text-xl normal-case" style={{ fontStretch: "100%", fontWeight: 500, letterSpacing: 0 }}>
                  {s.title}
                </span>
                <span aria-hidden className="pr-2 text-2xl text-copper">{on ? "−" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {on && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="relative mb-3 aspect-[16/10] overflow-hidden bg-paper-2">
                      <Image src={photo.src} alt={photo.alt} fill sizes="100vw" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                        <p className="leading-snug">{s.text}</p>
                        <Link href="/projects" className="mt-3 inline-flex items-center gap-3 font-medium text-copper">
                          <More />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
