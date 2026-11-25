"use client";

import { useEffect, useRef, useState } from "react";
import CtaButton from "./CtaButton";
import Socials from "./Socials";

// The hero cross-fades between a couple of clips so it isn't one static loop.
const HERO_VIDEOS = [
  { src: "/hero/construction.mp4", poster: "/hero/construction-poster.jpg" },
  { src: "/hero/power-aerial.mp4", poster: "/hero/power-aerial-poster.jpg" },
];
const SWITCH_MS = 9000;

export default function Hero() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // Safari ignores the React `muted` attribute and blocks autoplay. Set muted
  // imperatively, start the first clip, and warm the second so the first
  // cross-fade is already loaded when it arrives.
  useEffect(() => {
    const v0 = videoRefs.current[0];
    if (v0) {
      v0.muted = true;
      v0.play().catch(() => {});
    }
    const warm = window.setTimeout(() => {
      const v1 = videoRefs.current[1];
      if (v1) {
        v1.preload = "auto";
        v1.load();
      }
    }, 3000);
    return () => window.clearTimeout(warm);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % HERO_VIDEOS.length);
    }, SWITCH_MS);
    return () => window.clearInterval(id);
  }, []);

  // Only the visible clip plays.
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      v.muted = true;
      if (i === active) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  return (
    <section className="bg-dipon-blue">
      <div className="relative min-h-dvh overflow-hidden lg:min-h-screen">
        {/* Full-bleed footage — nudged right on desktop so the subject sits clear
            of the headline, its left edge masked so it dissolves into the navy. */}
        <div className="absolute inset-0 lg:translate-x-[14%] lg:[mask-image:linear-gradient(to_right,transparent_0%,#000_30%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_30%)]">
          {HERO_VIDEOS.map((vid, i) => (
            <video
              key={vid.src}
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              autoPlay={i === 0}
              muted
              loop
              playsInline
              preload={i === 0 ? "auto" : "none"}
              poster={vid.poster}
              aria-hidden="true"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-[var(--ease-premium)] ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <source src={vid.src} type="video/mp4" />
            </video>
          ))}
        </div>

        {/* Legibility — smooth navy gradients: a left wash under the headline and a
            soft lift from the bottom for the caption. No flat dim, so the footage
            stays rich on the right. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-dipon-blue via-dipon-blue/70 via-[42%] to-transparent to-[82%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-dipon-blue/80 via-dipon-blue/20 to-transparent"
        />

        {/* Subtle geometry, anchored bottom-right of the tinted zone */}
        <div aria-hidden="true" data-open data-parallax="0.1" className="pointer-events-none absolute inset-0 opacity-[0.08]">
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

        {/* Everything below fits on the first screen: headline block on top, caption/socials on the bottom */}
        <div className="relative z-10 mx-auto flex w-full min-h-dvh max-w-[1320px] flex-col justify-center gap-8 px-gutter pt-24 pb-14 sm:gap-10 sm:pb-10 lg:min-h-screen lg:justify-between lg:pt-28 lg:pb-10">
          <div className="flex max-w-[560px] flex-col items-start justify-center gap-4 sm:gap-5 lg:max-w-[620px] lg:flex-1 xl:max-w-[700px] 2xl:max-w-[780px]">
            <h1 className="text-balance font-display text-[clamp(36px,9.6vw,84px)] font-bold leading-[1.08] tracking-[-1px] sm:leading-[1.05] sm:tracking-[-1.5px]">
              <span className="rise-in inline-block text-dipon-cream [animation-delay:80ms]">One Group.</span>
              <br />
              <span className="rise-in inline-block text-dipon-cream/70 [animation-delay:180ms]">Every Stage</span>
              <br />
              <span className="rise-in inline-block text-dipon-accent [animation-delay:280ms]">Of The Build.</span>
            </h1>
            <p className="rise-in max-w-[460px] font-body text-[14.5px] leading-[1.65] text-dipon-cream/88 [animation-delay:400ms] sm:text-[16px] sm:leading-[1.7] xl:max-w-[500px] xl:text-[17.5px]">
              DIPON Group Limited integrates construction, power infrastructure, real estate, and supply chain capability
              under one accountable Nigerian-owned group, so your project moves forward without the coordination
              risk of multiple vendors.
            </p>
            <CtaButton href="/contact" label="Get Started" className="rise-in [animation-delay:520ms]" />
          </div>

          <div className="rise-in flex flex-col gap-5 [animation-delay:640ms] sm:gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
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
