"use client";

import { useState } from "react";
import Eyebrow from "./Eyebrow";
import GeometricOverlay from "./GeometricOverlay";
import Heading from "./Heading";
import Reveal from "./Reveal";
import { ArrowIcon, FacebookIcon, InstagramIcon, LinkedInIcon, LogoMark, UploadIcon, XIcon } from "./icons";
import { section, wrap, lead } from "@/lib/styles";

const PHOTO = "https://images.pexels.com/photos/30688597/pexels-photo-30688597.jpeg?auto=compress&cs=tinysrgb&w=1600";

const SOCIALS = [
  { Icon: XIcon, href: "#", label: "X" },
  { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
];

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
  "w-full border-0 border-b border-[rgba(35,61,76,0.18)] bg-transparent px-0 py-2.5 font-body text-[15px] text-dipon-primary outline-none transition-colors duration-200 placeholder:text-dipon-tertiary focus:border-dipon-accent";
const labelClass = "block font-body text-[13px] text-dipon-tertiary";

export default function CareersContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend wired yet — surface a confirmation state. Wire to an
    // endpoint or email service before launch.
    setSubmitted(true);
  };

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
          <div className="relative z-20 w-full bg-white px-3 py-8 sm:px-6 lg:absolute lg:top-10 lg:right-10 lg:mb-0 lg:w-[400px] lg:rounded-[22px] lg:p-[clamp(24px,3vw,36px)] lg:shadow-[0_4px_16px_rgba(20,28,33,0.2),0_20px_45px_-14px_rgba(20,28,33,0.5),0_40px_80px_-24px_rgba(20,28,33,0.35)] xl:w-[440px]">
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
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <span className="font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-accent uppercase">
                  Introduce Yourself
                </span>
                <div>
                  <label htmlFor="cf-name" className={labelClass}>
                    Name
                  </label>
                  <input id="cf-name" name="name" type="text" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="cf-email" className={labelClass}>
                    E-mail
                  </label>
                  <input id="cf-email" name="email" type="email" required className={inputClass} />
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
                  <select id="cf-interest" name="interest" defaultValue="" required className={inputClass}>
                    <option value="" disabled>
                      Select an area
                    </option>
                    {INTERESTS.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="cf-message" className={labelClass}>
                    Message
                  </label>
                  <textarea id="cf-message" name="message" rows={3} className={`${inputClass} resize-none`} />
                </div>

                <div className="mt-2 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 font-body text-[13px] text-dipon-tertiary">
                    <UploadIcon size={17} /> Upload CV
                  </span>
                  <button
                    type="submit"
                    className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-dipon-primary py-3 pr-3 pl-6 font-label text-[11px] font-semibold tracking-[1.2px] text-white! uppercase transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(35,61,76,0.28)]"
                  >
                    Send Introduction
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-dipon-accent text-white! transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-dipon-accent-deep">
                      <ArrowIcon width={12} height={5} />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Social icons — mobile only, sits right under the form */}
          <div className="flex items-center gap-3 border-t border-white/10 px-6 py-6 lg:hidden">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-dipon-cream/90 transition-colors duration-200 hover:border-dipon-accent hover:bg-dipon-accent hover:text-white"
              >
                <Icon />
              </a>
            ))}
            <span className="ml-1 font-label text-[11px] tracking-[0.6px] text-dipon-cream/80 uppercase">— Follow Us</span>
          </div>

          {/* Contacts / socials */}
          <div className="grid grid-cols-1 gap-8 border-t border-white/10 px-6 py-9 lg:grid-cols-[1fr_1fr_auto] lg:items-start lg:px-8">
            <div>
              <span className="block font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-cream/70 uppercase">
                Prefer To Talk?
              </span>
              <p className="mt-3 font-body text-[14px] leading-[1.7] text-dipon-cream/85">
                <a href="tel:+2340000000000" className="text-dipon-cream/85 no-underline hover:text-white">
                  [Phone Number]
                </a>
                <br />
                <a href="mailto:careers@dipongroup.example" className="text-dipon-cream/85 no-underline hover:text-white">
                  [Careers Email]
                </a>
              </p>
            </div>
            <div>
              <span className="block font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-cream/70 uppercase">
                Head Office
              </span>
              <p className="mt-3 font-body text-[14px] leading-[1.7] text-dipon-cream/85">
                [Head Office Address]
                <br />
                [City/Region], Nigeria
              </p>
            </div>
            <div className="hidden lg:flex lg:h-full lg:flex-col lg:items-end lg:justify-between lg:gap-4">
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
              <span className="font-label text-[11px] tracking-[0.6px] text-dipon-cream/70 uppercase">— Follow Us</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
