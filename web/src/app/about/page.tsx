import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import DarkFeatureGrid from "@/components/DarkFeatureGrid";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Leadership from "@/components/Leadership";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { root, section, wrap, lead } from "@/lib/styles";

export const metadata: Metadata = {
  title: "About Us — DIPON Group",
  description:
    "DIPON Group is a Nigerian-owned conglomerate delivering construction, renewable energy, real estate, and supply chain solutions through three specialized companies.",
};

const OVERVIEW_IMAGES = {
  vertical: {
    src: "https://images.pexels.com/photos/8961260/pexels-photo-8961260.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "DIPON Group construction and integration project",
  },
  horizontalTop: {
    src: "https://images.pexels.com/photos/18153132/pexels-photo-18153132.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "DIPON Group real estate and property development",
  },
  horizontalBottom: {
    src: "https://images.pexels.com/photos/33786603/pexels-photo-33786603.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "DIPON Group renewable energy and power infrastructure",
  },
};

type Value = { title: string; desc: string };

const VALUES: Value[] = [
  {
    title: "Accountability",
    desc: "One group answerable for every stage — no risk lost at the handoff between contractors.",
  },
  {
    title: "Integrated Delivery",
    desc: "Design, build, power, and occupancy kept under a single, coordinated group.",
  },
  {
    title: "Local Ownership",
    desc: "Nigerian-owned and Nigerian-led, investing in the communities we build in.",
  },
  {
    title: "Sustainability",
    desc: "Renewable energy woven into how we deliver, not bolted on afterwards.",
  },
];

export default function AboutPage() {
  return (
    <div className={root}>
      <Header />
      <main id="top">
        <PageHero
          eyebrow="About DIPON Group"
          title="One accountable group, across the full build lifecycle."
          intro="We integrate construction, power infrastructure, real estate, and supply chain capability under one Nigerian-owned group — so the risk that usually lives between contractors lives with us instead."
          image="https://images.pexels.com/photos/30688593/pexels-photo-30688593.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imageAlt="DIPON Group leadership meeting"
        />

        <section id="overview" className={section}>
          <div className={wrap}>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.6fr_0.85fr] lg:gap-16">
              <Reveal className="flex flex-col gap-[22px]">
                <div>
                  <Eyebrow>Who We Are</Eyebrow>
                  <Heading>A Nigerian-owned group built to remove risk at the handoff.</Heading>
                </div>
                <p className={lead}>
                  DIPON Group is a Nigerian-owned conglomerate delivering construction, renewable energy, real estate,
                  and supply chain solutions through three specialized companies. Each subsidiary is built for depth in
                  its field, while the Group keeps them accountable to a single standard.
                </p>
                <p className={lead}>
                  Where most projects fail at the handoff between contractors, we remove that risk by keeping every
                  stage — design, build, power, and occupancy — accountable to one group. That is what lets us take on
                  work end to end and stand behind the result.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:aspect-[6/5] lg:grid-cols-2 lg:grid-rows-2">
                <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[20px] lg:aspect-auto lg:row-span-2">
                  <img
                    src={OVERVIEW_IMAGES.vertical.src}
                    alt={OVERVIEW_IMAGES.vertical.alt}
                    className="h-full w-full object-cover brightness-[0.82] transition-transform duration-500 ease-[var(--ease-standard)] hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue/60 via-dipon-blue/15 to-transparent" />
                </Reveal>
                <Reveal delay={150} className="relative aspect-[16/10] overflow-hidden rounded-[20px] lg:aspect-auto">
                  <img
                    src={OVERVIEW_IMAGES.horizontalTop.src}
                    alt={OVERVIEW_IMAGES.horizontalTop.alt}
                    className="h-full w-full object-cover brightness-[0.82] transition-transform duration-500 ease-[var(--ease-standard)] hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue/60 via-dipon-blue/15 to-transparent" />
                </Reveal>
                <Reveal delay={300} className="relative aspect-[16/10] overflow-hidden rounded-[20px] lg:aspect-auto">
                  <img
                    src={OVERVIEW_IMAGES.horizontalBottom.src}
                    alt={OVERVIEW_IMAGES.horizontalBottom.alt}
                    className="h-full w-full object-cover brightness-[0.82] transition-transform duration-500 ease-[var(--ease-standard)] hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dipon-blue/60 via-dipon-blue/15 to-transparent" />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <DarkFeatureGrid eyebrow="What Guides Us" heading="The standards behind every project." items={VALUES} columns={4} />

        <Leadership />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
