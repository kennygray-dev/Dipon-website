import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Heading from "./Heading";
import Reveal from "./Reveal";
import { ArrowIcon, GlobeIcon, GridIcon, LeafIcon, LinkIcon, PartnershipIcon, ShieldIcon } from "./icons";
import { section, wrap } from "@/lib/styles";

const REASONS = [
  {
    icon: LinkIcon,
    title: "Integrated Execution",
    desc: "One group, one point of accountability — across civil works, power, and supply chain.",
  },
  {
    icon: ShieldIcon,
    title: "Engineering-Grade Reliability",
    desc: "Licensed, certified, and governed to a standard procurement teams can verify.",
  },
  {
    icon: LeafIcon,
    title: "Sustainable by Design",
    desc: "Renewable energy capability built into how we deliver, not bolted on afterward.",
  },
  {
    icon: GlobeIcon,
    title: "Local Roots, Global Standards",
    desc: "Nigerian-owned, with delivery standards built for international-grade projects.",
  },
  {
    icon: PartnershipIcon,
    title: "Partnership Over Transactions",
    desc: "We build relationships designed to outlast a single contract.",
  },
  {
    icon: GridIcon,
    title: "Multi-Sector Expertise",
    desc: "One partner across construction, power, real estate, and supply chain — no fragmented vendors.",
  },
];

export default function WhyChoose() {
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
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.07]">
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
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className={`${wrap} relative`}>
        <Reveal className="mx-auto mb-[54px] max-w-[600px] text-center">
          <Eyebrow light>Why Choose DIPON</Eyebrow>
          <Heading light>Capability, turned into a client advantage.</Heading>
        </Reveal>
        <div className="grid grid-cols-1 gap-px border border-[rgba(255,249,235,0.12)] bg-[rgba(255,249,235,0.12)] sm:grid-cols-2 md:grid-cols-3">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={(i % 3) * 110}>
                <div className="relative flex h-full flex-col items-center gap-3 overflow-hidden bg-dipon-blue px-6 py-8 text-center transition-colors duration-300 hover:bg-dipon-blue-alt">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                  />
                  <span className="relative z-10 text-dipon-accent">
                    <Icon size={30} />
                  </span>
                  <h3 className="relative z-10 font-display text-[15.5px] font-bold text-dipon-cream">{reason.title}</h3>
                  <p className="relative z-10 m-0 max-w-[240px] font-body text-[13.5px] leading-[1.6] text-[rgba(255,249,235,0.94)]">
                    {reason.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-11 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center rounded-full bg-white py-1.5 pr-1.5 pl-6 font-body text-sm font-medium text-dipon-primary! no-underline transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
          >
            Discuss Your Next Project
            <span className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dipon-accent text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
              <ArrowIcon width={16} height={7} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
