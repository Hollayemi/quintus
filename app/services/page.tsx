import type { Metadata } from "next";
import { Btn, ImageReveal, Reveal } from "@/components/motion";
import { PageHead } from "@/components/PageHead";
import { Eyebrow } from "@/components/Section";
import { byId, images } from "@/config/images";
import { disciplines, process, qhse, sectors, services } from "@/config/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Building construction, civil works, renovation, project management, cost consultancy and facility maintenance.",
};

export default function Services() {
  return (
    <>
      <PageHead eyebrow="Services" title="Six services. One accountable team." image={images.pageHero.services}>
        Engage us individually, or as a single design-and-build package from costing to
        handover.
      </PageHead>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <ol className="border-t border-ink/30">
          {services.map((s) => (
            <li key={s.n} className="border-b border-ink/15">
              <Reveal y={18}>
                <div className="grid gap-3 py-9 md:grid-cols-12 md:gap-8">
                  <span className="display text-5xl text-transparent [-webkit-text-stroke:1.2px_var(--navy)] md:col-span-2">{s.n}</span>
                  <h2 className="display text-3xl normal-case md:col-span-5">{s.title}</h2>
                  <p className="text-lg text-ink/75 md:col-span-5">{s.scope}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <div className="mx-auto max-w-7xl md:px-6">
        <ImageReveal src={images.servicesBanner.src} alt={images.servicesBanner.alt} sizes="100vw" className="aspect-[4/3] md:aspect-[21/9]" />
      </div>

      <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
        <Reveal>
          <Eyebrow n="02">In the field</Eyebrow>
          <h2 className="display mt-6 max-w-3xl text-4xl md:text-5xl">Roads, drainage and buildings, delivered by our own crews.</h2>
        </Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {["r-5e4a25", "r-b7dbce", "h-white-long", "t-bund"].map((id, i) => {
            const w = byId(id);
            return (
              <li key={id}>
                <ImageReveal src={w.src} alt={w.alt} sizes="(min-width:768px) 25vw, 50vw" delay={i * 0.1} className="aspect-[4/5]" />
                <p className="label mt-2 text-muted">{w.title}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Eyebrow n="03">Engineering disciplines</Eyebrow>
        <h2 className="display mt-6 max-w-3xl text-4xl md:text-5xl">A full-fledged engineering company, not just a contractor.</h2>
        <ul className="mt-10 flex flex-wrap gap-3">
          {disciplines.map((d) => (
            <li key={d} className="border border-ink/25 px-5 py-3 font-medium">{d}</li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Eyebrow n="04">How we work</Eyebrow>
          <ol className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <li key={p.title} className="border-t-2 border-ink pt-5">
                <span className="display block text-6xl text-transparent [-webkit-text-stroke:1.2px_var(--navy)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display mt-5 text-xl normal-case">{p.title}</h3>
                <p className="mt-3 text-ink/75">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Eyebrow n="05">Quality, health, safety & environment</Eyebrow>
        <p className="display mt-6 max-w-3xl text-3xl normal-case md:text-4xl">Planned into every project, not inspected in at the end.</p>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {qhse.map((g) => (
            <div key={g.title}>
              <h3 className="label border-b border-ink/30 pb-3 text-copper-dark">{g.title}</h3>
              <ul className="mt-5 space-y-4">
                {g.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-ink/80">
                    <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-copper" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-deep text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Eyebrow n="06" light>Sectors we serve</Eyebrow>
          <ul className="mt-10 grid gap-x-14 border-t border-white/25 md:grid-cols-2">
            {sectors.map((s, i) => (
              <li key={s.title} className="border-b border-white/15 py-6">
                <Reveal delay={(i % 2) * 0.08} y={16}>
                  <h3 className="display text-xl normal-case">{s.title}</h3>
                  <p className="mt-2 text-white/65">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-12"><Btn href="/contact">Discuss your project</Btn></div>
        </div>
      </section>
    </>
  );
}
