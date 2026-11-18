import Link from "next/link";
import { ArrowIcon } from "./icons";

// Squared call-to-action: a rectangular block with the arrow set in its own
// box at the right edge (no rounded pills). "light" = white block with an
// orange arrow box; "accent" = orange block with a darkened arrow box.
export default function CtaButton({
  href,
  label,
  variant = "light",
  full = false,
  className = "",
  onClick,
}: {
  href: string;
  label: string;
  variant?: "light" | "accent";
  full?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const accent = variant === "accent";
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex items-stretch overflow-hidden no-underline transition-transform duration-300 hover:-translate-y-0.5 ${
        full ? "w-full" : "w-fit"
      } ${accent ? "bg-dipon-accent" : "bg-white"} ${className}`}
    >
      <span
        className={`flex items-center px-[22px] py-3.5 font-body text-sm font-medium tracking-[0.2px] ${
          full ? "flex-1 justify-center" : ""
        } ${accent ? "text-white!" : "text-dipon-primary!"}`}
      >
        {label}
      </span>
      <span
        className={`flex w-[46px] shrink-0 items-center justify-center text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 ${
          accent ? "bg-black/20 group-hover:bg-black/30" : "bg-dipon-accent group-hover:bg-dipon-accent-deep"
        }`}
      >
        <ArrowIcon width={16} height={7} />
      </span>
    </Link>
  );
}
