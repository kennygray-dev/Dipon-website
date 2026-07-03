import Reveal from "./Reveal";
import { ArrowIcon } from "./icons";

export default function CtaBand() {
  return (
    <section
      id="cta"
      className="on-dark cta-diagonal"
      style={{
        position: "relative",
        background: "var(--color-bg-inverse)",
        clipPath: "polygon(0 64px,100% 0,100% 100%,0 100%)",
        padding: "clamp(110px,13vw,160px) var(--gutter) clamp(80px,10vw,120px)",
        textAlign: "center",
      }}
    >
      <Reveal className="wrap" style={{ maxWidth: 820, margin: "0 auto" }}>
        <h2 className="h2" style={{ fontSize: "clamp(30px,4vw,50px)", margin: "0 0 32px" }}>
          Have a project in mind? Let&rsquo;s talk about how DIPON Group delivers it.
        </h2>
        <a className="btn" href="#cta">
          Discuss Your Next Project <ArrowIcon width={26} height={11} />
        </a>
      </Reveal>
    </section>
  );
}
