"use client";

import { useEffect, useState } from "react";

// Floating "back to top" control — fixed bottom-right. It appears once you've
// scrolled down about a screen, and rides the site's smooth (Lenis) scroll back
// up to the top, falling back to native smooth scroll if Lenis isn't present.
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setVisible(window.scrollY > window.innerHeight * 0.75);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toTop = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number, o?: object) => void } }).__lenis;
    if (lenis) lenis.scrollTo(0, { duration: 1.1 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      className={`fixed right-[clamp(20px,5vw,40px)] bottom-[clamp(20px,5vw,40px)] z-50 flex h-12 w-12 items-center justify-center rounded-full bg-dipon-blue text-dipon-cream shadow-[0_10px_30px_-8px_rgba(16,25,31,0.55)] ring-1 ring-white/10 transition-all duration-300 ease-[var(--ease-premium)] hover:bg-dipon-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dipon-accent motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M8 13V3.5M8 3.5 3.5 8M8 3.5 12.5 8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
