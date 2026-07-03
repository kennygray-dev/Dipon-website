import Reveal from "./Reveal";
import { ArrowIcon } from "./icons";

const PROJECTS = [
  {
    id: "proj-1",
    image: "https://loremflickr.com/900/700/road?lock=45",
    category: "Construction & Civil Engineering",
    title: "Access Road & Drainage Works",
    meta: "DIPON Construction · [Region], Nigeria",
  },
  {
    id: "proj-2",
    image: "https://loremflickr.com/900/700/solar?lock=51",
    category: "Renewable Energy & Power",
    title: "Solar Street Lighting Programme",
    meta: "DIPON Infrastructure · [Region], Nigeria",
  },
  {
    id: "proj-3",
    image: "https://loremflickr.com/900/700/building?lock=63",
    category: "Real Estate & Property",
    title: "Residential Housing Development",
    meta: "DIPON Infrastructure · [Region], Nigeria",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--color-bg-surface)", padding: "var(--section-y) var(--gutter)" }}>
      <div className="wrap">
        <Reveal style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 48 }}>
          <div style={{ maxWidth: 600 }}>
            <span className="eyebrow">Featured Projects</span>
            <h2 className="h2">Proof, not promises.</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              A look at the kind of work we deliver across sectors and subsidiaries.
            </p>
          </div>
          <a className="lk" href="#projects">
            View All Projects <ArrowIcon width={24} height={10} />
          </a>
        </Reveal>
        <Reveal className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
          {PROJECTS.map((project) => (
            <a className="proj-card" href="#projects" key={project.id}>
              <div className="media">
                <img src={project.image} alt={project.title} />
              </div>
              <span className="eyebrow" style={{ marginTop: 18 }}>
                {project.category}
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 21, lineHeight: 1.15, letterSpacing: "-0.3px", color: "var(--color-text-primary)", margin: "8px 0 6px" }}>
                {project.title}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--color-text-secondary)", margin: 0 }}>{project.meta}</p>
            </a>
          ))}
        </Reveal>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-text-tertiary)", margin: "28px 0 0" }}>
          Illustrative — to be replaced with verified project case studies.
        </p>
      </div>
    </section>
  );
}
