"use client";

import { useState } from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { ArrowIcon, FacebookIcon, InstagramIcon, LinkedInIcon, LogoMark, UploadIcon, XIcon } from "./icons";
import { SERVICES } from "@/lib/services";
import { section, wrap } from "@/lib/styles";

const MAP_QUERY = "Garki, Abuja, Nigeria";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=15&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

const SOCIALS = [
  { Icon: XIcon, href: "#", label: "X" },
  { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
];

const SERVICE_OPTIONS = ["General inquiry", ...SERVICES.map((s) => s.title)];

const inputClass =
  "w-full border-0 border-b border-[rgba(35,61,76,0.18)] bg-transparent px-0 py-2.5 font-body text-[15px] text-dipon-primary outline-none transition-colors duration-200 placeholder:text-dipon-tertiary focus:border-dipon-accent";
const labelClass = "block font-body text-[13px] text-dipon-tertiary";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend wired yet — surface a confirmation state. Wire to an
    // endpoint or email service before launch.
    setSubmitted(true);
  };

  return (
    <section className={section}>
      <div className={wrap}>
        <Reveal className="mb-10 max-w-[520px]">
          <Eyebrow>Get in Touch</Eyebrow>
        </Reveal>

        <Reveal className="relative rounded-[28px] bg-dipon-blue">
          {/* Map */}
          <div className="relative h-[320px] overflow-hidden rounded-t-[28px] sm:h-[400px] lg:h-[480px]">
            <iframe
              src={MAP_EMBED_SRC}
              className="absolute inset-0 h-full w-full grayscale invert-[0.92] contrast-[0.88]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DIPON Group location — Garki, Abuja (placeholder)"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue via-dipon-blue/5 to-dipon-blue/35" />
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-6 left-6 z-10 inline-flex items-center gap-2 font-body text-[13px] text-dipon-cream/80 no-underline transition-colors duration-200 hover:text-white sm:left-8"
            >
              View on Google Maps <ArrowIcon width={14} height={6} />
            </a>
            <h3 className="absolute bottom-7 left-6 z-10 max-w-[60%] text-balance font-display text-[clamp(26px,3.4vw,40px)] font-extrabold leading-[1.05] text-dipon-cream sm:left-8">
              Contact us
            </h3>
          </div>

          {/* Address / contacts / socials */}
          <div className="grid grid-cols-1 gap-8 border-t border-white/10 px-6 py-9 sm:grid-cols-[1fr_1fr_auto] sm:items-start sm:px-8">
            <div>
              <span className="block font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-cream/45 uppercase">
                Our Address
              </span>
              <p className="mt-3 font-body text-[14px] leading-[1.7] text-dipon-cream/85">
                [Head Office Address]
                <br />
                Garki, Abuja, Nigeria
              </p>
            </div>
            <div>
              <span className="block font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-cream/45 uppercase">
                Our Contacts
              </span>
              <p className="mt-3 font-body text-[14px] leading-[1.7] text-dipon-cream/85">
                <a href="mailto:hello@dipongroup.example" className="text-dipon-cream/85 no-underline hover:text-white">
                  [Email Address]
                </a>
                <br />
                <a href="tel:+2340000000000" className="text-dipon-cream/85 no-underline hover:text-white">
                  [Phone Number]
                </a>
              </p>
            </div>
            <div className="flex items-center justify-between gap-4 sm:h-full sm:flex-col sm:items-end">
              <div className="flex items-center gap-2.5">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-dipon-cream/80 transition-colors duration-200 hover:border-dipon-accent hover:bg-dipon-accent hover:text-white"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
              <span className="font-label text-[11px] tracking-[0.6px] text-dipon-cream/45 uppercase">— Follow Us</span>
            </div>
          </div>

          {/* Floating feedback form */}
          <div className="relative z-20 mx-3 -mt-16 mb-6 rounded-[22px] bg-white p-5 shadow-[0_4px_16px_rgba(20,28,33,0.2),0_20px_45px_-14px_rgba(20,28,33,0.5),0_40px_80px_-24px_rgba(20,28,33,0.35)] sm:mx-6 sm:p-[clamp(24px,3vw,36px)] lg:absolute lg:top-10 lg:right-10 lg:mx-0 lg:mb-0 lg:w-[400px] xl:w-[440px]">
            <LogoMark className="absolute top-[clamp(24px,3vw,36px)] right-[clamp(24px,3vw,36px)] h-6 w-auto" />
            {submitted ? (
              <div role="status">
                <Eyebrow>Thank You</Eyebrow>
                <h3 className="my-3 mb-2.5 font-display text-2xl font-bold tracking-[-0.4px] text-dipon-primary">
                  We&rsquo;ve got your project details.
                </h3>
                <p className="m-0 font-body text-[15px] leading-[1.6] text-dipon-secondary">
                  Thanks for reaching out. Our team will review what you sent and be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <span className="font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-tertiary uppercase">
                  Feedback Form
                </span>
                <div>
                  <label htmlFor="pf-name" className={labelClass}>
                    Name
                  </label>
                  <input id="pf-name" name="name" type="text" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="pf-email" className={labelClass}>
                    E-mail
                  </label>
                  <input id="pf-email" name="email" type="email" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="pf-phone" className={labelClass}>
                    Phone
                  </label>
                  <input id="pf-phone" name="phone" type="tel" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="pf-service" className={labelClass}>
                    Service needed
                  </label>
                  <select id="pf-service" name="service" defaultValue="" required className={inputClass}>
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
                  <label htmlFor="pf-message" className={labelClass}>
                    Message
                  </label>
                  <textarea id="pf-message" name="message" rows={3} required className={`${inputClass} resize-none`} />
                </div>

                <div className="mt-2 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 font-body text-[13px] text-dipon-tertiary">
                    <UploadIcon size={17} /> Upload file
                  </span>
                  <button
                    type="submit"
                    className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-dipon-primary py-3 pr-3 pl-6 font-label text-[11px] font-semibold tracking-[1.2px] text-white! uppercase transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(35,61,76,0.28)]"
                  >
                    Send Message
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-dipon-accent text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
                      <ArrowIcon width={12} height={5} />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
