import { ImageReveal, Reveal } from "@/components/motion";
import { LoopVideo } from "@/components/LoopVideo";
import { Eyebrow } from "@/components/Section";
import { byId, caseMedia } from "@/config/images";
import { caseStudies } from "@/config/site";

type Study = (typeof caseStudies)[number];

export function CaseStudy({ study, n, flip = false }: { study: Study; n: number; flip?: boolean }) {
  const media = caseMedia[study.key];
  const landscape = media.video.aspect === "landscape";
  const videoCols = landscape ? "md:col-span-7" : "md:col-span-4";
  const textCols = landscape ? "md:col-span-5" : "md:col-span-8";

  return (
    <section className="mx-auto max-w-7xl px-6 pt-16 md:pt-24">
      <div className={`grid gap-10 md:grid-cols-12 md:gap-14 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
        <Reveal className={videoCols}>
          <LoopVideo
            src={media.video.src}
            poster={media.video.poster}
            label={media.video.label}
            className={landscape ? "aspect-video w-full" : "aspect-[9/16] max-h-[40rem] w-full"}
          />
        </Reveal>
        <div className={textCols}>
          <Reveal>
            <Eyebrow n={String(n).padStart(2, "0")}>Case study</Eyebrow>
            <h2 className="display mt-6 text-3xl md:text-5xl">{study.title}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">{study.text}</p>
          </Reveal>
          <dl className="mt-8 grid grid-cols-2 gap-x-8 border-t border-ink/30 sm:grid-cols-4">
            {study.facts.map(([k, v]) => (
              <div key={k} className="border-b border-ink/15 py-4">
                <dt className="label text-muted">{k}</dt>
                <dd className="mt-1 text-[0.95rem] font-medium leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {media.photos.map((id, i) => {
          const w = byId(id);
          return (
            <li key={id}>
              <ImageReveal src={w.src} alt={w.alt} sizes="(min-width:768px) 25vw, 50vw" delay={i * 0.1} className="aspect-[4/3]" />
              <p className="label mt-2 text-muted">{w.title}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
