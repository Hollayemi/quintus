import Link from "next/link";
import { ParallaxBg, Reveal, WordsReveal } from "@/components/motion";

export function PageHead({
  eyebrow,
  title,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  image: { src: string; alt: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      <ParallaxBg src={image.src} />
      <div className="bp-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 md:pb-32 md:pt-32">
        <Reveal y={10}>
          <p className="label text-white/65">
            <Link href="/" className="hover:text-white">Quintus</Link> / {eyebrow}
          </p>
        </Reveal>
        <h1 className="display mt-6 max-w-4xl text-[2.6rem] sm:text-6xl md:text-7xl">
          <WordsReveal text={title} delay={0.15} />
        </h1>
        {children && (
          <Reveal delay={0.55} y={16}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80">{children}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
