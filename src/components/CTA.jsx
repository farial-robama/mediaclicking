import { Link } from 'react-router-dom'
import { ArrowRight, Rocket } from 'lucide-react'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-section__bg" />
      <div className="container cta-section__inner">
        <div className="cta-section__icon">
          <Rocket size={28} />
        </div>
        <h2 className="cta-section__title">
          Ready to Grow Your Business?
        </h2>
        <p className="cta-section__sub">
          Get a free, no-obligation marketing audit and discover exactly where
          your biggest growth opportunities are hiding.
        </p>
        <div className="cta-section__actions">
          <Link to="/contact" className="cta-section__btn-primary">
            Get My Free Audit <ArrowRight size={18} />
          </Link>
          <Link to="/services" className="cta-section__btn-ghost">
            Explore Services
          </Link>
        </div>
        <p className="cta-section__note">No credit card required · Response within 24 hours</p>
      </div>
    </section>
  )
}
