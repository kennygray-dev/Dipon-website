import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Leadership from "@/components/Leadership";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import StatBand from "@/components/StatBand";
import Subsidiaries from "@/components/Subsidiaries";
import Sustainability from "@/components/Sustainability";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="dipon-root">
      <Header heroIsDark />
      <main id="top">
        <Hero />
        <StatBand />
        <Overview />
        <Subsidiaries />
        <Industries />
        <Projects />
        <WhyChoose />
        <Sustainability />
        <Leadership />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
