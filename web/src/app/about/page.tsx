import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Leadership from "@/components/Leadership";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import StatBand from "@/components/StatBand";

export const metadata: Metadata = {
  title: "About Us — DIPON Group",
  description:
    "DIPON Group is a Nigerian-owned conglomerate delivering construction, renewable energy, real estate, and supply chain solutions through three specialized companies.",
};

type Value = { title: string; desc: string };

const VALUES: Value[] = [
  {
    title: "Accountability",
    desc: "One group answerable for every stage — no risk lost at the handoff between contractors.",
  },
  {
    title: "Integrated Delivery",
    desc: "Design, build, power, and occupancy kept under a single, coordinated group.",
  },
  {
    title: "Local Ownership",
    desc: "Nigerian-owned and Nigerian-led, investing in the communities we build in.",
  },
  {
    title: "Sustainability",
    desc: "Renewable energy woven into how we deliver, not bolted on afterwards.",
  },
];

export default function AboutPage() {
  return (
    <div className="dipon-root">
      <Header heroIsDark />
      <main id="top">
        <PageHero
          eyebrow="About DIPON Group"
          title="One accountable group, across the full build lifecycle."
          intro="We integrate construction, power infrastructure, real estate, and supply chain capability under one Nigerian-owned group — so the risk that usually lives between contractors lives with us instead."
        />

        <section id="overview" style={{ padding: "var(--section-y) var(--gutter)" }}>
          <div className="wrap">
            <div
              className="split"
              style={{ display: "grid", gridTemplateColumns: "0.42fr 0.58fr", gap: "clamp(40px,6vw,90px)", alignItems: "start" }}
            >
              <Reveal>
                <span className="eyebrow">Who We Are</span>
                <h2 className="h2" style={{ marginTop: 14 }}>
                  A Nigerian-owned group built to remove risk at the handoff.
                </h2>
              </Reveal>
              <Reveal style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <p className="lead">
                  DIPON Group is a Nigerian-owned conglomerate delivering construction, renewable energy, real estate,
                  and supply chain solutions through three specialized companies. Each subsidiary is built for depth in
                  its field, while the Group keeps them accountable to a single standard.
                </p>
                <p className="lead">
                  Where most projects fail at the handoff between contractors, we remove that risk by keeping every
                  stage — design, build, power, and occupancy — accountable to one group. That is what lets us take on
                  work end to end and stand behind the result.
                </p>
                <div style={{ position: "relative", aspectRatio: "16/8", background: "#EDEBE6", border: "1px solid var(--color-border-default)" }}>
                  <img
                    src="https://loremflickr.com/1400/700/construction?lock=32"
                    alt="DIPON Group construction and integration project"
                    className="media-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <StatBand />

        <section style={{ padding: "var(--section-y) var(--gutter)" }}>
          <div className="wrap">
            <Reveal style={{ maxWidth: 620 }}>
              <span className="eyebrow">What Guides Us</span>
              <h2 className="h2" style={{ marginTop: 14 }}>
                The standards behind every project.
              </h2>
            </Reveal>
            <Reveal
              className="ind-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 1,
                background: "var(--color-border-default)",
                border: "1px solid var(--color-border-default)",
                marginTop: 44,
              }}
            >
              {VALUES.map((value, i) => (
                <div key={value.title} style={{ background: "#fff", padding: "32px 28px 34px" }}>
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
                      fontSize: 19,
                      letterSpacing: "-0.3px",
                      color: "var(--color-text-primary)",
                      margin: "14px 0 10px",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55, color: "var(--color-text-secondary)", margin: 0 }}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <Leadership />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
