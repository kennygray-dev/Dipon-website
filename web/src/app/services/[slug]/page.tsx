import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import PageHero from "@/components/PageHero";
import PhotoTile from "@/components/PhotoTile";
import Reveal from "@/components/Reveal";
import { SERVICES, SUBSIDIARY_BLURBS, getService } from "@/lib/services";
import { getSubsidiaryByName } from "@/lib/subsidiaries";
import { root, section, wrap, split, splitNarrow, lead } from "@/lib/styles";

const GRAIN_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found — DIPON Group" };
  return {
    title: `${service.titleLong} — DIPON Group`,
    description: service.summary,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== service.slug);
  const subsidiary = getSubsidiaryByName(service.deliveredBy);

  return (
    <div className={root}>
      <Header />
      <main id="top">
        <PageHero
          eyebrow="Services"
          title={`${service.titleLong}, delivered end to end.`}
          intro={service.intro}
          image={service.heroImage}
          imageAlt={`DIPON Group — ${service.title}`}
        />

        <section className={section}>
          <div className={wrap}>
            <div className={split}>
              <Reveal>
                <Eyebrow>What We Do</Eyebrow>
                <Heading>{service.overviewHeading}</Heading>
              </Reveal>
              <Reveal className="flex flex-col gap-[22px]">
                {service.overview.map((para) => (
                  <p className={lead} key={para.slice(0, 24)}>
                    {para}
                  </p>
                ))}
                <div className="relative aspect-[16/8] overflow-hidden rounded-[20px]">
                  <img
                    src={service.heroImage}
                    alt={`DIPON Group ${service.title.toLowerCase()} work`}
                    className="h-full w-full object-cover brightness-[0.82] transition-transform duration-500 ease-[var(--ease-standard)] hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue/60 via-dipon-blue/15 to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          className={`relative overflow-hidden bg-dipon-blue [clip-path:polygon(0_64px,100%_0,100%_calc(100%-64px),0_100%)] max-[760px]:[clip-path:none] ${section}`}
        >
          <div aria-hidden="true" className="absolute top-0 right-0 h-full w-[46%] opacity-50">
            <svg width="100%" height="100%" viewBox="0 0 600 700" preserveAspectRatio="xMidYMid slice">
              <path d="M360 0 L600 360 L600 0 Z" fill="#FD802E" opacity="0.05" />
              <path d="M480 700 L600 470 L600 700 Z" fill="#FFFFFF" opacity="0.03" />
            </svg>
          </div>

          {/* Faint line geometry spanning the whole section */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.07]">
            <svg width="100%" height="100%" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" fill="none">
              <path d="M-40 40 L340 40 L440 330 L60 330 Z" stroke="#FFF9EB" strokeWidth="1.5" />
              <path d="M340 40 L520 200" stroke="#FFF9EB" strokeWidth="1.5" />
              <path d="M60 330 L-100 470" stroke="#FFF9EB" strokeWidth="1.5" />
              <path d="M1240 660 L1220 260" stroke="#FFF9EB" strokeWidth="1.5" />
              <path d="M1240 660 L980 160" stroke="#FFF9EB" strokeWidth="1.5" />
              <path d="M1240 660 L700 260" stroke="#FFF9EB" strokeWidth="1.5" />
              <path d="M1220 260 L980 160" stroke="#FFF9EB" strokeWidth="1.5" />
              <path d="M980 160 L700 260" stroke="#FFF9EB" strokeWidth="1.5" />
              <circle cx="340" cy="40" r="3.5" fill="#FFF9EB" />
              <circle cx="60" cy="330" r="3.5" fill="#FFF9EB" />
              <circle cx="1220" cy="260" r="3.5" fill="#FFF9EB" />
              <circle cx="980" cy="160" r="3.5" fill="#FFF9EB" />
              <circle cx="700" cy="260" r="3.5" fill="#FFF9EB" />
            </svg>
          </div>

          {/* Grain texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay"
            style={{ backgroundImage: GRAIN_TEXTURE }}
          />

          <div className={`${wrap} relative`}>
            <Reveal className="mx-auto mb-[54px] max-w-[600px] text-center">
              <Eyebrow light>Capabilities</Eyebrow>
              <Heading light>What&rsquo;s included.</Heading>
            </Reveal>
            <div className="grid grid-cols-1 gap-px border border-[rgba(255,249,235,0.12)] bg-[rgba(255,249,235,0.12)] sm:grid-cols-2 md:grid-cols-4">
              {service.capabilities.map((cap, i) => (
                <Reveal key={cap.title} delay={(i % 4) * 110}>
                  <div className="relative flex h-full flex-col items-center gap-3 overflow-hidden bg-dipon-blue px-6 py-8 text-center transition-colors duration-300 hover:bg-dipon-blue-alt">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay"
                      style={{ backgroundImage: GRAIN_TEXTURE }}
                    />
                    <span className="relative z-10 font-display text-2xl font-extrabold text-dipon-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="relative z-10 font-display text-[15.5px] font-bold text-dipon-cream">{cap.title}</h3>
                    <p className="relative z-10 m-0 max-w-[240px] font-body text-[13.5px] leading-[1.6] text-[rgba(255,249,235,0.94)]">
                      {cap.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={section}>
          <div className={wrap}>
            <div className={`${splitNarrow} items-center`}>
              <Reveal>
                <Eyebrow>Delivered By</Eyebrow>
                <Heading>{`${subsidiary ? subsidiary.short : service.deliveredBy}, the team behind this work.`}</Heading>
                <p className={`${lead} mt-4`}>{SUBSIDIARY_BLURBS[service.deliveredBy]}</p>
              </Reveal>
              <Reveal delay={150} className="aspect-[6/5] overflow-hidden rounded-[16px]">
                <PhotoTile
                  href={subsidiary ? `/subsidiaries/${subsidiary.slug}` : "/subsidiaries"}
                  image={subsidiary?.heroImage ?? service.heroImage}
                  imageAlt={service.deliveredBy}
                  title={subsidiary ? subsidiary.short : service.deliveredBy}
                  desc={SUBSIDIARY_BLURBS[service.deliveredBy]}
                  className="h-full w-full"
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section className={`border-t border-[rgba(35,61,76,0.14)] bg-dipon-surface px-[clamp(20px,5vw,60px)] py-[clamp(72px,9vw,120px)]`}>
          <div className={wrap}>
            <Reveal className="mb-11 max-w-[620px]">
              <Eyebrow>More Services</Eyebrow>
              <Heading>Explore what else we deliver, across the Group.</Heading>
            </Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {others.map((other, i) => (
                <Reveal key={other.slug} delay={(i % 5) * 100} className="aspect-[3/4] overflow-hidden rounded-[14px]">
                  <PhotoTile
                    href={`/services/${other.slug}`}
                    image={other.heroImage}
                    imageAlt={`DIPON Group — ${other.title}`}
                    title={other.title}
                    desc={other.summary}
                    className="h-full w-full"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand className="-mt-16 max-[760px]:mt-0" />
      </main>
      <Footer />
    </div>
  );
}
