import type { NextConfig } from "next";
import { dirname } from "path";
import { fileURLToPath } from "url";

const rootDir = dirname(fileURLToPath(import.meta.url));

const isDev = process.env.NODE_ENV === "development";

// Content-Security-Policy. Notes on the allowances:
//  - 'unsafe-inline' (script) is required for Next's inline bootstrap/hydration
//    and the JSON-LD block; 'unsafe-eval' + ws: are dev-only (Turbopack HMR).
//  - va.vercel-scripts.com / vitals.vercel-insights.com — Vercel Web Analytics.
//  - images.pexels.com — current stock imagery; data: covers grain textures and
//    next/image blur placeholders.
//  - www.google.com — the embedded Google Map on the contact page.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://images.pexels.com https://cdn.sanity.io",
  "font-src 'self'",
  `connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com${isDev ? " ws: http://localhost:*" : ""}`,
  "frame-src https://www.google.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: rootDir,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
