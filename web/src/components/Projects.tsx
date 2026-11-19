import Link from "next/link";
import Reveal from "./Reveal";
import ScrollRevealText from "./ScrollRevealText";
import { ArrowIcon, LogoMotif } from "./icons";
import { wrap } from "@/lib/styles";

type Project = {
  title: string;
  category: string;
  href: string;
  image: string;
  alt: string;
  /** Bento span at md and up. */
  span: string;
};

const PROJECTS: Project[] = [
  {
    title: "Construction & Civil Engineering",
    category: "Roads, Drainage & Structures",
    href: "/services/construction-civil-engineering",
    image: "https://images.pexels.com/photos/30396647/pexels-photo-30396647.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "DIPON Group project: civil engineering and construction site",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Renewable Energy & Power",
    category: "Solar, Lighting & Power",
    href: "/services/renewable-energy-power",
    image: "https://images.pexels.com/photos/6729421/pexels-photo-6729421.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "DIPON Group project: solar power and public lighting",
    span: "md:col-span-2",
  },
  {
    title: "Real Estate & Property",
    category: "Housing & Development",
    href: "/services/real-estate-property",
    image: "https://images.pexels.com/photos/40747788/pexels-photo-40747788.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "DIPON Group project: residential housing development",
    span: "md:col-span-1",
  },
  {
    title: "Environmental Services",
    category: "Junk, Waste & Cleaning",
    href: "/services/environmental-services",
    image: "https://images.pexels.com/photos/33691603/pexels-photo-33691603.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "DIPON Group project: environmental and janitorial services",
    span: "md:col-span-1",
  },
  {
    title: "Trading & Logistics",
    category: "Supply & Movement",
    href: "/services/trading-supply-chain",
    image: "https://images.pexels.com/photos/36143083/pexels-photo-36143083.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "DIPON Group project: trading, supply chain, and logistics",
    span: "md:col-span-2",
  },
  {
    title: "Agriculture",
    category: "Production & Supply",
    href: "/services/agriculture",
    image: "https://images.pexels.com/photos/27879118/pexels-photo-27879118.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "DIPON Group project: agricultural production and supply",
    span: "md:col-span-2",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#15242d] px-[clamp(20px,5vw,60px)] py-[clamp(72px,9vw,120px)]"
    >
      {/* Oversized DIPON "D" mark watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-[6%] h-[165%] -translate-y-1/2 opacity-[0.05]"
      >
        <LogoMotif className="h-full w-auto" />
      </div>

      <div className={`${wrap} relative`}>
        <div className="mb-10 max-w-[900px] sm:mb-14">
          <p className="mb-4 font-label text-[11px] font-semibold tracking-[0.18em] text-dipon-accent uppercase">
            Featured Work
          </p>
          <ScrollRevealText
            as="h2"
            text="We build, power, supply, and develop across Nigeria — one accountable group behind every project."
            className="text-balance font-display text-[clamp(26px,3.8vw,46px)] font-bold leading-[1.18] tracking-[-0.5px] text-white"
          />
        </div>

        {/* Project mosaic */}
        <div className="grid grid-cols-2 gap-3 [grid-auto-rows:44vw] sm:gap-4 md:grid-cols-4 md:[grid-auto-rows:210px] lg:[grid-auto-rows:232px]">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 3) * 90}
              from={i % 2 === 0 ? "left" : "right"}
              className={`h-full ${p.span}`}
            >
              <Link href={p.href} className="group relative block h-full w-full overflow-hidden no-underline">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[650ms] ease-[var(--ease-premium)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 sm:p-5">
                  <span className="font-label text-[10px] font-semibold tracking-[0.14em] text-dipon-accent uppercase">
                    {p.category}
                  </span>
                  <h3 className="text-balance font-display text-[15px] font-bold leading-[1.15] text-white sm:text-[17px]">
                    {p.title}
                  </h3>
                </div>
                <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowIcon width={13} height={6} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/services"
            className="group inline-flex w-fit items-center gap-2 font-label text-[11px] font-semibold tracking-[0.14em] text-dipon-accent uppercase no-underline [&_.arrow]:transition-transform [&_.arrow]:duration-200 hover:[&_.arrow]:translate-x-1"
          >
            <span className="underline-offset-4 group-hover:underline">View All Services</span>
            <ArrowIcon width={14} height={6} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
