import Link from "next/link";
import { ArrowIcon } from "./icons";

type Variant = "light" | "accent" | "primary" | "outline";
type Size = "sm" | "md";

// Squared call-to-action, shared across the site so every button reads the same:
// a rectangular block (no rounded pills) with the arrow set in its own box at the
// right edge. Variants only change color; "outline" is a bordered ghost button.
export default function CtaButton({
  href,
  label,
  variant = "light",
  size = "md",
  full = false,
  bold = false,
  className = "",
  onClick,
}: {
  href: string;
  label: string;
  variant?: Variant;
  size?: Size;
  full?: boolean;
  bold?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const bodyPad = size === "sm" ? "px-[18px] py-2" : "px-[22px] py-3.5";
  const boxW = size === "sm" ? "w-[42px]" : "w-[46px]";
  const weight = bold ? "font-semibold" : "font-medium";

  if (variant === "outline") {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`group inline-flex items-center gap-3 border border-[rgba(35,61,76,0.22)] ${bodyPad} font-body text-sm ${weight} text-dipon-primary! no-underline transition-colors duration-200 hover:border-dipon-primary hover:bg-dipon-primary hover:text-white! [&_.arrow]:transition-transform [&_.arrow]:duration-200 hover:[&_.arrow]:translate-x-1 ${
          full ? "w-full justify-center" : "w-fit"
        } ${className}`}
      >
        {label}
        <ArrowIcon width={16} height={7} />
      </Link>
    );
  }

  const body = variant === "accent" ? "bg-dipon-accent" : variant === "primary" ? "bg-dipon-primary" : "bg-white";
  const textColor = variant === "light" ? "text-dipon-primary!" : "text-white!";
  const box =
    variant === "accent" ? "bg-black/20 group-hover:bg-black/30" : "bg-dipon-accent group-hover:bg-dipon-accent-deep";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex items-stretch overflow-hidden no-underline transition-transform duration-300 hover:-translate-y-0.5 ${
        full ? "w-full" : "w-fit"
      } ${body} ${className}`}
    >
      <span
        className={`flex items-center ${bodyPad} font-body text-sm ${weight} tracking-[0.2px] ${
          full ? "flex-1 justify-center" : ""
        } ${textColor}`}
      >
        {label}
      </span>
      <span
        className={`flex ${boxW} shrink-0 items-center justify-center text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 ${box}`}
      >
        <ArrowIcon width={16} height={7} />
      </span>
    </Link>
  );
}
