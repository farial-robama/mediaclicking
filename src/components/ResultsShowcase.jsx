import { useRef, useState, useEffect } from 'react'
import { ArrowRight, TrendingUp, Users, ShoppingBag, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import './ResultsShowcase.css'

const cases = [
  {
    industry: 'E-Commerce',
    icon: <ShoppingBag size={18} />,
    company: 'StyleVault',
    tagline: 'Fashion & Apparel',
    color: '#ff4d3d',
    bg: 'linear-gradient(135deg, #fff1f0 0%, #fce4e1 100%)',
    challenge: 'Burning $8K/mo on ads with <1x ROAS',
    result: '5.3x ROAS',
    stats: [
      { label: 'Revenue', val: '+312%' },
      { label: 'ROAS', val: '5.3x' },
      { label: 'CAC', val: '-58%' },
    ],
    duration: '4 months',
    visual: (
      <div className="rs-visual rs-visual--ecom">
        <div className="rs-product-card">
          <div className="rs-product-card__img">👗</div>
          <div className="rs-product-card__info">
            <div className="rs-product-card__name">Summer Collection</div>
            <div className="rs-product-card__price">$89.00</div>
          </div>
          <div className="rs-product-card__badge">🔥 Trending</div>
        </div>
        <div className="rs-sparkline">
          <svg viewBox="0 0 120 40">
            <polyline points="0,35 20,28 40,22 60,15 80,10 100,6 120,3"
              fill="none" stroke="#ff4d3d" strokeWidth="2" strokeLinecap="round"
              className="rs-line-anim" />
          </svg>
        </div>
        <div className="rs-roas-badge">ROAS 5.3x 🎯</div>
      </div>
    ),
  },
  {
    industry: 'SaaS',
    icon: <Building2 size={18} />,
    company: 'CloudBase Pro',
    tagline: 'B2B Software',
    color: '#0f1b35',
    bg: 'linear-gradient(135deg, #eef0f8 0%, #dde2f3 100%)',
    challenge: 'Organic traffic at zero, no brand authority',
    result: '#1 on Google',
    stats: [
      { label: 'Traffic', val: '+847%' },
      { label: 'Leads', val: '+3.4x' },
      { label: 'Keywords', val: '200+' },
    ],
    duration: '6 months',
    visual: (
      <div className="rs-visual rs-visual--saas">
        <div className="rs-serp">
          <div className="rs-serp__bar">google.com</div>
          {['CloudBase Pro ★ #1', 'Competitor A — #2', 'Competitor B — #3'].map((r, i) => (
            <div key={i} className={`rs-serp__result ${i === 0 ? 'rs-serp__result--top' : ''}`}>
              <div className="rs-serp__favicon">{i === 0 ? '🏆' : '·'}</div>
              <div className="rs-serp__text">{r}</div>
            </div>
          ))}
        </div>
        <div className="rs-keyword-chips">
          {['b2b saas', 'cloud software', 'team tools'].map((k, i) => (
            <span key={i} className="rs-chip">#{i + 1} {k}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    industry: 'Local Business',
    icon: <Users size={18} />,
    company: 'Bella Aesthetics',
    tagline: 'Beauty & Wellness',
    color: '#c47f00',
    bg: 'linear-gradient(135deg, #fdf6e8 0%, #faeac8 100%)',
    challenge: 'No online presence, relying on walk-ins only',
    result: '280% more bookings',
    stats: [
      { label: 'Bookings', val: '+280%' },
      { label: 'Reviews', val: '4.9★' },
      { label: 'Reach', val: '+1,200%' },
    ],
    duration: '3 months',
    visual: (
      <div className="rs-visual rs-visual--local">
        <div className="rs-booking-widget">
          <div className="rs-booking-widget__header">📅 Book Appointment</div>
          <div className="rs-booking-slots">
            {['10:00 AM', '2:00 PM', '4:30 PM'].map((t, i) => (
              <div key={i} className={`rs-slot ${i === 1 ? 'rs-slot--selected' : ''}`}>
                {t} {i === 1 ? '✓' : ''}
              </div>
            ))}
          </div>
          <div className="rs-booking-widget__btn">Confirm Booking</div>
        </div>
        <div className="rs-reviews">
          {'★★★★★'.split('').map((s, i) => <span key={i} className="rs-star">{s}</span>)}
          <span className="rs-review-count">4.9 (247 reviews)</span>
        </div>
      </div>
    ),
  },
]

function useInView(ref) {
  const [v, setV] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: 0.15 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [ref])
  return v
}

function CaseCard({ c, index }) {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <div ref={ref} className={`rs-card ${inView ? 'rs-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}>
      <div className="rs-card__top" style={{ background: c.bg }}>
        <div className="rs-card__industry" style={{ color: c.color }}>
          {c.icon} {c.industry}
        </div>
        <div className="rs-card__visual-area">
          {c.visual}
        </div>
      </div>
      <div className="rs-card__body">
        <div className="rs-card__meta">
          <div>
            <h4 className="rs-card__company">{c.company}</h4>
            <p className="rs-card__tagline">{c.tagline}</p>
          </div>
          <div className="rs-card__duration">{c.duration}</div>
        </div>
        <div className="rs-card__challenge">
          <span>Challenge:</span> {c.challenge}
        </div>
        <div className="rs-card__result-banner" style={{ background: c.color }}>
          <TrendingUp size={14} />
          Result: <strong>{c.result}</strong>
        </div>
        <div className="rs-card__stats">
          {c.stats.map((s, i) => (
            <div key={i} className="rs-card__stat">
              <div className="rs-card__stat-val" style={{ color: c.color }}>{s.val}</div>
              <div className="rs-card__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ResultsShowcase() {
  return (
    <section className="results-showcase">
      <div className="container">
        <div className="rs-header">
          <span className="section-tag">Case Studies</span>
          <h2 className="section-title">
            Real Clients.<br />Real Results.
          </h2>
          <p className="section-sub">
            Don't take our word for it — see exactly what we've achieved for businesses just like yours.
          </p>
        </div>

        <div className="rs-grid">
          {cases.map((c, i) => <CaseCard key={i} c={c} index={i} />)}
        </div>

        <div className="rs-footer">
          <div className="rs-footer__trust">
            <span>⭐ 4.9 / 5 average client rating</span>
            <span>·</span>
            <span>500+ businesses grown</span>
            <span>·</span>
            <span>98% client retention</span>
          </div>
          <Link to="/contact" className="rs-footer__cta">
            Get Results Like These <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
