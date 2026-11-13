import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { OFFICES } from "@/lib/site";
import { SUBSIDIARIES } from "@/lib/subsidiaries";
import { wrap } from "@/lib/styles";
import Socials from "./Socials";

const footerLink =
  "font-body text-sm leading-[1.5] text-dipon-cream no-underline opacity-[0.82] transition-opacity hover:opacity-100";
const footerHead =
  "mb-5 font-label text-[11px] font-semibold uppercase tracking-[1.4px] text-dipon-accent";
const footerList = "m-0 flex list-none flex-col gap-[14px] p-0";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer() {
  return (
    <footer className="bg-dipon-blue-alt px-gutter pt-[clamp(76px,9vw,116px)] pb-11 text-dipon-cream">
      <div className={wrap}>
        <div className="grid grid-cols-1 items-start gap-x-14 gap-y-12 border-b border-[rgba(255,249,235,0.16)] pb-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.8fr_1fr_1.3fr_1.1fr_1.2fr]">
          <div>
            <Image src="/assets/dipon-logo-light.svg" alt="DIPON Group" width={493} height={142} className="block h-[34px] w-auto" />
            <p className="mt-5 max-w-[280px] font-body text-sm leading-[1.65] text-[rgba(255,249,235,0.85)]">
              Building Sustainable Infrastructure and Business Solutions for Africa&rsquo;s Future.
            </p>
            <Socials className="mt-5" />
          </div>
          <nav aria-label="Company">
            <div className={footerHead}>Company</div>
            <ul className={footerList}>
              <li><a href="/about" className={footerLink}>About Us</a></li>
              <li><a href="/careers" className={footerLink}>Careers</a></li>
              <li><Link href="/blog" className={footerLink}>Blog</Link></li>
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
            <div className="flex flex-col gap-6">
              {OFFICES.map((office) => (
                <p
                  key={office.label}
                  className="m-0 font-body text-sm leading-[1.65] text-[rgba(255,249,235,0.85)]"
                >
                  {office.lines.join(", ")}, {office.country}
                  <br />
                  <a
                    href={`tel:${office.phoneHref}`}
                    className="text-dipon-cream underline decoration-[rgba(255,249,235,0.4)] underline-offset-[3px] transition-colors hover:decoration-dipon-cream"
                  >
                    {office.phoneDisplay}
                  </a>
                  {office.extraPhones?.map((p) => (
                    <span key={p.href}>
                      <br />
                      <a
                        href={`tel:${p.href}`}
                        className="text-dipon-cream underline decoration-[rgba(255,249,235,0.4)] underline-offset-[3px] transition-colors hover:decoration-dipon-cream"
                      >
                        {p.display}
                      </a>
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </nav>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <span className="font-label text-xs tracking-[0.6px] text-[rgba(255,249,235,0.85)]">
            © {new Date().getFullYear()} DIPON Group Limited. All rights reserved.
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
