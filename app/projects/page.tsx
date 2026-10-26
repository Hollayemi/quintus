import type { Metadata } from "next";
import { Btn } from "@/components/motion";
import { Gallery } from "@/components/Gallery";
import { PageHead } from "@/components/PageHead";
import { Eyebrow } from "@/components/Section";
import { images } from "@/config/images";
import { register } from "@/config/site";

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

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Gallery />
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
