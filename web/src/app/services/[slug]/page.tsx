import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";
import { SERVICES, SUBSIDIARY_BLURBS, getService } from "@/lib/services";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found — DIPON Group" };
  return {
    title: `${service.titleLong} — DIPON Group`,
    description: service.summary,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div className="dipon-root">
      <Header heroIsDark />
      <main id="top">
        <PageHero eyebrow={`Service ${service.num}`} title={service.titleLong} intro={service.intro} />

        <section style={{ padding: "var(--section-y) var(--gutter)" }}>
          <div className="wrap">
            <div
              className="split"
              style={{ display: "grid", gridTemplateColumns: "0.42fr 0.58fr", gap: "clamp(40px,6vw,90px)", alignItems: "start" }}
            >
              <Reveal>
                <span className="eyebrow">What We Do</span>
                <h2 className="h2" style={{ marginTop: 14 }}>
                  {service.overviewHeading}
                </h2>
              </Reveal>
              <Reveal style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                {service.overview.map((para) => (
                  <p className="lead" key={para.slice(0, 24)}>
                    {para}
                  </p>
                ))}
                <div style={{ position: "relative", aspectRatio: "16/8", background: "#EDEBE6", border: "1px solid var(--color-border-default)" }}>
                  <img
                    src={`https://loremflickr.com/1400/700/${service.imageQuery}?lock=${service.imageLock}`}
                    alt={`DIPON Group ${service.title.toLowerCase()} work`}
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
              <span className="eyebrow">Capabilities</span>
              <h2 className="h2" style={{ marginTop: 14 }}>
                What&rsquo;s included.
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
              {service.capabilities.map((cap, i) => (
                <div key={cap.title} style={{ background: "var(--color-bg-surface)", padding: "32px 28px 34px" }}>
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
                    {cap.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55, color: "var(--color-text-secondary)", margin: 0 }}>
                    {cap.desc}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section style={{ padding: "var(--section-y) var(--gutter)" }}>
          <div className="wrap">
            <div
              className="split"
              style={{ display: "grid", gridTemplateColumns: "0.42fr 0.58fr", gap: "clamp(40px,6vw,90px)", alignItems: "start" }}
            >
              <Reveal>
                <span className="eyebrow">Delivered By</span>
                <h2 className="h2" style={{ marginTop: 14 }}>
                  {service.deliveredBy}
                </h2>
              </Reveal>
              <Reveal style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
                <p className="lead">{SUBSIDIARY_BLURBS[service.deliveredBy]}</p>
                <a className="lk" href="/#subsidiaries">
                  Explore Our Companies <ArrowIcon width={24} height={10} />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <section style={{ background: "var(--color-bg-surface)", borderTop: "1px solid var(--color-border-default)", padding: "var(--section-y) var(--gutter)" }}>
          <div className="wrap">
            <Reveal style={{ maxWidth: 620, marginBottom: 44 }}>
              <span className="eyebrow">More Services</span>
              <h2 className="h2" style={{ marginTop: 14 }}>
                Explore what else we deliver.
              </h2>
            </Reveal>
            <Reveal
              className="ind-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--color-border-default)", border: "1px solid var(--color-border-default)" }}
            >
              {others.map((other) => (
                <a className="ind-tile" href={`/services/${other.slug}`} key={other.slug} style={{ background: "#fff" }}>
                  <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 12, letterSpacing: "1px", color: "var(--color-accent)" }}>
                    {other.num}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, lineHeight: 1.15, letterSpacing: "-0.3px", color: "var(--color-text-primary)", margin: 0 }}>
                    {other.title}
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
