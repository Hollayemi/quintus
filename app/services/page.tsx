import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { Eyebrow } from "@/components/Section";
import { images } from "@/config/images";
import { disciplines, process, qhse, sectors, services } from "@/config/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Building construction, civil works, renovation, project management, cost consultancy and facility maintenance.",
};

export default function Services() {
  return (
    <>
      <PageHead eyebrow="Services" title="Six services. One accountable team.">
        Engage us individually, or as a single design-and-build package from costing to
        handover.
      </PageHead>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <ol className="border-t border-ink/30">
          {services.map((s) => (
            <li key={s.n} className="grid gap-3 border-b border-ink/15 py-9 md:grid-cols-12 md:gap-8">
              <span className="display text-5xl text-transparent [-webkit-text-stroke:1.2px_var(--navy)] md:col-span-2">{s.n}</span>
              <h2 className="display text-3xl normal-case md:col-span-5">{s.title}</h2>
              <p className="text-lg text-ink/75 md:col-span-5">{s.scope}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="relative mx-auto aspect-[21/9] max-w-7xl overflow-hidden bg-paper-2 md:mx-6 xl:mx-auto">
        <Image src={images.servicesBanner.src} alt={images.servicesBanner.alt} fill sizes="100vw" className="object-cover" />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Eyebrow n="02">Engineering disciplines</Eyebrow>
        <h2 className="display mt-6 max-w-3xl text-4xl md:text-5xl">A full-fledged engineering company, not just a contractor.</h2>
        <ul className="mt-10 flex flex-wrap gap-3">
          {disciplines.map((d) => (
            <li key={d} className="border border-ink/25 px-5 py-3 font-medium">{d}</li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Eyebrow n="03">How we work</Eyebrow>
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
        <Eyebrow n="04">Quality, health, safety & environment</Eyebrow>
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
          <Eyebrow n="05" light>Sectors we serve</Eyebrow>
          <ul className="mt-10 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <li key={s.title} className="bg-navy-deep p-7">
                <h3 className="display text-xl normal-case">{s.title}</h3>
                <p className="mt-3 text-white/65">{s.text}</p>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="mt-12 inline-block bg-copper px-8 py-4 font-medium text-white hover:bg-copper-dark">Discuss your project</Link>
        </div>
      </section>
    </>
  );
}
