import Reveal from "./Reveal";
import { ArrowIcon } from "./icons";

const INDUSTRIES = [
  { num: "01", title: "Construction & Civil Engineering", desc: "Civil works, buildings, roads, and structural fabrication." },
  { num: "02", title: "Renewable Energy & Power Infrastructure", desc: "Solar systems, street lighting, and power infrastructure." },
  { num: "03", title: "Real Estate & Property Development", desc: "Housing and property development from groundbreaking to occupancy." },
  { num: "04", title: "Trading & Supply Chain", desc: "Import/export, materials supply, and product marketing." },
  { num: "05", title: "Transportation & Logistics", desc: "Movement of goods, materials, and equipment." },
  { num: "06", title: "Agriculture", desc: "Agricultural production and supply." },
];

export default function Industries() {
  return (
    <section id="industries" style={{ padding: "var(--section-y) var(--gutter)" }}>
      <div className="wrap">
        <Reveal style={{ maxWidth: 640, marginBottom: 48 }}>
          <span className="eyebrow">Industries We Serve</span>
          <h2 className="h2">Tell us what you need built, powered, supplied, or developed.</h2>
          <p className="lead" style={{ marginTop: 18 }}>
            We&rsquo;ll show you who at DIPON Group delivers it — sometimes one company, sometimes several working on
            the same site.
          </p>
        </Reveal>
        <Reveal
          className="ind-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--color-border-default)", border: "1px solid var(--color-border-default)" }}
        >
          {INDUSTRIES.map((ind) => (
            <a className="ind-tile" href="#industries" key={ind.num}>
              <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 12, letterSpacing: "1px", color: "var(--color-accent)" }}>
                {ind.num}
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 21, lineHeight: 1.15, letterSpacing: "-0.3px", color: "var(--color-text-primary)", margin: 0 }}>
                {ind.title}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55, color: "var(--color-text-secondary)", margin: 0 }}>
                {ind.desc}
              </p>
              <span style={{ marginTop: "auto", color: "var(--color-text-tertiary)" }}>
                <ArrowIcon width={24} height={10} />
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
