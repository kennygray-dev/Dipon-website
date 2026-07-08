import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import PhotoTile from "@/components/PhotoTile";
import Reveal from "@/components/Reveal";
import { SUBSIDIARIES } from "@/lib/subsidiaries";
import { root, section, wrap } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Subsidiaries — DIPON Group",
  description:
    "Three specialized companies — DIPON Construction, DIPON Global Resources, and DIPON Infrastructure — under one accountable Nigerian-owned group.",
};

export default function SubsidiariesPage() {
  return (
    <div className={root}>
      <Header />
      <main id="top">
        <PageHero
          eyebrow="Subsidiaries"
          title="Three companies. One accountable group."
          intro="Each subsidiary is built for depth in its field — construction, commercial operations, and infrastructure — while the Group keeps them accountable to a single standard."
          image="https://images.pexels.com/photos/13116381/pexels-photo-13116381.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imageAlt="DIPON Group partnership"
        />

        <section className={section}>
          <div className={wrap}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
              {SUBSIDIARIES.map((subsidiary, i) => (
                <Reveal key={subsidiary.slug} delay={i * 130} className="aspect-[6/5] overflow-hidden rounded-[16px]">
                  <PhotoTile
                    href={`/subsidiaries/${subsidiary.slug}`}
                    image={subsidiary.heroImage}
                    imageAlt={`DIPON Group — ${subsidiary.name}`}
                    title={subsidiary.short}
                    desc={subsidiary.summary}
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
