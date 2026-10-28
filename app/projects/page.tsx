import type { Metadata } from "next";
import { Btn, ImageReveal, Reveal } from "@/components/motion";
import { LoopVideo } from "@/components/LoopVideo";
import { Gallery } from "@/components/Gallery";
import { PageHead } from "@/components/PageHead";
import { Eyebrow } from "@/components/Section";
import { byId, images, tankFarm } from "@/config/images";
import { caseStudy, register } from "@/config/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected buildings, interiors and civil works delivered by Quintus Projects.",
};

export default function Projects() {
  return (
    <>
      <PageHead eyebrow="Projects" title="Work you can walk through." image={images.pageHero.projects}>
        A sample of our buildings, interiors and site works. Full case studies and
        client references are available on request.
      </PageHead>

      <section className="mx-auto max-w-7xl px-6 pt-16 md:pt-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-4">
            <LoopVideo
              src={tankFarm.video.src}
              poster={tankFarm.video.poster}
              label={tankFarm.video.label}
              className="aspect-[9/16] max-h-[40rem] w-full"
            />
          </Reveal>
          <div className="md:col-span-8">
            <Reveal>
              <Eyebrow n="01">{caseStudy.eyebrow}</Eyebrow>
              <h2 className="display mt-6 text-3xl md:text-5xl">{caseStudy.title}</h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">{caseStudy.text}</p>
            </Reveal>
            <dl className="mt-8 grid grid-cols-2 gap-x-8 border-t border-ink/30 sm:grid-cols-4">
              {caseStudy.facts.map(([k, v]) => (
                <div key={k} className="border-b border-ink/15 py-4">
                  <dt className="label text-muted">{k}</dt>
                  <dd className="mt-1 font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["t-rebar", "t-pour", "t-slab", "t-pipework"].map((id, i) => {
                const w = byId(id);
                return (
                  <figure key={id}>
                    <ImageReveal src={w.src} alt={w.alt} sizes="(min-width:768px) 30vw, 50vw" delay={i * 0.1} className="aspect-[4/3]" />
                    <figcaption className="label mt-2 text-muted">{w.title}</figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal><Eyebrow n="02">All work</Eyebrow></Reveal>
        <div className="mt-8"><Gallery /></div>
      </section>

      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Eyebrow n="Register">Selected projects</Eyebrow>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[44rem] border-collapse text-left">
              <thead>
                <tr className="label border-b border-ink/40 text-muted">
                  <th className="py-3 pr-4 font-normal">Project</th>
                  <th className="py-3 pr-4 font-normal">Client</th>
                  <th className="py-3 pr-4 font-normal">Sector</th>
                  <th className="py-3 pr-4 font-normal">Location</th>
                  <th className="py-3 font-normal">Status</th>
                </tr>
              </thead>
              <tbody>
                {register.map((r) => (
                  <tr key={r.project} className="border-b border-ink/15 align-top">
                    <td className="py-5 pr-4 font-medium">{r.project}<span className="mt-1 block text-sm font-normal text-ink/65">{r.scope}</span></td>
                    <td className="py-5 pr-4">{r.client}</td>
                    <td className="py-5 pr-4">{r.sector}</td>
                    <td className="py-5 pr-4">{r.location}</td>
                    <td className="py-5"><span className="label border border-navy px-2 py-1 text-navy">Completed</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10"><Btn href="/contact" variant="navy">Request references</Btn></div>
        </div>
      </section>
    </>
  );
}
