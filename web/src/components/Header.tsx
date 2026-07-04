"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowIcon, BurgerIcon, CaretIcon, CloseIcon } from "./icons";

type MegaLink = { title: string; href: string; desc: string; num?: string };
type MegaGroup = {
  key: string;
  label: string;
  href: string;
  eyebrow: string;
  heading: string;
  railLinkLabel: string;
  railHref: string;
  columns: number;
  links: MegaLink[];
};

const MEGA_GROUPS: MegaGroup[] = [
  {
    key: "company",
    label: "Company",
    href: "/about",
    eyebrow: "The Group",
    heading: "A Nigerian-owned group, accountable across the full build lifecycle.",
    railLinkLabel: "About DIPON Group",
    railHref: "/about",
    columns: 2,
    links: [
      { title: "About Us", href: "/about", desc: "Who we are, our mission, and how the Group is structured." },
      { title: "Careers", href: "/careers", desc: "Build Africa's future with us." },
    ],
  },
  {
    key: "services",
    label: "Services",
    href: "/services",
    eyebrow: "Industries We Serve",
    heading: "Tell us what you need built, powered, supplied, or developed.",
    railLinkLabel: "All Services",
    railHref: "/services",
    columns: 3,
    links: [
      { num: "01", title: "Construction & Civil Engineering", href: "/services/construction-civil-engineering", desc: "Civil works, buildings, roads, and structural fabrication." },
      { num: "02", title: "Renewable Energy & Power", href: "/services/renewable-energy-power", desc: "Solar systems, street lighting, and power infrastructure." },
      { num: "03", title: "Real Estate & Property", href: "/services/real-estate-property", desc: "Housing and property development to occupancy." },
      { num: "04", title: "Trading & Supply Chain", href: "/services/trading-supply-chain", desc: "Import/export, materials supply, and marketing." },
      { num: "05", title: "Transportation & Logistics", href: "/services/transportation-logistics", desc: "Movement of goods, materials, and equipment." },
      { num: "06", title: "Agriculture", href: "/services/agriculture", desc: "Agricultural production and supply." },
    ],
  },
  {
    key: "subsidiaries",
    label: "Subsidiaries",
    href: "/subsidiaries",
    eyebrow: "Subsidiaries",
    heading: "Three companies. One accountable group.",
    railLinkLabel: "Explore Our Companies",
    railHref: "/subsidiaries",
    columns: 3,
    links: [
      { num: "Subsidiary 01", title: "DIPON Construction Limited", href: "/subsidiaries/dipon-construction", desc: "Civil engineering, building construction, and general contracting — the Group's core build capability." },
      { num: "Subsidiary 02", title: "DIPON Global Resources Limited", href: "/subsidiaries/dipon-global-resources", desc: "Trading, supply chain, real estate, agriculture, and logistics — the commercial engine." },
      { num: "Subsidiary 03", title: "DIPON Infrastructure Limited", href: "/subsidiaries/dipon-infrastructure", desc: "Renewable energy, power infrastructure, and housing development." },
    ],
  },
];

export default function Header({ heroIsDark = true }: { heroIsDark?: boolean }) {
  const [solid, setSolid] = useState(!heroIsDark);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setSolid(!heroIsDark || y > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroIsDark]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const closeDrawer = () => {
    setDrawerOpen(false);
    setOpenGroup(null);
  };

  return (
    <>
      <header id="dipon-header" className={solid || drawerOpen ? "is-solid" : ""}>
        <a href="/" aria-label="DIPON Group — home" style={{ display: "flex", alignItems: "center" }}>
          <Image className="logo logo-light" src="/assets/dipon-logo-light.svg" alt="DIPON Group" width={493} height={142} priority />
          <Image className="logo logo-dark" src="/assets/dipon-logo-dark.svg" alt="DIPON Group" width={493} height={142} priority />
        </a>
        <nav className="h-nav" aria-label="Primary">
          {MEGA_GROUPS.map((group) => (
            <div className="h-item" key={group.key}>
              <a className="h-top" href={group.href} aria-haspopup="true">
                {group.label} <span className="caret"><CaretIcon /></span>
              </a>
              <div className="mega" role="menu" aria-label={group.label}>
                <div className="mega-grid">
                  <div className="mega-rail">
                    <span className="eyebrow">{group.eyebrow}</span>
                    <h4>{group.heading}</h4>
                    <a className="lk" href={group.railHref}>
                      {group.railLinkLabel} <ArrowIcon />
                    </a>
                  </div>
                  <div className="mega-list" style={{ gridTemplateColumns: `repeat(${group.columns},1fr)` }}>
                    {group.links.map((link) => (
                      <a className="mega-link" href={link.href} key={link.title}>
                        {link.num && <span className="ml-num">{link.num}</span>}
                        <span className="ml-title">{link.title}</span>
                        <span className="ml-desc">{link.desc}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </nav>
        <div className="h-right">
          <a className="btn" href="/contact" style={{ padding: "13px 20px", fontSize: 12 }}>
            Start a Project
          </a>
          <button className="h-burger" aria-label="Open menu" aria-expanded={drawerOpen} onClick={() => setDrawerOpen(true)}>
            <BurgerIcon />
          </button>
        </div>
      </header>

      <div className={`mobile-drawer-overlay ${drawerOpen ? "is-open" : ""}`} onClick={closeDrawer} aria-hidden={!drawerOpen} />
      <nav className={`mobile-drawer ${drawerOpen ? "is-open" : ""}`} aria-label="Mobile" aria-hidden={!drawerOpen}>
        <div className="mobile-drawer-head">
          <Image src="/assets/dipon-logo-dark.svg" alt="DIPON Group" width={493} height={142} style={{ height: 26, width: "auto" }} />
          <button className="mobile-drawer-close" aria-label="Close menu" onClick={closeDrawer}>
            <CloseIcon />
          </button>
        </div>
        <div>
          {MEGA_GROUPS.map((group) => {
            const isOpen = openGroup === group.key;
            return (
              <div className="mobile-nav-group" key={group.key}>
                <button
                  className="mobile-nav-toggle"
                  aria-expanded={isOpen}
                  onClick={() => setOpenGroup(isOpen ? null : group.key)}
                >
                  {group.label}
                  <span className="caret"><CaretIcon /></span>
                </button>
                <div className={`mobile-nav-panel ${isOpen ? "is-open" : ""}`}>
                  <div>
                    {group.links.map((link) => (
                      <a className="mobile-nav-link" href={link.href} key={link.title} onClick={closeDrawer}>
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mobile-drawer-foot">
          <a className="btn" href="/contact" onClick={closeDrawer} style={{ justifyContent: "center" }}>
            Start a Project
          </a>
        </div>
      </nav>
    </>
  );
}
