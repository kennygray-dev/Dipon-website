"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

// Site-wide motion controller:
//  • Lenis smooth (inertia) scrolling.
//  • Parallax drift for any [data-parallax] element (speed from the attribute).
//  • Diagonal "wipe-open" reveal for the brand mesh/line layers ([data-open]).
//  • "Opening" clip reveal for cards/images ([data-reveal]).
// All driven from the scroll/rAF loop using getBoundingClientRect (which ignores
// clip-path, so a clipped-closed element is still detected as it enters view).
// Elements are (re)collected on first load AND after every client-side route
// change, so reveals/parallax work on navigation too. Disabled under
// prefers-reduced-motion.
const prefersReduced = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ScrollMotion() {
  const openRef = useRef<Set<HTMLElement>>(new Set());
  const parallaxRef = useRef<HTMLElement[]>([]);
  const revealRef = useRef<Set<HTMLElement>>(new Set());
  const updateRef = useRef<() => void>(() => {});
  const pathname = usePathname();

  // Lenis + the scroll/rAF loop — created once and left running.
  useEffect(() => {
    if (prefersReduced()) return;

    const update = () => {
      const h = window.innerHeight;

      // Diagonal brand lines wipe open once in view.
      for (const el of Array.from(openRef.current)) {
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.92 && r.bottom > h * 0.04) {
          el.classList.add("is-open");
          openRef.current.delete(el);
        }
      }

      // Cards/images wipe open once in view.
      for (const el of Array.from(revealRef.current)) {
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.9 && r.bottom > h * 0.04) {
          el.classList.add("reveal-in");
          revealRef.current.delete(el);
        }
      }

      // Parallax: translate marked elements at a fraction of scroll for depth.
      for (const el of parallaxRef.current) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > h + 200) continue;
        const speed = parseFloat(el.dataset.parallax || "0.1");
        const offset = (r.top + r.height / 2 - h / 2) * speed * -1;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      }
    };
    updateRef.current = update;

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, touchMultiplier: 1.6 });
    // Expose the instance so other components can drive/read the scroll.
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    lenis.on("scroll", update);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
      updateRef.current = () => {};
    };
  }, []);

  // Collect + arm the animated elements — on first load and after each navigation.
  useEffect(() => {
    if (prefersReduced()) return;

    const open = new Set<HTMLElement>();
    document.querySelectorAll<HTMLElement>("[data-open]").forEach((el) => {
      if (!el.classList.contains("is-open")) {
        el.classList.add("js-open"); // arm the closed state
        open.add(el);
      }
    });
    openRef.current = open;

    parallaxRef.current = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));

    const reveal = new Set<HTMLElement>();
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      el.classList.add("js-reveal"); // arm the clipped state
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.98 && r.bottom > 0) {
        el.classList.add("reveal-in"); // already on screen — open immediately, no flash
      } else {
        reveal.add(el);
      }
    });
    revealRef.current = reveal;

    // Run the loop once (and shortly after) so above-the-fold items settle.
    const kick = requestAnimationFrame(() => updateRef.current());
    const t = setTimeout(() => updateRef.current(), 140);
    return () => {
      cancelAnimationFrame(kick);
      clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
