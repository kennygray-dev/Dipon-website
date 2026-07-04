import type { Metadata } from "next";
import CareersContact from "@/components/CareersContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Careers — DIPON Group",
  description:
    "Build Africa's future with DIPON Group. We're always glad to meet talented people across construction, energy, real estate, and supply chain.",
};

type Perk = { title: string; desc: string };

const PERKS: Perk[] = [
  {
    title: "Real ownership",
    desc: "Take responsibility for work that ships — from civil sites to power systems and property.",
  },
  {
    title: "Cross-sector exposure",
    desc: "One group spanning construction, energy, real estate, trading, logistics, and agriculture.",
  },
  {
    title: "Grow with the group",
    desc: "A young, expanding Nigerian-owned business where the people who build it move up with it.",
  },
];

export default function CareersPage() {
  return (
    <div className="dipon-root">
      <Header heroIsDark />
      <main id="top">
        <PageHero
          eyebrow="Careers"
          title="Build Africa's future with us."
          intro="DIPON Group brings construction, renewable energy, real estate, and supply chain under one accountable group. When we grow, we grow with the people who deliver the work."
        />

        <section style={{ padding: "var(--section-y) var(--gutter)" }}>
          <div className="wrap">
            <Reveal style={{ maxWidth: 620 }}>
              <span className="eyebrow">Why DIPON</span>
              <h2 className="h2" style={{ marginTop: 14 }}>
                Work that&rsquo;s accountable end to end.
              </h2>
            </Reveal>
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 1,
                background: "var(--color-border-default)",
                border: "1px solid var(--color-border-default)",
                marginTop: 44,
              }}
            >
              {PERKS.map((perk, i) => (
                <Reveal key={perk.title} style={{ background: "#fff", padding: "34px 30px 36px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-label)",
                      fontWeight: 600,
                      fontSize: 11,
                      letterSpacing: "1.2px",
                      textTransform: "uppercase",
                      color: "var(--color-accent)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 20,
                      letterSpacing: "-0.3px",
                      color: "var(--color-text-primary)",
                      margin: "14px 0 10px",
                    }}
                  >
                    {perk.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.55, color: "var(--color-text-secondary)", margin: 0 }}>
                    {perk.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CareersContact />
      </main>
      <Footer />
    </div>
  );
}
