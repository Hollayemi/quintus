import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Section";
import { process, sectors, services, site, whyUs } from "@/config/site";
import { byId, images } from "@/config/images";

const featured = ["b-balconies", "i-living-kitchen", "s-pour", "b-concrete-timber", "i-kitchen"].map(byId);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bp-grid relative overflow-hidden bg-navy-deep text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-12 md:grid-cols-12 md:gap-8 md:pb-24 md:pt-20">
          <div className="flex flex-col justify-between md:col-span-7">
            <div>
              <p className="label rise text-white/60">
                Civil · Structural · Building works — Lagos, Nigeria
              </p>
              <h1 className="display rise rise-2 mt-8 text-[2.9rem] sm:text-6xl lg:text-[4.4rem] xl:text-[5rem]">
                Engineered, built
                <br />
                and handed over
                <br />
                <span className="text-copper">as promised.</span>
              </h1>
              <p className="rise rise-3 mt-8 max-w-xl text-lg leading-relaxed text-white/75">
                {site.legalName} takes projects from concept to handover: costing, design
                coordination, construction and commissioning, with one accountable team on
                time, within budget and to specification.
              </p>
              <div className="rise rise-3 mt-10 flex flex-wrap gap-4">
                <Link href="/projects" className="bg-copper px-7 py-4 font-medium text-white transition-colors hover:bg-copper-dark">
                  See our work
                </Link>
                <Link href="/contact" className="border border-white/35 px-7 py-4 font-medium transition-colors hover:bg-white hover:text-navy-deep">
                  Request a quote
                </Link>
              </div>
            </div>

            <dl className="rise rise-3 mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/20 pt-6">
              {[
                ["Since", String(site.established)],
                ["Services", "6"],
                ["Process", "6 stages"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="label text-white/50">{k}</dt>
                  <dd className="display mt-2 text-2xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="rise rise-2 md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-navy">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                priority
                sizes="(min-width:768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex items-center gap-3 text-white/60">
              <span className="dim w-16" aria-hidden />
              <figcaption className="label">Fig. 01 — Concrete frame under construction</figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow n="01">Who we are</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="display text-3xl normal-case sm:text-4xl md:text-[2.9rem]">
              One accountable partner from the first site visit to the last snag.
            </p>
            <div className="mt-10 grid gap-8 text-[1.05rem] leading-relaxed text-ink/80 md:grid-cols-2">
              <p>
                We coordinate design, prepare detailed Bills of Quantities, manage
                procurement, build, supervise and commission, so clients deal with one
                accountable partner from start to finish.
              </p>
              <p>
                We work for institutional, corporate, public and private clients across
                Nigeria, on new builds, renovations, fit-outs and infrastructure, with
                transparent costing, documented quality control and safe sites.
              </p>
            </div>
            <Link href="/about" className="link-u mt-10 inline-block font-medium text-navy">
              About the company →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow n="02">Services</Eyebrow>
              <h2 className="display mt-6 max-w-2xl text-4xl md:text-6xl">
                Engage us for one service, or all six.
              </h2>
            </div>
            <Link href="/services" className="link-u font-medium text-navy">
              All services →
            </Link>
          </div>

          <ol className="mt-14 border-t border-ink/30">
            {services.map((s) => (
              <li key={s.n} className="group grid items-baseline gap-2 border-b border-ink/15 py-6 transition-colors hover:bg-white/50 md:grid-cols-12 md:gap-8 md:px-3">
                <span className="label text-copper-dark md:col-span-1">{s.n}</span>
                <h3 className="display text-2xl normal-case md:col-span-5 md:text-3xl">{s.title}</h3>
                <p className="text-ink/75 md:col-span-6">{s.scope}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* STRUCTURAL */}
      <section className="bg-navy-deep text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Eyebrow n="03" light>Structure you can see</Eyebrow>
          <div className="mt-6 grid gap-10 md:grid-cols-12">
            <h2 className="display text-4xl md:col-span-7 md:text-6xl">
              Frame, rebar and pour, inspected at every stage.
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-white/70 md:col-span-5 md:pt-3">
              Our founder is a civil and structural engineer, and structure is where we
              start: reinforcement checked before the pour, stage sign-offs on every
              floor, and buildings that match the drawings.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-12">
            {images.structural.map((p, i) => (
              <figure key={p.src} className={["md:col-span-5", "md:col-span-4", "md:col-span-3"][i]}>
                <div className="relative aspect-[3/4] overflow-hidden bg-navy">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="mt-3 flex gap-3 text-sm text-white/65">
                  <span className="label text-copper">0{i + 1}</span>
                  {p.caption}
                </figcaption>
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

      {/* SELECTED WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow n="04">Selected work</Eyebrow>
            <h2 className="display mt-6 text-4xl md:text-6xl">From frame to finish.</h2>
          </div>
          <Link href="/projects" className="link-u font-medium text-navy">
            Full gallery →
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {featured.map((w, i) => (
            <li key={w.id} className={i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}>
              <Link href="/projects" className="group block">
                <div className={`relative overflow-hidden bg-paper-2 ${i === 0 ? "aspect-[4/5] md:aspect-auto md:h-full md:min-h-[34rem]" : "aspect-[4/5]"}`}>
                  <Image
                    src={w.src}
                    alt={w.note}
                    fill
                    sizes="(min-width:768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="label mt-3 text-copper-dark">{w.category === "exterior" ? "Building" : w.category === "interior" ? "Interior" : "Structure & site"}</p>
                <p className="mt-1 font-medium">{w.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* PROCESS */}
      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Eyebrow n="05">How we work</Eyebrow>
          <h2 className="display mt-6 max-w-3xl text-4xl md:text-6xl">
            Six stages. Always in the same order.
          </h2>
          <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <li key={p.title} className="border-t-2 border-ink pt-5">
                <span className="display block text-6xl text-transparent [-webkit-text-stroke:1.2px_var(--navy)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-5 text-xl normal-case">{p.title}</h3>
                <p className="mt-3 text-ink/75">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTORS + WHY */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow n="06">Sectors we serve</Eyebrow>
            <ul className="mt-8 border-t border-ink/30">
              {sectors.map((s) => (
                <li key={s.title} className="grid gap-1 border-b border-ink/15 py-5 sm:grid-cols-5 sm:gap-6">
                  <h3 className="display text-xl normal-case sm:col-span-2">{s.title}</h3>
                  <p className="text-ink/75 sm:col-span-3">{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow n="07">Why Quintus</Eyebrow>
            <ul className="mt-8 space-y-6">
              {whyUs.map((w, i) => (
                <li key={w} className="flex gap-5">
                  <span className="label mt-1 text-copper-dark">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[1.05rem] leading-relaxed">{w}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-copper text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
          <h2 className="display max-w-2xl text-4xl md:text-5xl">
            Have a site, a set of drawings or just a brief?
          </h2>
          <Link href="/contact" className="bg-navy-deep px-8 py-4 font-medium text-white transition-colors hover:bg-white hover:text-navy-deep">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
