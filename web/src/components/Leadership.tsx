import Reveal from "./Reveal";
import { ArrowIcon } from "./icons";

export default function Leadership() {
  return (
    <section id="careers" style={{ padding: "var(--section-y) var(--gutter)" }}>
      <div className="wrap">
        <div className="split" style={{ display: "grid", gridTemplateColumns: "0.62fr 0.38fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }}>
          <Reveal>
            <span className="eyebrow">From the Leadership</span>
            <blockquote
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(24px,2.8vw,34px)",
                lineHeight: 1.25,
                letterSpacing: "-0.6px",
                color: "var(--color-text-primary)",
                margin: "22px 0 28px",
                textWrap: "pretty",
              }}
            >
              &ldquo;[Quote from Group leadership on the Group&rsquo;s mission, accountability, or growth — to be
              supplied.]&rdquo;
            </blockquote>
            <div style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 13, letterSpacing: "0.6px", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: 26 }}>
              [Executive Name] · [Title], DIPON Group
            </div>
            <a className="lk" href="#careers">
              Meet Our Leadership <ArrowIcon width={24} height={10} />
            </a>
          </Reveal>
          <Reveal style={{ position: "relative", aspectRatio: "4/5", background: "#EDEBE6", border: "1px solid var(--color-border-default)" }}>
            <img src="https://loremflickr.com/800/1000/suit?lock=88" alt="DIPON Group leadership portrait" className="media-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
