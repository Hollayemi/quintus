import type { Metadata } from "next";
import Image from "next/image";
import { PageHead } from "@/components/PageHead";
import { Eyebrow } from "@/components/Section";
import { images } from "@/config/images";
import { site, team, values } from "@/config/site";

export const metadata: Metadata = {
  title: "Company",
  description: "Who Quintus Projects is, what we stand for and the people who run our projects.",
};

export default function About() {
  const [ceo, ...rest] = team;
  return (
    <>
      <PageHead eyebrow="Company" title="Builders with an engineer's discipline.">
        Quintus Projects Ltd is a Nigerian construction and project management
        company that delivers civil and building works on time, within budget and to
        specification.
      </PageHead>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <Eyebrow n="01">About us</Eyebrow>
          <dl className="mt-8 space-y-5 border-t border-ink/30 pt-6">
            {[
              ["Registered", `RC ${site.rc}`],
              ["Incorporated", String(site.established)],
              ["Head office", "Apapa, Lagos"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-ink/15 pb-4">
                <dt className="label text-muted">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="space-y-6 text-[1.1rem] leading-relaxed text-ink/85 md:col-span-8">
          <p>
            We take projects from concept to handover. Our team coordinates design,
            prepares detailed Bills of Quantities, manages procurement, builds,
            supervises and commissions, so clients deal with one accountable partner
            from start to finish.
          </p>
          <p>
            We started as a mechanical and electrical engineering company, working on
            lighting, plumbing and HVAC for hospitals, hotels, shopping malls and event
            centres. A few years later we added civil and structural works, and today
            we are a full-fledged engineering company able to meet the whole range of a
            client&apos;s engineering needs.
          </p>
          <p>
            We work for institutional, corporate, public and private clients across
            Nigeria, on new builds, renovations, fit-outs and infrastructure. Every
            project is run with the same discipline: transparent costing, documented
            quality control, safe sites and regular progress reporting.
          </p>
        </div>
      </section>

      <div className="relative mx-auto aspect-[21/9] max-w-7xl overflow-hidden bg-paper-2 md:mx-6 xl:mx-auto">
        <Image src={images.aboutBanner.src} alt={images.aboutBanner.alt} fill sizes="100vw" className="object-cover" />
      </div>

      <section className="mx-auto grid max-w-7xl gap-px bg-ink/15 px-0 py-0 md:my-0 md:grid-cols-2">
        {[
          ["Vision", "To be Nigeria's most trusted builder, known for delivering every project as promised."],
          ["Mission", "To deliver quality buildings and infrastructure that create lasting value for our clients and communities, through sound engineering, honest costing and disciplined project management."],
        ].map(([t, x]) => (
          <div key={t} className="bg-paper px-6 py-14 md:px-10 md:py-20">
            <p className="label text-copper-dark">{t}</p>
            <p className="display mt-5 text-2xl normal-case leading-tight md:text-3xl">{x}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Eyebrow n="02">Core values</Eyebrow>
        <ul className="mt-10 grid border-t border-ink/30 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => (
            <li key={v.title} className="border-b border-ink/15 py-6 pr-6 lg:border-b-0 lg:border-r lg:pl-6 lg:first:pl-0 lg:last:border-r-0">
              <span className="label text-copper-dark">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display mt-3 text-xl normal-case">{v.title}</h3>
              <p className="mt-2 text-ink/75">{v.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-navy-deep text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Eyebrow n="03" light>Leadership</Eyebrow>
          <div className="mt-10 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="display text-4xl md:text-5xl">{ceo.name}</p>
              <p className="label mt-3 text-copper">{ceo.role}</p>
              <p className="mt-6 text-lg leading-relaxed text-white/75">{ceo.bio}</p>
            </div>
            <ul className="grid gap-px bg-white/15 sm:grid-cols-2 md:col-span-7">
              {rest.map((m) => (
                <li key={m.name} className="bg-navy-deep p-6">
                  <p className="display text-xl normal-case">{m.name}</p>
                  <p className="label mt-2 text-copper">{m.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">{m.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
