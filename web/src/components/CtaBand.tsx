import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import { LogoMark, LogoMotif } from "./icons";

export default function CtaBand({ className = "" }: { className?: string }) {
  return (
    <section
      id="cta"
      className={`relative isolate -mt-[clamp(28px,4vw,60px)] overflow-hidden bg-dipon-blue px-gutter pt-[clamp(90px,10vw,130px)] pb-[clamp(56px,7vw,84px)] text-white [clip-path:polygon(0_64px,100%_0,100%_100%,0_100%)] max-[760px]:mt-0 max-[760px]:[clip-path:none] ${className}`}
    >
      {/* Oversized DIPON "D" mark watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-[4%] -z-10 h-[170%] -translate-y-1/2 opacity-[0.06]"
      >
        <LogoMotif className="h-full w-auto" />
      </div>

      <Reveal className="mx-auto flex w-full max-w-[1100px] flex-col gap-10">
        <div className="text-left">
          <h2 className="max-w-[620px] text-balance font-display text-[clamp(28px,4vw,50px)] font-extrabold leading-[1.12] tracking-[-1px] text-white">
            Let&rsquo;s talk about your <span className="text-dipon-accent">next project.</span>
          </h2>
          <p className="mt-4 max-w-[440px] text-pretty font-body text-[15px] leading-[1.65] text-white/88">
            Tell us what you need built, supplied, powered, or developed, we&rsquo;ll get the right people at the
            Group back to you.
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-8 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <span className="flex items-center gap-2 font-label text-xs font-semibold tracking-[1.5px] text-white/85 uppercase">
            <LogoMark light className="h-5 w-5" />
            DIPON Group
          </span>
          <CtaButton href="/contact" label="Discuss Your Next Project" />
        </div>
      </Reveal>
    </section>
  );
}
