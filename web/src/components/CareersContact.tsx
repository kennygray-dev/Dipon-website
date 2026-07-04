"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const INTERESTS = [
  "Construction & Civil Engineering",
  "Renewable Energy & Power",
  "Real Estate & Property",
  "Trading & Supply Chain",
  "Transportation & Logistics",
  "Agriculture",
  "Corporate & Administration",
  "Other",
];

const fieldLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-label)",
  fontWeight: 600,
  fontSize: 11,
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "var(--color-text-secondary)",
  marginBottom: 8,
  display: "block",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "var(--font-body)",
  fontSize: 15,
  color: "var(--color-text-primary)",
  background: "#fff",
  border: "1px solid var(--color-border-default)",
  borderRadius: 0,
  padding: "13px 15px",
  outline: "none",
};

export default function CareersContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend wired yet — surface a confirmation state. Wire to an
    // endpoint or email service before launch.
    setSubmitted(true);
  };

  return (
    <section id="cta" style={{ padding: "var(--section-y) var(--gutter)", background: "var(--color-bg-surface)", borderTop: "1px solid var(--color-border-default)" }}>
      <div className="wrap">
        <Reveal style={{ maxWidth: 640 }}>
          <span className="eyebrow">Open Positions</span>
          <h2 className="h2" style={{ marginTop: 14 }}>
            No open roles right now.
          </h2>
          <p className="lead" style={{ marginTop: 20 }}>
            We&rsquo;re not actively hiring for a specific position at the moment — but we&rsquo;re always glad to meet
            talented people who want to build Africa&rsquo;s future with us. Introduce yourself and we&rsquo;ll reach
            out when something fits.
          </p>
        </Reveal>

        <div
          className="grid-2"
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "clamp(32px,5vw,72px)",
            alignItems: "start",
            marginTop: "clamp(40px,5vw,64px)",
          }}
        >
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div>
              <span style={fieldLabelStyle}>Prefer to talk?</span>
              <a
                href="tel:+2340000000000"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(24px,3vw,32px)",
                  letterSpacing: "-0.5px",
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                }}
              >
                [Phone Number]
              </a>
            </div>
            <div>
              <span style={fieldLabelStyle}>Email</span>
              <a className="lk" href="mailto:careers@dipongroup.example">
                [Careers Email]
              </a>
            </div>
            <div>
              <span style={fieldLabelStyle}>Head Office</span>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--color-text-secondary)", margin: 0 }}>
                [Head Office Address]
                <br />
                [City/Region], Nigeria
              </p>
            </div>
          </Reveal>

          <Reveal>
            {submitted ? (
              <div
                role="status"
                style={{
                  background: "#fff",
                  border: "1px solid var(--color-border-default)",
                  padding: "40px 36px",
                }}
              >
                <span className="eyebrow">Thank You</span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 24,
                    letterSpacing: "-0.4px",
                    color: "var(--color-text-primary)",
                    margin: "12px 0 10px",
                  }}
                >
                  We&rsquo;ve got your details.
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--color-text-secondary)", margin: 0 }}>
                  Thanks for reaching out. Our team will be in touch when a role that matches your background opens up.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "#fff",
                  border: "1px solid var(--color-border-default)",
                  padding: "clamp(28px,3vw,40px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div>
                    <label htmlFor="cf-name" style={fieldLabelStyle}>Full name</label>
                    <input id="cf-name" name="name" type="text" required style={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="cf-phone" style={fieldLabelStyle}>Phone</label>
                    <input id="cf-phone" name="phone" type="tel" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label htmlFor="cf-email" style={fieldLabelStyle}>Email</label>
                  <input id="cf-email" name="email" type="email" required style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="cf-interest" style={fieldLabelStyle}>Area of interest</label>
                  <select id="cf-interest" name="interest" defaultValue="" required style={inputStyle}>
                    <option value="" disabled>
                      Select an area
                    </option>
                    {INTERESTS.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="cf-message" style={fieldLabelStyle}>Tell us about yourself</label>
                  <textarea id="cf-message" name="message" rows={4} style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                <button className="btn" type="submit" style={{ justifyContent: "center" }}>
                  Send Introduction
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
