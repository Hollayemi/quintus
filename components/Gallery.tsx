"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { categories, works, type Category } from "@/config/images";

export function Gallery() {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  const list = filter === "all" ? works : works.filter((w) => w.category === filter);

  const step = useCallback(
    (d: number) =>
      setOpen((i) => (i === null ? i : (i + d + list.length) % list.length)),
    [list.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      opener.current?.focus();
    };
  }, [open, step]);

  const current = open !== null ? list[open] : null;

  return (
    <div>
      <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {categories.map((c) => {
          const count = c.key === "all" ? works.length : works.filter((w) => w.category === c.key).length;
          const on = filter === c.key;
          return (
            <button
              key={c.key}
              role="tab"
              aria-selected={on}
              onClick={() => setFilter(c.key)}
              className={`label border px-4 py-2.5 transition-colors ${
                on
                  ? "border-navy bg-navy text-white"
                  : "border-ink/25 text-ink hover:border-ink"
              }`}
            >
              {c.label} <span className={on ? "text-white/60" : "text-muted"}>{String(count).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {list.map((w, i) => (
          <li key={w.id}>
            <button
              type="button"
              className="group block w-full text-left"
              onClick={(e) => {
                opener.current = e.currentTarget;
                setOpen(i);
              }}
              aria-label={`Enlarge: ${w.title}`}
            >
              <span className="relative block aspect-[4/5] overflow-hidden bg-paper-2">
                <Image
                  src={w.src}
                  alt={`${w.title}. ${w.note}`}
                  fill
                  sizes="(min-width:1024px) 22vw, (min-width:640px) 30vw, 46vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </span>
              <span className="mt-3 block">
                <span className="label block text-copper-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block text-[0.95rem] font-medium leading-snug">{w.title}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-50 flex flex-col bg-navy-deep/95 text-white"
          onClick={() => setOpen(null)}
        >
          <div className="flex items-center justify-between px-6 py-4" onClick={(e) => e.stopPropagation()}>
            <p className="label text-white/60">
              {String((open ?? 0) + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
            </p>
            <button ref={closeRef} onClick={() => setOpen(null)} className="label border border-white/30 px-4 py-2 hover:bg-white hover:text-navy-deep">
              Close
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-20">
            <button
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-3xl text-white/70 hover:text-white md:left-6"
            >
              ←
            </button>
            <div className="relative h-full w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
              <Image
                key={current.id}
                src={current.src}
                alt={`${current.title}. ${current.note}`}
                fill
                sizes="(min-width:768px) 48rem, 100vw"
                className="object-contain"
              />
            </div>
            <button
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); step(1); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-3xl text-white/70 hover:text-white md:right-6"
            >
              →
            </button>
          </div>

          <div className="px-6 py-5 text-center" onClick={(e) => e.stopPropagation()}>
            <p className="display text-xl">{current.title}</p>
            <p className="mt-1 text-sm text-white/65">{current.note}</p>
          </div>
        </div>
      )}
    </div>
  );
}
