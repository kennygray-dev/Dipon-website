import { wrap } from "@/lib/styles";

// A modern page masthead: a bold, solid page name that wipes open on load over a
// deep navy ground with a soft accent glow, a kicker rule, and a hairline base
// accent. Pass `image` for a clean photo panel on the right (desktop) / below
// (mobile). The wipe is pure CSS (see globals.css) so it never relies on JS.
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
  return (
    <section className="relative overflow-hidden bg-dipon-blue">
      {/* Soft brand-accent glow for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(130%_120%_at_88%_-15%,rgba(253,128,46,0.16),transparent_55%)]"
      />
      {/* Faint brand mesh */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.08]">
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
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] overflow-hidden lg:block">
          <img src={image} alt={imageAlt ?? ""} className="hero-kenburns absolute inset-0 h-full w-full object-cover" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-dipon-blue via-dipon-blue/55 to-transparent"
          />
        </div>
      )}

      <div className="relative px-gutter pt-[clamp(140px,16vw,200px)] pb-[clamp(44px,7vw,92px)]">
        <div className={wrap}>
          <div className={image ? "lg:max-w-[600px]" : "max-w-[940px]"}>
            {subtitle && (
              <p className="wordmark-sub mb-5 flex items-center gap-3 font-label text-[12px] font-semibold tracking-[0.18em] text-dipon-accent uppercase">
                <span aria-hidden="true" className="h-px w-10 shrink-0 bg-dipon-accent" />
                {subtitle}
              </p>
            )}
            <h1 className="wordmark-word font-display text-[clamp(44px,8.5vw,104px)] font-extrabold leading-[0.95] tracking-[-2px] text-balance text-dipon-cream">
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

      {/* Base hairline accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-dipon-accent/45 to-transparent"
      />
    </section>
  );
}
