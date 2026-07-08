import Link from "next/link";
import Eyebrow from "./Eyebrow";
import GeometricOverlay from "./GeometricOverlay";
import Heading from "./Heading";
import Reveal from "./Reveal";
import { ArrowIcon } from "./icons";
import { section, wrap, leadLight } from "@/lib/styles";

const MINI_STATS = [
  { value: "[X]", label: "MW Installed" },
  { value: "[X]", label: "Communities Served" },
  { value: "[X]", label: "Solar Projects" },
];

const SUSTAINABILITY_IMAGE =
  "https://images.pexels.com/photos/11645013/pexels-photo-11645013.jpeg?auto=compress&cs=tinysrgb&w=1000";

export default function Sustainability() {
  return (
    <section id="sustainability" className={section}>
      <div className={wrap}>
        <Reveal className="grid grid-cols-1 items-stretch gap-[clamp(28px,4vw,44px)] md:grid-cols-[0.54fr_0.46fr] md:gap-[2px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] md:aspect-auto md:h-full md:min-h-[420px] md:[clip-path:polygon(0_0,100%_0,calc(100%-56px)_100%,0_100%)]">
            <img
              src={SUSTAINABILITY_IMAGE}
              alt="Solar and renewable energy infrastructure"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <GeometricOverlay />
            <span className="absolute top-5 left-5 inline-flex items-center rounded-full bg-white/95 px-4 py-2 font-label text-[11px] font-semibold tracking-[0.8px] text-dipon-primary uppercase shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
              Renewable Energy
            </span>
          </div>
          <div className="relative flex flex-col justify-center overflow-hidden rounded-[20px] bg-gradient-to-b from-[#2b4a5b] via-dipon-blue to-dipon-blue-alt py-[clamp(36px,5vw,56px)] pr-[clamp(24px,4vw,48px)] pl-[clamp(24px,4vw,48px)] md:pl-[84px] md:[clip-path:polygon(56px_0,100%_0,100%_100%,0_100%)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />
            <div className="relative z-10">
              <Eyebrow light>Sustainability & Renewable Energy</Eyebrow>
              <Heading light>Sustainability, built into how we build.</Heading>
              <p className={`${leadLight} my-5 mb-7`}>
                Renewable energy isn&rsquo;t a separate division at DIPON Group — it&rsquo;s woven into how we
                deliver construction and infrastructure projects, from solar-powered sites to street lighting and
                power infrastructure for the communities we build in.
              </p>
              <div className="mb-8 grid grid-cols-3 gap-5 border-t border-[rgba(255,249,235,0.16)] pt-6">
                {MINI_STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-[26px] font-extrabold tracking-[-1px] text-dipon-cream">
                      {stat.value}
                    </div>
                    <div className="mt-1.5 font-body text-[12px] leading-[1.3] text-[rgba(255,249,235,0.8)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/services/renewable-energy-power"
                className="group inline-flex w-fit items-center rounded-full bg-white py-1.5 pr-1.5 pl-6 font-body text-sm font-medium text-dipon-primary! no-underline transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
              >
                Explore Our Commitment
                <span className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dipon-accent text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
                  <ArrowIcon width={16} height={7} />
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
