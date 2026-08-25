import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { CONTACT_EMAIL } from "@/lib/site";
import { root, section, wrap } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Terms of Service — DIPON Group Limited",
  description: "The terms that govern your use of the DIPON Group website and its content.",
};

const h2 = "font-display text-[clamp(22px,2.6vw,30px)] font-extrabold leading-[1.15] text-dipon-primary";
const body = "mt-3 font-body text-[15px] leading-[1.75] text-dipon-secondary";
const li = "mt-2 font-body text-[15px] leading-[1.75] text-dipon-secondary";
const linkClass = "text-dipon-accent underline underline-offset-2";

export default function TermsOfServicePage() {
  return (
    <div className={root}>
      <Header />
      <main id="top">
        <PageHero
          eyebrow="Legal"
          title="Terms of Service"
          intro="The terms that govern your use of this website and the information it contains."
        />

        <section className={section}>
          <div className={`${wrap} max-w-[820px]`}>
            <div className="flex flex-col gap-10">
              <div>
                <h2 className={h2}>Agreement to these terms</h2>
                <p className={body}>
                  By accessing or using dipongrouplimited.com (&ldquo;this site&rdquo;), you agree to these Terms of
                  Service. If you do not agree with them, please do not use the site. We may update these terms from
                  time to time; continuing to use the site after a change means you accept the updated terms.
                </p>
              </div>

              <div>
                <h2 className={h2}>Who we are</h2>
                <p className={body}>
                  This site is operated by DIPON Group Limited (&ldquo;DIPON&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
                  &ldquo;our&rdquo;), a Nigerian group delivering construction, power infrastructure, real estate, and
                  supply-chain solutions through its companies — DIPON Construction Limited, DIPON Global Resources
                  Limited, and DIPON Infrastructure Limited — each registered in Nigeria under the Companies and
                  Allied Matters Act, 2020.
                </p>
              </div>

              <div>
                <h2 className={h2}>Use of the site</h2>
                <p className={body}>
                  You may use this site for lawful, informational purposes — to learn about our group, our services,
                  and our companies, and to get in touch with us. You agree not to:
                </p>
                <p className={li}>&bull; misuse the site or interfere with its normal operation;</p>
                <p className={li}>
                  &bull; attempt to gain unauthorised access to any part of the site or its underlying systems;
                </p>
                <p className={li}>
                  &bull; use the site to transmit unlawful, harmful, or misleading content, or to submit false
                  information through our forms;
                </p>
                <p className={li}>
                  &bull; copy, scrape, or reproduce the site&rsquo;s content except as permitted below.
                </p>
              </div>

              <div>
                <h2 className={h2}>Information is not a binding offer</h2>
                <p className={body}>
                  The content on this site — including descriptions of our services, projects, and capabilities — is
                  provided for general information only. It does not constitute an offer, a quotation, or a binding
                  commitment. Any engagement with DIPON or any of its companies is governed by a separate written
                  agreement signed by both parties; nothing on this site, and no form submission, creates a contract
                  for services on its own.
                </p>
              </div>

              <div>
                <h2 className={h2}>Intellectual property</h2>
                <p className={body}>
                  The DIPON name and logo, together with the content, design, text, graphics, and layout of this
                  site, are owned by or licensed to DIPON Group Limited and its companies and are protected by applicable
                  intellectual-property laws. You are welcome to view our pages and share links to them, but you may
                  not reproduce, republish, or use our content or branding for commercial purposes without our prior
                  written permission.
                </p>
              </div>

              <div>
                <h2 className={h2}>Accuracy and availability</h2>
                <p className={body}>
                  We aim to keep the information on this site accurate and current, but we provide it &ldquo;as
                  is&rdquo; and make no warranty that it is complete, error-free, or up to date. We may change,
                  suspend, or withdraw any part of the site at any time without notice, and we do not guarantee that
                  it will always be available or uninterrupted.
                </p>
              </div>

              <div>
                <h2 className={h2}>Third-party links and embeds</h2>
                <p className={body}>
                  This site may link to, or embed content from, third-party services — for example, the Google Maps
                  view on our Contact page. We do not control those services and are not responsible for their
                  content, accuracy, or data practices. Following an external link is at your own discretion and is
                  subject to that third party&rsquo;s own terms.
                </p>
              </div>

              <div>
                <h2 className={h2}>Limitation of liability</h2>
                <p className={body}>
                  To the fullest extent permitted by law, DIPON Group Limited and its companies will not be liable for any
                  loss or damage arising from your use of, or inability to use, this site, or from reliance on any
                  information it contains. Nothing in these terms excludes or limits any liability that cannot lawfully
                  be excluded or limited.
                </p>
              </div>

              <div>
                <h2 className={h2}>Privacy</h2>
                <p className={body}>
                  Your use of this site is also governed by our{" "}
                  <Link href="/privacy-policy" className={linkClass}>
                    Privacy Policy
                  </Link>
                  , which explains how we handle the information you provide through our contact and careers forms.
                </p>
              </div>

              <div>
                <h2 className={h2}>Governing law</h2>
                <p className={body}>
                  These terms are governed by the laws of the Federal Republic of Nigeria, and any dispute relating to
                  them or to your use of this site is subject to the jurisdiction of the Nigerian courts.
                </p>
              </div>

              <div>
                <h2 className={h2}>Contact</h2>
                <p className={body}>
                  Questions about these terms? Reach us at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                    {CONTACT_EMAIL}
                  </a>
                  .
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
