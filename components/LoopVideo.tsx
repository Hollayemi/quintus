"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Muted looping clip that plays only while on screen.
 * Visitors can pause it and turn sound on.
 */
export function LoopVideo({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [visible, setVisible] = useState(false);
  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (visible && playing && !reduce) el.play().catch(() => setPlaying(false));
    else el.pause();
  }, [visible, playing, reduce]);

  return (
    <div className={`relative overflow-hidden bg-navy-deep ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-navy-deep/85 to-transparent p-4 text-white">
        <span className="label text-white/80">{label}</span>
        <span className="flex gap-2">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="label border border-white/40 px-3 py-1.5 hover:bg-white hover:text-navy-deep"
            aria-label={playing ? "Pause video" : "Play video"}
          >
            {playing ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            className="label border border-white/40 px-3 py-1.5 hover:bg-white hover:text-navy-deep"
            aria-label={muted ? "Turn sound on" : "Turn sound off"}
          >
            {muted ? "Sound off" : "Sound on"}
          </button>
        </span>
      </div>
    </div>
  );
}
