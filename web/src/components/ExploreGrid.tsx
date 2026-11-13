import Link from "next/link";
import { wrap } from "@/lib/styles";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

type Tile = { label: string; href: string; accent: boolean; wide: boolean };

const TILES: Tile[] = [
  { label: "Services", href: "/services", accent: true, wide: false },
  { label: "Subsidiaries", href: "/subsidiaries", accent: false, wide: true },
  { label: "About Us", href: "/about", accent: false, wide: true },
  { label: "Contact Us", href: "/contact", accent: true, wide: false },
];

// Oversized geometric marks that bleed off each tile, clipped by its edges —
// white on the dark tiles, navy on the accent tiles.
function Shapes({ index, accent }: { index: number; accent: boolean }) {
  const line = accent ? "border-dipon-primary/70" : "border-white/85";
  const solid = accent ? "bg-dipon-primary/70" : "bg-white/85";
  switch (index) {
    case 0:
      return (
        <span
          aria-hidden="true"
          className={`absolute -top-14 right-5 h-44 w-44 rounded-full border-[16px] ${line} transition-transform duration-500 ease-out group-hover:scale-110`}
        />
      );
    case 1:
      return (
        <>
          <span
            aria-hidden="true"
            className={`absolute -top-20 left-[30%] h-56 w-56 rounded-full border-[18px] ${line} transition-transform duration-500 ease-out group-hover:scale-105`}
          />
          <span aria-hidden="true" className={`absolute top-9 right-[15%] h-40 w-12 ${solid}`} />
        </>
      );
    case 2:
      return (
        <>
          <span
            aria-hidden="true"
            className={`absolute -bottom-24 left-[32%] h-56 w-56 rounded-full border-[18px] ${line} transition-transform duration-500 ease-out group-hover:scale-105`}
          />
          <span aria-hidden="true" className={`absolute top-10 left-[12%] h-12 w-44 ${solid}`} />
        </>
      );
    default:
      return (
        <span
          aria-hidden="true"
          className={`absolute -bottom-16 -right-6 h-48 w-48 rounded-full border-[16px] ${line} transition-transform duration-500 ease-out group-hover:scale-110`}
        />
      );
  }
}

export default function ExploreGrid() {
  return (
    <section className="bg-[#0e171d] px-[clamp(20px,5vw,60px)] py-[clamp(72px,9vw,120px)]">
      <div className={wrap}>
        <p className="mb-7 font-label text-[12px] font-semibold tracking-[0.2em] text-dipon-accent uppercase">
          Explore the Group
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
          {TILES.map((tile, index) => (
            <Link
              key={tile.label}
              href={tile.href}
              className={`group relative flex min-h-[clamp(200px,26vw,300px)] flex-col justify-end overflow-hidden p-6 no-underline transition-colors duration-300 sm:p-7 ${
                tile.wide ? "md:col-span-2" : "md:col-span-1"
              } ${
                tile.accent
                  ? "bg-dipon-accent hover:bg-dipon-accent-deep"
                  : "bg-[#1a2832] hover:bg-[#223540]"
              }`}
            >
              <Shapes index={index} accent={tile.accent} />
              <div className="relative z-10 flex items-end justify-between gap-4">
                <span
                  className={`font-display text-[clamp(22px,2.6vw,32px)] font-bold leading-none ${
                    tile.accent ? "text-dipon-primary" : "text-dipon-cream"
                  }`}
                >
                  {tile.label}
                </span>
                <Chevron
                  className={`h-6 w-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 ${
                    tile.accent ? "text-dipon-primary" : "text-dipon-accent"
                  }`}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
