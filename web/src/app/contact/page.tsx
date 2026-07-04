import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Start a Project — DIPON Group",
  description:
    "Tell us what you need built, powered, supplied, or developed, and the right team at DIPON Group will be in touch.",
};

export default function ContactPage() {
  return (
    <div className="dipon-root">
      <Header heroIsDark />
      <main id="top">
        <PageHero
          eyebrow="Start a Project"
          title="Let's talk about your next project."
          intro="Tell us what you need built, powered, supplied, or developed — and we'll get the right people at DIPON Group back to you."
        />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
