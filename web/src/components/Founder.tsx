import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import founderPhoto from "@/assets/team/oliver-ibeh.jpg";
import { section, wrap } from "@/lib/styles";

const COMPANIES = [
  {
    name: "DIPON Construction Limited",
    focus:
      "Civil engineering and building construction — roads, bridges, and pipelines through to metal fabrication, steelworks, and finishing.",
  },
  {
    name: "DIPON Global Resources Limited",
    focus:
      "The Group's commercial engine — trade and supply, real estate and property development, agriculture, building materials, and logistics.",
  },
  {
    name: "DIPON Infrastructure Limited",
    focus:
      "Renewable energy and power — solar, wind, and hydro systems, street-lighting infrastructure, and electricity generation.",
  },
];

export default function Founder() {
  return (
    <section id="founder" className={section}>
      <div className={wrap}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <Reveal from="left" className="relative order-first aspect-[4/5] overflow-hidden rounded-[20px] lg:sticky lg:top-24">
            <Image
              src={founderPhoto}
              alt="Mr. Oliver Ibeh, Founder and Owner of DIPON Group"
              placeholder="blur"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue/60 via-dipon-blue/10 to-transparent" />
            <div className="absolute bottom-6 left-6 z-10">
              <div className="font-display text-[20px] font-bold text-dipon-cream">Mr. Oliver Ibeh</div>
              <div className="mt-1 font-label text-[11px] font-semibold tracking-[0.6px] text-dipon-cream/80 uppercase">
                Founder &amp; Owner
              </div>
            </div>
          </Reveal>

          <Reveal from="right" delay={80} className="flex flex-col gap-5">
            <div>
              <Eyebrow>Our Founder</Eyebrow>
              <h2 className="mt-3 text-balance font-display text-[clamp(28px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-dipon-primary">
                Three decades of building, on two continents.
              </h2>
            </div>

            <div className="flex flex-col gap-4 font-body text-[15px] leading-[1.7] text-dipon-secondary sm:text-[16px]">
              <p>
                Oliver Ibeh is a Nigerian-American entrepreneur whose career spans more than three decades of
                building service-driven enterprises across two continents.
              </p>
              <p>
                In 1990, he founded BIO-Janitorial, a minority-owned business enterprise headquartered in
                Glendale, Arizona. Under his leadership it became a recognized innovator in integrated contract
                building maintenance and facility support services, serving commercial, industrial, medical, and
                educational institutions across Arizona and other states. That company established the principles
                that still define his approach: quality, reliability, and a constant drive to do the work better
                than it was done before.
              </p>
              <p>
                With DIPON Group, Mr. Ibeh brings that same discipline to Nigeria&rsquo;s built environment. As
                founder and sole owner, he established the Group&rsquo;s three companies as a single, accountable
                structure covering every stage of a project:
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {COMPANIES.map((company) => (
                <li
                  key={company.name}
                  className="border-l-2 border-dipon-accent/60 pl-4 font-body text-[14.5px] leading-[1.6] text-dipon-secondary"
                >
                  <span className="font-semibold text-dipon-primary">{company.name}</span> — {company.focus}
                </li>
              ))}
            </ul>

            <p className="font-body text-[15px] leading-[1.7] text-dipon-secondary sm:text-[16px]">
              By holding construction, commercial, and power capability under one owner, Mr. Ibeh built DIPON to
              remove the coordination risk that fragments most large projects — so clients answer to one
              accountable group rather than a chain of disconnected vendors. It is the same conviction that grew a
              single Arizona service company into a trusted institution, now directed toward building the
              infrastructure of Africa&rsquo;s future.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
