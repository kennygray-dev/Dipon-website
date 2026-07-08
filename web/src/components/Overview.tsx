import Link from "next/link";
import Eyebrow from "./Eyebrow";
import GeometricOverlay from "./GeometricOverlay";
import Heading from "./Heading";
import Reveal from "./Reveal";
import { ArrowIcon, BuildIcon, GlobeIcon, LeafIcon } from "./icons";
import { section, wrap } from "@/lib/styles";

const IMAGES = {
  vertical: {
    src: "https://images.pexels.com/photos/8961260/pexels-photo-8961260.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "DIPON Construction Limited — civil engineering and building projects",
  },
  horizontalTop: {
    src: "https://images.pexels.com/photos/18332045/pexels-photo-18332045.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "DIPON Infrastructure Limited — renewable energy and power infrastructure",
  },
  horizontalBottom: {
    src: "https://images.pexels.com/photos/31445085/pexels-photo-31445085.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "DIPON Global Resources Limited — trading and supply chain operations",
  },
};

export default function Overview() {
  return (
    <section id="overview" className={section}>
      <div className={wrap}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.6fr_0.85fr] lg:gap-16">
          <Reveal className="flex flex-col gap-7">
            <div>
              <Eyebrow>About DIPON Group</Eyebrow>
              <Heading>One accountable group, across the full build lifecycle.</Heading>
              <p className="mt-4 max-w-[340px] font-body text-[14px] leading-[1.65] text-dipon-secondary">
                DIPON Group is a Nigerian-owned conglomerate delivering construction, renewable energy, real estate,
                and supply chain solutions through three specialized companies.
              </p>
            </div>
            <Link
              href="/about"
              className="group inline-flex w-fit items-center rounded-full bg-dipon-primary py-1.5 pr-1.5 pl-6 font-body text-sm font-medium text-white! no-underline transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(35,61,76,0.28)]"
            >
              <span className="text-white!">Learn More About Us</span>
              <span className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dipon-accent text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
                <ArrowIcon width={16} height={7} />
              </span>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:aspect-[6/5] lg:grid-cols-2 lg:grid-rows-2">
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[20px] lg:aspect-auto lg:row-span-2">
              <img
                src={IMAGES.vertical.src}
                alt={IMAGES.vertical.alt}
                className="h-full w-full object-cover brightness-[0.82] transition-transform duration-500 ease-[var(--ease-standard)] hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue/60 via-dipon-blue/15 to-transparent" />
              <GeometricOverlay />
              <span aria-hidden="true" className="absolute right-3 bottom-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-dipon-accent text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                <BuildIcon size={15} />
              </span>
            </Reveal>
            <Reveal delay={150} className="relative aspect-[16/10] overflow-hidden rounded-[20px] lg:aspect-auto">
              <img
                src={IMAGES.horizontalTop.src}
                alt={IMAGES.horizontalTop.alt}
                className="h-full w-full object-cover brightness-[0.82] transition-transform duration-500 ease-[var(--ease-standard)] hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue/60 via-dipon-blue/15 to-transparent" />
              <GeometricOverlay />
              <span aria-hidden="true" className="absolute right-3 bottom-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-dipon-accent text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                <LeafIcon size={15} />
              </span>
            </Reveal>
            <Reveal delay={300} className="relative aspect-[16/10] overflow-hidden rounded-[20px] lg:aspect-auto">
              <img
                src={IMAGES.horizontalBottom.src}
                alt={IMAGES.horizontalBottom.alt}
                className="h-full w-full object-cover brightness-[0.82] transition-transform duration-500 ease-[var(--ease-standard)] hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue/60 via-dipon-blue/15 to-transparent" />
              <GeometricOverlay />
              <span aria-hidden="true" className="absolute right-3 bottom-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-dipon-accent text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                <GlobeIcon size={15} />
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
