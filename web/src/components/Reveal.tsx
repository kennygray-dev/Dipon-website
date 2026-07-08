"use client";

import { useLayoutEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/styles";

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  // Default to visible so the server-rendered HTML — and the very first paint,
  // before React hydrates — always shows the finished page, never a hidden/
  // blurred "skeleton" state. Elements that are below the fold on mount get
  // hidden retroactively inside useLayoutEffect below (which runs before the
  // browser's next paint), so the scroll-reveal animation still plays for
  // them without ever flashing unhidden content first.
  const [visible, setVisible] = useState(true);
  const [animated, setAnimated] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) return;

    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 1.08 && rect.bottom > 0;
    if (alreadyInView) return;

    setAnimated(true);
    setVisible(false);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={delay && animated ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        animated &&
          "transition-[opacity,transform,filter] duration-[1100ms] ease-[var(--ease-premium)] max-md:duration-[450ms] max-md:[transition-delay:0ms]! motion-reduce:transition-none motion-reduce:blur-none",
        visible
          ? "translate-y-0 scale-100 opacity-100 blur-none"
          : "translate-y-4 scale-[0.985] opacity-0 blur-[2px] max-md:translate-y-2 max-md:scale-100 max-md:blur-none",
        className
      )}
    >
      {children}
    </Tag>
  );
}
