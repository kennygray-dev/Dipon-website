"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import {
  ArrowIcon,
  ClockIcon,
  FacebookIcon,
  HouseIcon,
  InstagramIcon,
  LinkedInIcon,
  ShieldIcon,
  XIcon,
} from "./icons";

const SLIDES = [
  {
    src: "https://images.pexels.com/photos/8487763/pexels-photo-8487763.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "DIPON Group — construction worker on site wearing a safety helmet",
    position: "80% 30%",
  },
  {
    src: "https://images.pexels.com/photos/6082416/pexels-photo-6082416.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "DIPON Construction Limited — civil engineering and building projects",
    position: "center",
  },
  {
    src: "https://images.pexels.com/photos/4487383/pexels-photo-4487383.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "DIPON Global Resources Limited — trading and supply chain operations",
    position: "center",
  },
  {
    src: "https://images.pexels.com/photos/414905/pexels-photo-414905.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "DIPON Infrastructure Limited — renewable energy and power infrastructure",
    position: "center",
  },
];

const SOCIALS = [
  { Icon: XIcon, href: "#", label: "X" },
  { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
];

const STATS = [
  {
    icon: ClockIcon,
    value: 3,
    suffix: "+",
    label: "Years in Operation",
    note: "Delivering since day one",
    bg: "bg-dipon-blue",
    text: "text-dipon-cream",
    deco: (
      <>
        <path d="M170 20 L170 100" stroke="#FFF9EB" strokeWidth="1.5" />
        <path d="M170 20 L120 55" stroke="#FFF9EB" strokeWidth="1.5" />
        <path d="M170 20 L210 60" stroke="#FFF9EB" strokeWidth="1.5" />
        <path d="M170 20 L90 20" stroke="#FFF9EB" strokeWidth="1.5" />
        <path d="M170 20 L235 100" stroke="#FFF9EB" strokeWidth="1.5" />
        <circle cx="170" cy="20" r="30" stroke="#FFF9EB" strokeWidth="1.5" />
      </>
    ),
  },
  {
    icon: ShieldIcon,
    value: 6,
    suffix: "",
    label: "Sectors Served",
    note: "Construction to real estate",
    bg: "bg-[#2b4a5b]",
    text: "text-dipon-cream",
    deco: (
      <>
        <path d="M190 10 L240 45 L240 105 L190 140 L140 105 L140 45 Z" stroke="#FFF9EB" strokeWidth="1.5" />
        <path d="M190 10 L190 140" stroke="#FFF9EB" strokeWidth="1.5" />
        <path d="M140 45 L240 105" stroke="#FFF9EB" strokeWidth="1.5" />
        <path d="M240 45 L140 105" stroke="#FFF9EB" strokeWidth="1.5" />
      </>
    ),
  },
  {
    icon: HouseIcon,
    value: 120,
    suffix: "+",
    label: "Projects Delivered",
    note: "Completed across Nigeria",
    bg: "bg-dipon-accent",
    text: "text-dipon-cream",
    deco: (
      <>
        <path d="M130 130 L130 70 L170 30 L210 70 L210 130" stroke="#233D4C" strokeWidth="1.5" />
        <path d="M170 90 L170 40 L200 65 L200 130" stroke="#233D4C" strokeWidth="1.5" />
        <path d="M100 130 L260 130" stroke="#233D4C" strokeWidth="1.5" />
      </>
    ),
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((i) => (i + 1) % SLIDES.length);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <div className="relative min-h-[560px] overflow-hidden lg:h-screen lg:min-h-0">
        {/* Full-bleed photo carousel — the image spans the entire hero */}
        {SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            style={{ objectPosition: slide.position }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-[var(--ease-standard)] ${
              i === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dim wash across the whole photo for legibility */}
        <div aria-hidden="true" className="absolute inset-0 bg-black/22" />

        {/* Translucent DIPON-blue wash — the photo shows faintly through it */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-dipon-blue/88 via-dipon-blue/78 to-dipon-blue/70 lg:w-[64%] lg:from-dipon-blue/92 lg:via-dipon-blue/58 lg:to-transparent"
        />

        {/* Subtle geometry, anchored bottom-right of the tinted zone */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <svg width="100%" height="100%" viewBox="0 0 600 700" preserveAspectRatio="xMidYMid slice" fill="none">
            <path d="M620 720 L600 260" stroke="#FFF9EB" strokeWidth="1.5" />
            <path d="M620 720 L380 160" stroke="#FFF9EB" strokeWidth="1.5" />
            <path d="M620 720 L120 260" stroke="#FFF9EB" strokeWidth="1.5" />
            <path d="M620 720 L-20 460" stroke="#FFF9EB" strokeWidth="1.5" />
            <path d="M620 720 L140 620" stroke="#FFF9EB" strokeWidth="1.5" />
            <path d="M600 260 L380 160" stroke="#FFF9EB" strokeWidth="1.5" />
            <path d="M380 160 L120 260" stroke="#FFF9EB" strokeWidth="1.5" />
            <path d="M120 260 L-20 460" stroke="#FFF9EB" strokeWidth="1.5" />
            <path d="M-20 460 L140 620" stroke="#FFF9EB" strokeWidth="1.5" />
            <circle cx="600" cy="260" r="3.5" fill="#FFF9EB" />
            <circle cx="380" cy="160" r="3.5" fill="#FFF9EB" />
            <circle cx="120" cy="260" r="3.5" fill="#FFF9EB" />
            <circle cx="140" cy="620" r="3.5" fill="#FFF9EB" />
          </svg>
        </div>

        {/* Carousel bars — horizontal row under the headline on mobile, vertical on the right edge from lg up */}
        <div className="absolute right-1/2 bottom-6 z-20 flex translate-x-1/2 items-center gap-[7px] lg:top-1/2 lg:right-6 lg:bottom-auto lg:translate-x-0 lg:-translate-y-1/2 lg:flex-col">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === activeSlide}
              onClick={() => setActiveSlide(i)}
              className={`cursor-pointer rounded-full border-0 bg-none p-0 transition-all duration-300 ease-[var(--ease-standard)] lg:w-[5px] ${
                i === activeSlide
                  ? "h-[5px] w-5 bg-white/85 lg:h-5 lg:w-[5px]"
                  : "h-[5px] w-[5px] bg-white/40 hover:bg-white/60 lg:h-[5px] lg:w-[5px]"
              }`}
            />
          ))}
        </div>

        {/* Everything below fits on the first screen: headline block on top, caption/socials + stats on the bottom */}
        <div className="relative z-10 mx-auto flex w-full min-h-[560px] max-w-[1320px] flex-col justify-center gap-8 px-gutter pt-24 pb-14 sm:gap-10 sm:pb-10 lg:h-full lg:min-h-0 lg:justify-between lg:gap-0 lg:pt-28 lg:pb-10">
          <div className="flex max-w-[560px] flex-col items-start justify-center gap-4 sm:gap-5 lg:max-w-[620px] lg:flex-1 xl:max-w-[700px] 2xl:max-w-[780px]">
            <h1 className="text-balance font-display text-[clamp(36px,9.6vw,84px)] font-bold leading-[1.08] tracking-[-1px] sm:leading-[1.05] sm:tracking-[-1.5px]">
              <span className="text-dipon-cream">One Group.</span>
              <br />
              <span className="text-dipon-cream/70">Every Stage</span>
              <br />
              <span className="text-dipon-accent">Of The Build.</span>
            </h1>
            <p className="max-w-[460px] font-body text-[14.5px] leading-[1.65] text-dipon-cream/88 sm:text-[16px] sm:leading-[1.7] xl:max-w-[500px] xl:text-[17.5px]">
              DIPON Group integrates construction, power infrastructure, real estate, and supply chain capability
              under one accountable Nigerian-owned group — so your project moves forward without the coordination
              risk of multiple vendors.
            </p>
            <Link
              href="/contact"
              className="group inline-flex w-fit items-center rounded-full bg-white py-1.5 pr-1.5 pl-6 font-body text-sm font-medium text-dipon-primary! no-underline transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]"
            >
              Get Started
              <span className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dipon-accent text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
                <ArrowIcon width={16} height={7} />
              </span>
            </Link>
          </div>

          <div className="hidden flex-col gap-5 sm:gap-6 lg:flex lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <span className="font-body text-[12.5px] tracking-[0.3px] text-dipon-cream/60 sm:text-[13px]">
                Trusted Across Construction, Power &amp; Real Estate
              </span>
              <div className="flex items-center gap-3">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 text-dipon-cream transition-colors duration-200 hover:border-dipon-accent hover:bg-dipon-accent hover:text-white"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-[3px] sm:gap-px lg:w-[min(560px,48%)] lg:shrink-0">
              {STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <Reveal key={stat.label} delay={i * 130}>
                    <div
                      className={`relative flex h-full min-h-[112px] flex-col justify-between gap-1.5 overflow-hidden p-2.5 transition-transform duration-300 ease-out hover:-translate-y-1.5 [clip-path:polygon(0_0,100%_0,100%_100%,18%_100%,0_84%)] sm:min-h-[170px] sm:gap-3 sm:p-4 lg:min-h-[190px] lg:p-5 ${stat.bg} ${stat.text}`}
                    >
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay"
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                        }}
                      />
                      <svg
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16]"
                        viewBox="0 0 280 200"
                        preserveAspectRatio="xMidYMid slice"
                        fill="none"
                      >
                        {stat.deco}
                      </svg>
                      <span
                        aria-hidden="true"
                        className="relative z-10 flex h-5 w-5 items-center justify-center text-white sm:h-8 sm:w-8 [&_svg]:h-full [&_svg]:w-full"
                      >
                        <Icon />
                      </span>
                      <div className="relative z-10">
                        <div className="flex items-baseline gap-0.5 font-display text-[clamp(18px,6vw,48px)] font-extrabold leading-none tracking-[-0.5px] sm:text-[clamp(32px,3.8vw,48px)] sm:tracking-[-1.5px]">
                          <CountUp value={stat.value} />
                          <span className="text-[0.4em] font-bold">{stat.suffix}</span>
                        </div>
                        <p className="mt-1.5 font-body text-[9.5px] leading-[1.25] font-semibold sm:mt-2 sm:text-[11.5px] sm:leading-[1.3]">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
