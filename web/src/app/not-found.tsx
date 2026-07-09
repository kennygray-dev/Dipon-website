import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-dipon-blue px-gutter py-20 text-center">
      {/* Geometric mesh, matching the brand pattern used on inner page headers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <svg width="100%" height="100%" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" fill="none">
          <path d="M1440 -40 L1100 260 L1100 640" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M1440 -40 L1300 340" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M1100 260 L860 60" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M1100 640 L820 500" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M1300 340 L1100 640" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M-40 700 L260 480 L560 620" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M260 480 L220 220" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M640 40 L760 180 L680 340" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M760 180 L940 220" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M420 340 L640 40" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M540 620 L680 340" stroke="#FFF9EB" strokeWidth="1.5" />
          <path d="M960 620 L780 540" stroke="#FFF9EB" strokeWidth="1.5" />
          <circle cx="1100" cy="260" r="3.5" fill="#FFF9EB" />
          <circle cx="1300" cy="340" r="3.5" fill="#FFF9EB" />
          <circle cx="1100" cy="640" r="3.5" fill="#FFF9EB" />
          <circle cx="860" cy="60" r="3.5" fill="#FFF9EB" />
          <circle cx="820" cy="500" r="3.5" fill="#FFF9EB" />
          <circle cx="260" cy="480" r="3.5" fill="#FFF9EB" />
          <circle cx="220" cy="220" r="3.5" fill="#FFF9EB" />
          <circle cx="640" cy="40" r="3.5" fill="#FFF9EB" />
          <circle cx="760" cy="180" r="3.5" fill="#FFF9EB" />
          <circle cx="680" cy="340" r="3.5" fill="#FFF9EB" />
          <circle cx="940" cy="220" r="3.5" fill="#FFF9EB" />
          <circle cx="420" cy="340" r="3.5" fill="#FFF9EB" />
          <circle cx="540" cy="620" r="3.5" fill="#FFF9EB" />
          <circle cx="960" cy="620" r="3.5" fill="#FFF9EB" />
          <circle cx="780" cy="540" r="3.5" fill="#FFF9EB" />
        </svg>
      </div>

      {/* Grain texture across the blue background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <Image
        src="/assets/dipon-logo-light.svg"
        alt="DIPON Group"
        width={493}
        height={142}
        className="relative h-9 w-auto sm:h-10"
      />
      <span className="relative mt-10 font-label text-xs font-semibold tracking-[1.6px] text-dipon-accent uppercase">
        404 — Off Site
      </span>
      <h1 className="relative mt-3 max-w-[560px] text-balance font-display text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.1] text-dipon-cream">
        Looks like this page wandered off the job site.
      </h1>
      <p className="relative mt-4 max-w-[440px] font-body text-[15px] leading-[1.65] text-dipon-cream/78">
        We couldn&rsquo;t find what you&rsquo;re looking for — it may have moved, or maybe it just hasn&rsquo;t been
        built yet. Either way, sorry about that.
      </p>
      <Link
        href="/"
        className="group relative mt-9 inline-flex w-fit items-center rounded-full bg-white py-1.5 pr-1.5 pl-6 font-body text-sm font-medium text-dipon-primary! no-underline transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]"
      >
        <span className="text-dipon-primary!">Back to Home</span>
        <span className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dipon-accent text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
          <ArrowIcon width={16} height={7} />
        </span>
      </Link>
    </div>
  );
}
