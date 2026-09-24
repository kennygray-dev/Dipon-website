import type { Metadata } from "next";
import { Zalando_Sans, Zalando_Sans_Expanded } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, SOCIAL_URLS } from "@/lib/site";
import "./globals.css";

const zalandoSans = Zalando_Sans({
  subsets: ["latin"],
  variable: "--font-zalando-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const zalandoSansExpanded = Zalando_Sans_Expanded({
  subsets: ["latin"],
  variable: "--font-zalando-sans-expanded",
  weight: ["500", "600", "700", "800"],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "DIPON Group Limited",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/dipon-logo-dark.svg`,
  description: SITE_DESCRIPTION,
  areaServed: "NG",
  ...(SOCIAL_URLS.length > 0 ? { sameAs: SOCIAL_URLS } : {}),
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  verification: {
    google: "wkJBe4V53WvCsbwUQIeOaCnE_xQheXx_iQWK_Wnq7Mo",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "DIPON Group Limited",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${zalandoSans.variable} ${zalandoSansExpanded.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
