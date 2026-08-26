import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PhotoTile from "@/components/PhotoTile";
import Reveal from "@/components/Reveal";
import WordmarkHero from "@/components/WordmarkHero";
import { SERVICES } from "@/lib/services";
import { root, section, wrap } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Services — DIPON Group Limited",
  description:
    "Construction, renewable energy, real estate, trading, logistics, and agriculture — delivered under one accountable Nigerian-owned group.",
};

export default function ServicesPage() {
  return (
    <div className={root}>
      <Header />
      <main id="top">
        <WordmarkHero word="Services" subtitle="Six capabilities, one accountable group" />

        <section className={section}>
          <div className={wrap}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
              {SERVICES.map((service, i) => (
                <Reveal key={service.slug} delay={(i % 3) * 110} className="aspect-[4/5] overflow-hidden rounded-[16px]">
                  <PhotoTile
                    href={`/services/${service.slug}`}
                    image={service.heroImage}
                    imageAlt={`DIPON Group — ${service.title}`}
                    title={service.title}
                    desc={service.summary}
                    className="h-full w-full"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
