import Link from "next/link";
import CtaButton from "./CtaButton";
import Eyebrow from "./Eyebrow";
import CardMedia from "./CardMedia";
import Heading from "./Heading";
import Reveal from "./Reveal";
import { ArrowIcon, LogoMark } from "./icons";
import { section, wrap, lead } from "@/lib/styles";

const SUBSIDIARIES = [
  {
    num: "01",
    slug: "dipon-construction",
    name: "DIPON Construction Limited",
    short: "Construction",
    desc: "Civil engineering, building construction, and general contracting.",
    badge: "Core Build",
    image: "https://images.pexels.com/photos/30396647/pexels-photo-30396647.jpeg?auto=compress&cs=tinysrgb&w=1200",
    video: "/cards/construction.mp4",
  },
  {
    num: "02",
    slug: "dipon-global-resources",
    name: "DIPON Global Resources Limited",
    short: "Global Resources",
    desc: "Trading, supply chain, real estate, agriculture, and logistics.",
    badge: "Supply Chain",
    image: "https://images.pexels.com/photos/36143083/pexels-photo-36143083.jpeg?auto=compress&cs=tinysrgb&w=1200",
    video: "/cards/trade.mp4",
  },
  {
    num: "03",
    slug: "dipon-infrastructure",
    name: "DIPON Infrastructure Limited",
    short: "Infrastructure",
    desc: "Renewable energy, power infrastructure, housing development, and environmental services.",
    badge: "Power & Property",
    image: "https://images.pexels.com/photos/40747788/pexels-photo-40747788.jpeg?auto=compress&cs=tinysrgb&w=1200",
    video: "/cards/power.mp4",
  },
];

export default function Subsidiaries() {
  return (
    <section id="subsidiaries" className={`${section} bg-dipon-surface`}>
      <div className={wrap}>
        <Reveal className="mb-12 max-w-[640px]">
          <Eyebrow>About DIPON Group</Eyebrow>
          <Heading>One accountable group, across the full build lifecycle.</Heading>
          <p className={`${lead} mt-5`}>
            DIPON Group Limited is a Nigerian-owned conglomerate delivering construction, renewable energy, real
            estate, and supply chain solutions through three specialized companies, each built for depth in its
            field while the Group keeps them accountable to a single standard.
          </p>
        </Reveal>

        {/* Expanding focus panels — full images on a subtle grid, tight spacing.
            The centre is larger; hovering any panel grows it and eases the others
            back, like a focus carousel. */}
        <Reveal fadeOnly className="sector-row flex flex-col gap-3 md:h-[clamp(400px,44vw,520px)] md:flex-row md:gap-2">
          {SUBSIDIARIES.map((sub, i) => (
            <Link
              key={sub.slug}
              href={`/subsidiaries/${sub.slug}`}
              className={`sector-panel group relative block h-[64vw] max-h-[400px] overflow-hidden no-underline md:h-full md:max-h-none ${
                i === 1 ? "is-center" : ""
              }`}
            >
              <CardMedia image={sub.image} alt={`DIPON Group: ${sub.name}`} video={sub.video} />
              {/* legibility wash */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-black/15" />
              {/* subtle grid, like the reference */}
              <div aria-hidden="true" className="sector-grid pointer-events-none absolute inset-0" />

              {/* top — name + mark */}
              <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-5 sm:p-6">
                <span className="max-w-[72%] text-balance font-display text-[clamp(20px,2vw,27px)] font-bold leading-[1.1] text-white">
                  {sub.short}
                </span>
                <LogoMark light className="mt-1 h-6 w-auto shrink-0 opacity-90" />
              </div>

              {/* bottom — badge + statement + read more (statement fades in on focus) */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2.5 p-5 sm:p-6">
                <span className="font-label text-[10px] font-semibold tracking-[1.3px] text-dipon-accent uppercase">
                  {sub.badge}
                </span>
                <p className="sector-desc max-w-[34ch] font-body text-[13.5px] leading-[1.5] text-white/90">
                  {sub.desc}
                </p>
                <span className="sector-desc mt-1 inline-flex w-fit items-center gap-2 font-label text-[10px] font-semibold tracking-[1px] text-white uppercase [&_.arrow]:transition-transform [&_.arrow]:duration-300 [&_.arrow]:ease-[var(--ease-premium)] group-hover:[&_.arrow]:translate-x-[3px]">
                  Read More <ArrowIcon width={13} height={6} />
                </span>
              </div>
            </Link>
          ))}
        </Reveal>

        <Reveal>
          <CtaButton href="/subsidiaries" label="See All Companies" variant="primary" className="mt-10" />
        </Reveal>
      </div>
    </section>
  );
}
