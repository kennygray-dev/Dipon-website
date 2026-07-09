"use client";

import { useEffect, useState } from "react";
import { OPEN_COOKIE_SETTINGS_EVENT, getConsent, setConsent } from "@/lib/cookieConsent";

export default function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);

  useEffect(() => {
    const init = () => {
      setMounted(true);
      const existing = getConsent();
      if (!existing) {
        setVisible(true);
      } else {
        setAnalyticsChecked(existing.analytics);
      }
    };
    init();

    const reopen = () => {
      const current = getConsent();
      setAnalyticsChecked(current?.analytics ?? false);
      setShowDetails(true);
      setVisible(true);
    };

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  // Avoid a hydration mismatch: nothing renders until we've checked the
  // cookie on the client.
  if (!mounted || !visible) return null;

  const acceptAll = () => {
    setConsent(true);
    setVisible(false);
    setShowDetails(false);
  };

  const rejectNonEssential = () => {
    setConsent(false);
    setVisible(false);
    setShowDetails(false);
  };

  const savePreferences = () => {
    setConsent(analyticsChecked);
    setVisible(false);
    setShowDetails(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[100] flex justify-center px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="w-full max-w-[720px] rounded-[20px] border border-[rgba(35,61,76,0.1)] bg-white p-6 shadow-[0_10px_40px_rgba(20,28,33,0.25)] sm:p-7">
        <p className="m-0 font-body text-sm leading-[1.6] text-dipon-secondary">
          We use cookies to run this site and, with your permission, to understand how it&rsquo;s used. Strictly
          necessary cookies are always on — everything else is optional and off by default. You can change your
          choice anytime from the{" "}
          <a href="/cookie-policy" className="text-dipon-accent underline underline-offset-2">
            Cookie Policy
          </a>{" "}
          page.
        </p>

        {showDetails && (
          <label className="mt-4 flex items-start gap-3 font-body text-sm text-dipon-secondary">
            <input
              type="checkbox"
              checked={analyticsChecked}
              onChange={(e) => setAnalyticsChecked(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-dipon-accent"
            />
            <span>
              <strong className="text-dipon-primary">Analytics cookies</strong> — help us understand how the site is
              used so we can improve it. Optional; none are active until you opt in.
            </span>
          </label>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex items-center rounded-full bg-dipon-primary px-6 py-2.5 font-label text-[11px] font-semibold tracking-[1.2px] text-white! uppercase transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(35,61,76,0.28)]"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={rejectNonEssential}
            className="inline-flex items-center rounded-full border border-[rgba(35,61,76,0.18)] px-6 py-2.5 font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-primary uppercase transition-colors duration-200 hover:border-dipon-primary"
          >
            Reject Non-Essential
          </button>
          {showDetails ? (
            <button
              type="button"
              onClick={savePreferences}
              className="ml-auto font-body text-sm font-medium text-dipon-accent underline-offset-2 hover:underline"
            >
              Save Preferences
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="ml-auto font-body text-sm font-medium text-dipon-accent underline-offset-2 hover:underline"
            >
              Manage Preferences
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
