import Reveal from "./Reveal";
import { ArrowIcon } from "./icons";

const MINI_STATS = [
  { value: "[X]", label: "MW Installed" },
  { value: "[X]", label: "Communities Served" },
  { value: "[X]", label: "Solar Projects" },
];

export default function Sustainability() {
  return (
    <section id="sustainability" style={{ padding: "var(--section-y) var(--gutter)" }}>
      <div className="wrap">
        <div className="split" style={{ display: "grid", gridTemplateColumns: "0.46fr 0.54fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }}>
          <Reveal>
            <span className="eyebrow">Sustainability & Renewable Energy</span>
            <h2 className="h2">Sustainability built into how we build.</h2>
            <p className="lead" style={{ margin: "20px 0 28px" }}>
              Renewable energy isn&rsquo;t a separate division at DIPON Group — it&rsquo;s woven into how we deliver
              construction and infrastructure projects, from solar-powered sites to street lighting and power
              infrastructure for the communities we build in.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, borderTop: "1px solid var(--color-border-default)", paddingTop: 24, marginBottom: 30 }}>
              {MINI_STATS.map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "var(--color-text-primary)", letterSpacing: "-1px" }}>
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 11, letterSpacing: "0.6px", textTransform: "uppercase", color: "var(--color-text-secondary)", marginTop: 8 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <a className="lk" href="#sustainability">
              Explore Our Sustainability Commitment <ArrowIcon width={24} height={10} />
            </a>
          </Reveal>
          <Reveal style={{ position: "relative", aspectRatio: "5/6", background: "#EDEBE6", border: "1px solid var(--color-border-default)" }}>
            <img src="https://loremflickr.com/1000/1200/solar?lock=77" alt="Solar and renewable energy infrastructure" className="media-cover" />
            <div style={{ position: "absolute", right: -1, top: -1, width: 6, height: 72, background: "var(--color-accent)" }} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
