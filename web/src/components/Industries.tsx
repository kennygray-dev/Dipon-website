import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Heading from "./Heading";
import Reveal from "./Reveal";
import { ArrowIcon, LogoMark } from "./icons";
import { SERVICES } from "@/lib/services";
import { section, wrap, lead } from "@/lib/styles";

const INDUSTRIES = [
  {
    slug: "construction-civil-engineering",
    title: "Construction & Civil Engineering",
    image: "https://images.pexels.com/photos/8961260/pexels-photo-8961260.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tint: "navy",
  },
  {
    slug: "renewable-energy-power",
    title: "Renewable Energy & Power",
    image: "https://images.pexels.com/photos/18332045/pexels-photo-18332045.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tint: "orange",
  },
  {
    slug: "real-estate-property",
    title: "Real Estate & Property",
    image: "https://images.pexels.com/photos/18153132/pexels-photo-18153132.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tint: "navy",
  },
  {
    slug: "trading-supply-chain",
    title: "Trading & Supply Chain",
    image: "https://images.pexels.com/photos/31445085/pexels-photo-31445085.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tint: "orange",
  },
  {
    slug: "transportation-logistics",
    title: "Transportation & Logistics",
    image: "https://images.pexels.com/photos/36228061/pexels-photo-36228061.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tint: "navy",
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    image: "https://images.pexels.com/photos/33786603/pexels-photo-33786603.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tint: "orange",
  },
];

const TINTS = {
  navy: "from-[#233d4c] via-[#233d4c]/45",
  orange: "from-[#fd802e] via-[#fd802e]/45",
};

export default function Industries() {
  return (
    <section id="industries" className={section}>
      <div className={wrap}>
        <Reveal className="mb-12 max-w-[640px]">
          <Eyebrow>Industries We Serve</Eyebrow>
          <Heading>Tell us what you need built, powered, supplied, or developed.</Heading>
          <p className={`${lead} mt-[18px]`}>
            We&rsquo;ll show you who at DIPON Group delivers it — sometimes one company, sometimes several working on
            the same site.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {INDUSTRIES.map((ind, i) => {
            const desc = SERVICES.find((s) => s.slug === ind.slug)?.summary ?? "";
            return (
              <Reveal
                key={ind.slug}
                delay={(i % 3) * 110}
                className="aspect-square overflow-hidden rounded-[16px]"
              >
                <Link href={`/services/${ind.slug}`} className="group relative flex h-full w-full flex-col no-underline">
                  <img
                    src={ind.image}
                    alt={`DIPON Group — ${ind.title}`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-[var(--ease-standard)] group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b ${TINTS[ind.tint as "navy" | "orange"]} to-transparent transition-opacity duration-400 ease-[var(--ease-premium)] lg:group-hover:opacity-0`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/55 to-transparent transition-opacity duration-400 ease-[var(--ease-premium)] lg:group-hover:opacity-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/35 opacity-100 transition-opacity duration-400 ease-[var(--ease-premium)] lg:opacity-0 lg:group-hover:opacity-100" />

                  <span className="relative z-10 m-3 ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-white/95 p-[6px] shadow-[0_2px_8px_rgba(0,0,0,0.15)] sm:m-3.5 sm:h-8 sm:w-8">
                    <LogoMark className="h-full w-full" />
                  </span>

                  <div className="relative z-10 mt-auto flex flex-col gap-2 p-3 sm:gap-3 sm:p-4">
                    <h3 className="text-balance font-display text-[14px] leading-[1.15] font-bold text-white sm:text-[16px] md:text-[18px]">
                      {ind.title}
                    </h3>
                    <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-400 ease-[var(--ease-premium)] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <p className="mt-1 hidden font-body text-[12px] leading-[1.4] text-white/90 sm:block">{desc}</p>
                        <span className="relative z-20 mt-2.5 inline-flex w-fit items-center gap-2 rounded-full border border-white/35 px-3.5 py-1.5 font-label text-[10px] font-semibold text-white transition-colors duration-200 group-hover:border-dipon-accent group-hover:bg-dipon-accent sm:text-[11px]">
                          Read More <ArrowIcon width={12} height={5} />
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-end border-t border-white/25 pt-2 sm:pt-2.5">
                      <span className="font-label text-[9px] font-medium tracking-[0.8px] text-white/85 uppercase sm:text-[10px] sm:tracking-[1px]">
                        DIPON Group
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
