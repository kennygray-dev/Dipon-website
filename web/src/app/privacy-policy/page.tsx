import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { CONTACT_EMAIL } from "@/lib/site";
import { root, section, wrap } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Privacy Policy — DIPON Group",
  description: "What information DIPON Group collects through this site, why, and how it's handled.",
};

const h2 = "font-display text-[clamp(22px,2.6vw,30px)] font-extrabold leading-[1.15] text-dipon-primary";
const body = "mt-3 font-body text-[15px] leading-[1.75] text-dipon-secondary";
const li = "mt-2 font-body text-[15px] leading-[1.75] text-dipon-secondary";

export default function PrivacyPolicyPage() {
  return (
    <div className={root}>
      <Header />
      <main id="top">
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          intro="What this site asks you for, what actually happens to it today, and your rights over it."
        />

        <section className={section}>
          <div className={`${wrap} max-w-[820px]`}>
            <div className="flex flex-col gap-10">
              <div>
                <h2 className={h2}>Who this covers</h2>
                <p className={body}>
                  This policy covers dipongrouplimited.com and applies to visitors, job applicants, and anyone who
                  submits a form on this site. DIPON Group (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a Nigerian-owned
                  group, and we handle personal data in line with Nigeria&rsquo;s Data Protection Act (NDPA 2023).
                </p>
              </div>

              <div>
                <h2 className={h2}>What we ask for</h2>
                <p className={body}>Two forms on this site request personal information:</p>
                <p className={li}>
                  <strong className="text-dipon-primary">Contact form</strong> (/contact) — name, email, phone,
                  service of interest, and your message.
                </p>
                <p className={li}>
                  <strong className="text-dipon-primary">Careers form</strong> (/careers) — name, email, phone, area
                  of interest, and your message.
                </p>
              </div>

              <div>
                <h2 className={h2}>What we do with it</h2>
                <p className={body}>
                  When you submit the contact or careers form, the details you enter are sent to our team by email
                  so we can respond to your enquiry or application. We use Resend, an email-delivery service, as a
                  processor to transmit these messages on our behalf; the message is delivered to our company inbox
                  and kept there for as long as we need it to handle your request and keep a reasonable record of
                  our correspondence.
                </p>
                <p className={body}>
                  We use this information only to respond to you. We don&rsquo;t sell it or use it for advertising,
                  and we only share it with service providers — such as our email provider — to the extent needed to
                  operate these forms and reply to you.
                </p>
              </div>

              <div>
                <h2 className={h2}>Cookies and analytics</h2>
                <p className={body}>
                  This site does not set any cookies of its own — no login sessions, no preference cookies, no
                  advertising or marketing pixels. We use Vercel Web Analytics to see aggregate traffic patterns —
                  which pages get visited and roughly how much traffic the site gets. It&rsquo;s cookieless and
                  doesn&rsquo;t use persistent identifiers to track you individually or build a profile tied to you.
                </p>
              </div>

              <div>
                <h2 className={h2}>Third-party embeds</h2>
                <p className={body}>
                  Our Contact page embeds a Google Maps view of our office location. Loading that map is a request
                  to Google, and Google may collect data under its own privacy policy when it does — that happens
                  independently of us and isn&rsquo;t something we control.
                </p>
              </div>

              <div>
                <h2 className={h2}>Your rights</h2>
                <p className={body}>
                  Under the NDPA, once we do hold your information, you can ask to access it, correct it, have it
                  deleted, or object to how it&rsquo;s used. You can also lodge a complaint with the Nigeria Data
                  Protection Commission (NDPC). To make a request, reach us at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-dipon-accent underline underline-offset-2">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className={h2}>Changes to this policy</h2>
                <p className={body}>
                  If how we collect or use personal data changes — for example, if we add a new form, change our
                  email provider, or ever introduce a cookie-based tool — we&rsquo;ll update this page to reflect the
                  real, current state of things.
                </p>
                <p className={`${body} text-[13px] text-dipon-tertiary`}>Last updated: August 2026.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
