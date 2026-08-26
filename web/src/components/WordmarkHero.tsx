import { wrap } from "@/lib/styles";

// A compact page hero built around one large, outlined (see-through) word that
// wipes open from left to right on load and stays open — a lighter alternative
// to the image-on-the-right PageHero for listing pages. The wipe is a pure CSS
// animation (see globals.css) so it never depends on JS timing to become visible.
// Pass `image` to keep a photo on the right (the word then sizes to the left column).
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
  // Cap the display size so the word fits its column (narrower when an image sits beside it).
  const avail = image ? 600 : 1240;
  const cap = image ? 148 : 232;
  const maxPx = Math.min(cap, Math.round(avail / (word.length * 0.56)));

  return (
    <section className={`relative overflow-hidden bg-dipon-blue ${image ? "lg:min-h-[420px]" : ""}`}>
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

      {/* Image on the right (desktop), diagonal cut on its left edge */}
      {image && (
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-[44%] lg:block [clip-path:polygon(90px_0,100%_0,100%_100%,0_100%)]">
          <img src={image} alt={imageAlt ?? ""} className="absolute inset-0 h-full w-full object-cover" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue/45 via-transparent to-transparent"
          />
        </div>
      )}

      <div className="relative flex h-full flex-col justify-center px-gutter pt-[clamp(116px,14vw,164px)] pb-[clamp(24px,4vw,52px)]">
        <div className={wrap}>
          <div className={image ? "lg:max-w-[600px]" : ""}>
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
      </div>

      {/* Compact image banner — mobile only, edge-to-edge with a diagonal top */}
      {image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden lg:hidden [clip-path:polygon(0_28px,100%_0,100%_100%,0_100%)]">
          <img src={image} alt={imageAlt ?? ""} className="absolute inset-0 h-full w-full object-cover" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue/75 via-dipon-blue/10 to-transparent"
          />
        </div>
      )}
    </section>
  );
}
