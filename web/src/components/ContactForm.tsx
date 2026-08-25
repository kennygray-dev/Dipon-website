"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";
import { initialContactState } from "@/lib/contact";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import Socials from "./Socials";
import { ArrowIcon, LogoMark } from "./icons";
import { SERVICES } from "@/lib/services";
import { CONTACT_EMAIL, MAP_QUERY, OFFICES } from "@/lib/site";
import { section, wrap } from "@/lib/styles";

const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=16&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

const SERVICE_OPTIONS = ["General inquiry", ...SERVICES.map((s) => s.title)];

const inputClass =
  "w-full border-0 border-b border-[rgba(35,61,76,0.18)] bg-transparent px-0 py-2.5 font-body text-[15px] text-dipon-primary outline-none transition-colors duration-200 placeholder:text-dipon-tertiary focus:border-dipon-accent aria-[invalid=true]:border-red-500";
const labelClass = "block font-body text-[13px] text-dipon-tertiary";
const errorClass = "mt-1 font-body text-[12px] text-red-600";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialContactState);
  const submitted = state.status === "success";
  const fieldErrors = state.errors ?? {};

  return (
    <section id="get-in-touch" className={`scroll-mt-20 ${section}`}>
      <div className={wrap}>
        <Reveal className="mb-10 max-w-[520px]">
          <Eyebrow>Get in Touch</Eyebrow>
        </Reveal>

        <Reveal className="relative flex flex-col rounded-[28px] bg-dipon-blue">
          {/* Map — mobile: sits between the form and the address block; desktop: back on top, unchanged */}
          <div className="relative order-2 h-[320px] overflow-hidden bg-dipon-blue sm:h-[400px] lg:order-none lg:h-[480px] lg:rounded-t-[28px]">
            <iframe
              src={MAP_EMBED_SRC}
              className="absolute inset-0 h-full w-full grayscale invert-[0.92] contrast-[0.88] [transform:translateZ(0)] [backface-visibility:hidden]"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              title="DIPON Group head office — Garki 2, Abuja"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue via-dipon-blue/5 to-dipon-blue/35" />
            {/* Location marker — clickable, opens the head office in Google Maps */}
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open DIPON head office location in Google Maps"
              className="group absolute left-1/2 top-1/2 z-10"
            >
              <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-dipon-accent/40 animate-ping motion-reduce:hidden" />
              <svg
                width="28"
                height="38"
                viewBox="0 0 28 38"
                fill="none"
                className="absolute left-0 top-0 -translate-x-1/2 -translate-y-full drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)] transition-transform duration-200 group-hover:scale-110"
              >
                <path d="M14 0C6.3 0 0 6.3 0 14c0 9.3 14 24 14 24s14-14.7 14-24C28 6.3 21.7 0 14 0Z" fill="#fd802e" />
                <circle cx="14" cy="14" r="5.5" fill="#1c313d" />
              </svg>
            </a>
            {/* Heading + a clear "open the map" CTA — kept bottom-left, clear of the floating form card */}
            <div className="absolute bottom-6 left-6 z-10 sm:left-8">
              <h3 className="max-w-[280px] text-balance font-display text-[clamp(26px,3.4vw,40px)] font-extrabold leading-[1.05] text-dipon-cream">
                Contact us
              </h3>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 font-label text-[11px] font-semibold tracking-[0.8px] text-dipon-primary uppercase no-underline shadow-[0_6px_20px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-[0_10px_28px_rgba(0,0,0,0.4)]"
              >
                <svg width="13" height="16" viewBox="0 0 13 16" fill="none" aria-hidden="true">
                  <path d="M6.5 0C2.9 0 0 2.9 0 6.5 0 11 6.5 16 6.5 16S13 11 13 6.5C13 2.9 10.1 0 6.5 0Z" fill="#fd802e" />
                  <circle cx="6.5" cy="6.5" r="2.4" fill="#fff" />
                </svg>
                Get Directions
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowIcon width={13} height={6} />
                </span>
              </a>
            </div>
          </div>

          {/* Feedback form — first on mobile (rounded to match the card's top edge), floating card on desktop */}
          <div className="relative z-20 order-1 w-full rounded-t-[28px] bg-white px-3 py-8 sm:px-6 lg:order-none lg:absolute lg:top-10 lg:right-10 lg:mb-0 lg:w-[400px] lg:rounded-[22px] lg:p-[clamp(24px,3vw,36px)] lg:shadow-[0_4px_16px_rgba(20,28,33,0.2),0_20px_45px_-14px_rgba(20,28,33,0.5),0_40px_80px_-24px_rgba(20,28,33,0.35)] xl:w-[440px]">
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-dipon-accent to-transparent lg:hidden" />
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-dipon-accent to-transparent lg:hidden" />
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-dipon-accent to-transparent lg:hidden" />
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-dipon-accent to-transparent lg:hidden" />
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
              <form action={formAction} className="flex flex-col gap-5" noValidate>
                <span className="font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-accent uppercase">
                  Feedback Form
                </span>
                {/* Honeypot: hidden from people, catches bots. Kept out of the tab order. */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />
                <div>
                  <label htmlFor="pf-name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="pf-name"
                    name="name"
                    type="text"
                    required
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? "pf-name-error" : undefined}
                    className={inputClass}
                  />
                  {fieldErrors.name && (
                    <p id="pf-name-error" className={errorClass}>
                      {fieldErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="pf-email" className={labelClass}>
                    E-mail
                  </label>
                  <input
                    id="pf-email"
                    name="email"
                    type="email"
                    required
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "pf-email-error" : undefined}
                    className={inputClass}
                  />
                  {fieldErrors.email && (
                    <p id="pf-email-error" className={errorClass}>
                      {fieldErrors.email}
                    </p>
                  )}
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
                  <select
                    id="pf-service"
                    name="service"
                    defaultValue=""
                    required
                    aria-invalid={Boolean(fieldErrors.service)}
                    aria-describedby={fieldErrors.service ? "pf-service-error" : undefined}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.service && (
                    <p id="pf-service-error" className={errorClass}>
                      {fieldErrors.service}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="pf-message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="pf-message"
                    name="message"
                    rows={3}
                    required
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={fieldErrors.message ? "pf-message-error" : undefined}
                    className={`${inputClass} resize-none`}
                  />
                  {fieldErrors.message && (
                    <p id="pf-message-error" className={errorClass}>
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {state.status === "error" && !state.errors && (
                  <p role="alert" className="font-body text-[13px] text-red-600">
                    {state.message}
                  </p>
                )}

                <div className="mt-2 flex items-center justify-end">
                  <button
                    type="submit"
                    disabled={pending}
                    className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-dipon-primary py-3 pr-3 pl-6 font-label text-[11px] font-semibold tracking-[1.2px] text-white! uppercase transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(35,61,76,0.28)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {pending ? "Sending…" : "Send Message"}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-dipon-accent text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
                      <ArrowIcon width={12} height={5} />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Offices / email / socials — grouped bottom-left, clear of the floating form */}
          <div className="order-3 flex flex-col divide-y divide-white/15 border-t border-white/10 px-6 py-9 sm:flex-row sm:flex-wrap sm:items-stretch sm:divide-y-0 sm:divide-x lg:order-none lg:max-w-[calc(100%-460px)] lg:px-8">
            {OFFICES.map((office) => (
              <div
                key={office.label}
                className="py-6 first:pt-0 last:pb-0 sm:py-0 sm:px-8 sm:first:pl-0 sm:last:pr-0"
              >
                <span className="block font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-cream/70 uppercase">
                  {office.label}
                </span>
                <p className="mt-3 font-body text-[14px] leading-[1.7] whitespace-nowrap text-dipon-cream/85">
                  {office.lines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                  {office.country}
                  <br />
                  <a
                    href={`tel:${office.phoneHref}`}
                    className="text-dipon-cream/85 no-underline hover:text-white"
                  >
                    {office.phoneDisplay}
                  </a>
                </p>
              </div>
            ))}
            <div className="flex flex-col gap-4 py-6 first:pt-0 last:pb-0 sm:py-0 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              {CONTACT_EMAIL && (
                <div>
                  <span className="block font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-cream/70 uppercase">
                    Email Us
                  </span>
                  <p className="mt-3 font-body text-[14px] leading-[1.7] text-dipon-cream/85">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-dipon-cream/85 no-underline hover:text-white"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </div>
              )}
              <Socials label="Follow Us" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
