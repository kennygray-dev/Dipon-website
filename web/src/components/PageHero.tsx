import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section
      className="on-dark"
      style={{
        background: "var(--color-bg-inverse)",
        padding: "clamp(150px,17vw,210px) var(--gutter) clamp(64px,8vw,104px)",
      }}
    >
      <div className="wrap">
        <Reveal style={{ maxWidth: 900 }}>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h2" style={{ fontSize: "clamp(34px,5vw,60px)", margin: "16px 0 0" }}>
            {title}
          </h1>
          <p className="lead" style={{ marginTop: 22, maxWidth: 680 }}>
            {intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
