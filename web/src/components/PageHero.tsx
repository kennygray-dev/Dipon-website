import Eyebrow from "./Eyebrow";
import Heading from "./Heading";
import Reveal from "./Reveal";
import { wrap, leadLight } from "@/lib/styles";

export default function PageHero({
  eyebrow: eyebrowText,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-dipon-blue">
      {/* Geometric mesh, matching the homepage's brand pattern — more pronounced on inner headers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <svg width="100%" height="100%" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" fill="none">
          <path d="M1440 -40 L1100 260 L1100 640" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M1440 -40 L1300 340" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M1100 260 L860 60" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M1100 640 L820 500" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M1300 340 L1100 640" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M-40 700 L260 480 L560 620" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M260 480 L220 220" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M640 40 L760 180 L680 340" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M760 180 L940 220" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M420 340 L640 40" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M540 620 L680 340" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M960 620 L780 540" stroke="#FFF9EB" strokeWidth="1.5" />
          <circle cx="1100" cy="260" r="3.5" fill="#FFF9EB" />
          <circle cx="1300" cy="340" r="3.5" fill="#FFF9EB" />
          <circle cx="1100" cy="640" r="3.5" fill="#FFF9EB" />
          <circle cx="860" cy="60" r="3.5" fill="#FFF9EB" />
          <circle cx="820" cy="500" r="3.5" fill="#FFF9EB" />
          <circle cx="260" cy="480" r="3.5" fill="#FFF9EB" />
          <circle cx="220" cy="220" r="3.5" fill="#FFF9EB" />
          <circle cx="640" cy="40" r="3.5" fill="#FFF9EB" />
          <circle cx="760" cy="180" r="3.5" fill="#FFF9EB" />
          <circle cx="680" cy="340" r="3.5" fill="#FFF9EB" />
          <circle cx="940" cy="220" r="3.5" fill="#FFF9EB" />
          <circle cx="420" cy="340" r="3.5" fill="#FFF9EB" />
          <circle cx="540" cy="620" r="3.5" fill="#FFF9EB" />
          <circle cx="960" cy="620" r="3.5" fill="#FFF9EB" />
          <circle cx="780" cy="540" r="3.5" fill="#FFF9EB" />
        </svg>
      </div>

      {/* Grain texture across the blue background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Full-bleed image on the right, diagonal cut on its left edge */}
      {image && (
        <Reveal
          delay={120}
          className="pointer-events-none absolute top-0 right-0 bottom-10 hidden w-[48%] lg:block [clip-path:polygon(90px_0,100%_0,100%_100%,0_100%)]"
        >
          <img src={image} alt={imageAlt ?? ""} className="absolute inset-0 h-full w-full object-cover" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue/40 via-transparent to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
        </Reveal>
      )}

      <div className="relative px-gutter pt-[clamp(150px,17vw,210px)] pb-8 lg:pb-[clamp(64px,8vw,104px)]">
        <div className={wrap}>
          <Reveal className={`max-w-[900px] ${image ? "lg:max-w-[560px]" : ""}`}>
            <Eyebrow light>{eyebrowText}</Eyebrow>
            <Heading as="h1" light size="text-[clamp(34px,5vw,60px)]">
              {title}
            </Heading>
            <p className={`${leadLight} mt-[22px] max-w-[680px]`}>{intro}</p>
          </Reveal>
        </div>
      </div>

      {/* Compact image banner — mobile only, edge-to-edge with a diagonal top, matching the desktop full-bleed treatment */}
      {image && (
        <Reveal
          delay={150}
          className="relative aspect-[16/9] w-full overflow-hidden lg:hidden [clip-path:polygon(0_28px,100%_0,100%_100%,0_100%)]"
        >
          <img src={image} alt={imageAlt ?? ""} className="absolute inset-0 h-full w-full object-cover" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue/75 via-dipon-blue/10 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
        </Reveal>
      )}
    </section>
  );
}
