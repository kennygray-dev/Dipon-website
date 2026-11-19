"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

// Scroll-scrubbed, word-by-word reveal: every word is present the whole time but
// starts dim and brightens to full as the block scrolls up through the viewport
// (tied to scroll position, not a one-shot trigger). Reduced-motion shows it all.
export default function ScrollRevealText({
  text,
  as: Tag = "p",
  className = "",
  dim = 0.22,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  /** Opacity of not-yet-revealed words. */
  dim?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(/\s+/);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setProgress(1));
      return () => cancelAnimationFrame(id);
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const start = vh * 0.82; // begin revealing as the top passes 82% down the viewport
      const end = vh * 0.4; // fully revealed by the time the top reaches 40%
      const p = (start - rect.top) / (start - end);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // A little headroom so the last words finish brightening before the block leaves.
  const revealed = progress * (words.length + 3);

  return (
    <Tag ref={ref as never} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          aria-hidden="true"
          style={{ opacity: Math.max(dim, Math.min(1, revealed - i)), transition: "opacity 140ms linear" }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
