import type { CSSProperties } from "react";
import { wrap } from "@/lib/styles";

// A bold page masthead: the page's name set huge and filled with a photo that
// reflects what the page is about, so the title itself carries the imagery.
// Without an image it falls back to a see-through outlined word. The word wipes
// open from left to right on load (pure CSS, see globals.css).
export default function WordmarkHero({
  word,
  subtitle,
  image,
  imageAlt,
}: {
  word: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}) {
  // Zalando Sans Expanded is wide; estimate a generous per-character width so
  // the word reaches full size without wrapping out of its column.
  const maxPx = Math.min(236, Math.round(1240 / (word.length * 0.72)));
  const size = `clamp(54px, 18vw, ${maxPx}px)`;

  const wordStyle: CSSProperties = image
    ? {
        fontSize: size,
        color: "transparent",
        WebkitTextStrokeWidth: "1.75px",
        WebkitTextStrokeColor: "rgba(255,249,235,0.42)",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.06), rgba(255,255,255,0.06)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center 32%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        filter: "drop-shadow(0 8px 26px rgba(0,0,0,0.5))",
      }
    : {
        fontSize: size,
        color: "transparent",
        WebkitTextStroke: "2px rgba(255,249,235,0.55)",
      };

  return (
    <section className="relative flex min-h-[clamp(360px,52vh,560px)] items-end overflow-hidden bg-dipon-blue">
      {/* Faint brand mesh */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.1]">
        <svg width="100%" height="100%" viewBox="0 0 1400 500" preserveAspectRatio="xMidYMid slice" fill="none">
          <path d="M1440 -20 L1120 200 L1180 480" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M1120 200 L900 60" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M-40 460 L240 300 L520 420" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M240 300 L200 120" stroke="#FFF9EB" strokeWidth="1.5" />
          <circle cx="1120" cy="200" r="3.5" fill="#FFF9EB" />
          <circle cx="900" cy="60" r="3.5" fill="#FFF9EB" />
          <circle cx="240" cy="300" r="3.5" fill="#FFF9EB" />
          <circle cx="200" cy="120" r="3.5" fill="#FFF9EB" />
        </svg>
      </div>

      <div className="relative w-full px-gutter pt-[clamp(120px,15vw,180px)] pb-[clamp(30px,5vw,66px)]">
        <div className={wrap}>
          {subtitle && (
            <p className="wordmark-sub mb-4 flex items-center gap-3 font-label text-[12px] font-semibold tracking-[1.6px] text-dipon-accent uppercase">
              <span aria-hidden="true" className="h-px w-9 bg-dipon-accent" />
              {subtitle}
            </p>
          )}
          <h1 className="wordmark-word font-display font-extrabold leading-[0.82] tracking-[-2px] whitespace-nowrap" style={wordStyle}>
            {word}
          </h1>
        </div>
      </div>

      {image && imageAlt ? <span className="sr-only">{imageAlt}</span> : null}
    </section>
  );
}
