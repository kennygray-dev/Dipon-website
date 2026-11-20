"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact } from "@/app/actions/contact";
import { initialContactState } from "@/lib/contact";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import Socials from "./Socials";
import { ArrowIcon, LogoMark, MailIcon, PhoneIcon, PinIcon } from "./icons";
import { SERVICES } from "@/lib/services";
import { CONTACT_EMAIL, MAP_QUERY, OFFICES, SOCIAL_LINKS } from "@/lib/site";
import { section, wrap } from "@/lib/styles";

const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=16&output=embed`;

const SERVICE_OPTIONS = ["General inquiry", ...SERVICES.map((s) => s.title)];

const inputClass =
  "w-full border border-[rgba(35,61,76,0.16)] bg-white px-4 py-3 font-body text-[15px] text-dipon-primary outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-dipon-tertiary focus:border-dipon-accent focus:ring-2 focus:ring-dipon-accent/25 aria-[invalid=true]:border-red-500";
const labelClass = "mb-1.5 block font-body text-[13px] font-medium text-dipon-secondary";
const errorClass = "mt-1 font-body text-[12px] text-red-600";
const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialContactState);
  const submitted = state.status === "success";
  const fieldErrors = state.errors ?? {};

  // Stamp when the form became interactive, so the server can spot bots that
  // submit instantly. Set on the client so it isn't frozen by static caching.
  const startedAt = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (startedAt.current) startedAt.current.value = String(Date.now());
  }, []);

  return (
    <section id="get-in-touch" className={`scroll-mt-20 ${section}`}>
      <div className={wrap}>
        <Reveal className="mb-10 max-w-[520px]">
          <Eyebrow>Get in Touch</Eyebrow>
        </Reveal>

        <Reveal className="relative flex flex-col bg-dipon-blue">
          {/* Map — mobile: sits between the form and the address block; desktop: back on top, unchanged */}
          <div className="relative order-2 h-[210px] overflow-hidden bg-dipon-blue sm:h-[260px] lg:order-none lg:h-[360px]">
            <iframe
              src={MAP_EMBED_SRC}
              className="absolute inset-0 h-full w-full [transform:translateZ(0)] [backface-visibility:hidden]"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              title="DIPON Group head office, Garki 2, Abuja"
            />
            {/* Dim so the map recedes behind the form */}
            <div className="pointer-events-none absolute inset-0 bg-dipon-blue/55" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue/55 via-transparent to-transparent" />
            {/* Heading — bottom-left, clear of the floating form card */}
            <div className="absolute bottom-6 left-6 z-10 sm:left-8">
              <h3 className="max-w-[280px] text-balance font-display text-[clamp(26px,3.4vw,40px)] font-extrabold leading-[1.05] text-dipon-cream">
                Contact us
              </h3>
            </div>
          </div>

          {/* Feedback form — first on mobile ( to match the card's top edge), floating card on desktop */}
          <Reveal fadeOnly delay={120} className="relative z-20 order-1 w-full border border-[rgba(35,61,76,0.08)] bg-white px-5 py-8 sm:px-6 lg:order-none lg:absolute lg:top-10 lg:right-10 lg:mb-0 lg:w-[400px] lg:p-[clamp(24px,3vw,36px)] lg:shadow-[0_4px_16px_rgba(20,28,33,0.2),0_20px_45px_-14px_rgba(20,28,33,0.5),0_40px_80px_-24px_rgba(20,28,33,0.35)] xl:w-[440px]">
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
                {/* Timing check: stamped on mount so the server can spot instant bot submits. */}
                <input ref={startedAt} type="hidden" name="t" defaultValue="" />
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
                    className="group inline-flex shrink-0 items-stretch overflow-hidden bg-dipon-primary transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className="flex items-center px-6 py-3 font-label text-[11px] font-semibold tracking-[1.2px] text-white! uppercase">
                      {pending ? "Sending…" : "Send Message"}
                    </span>
                    <span className="flex w-[46px] shrink-0 items-center justify-center bg-dipon-accent text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
                      <ArrowIcon width={16} height={7} />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </Reveal>

          {/* Offices — addresses only (the actionable details live in the
              "Reach us directly" panel below). Head Office + Arizona stay here. */}
          <div className="order-3 border-t border-white/10 px-6 py-9 lg:order-none lg:max-w-[calc(100%-460px)] lg:px-8">
            <div className="flex flex-col divide-y divide-white/15 sm:flex-row sm:divide-y-0 sm:divide-x">
              {OFFICES.map((office) => (
                <div
                  key={office.label}
                  className="py-6 first:pt-0 last:pb-0 sm:py-0 sm:px-8 sm:first:pl-0 sm:last:pr-0"
                >
                  <span className="block font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-cream/70 uppercase">
                    {office.label}
                  </span>
                  <p className="mt-3 font-body text-[14px] leading-[1.7] text-dipon-cream/80">
                    {office.lines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                    {office.country}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Reach us directly — phones, directions, email on their own clean,
            modern panel beneath the map/form card. */}
        <Reveal className="mt-10 lg:mt-14">
          <div className="mb-6">
            <Eyebrow>Reach Us Directly</Eyebrow>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {OFFICES.map((office) => (
              <div
                key={office.label}
                className="flex flex-col border border-[rgba(35,61,76,0.1)] bg-white p-6 transition-shadow duration-300 hover:shadow-[0_18px_44px_-26px_rgba(20,28,33,0.5)] sm:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-accent uppercase">
                    {office.label}
                  </span>
                  <span className="font-body text-[12px] text-dipon-tertiary">{office.country}</span>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  {[{ display: office.phoneDisplay, href: office.phoneHref }, ...(office.extraPhones ?? [])].map((p) => (
                    <a
                      key={p.href}
                      href={`tel:${p.href}`}
                      className="group inline-flex w-fit items-center gap-3 font-body text-[16px] font-medium text-dipon-primary no-underline transition-colors duration-200 hover:text-dipon-accent"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dipon-accent/10 text-dipon-accent transition-colors duration-200 group-hover:bg-dipon-accent group-hover:text-white">
                        <PhoneIcon />
                      </span>
                      {p.display}
                    </a>
                  ))}
                </div>
                <a
                  href={mapsUrl([...office.lines, office.country].join(", "))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 font-label text-[11px] font-semibold tracking-[1px] text-dipon-secondary uppercase no-underline transition-colors duration-200 hover:text-dipon-accent [&_.arrow]:transition-transform [&_.arrow]:duration-200 hover:[&_.arrow]:translate-x-1"
                >
                  <span className="text-dipon-accent">
                    <PinIcon />
                  </span>
                  <span className="underline-offset-4 group-hover:underline">Get directions</span>
                  <ArrowIcon width={13} height={6} />
                </a>
              </div>
            ))}
          </div>

          {CONTACT_EMAIL && (
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group mt-4 flex items-center justify-between gap-4 bg-dipon-blue p-6 no-underline transition-shadow duration-300 hover:shadow-[0_18px_44px_-24px_rgba(20,28,33,0.65)] sm:p-7"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dipon-accent/15 text-dipon-accent transition-colors duration-200 group-hover:bg-dipon-accent group-hover:text-white">
                  <MailIcon />
                </span>
                <span className="block">
                  <span className="block font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-cream/60 uppercase">
                    Email Us
                  </span>
                  <span className="mt-1 block font-body text-[16px] font-medium text-dipon-cream">{CONTACT_EMAIL}</span>
                </span>
              </span>
              <span className="hidden shrink-0 text-dipon-accent transition-transform duration-200 group-hover:translate-x-1 sm:block">
                <ArrowIcon width={16} height={7} />
              </span>
            </a>
          )}

          {SOCIAL_LINKS.length > 0 && (
            <div className="mt-4 border border-[rgba(35,61,76,0.1)] bg-white p-6 sm:p-7">
              <Socials label="Follow Us" />
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
