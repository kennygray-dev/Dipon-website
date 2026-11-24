import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import { LogoMark } from "./icons";

const TILE_IMAGES = [
  "https://images.pexels.com/photos/30396647/pexels-photo-30396647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/38804912/pexels-photo-38804912.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/40747788/pexels-photo-40747788.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/36143083/pexels-photo-36143083.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/28264496/pexels-photo-28264496.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/27879118/pexels-photo-27879118.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/6729421/pexels-photo-6729421.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/17297091/pexels-photo-17297091.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export default function CtaBand({ className = "" }: { className?: string }) {
  return (
    <section
      id="cta"
      className={`relative isolate overflow-hidden px-gutter pt-[clamp(80px,10vw,130px)] pb-[clamp(56px,7vw,84px)] text-white ${className}`}
    >
      {/* Background photo grid */}
      <div className="absolute inset-0 -z-20 grid h-full grid-cols-4 [grid-auto-rows:1fr] sm:grid-cols-8">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="relative overflow-hidden border border-black/25">
            <img
              src={TILE_IMAGES[i % TILE_IMAGES.length]}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover grayscale"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 -z-10 bg-dipon-blue/93" />
      <div className="absolute inset-0 -z-10 bg-black/25" />

      <Reveal className="mx-auto flex w-full max-w-[1100px] flex-col gap-10">
        <div className="text-left">
          <h2
            data-reveal
            className="heading-rise max-w-[620px] font-display text-[clamp(28px,4vw,50px)] font-extrabold leading-[1.12] tracking-[-1px] text-white"
          >
            <span className="ho-line block text-balance">Let&rsquo;s talk about your</span>
            <span className="ho-line block text-dipon-accent">next project.</span>
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
