import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Services from "../components/Services";
import ProcessSection from "../components/ProcessSection";
import ResultsShowcase from "../components/ResultsShowcase";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Insights from "../components/Insights";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>

      <Marquee />

      <section id="about">
        <WhyUs />
      </section>

      <section id="services">
        <Services />
      </section>

      <ProcessSection />

      <section id="work">
        <ResultsShowcase />
      </section>

      <section id="insights">
        <Insights />
      </section>

      <Testimonials />

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}