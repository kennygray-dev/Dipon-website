import Image from "next/image";
import { SERVICES } from "@/lib/services";
import { SUBSIDIARIES } from "@/lib/subsidiaries";

const FOOTER_LINK_STYLE = {
  fontFamily: "var(--font-body)",
  fontSize: 14,
  color: "var(--color-text-on-inverse)",
  textDecoration: "none",
  opacity: 0.82,
} as const;

const FOOTER_HEAD_STYLE = {
  fontFamily: "var(--font-label)",
  fontWeight: 600,
  fontSize: 11,
  letterSpacing: "1.2px",
  textTransform: "uppercase",
  color: "var(--color-text-on-inverse-muted)",
  marginBottom: 16,
} as const;

const FOOTER_LIST_STYLE = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: 11,
} as const;

export default function Footer() {
  return (
    <footer className="on-dark" style={{ background: "var(--color-bg-inverse-alt)", color: "var(--color-text-on-inverse)", padding: "72px var(--gutter) 36px" }}>
      <div className="wrap">
        <div
          className="grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1.2fr 1fr 1.1fr",
            gap: 40,
            alignItems: "start",
            borderBottom: "1px solid rgba(255,249,235,0.16)",
            paddingBottom: 48,
          }}
        >
          <div>
            <Image src="/assets/dipon-logo-light.svg" alt="DIPON Group" width={493} height={142} style={{ height: 34, width: "auto", display: "block" }} />
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.65, color: "var(--color-text-on-inverse-muted)", maxWidth: 280, margin: "20px 0 0" }}>
              Building Sustainable Infrastructure and Business Solutions for Africa&rsquo;s Future.
            </p>
          </div>
          <nav aria-label="Company">
            <div style={FOOTER_HEAD_STYLE}>Company</div>
            <ul style={FOOTER_LIST_STYLE}>
              <li><a href="/about" style={FOOTER_LINK_STYLE}>About Us</a></li>
              <li><a href="/careers" style={FOOTER_LINK_STYLE}>Careers</a></li>
              <li><a href="/contact" style={FOOTER_LINK_STYLE}>Contact</a></li>
            </ul>
          </nav>
          <nav aria-label="Services">
            <div style={FOOTER_HEAD_STYLE}>Services</div>
            <ul style={FOOTER_LIST_STYLE}>
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <a href={`/services/${service.slug}`} style={FOOTER_LINK_STYLE}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Subsidiaries">
            <div style={FOOTER_HEAD_STYLE}>Subsidiaries</div>
            <ul style={FOOTER_LIST_STYLE}>
              {SUBSIDIARIES.map((subsidiary) => (
                <li key={subsidiary.slug}>
                  <a href={`/subsidiaries/${subsidiary.slug}`} style={FOOTER_LINK_STYLE}>
                    {subsidiary.short}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Offices">
            <div style={FOOTER_HEAD_STYLE}>Offices</div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.65, color: "var(--color-text-on-inverse-muted)", margin: 0 }}>
              [Head Office]
              <br />
              [City/Region], Nigeria
              <br />
              [Phone] · [Email]
            </p>
          </nav>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14, marginTop: 28 }}>
          <span style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: "0.6px", color: "var(--color-text-on-inverse-muted)" }}>
            © [Year] DIPON Group. All rights reserved.
          </span>
          <span style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: "0.6px", color: "var(--color-text-on-inverse-muted)" }}>
            Privacy Policy · Terms of Use · Cookie Policy
          </span>
        </div>
      </div>
    </footer>
  );
}
