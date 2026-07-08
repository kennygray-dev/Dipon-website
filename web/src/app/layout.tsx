import type { Metadata } from "next";
import { Zalando_Sans } from "next/font/google";
import "./globals.css";

const zalandoSans = Zalando_Sans({
  subsets: ["latin"],
  variable: "--font-zalando-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://dipon-website-mu.vercel.app";
const SITE_TITLE = "DIPON Group — One Group. Every Stage of the Build.";
const SITE_DESCRIPTION =
  "DIPON Group integrates construction, power infrastructure, real estate, and supply chain capability under one accountable Nigerian-owned group.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "DIPON Group",
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
    <html lang="en" className={zalandoSans.variable}>
      <body>{children}</body>
    </html>
  );
}
