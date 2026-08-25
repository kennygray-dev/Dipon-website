// Single source of truth for site-wide identity. When the real domain is ready,
// update SITE_URL here and it propagates to metadata, sitemap, robots, and JSON-LD.

export const SITE_URL = "https://dipongrouplimited.com";
export const SITE_NAME = "DIPON Group";

// The DIPON companies were incorporated in 2025 (CAC filings). "Years in
// Operation" is derived from this so the stat stays current on each deploy —
// bump FOUNDED_YEAR only if the real operational start is earlier.
export const FOUNDED_YEAR = 2025;
export const YEARS_IN_OPERATION = Math.max(1, new Date().getFullYear() - FOUNDED_YEAR);
export const SITE_TITLE = "DIPON Group — One Group. Every Stage of the Build.";
export const SITE_DESCRIPTION =
  "DIPON Group integrates construction, power infrastructure, real estate, and supply chain capability under one accountable Nigerian-owned group.";

// Real profile URLs go here once they exist — they feed the Organization
// schema's `sameAs` (and can replace the `#` placeholders in the UI).
export const SOCIAL_URLS: string[] = [];

export type Office = {
  label: string;
  lines: string[];
  country: string;
  phoneDisplay: string;
  /** E.164 form for tel: links. */
  phoneHref: string;
};

export const OFFICES: Office[] = [
  {
    label: "Head Office",
    lines: ["2421 Oka Akoko Close", "Garki 2, Abuja"],
    country: "Nigeria",
    phoneDisplay: "+234 916 062 5000",
    phoneHref: "+2349160625000",
  },
  {
    label: "Arizona Office",
    lines: ["Suite 9, 6630 N 47th", "Glendale, AZ 85301"],
    country: "United States",
    phoneDisplay: "+1 623 931 6216",
    phoneHref: "+16239316216",
  },
];

/** Anchors the contact-page map — the Abuja head office. */
export const MAP_QUERY = "2421 Oka Akoko Close, Garki 2, Abuja, Nigeria";

// Not supplied yet. Leave empty and the UI hides email affordances until it's set.
export const CONTACT_EMAIL = "info@dipongrouplimited.com";
export const CAREERS_EMAIL = "info@dipongrouplimited.com";
