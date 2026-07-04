"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/services";

const SERVICE_OPTIONS = ["General inquiry", ...SERVICES.map((s) => s.title)];

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1–3 months",
  "3–6 months",
  "6+ months",
  "Just exploring",
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

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend wired yet — surface a confirmation state. Wire to an
    // endpoint or email service before launch.
    setSubmitted(true);
  };

  return (
    <section style={{ padding: "var(--section-y) var(--gutter)" }}>
      <div className="wrap">
        <div
          className="grid-2"
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "clamp(32px,5vw,72px)",
            alignItems: "start",
          }}
        >
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div>
              <span className="eyebrow">Get in Touch</span>
              <h2 className="h2" style={{ marginTop: 14 }}>
                Tell us about your project.
              </h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Share a few details and we&rsquo;ll get the right people at DIPON Group back to you.
              </p>
            </div>
            <div>
              <span style={fieldLabelStyle}>Call us</span>
              <a
                href="tel:+2340000000000"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(22px,2.6vw,28px)",
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
              <a className="lk" href="mailto:hello@dipongroup.example">
                [Email Address]
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
                style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border-default)", padding: "40px 36px" }}
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
                  We&rsquo;ve got your project details.
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--color-text-secondary)", margin: 0 }}>
                  Thanks for reaching out. Our team will review what you sent and be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "var(--color-bg-surface)",
                  border: "1px solid var(--color-border-default)",
                  padding: "clamp(28px,3vw,40px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div>
                    <label htmlFor="pf-name" style={fieldLabelStyle}>Full name</label>
                    <input id="pf-name" name="name" type="text" required style={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="pf-company" style={fieldLabelStyle}>Company</label>
                    <input id="pf-company" name="company" type="text" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div>
                    <label htmlFor="pf-email" style={fieldLabelStyle}>Email</label>
                    <input id="pf-email" name="email" type="email" required style={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="pf-phone" style={fieldLabelStyle}>Phone</label>
                    <input id="pf-phone" name="phone" type="tel" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div>
                    <label htmlFor="pf-service" style={fieldLabelStyle}>Service needed</label>
                    <select id="pf-service" name="service" defaultValue="" required style={inputStyle}>
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="pf-timeline" style={fieldLabelStyle}>Timeline</label>
                    <select id="pf-timeline" name="timeline" defaultValue="" style={inputStyle}>
                      <option value="" disabled>
                        Select a timeline
                      </option>
                      {TIMELINE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="pf-message" style={fieldLabelStyle}>Tell us about your project</label>
                  <textarea id="pf-message" name="message" rows={5} required style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                <button className="btn" type="submit" style={{ justifyContent: "center" }}>
                  Send Project Details
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
