import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
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
                  This policy covers dipongroup.example and applies to visitors, job applicants, and anyone who
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
                <h2 className={h2}>What actually happens to it, right now</h2>
                <p className={body}>
                  Being direct about this: neither form is currently connected to a backend, database, or email
                  service. When you submit one, the information stays in your browser to show a confirmation
                  message and is not transmitted to us or stored anywhere. In practice, we do not yet receive or
                  process what you type into these forms.
                </p>
                <p className={body}>
                  This will change once we wire these forms to an actual inbox or applicant system — at that point
                  submitted details will be sent to and stored by DIPON Group (or a service provider acting on our
                  behalf, such as an email or applicant-tracking provider) for the purpose of responding to your
                  enquiry or application. We&rsquo;ll update this page to reflect that before it happens, not after.
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
                  <a href="mailto:hello@dipongroup.example" className="text-dipon-accent underline underline-offset-2">
                    [Email Address]
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className={h2}>Changes to this policy</h2>
                <p className={body}>
                  If how we collect or use personal data changes — most notably, once the forms above are actually
                  wired up, or if we ever add a cookie-based tool — we&rsquo;ll update this page first to reflect
                  the real, current state of things, not after the fact.
                </p>
                <p className={`${body} text-[13px] text-dipon-tertiary`}>Last updated: July 2026.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
