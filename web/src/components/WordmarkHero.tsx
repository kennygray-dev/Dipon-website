import type { CSSProperties } from "react";
import { wrap } from "@/lib/styles";

// A compact page masthead: the page name set large, its inside filled with a
// photo that reflects the page and its edge drawn as a crisp outline, so it
// reads clearly against the navy. The word wipes open on load (see globals.css).
// Falls back to an outline-only word when no image is given.
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
  // Size the word to the content width, kept well below the old oversized display.
  const maxPx = Math.min(118, Math.round(1180 / (word.length * 0.72)));
  const size = `clamp(42px, 12vw, ${maxPx}px)`;

  const wordStyle: CSSProperties = image
    ? {
        fontSize: size,
        color: "transparent",
        WebkitTextStrokeWidth: "2px",
        WebkitTextStrokeColor: "rgba(255,249,235,0.72)",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center 35%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        filter: "drop-shadow(0 6px 20px rgba(0,0,0,0.45))",
      }
    : {
        fontSize: size,
        color: "transparent",
        WebkitTextStroke: "2px rgba(255,249,235,0.6)",
      };

  return (
    <section className="relative overflow-hidden bg-dipon-blue">
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

      <div className="relative px-gutter pt-[clamp(140px,16vw,196px)] pb-[clamp(40px,6vw,80px)]">
        <div className={wrap}>
          <div className="max-w-[1000px]">
            {subtitle && (
              <p className="wordmark-sub mb-4 font-label text-[12px] font-semibold tracking-[1.6px] text-dipon-accent uppercase">
                {subtitle}
              </p>
            )}
            <h1
              className="wordmark-word font-display font-extrabold leading-[0.9] tracking-[-2px] whitespace-nowrap"
              style={wordStyle}
            >
              {word}
            </h1>
          </div>
        </div>
      </div>

      {image && imageAlt ? <span className="sr-only">{imageAlt}</span> : null}
    </section>
  );
}
