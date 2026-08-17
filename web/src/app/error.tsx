"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowIcon } from "@/components/icons";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    // Surface for local debugging / server-side log matching via error.digest.
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-dipon-blue-alt px-gutter py-20 text-center">
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
        Something went wrong
      </span>
      <h1 className="relative mt-3 max-w-[560px] text-balance font-display text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.1] text-dipon-cream">
        We hit a snag loading this page.
      </h1>
      <p className="relative mt-4 max-w-[440px] font-body text-[15px] leading-[1.65] text-dipon-cream/78">
        Sorry about that — it&rsquo;s on our end, not yours. You can try again, or head back to the
        homepage.
      </p>

      <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="group inline-flex w-fit cursor-pointer items-center rounded-full bg-white py-1.5 pr-1.5 pl-6 font-body text-sm font-medium text-dipon-primary! no-underline transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]"
        >
          Try again
          <span className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dipon-accent text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
            <ArrowIcon width={16} height={7} />
          </span>
        </button>
        <Link
          href="/"
          className="inline-flex w-fit items-center rounded-full border border-white/25 px-6 py-3 font-body text-sm font-medium text-dipon-cream no-underline transition-colors duration-200 hover:border-dipon-accent hover:bg-dipon-accent hover:text-white"
        >
          Back to Home
        </Link>
      </div>

      {error.digest && (
        <p className="relative mt-8 font-label text-[11px] tracking-[0.6px] text-dipon-cream/40">
          Reference: {error.digest}
        </p>
      )}
    </div>
  );
}
