import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { PageHead } from "@/components/PageHead";
import { images } from "@/config/images";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote or discuss your project with Quintus Projects in Apapa, Lagos.",
};

export default function Contact() {
  return (
    <>
      <PageHead eyebrow="Contact" title="Tell us about your site.">
        Share a brief, a set of drawings or just an idea. We will come back with next
        steps and a site visit.
      </PageHead>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <ContactForm />
        </div>
        <aside className="md:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden bg-paper-2">
            <Image src={images.contactSide.src} alt={images.contactSide.alt} fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
          </div>
          <dl className="mt-8 border-t border-ink/30">
            {[
              ["Head office", <address key="a" className="not-italic">{site.address.map((l) => <span key={l} className="block">{l}</span>)}</address>],
              ["Phone", <a key="p" href={site.phoneHref} className="link-u">{site.phoneDisplay}</a>],
              ["Email", <a key="e" href={`mailto:${site.email}`} className="link-u">{site.email}</a>],
              ["Registration", `RC ${site.rc}`],
            ].map(([k, v]) => (
              <div key={k as string} className="grid grid-cols-3 gap-4 border-b border-ink/15 py-4">
                <dt className="label text-muted">{k}</dt>
                <dd className="col-span-2">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>
    </>
  );
}
