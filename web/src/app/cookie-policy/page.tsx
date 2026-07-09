import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { root, section, wrap } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Cookie Policy — DIPON Group",
  description: "How DIPON Group uses cookies and analytics on this site.",
};

const h2 = "font-display text-[clamp(22px,2.6vw,30px)] font-extrabold leading-[1.15] text-dipon-primary";
const body = "mt-3 font-body text-[15px] leading-[1.75] text-dipon-secondary";

export default function CookiePolicyPage() {
  return (
    <div className={root}>
      <Header />
      <main id="top">
        <PageHero
          eyebrow="Legal"
          title="Cookie Policy"
          intro="A short, honest page: this site does not currently set any cookies that require your consent."
        />

        <section className={section}>
          <div className={`${wrap} max-w-[820px]`}>
            <div className="flex flex-col gap-10">
              <div>
                <h2 className={h2}>What are cookies?</h2>
                <p className={body}>
                  Cookies are small text files stored on your device when you visit a website. They&rsquo;re
                  typically used to make sites work, remember preferences, or track visitors across sessions.
                </p>
              </div>

              <div>
                <h2 className={h2}>Cookies on this site</h2>
                <p className={body}>
                  This site does not set any cookies of its own — no login sessions, no preference cookies, and no
                  advertising or marketing pixels.
                </p>
              </div>

              <div>
                <h2 className={h2}>Analytics</h2>
                <p className={body}>
                  We use Vercel Web Analytics to understand aggregate traffic — which pages get visited, roughly how
                  much traffic the site gets, and where it comes from. It is designed to work without cookies and
                  without collecting personally identifiable information: it doesn&rsquo;t use persistent
                  identifiers to track you individually or across other sites, and it doesn&rsquo;t build a profile
                  tied to you.
                </p>
                <p className={body}>
                  Because it doesn&rsquo;t rely on cookies or personal data, no consent banner is needed for it.
                </p>
              </div>

              <div>
                <h2 className={h2}>If that changes</h2>
                <p className={body}>
                  If we ever add a tool that does set cookies — for example, a chat widget, retargeting pixel, or a
                  more detailed analytics platform — we&rsquo;ll update this page first to name the specific
                  cookies, their purpose and duration, and add a consent option before any such cookie is set, not
                  after.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
