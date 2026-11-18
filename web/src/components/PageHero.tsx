import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { ArrowIcon, LogoMotif } from "./icons";
import { wrap, leadLight } from "@/lib/styles";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

type Featured = { label: string; title: string; href: string };

// Inner-page masthead: a solid navy block carries the title and intro, an
// oversized faint brand geometry sits on the right, and — when a page supplies
// one — a photo band drops below with a "featured" card straddling the seam.
export default function PageHero({
  eyebrow: eyebrowText,
  title,
  intro,
  image,
  imageAlt,
  featured,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  featured?: Featured;
}) {
  return (
    <section className="relative overflow-hidden bg-dipon-blue">
      {/* Oversized DIPON "D" mark, faint, bleeding off the right of the block */}
      <div
        aria-hidden="true"
        data-open
        data-parallax="0.08"
        className="pointer-events-none absolute top-1/2 right-[-5%] h-[165%] -translate-y-1/2 opacity-[0.07]"
      >
        <LogoMotif className="h-full w-auto" />
      </div>

      {/* Text block */}
      <div
        className={`relative px-gutter pt-[clamp(140px,16vw,200px)] ${
          image ? "pb-[clamp(44px,6vw,80px)]" : "pb-[clamp(56px,8vw,112px)]"
        }`}
      >
        <div className={wrap}>
          <Reveal className="max-w-[880px]">
            <Eyebrow light>{eyebrowText}</Eyebrow>
            <h1 className="mt-3.5 text-balance font-display text-[clamp(33px,5.2vw,66px)] font-extrabold leading-[1.02] tracking-[-1.5px] text-dipon-cream">
              {title}
            </h1>
            <p className={`${leadLight} mt-5 max-w-[600px]`}>{intro}</p>
          </Reveal>
        </div>
      </div>

      {/* Photo band + floating featured card */}
      {image && (
        <div className="relative">
          <Reveal
            delay={120}
            className="relative block aspect-[16/9] w-full overflow-hidden sm:aspect-[16/7] lg:aspect-[16/6]"
          >
            <img src={image} alt={imageAlt ?? ""} className="hero-kenburns absolute inset-0 h-full w-full object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-dipon-blue/30 to-transparent" />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.35] mix-blend-overlay"
              style={{ backgroundImage: GRAIN }}
            />
          </Reveal>

          {featured && (
            <Reveal
              fadeOnly
              delay={150}
              className="mx-gutter mt-5 block lg:absolute lg:top-0 lg:right-[max(clamp(20px,5vw,60px),calc((100%-1320px)/2))] lg:mx-0 lg:mt-0 lg:w-[360px] lg:-translate-y-1/2"
            >
              <Link
                href={featured.href}
                className="group block w-full border border-black/5 bg-dipon-cream p-6 no-underline shadow-[0_18px_44px_-20px_rgba(16,25,31,0.45)] transition-transform duration-300 hover:-translate-y-0.5 lg:p-7"
              >
                <p className="font-label text-[11px] font-semibold tracking-[1.6px] text-dipon-accent uppercase">
                  {featured.label}
                </p>
                <div className="mt-3 flex items-center justify-between gap-5">
                  <h3 className="font-display text-[clamp(18px,1.7vw,22px)] font-bold leading-[1.15] tracking-[-0.3px] text-dipon-primary">
                    {featured.title}
                  </h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-dipon-accent text-white transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
                    <ArrowIcon width={16} height={7} />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}
        </div>
      )}
    </section>
  );
}
