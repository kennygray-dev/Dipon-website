"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import ScrollRevealText from "./ScrollRevealText";
import { ArrowIcon, LogoMotif } from "./icons";
import { wrap } from "@/lib/styles";

type Project = {
  title: string;
  category: string;
  href: string;
  image: string;
  alt: string;
  /** Bento span at md and up. */
  span: string;
};

const PROJECTS: Project[] = [
  {
    title: "Construction & Civil Engineering",
    category: "Roads, Drainage & Structures",
    href: "/services/construction-civil-engineering",
    image: "https://images.pexels.com/photos/30396647/pexels-photo-30396647.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "DIPON Group project: civil engineering and construction site",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Renewable Energy & Power",
    category: "Solar, Lighting & Power",
    href: "/services/renewable-energy-power",
    image: "https://images.pexels.com/photos/6729421/pexels-photo-6729421.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "DIPON Group project: solar power and public lighting",
    span: "md:col-span-2",
  },
  {
    title: "Real Estate & Property",
    category: "Housing & Development",
    href: "/services/real-estate-property",
    image: "https://images.pexels.com/photos/40747788/pexels-photo-40747788.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "DIPON Group project: residential housing development",
    span: "md:col-span-1",
  },
  {
    title: "Environmental Services",
    category: "Junk, Waste & Cleaning",
    href: "/services/environmental-services",
    image: "https://images.pexels.com/photos/33691603/pexels-photo-33691603.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "DIPON Group project: environmental and janitorial services",
    span: "md:col-span-1",
  },
  {
    title: "Trading & Logistics",
    category: "Supply & Movement",
    href: "/services/trading-supply-chain",
    image: "https://images.pexels.com/photos/36143083/pexels-photo-36143083.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "DIPON Group project: trading, supply chain, and logistics",
    span: "md:col-span-2",
  },
  {
    title: "Agriculture",
    category: "Production & Supply",
    href: "/services/agriculture",
    image: "https://images.pexels.com/photos/27879118/pexels-photo-27879118.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "DIPON Group project: agricultural production and supply",
    span: "md:col-span-2",
  },
];

function Tile({ p }: { p: Project }) {
  return (
    <Link href={p.href} className="group relative block h-full w-full overflow-hidden no-underline">
      <img
        src={p.image}
        alt={p.alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[650ms] ease-[var(--ease-premium)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 sm:p-5">
        <span className="font-label text-[10px] font-semibold tracking-[0.14em] text-dipon-accent uppercase">
          {p.category}
        </span>
        <h3 className="text-balance font-display text-[15px] font-bold leading-[1.15] text-white sm:text-[17px]">
          {p.title}
        </h3>
      </div>
    </Link>
  );
}

export default function Projects() {
  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1);

  const outerRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const slotRef = useRef<HTMLDivElement | null>(null);
  const featRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canRun =
      window.matchMedia("(min-width: 1024px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canRun) return;

    let raf = 0;
    const apply = () => {
      raf = 0;
      const outer = outerRef.current;
      const stage = stageRef.current;
      const slot = slotRef.current;
      const feat = featRef.current;
      if (!outer || !stage || !slot || !feat) return;

      const vh = window.innerHeight;
      const oRect = outer.getBoundingClientRect();
      const total = outer.offsetHeight - vh;
      let p = total > 0 ? -oRect.top / total : 0;
      p = Math.max(0, Math.min(1, p));

      // Three frames across the pin: hold the full image (p 0→0.3), zoom out
      // (0.3→0.65), then hold the full grid (0.65→1). Each phase ≈ one screen.
      const zp = Math.max(0, Math.min(1, (p - 0.3) / 0.35));
      const sRect = stage.getBoundingClientRect();
      const slotR = slot.getBoundingClientRect();
      const lerp = (a: number, b: number) => a + (b - a) * zp;
      feat.style.left = `${lerp(0, slotR.left - sRect.left)}px`;
      feat.style.top = `${lerp(0, slotR.top - sRect.top)}px`;
      feat.style.width = `${lerp(sRect.width, slotR.width)}px`;
      feat.style.height = `${lerp(sRect.height, slotR.height)}px`;
      feat.style.setProperty("--label-o", String(Math.max(0, Math.min(1, (zp - 0.7) / 0.3))));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="projects" className="relative overflow-x-clip bg-[#15242d]">
      {/* Oversized DIPON "D" mark watermark */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 -right-[6%] h-[80vh] opacity-[0.05]">
        <LogoMotif className="h-full w-auto" />
      </div>

      {/* Heading */}
      <div className={`${wrap} relative px-[clamp(20px,5vw,60px)] pt-[clamp(72px,9vw,120px)] pb-[clamp(28px,4vw,48px)]`}>
        <p className="mb-4 font-label text-[11px] font-semibold tracking-[0.18em] text-dipon-accent uppercase">
          Featured Work
        </p>
        <ScrollRevealText
          as="h2"
          text="We build, power, supply, and develop across Nigeria — one accountable group behind every project."
          className="max-w-[900px] text-balance font-display text-[clamp(26px,3.8vw,46px)] font-bold leading-[1.18] tracking-[-0.5px] text-white"
        />
      </div>

      {/* Desktop: pinned zoom-out — one full image resolves into the mosaic */}
      <div ref={outerRef} className="relative hidden h-[400vh] lg:block motion-reduce:lg:hidden">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div ref={stageRef} className="relative h-full w-full">
            {/* Final mosaic — full-bleed, edge to edge (the featured cell is an empty placeholder) */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-2">
              <div ref={slotRef} className="col-span-2 row-span-2" aria-hidden="true" />
              {rest.map((p) => (
                <div key={p.title} className={p.span}>
                  <Tile p={p} />
                </div>
              ))}
            </div>
            {/* The featured image, interpolated from full-screen to its slot */}
            <div
              ref={featRef}
              className="absolute z-10 overflow-hidden [--label-o:0]"
              style={{ left: 0, top: 0, width: "100%", height: "100%" }}
            >
              <Link href={featured.href} className="group block h-full w-full no-underline">
                <img src={featured.image} alt={featured.alt} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/25" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5 opacity-[var(--label-o)]">
                  <span className="font-label text-[10px] font-semibold tracking-[0.14em] text-dipon-accent uppercase">
                    {featured.category}
                  </span>
                  <h3 className="font-display text-[17px] font-bold leading-[1.15] text-white">{featured.title}</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / reduced-motion: static mosaic */}
      <div className={`${wrap} relative px-[clamp(20px,5vw,60px)] lg:hidden motion-reduce:lg:block`}>
        <div className="grid grid-cols-2 gap-3 [grid-auto-rows:44vw] sm:gap-4 md:grid-cols-4 md:[grid-auto-rows:200px]">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90} from={i % 2 === 0 ? "left" : "right"} className={`h-full ${p.span}`}>
              <Tile p={p} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* View all */}
      <div className={`${wrap} relative px-[clamp(20px,5vw,60px)] pt-[clamp(28px,4vw,48px)] pb-[clamp(72px,9vw,120px)]`}>
        <Link
          href="/services"
          className="group inline-flex w-fit items-center gap-2 font-label text-[11px] font-semibold tracking-[0.14em] text-dipon-accent uppercase no-underline [&_.arrow]:transition-transform [&_.arrow]:duration-200 hover:[&_.arrow]:translate-x-1"
        >
          <span className="underline-offset-4 group-hover:underline">View All Services</span>
          <ArrowIcon width={14} height={6} />
        </Link>
      </div>
    </section>
  );
}
