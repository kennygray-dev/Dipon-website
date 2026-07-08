import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Heading from "./Heading";
import Reveal from "./Reveal";
import { ArrowIcon, LogoMark } from "./icons";
import { section, wrap, lead } from "@/lib/styles";

const SUBSIDIARIES = [
  {
    num: "01",
    slug: "dipon-construction",
    name: "DIPON Construction Limited",
    short: "Construction",
    desc: "Civil engineering, building construction, and general contracting.",
    badge: "Core Build",
    image: "https://images.pexels.com/photos/8961260/pexels-photo-8961260.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    num: "02",
    slug: "dipon-global-resources",
    name: "DIPON Global Resources Limited",
    short: "Global Resources",
    desc: "Trading, supply chain, real estate, agriculture, and logistics.",
    badge: "Supply Chain",
    image: "https://images.pexels.com/photos/31445085/pexels-photo-31445085.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    num: "03",
    slug: "dipon-infrastructure",
    name: "DIPON Infrastructure Limited",
    short: "Infrastructure",
    desc: "Renewable energy, power infrastructure, and housing development.",
    badge: "Power & Property",
    image: "https://images.pexels.com/photos/18332045/pexels-photo-18332045.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function Subsidiaries() {
  return (
    <section id="subsidiaries" className={section}>
      <div className={wrap}>
        <Reveal className="mb-12 max-w-[640px]">
          <Eyebrow>DIPON Group structure</Eyebrow>
          <Heading>Three Companies, One Accountable Group</Heading>
          <p className={`${lead} mt-[18px]`}>
            Each subsidiary is built for depth in its field — while the Group keeps them accountable to a single
            standard.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {SUBSIDIARIES.map((sub, i) => (
            <Reveal
              key={sub.slug}
              delay={i * 130}
              className="aspect-[6/5] overflow-hidden rounded-[16px]"
            >
              <Link href={`/subsidiaries/${sub.slug}`} className="group relative flex h-full w-full flex-col no-underline">
                <img
                  src={sub.image}
                  alt={`DIPON Group — ${sub.name}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-[var(--ease-standard)] group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-[#233d4c] via-[#233d4c]/45 to-transparent transition-opacity duration-400 ease-[var(--ease-premium)] lg:group-hover:opacity-0" />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-400 ease-[var(--ease-premium)] lg:group-hover:opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/35 opacity-100 transition-opacity duration-400 ease-[var(--ease-premium)] lg:opacity-0 lg:group-hover:opacity-100" />

                <span className="relative z-10 m-3.5 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/95 p-[6px] shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
                  <LogoMark className="h-full w-full" />
                </span>

                <div className="relative z-10 mt-auto flex flex-col gap-2 p-4">
                  <span className="font-label text-[10px] font-semibold tracking-[1px] text-white/85 uppercase">
                    {sub.badge}
                  </span>
                  <div>
                    <h3 className="text-balance font-display text-[17px] leading-[1.15] font-bold text-white sm:text-[19px]">
                      {sub.short}
                    </h3>
                    <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-400 ease-[var(--ease-premium)] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <p className="mt-1.5 font-body text-[12.5px] leading-[1.4] text-white/90">{sub.desc}</p>
                        <span className="relative z-20 mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/35 px-3.5 py-1.5 font-label text-[10px] font-semibold text-white transition-colors duration-200 group-hover:border-dipon-accent group-hover:bg-dipon-accent sm:text-[11px]">
                          Read More <ArrowIcon width={12} height={5} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end border-t border-white/25 pt-2.5">
                    <span className="font-label text-[10px] font-medium tracking-[0.8px] text-white/85 uppercase">
                      DIPON Group
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            href="/subsidiaries"
            className="group mt-10 inline-flex w-fit items-center rounded-full bg-dipon-primary py-1.5 pr-1.5 pl-6 font-body text-sm font-medium text-white! no-underline transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(35,61,76,0.28)]"
          >
            <span className="text-white!">See All Companies</span>
            <span className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dipon-accent text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
              <ArrowIcon width={16} height={7} />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
