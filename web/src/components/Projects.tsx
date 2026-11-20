"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { ArrowIcon } from "./icons";
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

const STATEMENT = "We build, power, supply, and develop across Nigeria as one accountable group behind every project.";

function Tile({ p }: { p: Project }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <img src={p.image} alt={p.alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-1 p-4 sm:p-5">
        <span className="font-label text-[10px] font-semibold tracking-[0.14em] text-dipon-accent uppercase">
          {p.category}
        </span>
        {/* Only the title is a link — the photo itself isn't clickable */}
        <Link
          href={p.href}
          className="w-fit text-balance font-display text-[15px] font-bold leading-[1.15] text-white no-underline underline-offset-[5px] transition-colors duration-200 hover:text-dipon-accent hover:underline sm:text-[17px]"
        >
          {p.title}
        </Link>
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1);

  const outerRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const slotRef = useRef<HTMLDivElement | null>(null);
  const featRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const viewAllRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canRun =
      window.matchMedia("(min-width: 1024px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canRun) return;

    // ── Smooth "pages" via a TALL PINNED section (never freezing) ──────────
    // The section pins for three screens of scroll, so each page gets a WHOLE
    // screen of scroll to itself. Smooth scrolling stays fully in play —
    // nothing is ever locked — but because of that per-page distance, page 1
    // (one full-bleed image) HOLDS as you scroll before page 2 (the full grid)
    // takes over, which then HOLDS too, before the rest of the site scrolls on.
    // Crossing the midpoint flips image<->grid in one clean animated step (no
    // half-sized scrubbing), and the wide dead-zones on either side are the hold.
    let step = -1; // force the first applyStep to take effect
    let raf = 0;

    const applyStep = (next: number) => {
      const stage = stageRef.current;
      const slot = slotRef.current;
      const feat = featRef.current;
      const text = textRef.current;
      const viewAll = viewAllRef.current;
      const grid = gridRef.current;
      if (!stage || !slot || !feat || !text || !viewAll || !grid) return;
      step = next;
      const sRect = stage.getBoundingClientRect();
      if (next >= 1) {
        const slotR = slot.getBoundingClientRect();
        feat.style.left = `${slotR.left - sRect.left}px`;
        feat.style.top = `${slotR.top - sRect.top}px`;
        feat.style.width = `${slotR.width}px`;
        feat.style.height = `${slotR.height}px`;
        text.style.opacity = "0";
        viewAll.style.opacity = "1";
        grid.classList.add("is-open");
      } else {
        feat.style.left = "0px";
        feat.style.top = "0px";
        feat.style.width = `${sRect.width}px`;
        feat.style.height = `${sRect.height}px`;
        text.style.opacity = "1";
        viewAll.style.opacity = "0";
        grid.classList.remove("is-open");
      }
    };

    const progress = () => {
      const outer = outerRef.current;
      if (!outer) return 0;
      const pinRange = outer.offsetHeight - window.innerHeight;
      const top = outer.getBoundingClientRect().top;
      return pinRange > 0 ? Math.max(0, Math.min(1, -top / pinRange)) : 0;
    };

    const compute = () => {
      raf = 0;
      const p = progress();
      // Hysteresis around the midpoint: decisive flip, no flicker. The wide
      // dead-zones on either side (0→0.45 and 0.55→1) are the "hold" — the image,
      // then the grid, each stays put for a full screen of scrolling.
      const want = step >= 1 ? (p < 0.45 ? 0 : 1) : p > 0.55 ? 1 : 0;
      if (want !== step) applyStep(want);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    const onResize = () => applyStep(progress() > 0.5 ? 1 : 0);

    applyStep(0);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="projects" className="relative overflow-x-clip bg-[#15242d]">
      {/* Desktop: pins for three screens so each page holds (image → grid → on) */}
      <div ref={outerRef} className="relative hidden h-[300vh] lg:block motion-reduce:lg:hidden">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div ref={stageRef} className="relative h-full w-full">
            {/* Full-bleed grid (featured cell is an empty placeholder) */}
            <div ref={gridRef} className="proj-grid absolute inset-0 grid grid-cols-4 grid-rows-3 gap-2">
              <div ref={slotRef} className="col-span-2 row-span-2" aria-hidden="true" />
              {rest.map((p) => (
                <div key={p.title} className={`proj-tile ${p.span}`}>
                  <Tile p={p} />
                </div>
              ))}
            </div>

          {/* Featured image: morphs from full-screen to its slot in one animated step */}
          <div
            ref={featRef}
            className="absolute z-10 overflow-hidden transition-[left,top,width,height] duration-[800ms] ease-[var(--ease-premium)]"
            style={{ left: 0, top: 0, width: "100%", height: "100%" }}
          >
            {/* The first page is a full-image preview/statement — the photo is
                not a link; it simply holds while you take it in. */}
            <div className="relative h-full w-full">
              <img src={featured.image} alt={featured.alt} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/25" />
              {/* All the heading info lives inside the image, fading out on collapse */}
              <div
                ref={textRef}
                className="pointer-events-none absolute inset-0 flex flex-col justify-end p-[clamp(28px,6vw,88px)] transition-opacity duration-500"
                style={{ opacity: 1 }}
              >
                <p className="mb-4 font-label text-[12px] font-semibold tracking-[0.2em] text-dipon-accent uppercase">
                  Featured Work
                </p>
                <h2 className="max-w-[16ch] text-balance font-display text-[clamp(30px,4.4vw,60px)] font-bold leading-[1.08] tracking-[-0.5px] text-white">
                  {STATEMENT}
                </h2>
              </div>
            </div>
          </div>

          {/* View all — subtle corner link, fades in with the grid */}
          <div
            ref={viewAllRef}
            className="pointer-events-none absolute right-6 bottom-5 z-20 transition-opacity duration-500"
            style={{ opacity: 0 }}
          >
            <Link
              href="/services"
              className="group pointer-events-auto inline-flex items-center gap-2 font-label text-[11px] font-semibold tracking-[0.14em] text-white/80 uppercase no-underline transition-colors duration-200 hover:text-white [&_.arrow]:transition-transform [&_.arrow]:duration-200 hover:[&_.arrow]:translate-x-1"
            >
              <span className="underline-offset-4 group-hover:underline">View All Services</span>
              <ArrowIcon width={13} height={6} />
            </Link>
          </div>
          </div>
        </div>
      </div>

      {/* Mobile / reduced-motion: heading + static mosaic */}
      <div className={`${wrap} relative px-[clamp(20px,5vw,60px)] py-[clamp(72px,9vw,120px)] lg:hidden motion-reduce:lg:block`}>
        <div className="mb-9 max-w-[640px]">
          <p className="mb-3 font-label text-[11px] font-semibold tracking-[0.18em] text-dipon-accent uppercase">
            Featured Work
          </p>
          <h2 className="text-balance font-display text-[clamp(24px,6vw,34px)] font-bold leading-[1.15] tracking-[-0.5px] text-white">
            {STATEMENT}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 [grid-auto-rows:44vw]">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90} from={i % 2 === 0 ? "left" : "right"} className="h-full">
              <Tile p={p} />
            </Reveal>
          ))}
        </div>
        <Link
          href="/services"
          className="group mt-9 inline-flex w-fit items-center gap-2 font-label text-[11px] font-semibold tracking-[0.14em] text-dipon-accent uppercase no-underline [&_.arrow]:transition-transform [&_.arrow]:duration-200 hover:[&_.arrow]:translate-x-1"
        >
          <span className="underline-offset-4 group-hover:underline">View All Services</span>
          <ArrowIcon width={14} height={6} />
        </Link>
      </div>
    </section>
  );
}
