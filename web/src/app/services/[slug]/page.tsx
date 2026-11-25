import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import Eyebrow from "@/components/Eyebrow";
import FocusPanels from "@/components/FocusPanels";
import Footer from "@/components/Footer";
import GeometricOverlay from "@/components/GeometricOverlay";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Opening from "@/components/Opening";
import PageHero from "@/components/PageHero";
import PhotoTile from "@/components/PhotoTile";
import Reveal from "@/components/Reveal";
import { SERVICES, SUBSIDIARY_BLURBS, getService } from "@/lib/services";
import { getSubsidiaryByName } from "@/lib/subsidiaries";
import { root, section, wrap, splitNarrow, lead } from "@/lib/styles";

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
  if (!service) return { title: "Service Not Found | DIPON Group Limited" };
  return {
    title: `${service.titleLong} | DIPON Group Limited`,
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
          imageAlt={`DIPON Group: ${service.title}`}
          featured={{
            label: "Delivered By",
            title: subsidiary ? subsidiary.short : service.deliveredBy,
            href: subsidiary ? `/subsidiaries/${subsidiary.slug}` : "/subsidiaries",
          }}
        />

        <section className={section}>
          <div className={wrap}>
            <div className={`${splitNarrow} items-center`}>
              <Reveal className="flex flex-col gap-[22px]">
                <div>
                  <Eyebrow>What We Do</Eyebrow>
                  <Heading>{service.overviewHeading}</Heading>
                </div>
                {service.overview.map((para) => (
                  <p className={lead} key={para.slice(0, 24)}>
                    {para}
                  </p>
                ))}
              </Reveal>
              <Opening delay={150} className="relative aspect-[6/5] overflow-hidden">
                <img
                  src={service.bodyImage ?? service.heroImage}
                  alt={`DIPON Group ${service.title.toLowerCase()} work`}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue/60 via-dipon-blue/15 to-transparent" />
                <GeometricOverlay />
              </Opening>
            </div>
          </div>
        </section>

        <FocusPanels
          imageKey={service.slug}
          eyebrow="Capabilities"
          heading="What's included."
          items={service.capabilities}
        />

        <section className={section}>
          <div className={wrap}>
            <div className={`${splitNarrow} items-center`}>
              <Reveal>
                <Eyebrow>Delivered By</Eyebrow>
                <Heading>{`${subsidiary ? subsidiary.short : service.deliveredBy}, the team behind this work.`}</Heading>
                <p className={`${lead} mt-5`}>{SUBSIDIARY_BLURBS[service.deliveredBy]}</p>
              </Reveal>
              <Opening delay={150} className="aspect-[6/5] overflow-hidden">
                <PhotoTile
                  href={subsidiary ? `/subsidiaries/${subsidiary.slug}` : "/subsidiaries"}
                  image={subsidiary?.heroImage ?? service.heroImage}
                  imageAlt={service.deliveredBy}
                  title={subsidiary ? subsidiary.short : service.deliveredBy}
                  desc={SUBSIDIARY_BLURBS[service.deliveredBy]}
                  className="h-full w-full"
                />
              </Opening>
            </div>
          </div>
        </section>

        <section className={`border-t border-[rgba(35,61,76,0.14)] bg-dipon-surface px-[clamp(20px,5vw,60px)] py-[clamp(72px,9vw,120px)]`}>
          <div className={wrap}>
            <Reveal className="mb-11 max-w-[620px]">
              <Eyebrow>More Services</Eyebrow>
              <Heading>Explore what else we deliver, across the Group.</Heading>
            </Reveal>
            <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              {others.map((other, i) => (
                <Opening key={other.slug} delay={(i % 3) * 90} className="aspect-[4/5] overflow-hidden">
                  <PhotoTile
                    href={`/services/${other.slug}`}
                    image={other.heroImage}
                    imageAlt={`DIPON Group: ${other.title}`}
                    title={other.title}
                    desc={other.summary}
                    className="h-full w-full"
                  />
                </Opening>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
