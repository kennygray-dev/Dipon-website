import { wrap } from "@/lib/styles";

// A compact page masthead: the page name set large with a solid white inner fill
// and a crisp outer outline (two styles), so it reads clearly against the navy.
// The word wipes open from left to right on load (see globals.css).
export default function WordmarkHero({
  word,
  subtitle,
}: {
  word: string;
  subtitle?: string;
  // Accepted for compatibility with existing callers; the title is text-only.
  image?: string;
  imageAlt?: string;
}) {
  // Size the word to the content width, kept well below the old oversized display.
  const maxPx = Math.min(118, Math.round(1180 / (word.length * 0.72)));

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
              style={{
                fontSize: `clamp(42px, 12vw, ${maxPx}px)`,
                color: "#FFFFFF",
                WebkitTextStroke: "2.5px rgba(255,249,235,0.55)",
                paintOrder: "stroke fill",
              }}
            >
              {word}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
