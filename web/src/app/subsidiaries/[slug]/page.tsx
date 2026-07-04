import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";
import { SERVICES } from "@/lib/services";
import { SUBSIDIARIES, getSubsidiary } from "@/lib/subsidiaries";

export function generateStaticParams() {
  return SUBSIDIARIES.map((subsidiary) => ({ slug: subsidiary.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subsidiary = getSubsidiary(slug);
  if (!subsidiary) return { title: "Subsidiary Not Found — DIPON Group" };
  return {
    title: `${subsidiary.name} — DIPON Group`,
    description: subsidiary.summary,
  };
}

export default async function SubsidiaryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subsidiary = getSubsidiary(slug);
  if (!subsidiary) notFound();

  const services = subsidiary.serviceSlugs
    .map((s) => SERVICES.find((service) => service.slug === s))
    .filter((service): service is (typeof SERVICES)[number] => Boolean(service));
  const others = SUBSIDIARIES.filter((s) => s.slug !== subsidiary.slug);

  return (
    <div className="dipon-root">
      <Header heroIsDark />
      <main id="top">
        <PageHero eyebrow={`Subsidiary ${subsidiary.num}`} title={subsidiary.name} intro={subsidiary.intro} />

        <section style={{ padding: "var(--section-y) var(--gutter)" }}>
          <div className="wrap">
            <div
              className="split"
              style={{ display: "grid", gridTemplateColumns: "0.42fr 0.58fr", gap: "clamp(40px,6vw,90px)", alignItems: "start" }}
            >
              <Reveal>
                <span className="eyebrow">Who They Are</span>
                <h2 className="h2" style={{ marginTop: 14 }}>
                  {subsidiary.overviewHeading}
                </h2>
              </Reveal>
              <Reveal style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                {subsidiary.overview.map((para) => (
                  <p className="lead" key={para.slice(0, 24)}>
                    {para}
                  </p>
                ))}
                <div style={{ position: "relative", aspectRatio: "16/8", background: "#EDEBE6", border: "1px solid var(--color-border-default)" }}>
                  <img
                    src={`https://loremflickr.com/1400/700/${subsidiary.imageQuery}?lock=${subsidiary.imageLock}`}
                    alt={`${subsidiary.name} work`}
                    className="media-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section style={{ background: "var(--color-bg-surface)", borderTop: "1px solid var(--color-border-default)", borderBottom: "1px solid var(--color-border-default)", padding: "var(--section-y) var(--gutter)" }}>
          <div className="wrap">
            <Reveal style={{ maxWidth: 620 }}>
              <span className="eyebrow">Focus Areas</span>
              <h2 className="h2" style={{ marginTop: 14 }}>
                What they do.
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
              {subsidiary.focus.map((focus, i) => (
                <div key={focus.title} style={{ background: "var(--color-bg-surface)", padding: "32px 28px 34px" }}>
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
                      fontSize: 18,
                      letterSpacing: "-0.3px",
                      color: "var(--color-text-primary)",
                      margin: "14px 0 10px",
                    }}
                  >
                    {focus.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55, color: "var(--color-text-secondary)", margin: 0 }}>
                    {focus.desc}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section style={{ padding: "var(--section-y) var(--gutter)" }}>
          <div className="wrap">
            <Reveal style={{ maxWidth: 620, marginBottom: 44 }}>
              <span className="eyebrow">Services Delivered</span>
              <h2 className="h2" style={{ marginTop: 14 }}>
                What {subsidiary.short} delivers.
              </h2>
            </Reveal>
            <Reveal
              className="ind-grid"
              style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(services.length, 3)},1fr)`, gap: 1, background: "var(--color-border-default)", border: "1px solid var(--color-border-default)" }}
            >
              {services.map((service) => (
                <a className="ind-tile" href={`/services/${service.slug}`} key={service.slug} style={{ background: "#fff" }}>
                  <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 12, letterSpacing: "1px", color: "var(--color-accent)" }}>
                    {service.num}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, lineHeight: 1.15, letterSpacing: "-0.3px", color: "var(--color-text-primary)", margin: 0 }}>
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

        <section style={{ background: "var(--color-bg-surface)", borderTop: "1px solid var(--color-border-default)", padding: "var(--section-y) var(--gutter)" }}>
          <div className="wrap">
            <Reveal style={{ maxWidth: 620, marginBottom: 44 }}>
              <span className="eyebrow">The Group</span>
              <h2 className="h2" style={{ marginTop: 14 }}>
                The other companies.
              </h2>
            </Reveal>
            <Reveal
              className="ind-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 1, background: "var(--color-border-default)", border: "1px solid var(--color-border-default)" }}
            >
              {others.map((other) => (
                <a className="ind-tile" href={`/subsidiaries/${other.slug}`} key={other.slug} style={{ background: "#fff" }}>
                  <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 11, letterSpacing: "1.2px", textTransform: "uppercase", color: "var(--color-accent)" }}>
                    Subsidiary {other.num}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, lineHeight: 1.15, letterSpacing: "-0.3px", color: "var(--color-text-primary)", margin: 0 }}>
                    {other.name}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55, color: "var(--color-text-secondary)", margin: 0 }}>
                    {other.summary}
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
