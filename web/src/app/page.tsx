import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Leadership from "@/components/Leadership";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import Subsidiaries from "@/components/Subsidiaries";
import Sustainability from "@/components/Sustainability";
import WhyChoose from "@/components/WhyChoose";
import { root } from "@/lib/styles";

export default function Home() {
  return (
    <div className={root}>
      <Header />
      <main id="top">
        <Hero />
        <Overview />
        <WhyChoose />
        <Subsidiaries />
        <Industries />
        <Projects />
        <Sustainability />
        <Leadership />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
