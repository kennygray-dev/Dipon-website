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

  const sectionRef = useRef<HTMLDivElement | null>(null);
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

    // ── Full-screen "pages" that grab and HOLD ─────────────────────────────
    // The section is exactly one viewport tall. The instant it rises to fill the
    // screen it snaps into place and FREEZES the page (Lenis stopped) — it then
    // holds, perfectly still, until a deliberate scroll gesture advances it:
    //   step 0 = one full-bleed image  →  step 1 = the full grid  →  release.
    // The page literally cannot move while held, so nothing ever scrubs past; a
    // gesture advances exactly one step, and the last one slides to the next
    // screen.
    const LAST_STEP = 1;
    let step = 0;
    let active = false;
    let justReleased = false;
    let lastY = window.scrollY;
    // One step per *gesture*: a single trackpad swipe fires a long burst of wheel
    // events (momentum), so we accept a step only while `armed`, disarm on it, and
    // re-arm only once the wheel has gone quiet for a beat (the gesture has ended).
    let armed = false;
    let quietTimer = 0;
    const rearmWhenQuiet = () => {
      window.clearTimeout(quietTimer);
      quietTimer = window.setTimeout(() => (armed = true), 170);
    };

    type Lenis = {
      scroll: number;
      stop: () => void;
      start: () => void;
      scrollTo: (t: number, o?: { immediate?: boolean; force?: boolean; duration?: number }) => void;
    };
    const lenis = () => (window as unknown as { __lenis?: Lenis }).__lenis;
    const getY = () => lenis()?.scroll ?? window.scrollY;
    const scrollToY = (y: number) => {
      const l = lenis();
      if (l) l.scrollTo(y, { immediate: true, force: true });
      else window.scrollTo(0, y);
    };
    const scrollSmooth = (y: number) => {
      const l = lenis();
      if (l) l.scrollTo(y, { force: true, duration: 0.8 });
      else window.scrollTo({ top: y, behavior: "smooth" });
    };

    const applyStep = () => {
      const stage = stageRef.current;
      const slot = slotRef.current;
      const feat = featRef.current;
      const text = textRef.current;
      const viewAll = viewAllRef.current;
      const grid = gridRef.current;
      if (!stage || !slot || !feat || !text || !viewAll || !grid) return;
      const sRect = stage.getBoundingClientRect();
      if (step >= 1) {
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

    // Snap the section to fill the screen exactly, then freeze the page so it
    // holds, held at `enterStep`, until the next deliberate gesture.
    const grab = (enterStep: number) => {
      const section = sectionRef.current;
      if (!section) return;
      step = enterStep;
      const absTop = getY() + section.getBoundingClientRect().top; // section top in doc space
      lenis()?.stop(); // freeze first — the page cannot move until release()
      scrollToY(absTop); // then force it to fill the viewport exactly (force works while stopped)
      active = true;
      // Disarm so the rest of the *entry* gesture's momentum can't immediately
      // step past the image; re-arm only after the wheel settles.
      armed = false;
      rearmWhenQuiet();
      applyStep();
    };

    const release = (dir: number) => {
      const section = sectionRef.current;
      active = false;
      justReleased = true;
      window.setTimeout(() => (justReleased = false), 900); // cover the whole exit slide
      lenis()?.start();
      if (!section) return;
      const vh = window.innerHeight;
      const absTop = getY() + section.getBoundingClientRect().top;
      scrollSmooth(dir > 0 ? absTop + vh : absTop - vh); // slide to the next / previous screen
    };

    const tryStep = (dir: number) => {
      const next = step + dir;
      if (next < 0) return release(-1);
      if (next > LAST_STEP) return release(1);
      step = next;
      applyStep();
    };

    const onWheel = (e: WheelEvent) => {
      if (!active) return;
      e.preventDefault(); // hold the page still for the whole gesture
      rearmWhenQuiet(); // keep pushing re-arm out until the wheel settles
      if (!armed || Math.abs(e.deltaY) < 4) return;
      armed = false; // consume: exactly one step for this gesture
      tryStep(e.deltaY > 0 ? 1 : -1);
    };

    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0]?.clientY ?? 0;
      if (active) armed = true; // a fresh touch gesture may advance one step
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!active) return;
      e.preventDefault();
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (!active || !armed) return;
      const dy = touchY - (e.changedTouches[0]?.clientY ?? touchY);
      if (Math.abs(dy) > 36) {
        armed = false;
        tryStep(dy > 0 ? 1 : -1);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (!active || e.repeat) return;
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        tryStep(1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        tryStep(-1);
      }
    };

    const onScroll = () => {
      const section = sectionRef.current;
      const y = getY();
      if (!section || active || justReleased) {
        lastY = y;
        return;
      }
      const vh = window.innerHeight;
      const r = section.getBoundingClientRect();
      const goingDown = y >= lastY;
      lastY = y;
      // Grab right as the section crosses to fill the screen (its top reaching 0),
      // so the snap is a few pixels, never a jump. Scrolling down enters on the
      // image (step 0); scrolling up (coming back from below) enters on the grid.
      if (r.top <= 0 && r.top > -vh * 0.85) {
        grab(goingDown ? 0 : LAST_STEP);
      }
    };

    applyStep();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", applyStep);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", applyStep);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(quietTimer);
      lenis()?.start();
    };
  }, []);

  return (
    <section id="projects" className="relative overflow-x-clip bg-[#15242d]">
      {/* Desktop: one full screen that grabs and holds — image, then grid */}
      <div ref={sectionRef} className="relative hidden h-screen overflow-hidden lg:block motion-reduce:lg:hidden">
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
            <Link href={featured.href} className="group block h-full w-full no-underline">
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
            </Link>
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
