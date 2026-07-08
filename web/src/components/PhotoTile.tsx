import Link from "next/link";
import { ArrowIcon, LogoMark } from "./icons";

export default function PhotoTile({
  href,
  image,
  imageAlt,
  label,
  title,
  desc,
  footerLeft,
  footerRight = "DIPON Group",
  className = "",
}: {
  href: string;
  image: string;
  imageAlt: string;
  label?: string;
  title: string;
  desc?: string;
  footerLeft?: string;
  footerRight?: string;
  className?: string;
}) {
  return (
    <Link href={href} className={`group relative flex h-full w-full flex-col no-underline ${className}`}>
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-[var(--ease-standard)] group-hover:scale-105"
      />
      <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-[#233d4c] via-[#233d4c]/45 to-transparent transition-opacity duration-400 ease-[var(--ease-premium)] group-hover:opacity-0" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-400 ease-[var(--ease-premium)] group-hover:opacity-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/35 opacity-0 transition-opacity duration-400 ease-[var(--ease-premium)] group-hover:opacity-100" />

      <span className="relative z-10 m-3.5 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/95 p-[6px] shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
        <LogoMark className="h-full w-full" />
      </span>

      <div className="relative z-10 mt-auto flex flex-col gap-2 p-4 sm:p-5">
        {label && (
          <span className="font-label text-[10px] font-semibold tracking-[1px] text-white/70 uppercase">{label}</span>
        )}
        <div>
          <h3 className="text-balance font-display text-[17px] leading-[1.15] font-bold text-white sm:text-[19px]">
            {title}
          </h3>
          <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-400 ease-[var(--ease-premium)] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              {desc && <p className="mt-1.5 font-body text-[12.5px] leading-[1.4] text-white/80">{desc}</p>}
              <span className="relative z-20 mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/35 px-3.5 py-1.5 font-label text-[10px] font-semibold text-white transition-colors duration-200 group-hover:border-dipon-accent group-hover:bg-dipon-accent">
                Read More <ArrowIcon width={12} height={5} />
              </span>
            </div>
          </div>
        </div>
        <div className={`flex items-center gap-2 border-t border-white/25 pt-2.5 ${footerLeft ? "justify-between" : "justify-end"}`}>
          {footerLeft && (
            <span className="font-label text-[10px] font-medium tracking-[0.8px] text-white/70 uppercase">
              {footerLeft}
            </span>
          )}
          <span className="font-label text-[10px] font-medium tracking-[0.8px] text-white/70 uppercase">
            {footerRight}
          </span>
        </div>
      </div>
    </Link>
  );
}
