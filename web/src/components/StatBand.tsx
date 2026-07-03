"use client";

import { useEffect, useRef } from "react";

type Stat = { id: string; value: string; label: string };

const STATS: Stat[] = [
  { id: "stat-years", value: "3+", label: "Years in Operation" },
  { id: "stat-sectors", value: "6", label: "Sectors Served" },
];

function animateStat(el: HTMLElement) {
  const finalText = el.dataset.final || el.textContent || "";
  const m = finalText.match(/(\d[\d,]*)/);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!m || reduce) {
    el.textContent = finalText;
    return;
  }
  const prefix = finalText.slice(0, m.index);
  const suffix = finalText.slice((m.index ?? 0) + m[0].length);
  const target = parseInt(m[1].replace(/,/g, ""), 10);
  const dur = 1100;
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + Math.round(target * eased).toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function StatBand() {
  const bandRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const band = bandRef.current;
    if (!band || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            STATS.forEach(({ id }) => {
              const el = document.getElementById(id);
              if (el) animateStat(el);
            });
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(band);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="stat-band"
      style={{
        background: "var(--color-bg-surface)",
        borderTop: "1px solid var(--color-border-default)",
        borderBottom: "1px solid var(--color-border-default)",
        padding: "clamp(54px,6vw,76px) var(--gutter)",
      }}
    >
      <div className="wrap reveal in" ref={bandRef}>
        <div
          className="grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "1px",
            background: "var(--color-border-default)",
            border: "1px solid var(--color-border-default)",
            width: "100%",
          }}
        >
          {STATS.map((stat) => (
            <div key={stat.id} style={{ background: "var(--color-bg-surface)", padding: "30px 26px" }}>
              <div
                id={stat.id}
                data-final={stat.value}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(40px,5vw,60px)",
                  lineHeight: 1,
                  color: "var(--color-text-primary)",
                  letterSpacing: "-1.5px",
                  width: "100%",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  color: "var(--color-text-secondary)",
                  marginTop: 14,
                  width: "100%",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-text-tertiary)", margin: "18px 0 0" }}>
          Verified figures to be confirmed before launch.
        </p>
      </div>
    </section>
  );
}
