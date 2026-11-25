"use client";

import { useEffect, useRef, useState } from "react";
import CtaButton from "./CtaButton";
import Eyebrow from "./Eyebrow";
import GeometricOverlay from "./GeometricOverlay";
import Heading from "./Heading";
import Reveal from "./Reveal";
import { section, wrap, leadLight } from "@/lib/styles";

const GRAIN_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Rotating spotlight on what the Group does — each topic is a short muted clip
// plus a line of copy; they switch automatically so the section stays alive
// instead of sitting on one static renewable-energy image.
const TOPICS = [
  {
    badge: "Construction & Civil Engineering",
    kicker: "Build",
    heading: "We build the civil backbone, end to end.",
    copy: "Roads, drainage, structures, and buildings delivered from groundworks to handover, to one standard of workmanship and safety.",
    href: "/services/construction-civil-engineering",
    video: "/cards/construction.mp4",
    image: "https://images.pexels.com/photos/17297091/pexels-photo-17297091.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    badge: "Renewable Energy & Power",
    kicker: "Power",
    heading: "Power planned into the build, not bolted on.",
    copy: "Solar, street lighting, and power infrastructure designed alongside construction, so sites are handed over ready to run with lower running costs.",
    href: "/services/renewable-energy-power",
    video: "/cards/power.mp4",
    image: "https://images.pexels.com/photos/6729421/pexels-photo-6729421.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    badge: "Real Estate & Property",
    kicker: "Property",
    heading: "Property developed through to occupancy.",
    copy: "Securing land, building, powering, and delivering residential and commercial spaces that are ready to live and work in.",
    href: "/services/real-estate-property",
    video: "/cards/realestate.mp4",
    image: "https://images.pexels.com/photos/37224965/pexels-photo-37224965.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    badge: "Trading & Supply Chain",
    kicker: "Supply Chain",
    heading: "The materials and goods projects depend on.",
    copy: "Import, export, procurement, and warehousing at scale, keeping sites supplied and partners stocked, reliably.",
    href: "/services/trading-supply-chain",
    video: "/cards/trade.mp4",
    image: "https://images.pexels.com/photos/36143083/pexels-photo-36143083.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    badge: "Environmental Services",
    kicker: "Facilities",
    heading: "Clean, safe, and well-kept, long after handover.",
    copy: "Waste removal, janitorial, and housekeeping that keep buildings and sites running, backed by decades of facility-services experience.",
    href: "/services/environmental-services",
    video: "/cards/environmental.mp4",
    image: "https://images.pexels.com/photos/9222622/pexels-photo-9222622.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
];

const INTERVAL = 5200;

export default function Sustainability() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const videosRef = useRef<(HTMLVideoElement | null)[]>([]);

  // Auto-advance (paused on hover / focus within the section).
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % TOPICS.length);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [paused]);

  // Only the active clip plays; the rest stay paused so the page stays light.
  useEffect(() => {
    videosRef.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  const topic = TOPICS[active];

  return (
    <section id="sustainability" className={`${section} bg-dipon-page`}>
      <div
        className={wrap}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Reveal
          fadeOnly
          className="grid grid-cols-1 items-stretch gap-[clamp(28px,4vw,44px)] md:grid-cols-[0.54fr_0.46fr] md:gap-[2px]"
        >
          {/* Media — switching clips of work across the Group */}
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:h-full md:min-h-[440px]">
            {TOPICS.map((t, i) => (
              <div
                key={t.badge}
                className={`absolute inset-0 transition-opacity duration-700 ease-[var(--ease-premium)] ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              >
                <video
                  ref={(el) => {
                    videosRef.current[i] = el;
                  }}
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={t.image}
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
                >
                  <source src={t.video} type="video/mp4" />
                </video>
                <img
                  src={t.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 hidden h-full w-full object-cover motion-reduce:block"
                />
              </div>
            ))}
            <GeometricOverlay />
            {/* Bottom gradient field with the bold, modern name of this topic */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/88 via-black/45 to-transparent px-6 pt-20 pb-6 sm:px-7 sm:pb-7">
              <div key={active} className="topic-rise">
                <span className="mb-2 flex items-center gap-2 font-label text-[11px] font-semibold tracking-[1.6px] text-dipon-accent uppercase">
                  <span className="h-px w-6 bg-dipon-accent" />
                  {topic.kicker}
                </span>
                <h3 className="max-w-[16ch] text-balance font-display text-[clamp(22px,2.6vw,32px)] font-extrabold leading-[1.08] tracking-[-0.5px] text-white">
                  {topic.badge}
                </h3>
              </div>
            </div>
          </div>

          {/* Copy panel */}
          <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#2b4a5b] via-dipon-blue to-dipon-blue-alt py-[clamp(36px,5vw,56px)] pr-[clamp(24px,4vw,48px)] pl-[clamp(24px,4vw,48px)] md:pl-[clamp(32px,4vw,56px)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay"
              style={{ backgroundImage: GRAIN_TEXTURE }}
            />
            <div className="relative z-10">
              <Eyebrow light>What We Do Across the Group</Eyebrow>
              <div key={active} className="topic-rise">
                <Heading light>{topic.heading}</Heading>
                <p className={`${leadLight} mt-5 mb-7`}>{topic.copy}</p>
              </div>

              {/* Progress dots */}
              <div className="mb-8 flex items-center gap-2.5" role="tablist" aria-label="Topics">
                {TOPICS.map((t, i) => (
                  <button
                    key={t.badge}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-label={t.badge}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ease-[var(--ease-premium)] ${
                      i === active
                        ? "w-7 bg-dipon-accent"
                        : "w-1.5 bg-[rgba(255,249,235,0.3)] hover:bg-[rgba(255,249,235,0.55)]"
                    }`}
                  />
                ))}
              </div>

              <CtaButton href={topic.href} label="Explore This Work" variant="light" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
