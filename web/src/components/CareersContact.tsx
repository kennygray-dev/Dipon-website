"use client";

import { useActionState } from "react";
import { submitCareers } from "@/app/actions/careers";
import { initialContactState } from "@/lib/contact";
import Eyebrow from "./Eyebrow";
import GeometricOverlay from "./GeometricOverlay";
import Heading from "./Heading";
import Reveal from "./Reveal";
import Socials from "./Socials";
import { ArrowIcon, LogoMark, MailIcon, PhoneIcon, PinIcon } from "./icons";
import { CAREERS_EMAIL, OFFICES } from "@/lib/site";
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
  "w-full rounded-xl border border-[rgba(35,61,76,0.14)] bg-dipon-surface px-4 py-3 font-body text-[15px] text-dipon-primary outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-dipon-tertiary focus:border-dipon-accent focus:bg-white focus:ring-2 focus:ring-dipon-accent/25 aria-[invalid=true]:border-red-500";
const labelClass = "mb-1.5 block font-body text-[13px] font-medium text-dipon-secondary";
const errorClass = "mt-1 font-body text-[12px] text-red-600";
const contactChip =
  "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-3.5 py-2 font-body text-[13.5px] text-dipon-cream no-underline transition-colors duration-200 hover:border-white/45 hover:bg-white/10";
const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export default function CareersContact() {
  const [state, formAction, pending] = useActionState(submitCareers, initialContactState);
  const submitted = state.status === "success";
  const fieldErrors = state.errors ?? {};

  return (
    <section id="cta" className={section}>
      <div className={wrap}>
        <Reveal className="mb-10 max-w-[640px]">
          <Eyebrow>Open Positions</Eyebrow>
          <Heading>No open roles right now.</Heading>
          <p className={`${lead} mt-4`}>
            We&rsquo;re not actively hiring for a specific position at the moment — but we&rsquo;re always glad to meet
            talented people who want to build Africa&rsquo;s future with us. Introduce yourself and we&rsquo;ll reach
            out when something fits.
          </p>
        </Reveal>

        <Reveal className="relative rounded-[28px] bg-dipon-blue">
          {/* Photo */}
          <div className="relative h-[280px] overflow-hidden rounded-t-[28px] sm:h-[340px] lg:h-[380px]">
            <img src={PHOTO} alt="DIPON Group team" className="absolute inset-0 h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue via-dipon-blue/10 to-dipon-blue/35" />
            <GeometricOverlay />
            <h3 className="absolute bottom-7 left-6 z-10 max-w-[60%] text-balance font-display text-[clamp(24px,3.2vw,36px)] font-extrabold leading-[1.05] text-dipon-cream sm:left-8">
              Meet the team
            </h3>
          </div>

          {/* Introduction form — edge-to-edge on mobile, floating card on desktop */}
          <div className="relative z-20 w-full bg-white px-5 py-8 sm:px-6 lg:absolute lg:top-10 lg:right-10 lg:mb-0 lg:w-[400px] lg:rounded-[22px] lg:p-[clamp(24px,3vw,36px)] lg:shadow-[0_4px_16px_rgba(20,28,33,0.2),0_20px_45px_-14px_rgba(20,28,33,0.5),0_40px_80px_-24px_rgba(20,28,33,0.35)] xl:w-[440px]">
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
                    className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-dipon-primary py-3 pr-3 pl-6 font-label text-[11px] font-semibold tracking-[1.2px] text-white! uppercase transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(35,61,76,0.28)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {pending ? "Sending…" : "Send Introduction"}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-dipon-accent text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
                      <ArrowIcon width={12} height={5} />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contacts / socials — grouped bottom-left, clear of the floating form */}
          <div className="flex flex-col gap-8 border-t border-white/10 px-6 py-9 sm:flex-row sm:flex-wrap sm:gap-12 lg:max-w-[calc(100%-480px)] lg:flex-nowrap lg:items-start lg:gap-16 lg:px-8">
            <div>
              <span className="block font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-cream/70 uppercase">
                Prefer To Talk?
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href={`tel:${HEAD_OFFICE.phoneHref}`} className={contactChip}>
                  <span className="text-dipon-accent">
                    <PhoneIcon />
                  </span>
                  {HEAD_OFFICE.phoneDisplay}
                </a>
                {CAREERS_EMAIL && (
                  <a href={`mailto:${CAREERS_EMAIL}`} className={contactChip}>
                    <span className="text-dipon-accent">
                      <MailIcon />
                    </span>
                    {CAREERS_EMAIL}
                  </a>
                )}
              </div>
            </div>
            <div>
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
              <div className="mt-3">
                <a
                  href={mapsUrl([...HEAD_OFFICE.lines, HEAD_OFFICE.country].join(", "))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactChip}
                >
                  <span className="text-dipon-accent">
                    <PinIcon />
                  </span>
                  Directions
                </a>
              </div>
            </div>
            <Socials label="Follow Us" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
