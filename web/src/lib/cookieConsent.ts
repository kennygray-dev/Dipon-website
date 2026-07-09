// Lightweight, dependency-free cookie consent handling.
//
// Categories:
// - necessary  — always on, required for the site to function (this consent
//                cookie itself is one of them). No opt-out possible.
// - analytics  — optional. The site does not currently load any analytics
//                or marketing scripts; when one is added, gate it behind
//                `hasAnalyticsConsent()` so it only fires after opt-in.

export type ConsentState = {
  necessary: true;
  analytics: boolean;
  updatedAt: string;
};

const CONSENT_COOKIE_NAME = "dipon_cookie_consent";
const CONSENT_COOKIE_MAX_AGE_DAYS = 180;

/** Dispatched on window when consent is written or updated. */
export const CONSENT_UPDATED_EVENT = "dipon:consent-updated";
/** Dispatched on window to re-open the banner (e.g. a "Manage Preferences" button). */
export const OPEN_COOKIE_SETTINGS_EVENT = "dipon:open-cookie-settings";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string, maxAgeDays: number) {
  if (typeof document === "undefined") return;
  const maxAge = maxAgeDays * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function getConsent(): ConsentState | null {
  const raw = readCookie(CONSENT_COOKIE_NAME);
  if (!raw) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed === "object" &&
      "analytics" in parsed &&
      typeof (parsed as Record<string, unknown>).analytics === "boolean"
    ) {
      const p = parsed as Record<string, unknown>;
      return {
        necessary: true,
        analytics: p.analytics as boolean,
        updatedAt: typeof p.updatedAt === "string" ? p.updatedAt : "",
      };
    }
  } catch {
    // Malformed cookie — treat as no consent recorded yet.
  }
  return null;
}

export function setConsent(analytics: boolean): ConsentState {
  const state: ConsentState = { necessary: true, analytics, updatedAt: new Date().toISOString() };
  writeCookie(CONSENT_COOKIE_NAME, JSON.stringify(state), CONSENT_COOKIE_MAX_AGE_DAYS);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: state }));
  }
  return state;
}

export function hasAnalyticsConsent(): boolean {
  return getConsent()?.analytics ?? false;
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}
