import { ArrowIcon } from "./icons";

export default function Hero() {
  return (
    <section
      className="hero on-dark"
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "#151515",
      }}
    >
      <img
        src="https://loremflickr.com/1920/1280/construction,building,crane?lock=20"
        alt=""
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg,rgba(0,0,0,0.55) 0%,rgba(0,0,0,0.30) 34%,rgba(0,0,0,0.68) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg,rgba(0,0,0,0.62) 0%,rgba(0,0,0,0.15) 62%,rgba(0,0,0,0) 100%)",
        }}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 2, padding: "0 var(--gutter) clamp(70px,9vw,120px)" }}>
        <div className="reveal in" style={{ maxWidth: 880, position: "relative", top: 40 }}>
          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(40px,6.6vw,82px)",
              lineHeight: 1,
              letterSpacing: "-1.8px",
              color: "var(--color-text-on-inverse)",
              margin: "20px 0 24px",
              textWrap: "balance",
            }}
          >
            One Group.
            <br />
            Every Stage of the Build.
          </h1>
          <p className="lead" style={{ maxWidth: 600, margin: "0 0 36px" }}>
            DIPON Group integrates construction, power infrastructure, real estate, and supply chain capability under
            one accountable Nigerian-owned group — so your project moves forward without the coordination risk of
            multiple vendors.
          </p>
          <a className="btn" href="/contact">
            Start a Project <ArrowIcon width={26} height={11} />
          </a>
        </div>
      </div>
    </section>
  );
}
