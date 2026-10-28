export function Eyebrow({ n, children, light = false }: { n?: string; children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`label flex items-center gap-3 ${light ? "text-white/60" : "text-muted"}`}>
      {n && <span className="text-copper">{n}</span>}
      <span className={`h-px w-8 ${light ? "bg-white/30" : "bg-ink/30"}`} />
      {children}
    </p>
  );
}
