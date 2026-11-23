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
  fadeOnly = false,
  mask = false,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  from?: RevealFrom;
  // fadeOnly animates opacity + blur with NO transform — safe for absolutely
  // positioned / backdrop-blurred cards whose own transforms must be preserved.
  // It also plays a gentle entrance on load when already in view (handy for
  // above-the-fold cards a scroll-reveal would otherwise skip).
  fadeOnly?: boolean;
  // mask: a clip-path "unmask" — the element opens from the top edge down as it
  // enters view (great for images/photos). Touches only clip-path, so inner
  // hover-zoom transforms keep working. Put it on the image's framed container.
  mask?: boolean;
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
    // Default reveals skip when already visible (avoids a transform flash). A
    // fadeOnly reveal instead still primes + animates: the observer fires right
    // away for an in-view element, so its fade plays as a gentle load entrance.
    if (alreadyInView && !fadeOnly) return;

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
          cn(
            mask
              ? "transition-[clip-path] duration-[1100ms] ease-[var(--ease-premium)]"
              : cn(
                  fadeOnly ? "transition-opacity" : "transition-[opacity,transform]",
                  "duration-[900ms] ease-[var(--ease-premium)] max-md:duration-[560ms]"
                ),
            "max-md:[transition-delay:0ms]! motion-reduce:transition-none"
          ),
        mask
          ? visible
            ? "[clip-path:inset(0)]"
            : "[clip-path:inset(0_0_100%_0)]"
          : fadeOnly
            ? visible
              ? "opacity-100"
              : "opacity-0"
            : visible
              ? "translate-x-0 translate-y-0 scale-100 opacity-100"
              : cn(HIDDEN_BY_FROM[from], "scale-[0.92] opacity-0 max-md:scale-[0.96]"),
        className
      )}
    >
      {children}
    </Tag>
  );
}
