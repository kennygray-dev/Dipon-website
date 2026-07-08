import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { root } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Start a Project — DIPON Group",
  description:
    "Tell us what you need built, powered, supplied, or developed, and the right team at DIPON Group will be in touch.",
};

export default function ContactPage() {
  return (
    <div className={root}>
      <Header />
      <main id="top">
        <PageHero
          eyebrow="Start a Project"
          title="Let's talk about your next project, from concept to occupancy."
          intro="Tell us what you need built, powered, supplied, or developed — and we'll get the right people at DIPON Group back to you."
          image="https://images.pexels.com/photos/6812439/pexels-photo-6812439.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imageAlt="DIPON Group client services"
        />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
