"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitCareers } from "@/app/actions/careers";
import { initialContactState } from "@/lib/contact";
import Eyebrow from "./Eyebrow";
import GeometricOverlay from "./GeometricOverlay";
import Heading from "./Heading";
import Opening from "./Opening";
import Reveal from "./Reveal";
import Socials from "./Socials";
import { ArrowIcon, LogoMark, MailIcon, PhoneIcon, PinIcon } from "./icons";
import { CAREERS_EMAIL, OFFICES, SOCIAL_LINKS } from "@/lib/site";
import { section, wrap, lead } from "@/lib/styles";

const HEAD_OFFICE = OFFICES[0];

const PHOTO = "https://images.pexels.com/photos/30688597/pexels-photo-30688597.jpeg?auto=compress&cs=tinysrgb&w=1600";

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

const inputClass =
  "w-full border border-[rgba(35,61,76,0.16)] bg-white px-4 py-3 font-body text-[15px] text-dipon-primary outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-dipon-tertiary focus:border-dipon-accent focus:ring-2 focus:ring-dipon-accent/25 aria-[invalid=true]:border-red-500";
const labelClass = "mb-1.5 block font-body text-[13px] font-medium text-dipon-secondary";
const errorClass = "mt-1 font-body text-[12px] text-red-600";
const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export default function CareersContact() {
  const [state, formAction, pending] = useActionState(submitCareers, initialContactState);
  const submitted = state.status === "success";
  const fieldErrors = state.errors ?? {};

  // Stamp when the form became interactive (see ContactForm) so the server can
  // spot bots that submit instantly.
  const startedAt = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (startedAt.current) startedAt.current.value = String(Date.now());
  }, []);

  return (
    <section id="cta" className={section}>
      <div className={wrap}>
        <Reveal className="mb-10 max-w-[640px]">
          <Eyebrow>Open Positions</Eyebrow>
          <Heading>No open roles right now.</Heading>
          <p className={`${lead} mt-5`}>
            We&rsquo;re not actively hiring for a specific position at the moment, but we&rsquo;re always glad to meet
            talented people who want to build Africa&rsquo;s future with us. Introduce yourself and we&rsquo;ll reach
            out when something fits.
          </p>
        </Reveal>

        {/* min-h on desktop so the tall floating form is fully contained */}
        <Reveal className="relative bg-dipon-blue lg:min-h-[780px]">
          {/* Photo — taller, immersive band */}
          <Opening className="relative h-[280px] overflow-hidden sm:h-[340px] lg:h-[580px]">
            <img src={PHOTO} alt="DIPON Group team" className="absolute inset-0 h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue via-dipon-blue/10 to-dipon-blue/35" />
            <GeometricOverlay />
            <h3 className="absolute bottom-7 left-6 z-10 max-w-[60%] text-balance font-display text-[clamp(24px,3.2vw,36px)] font-extrabold leading-[1.05] text-dipon-cream sm:left-8">
              Meet the team
            </h3>
          </Opening>

          {/* Introduction form — edge-to-edge on mobile, floating card on desktop */}
          <Reveal fadeOnly delay={120} className="relative z-20 w-full border border-[rgba(35,61,76,0.08)] bg-white px-5 py-8 sm:px-6 lg:absolute lg:top-10 lg:right-10 lg:mb-0 lg:w-[400px] lg:p-[clamp(24px,3vw,36px)] lg:shadow-[0_4px_16px_rgba(20,28,33,0.2),0_20px_45px_-14px_rgba(20,28,33,0.5),0_40px_80px_-24px_rgba(20,28,33,0.35)] xl:w-[440px]">
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-dipon-accent to-transparent lg:hidden" />
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-dipon-accent to-transparent lg:hidden" />
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-dipon-accent to-transparent lg:hidden" />
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-dipon-accent to-transparent lg:hidden" />
            <LogoMark className="absolute top-[clamp(24px,3vw,36px)] right-[clamp(24px,3vw,36px)] h-6 w-auto" />
            {submitted ? (
              <div role="status">
                <Eyebrow>Thank You</Eyebrow>
                <h3 className="my-3 mb-2.5 font-display text-2xl font-bold tracking-[-0.4px] text-dipon-primary">
                  We&rsquo;ve got your details.
                </h3>
                <p className="m-0 font-body text-[15px] leading-[1.6] text-dipon-secondary">
                  Thanks for reaching out. Our team will be in touch when a role that matches your background opens up.
                </p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-5" noValidate>
                <span className="font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-accent uppercase">
                  Introduce Yourself
                </span>
                {/* Honeypot: hidden from people, catches bots. */}
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
                  <label htmlFor="cf-name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    required
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? "cf-name-error" : undefined}
                    className={inputClass}
                  />
                  {fieldErrors.name && (
                    <p id="cf-name-error" className={errorClass}>
                      {fieldErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="cf-email" className={labelClass}>
                    E-mail
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "cf-email-error" : undefined}
                    className={inputClass}
                  />
                  {fieldErrors.email && (
                    <p id="cf-email-error" className={errorClass}>
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="cf-phone" className={labelClass}>
                    Phone
                  </label>
                  <input id="cf-phone" name="phone" type="tel" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="cf-interest" className={labelClass}>
                    Area of interest
                  </label>
                  <select
                    id="cf-interest"
                    name="interest"
                    defaultValue=""
                    required
                    aria-invalid={Boolean(fieldErrors.interest)}
                    aria-describedby={fieldErrors.interest ? "cf-interest-error" : undefined}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select an area
                    </option>
                    {INTERESTS.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.interest && (
                    <p id="cf-interest-error" className={errorClass}>
                      {fieldErrors.interest}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="cf-message" className={labelClass}>
                    Message
                  </label>
                  <textarea id="cf-message" name="message" rows={3} className={`${inputClass} resize-none`} />
                </div>

                {state.status === "error" && !state.errors && (
                  <p role="alert" className="font-body text-[13px] text-red-600">
                    {state.message}
                  </p>
                )}

                <div className="mt-2 flex items-center justify-end gap-4">
                  <button
                    type="submit"
                    disabled={pending}
                    className="group inline-flex shrink-0 items-stretch overflow-hidden bg-dipon-primary transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className="flex items-center px-6 py-3 font-label text-[11px] font-semibold tracking-[1.2px] text-white! uppercase">
                      {pending ? "Sending…" : "Send Introduction"}
                    </span>
                    <span className="flex w-[46px] shrink-0 items-center justify-center bg-dipon-accent text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
                      <ArrowIcon width={16} height={7} />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </Reveal>

          {/* Head Office address stays in the card; the actionable details live
              in the boxless panel below. */}
          <div className="border-t border-white/10 px-6 py-9 lg:max-w-[calc(100%-480px)] lg:px-8">
            <span className="block font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-cream/70 uppercase">
              Head Office
            </span>
            <p className="mt-3 font-body text-[14px] leading-[1.7] text-dipon-cream/80">
              {HEAD_OFFICE.lines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              {HEAD_OFFICE.country}
            </p>
          </div>
        </Reveal>

        {/* Reach us directly — boxless, matches the contact page */}
        <Reveal className="mt-10 lg:mt-14">
          <div className="mb-6">
            <Eyebrow>Reach Us Directly</Eyebrow>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:gap-0">
            {/* Call */}
            <div className="md:pr-12">
              <div className="flex items-center justify-between gap-3 border-b border-[rgba(35,61,76,0.12)] pb-3">
                <span className="font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-accent uppercase">
                  Head Office
                </span>
                <span className="font-body text-[12px] text-dipon-tertiary">{HEAD_OFFICE.country}</span>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                {[{ display: HEAD_OFFICE.phoneDisplay, href: HEAD_OFFICE.phoneHref }, ...(HEAD_OFFICE.extraPhones ?? [])].map(
                  (p) => (
                    <a key={p.href} href={`tel:${p.href}`} className="group flex w-fit items-center gap-3.5 no-underline">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dipon-accent/10 text-dipon-accent transition-colors duration-200 group-hover:bg-dipon-accent group-hover:text-white">
                        <PhoneIcon />
                      </span>
                      <span className="font-body text-[22px] font-bold leading-none tracking-[-0.2px] text-dipon-primary transition-colors duration-200 group-hover:text-dipon-accent">
                        {p.display}
                      </span>
                    </a>
                  )
                )}
              </div>
              <a
                href={mapsUrl([...HEAD_OFFICE.lines, HEAD_OFFICE.country].join(", "))}
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

            {/* Email */}
            {CAREERS_EMAIL && (
              <div className="md:border-l md:border-[rgba(35,61,76,0.12)] md:pl-12">
                <div className="flex items-center gap-3 border-b border-[rgba(35,61,76,0.12)] pb-3">
                  <span className="font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-accent uppercase">
                    Email Us
                  </span>
                </div>
                <div className="mt-6">
                  <a href={`mailto:${CAREERS_EMAIL}`} className="group flex w-fit items-center gap-3.5 no-underline">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dipon-accent/10 text-dipon-accent transition-colors duration-200 group-hover:bg-dipon-accent group-hover:text-white">
                      <MailIcon />
                    </span>
                    <span className="font-body text-[20px] font-bold tracking-[-0.2px] text-dipon-primary transition-colors duration-200 group-hover:text-dipon-accent">
                      {CAREERS_EMAIL}
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {SOCIAL_LINKS.length > 0 && (
            <div className="mt-8 flex flex-col items-start gap-3 border-t border-[rgba(35,61,76,0.12)] pt-8">
              <Socials label="Follow Us" />
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
