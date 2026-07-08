import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-gutter py-20 text-center">
      <Image
        src="/assets/dipon-logo-dark.svg"
        alt="DIPON Group"
        width={493}
        height={142}
        className="h-9 w-auto sm:h-10"
      />
      <span className="mt-10 font-label text-xs font-semibold tracking-[1.6px] text-dipon-accent uppercase">
        404 — Off Site
      </span>
      <h1 className="mt-3 max-w-[560px] text-balance font-display text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.1] text-dipon-primary">
        Looks like this page wandered off the job site.
      </h1>
      <p className="mt-4 max-w-[440px] font-body text-[15px] leading-[1.65] text-dipon-secondary">
        We couldn&rsquo;t find what you&rsquo;re looking for — it may have moved, or maybe it just hasn&rsquo;t been
        built yet. Either way, sorry about that.
      </p>
      <Link
        href="/"
        className="group mt-9 inline-flex w-fit items-center rounded-full bg-dipon-primary py-1.5 pr-1.5 pl-6 font-body text-sm font-medium text-white! no-underline transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(35,61,76,0.28)]"
      >
        <span className="text-white!">Back to Home</span>
        <span className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dipon-accent text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
          <ArrowIcon width={16} height={7} />
        </span>
      </Link>
    </div>
  );
}
