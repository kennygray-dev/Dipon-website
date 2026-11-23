"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Site-wide motion controller:
//  • Lenis smooth (inertia) scrolling.
//  • Parallax drift for any [data-parallax] element (speed from the attribute).
//  • Diagonal "wipe-open" reveal for the brand mesh/line layers ([data-open]).
// Both reveal and parallax are driven from the scroll/rAF loop using
// getBoundingClientRect (which ignores clip-path, so a clipped-closed line layer
// is still detected as it enters view). Disabled under prefers-reduced-motion.
export default function ScrollMotion() {
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const openEls = new Set(document.querySelectorAll<HTMLElement>("[data-open]"));
    openEls.forEach((el) => el.classList.add("js-open")); // arm the closed state
    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));

    // "Opening" reveal: cards/images wipe open as they enter view. Arm the closed
    // state; anything already on screen opens immediately so there's no flash.
    const revealEls = new Set(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    revealEls.forEach((el) => {
      el.classList.add("js-reveal");
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.98 && r.bottom > 0) {
        el.classList.add("reveal-in");
        revealEls.delete(el);
      }
    });

    const update = () => {
      const h = window.innerHeight;

      // Reveal: open the diagonal lines once they enter the viewport.
      for (const el of Array.from(openEls)) {
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.92 && r.bottom > h * 0.04) {
          el.classList.add("is-open");
          openEls.delete(el);
        }
      }

      // "Opening" reveal: wipe cards/images open as they scroll into view.
      for (const el of Array.from(revealEls)) {
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.9 && r.bottom > h * 0.04) {
          el.classList.add("reveal-in");
          revealEls.delete(el);
        }
      }

      // Parallax: translate marked layers at a fraction of scroll for depth.
      for (const el of parallaxEls) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > h + 200) continue;
        const speed = parseFloat(el.dataset.parallax || "0.1");
        const offset = (r.top + r.height / 2 - h / 2) * speed * -1;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      }
    };

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, touchMultiplier: 1.6 });
    // Expose the instance so a pinned, scroll-jacked section (e.g. Featured Work)
    // can pause/resume inertia scrolling while it steps through its own "pages".
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    lenis.on("scroll", update);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Run early so above-the-fold lines open on load, and parallax is set.
    update();
    const kick = requestAnimationFrame(update);
    const t = setTimeout(update, 140);

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(kick);
      clearTimeout(t);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return null;
}
