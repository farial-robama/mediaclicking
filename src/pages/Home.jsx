import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Services from '../components/Services'
import Stats from '../components/Stats'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <WhyUs />
      <Testimonials />
      <CTA />
    </main>
  )
}
