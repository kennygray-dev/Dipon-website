import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Heading from "./Heading";
import Reveal from "./Reveal";
import { ArrowIcon } from "./icons";
import { wrap, lead } from "@/lib/styles";

const GALLERY = [
  {
    id: "shot-1",
    image: "https://images.pexels.com/photos/35340753/pexels-photo-35340753.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "DIPON Group project — access road and drainage works",
    area: "col-start-1 row-span-2",
  },
  {
    id: "shot-2",
    image: "https://images.pexels.com/photos/28359560/pexels-photo-28359560.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "DIPON Group project — solar street lighting",
    area: "col-start-2 col-span-2 row-start-1",
  },
  {
    id: "shot-3",
    image: "https://images.pexels.com/photos/18153132/pexels-photo-18153132.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "DIPON Group project — residential housing development",
    area: "col-start-4 row-span-2",
  },
  {
    id: "shot-4",
    image: "https://images.pexels.com/photos/8961260/pexels-photo-8961260.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "DIPON Group project — civil engineering site",
    area: "col-start-2 row-start-2",
  },
  {
    id: "shot-5",
    image: "https://images.pexels.com/photos/31445085/pexels-photo-31445085.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "DIPON Group project — trading and supply chain",
    area: "col-start-3 row-start-2",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-dipon-surface px-[clamp(20px,5vw,60px)] py-[clamp(72px,9vw,120px)]"
    >
      {/* Faint construction photo, washed out under the cream surface */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.1]">
        <img
          src="https://images.pexels.com/photos/4134179/pexels-photo-4134179.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt=""
          className="h-full w-full object-cover grayscale"
        />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dipon-surface/72" />

      <div className={`${wrap} relative`}>
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[600px]">
            <Eyebrow>Featured Projects</Eyebrow>
            <Heading>Proof, not promises.</Heading>
            <p className={`${lead} mt-4`}>A look at the kind of work we deliver across sectors and subsidiaries.</p>
          </div>
          <Link
            href="/services"
            className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-[rgba(35,61,76,0.16)] px-6 py-3 font-body text-sm text-dipon-primary no-underline transition-colors duration-200 hover:border-dipon-primary hover:bg-dipon-primary hover:text-white [&_.arrow]:transition-transform [&_.arrow]:duration-200 hover:[&_.arrow]:translate-x-1"
          >
            View All Projects <ArrowIcon width={16} height={7} />
          </Link>
        </Reveal>

        <div className="grid aspect-[16/8] grid-cols-4 grid-rows-2 gap-2 sm:gap-2.5 md:aspect-[16/6.5]">
          {GALLERY.map((shot, i) => (
            <Reveal key={shot.id} delay={i * 90} className={`relative overflow-hidden rounded-[14px] ${shot.area}`}>
              <img
                src={shot.image}
                alt={shot.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-[var(--ease-standard)] hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue/65 via-black/15 to-transparent" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
