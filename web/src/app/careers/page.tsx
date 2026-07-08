import type { Metadata } from "next";
import CareersContact from "@/components/CareersContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { root } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Careers — DIPON Group",
  description:
    "Build Africa's future with DIPON Group. We're always glad to meet talented people across construction, energy, real estate, and supply chain.",
};

export default function CareersPage() {
  return (
    <div className={root}>
      <Header />
      <main id="top">
        <PageHero
          eyebrow="Careers"
          title="Build Africa's future, with us."
          intro="DIPON Group brings construction, renewable energy, real estate, and supply chain under one accountable group. When we grow, we grow with the people who deliver the work."
          image="https://images.pexels.com/photos/5529746/pexels-photo-5529746.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imageAlt="DIPON Group engineers on site"
        />

        <CareersContact />
      </main>
      <Footer />
    </div>
  );
}
