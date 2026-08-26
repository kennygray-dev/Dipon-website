import type { Metadata } from "next";
import CareersContact from "@/components/CareersContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WordmarkHero from "@/components/WordmarkHero";
import { root } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Careers — DIPON Group Limited",
  description:
    "Build Africa's future with DIPON Group. We're always glad to meet talented people across construction, energy, real estate, and supply chain.",
};

export default function CareersPage() {
  return (
    <div className={root}>
      <Header />
      <main id="top">
        <WordmarkHero word="Careers" subtitle="Build Africa's future, with us" />

        <CareersContact />
      </main>
      <Footer />
    </div>
  );
}
