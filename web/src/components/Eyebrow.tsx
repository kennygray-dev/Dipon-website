import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`mb-[18px] inline-flex w-fit items-center gap-2.5 rounded-full border px-4 py-[9px] font-label text-[13px] leading-none ${
        light ? "border-white/20 bg-white/10 text-white/85" : "border-[rgba(35,61,76,0.14)] bg-white text-dipon-secondary"
      } ${className}`}
    >
      <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-dipon-accent" />
      {children}
    </span>
  );
}
