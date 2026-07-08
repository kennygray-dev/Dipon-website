import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { ArrowIcon, SignatureMark } from "./icons";
import { section, wrap } from "@/lib/styles";

const LEADERSHIP_IMAGE =
  "https://images.pexels.com/photos/8123906/pexels-photo-8123906.jpeg?auto=compress&cs=tinysrgb&w=900";

export default function Leadership() {
  return (
    <section id="careers" className={section}>
      <div className={wrap}>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[0.62fr_0.38fr] md:gap-0">
          <Reveal>
            <Eyebrow>From the Leadership</Eyebrow>
            <span aria-hidden="true" className="block font-display text-[64px] leading-none font-black text-dipon-accent/25">
              &ldquo;
            </span>
            <blockquote className="-mt-6 mb-6 text-pretty font-display text-[clamp(24px,2.8vw,34px)] font-semibold leading-[1.25] tracking-[-0.6px] text-dipon-primary">
              [Quote from Group leadership on the Group&rsquo;s mission, accountability, or growth — to be supplied.]
            </blockquote>
            <SignatureMark className="mb-3 h-11 w-auto text-dipon-primary" />
            <div className="mb-[26px] font-label text-[13px] font-semibold uppercase tracking-[0.6px] text-dipon-secondary">
              [Executive Name] · [Title], DIPON Group
            </div>
            <Link
              href="/about"
              className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-[rgba(35,61,76,0.16)] px-6 py-3 font-body text-sm text-dipon-primary no-underline transition-colors duration-200 hover:border-dipon-primary hover:bg-dipon-primary hover:text-white [&_.arrow]:transition-transform [&_.arrow]:duration-200 hover:[&_.arrow]:translate-x-1"
            >
              Meet Our Leadership <ArrowIcon width={16} height={7} />
            </Link>
          </Reveal>
          <Reveal className="relative order-first aspect-[4/5] overflow-hidden rounded-[20px] md:order-none">
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
