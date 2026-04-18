import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Services from '../components/Services'
import ProcessSection from '../components/ProcessSection'
import Stats from '../components/Stats'
import ResultsShowcase from '../components/ResultsShowcase'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <ProcessSection />
      <Stats />
      <ResultsShowcase />
      <WhyUs />
      <Testimonials />
      <CTA />
    </main>
  )
}
