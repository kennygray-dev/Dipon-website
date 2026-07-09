"use client";

import { ArrowIcon } from "./icons";
import { openCookieSettings } from "@/lib/cookieConsent";

export default function ManageCookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="group mt-2 inline-flex w-fit items-center rounded-full bg-dipon-primary py-1.5 pr-1.5 pl-6 font-body text-sm font-medium text-white! no-underline transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(35,61,76,0.28)]"
    >
      Manage Cookie Preferences
      <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dipon-accent text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
        <ArrowIcon width={14} height={6} />
      </span>
    </button>
  );
}
