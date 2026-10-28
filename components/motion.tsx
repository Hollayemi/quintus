"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const EASE = [0.2, 0.7, 0.2, 1] as const; // soft settle
const WIPE = [0.76, 0, 0.24, 1] as const; // decisive wipe

/** Fade + rise when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const rm = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={rm ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Image that is uncovered by a wipe while the photo settles from a slight zoom.
 * Size it with className (e.g. "aspect-[4/5]").
 */
export function ImageReveal({
  src,
  alt,
  sizes,
  priority,
  className = "",
  delay = 0,
  from = "bottom",
  hoverZoom = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  delay?: number;
  from?: "bottom" | "left";
  hoverZoom?: boolean;
}) {
  const rm = useReducedMotion();
  const closed =
    from === "left" ? "inset(0 100% 0 0)" : "inset(100% 0 0 0)";
  return (
    <motion.div
      className={`relative overflow-hidden bg-paper-2 ${className}`}
      initial={rm ? false : { clipPath: closed }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 1.1, delay, ease: WIPE }}
    >
      <motion.div
        className="absolute inset-0"
        initial={rm ? false : { scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay, ease: EASE }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${hoverZoom ? "transition-transform duration-700 group-hover:scale-[1.05]" : ""}`}
        />
      </motion.div>
    </motion.div>
  );
}

/** Headline revealed word by word, each rising out of a mask. */
export function WordsReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const rm = useReducedMotion();
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            initial={rm ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.06, ease: EASE }}
          >
            {w}
            {i < text.split(" ").length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** One line of a headline rising out of a mask (use one per line). */
export function LineReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const rm = useReducedMotion();
  return (
    <span className={`block overflow-hidden pb-[0.1em] ${className}`}>
      <motion.span
        className="block"
        initial={rm ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Full-bleed background photo with a slow parallax drift; used behind page heroes. */
export function ParallaxBg({ src, alt = "" }: { src: string; alt?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rm = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", rm ? "0%" : "22%"]);
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden={!alt}>
      <motion.div
        className="absolute -inset-x-0 -top-[10%] h-[125%]"
        style={{ y }}
        initial={rm ? false : { scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: EASE }}
      >
        <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      {/* darkening so text always passes contrast, whatever photo is configured */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
    </div>
  );
}

type BtnVariant = "copper" | "outline" | "navy";

/** Link styled as a button: wipes in on scroll, fills on hover, arrow nudges. */
export function Btn({
  href,
  children,
  variant = "copper",
  delay = 0,
  arrow = true,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: BtnVariant;
  delay?: number;
  arrow?: boolean;
  className?: string;
}) {
  const rm = useReducedMotion();
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={rm ? false : { clipPath: "inset(0 100% 0 0)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: WIPE }}
    >
      <motion.span whileTap={{ scale: 0.97 }} className="inline-block">
        <Link href={href} className={`btn btn-${variant}`}>
          <span>{children}</span>
          {arrow && (
            <svg className="arrow" width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M0 6h16M11 1l5 5-5 5" />
            </svg>
          )}
        </Link>
      </motion.span>
    </motion.span>
  );
}
