export default function FeatureCard({
  num,
  title,
  desc,
  tone = "cream",
  className = "",
}: {
  num: string;
  title: string;
  desc: string;
  tone?: "cream" | "white";
  className?: string;
}) {
  return (
    <div
      className={`group relative h-full overflow-hidden px-7 pt-8 pb-[34px] transition-[transform,box-shadow] duration-300 ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(35,61,76,0.16)] ${
        tone === "cream" ? "bg-dipon-surface" : "bg-white"
      } ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <span
        className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full font-label text-[11px] font-bold text-dipon-accent-deep shadow-[0_2px_6px_rgba(35,61,76,0.1)] transition-colors duration-300 group-hover:bg-dipon-accent group-hover:text-white ${
          tone === "cream" ? "bg-white" : "bg-dipon-surface"
        }`}
      >
        {num}
      </span>
      <h3 className="relative z-10 mt-3.5 mb-2.5 font-display text-[19px] font-bold tracking-[-0.3px] text-dipon-primary">
        {title}
      </h3>
      <p className="relative z-10 m-0 font-body text-sm leading-[1.55] text-dipon-secondary">{desc}</p>
    </div>
  );
}
