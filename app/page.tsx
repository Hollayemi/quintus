import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { Btn, ImageReveal, Reveal } from "@/components/motion";
import { Eyebrow } from "@/components/Section";
import { SectorShowcase } from "@/components/SectorShowcase";
import { process, services, whyUs } from "@/config/site";
import { byId, images } from "@/config/images";

const featured = ["b-balconies", "i-living-kitchen", "t-pour", "b-concrete-timber", "i-kitchen"].map(byId);
const tag = { exterior: "Building", interior: "Interior", site: "Structure & site", industrial: "Industrial" } as const;

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4"><Eyebrow n="01">Who we are</Eyebrow></Reveal>
          <div className="md:col-span-8">
            <Reveal>
              <p className="display text-3xl normal-case sm:text-4xl md:text-[2.9rem]">
                One accountable partner from the first site visit to the last snag.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-8 text-[1.05rem] leading-relaxed text-ink/80 md:grid-cols-2">
              <Reveal delay={0.1}>
                <p>
                  We coordinate design, prepare detailed Bills of Quantities, manage
                  procurement, build, supervise and commission, so clients deal with one
                  accountable partner from start to finish.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  We work for institutional, corporate, public and private clients across
                  Nigeria, on new builds, renovations, fit-outs and infrastructure, with
                  transparent costing, documented quality control and safe sites.
                </p>
              </Reveal>
            </div>
            <div className="mt-10"><Btn href="/about" variant="navy">About the company</Btn></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <Eyebrow n="02">Services</Eyebrow>
              <h2 className="display mt-6 max-w-2xl text-4xl md:text-6xl">Engage us for one service, or all six.</h2>
            </Reveal>
            <Btn href="/services" variant="navy">All services</Btn>
          </div>

          <ol className="mt-14 border-t border-ink/30">
            {services.map((s, i) => (
              <li key={s.n} className="border-b border-ink/15">
                <Reveal delay={i * 0.04} y={16}>
                  <div className="grid items-baseline gap-2 py-6 transition-colors hover:bg-white/50 md:grid-cols-12 md:gap-8 md:px-3">
                    <span className="label text-copper-dark md:col-span-1">{s.n}</span>
                    <h3 className="display text-2xl normal-case md:col-span-5 md:text-3xl">{s.title}</h3>
                    <p className="text-ink/75 md:col-span-6">{s.scope}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* STRUCTURAL */}
      <section className="bg-navy-deep text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Reveal><Eyebrow n="03" light>Structure you can see</Eyebrow></Reveal>
          <div className="mt-6 grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <h2 className="display text-4xl md:text-6xl">Frame, rebar and pour, inspected at every stage.</h2>
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-5 md:pt-3">
              <p className="max-w-md text-lg leading-relaxed text-white/70">
                Our founder is a civil and structural engineer, and structure is where we
                start: reinforcement checked before the pour, stage sign-offs on every
                floor, and buildings that match the drawings.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-12">
            {images.structural.map((p, i) => (
              <figure key={p.src} className={["md:col-span-5", "md:col-span-4", "md:col-span-3"][i]}>
                <ImageReveal src={p.src} alt={p.alt} delay={i * 0.12} sizes="(min-width:768px) 40vw, 100vw" className="aspect-[3/4] !bg-navy" />
                <Reveal delay={0.4 + i * 0.12} y={8}>
                  <figcaption className="mt-3 flex gap-3 text-sm text-white/65">
                    <span className="label text-copper">0{i + 1}</span>
                    {p.caption}
                  </figcaption>
                </Reveal>
              </figure>
            ))}
          </div>

          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6">
            {["Structural", "Civil", "Mechanical", "Electrical", "Fire engineering", "Lighting design"].map((d) => (
              <li key={d} className="label text-white/70">{d}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTORS: hover to reveal */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow n="04">Sectors we serve</Eyebrow>
            <h2 className="display mt-6 max-w-2xl text-4xl md:text-6xl">Built for the way each sector works.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="label max-w-xs text-muted"><span className="hidden lg:inline">Hover</span><span className="lg:hidden">Tap</span> a sector to open it</p>
          </Reveal>
        </div>
        <Reveal className="mt-14" y={20}>
          <SectorShowcase />
        </Reveal>
      </section>

      {/* SELECTED WORKS */}
      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <Eyebrow n="05">Selected work</Eyebrow>
              <h2 className="display mt-6 text-4xl md:text-6xl">From frame to finish.</h2>
            </Reveal>
            <Btn href="/projects" variant="navy">Full gallery</Btn>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {featured.map((w, i) => (
              <li key={w.id} className={i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}>
                <Link href="/projects" className="group flex h-full flex-col">
                  <ImageReveal
                    src={w.src}
                    alt={w.note}
                    hoverZoom
                    delay={(i % 3) * 0.1}
                    sizes="(min-width:768px) 33vw, 50vw"
                    className={i === 0 ? "aspect-[4/5] md:aspect-auto md:min-h-[30rem] md:flex-1" : "aspect-[4/5]"}
                  />
                  <p className="label mt-3 text-copper-dark">{tag[w.category]}</p>
                  <p className="mt-1 font-medium">{w.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal>
          <Eyebrow n="06">How we work</Eyebrow>
          <h2 className="display mt-6 max-w-3xl text-4xl md:text-6xl">Six stages. Always in the same order.</h2>
        </Reveal>
        <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={(i % 3) * 0.1}>
                <div className="border-t-2 border-ink pt-5">
                  <span className="display block text-6xl text-transparent [-webkit-text-stroke:1.2px_var(--navy)]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display mt-5 text-xl normal-case">{p.title}</h3>
                  <p className="mt-3 text-ink/75">{p.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* WHY */}
      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
          <Reveal className="md:col-span-5">
            <Eyebrow n="07">Why Quintus</Eyebrow>
            <h2 className="display mt-6 text-4xl md:text-5xl">Cost certainty, programme discipline, quality you can verify.</h2>
          </Reveal>
          <ul className="space-y-6 md:col-span-7">
            {whyUs.map((w, i) => (
              <li key={w}>
                <Reveal delay={i * 0.05} y={14}>
                  <div className="flex gap-5 border-b border-ink/15 pb-6">
                    <span className="label mt-1 text-copper-dark">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-[1.05rem] leading-relaxed">{w}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-copper text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
          <Reveal>
            <h2 className="display max-w-2xl text-4xl md:text-5xl">Have a site, a set of drawings or just a brief?</h2>
          </Reveal>
          <Btn href="/contact" variant="navy">Start a conversation</Btn>
        </div>
      </section>
    </>
  );
}
