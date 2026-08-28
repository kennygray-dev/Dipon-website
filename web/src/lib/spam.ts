// Lightweight, dependency-free spam heuristics for the public forms.
// Goal: silently drop the templated "SEO / lead-gen" junk that gets blasted at
// contact forms, without adding any friction for real visitors.

// Marketing / lead-gen buzzwords that real construction enquiries don't use.
// Word-boundaried so "geo" won't fire on "geotechnical", etc.
const SPAM_RE =
  /\b(seo|aeo|geo|backlinks?|rank(?:ing)? higher|search engine|digital marketing|price list|guest post(?:ing)?|link building|off[- ]?page|on[- ]?page|chatgpt|perplexity|gemini|web(?:site)? traffic|lead generation|b2b leads|crypto|forex|bitcoin|casino|viagra)\b/gi;

const LINK_RE = /(https?:\/\/|www\.)/gi;

/** True when a submission looks like automated marketing/lead-gen spam. */
export function looksLikeSpam(fields: {
  name?: string;
  service?: string;
  message?: string;
}): boolean {
  const text = `${fields.name ?? ""} ${fields.service ?? ""} ${fields.message ?? ""}`;
  const termHits = (text.match(SPAM_RE) ?? []).length;
  const linkHits = (`${fields.message ?? ""}`.match(LINK_RE) ?? []).length;

  if (termHits >= 2) return true; // several marketing buzzwords → spam
  if (linkHits >= 2) return true; // multiple links in the message → spam
  if (linkHits >= 1 && termHits >= 1) return true; // a link plus a buzzword
  return false;
}

/** How quickly a real person could plausibly fill the form. Faster = a bot. */
export const MIN_FILL_MS = 2500;

/** True when the form was submitted implausibly fast (only bots do this). */
export function submittedTooFast(startedAt: string): boolean {
  const t = Number(startedAt);
  if (!Number.isFinite(t) || t <= 0) return false; // no timestamp (e.g. no JS) → don't judge
  const elapsed = Date.now() - t;
  return elapsed >= 0 && elapsed < MIN_FILL_MS;
}
