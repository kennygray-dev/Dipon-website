import CountUp from "./CountUp";
import Reveal from "./Reveal";
import { ClockIcon, HouseIcon, ShieldIcon } from "./icons";

export const STAT_ITEMS = [
  {
    icon: ClockIcon,
    value: 3,
    suffix: "+",
    label: "Years in Operation",
    bg: "bg-dipon-blue",
    text: "text-dipon-cream",
    deco: (
      <>
        <path d="M170 20 L170 100" stroke="#FFF9EB" strokeWidth="1.5" />
        <path d="M170 20 L120 55" stroke="#FFF9EB" strokeWidth="1.5" />
        <path d="M170 20 L210 60" stroke="#FFF9EB" strokeWidth="1.5" />
        <path d="M170 20 L90 20" stroke="#FFF9EB" strokeWidth="1.5" />
        <path d="M170 20 L235 100" stroke="#FFF9EB" strokeWidth="1.5" />
        <circle cx="170" cy="20" r="30" stroke="#FFF9EB" strokeWidth="1.5" />
      </>
    ),
  },
  {
    icon: ShieldIcon,
    value: 6,
    suffix: "",
    label: "Sectors Served",
    bg: "bg-[#2b4a5b]",
    text: "text-dipon-cream",
    deco: (
      <>
        <path d="M190 10 L240 45 L240 105 L190 140 L140 105 L140 45 Z" stroke="#FFF9EB" strokeWidth="1.5" />
        <path d="M190 10 L190 140" stroke="#FFF9EB" strokeWidth="1.5" />
        <path d="M140 45 L240 105" stroke="#FFF9EB" strokeWidth="1.5" />
        <path d="M240 45 L140 105" stroke="#FFF9EB" strokeWidth="1.5" />
      </>
    ),
  },
  {
    icon: HouseIcon,
    value: 120,
    suffix: "+",
    label: "Projects Delivered",
    bg: "bg-dipon-accent",
    text: "text-dipon-cream",
    deco: (
      <>
        <path d="M130 130 L130 70 L170 30 L210 70 L210 130" stroke="#233D4C" strokeWidth="1.5" />
        <path d="M170 90 L170 40 L200 65 L200 130" stroke="#233D4C" strokeWidth="1.5" />
        <path d="M100 130 L260 130" stroke="#233D4C" strokeWidth="1.5" />
      </>
    ),
  },
];

export default function StatCards({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-3 gap-px ${className}`}>
      {STAT_ITEMS.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <Reveal key={stat.label} delay={i * 130}>
            <div
              className={`relative flex h-full min-h-[170px] flex-col justify-between gap-3 overflow-hidden p-4 transition-transform duration-300 ease-out hover:-translate-y-1.5 [clip-path:polygon(0_0,100%_0,100%_100%,18%_100%,0_84%)] lg:min-h-[190px] lg:p-5 ${stat.bg} ${stat.text}`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
              />
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16]"
                viewBox="0 0 280 200"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
              >
                {stat.deco}
              </svg>
              <span className="relative z-10 flex h-8 w-8 items-center justify-center">
                <Icon />
              </span>
              <div className="relative z-10">
                <div className="flex items-baseline gap-0.5 font-display text-[clamp(32px,3.8vw,48px)] font-extrabold leading-none tracking-[-1.5px]">
                  <CountUp value={stat.value} />
                  <span className="text-[0.4em] font-bold">{stat.suffix}</span>
                </div>
                <p className="mt-2 font-body text-[11.5px] leading-[1.3] font-semibold">{stat.label}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
