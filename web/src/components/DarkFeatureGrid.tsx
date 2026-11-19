import type { ComponentType } from "react";
import Eyebrow from "./Eyebrow";
import Heading from "./Heading";
import Reveal from "./Reveal";
import { section, wrap } from "@/lib/styles";

const GRAIN_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const COLS_CLASS: Record<number, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

type Item = { title: string; desc: string; Icon?: ComponentType<{ size?: number }> };

export default function DarkFeatureGrid({
  eyebrow,
  heading,
  items,
  columns = 4,
}: {
  eyebrow: string;
  heading: string;
  items: Item[];
  columns?: number;
}) {
  return (
    <section
      className={`relative overflow-hidden bg-dipon-blue [clip-path:polygon(0_64px,100%_0,100%_calc(100%-64px),0_100%)] max-[760px]:[clip-path:none] ${section}`}
    >
      <div aria-hidden="true" className="absolute top-0 right-0 h-full w-[46%] opacity-50">
        <svg width="100%" height="100%" viewBox="0 0 600 700" preserveAspectRatio="xMidYMid slice">
          <path d="M360 0 L600 360 L600 0 Z" fill="#FD802E" opacity="0.05" />
          <path d="M480 700 L600 470 L600 700 Z" fill="#FFFFFF" opacity="0.03" />
        </svg>
      </div>

      {/* Faint line geometry spanning the whole section */}
      <div aria-hidden="true" data-open data-parallax="0.08" className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <svg width="100%" height="100%" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" fill="none">
          <path d="M-40 40 L340 40 L440 330 L60 330 Z" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M340 40 L520 200" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M60 330 L-100 470" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M1240 660 L1220 260" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M1240 660 L980 160" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M1240 660 L700 260" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M1220 260 L980 160" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M980 160 L700 260" stroke="#FFF9EB" strokeWidth="1.5" />
          <circle cx="340" cy="40" r="3.5" fill="#FFF9EB" />
          <circle cx="60" cy="330" r="3.5" fill="#FFF9EB" />
          <circle cx="1220" cy="260" r="3.5" fill="#FFF9EB" />
          <circle cx="980" cy="160" r="3.5" fill="#FFF9EB" />
          <circle cx="700" cy="260" r="3.5" fill="#FFF9EB" />
        </svg>
      </div>

      {/* Grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay"
        style={{ backgroundImage: GRAIN_TEXTURE }}
      />

      <div className={`${wrap} relative`}>
        <Reveal className="mx-auto mb-[54px] max-w-[600px] text-center">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <Heading light>{heading}</Heading>
        </Reveal>
        <div
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${COLS_CLASS[columns] ?? COLS_CLASS[4]}`}
        >
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % columns) * 110} from={i % 2 === 0 ? "bottom" : "top"}>
              <div className="group relative flex h-full min-h-[248px] flex-col bg-white px-7 py-8 transition-transform duration-300 hover:-translate-y-1">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-dipon-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {item.Icon ? (
                  <span className="flex h-12 w-12 items-center justify-center bg-dipon-accent/10 text-dipon-accent">
                    <item.Icon size={20} />
                  </span>
                ) : (
                  <span className="font-display text-[26px] font-extrabold leading-none text-dipon-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                <div className="mt-auto pt-8">
                  <h3 className="font-display text-[17px] font-bold leading-[1.2] text-dipon-primary">{item.title}</h3>
                  <p className="mt-2.5 m-0 font-body text-[13.5px] leading-[1.6] text-dipon-secondary">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
