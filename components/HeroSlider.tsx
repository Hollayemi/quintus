"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Btn, LineReveal, Reveal } from "@/components/motion";
import { heroSlides } from "@/config/images";
import { site } from "@/config/site";

const WIPE = [0.76, 0, 0.24, 1] as const;
const INTERVAL = 6500;

export function HeroSlider() {
  const rm = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (rm || heroSlides.length < 2) return;
    const t = setTimeout(() => setI((n) => (n + 1) % heroSlides.length), INTERVAL);
    return () => clearTimeout(t); // re-armed on every change, so manual clicks reset the timer
  }, [i, rm]);

  return (
    <section className="relative isolate flex min-h-[34rem] items-center overflow-hidden bg-navy-deep text-white md:h-[calc(100svh-7.4rem)] md:max-h-[58rem]">
      {/* Background: whole stage is wiped open on load, slides crossfade with a slow zoom */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={rm ? false : { clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 1.4, ease: WIPE }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: rm ? 1 : 1.14 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.3, ease: "easeInOut" },
              scale: { duration: (INTERVAL + 1500) / 1000, ease: "linear" },
            }}
          >
            <Image
              src={heroSlides[i].src}
              alt={heroSlides[i].alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/60 to-navy-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-navy-deep/30" />
      </motion.div>

      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-0">
        <Reveal y={10} delay={0.5}>
          <p className="label text-white/75">Civil · Structural · Building works — Lagos, Nigeria</p>
        </Reveal>
        <h1 className="display mt-7 text-[2.9rem] sm:text-6xl lg:text-[4.8rem] xl:text-[5.6rem]">
          <LineReveal delay={0.7}>Engineered, built</LineReveal>
          <LineReveal delay={0.82}>and handed over</LineReveal>
          <LineReveal delay={0.94} className="text-copper">as promised.</LineReveal>
        </h1>
        <Reveal delay={1.25} y={16}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/85">
            {site.legalName} takes projects from concept to handover, on time, within
            budget and to specification.
          </p>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-4">
          <Btn href="/projects" delay={1.45}>See our work</Btn>
          <Btn href="/contact" variant="outline" delay={1.57} arrow={false}>Request a quote</Btn>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-7xl items-end gap-3 px-6 pb-7">
          {heroSlides.map((s, n) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setI(n)}
              aria-label={`Show slide ${n + 1}: ${s.label}`}
              aria-current={n === i}
              className="group w-full max-w-[9rem] text-left"
            >
              <span className="relative block h-px w-full bg-white/30">
                {n === i && (
                  <motion.span
                    key={`bar-${i}`}
                    className="absolute inset-y-0 left-0 block h-[2px] w-full origin-left bg-copper"
                    initial={{ scaleX: rm ? 1 : 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                  />
                )}
              </span>
              <span className={`label mt-2 block transition-colors ${n === i ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                {String(n + 1).padStart(2, "0")} {s.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
