import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { root, section, wrap } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Terms of Use — DIPON Group",
  description: "The terms that govern your use of the DIPON Group website.",
};

const h2 = "font-display text-[clamp(22px,2.6vw,30px)] font-extrabold leading-[1.15] text-dipon-primary";
const body = "mt-3 font-body text-[15px] leading-[1.75] text-dipon-secondary";

export default function TermsOfUsePage() {
  return (
    <div className={root}>
      <Header />
      <main id="top">
        <PageHero
          eyebrow="Legal"
          title="Terms of Use"
          intro="The terms that govern your use of this website."
        />

        <section className={section}>
          <div className={`${wrap} max-w-[820px]`}>
            <div className="flex flex-col gap-10">
              <div>
                <h2 className={h2}>Acceptance</h2>
                <p className={body}>
                  By browsing this website, you agree to these terms. If you don&rsquo;t agree, please don&rsquo;t
                  use the site.
                </p>
              </div>

              <div>
                <h2 className={h2}>Informational purpose</h2>
                <p className={body}>
                  Content on this site — including descriptions of services, subsidiaries, and past projects — is
                  provided for general information only. It doesn&rsquo;t constitute a binding offer, quotation, or
                  contractual commitment. Any actual engagement with DIPON Group or its subsidiaries is governed by
                  a separately signed agreement.
                </p>
              </div>

              <div>
                <h2 className={h2}>Acceptable use</h2>
                <p className={body}>
                  You agree not to misuse this site — including attempting to gain unauthorised access to it,
                  disrupting its operation, scraping it at scale, or using it to transmit unlawful or harmful
                  content.
                </p>
              </div>

              <div>
                <h2 className={h2}>Intellectual property</h2>
                <p className={body}>
                  The DIPON Group name, logo, and original content on this site belong to DIPON Group unless stated
                  otherwise, and may not be reproduced without permission. Some photography is licensed stock
                  imagery and remains the property of its respective owners.
                </p>
              </div>

              <div>
                <h2 className={h2}>Third-party content</h2>
                <p className={body}>
                  This site embeds or links to third-party services, such as Google Maps. We don&rsquo;t control
                  and aren&rsquo;t responsible for the content, availability, or data practices of those third
                  parties.
                </p>
              </div>

              <div>
                <h2 className={h2}>No warranty</h2>
                <p className={body}>
                  We try to keep this site accurate and available, but it&rsquo;s provided &ldquo;as is&rdquo;
                  without warranties of any kind. We don&rsquo;t guarantee it will be error-free, uninterrupted, or
                  always up to date.
                </p>
              </div>

              <div>
                <h2 className={h2}>Limitation of liability</h2>
                <p className={body}>
                  To the extent permitted by law, DIPON Group isn&rsquo;t liable for any loss or damage arising from
                  your use of, or inability to use, this website.
                </p>
              </div>

              <div>
                <h2 className={h2}>Governing law</h2>
                <p className={body}>
                  These terms are governed by the laws of the Federal Republic of Nigeria.
                </p>
              </div>

              <div>
                <h2 className={h2}>Changes to these terms</h2>
                <p className={body}>
                  We may update these terms from time to time. Continued use of the site after a change means you
                  accept the updated terms.
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
