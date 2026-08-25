// Non-secret project config (the project id and dataset are public — they ship
// in the client bundle). Env vars override the fallbacks when set.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "k9qxpd0n";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";
