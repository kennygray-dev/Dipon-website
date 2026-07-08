import type { Metadata } from "next";
import { Zalando_Sans } from "next/font/google";
import "./globals.css";

const zalandoSans = Zalando_Sans({
  subsets: ["latin"],
  variable: "--font-zalando-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DIPON Group — One Group. Every Stage of the Build.",
  description:
    "DIPON Group integrates construction, power infrastructure, real estate, and supply chain capability under one accountable Nigerian-owned group.",
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
