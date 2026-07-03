import type { Metadata } from "next";
import { Archivo, Zalando_Sans } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const zalandoSans = Zalando_Sans({
  variable: "--font-zalando-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={`${archivo.variable} ${zalandoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
