import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { ArrowIcon, SignatureMark } from "./icons";
import { section, wrap } from "@/lib/styles";

const LEADERSHIP_IMAGE =
  "https://images.pexels.com/photos/8123906/pexels-photo-8123906.jpeg?auto=compress&cs=tinysrgb&w=900";

export default function Leadership({ showLink = true }: { showLink?: boolean }) {
  return (
    <section id="careers" className={section}>
      <div className={wrap}>
        <Reveal className="mb-6 md:mb-8">
          <Eyebrow>From the Leadership</Eyebrow>
        </Reveal>
        <Reveal delay={30} className="mb-8 flex items-center gap-4 border-b border-[rgba(35,61,76,0.1)] pb-8 sm:gap-5 md:mb-10">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-[72px] sm:w-[72px]">
            <img
              src={LEADERSHIP_IMAGE}
              alt="Mr. Oliver Ibeh, founder of DIPON Group"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="font-display text-[16px] font-bold text-dipon-primary sm:text-[18px]">
              Mr. Oliver Ibeh
            </div>
            <div className="mb-1.5 font-label text-[11px] font-semibold tracking-[0.6px] text-dipon-accent uppercase">
              Founder &amp; Owner
            </div>
            <p className="max-w-[480px] font-body text-[13px] leading-[1.55] text-dipon-secondary sm:text-[14px]">
              A Nigerian-American entrepreneur, Oliver Ibeh founded the Arizona facility-services firm
              BIO-Janitorial in 1990 before establishing DIPON Group — uniting construction, trade, real
              estate, and power infrastructure under one accountable Nigerian group.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[0.62fr_0.38fr] md:gap-0">
          <Reveal delay={80}>
            <span aria-hidden="true" className="block font-display text-[64px] leading-none font-black text-dipon-accent/25">
              &ldquo;
            </span>
            <blockquote className="-mt-6 mb-6 text-pretty font-display text-[clamp(24px,2.8vw,34px)] font-semibold leading-[1.25] tracking-[-0.6px] text-dipon-primary">
              I built DIPON so that one group answers for the whole project — design, build, and power —
              instead of a chain of vendors pointing at each other when something slips.
            </blockquote>
            <SignatureMark className="mb-3 h-11 w-auto text-dipon-primary" />
            <div className="mb-[26px] font-label text-[13px] font-semibold uppercase tracking-[0.6px] text-dipon-secondary">
              Mr. Oliver Ibeh · Founder &amp; Owner, DIPON Group
            </div>
            {showLink && (
              <Link
                href="/about"
                className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-[rgba(35,61,76,0.16)] px-6 py-3 font-body text-sm text-dipon-primary no-underline transition-colors duration-200 hover:border-dipon-primary hover:bg-dipon-primary hover:text-white [&_.arrow]:transition-transform [&_.arrow]:duration-200 hover:[&_.arrow]:translate-x-1"
              >
                Meet Our Leadership <ArrowIcon width={16} height={7} />
              </Link>
            )}
          </Reveal>
          <Reveal delay={40} className="relative order-first aspect-[4/5] overflow-hidden rounded-[20px] md:order-none">
            <img
              src={LEADERSHIP_IMAGE}
              alt="DIPON Group leadership portrait"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
