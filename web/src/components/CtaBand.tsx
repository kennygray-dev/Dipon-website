import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowIcon, LogoMark } from "./icons";

const TILE_IMAGES = [
  "https://images.pexels.com/photos/8961260/pexels-photo-8961260.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/18332045/pexels-photo-18332045.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/18153132/pexels-photo-18153132.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/31445085/pexels-photo-31445085.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/36228061/pexels-photo-36228061.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/33786603/pexels-photo-33786603.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4626268/pexels-photo-4626268.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4487383/pexels-photo-4487383.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export default function CtaBand({ className = "" }: { className?: string }) {
  return (
    <section
      id="cta"
      className={`relative isolate overflow-hidden px-gutter pt-[clamp(90px,10vw,130px)] pb-[clamp(56px,7vw,84px)] text-white [clip-path:polygon(0_64px,100%_0,100%_100%,0_100%)] max-[760px]:[clip-path:none] ${className}`}
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
      <div className="absolute inset-0 -z-10 bg-dipon-blue/88" />

      <Reveal className="mx-auto flex w-full max-w-[1100px] flex-col gap-10">
        <div className="text-left">
          <h2 className="max-w-[620px] text-balance font-body text-[clamp(28px,4vw,50px)] font-extrabold leading-[1.12] tracking-[-1px] text-white">
            Let&rsquo;s talk about your <span className="text-dipon-accent">next project.</span>
          </h2>
          <p className="mt-4 max-w-[440px] text-pretty font-body text-[15px] leading-[1.65] text-white/80">
            Tell us what you need built, supplied, powered, or developed — we&rsquo;ll get the right people at the
            Group back to you.
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-8 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <span className="flex items-center gap-2 font-label text-xs font-semibold tracking-[1.5px] text-white/85 uppercase">
            <LogoMark light className="h-5 w-5" />
            DIPON Group
          </span>
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center rounded-full bg-white py-1.5 pr-1.5 pl-6 font-body text-sm font-medium text-dipon-primary! no-underline transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]"
          >
            Discuss Your Next Project
            <span className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dipon-accent text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
              <ArrowIcon width={16} height={7} />
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
