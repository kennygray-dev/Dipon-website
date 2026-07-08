import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import PhotoTile from "@/components/PhotoTile";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/services";
import { root, section, wrap } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Services — DIPON Group",
  description:
    "Construction, renewable energy, real estate, trading, logistics, and agriculture — delivered under one accountable Nigerian-owned group.",
};

export default function ServicesPage() {
  return (
    <div className={root}>
      <Header />
      <main id="top">
        <PageHero
          eyebrow="Services"
          title="Tell us what you need built, powered, supplied, or developed."
          intro="Six capabilities across construction, energy, property, and supply — sometimes delivered by one company, sometimes by several working on the same site."
          image="https://images.pexels.com/photos/8487763/pexels-photo-8487763.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imageAlt="DIPON Group construction worker on site"
        />

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
