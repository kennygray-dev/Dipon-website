import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WordmarkHero from "@/components/WordmarkHero";
import { root } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Contact — DIPON Group Limited",
  description:
    "Tell us what you need built, powered, supplied, or developed, and the right team at DIPON Group will be in touch.",
};

export default function ContactPage() {
  return (
    <div className={root}>
      <Header />
      <main id="top">
        <WordmarkHero word="Contact" subtitle="Let's talk about your next project" />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
