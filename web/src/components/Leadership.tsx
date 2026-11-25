import Image from "next/image";
import CtaButton from "./CtaButton";
import Eyebrow from "./Eyebrow";
import Opening from "./Opening";
import Reveal from "./Reveal";
import ScrollRevealText from "./ScrollRevealText";
import SectionTexture from "./SectionTexture";
import founderPhoto from "@/assets/team/oliver-ibeh.jpg";
import founderSquare from "@/assets/team/oliver-ibeh-square.jpg";
import { section, wrap } from "@/lib/styles";

export default function Leadership({ showLink = true }: { showLink?: boolean }) {
  return (
    <section
      id="careers"
      className={`${section} relative overflow-hidden bg-dipon-blue lg:flex lg:min-h-screen lg:flex-col lg:justify-center`}
    >
      <SectionTexture side="right" />
      <div className={`${wrap} relative z-10 w-full`}>
        <Reveal className="mb-6 md:mb-8">
          <Eyebrow light>From the Leadership</Eyebrow>
        </Reveal>
        <Reveal delay={30} className="mb-8 flex items-center gap-4 border-b border-[rgba(255,249,235,0.14)] pb-8 sm:gap-5 md:mb-10">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-[72px] sm:w-[72px]">
            <Image
              src={founderSquare}
              alt="Mr. Oliver Ibeh, founder of DIPON Group"
              placeholder="blur"
              fill
              sizes="72px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-display text-[16px] font-bold text-dipon-cream sm:text-[18px]">
              Mr. Oliver Ibeh
            </div>
            <div className="mb-1.5 font-label text-[11px] font-semibold tracking-[0.6px] text-dipon-accent uppercase">
              Founder
            </div>
            <p className="max-w-[480px] font-body text-[13px] leading-[1.55] text-[rgba(255,249,235,0.78)] sm:text-[14px]">
              A Nigerian-American entrepreneur, Oliver Ibeh founded the Arizona facility-services firm
              Bio Janitorial Service, Inc. in 1990 before establishing DIPON Group, uniting construction, trade, real
              estate, and power infrastructure under one accountable Nigerian group.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[0.62fr_0.38fr] md:gap-0">
          <Reveal from="left" delay={80}>
            <span aria-hidden="true" className="block font-display text-[64px] leading-none font-black text-dipon-accent/35">
              &ldquo;
            </span>
            <ScrollRevealText
              as="blockquote"
              dim={0.3}
              text="I built DIPON so that one group answers for the whole project (design, build, and power) instead of a chain of vendors pointing at each other when something slips."
              className="-mt-6 mb-6 text-pretty font-display text-[clamp(24px,2.8vw,34px)] font-semibold leading-[1.25] tracking-[-0.6px] text-dipon-cream"
            />
            <div className="mb-[26px] font-label text-[13px] font-semibold uppercase tracking-[0.6px] text-[rgba(255,249,235,0.72)]">
              Mr. Oliver Ibeh · Founder, DIPON Group
            </div>
            {showLink && (
              <CtaButton href="/about" label="Meet Our Leadership" variant="light" />
            )}
          </Reveal>
          <Opening delay={40} className="relative order-first aspect-[4/5] overflow-hidden md:order-none md:aspect-auto md:h-[clamp(380px,52vh,540px)]">
            <Image
              src={founderPhoto}
              alt="Mr. Oliver Ibeh, Founder of DIPON Group"
              placeholder="blur"
              fill
              sizes="(max-width: 768px) 100vw, 38vw"
              className="object-cover"
            />
          </Opening>
        </div>
      </div>
    </section>
  );
}
