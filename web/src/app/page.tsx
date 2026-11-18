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
import { root } from "@/lib/styles";

export default function Home() {
  return (
    <div className={root}>
      <Header />
      <main id="top">
        <div className="stack">
          <div className="stack-pin">
            <Hero />
          </div>
          <Overview />
          <Subsidiaries />
          <div className="stack-pin">
            <Industries />
          </div>
          <Projects />
          <Sustainability />
          <StatBand />
          <Leadership />
          <div className="stack-pin">
            <CtaBand />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
