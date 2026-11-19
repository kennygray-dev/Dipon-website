"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowIcon, LogoMotif } from "./icons";
import { wrap } from "@/lib/styles";

type Slide = {
  title: string;
  by: string;
  desc: string;
  category: string;
  image: string;
  alt: string;
};

const SLIDES: Slide[] = [
  {
    title: "Construction & Civil Engineering",
    by: "DIPON Construction",
    desc: "Civil works, buildings, and roads delivered as a single accountable build.",
    category: "Roads, Drainage & Structures",
    image: "https://images.pexels.com/photos/30396647/pexels-photo-30396647.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "DIPON Group project: civil engineering and construction site",
  },
  {
    title: "Renewable Energy & Power",
    by: "DIPON Infrastructure",
    desc: "Solar systems and public lighting planned alongside the build, not bolted on after.",
    category: "Solar, Lighting & Power",
    image: "https://images.pexels.com/photos/6729421/pexels-photo-6729421.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "DIPON Group project: solar power and public lighting",
  },
  {
    title: "Real Estate & Property",
    by: "DIPON Infrastructure",
    desc: "Residential and commercial property developed through to occupancy.",
    category: "Housing & Development",
    image: "https://images.pexels.com/photos/40747788/pexels-photo-40747788.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "DIPON Group project: residential housing development",
  },
  {
    title: "Environmental Services",
    by: "DIPON Infrastructure",
    desc: "Junk removal, waste management, janitorial, and housekeeping that keep sites clean and healthy.",
    category: "Junk, Waste & Cleaning",
    image: "https://images.pexels.com/photos/33691603/pexels-photo-33691603.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "DIPON Group project: environmental and janitorial services",
  },
  {
    title: "Trading & Logistics",
    by: "DIPON Global Resources",
    desc: "Materials sourced, supplied, and moved to site on one coordinated timeline.",
    category: "Supply & Movement",
    image: "https://images.pexels.com/photos/36143083/pexels-photo-36143083.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "DIPON Group project: trading, supply chain, and logistics",
  },
];

const AUTO_MS = 6500;

export default function Projects() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), AUTO_MS);
    return () => clearInterval(id);
  }, [active]);

  const slide = SLIDES[active];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#15242d] px-[clamp(20px,5vw,60px)] py-[clamp(72px,9vw,120px)]"
    >
      {/* Oversized DIPON "D" mark watermark — matches the nav menu / feature band */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-[6%] h-[165%] -translate-y-1/2 opacity-[0.05]"
      >
        <LogoMotif className="h-full w-auto" />
      </div>

      <div className={`${wrap} relative`}>
        {/* Top bar: title + pagination */}
        <div className="mb-6 flex items-start justify-between gap-6 sm:mb-7">
          <div>
            <p className="mb-2 font-label text-[11px] font-semibold tracking-[0.18em] text-dipon-accent uppercase">
              Featured Work
            </p>
            <h2 className="text-balance font-display text-[clamp(24px,3.2vw,36px)] font-bold leading-[1.1] tracking-[-0.5px] text-white">
              {slide.title}
            </h2>
          </div>
          <div className="mt-1 flex shrink-0 items-center gap-2.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${s.title}`}
                aria-current={i === active}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                  i === active ? "bg-white" : "bg-white/30 hover:bg-white/55"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Image frame */}
        <button
          type="button"
          onClick={() => setActive((i) => (i + 1) % SLIDES.length)}
          aria-label="Next project"
          className="group relative block aspect-[16/10] w-full overflow-hidden border border-white/12 sm:aspect-[16/8] lg:aspect-[16/7]"
        >
          {SLIDES.map((s, i) => (
            <img
              key={s.title}
              src={s.image}
              alt={i === active ? s.alt : ""}
              aria-hidden={i !== active}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-[var(--ease-premium)] ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </button>

        {/* Bottom bar: delivered-by / description + category */}
        <div className="mt-6 flex flex-col gap-6 sm:mt-7 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <div className="max-w-[460px]">
            <p className="font-display text-[15px] font-bold tracking-[0.2px] text-white">{slide.by}</p>
            <p className="mt-1.5 font-body text-[14.5px] leading-[1.5] text-white/70">{slide.desc}</p>
            <Link
              href="/services"
              className="group mt-4 inline-flex w-fit items-center gap-2 font-label text-[11px] font-semibold tracking-[0.14em] text-dipon-accent uppercase no-underline [&_.arrow]:transition-transform [&_.arrow]:duration-200 hover:[&_.arrow]:translate-x-1"
            >
              <span className="underline-offset-4 group-hover:underline">View All Services</span>
              <ArrowIcon width={14} height={6} />
            </Link>
          </div>
          <h3 className="text-balance font-display text-[clamp(22px,3vw,34px)] font-bold leading-[1.05] tracking-[-0.5px] text-white sm:text-right">
            {slide.category}
          </h3>
        </div>
      </div>
    </section>
  );
}
