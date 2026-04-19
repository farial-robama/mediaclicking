import { CheckCircle, Target, LineChart, HeartHandshake } from 'lucide-react'
import './WhyUs.css'

const reasons = [
  {
    icon: <Target size={22} />,
    title: 'Strategy-First Approach',
    desc: 'We start with deep research into your market, competitors, and audience before touching a single ad or keyword.'
  },
  {
    icon: <LineChart size={22} />,
    title: 'Data-Driven Decisions',
    desc: 'No guesswork. Every campaign decision is backed by real performance data, tested and optimized continuously.'
  },
  {
    icon: <CheckCircle size={22} />,
    title: 'Transparent Reporting',
    desc: 'You see everything — live dashboards, weekly reports, and honest conversations about results and next steps.'
  },
  {
    icon: <HeartHandshake size={22} />,
    title: 'Dedicated Partnership',
    desc: 'We act as an extension of your team, not just a vendor. Your success is literally our business model.'
  },
]

export default function WhyUs() {
  return (
    <section className="whyus">
      <div className="container whyus__inner">
        <div className="whyus__left">
          <span className="section-tag">Why MediaClicking</span>
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            We Don't Just Market.<br />We <span className="text-accent">Grow Brands.</span>
          </h2>
          <p className="section-sub" style={{ textAlign: 'left', maxWidth: 'none', marginBottom: 32 }}>
            Most agencies chase vanity metrics. We chase revenue. Our obsession
            with ROI has helped 500+ businesses break through plateaus and reach new heights.
          </p>
          <div className="whyus__proof">
            <div className="whyus__proof-item">
              <div className="whyus__proof-dot whyus__proof-dot--red" />
              <span>Google Partner Agency</span>
            </div>
            <div className="whyus__proof-item">
              <div className="whyus__proof-dot whyus__proof-dot--navy" />
              <span>Meta Business Partner</span>
            </div>
            <div className="whyus__proof-item">
              <div className="whyus__proof-dot whyus__proof-dot--gold" />
              <span>HubSpot Certified</span>
            </div>
          </div>
        </div>

        <div className="whyus__right">
          {reasons.map((r, i) => (
            <div key={i} className="reason-card">
              <div className="reason-card__icon">{r.icon}</div>
              <div>
                <h4 className="reason-card__title">{r.title}</h4>
                <p className="reason-card__desc">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}