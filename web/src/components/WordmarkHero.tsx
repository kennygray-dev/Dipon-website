import { wrap } from "@/lib/styles";

// A compact page hero built around one large, outlined (see-through) word that
// wipes open from left to right on load and stays open — a lighter alternative
// to the image-on-the-right PageHero for listing pages. The wipe is a pure CSS
// animation (see globals.css) so it never depends on JS timing to become visible.
export default function WordmarkHero({ word, subtitle }: { word: string; subtitle?: string }) {
  // Cap the display size so long words ("Subsidiaries") still fit the container.
  const maxPx = Math.min(232, Math.round(1240 / (word.length * 0.56)));

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

      <div className="relative px-gutter pt-[clamp(116px,14vw,164px)] pb-[clamp(24px,4vw,52px)]">
        <div className={wrap}>
          {subtitle && (
            <p className="wordmark-sub mb-3 font-label text-[12px] font-semibold tracking-[1.6px] text-dipon-accent uppercase">
              {subtitle}
            </p>
          )}
          <h1
            className="wordmark-word font-display font-extrabold leading-[0.86] tracking-[-2px] text-transparent"
            style={{ fontSize: `clamp(60px, 20vw, ${maxPx}px)`, WebkitTextStroke: "2px rgba(255,249,235,0.55)" }}
          >
            {word}
          </h1>
        </div>
      </div>
    </section>
  );
}
