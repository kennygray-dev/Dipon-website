"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CtaButton from "./CtaButton";
import Socials from "./Socials";
import { ArrowIcon, BurgerIcon, CaretIcon, CloseIcon, LogoMotif } from "./icons";

type MegaLink = { title: string; href: string; desc: string; num?: string };
type MegaGroup = {
  key: string;
  label: string;
  href: string;
  railLinkLabel?: string;
  railHref?: string;
  links: MegaLink[];
};

const MEGA_GROUPS: MegaGroup[] = [
  {
    key: "company",
    label: "Company",
    href: "/about",
    links: [
      { title: "About Us", href: "/about", desc: "Who we are, our mission, and how the Group is structured." },
      { title: "Careers", href: "/careers", desc: "Build Africa's future with us." },
    ],
  },
  {
    key: "services",
    label: "Services",
    href: "/services",
    railLinkLabel: "All Services",
    railHref: "/services",
    links: [
      { num: "01", title: "Construction & Civil Engineering", href: "/services/construction-civil-engineering", desc: "Civil works, buildings, roads, and structural fabrication." },
      { num: "02", title: "Renewable Energy & Power", href: "/services/renewable-energy-power", desc: "Solar systems, street lighting, and power infrastructure." },
      { num: "03", title: "Real Estate & Property", href: "/services/real-estate-property", desc: "Housing and property development to occupancy." },
      { num: "04", title: "Environmental Services", href: "/services/environmental-services", desc: "Junk removal, waste management, janitorial, and housekeeping." },
      { num: "05", title: "Trading & Supply Chain", href: "/services/trading-supply-chain", desc: "Import/export, materials supply, and marketing." },
      { num: "06", title: "Transportation & Logistics", href: "/services/transportation-logistics", desc: "Movement of goods, materials, and equipment." },
      { num: "07", title: "Agriculture", href: "/services/agriculture", desc: "Agricultural production and supply." },
    ],
  },
  {
    key: "subsidiaries",
    label: "Subsidiaries",
    href: "/subsidiaries",
    railLinkLabel: "Explore Our Companies",
    railHref: "/subsidiaries",
    links: [
      { num: "Subsidiary 01", title: "DIPON Construction Limited", href: "/subsidiaries/dipon-construction", desc: "Civil engineering, building construction, and general contracting, the Group's core build capability." },
      { num: "Subsidiary 02", title: "DIPON Global Resources Limited", href: "/subsidiaries/dipon-global-resources", desc: "Trading, supply chain, real estate, agriculture, and logistics, the commercial engine." },
      { num: "Subsidiary 03", title: "DIPON Infrastructure Limited", href: "/subsidiaries/dipon-infrastructure", desc: "Renewable energy, power infrastructure, housing development, and environmental services." },
    ],
  },
];

export default function Header({ heroIsDark = true }: { heroIsDark?: boolean }) {
  const [solid, setSolid] = useState(!heroIsDark);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  // Tracks which desktop mega-menu is open (via hover/focus) so aria-expanded
  // can reflect reality — the panel itself is still shown/hidden by CSS.
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [hideCta, setHideCta] = useState(false);
  // Hide the bar when scrolling down, bring it back when scrolling up.
  const [navHidden, setNavHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setSolid(!heroIsDark || y > 80);
      const prev = lastY.current;
      if (y > prev && y > 140) setNavHidden(true);
      else if (y < prev - 4) setNavHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroIsDark]);

  // On the Contact page, hide the "Discuss Your Next Project" CTA while the
  // Get in Touch section is in view — no point pointing people at a form
  // they're already looking at. No-op on pages without that section.
  useEffect(() => {
    const target = document.getElementById("get-in-touch");
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => setHideCta(entry.isIntersecting), {
      rootMargin: "-64px 0px 0px 0px",
      threshold: 0,
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

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

  const isSolid = solid || drawerOpen;
  // Never slide the bar away while a menu or the mobile drawer is open.
  const navIsHidden = navHidden && !drawerOpen && !activeGroup;
  const navTextClass = isSolid
    ? "text-dipon-primary opacity-[0.85] hover:opacity-100 hover:text-dipon-accent-deep [text-shadow:none]"
    : "text-dipon-cream opacity-100 hover:text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.55)]";
  const navTextHasHover =
    "[header:has(.nav-item:hover)_&]:text-dipon-primary [header:has(.nav-item:hover)_&]:opacity-[0.82] [header:has(.nav-item:hover)_&]:[text-shadow:none] [header:has(.nav-item:focus-within)_&]:text-dipon-primary [header:has(.nav-item:focus-within)_&]:opacity-[0.82] [header:has(.nav-item:focus-within)_&]:[text-shadow:none]";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] h-16 border-b transition-[background-color,border-color,transform,translate] duration-[420ms] ease-[var(--ease-premium)] ${
          navIsHidden ? "-translate-y-full" : "translate-y-0"
        } ${
          isSolid ? "border-[rgba(35,61,76,0.08)] bg-white" : "border-transparent bg-transparent"
        } has-[.nav-item:hover]:border-[rgba(35,61,76,0.08)] has-[.nav-item:hover]:bg-white has-[.nav-item:focus-within]:border-[rgba(35,61,76,0.08)] has-[.nav-item:focus-within]:bg-white`}
      >
        <div className="mx-auto flex h-full w-full max-w-[1320px] items-center justify-between px-[clamp(24px,5vw,64px)]">
        <Link href="/" aria-label="DIPON Group Limited, home" className="flex shrink-0 items-center">
          <Image
            className={`h-6 w-auto ${isSolid ? "hidden" : "block"} [header:has(.nav-item:hover)_&]:hidden [header:has(.nav-item:focus-within)_&]:hidden`}
            src="/assets/dipon-logo-light.svg"
            alt="DIPON Group Limited"
            width={493}
            height={142}
            priority
          />
          <Image
            className={`h-6 w-auto ${isSolid ? "block" : "hidden"} [header:has(.nav-item:hover)_&]:block [header:has(.nav-item:focus-within)_&]:block`}
            src="/assets/dipon-logo-dark.svg"
            alt="DIPON Group Limited"
            width={493}
            height={142}
            priority
          />
        </Link>
        <nav className="flex flex-1 items-center justify-center gap-9 max-[1080px]:hidden" aria-label="Primary">
          {MEGA_GROUPS.map((group) => (
            <div
              className="nav-item group flex items-center"
              key={group.key}
              onMouseEnter={() => setActiveGroup(group.key)}
              onMouseLeave={() => setActiveGroup(null)}
              onFocus={() => setActiveGroup(group.key)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) setActiveGroup(null);
              }}
            >
              <button
                type="button"
                onClick={() => setActiveGroup((g) => (g === group.key ? null : group.key))}
                className={`inline-flex cursor-pointer items-center gap-1.5 border-0 bg-none py-3 font-body text-sm no-underline transition-[color,opacity] duration-200 ${navTextClass} ${navTextHasHover} group-hover:!text-dipon-accent-deep group-hover:!opacity-100 group-focus-within:!text-dipon-accent-deep group-focus-within:!opacity-100`}
                aria-haspopup="true"
                aria-expanded={activeGroup === group.key}
              >
                {group.label}
                <CaretIcon className="transition-transform duration-300 ease-[var(--ease-premium)] group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>
              <div
                role="menu"
                aria-label={group.label}
                className="pointer-events-none absolute inset-x-0 top-full border-t border-[rgba(35,61,76,0.14)] bg-white px-gutter pt-[52px] pb-14 opacity-0 invisible -translate-y-3 scale-[0.99] shadow-[0_28px_48px_-16px_rgba(35,61,76,0.16)] [transition:opacity_420ms_var(--ease-premium),transform_420ms_var(--ease-premium),visibility_0s_linear_420ms] group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:!opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:!opacity-100 max-[1080px]:hidden before:absolute before:inset-x-0 before:bottom-full before:h-7 before:content-['']"
              >
                <div className="mx-auto max-w-[1320px]">
                  <div className="flex flex-wrap justify-center gap-x-14 gap-y-1">
                    {group.links.map((link, i) => (
                      <a
                        className="group/link flex w-[340px] items-center gap-4 border-b border-[rgba(35,61,76,0.1)] py-[18px] no-underline transition-[padding-left] duration-200 last:border-b-0 hover:pl-1"
                        href={link.href}
                        key={link.title}
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dipon-surface font-label text-[11px] font-bold text-dipon-accent-deep transition-colors duration-200 group-hover/link:bg-dipon-accent group-hover/link:text-white">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-display text-[15.5px] font-semibold tracking-[-0.1px] text-dipon-primary">
                            {link.title}
                          </span>
                          <span className="block truncate font-body text-[12.5px] leading-[1.4] text-dipon-secondary">
                            {link.desc}
                          </span>
                        </span>
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[rgba(35,61,76,0.14)] text-dipon-primary opacity-0 transition-[opacity,transform] duration-200 group-hover/link:translate-x-0.5 group-hover/link:opacity-100">
                          <ArrowIcon width={11} height={5} />
                        </span>
                      </a>
                    ))}
                  </div>
                  {group.railLinkLabel && group.railHref && (
                    <div className="mt-6 flex justify-center border-t border-[rgba(35,61,76,0.1)] pt-6">
                      <CtaButton href={group.railHref} label={group.railLinkLabel} variant="outline" size="sm" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <Link
            href="/blog"
            className={`nav-item inline-flex cursor-pointer items-center border-0 bg-none py-3 font-body text-sm no-underline transition-[color,opacity] duration-200 ${navTextClass} ${navTextHasHover}`}
          >
            Blog
          </Link>
        </nav>
        <div className="flex shrink-0 items-center">
          <CtaButton
            href="/contact"
            label="Discuss Your Next Project"
            variant="accent"
            bold
            className={`max-[1080px]:hidden ${hideCta ? "pointer-events-none opacity-0" : "opacity-100"}`}
          />
          <button
            className={`-mr-2.5 hidden cursor-pointer items-center justify-center border-0 bg-none p-2.5 max-[1080px]:inline-flex ${isSolid ? "text-dipon-primary" : "text-dipon-cream"}`}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <BurgerIcon />
          </button>
        </div>
        </div>
      </header>

      <nav
        className={`fixed inset-0 z-[75] flex flex-col overflow-y-auto overflow-x-hidden bg-dipon-blue transition-[opacity,transform] duration-[460ms] ease-[var(--ease-premium)] ${
          drawerOpen ? "menu-open pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-5 opacity-0"
        }`}
        aria-label="Mobile"
        aria-hidden={!drawerOpen}
      >
        {/* Faint DIPON mark watermark */}
        <div aria-hidden="true" className="pointer-events-none absolute top-1/2 -right-[16%] h-[128%] -translate-y-1/2 opacity-[0.06]">
          <LogoMotif className="h-full w-auto" />
        </div>

        <div className="relative flex items-center justify-between px-5 py-4">
          <Image src="/assets/dipon-logo-light.svg" alt="DIPON Group" width={493} height={142} className="h-[26px] w-auto" />
          <button
            className="-mr-2.5 cursor-pointer border-0 bg-none p-2.5 text-dipon-cream transition-transform duration-200 hover:rotate-90"
            aria-label="Close menu"
            onClick={closeDrawer}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="relative flex flex-1 flex-col px-5 pt-3 pb-2">
          {MEGA_GROUPS.map((group, gi) => {
            const isOpen = openGroup === group.key;
            return (
              <div
                className="menu-item border-b border-white/10"
                style={{ animationDelay: `${gi * 70 + 110}ms` }}
                key={group.key}
              >
                <button
                  className="flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-none py-[18px] text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenGroup(isOpen ? null : group.key)}
                >
                  <span className="font-display text-[27px] font-bold tracking-[-0.6px] text-dipon-cream">{group.label}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-dipon-accent transition-transform duration-[300ms] ease-[var(--ease-premium)] ${
                      isOpen ? "rotate-180 bg-dipon-accent text-white" : ""
                    }`}
                  >
                    <CaretIcon />
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-[340ms] ease-[var(--ease-premium)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-2 pt-1 pb-5">
                      {group.links.map((link, li) => (
                        <a
                          className="group/ml flex items-center gap-3.5 border border-white/10 bg-white/[0.035] px-4 py-3.5 no-underline transition-[background-color,border-color,transform] duration-200 active:scale-[0.99] hover:-translate-y-0.5 hover:border-dipon-accent/40 hover:bg-white/[0.07]"
                          href={link.href}
                          key={link.title}
                          onClick={closeDrawer}
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dipon-accent/15 font-label text-[11px] font-bold text-dipon-accent transition-colors duration-200 group-hover/ml:bg-dipon-accent group-hover/ml:text-white">
                            {String(li + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block font-display text-[14.5px] font-semibold tracking-[-0.1px] text-dipon-cream transition-colors group-hover/ml:text-dipon-accent">
                              {link.title}
                            </span>
                            <span className="mt-0.5 block truncate font-body text-[11.5px] leading-[1.4] text-dipon-cream/45">{link.desc}</span>
                          </span>
                          <span className="text-dipon-cream/35 transition-[color,transform] duration-200 group-hover/ml:translate-x-0.5 group-hover/ml:text-dipon-accent">
                            <ArrowIcon width={13} height={6} />
                          </span>
                        </a>
                      ))}
                      {group.railLinkLabel && group.railHref && (
                        <a
                          href={group.railHref}
                          onClick={closeDrawer}
                          className="mt-1.5 inline-flex w-fit items-center gap-2 font-label text-[11px] font-semibold tracking-[1.3px] text-dipon-accent uppercase no-underline"
                        >
                          {group.railLinkLabel} <ArrowIcon width={13} height={6} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <Link
            href="/blog"
            onClick={closeDrawer}
            className="menu-item border-b border-white/10 py-[18px] font-display text-[27px] font-bold tracking-[-0.6px] text-dipon-cream no-underline"
            style={{ animationDelay: `${MEGA_GROUPS.length * 70 + 110}ms` }}
          >
            Blog
          </Link>
        </div>

        <div
          className="menu-item relative mt-auto px-5 pt-5 pb-9"
          style={{ animationDelay: `${(MEGA_GROUPS.length + 1) * 70 + 110}ms` }}
        >
          <CtaButton href="/contact" label="Discuss Your Next Project" variant="accent" full bold onClick={closeDrawer} />
          <div className="mt-6 border-t border-white/10 pt-6">
            <Socials label="Follow Us" />
          </div>
        </div>
      </nav>
    </>
  );
}
