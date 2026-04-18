import { useEffect, useRef, useState } from 'react'
import { Search, Lightbulb, Rocket, BarChart3, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './ProcessSection.css'

const steps = [
  {
    icon: <Search size={26} />,
    number: '01',
    color: '#ff4d3d',
    bg: '#fff1f0',
    title: 'Deep Discovery',
    desc: 'We audit your brand, competitors, and market. No assumptions — just data. This is where we find your biggest hidden opportunities.',
    visual: (
      <div className="ps-visual ps-visual--discover">
        <div className="ps-screen">
          <div className="ps-screen__bar">
            <span /><span /><span />
          </div>
          <div className="ps-screen__body">
            <div className="ps-graph">
              <div className="ps-graph__bar" style={{ height: '40%', animationDelay: '0s' }} />
              <div className="ps-graph__bar" style={{ height: '65%', animationDelay: '0.1s' }} />
              <div className="ps-graph__bar" style={{ height: '45%', animationDelay: '0.2s' }} />
              <div className="ps-graph__bar ps-graph__bar--accent" style={{ height: '85%', animationDelay: '0.3s' }} />
              <div className="ps-graph__bar" style={{ height: '55%', animationDelay: '0.4s' }} />
              <div className="ps-graph__bar ps-graph__bar--accent" style={{ height: '95%', animationDelay: '0.5s' }} />
            </div>
            <div className="ps-screen__labels">
              <span className="ps-label ps-label--red">Competitors</span>
              <span className="ps-label ps-label--green">Your Potential</span>
            </div>
          </div>
        </div>
        <div className="ps-badge ps-badge--float1">
          <span className="ps-badge__dot ps-badge__dot--green" />
          47 Opportunities Found
        </div>
      </div>
    ),
  },
  {
    icon: <Lightbulb size={26} />,
    number: '02',
    color: '#c47f00',
    bg: '#fdf6e8',
    title: 'Strategy Crafted',
    desc: "We build a custom growth roadmap — not a template, not copy-paste. A real plan built around your goals, budget, and timeline.",
    visual: (
      <div className="ps-visual ps-visual--strategy">
        <div className="ps-roadmap">
          {['Research', 'Plan', 'Launch', 'Scale'].map((s, i) => (
            <div key={i} className="ps-roadmap__item" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="ps-roadmap__dot" style={{ borderColor: i < 2 ? '#ff4d3d' : '#d1cfc8' }}>
                {i < 2 && <div className="ps-roadmap__dot-fill" />}
              </div>
              <span className={i < 2 ? 'ps-roadmap__label--done' : ''}>{s}</span>
              {i < 3 && <div className={`ps-roadmap__line ${i < 1 ? 'ps-roadmap__line--done' : ''}`} />}
            </div>
          ))}
        </div>
        <div className="ps-card-stack">
          <div className="ps-card-mini ps-card-mini--1">📈 SEO Strategy</div>
          <div className="ps-card-mini ps-card-mini--2">💰 Paid Media Plan</div>
          <div className="ps-card-mini ps-card-mini--3">📱 Social Calendar</div>
        </div>
      </div>
    ),
  },
  {
    icon: <Rocket size={26} />,
    number: '03',
    color: '#ff4d3d',
    bg: '#fff1f0',
    title: 'Launch & Execute',
    desc: "We don't just plan — we do. Campaigns go live, content is published, ads are optimized. Speed and precision, together.",
    visual: (
      <div className="ps-visual ps-visual--launch">
        <div className="ps-metrics-grid">
          <div className="ps-metric">
            <div className="ps-metric__icon">🔍</div>
            <div className="ps-metric__val ps-metric__val--anim">+312%</div>
            <div className="ps-metric__label">Organic Traffic</div>
          </div>
          <div className="ps-metric ps-metric--accent">
            <div className="ps-metric__icon">💰</div>
            <div className="ps-metric__val ps-metric__val--anim" style={{ animationDelay: '0.3s' }}>4.2x</div>
            <div className="ps-metric__label">ROAS</div>
          </div>
          <div className="ps-metric">
            <div className="ps-metric__icon">📱</div>
            <div className="ps-metric__val ps-metric__val--anim" style={{ animationDelay: '0.6s' }}>+89%</div>
            <div className="ps-metric__label">Engagement</div>
          </div>
          <div className="ps-metric ps-metric--accent">
            <div className="ps-metric__icon">🎯</div>
            <div className="ps-metric__val ps-metric__val--anim" style={{ animationDelay: '0.9s' }}>-41%</div>
            <div className="ps-metric__label">Cost Per Lead</div>
          </div>
        </div>
        <div className="ps-badge ps-badge--launch">
          <span>🚀</span> Campaigns Live
        </div>
      </div>
    ),
  },
  {
    icon: <BarChart3 size={26} />,
    number: '04',
    color: '#0f1b35',
    bg: '#eef0f8',
    title: 'Optimise & Scale',
    desc: 'We never set it and forget it. Every week we review, test, and improve. Your results compound over time — that\'s the goal.',
    visual: (
      <div className="ps-visual ps-visual--scale">
        <div className="ps-trend">
          <svg viewBox="0 0 200 80" className="ps-trend__svg">
            <defs>
              <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff4d3d" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#ff4d3d" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,70 C30,65 50,55 70,45 S110,20 140,15 S175,8 200,5"
              fill="none" stroke="#ff4d3d" strokeWidth="2.5" strokeLinecap="round"
              className="ps-trend__line" />
            <path d="M0,70 C30,65 50,55 70,45 S110,20 140,15 S175,8 200,5 L200,80 L0,80 Z"
              fill="url(#trendGrad)" className="ps-trend__fill" />
          </svg>
          <div className="ps-trend__labels">
            <span>Month 1</span>
            <span>Month 6</span>
          </div>
        </div>
        <div className="ps-report-chip">
          <div className="ps-report-chip__icon">📊</div>
          <div>
            <p className="ps-report-chip__title">Weekly Report Ready</p>
            <p className="ps-report-chip__sub">+24% vs last week</p>
          </div>
        </div>
      </div>
    ),
  },
]

function useInView(ref) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref])
  return inView
}

function StepCard({ step, index }) {
  const ref = useRef(null)
  const inView = useInView(ref)
  const isEven = index % 2 === 1

  return (
    <div
      ref={ref}
      className={`ps-step ${inView ? 'ps-step--visible' : ''} ${isEven ? 'ps-step--reverse' : ''}`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className="ps-step__content">
        <div className="ps-step__number" style={{ color: step.color }}>{step.number}</div>
        <div className="ps-step__icon-wrap" style={{ background: step.bg, color: step.color }}>
          {step.icon}
        </div>
        <h3 className="ps-step__title">{step.title}</h3>
        <p className="ps-step__desc">{step.desc}</p>
      </div>
      <div className="ps-step__visual-wrap">
        {step.visual}
      </div>
    </div>
  )
}

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="ps-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">
            From Zero to Growth —<br />Our 4-Step Process
          </h2>
          <p className="section-sub">
            A proven, repeatable framework that has generated $50M+ in revenue for our clients.
          </p>
        </div>

        <div className="ps-steps">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>

        <div className="ps-bottom">
          <Link to="/contact" className="ps-cta">
            Start Your Growth Journey <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
