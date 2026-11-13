"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Socials from "./Socials";
import { ArrowIcon } from "./icons";

type Slide = { src: string; alt: string; position: string; video?: string };

const SLIDES: Slide[] = [
  {
    video: "/hero/construction.mp4",
    src: "/hero/construction-poster.jpg",
    alt: "DIPON Group Limited: construction worker on a build site",
    position: "center",
  },
  {
    src: "https://images.pexels.com/photos/4487383/pexels-photo-4487383.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "DIPON Global Resources Limited: workers in a warehouse and supply chain operations",
    position: "center",
  },
  {
    src: "https://images.pexels.com/photos/18332045/pexels-photo-18332045.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "DIPON Infrastructure Limited: solar power and public lighting",
    position: "center",
  },
  {
    src: "https://images.pexels.com/photos/33691597/pexels-photo-33691597.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "DIPON Group: environmental, janitorial, and housekeeping services",
    position: "center",
  },
];

// The video slide holds longer; the photo slides rotate faster so their zoom reads.
const SLIDE_INTERVAL_MS = 7000;
const VIDEO_INTERVAL_MS = 14000;
// How far each photo zooms over its time on screen.
const ZOOM_MS = SLIDE_INTERVAL_MS + 900;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Safari ignores the React `muted` attribute and blocks autoplay (showing a
  // play button). Set the muted property imperatively and kick off playback.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  useEffect(() => {
    const duration = SLIDES[activeSlide].video ? VIDEO_INTERVAL_MS : SLIDE_INTERVAL_MS;
    const timer = setTimeout(() => {
      setActiveSlide((i) => (i + 1) % SLIDES.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [activeSlide]);

  return (
    <section className="bg-dipon-blue">
      <div className="relative min-h-dvh overflow-hidden lg:min-h-screen">
        {/* Full-bleed carousel — nudged right on desktop so the subject sits clear of the text,
            with the left edge masked so it dissolves softly into the navy instead of a hard seam */}
        <div className="absolute inset-0 lg:translate-x-[16%] lg:[mask-image:linear-gradient(to_right,transparent_0%,#000_26%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_26%)]">
        {SLIDES.map((slide, i) => {
          const base = "absolute inset-0 h-full w-full object-cover will-change-transform";
          const vis = i === activeSlide ? "opacity-100" : "opacity-0";
          return slide.video ? (
            <video
              key={slide.src}
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={slide.src}
              aria-hidden="true"
              style={{ objectPosition: slide.position, transition: "opacity 900ms var(--ease-standard)" }}
              className={`${base} ${vis}`}
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          ) : (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              style={{
                objectPosition: slide.position,
                transform: i === activeSlide ? "scale(1.12)" : "scale(1)",
                transition: `opacity 900ms var(--ease-standard), transform ${ZOOM_MS}ms ease-out`,
              }}
              className={`${base} ${vis}`}
            />
          );
        })}
        </div>

        {/* Single DIPON-blue wash — the one legibility layer, left-weighted so the photo stays bright on the right */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-dipon-blue/90 via-dipon-blue/72 to-dipon-blue/55 lg:w-[66%] lg:from-dipon-blue/92 lg:via-dipon-blue/55 lg:to-transparent"
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

        {/* Everything below fits on the first screen: headline block on top, caption/socials on the bottom */}
        <div className="relative z-10 mx-auto flex w-full min-h-dvh max-w-[1320px] flex-col justify-center gap-8 px-gutter pt-24 pb-14 sm:gap-10 sm:pb-10 lg:min-h-screen lg:justify-between lg:pt-28 lg:pb-10">
          <div className="flex max-w-[560px] flex-col items-start justify-center gap-4 sm:gap-5 lg:max-w-[620px] lg:flex-1 xl:max-w-[700px] 2xl:max-w-[780px]">
            <h1 className="text-balance font-display text-[clamp(36px,9.6vw,84px)] font-bold leading-[1.08] tracking-[-1px] sm:leading-[1.05] sm:tracking-[-1.5px]">
              <span className="text-dipon-cream">One Group.</span>
              <br />
              <span className="text-dipon-cream/70">Every Stage</span>
              <br />
              <span className="text-dipon-accent">Of The Build.</span>
            </h1>
            <p className="max-w-[460px] font-body text-[14.5px] leading-[1.65] text-dipon-cream/88 sm:text-[16px] sm:leading-[1.7] xl:max-w-[500px] xl:text-[17.5px]">
              DIPON Group Limited integrates construction, power infrastructure, real estate, and supply chain capability
              under one accountable Nigerian-owned group, so your project moves forward without the coordination
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

          <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <span className="font-body text-[12.5px] tracking-[0.3px] text-dipon-cream/60 sm:text-[13px]">
                Trusted Across Construction, Power &amp; Real Estate
              </span>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
