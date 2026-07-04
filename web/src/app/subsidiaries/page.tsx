import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";
import { SUBSIDIARIES } from "@/lib/subsidiaries";

export const metadata: Metadata = {
  title: "Subsidiaries — DIPON Group",
  description:
    "Three specialized companies — DIPON Construction, DIPON Global Resources, and DIPON Infrastructure — under one accountable Nigerian-owned group.",
};

export default function SubsidiariesPage() {
  return (
    <div className="dipon-root">
      <Header heroIsDark />
      <main id="top">
        <PageHero
          eyebrow="Subsidiaries"
          title="Three companies. One accountable group."
          intro="Each subsidiary is built for depth in its field — construction, commercial operations, and infrastructure — while the Group keeps them accountable to a single standard."
        />

        <section style={{ padding: "var(--section-y) var(--gutter)" }}>
          <div className="wrap">
            <Reveal className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
              {SUBSIDIARIES.map((subsidiary) => (
                <div className="sub-card" key={subsidiary.slug}>
                  <span
                    style={{
                      fontFamily: "var(--font-label)",
                      fontWeight: 600,
                      fontSize: 11,
                      letterSpacing: "1.4px",
                      textTransform: "uppercase",
                      color: "var(--color-accent)",
                    }}
                  >
                    Subsidiary {subsidiary.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 23,
                      lineHeight: 1.12,
                      letterSpacing: "-0.3px",
                      color: "var(--color-text-primary)",
                      margin: "12px 0 14px",
                    }}
                  >
                    {subsidiary.name}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--color-text-secondary)", margin: "0 0 22px" }}>
                    {subsidiary.summary}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 26 }}>
                    {subsidiary.focus.map((focus) => (
                      <span className="tag" key={focus.title}>
                        {focus.title}
                      </span>
                    ))}
                  </div>
                  <a className="lk" href={`/subsidiaries/${subsidiary.slug}`} style={{ marginTop: "auto" }}>
                    Visit {subsidiary.short} <ArrowIcon />
                  </a>
                </div>
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
