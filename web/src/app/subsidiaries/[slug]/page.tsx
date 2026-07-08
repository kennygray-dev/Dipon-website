import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import DarkFeatureGrid from "@/components/DarkFeatureGrid";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import PageHero from "@/components/PageHero";
import PhotoTile from "@/components/PhotoTile";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/services";
import { SUBSIDIARIES, getSubsidiary } from "@/lib/subsidiaries";
import { root, section, wrap, split, lead } from "@/lib/styles";

export function generateStaticParams() {
  return SUBSIDIARIES.map((subsidiary) => ({ slug: subsidiary.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subsidiary = getSubsidiary(slug);
  if (!subsidiary) return { title: "Subsidiary Not Found — DIPON Group" };
  return {
    title: `${subsidiary.name} — DIPON Group`,
    description: subsidiary.summary,
  };
}

export default async function SubsidiaryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subsidiary = getSubsidiary(slug);
  if (!subsidiary) notFound();

  const services = subsidiary.serviceSlugs
    .map((s) => SERVICES.find((service) => service.slug === s))
    .filter((service): service is (typeof SERVICES)[number] => Boolean(service));
  const others = SUBSIDIARIES.filter((s) => s.slug !== subsidiary.slug);

  return (
    <div className={root}>
      <Header />
      <main id="top">
        <PageHero
          eyebrow="Subsidiaries"
          title={`${subsidiary.name}, part of the DIPON Group.`}
          intro={subsidiary.intro}
          image={subsidiary.heroImage}
          imageAlt={subsidiary.name}
        />

        <section className={section}>
          <div className={wrap}>
            <div className={split}>
              <Reveal>
                <Eyebrow>Who They Are</Eyebrow>
                <Heading>{subsidiary.overviewHeading}</Heading>
              </Reveal>
              <Reveal className="flex flex-col gap-[22px]">
                {subsidiary.overview.map((para) => (
                  <p className={lead} key={para.slice(0, 24)}>
                    {para}
                  </p>
                ))}
                <div className="relative aspect-[16/8] overflow-hidden rounded-[20px]">
                  <img
                    src={subsidiary.heroImage}
                    alt={`${subsidiary.name} work`}
                    className="h-full w-full object-cover brightness-[0.82] transition-transform duration-500 ease-[var(--ease-standard)] hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue/60 via-dipon-blue/15 to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <DarkFeatureGrid
          eyebrow="Focus Areas"
          heading="What they do, every day."
          items={subsidiary.focus}
          columns={4}
        />

        <section className={section}>
          <div className={wrap}>
            <Reveal className="mb-11 max-w-[620px]">
              <Eyebrow>Services Delivered</Eyebrow>
              <Heading>{`${subsidiary.short} delivers, end to end.`}</Heading>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
              {services.map((service, i) => (
                <Reveal key={service.slug} delay={(i % 3) * 110} className="aspect-[4/5] overflow-hidden rounded-[16px]">
                  <PhotoTile
                    href={`/services/${service.slug}`}
                    image={service.heroImage}
                    imageAlt={`DIPON Group — ${service.title}`}
                    title={service.title}
                    desc={service.summary}
                    className="h-full w-full"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[rgba(35,61,76,0.14)] bg-dipon-surface px-[clamp(20px,5vw,60px)] py-[clamp(72px,9vw,120px)]">
          <div className={wrap}>
            <Reveal className="mb-11 max-w-[620px]">
              <Eyebrow>The Group</Eyebrow>
              <Heading>The other companies, in the Group.</Heading>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
              {others.map((other, i) => (
                <Reveal key={other.slug} delay={i * 130} className="aspect-[4/5] overflow-hidden rounded-[16px]">
                  <PhotoTile
                    href={`/subsidiaries/${other.slug}`}
                    image={other.heroImage}
                    imageAlt={`DIPON Group — ${other.name}`}
                    title={other.short}
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
