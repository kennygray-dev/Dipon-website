import type { ReactNode, ElementType, CSSProperties } from "react";

// Dribbble-style "open": the element wipes open (clip-path) as it scrolls into
// view. Driven by ScrollMotion's reliable scroll/rAF loop (the same mechanism
// that opens the brand lines), NOT IntersectionObserver — so cards never get
// stuck hidden. Put it on a card or image frame; `delay` staggers siblings.
export default function Opening({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <Tag data-reveal className={className} style={style}>
      {children}
    </Tag>
  );
}
