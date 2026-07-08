import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { SUBSIDIARIES } from "@/lib/subsidiaries";
import { wrap } from "@/lib/styles";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon } from "./icons";

const footerLink =
  "font-body text-sm text-dipon-cream no-underline opacity-[0.82] hover:opacity-100";
const footerHead =
  "mb-4 font-label text-[11px] font-semibold uppercase tracking-[1.2px] text-[rgba(255,249,235,0.85)]";
const footerList = "m-0 flex list-none flex-col gap-[11px] p-0";

const SOCIALS = [
  { Icon: XIcon, href: "#", label: "X" },
  { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-dipon-blue-alt px-gutter pt-[72px] pb-9 text-dipon-cream">
      <div className={wrap}>
        <div className="grid grid-cols-1 items-start gap-10 border-b border-[rgba(255,249,235,0.16)] pb-12 md:grid-cols-[1.6fr_1fr_1.2fr_1fr_1.1fr]">
          <div>
            <Image src="/assets/dipon-logo-light.svg" alt="DIPON Group" width={493} height={142} className="block h-[34px] w-auto" />
            <p className="mt-5 max-w-[280px] font-body text-sm leading-[1.65] text-[rgba(255,249,235,0.85)]">
              Building Sustainable Infrastructure and Business Solutions for Africa&rsquo;s Future.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-dipon-cream opacity-[0.82] transition-[opacity,background-color,border-color] duration-200 hover:border-dipon-accent hover:bg-dipon-accent hover:text-white hover:opacity-100"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Company">
            <div className={footerHead}>Company</div>
            <ul className={footerList}>
              <li><a href="/about" className={footerLink}>About Us</a></li>
              <li><a href="/careers" className={footerLink}>Careers</a></li>
              <li><Link href="/blog" className={footerLink}>Insights</Link></li>
              <li><a href="/contact" className={footerLink}>Contact</a></li>
            </ul>
          </nav>
          <nav aria-label="Services">
            <div className={footerHead}>Services</div>
            <ul className={footerList}>
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <a href={`/services/${service.slug}`} className={footerLink}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Subsidiaries">
            <div className={footerHead}>Subsidiaries</div>
            <ul className={footerList}>
              {SUBSIDIARIES.map((subsidiary) => (
                <li key={subsidiary.slug}>
                  <a href={`/subsidiaries/${subsidiary.slug}`} className={footerLink}>
                    {subsidiary.short}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Offices">
            <div className={footerHead}>Offices</div>
            <p className="m-0 font-body text-sm leading-[1.65] text-[rgba(255,249,235,0.85)]">
              [Head Office]
              <br />
              [City/Region], Nigeria
              <br />
              [Phone] · [Email]
            </p>
          </nav>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-3.5">
          <span className="font-label text-xs tracking-[0.6px] text-[rgba(255,249,235,0.85)]">
            © {new Date().getFullYear()} DIPON Group. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-label text-xs tracking-[0.6px] text-[rgba(255,249,235,0.85)] no-underline hover:text-dipon-cream"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
