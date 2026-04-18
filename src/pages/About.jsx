import { Link } from 'react-router-dom'
import { ArrowRight, Users, Globe, Trophy, Lightbulb, Star, TrendingUp, Zap } from 'lucide-react'
import './About.css'

const team = [
  { name: 'Alex Rivera', role: 'CEO & Founder', initials: 'AR', color: '#ff4d3d', bg: '#fff1f0', expertise: 'Growth Strategy' },
  { name: 'Priya Nair', role: 'Head of SEO', initials: 'PN', color: '#0f1b35', bg: '#eef0f8', expertise: 'Organic Search' },
  { name: 'James Okafor', role: 'Creative Director', initials: 'JO', color: '#c47f00', bg: '#fdf6e8', expertise: 'Brand Identity' },
  { name: 'Luna Park', role: 'PPC Strategist', initials: 'LP', color: '#ff4d3d', bg: '#fff1f0', expertise: 'Paid Media' },
  { name: 'Tariq Hassan', role: 'Lead Developer', initials: 'TH', color: '#0f1b35', bg: '#eef0f8', expertise: 'Web Engineering' },
  { name: 'Emily Cross', role: 'Social Media Lead', initials: 'EC', color: '#c47f00', bg: '#fdf6e8', expertise: 'Community Growth' },
]

const values = [
  { icon: <Trophy size={20}/>, title: 'Results Over Vanity', desc: 'We measure success in revenue and growth, not impressions or likes.', color: '#ff4d3d', bg: '#fff1f0' },
  { icon: <Users size={20}/>, title: 'Client Partnership', desc: "Your goals become our goals. We're an extension of your team, not a vendor.", color: '#0f1b35', bg: '#eef0f8' },
  { icon: <Globe size={20}/>, title: 'Global Thinking', desc: 'Strategies built to compete and win in any market, anywhere in the world.', color: '#c47f00', bg: '#fdf6e8' },
  { icon: <Lightbulb size={20}/>, title: 'Constant Innovation', desc: 'We stay ahead of every algorithm update so you never have to worry.', color: '#ff4d3d', bg: '#fff1f0' },
]

const milestones = [
  { year: '2017', title: 'Founded', desc: 'Started with 2 people and a bold mission to do marketing right.' },
  { year: '2019', title: '100 Clients', desc: 'Hit our first major milestone with a 94% client retention rate.' },
  { year: '2021', title: 'Expanded', desc: 'Opened 3 new service verticals including web design & email.' },
  { year: '2023', title: '$50M+ Generated', desc: 'Revenue generated for clients across all channels combined.' },
  { year: '2025', title: '500+ Clients', desc: 'Serving brands across 30+ industries in 15+ countries.' },
]

export default function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="ab-hero">
        <div className="ab-hero__dots" />
        <div className="container ab-hero__inner">
          <div className="ab-hero__left">
            <div className="ab-pill">
              <Star size={12} fill="currentColor" /> Our Story
            </div>
            <h1 className="ab-hero__title">
              We Don't Just Run Campaigns —
              <br /><em>We Build Brands That Last.</em>
            </h1>
            <p className="ab-hero__sub">
              Founded in 2017, MediaClicking was born from frustration with agencies that overpromise
              and underdeliver. We built something radically different — a team obsessed with
              transparency, data, and results that actually move the needle.
            </p>
            <div className="ab-hero__actions">
              <Link to="/contact" className="ab-btn-primary">
                Work With Us <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="ab-btn-ghost">See Our Services</Link>
            </div>
          </div>

          <div className="ab-hero__right">
            <div className="ab-stat-card ab-stat-card--main">
              <div className="ab-stat-card__num">500<sup>+</sup></div>
              <div className="ab-stat-card__label">Happy Clients Worldwide</div>
              <div className="ab-stat-card__bar">
                <div className="ab-stat-card__fill" />
              </div>
            </div>
            <div className="ab-stat-row">
              <div className="ab-stat-card ab-stat-card--sm">
                <TrendingUp size={18} color="#ff4d3d" />
                <div className="ab-stat-card__num ab-stat-card__num--sm">$50M+</div>
                <div className="ab-stat-card__label">Revenue Generated</div>
              </div>
              <div className="ab-stat-card ab-stat-card--sm ab-stat-card--dark">
                <Zap size={18} color="#fff" />
                <div className="ab-stat-card__num ab-stat-card__num--sm" style={{color:'#fff'}}>8 yrs</div>
                <div className="ab-stat-card__label" style={{color:'rgba(255,255,255,0.65)'}}>Of Excellence</div>
              </div>
            </div>
            <div className="ab-badges">
              <span className="ab-badge">🏆 Google Partner</span>
              <span className="ab-badge">📘 Meta Business</span>
              <span className="ab-badge">🎯 HubSpot Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="ab-timeline">
        <div className="container">
          <div className="ab-section-label">Our Journey</div>
          <h2 className="ab-section-title">8 Years of Building Something Real</h2>
          <div className="ab-timeline__wrap">
            <div className="ab-timeline__line" />
            {milestones.map((m, i) => (
              <div key={i} className={`ab-timeline__item ${i % 2 === 0 ? 'ab-timeline__item--left' : 'ab-timeline__item--right'}`}>
                <div className="ab-timeline__dot" />
                <div className="ab-timeline__card">
                  <span className="ab-timeline__year">{m.year}</span>
                  <h4 className="ab-timeline__card-title">{m.title}</h4>
                  <p className="ab-timeline__card-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="ab-values">
        <div className="ab-values__bg" />
        <div className="container">
          <div className="ab-section-label">What We Stand For</div>
          <h2 className="ab-section-title">The Principles We Never Compromise</h2>
          <div className="ab-values__grid">
            {values.map((v, i) => (
              <div key={i} className="ab-value-card">
                <div className="ab-value-card__icon" style={{ background: v.bg, color: v.color }}>
                  {v.icon}
                </div>
                <h3 className="ab-value-card__title">{v.title}</h3>
                <p className="ab-value-card__desc">{v.desc}</p>
                <div className="ab-value-card__accent" style={{ background: v.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="ab-team">
        <div className="container">
          <div className="ab-section-label">The People</div>
          <h2 className="ab-section-title">Meet the Minds Behind Your Growth</h2>
          <p className="ab-section-sub">Specialists who live and breathe digital marketing — and genuinely love what they do.</p>
          <div className="ab-team__grid">
            {team.map((m, i) => (
              <div key={i} className="ab-team-card">
                <div className="ab-team-card__top" style={{ background: m.bg }}>
                  <div className="ab-team-card__avatar" style={{ color: m.color, border: `2px solid ${m.color}30` }}>
                    {m.initials}
                  </div>
                </div>
                <div className="ab-team-card__body">
                  <h4 className="ab-team-card__name">{m.name}</h4>
                  <p className="ab-team-card__role">{m.role}</p>
                  <span className="ab-team-card__tag" style={{ color: m.color, background: m.bg }}>
                    {m.expertise}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ab-cta">
        <div className="container ab-cta__inner">
          <div className="ab-cta__text">
            <h2 className="ab-cta__title">Ready to Be Our Next Success Story?</h2>
            <p className="ab-cta__sub">Join 500+ brands who chose results over excuses.</p>
          </div>
          <Link to="/contact" className="ab-cta__btn">
            Get a Free Audit <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  )
}
