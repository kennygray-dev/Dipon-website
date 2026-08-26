"use client";

import { useLayoutEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/styles";

type RevealFrom = "bottom" | "top" | "left" | "right";

// The offset an element sits at before it reveals. Horizontal reveals collapse
// to a small vertical rise on mobile — a sideways slide there risks overflow
// and reads worse on a narrow screen.
const HIDDEN_BY_FROM: Record<RevealFrom, string> = {
  bottom: "translate-y-4 max-md:translate-y-2",
  top: "-translate-y-4 max-md:-translate-y-2",
  left: "-translate-x-8 max-md:translate-x-0 max-md:translate-y-2",
  right: "translate-x-8 max-md:translate-x-0 max-md:translate-y-2",
};

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  from = "bottom",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  from?: RevealFrom;
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
          ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-none"
          : cn(HIDDEN_BY_FROM[from], "scale-[0.985] opacity-0 blur-[2px] max-md:scale-100 max-md:blur-none"),
        className
      )}
    >
      {children}
    </Tag>
  );
}
