import Reveal from "./Reveal";
import { ArrowIcon } from "./icons";

export default function Overview() {
  return (
    <section id="overview" style={{ padding: "var(--section-y) var(--gutter)" }}>
      <div className="wrap">
        <div
          className="split"
          style={{ display: "grid", gridTemplateColumns: "0.42fr 0.58fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }}
        >
          <Reveal>
            <h2 className="h2">One accountable group, across the full build lifecycle.</h2>
          </Reveal>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <p className="lead">
              DIPON Group is a Nigerian-owned conglomerate delivering construction, renewable energy, real estate, and
              supply chain solutions through three specialized companies. Where most projects fail at the handoff
              between contractors, we remove that risk by keeping every stage — design, build, power, and occupancy —
              accountable to one group.
            </p>
            <div style={{ position: "relative", aspectRatio: "16/8", background: "#EDEBE6", border: "1px solid var(--color-border-default)" }}>
              <img
                src="https://loremflickr.com/1400/700/construction?lock=32"
                alt="DIPON Group construction and integration project"
                className="media-cover"
              />
            </div>
            <a className="lk" href="/about">
              Learn More About Us <ArrowIcon width={24} height={10} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
