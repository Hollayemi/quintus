import Link from "next/link";

export function PageHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bp-grid relative overflow-hidden bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 md:pb-24 md:pt-20">
        <p className="label rise text-white/55">
          <Link href="/" className="hover:text-white">
            Quintus
          </Link>{" "}
          / {eyebrow}
        </p>
        <h1 className="display rise rise-2 mt-6 max-w-4xl text-[2.6rem] sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {children && (
          <p className="rise rise-3 mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
            {children}
          </p>
        )}
      </div>
    </section>
  );
}
