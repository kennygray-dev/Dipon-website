import Reveal from "./Reveal";
import { ArrowIcon } from "./icons";

type Subsidiary = {
  num: string;
  name: string;
  desc: string;
  tags: string[];
  cta: string;
};

const SUBSIDIARIES: Subsidiary[] = [
  {
    num: "Subsidiary 01",
    name: "DIPON Construction Limited",
    desc: "Civil engineering, building construction, and general contracting — the Group's core build capability.",
    tags: ["Civil Engineering", "Roads & Bridges", "General Contracting"],
    cta: "Visit DIPON Construction",
  },
  {
    num: "Subsidiary 02",
    name: "DIPON Global Resources Limited",
    desc: "Trading, supply chain, real estate, agriculture, and logistics — the commercial engine behind every project.",
    tags: ["General Trading", "Import & Export", "Real Estate", "Agriculture"],
    cta: "Visit DIPON Global Resources",
  },
  {
    num: "Subsidiary 03",
    name: "DIPON Infrastructure Limited",
    desc: "Renewable energy, power infrastructure, and housing development — the Group's power and property arm.",
    tags: ["Renewable Energy", "Solar Infrastructure", "Housing"],
    cta: "Visit DIPON Infrastructure",
  },
];

export default function Subsidiaries() {
  return (
    <section id="subsidiaries" style={{ background: "var(--color-bg-surface)", padding: "var(--section-y) var(--gutter)" }}>
      <div className="wrap">
        <Reveal
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 48 }}
        >
          <div style={{ maxWidth: 560 }}>
            <h2 className="h2">Three companies. One accountable group.</h2>
          </div>
          <a className="lk" href="#subsidiaries">
            Explore Our Companies <ArrowIcon width={24} height={10} />
          </a>
        </Reveal>
        <Reveal className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {SUBSIDIARIES.map((sub) => (
            <div className="sub-card" key={sub.num}>
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
                {sub.num}
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
                {sub.name}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--color-text-secondary)", margin: "0 0 22px" }}>
                {sub.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 26 }}>
                {sub.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a className="lk" href="#subsidiaries" style={{ marginTop: "auto" }}>
                {sub.cta} <ArrowIcon />
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
