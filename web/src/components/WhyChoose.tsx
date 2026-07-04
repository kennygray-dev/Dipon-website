import Reveal from "./Reveal";
import { ArrowIcon } from "./icons";

const REASONS = [
  {
    title: "Integrated Execution",
    desc: "One group, one point of accountability — across civil works, power, and supply chain.",
  },
  {
    title: "Engineering-Grade Reliability",
    desc: "Licensed, certified, and governed to a standard procurement teams can verify.",
  },
  {
    title: "Sustainable by Design",
    desc: "Renewable energy capability built into how we deliver, not bolted on afterward.",
  },
  {
    title: "Local Roots, Global Standards",
    desc: "Nigerian-owned, with delivery standards built for international-grade projects.",
  },
  {
    title: "Partnership Over Transactions",
    desc: "We build relationships designed to outlast a single contract.",
  },
];

export default function WhyChoose() {
  return (
    <section className="on-dark" style={{ background: "var(--color-bg-inverse)", padding: "var(--section-y) var(--gutter)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", top: 0, right: 0, width: "46%", height: "100%", opacity: 0.5 }}>
        <svg width="100%" height="100%" viewBox="0 0 600 700" preserveAspectRatio="xMidYMid slice">
          <path d="M360 0 L600 360 L600 0 Z" fill="#FD802E" opacity="0.05" />
          <path d="M480 700 L600 470 L600 700 Z" fill="#FFFFFF" opacity="0.03" />
        </svg>
      </div>
      <div className="wrap" style={{ position: "relative" }}>
        <Reveal style={{ maxWidth: 600, marginBottom: 54 }}>
          <span className="eyebrow">Why Choose DIPON</span>
          <h2 className="h2">Capability, turned into a client advantage.</h2>
        </Reveal>
        <Reveal
          className="why-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "rgba(255,249,235,0.12)", border: "1px solid rgba(255,249,235,0.12)" }}
        >
          {REASONS.map((reason) => (
            <div key={reason.title} style={{ background: "var(--color-bg-inverse)", padding: "34px 30px" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--color-text-on-inverse)", marginBottom: 12 }}>
                {reason.title}
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--color-text-on-inverse-muted)", margin: 0 }}>
                {reason.desc}
              </p>
            </div>
          ))}
          <div style={{ background: "var(--color-bg-inverse-alt)", padding: "34px 30px", display: "flex", alignItems: "center" }}>
            <a className="lk" href="/contact">
              Start a Project <ArrowIcon width={24} height={10} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
