import { wrap } from "@/lib/styles";

// A compact page masthead: one large see-through (outlined) page name that wipes
// open from left to right on load. The word is sized to fit its column (narrower
// when a photo sits beside it) so it never runs under the image. Pass `image`
// for a clean photo panel on the right (desktop) / below (mobile).
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
  // Size the word to its available column, kept well below the old oversized display.
  const avail = image ? 540 : 1180;
  const cap = image ? 100 : 118;
  const maxPx = Math.min(cap, Math.round(avail / (word.length * 0.72)));

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

      {/* Clean photo panel — right side on desktop, blended into the navy */}
      {image && (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden lg:block">
          <img src={image} alt={imageAlt ?? ""} className="hero-kenburns absolute inset-0 h-full w-full object-cover" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-dipon-blue via-dipon-blue/55 to-transparent"
          />
        </div>
      )}

      <div className="relative px-gutter pt-[clamp(140px,16vw,196px)] pb-[clamp(40px,6vw,80px)]">
        <div className={wrap}>
          <div className={image ? "lg:max-w-[560px]" : "max-w-[940px]"}>
            {subtitle && (
              <p className="wordmark-sub mb-4 font-label text-[12px] font-semibold tracking-[1.6px] text-dipon-accent uppercase">
                {subtitle}
              </p>
            )}
            <h1
              className="wordmark-word font-display font-extrabold leading-[0.9] tracking-[-2px] whitespace-nowrap text-transparent"
              style={{ fontSize: `clamp(42px, 12vw, ${maxPx}px)`, WebkitTextStroke: "2px rgba(255,249,235,0.5)" }}
            >
              {word}
            </h1>
          </div>
        </div>
      </div>

      {/* Mobile photo band */}
      {image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden lg:hidden">
          <img src={image} alt={imageAlt ?? ""} className="hero-kenburns absolute inset-0 h-full w-full object-cover" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-dipon-blue via-dipon-blue/20 to-transparent"
          />
        </div>
      )}
    </section>
  );
}
