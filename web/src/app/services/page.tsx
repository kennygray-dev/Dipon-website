import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — DIPON Group",
  description:
    "Construction, renewable energy, real estate, trading, logistics, and agriculture — delivered under one accountable Nigerian-owned group.",
};

export default function ServicesPage() {
  return (
    <div className="dipon-root">
      <Header heroIsDark />
      <main id="top">
        <PageHero
          eyebrow="Services"
          title="Tell us what you need built, powered, supplied, or developed."
          intro="Six capabilities across construction, energy, property, and supply — sometimes delivered by one company, sometimes by several working on the same site."
        />

        <section style={{ padding: "var(--section-y) var(--gutter)" }}>
          <div className="wrap">
            <Reveal
              className="ind-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--color-border-default)", border: "1px solid var(--color-border-default)" }}
            >
              {SERVICES.map((service) => (
                <a className="ind-tile" href={`/services/${service.slug}`} key={service.slug} style={{ background: "#fff" }}>
                  <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 12, letterSpacing: "1px", color: "var(--color-accent)" }}>
                    {service.num}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 21, lineHeight: 1.15, letterSpacing: "-0.3px", color: "var(--color-text-primary)", margin: 0 }}>
                    {service.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55, color: "var(--color-text-secondary)", margin: 0 }}>
                    {service.summary}
                  </p>
                  <span style={{ marginTop: "auto", color: "var(--color-text-tertiary)" }}>
                    <ArrowIcon width={24} height={10} />
                  </span>
                </a>
              ))}
            </Reveal>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
