import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, TrendingUp, Users, Target,
  Award, ChevronRight, ExternalLink, BarChart3
} from 'lucide-react'
import './Work.css'

const STATS = [
  { icon: <TrendingUp size={22} />, value: '500+', label: 'Campaigns Launched', sub: 'across all channels' },
  { icon: <Users size={22} />,      value: '200+', label: 'Happy Clients',       sub: 'in 18+ industries'  },
  { icon: <Target size={22} />,     value: '3.8×', label: 'Avg. ROAS',           sub: 'return on ad spend' },
  { icon: <Award size={22} />,      value: '98%',  label: 'Client Retention',    sub: 'year over year'     },
]

const FILTERS = ['All', 'SEO', 'PPC', 'Social Media', 'Web Design']

const CASES = [
  {
    tag: 'SEO',
    client: 'HealthFirst Clinic',
    industry: 'Healthcare',
    emoji: '🏥',
    headline: 'From Page 6 to #1 in 4 Months',
    desc: 'Full technical SEO overhaul, content strategy, and link-building campaign that put HealthFirst at the top of competitive medical keywords.',
    results: [
      { metric: '340%', label: 'Organic Traffic', prefix: '↑' },
      { metric: '#1',   label: 'Target Keywords',  prefix: ''  },
      { metric: '55%',  label: 'New Patients',     prefix: ''  },
    ],
    accentColor: '#0d9488',
    bgTint: 'rgba(13,148,136,.06)',
  },
  {
    tag: 'PPC',
    client: 'RetailGiant',
    industry: 'E-Commerce',
    emoji: '🛒',
    headline: '180% Revenue Growth in 6 Months',
    desc: 'Google Shopping + Meta Ads with rigorous A/B testing on creatives and landing pages that dramatically improved cost per acquisition.',
    results: [
      { metric: '180%', label: 'Revenue Growth',      prefix: '↑' },
      { metric: '3.4×', label: 'ROAS',                prefix: ''  },
      { metric: '42%',  label: 'Cost Per Acquisition', prefix: '↓' },
    ],
    accentColor: '#ff4d3d',
    bgTint: 'rgba(255,77,61,.06)',
  },
  {
    tag: 'Social Media',
    client: 'FinTech Nova',
    industry: 'Finance',
    emoji: '💳',
    headline: '3× Qualified Leads in 90 Days',
    desc: 'LinkedIn + Instagram strategy with precise audience targeting that tripled inbound leads and cut the sales cycle by weeks.',
    results: [
      { metric: '3×',   label: 'Qualified Leads',  prefix: ''  },
      { metric: '280%', label: 'Engagement Rate',  prefix: '↑' },
      { metric: '35%',  label: 'Sales Cycle',      prefix: '↓' },
    ],
    accentColor: '#7c3aed',
    bgTint: 'rgba(124,58,237,.06)',
  },
  {
    tag: 'Web Design',
    client: 'TravelSpark',
    industry: 'Travel & Tourism',
    emoji: '✈️',
    headline: 'Conversion Rate Doubled After Redesign',
    desc: 'Complete UX/UI redesign focused on reducing friction in the booking flow, with new landing pages tailored for each market segment.',
    results: [
      { metric: '112%', label: 'Conversion Rate',     prefix: '↑' },
      { metric: '28%',  label: 'Bounce Rate',         prefix: '↓' },
      { metric: '94%',  label: 'Session Duration',    prefix: '↑' },
    ],
    accentColor: '#2563eb',
    bgTint: 'rgba(37,99,235,.06)',
  },
  {
    tag: 'SEO',
    client: 'EduConnect',
    industry: 'EdTech',
    emoji: '🎓',
    headline: '220% Increase in Trial Signups',
    desc: 'Content-led SEO targeting high-intent terms. Built a topical cluster around online learning that drove consistent, compounding traffic.',
    results: [
      { metric: '220%', label: 'Trial Signups', prefix: '↑' },
      { metric: '410%', label: 'Blog Traffic',  prefix: '↑' },
      { metric: '62',   label: 'DA Score',      prefix: ''  },
    ],
    accentColor: '#0d9488',
    bgTint: 'rgba(13,148,136,.06)',
  },
  {
    tag: 'PPC',
    client: 'AutoDrive',
    industry: 'Automotive',
    emoji: '🚗',
    headline: 'Cut Ad Spend 30%, Kept Revenue Flat',
    desc: 'Audited and restructured Google Ads, eliminated wasted spend, and introduced smart bidding that maintained conversions at 70% of original budget.',
    results: [
      { metric: '30%',  label: 'Ad Spend Cut',       prefix: '↓' },
      { metric: '18%',  label: 'Conversion Volume',  prefix: '↑' },
      { metric: '4.1×', label: 'ROAS',               prefix: ''  },
    ],
    accentColor: '#ff4d3d',
    bgTint: 'rgba(255,77,61,.06)',
  },
]

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animating, setAnimating] = useState(false)
  const [visible, setVisible] = useState(CASES)
  const revealRefs = useRef([])
  const gridRef = useRef(null)

  // Intersection observer for scroll reveals
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.08 }
    )
    revealRefs.current.forEach(el => el && io.observe(el))
    return () => io.disconnect()
  }, [visible])

  const addRef = el => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  // Filter with fade animation
  const handleFilter = (f) => {
    if (f === activeFilter) return
    setAnimating(true)
    setTimeout(() => {
      setActiveFilter(f)
      setVisible(f === 'All' ? CASES : CASES.filter(c => c.tag === f))
      revealRefs.current = []
      setAnimating(false)
    }, 220)
  }

  return (
    <div className="work-page">

      {/* ── HERO ── */}
      <section className="work-hero">
        <div className="work-hero__bg-glow" />
        <div className="container">
          <div className="work-hero__inner">
            <span className="work-hero__eyebrow">
              <span className="work-hero__dot" />
              Our Work
            </span>
            <h1 className="work-hero__title">
              Results That<br />
              <em className="work-hero__accent">Speak for Themselves</em>
            </h1>
            <p className="work-hero__desc">
              Real campaigns, real numbers. Every case study below is a story of a business
              that invested in growth — and got exactly that.
            </p>
            <div className="work-hero__actions">
              <Link to="/contact" className="btn-primary">
                Start Your Growth Story <ArrowRight size={15} />
              </Link>
              <a href="#cases" className="btn-ghost">
                See Case Studies <ChevronRight size={15} />
              </a>
            </div>
          </div>

          {/* Stats grid */}
          <div className="work-stats">
            {STATS.map((s, i) => (
              <div key={i} className="work-stat reveal" ref={addRef}
                style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="work-stat__icon">{s.icon}</div>
                <div className="work-stat__body">
                  <span className="work-stat__value">{s.value}</span>
                  <span className="work-stat__label">{s.label}</span>
                  <span className="work-stat__sub">{s.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="work-cases section" id="cases">
        <div className="container">

          {/* Section header */}
          <div className="work-cases__header reveal" ref={addRef}>
            <div className="work-cases__header-left">
              <p className="section-label"><BarChart3 size={13} /> Case Studies</p>
              <h2 className="work-cases__title">Proven Results<br />Across Every Channel</h2>
            </div>
            <p className="work-cases__sub">
              Filter by service to find stories most relevant to your business goals.
            </p>
          </div>

          {/* Filters */}
          <div className="work-filters reveal" ref={addRef}>
            {FILTERS.map(f => (
              <button
                key={f}
                className={`work-filter${activeFilter === f ? ' is-active' : ''}`}
                onClick={() => handleFilter(f)}
              >
                {f}
                {activeFilter === f && (
                  <span className="work-filter__count">
                    {f === 'All' ? CASES.length : CASES.filter(c => c.tag === f).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div
            ref={gridRef}
            className={`work-cases__grid${animating ? ' is-fading' : ''}`}
          >
            {visible.map((c, i) => (
              <article
                key={`${c.client}-${activeFilter}`}
                className="case-card reveal"
                ref={addRef}
                style={{
                  '--card-accent': c.accentColor,
                  '--card-tint':   c.bgTint,
                  transitionDelay: `${(i % 3) * 0.07}s`,
                }}
              >
                {/* Card header */}
                <div className="case-card__top">
                  <div className="case-card__meta">
                    <span className="case-card__tag" style={{ color: c.accentColor, background: c.bgTint }}>
                      {c.tag}
                    </span>
                    <span className="case-card__industry">{c.industry}</span>
                  </div>
                  <div className="case-card__emoji">{c.emoji}</div>
                </div>

                {/* Body */}
                <div className="case-card__body">
                  <p className="case-card__client">{c.client}</p>
                  <h3 className="case-card__headline">{c.headline}</h3>
                  <p className="case-card__desc">{c.desc}</p>
                </div>

                {/* Results strip */}
                <div className="case-card__results">
                  {c.results.map((r, j) => (
                    <div key={j} className="case-card__result">
                      <span className="case-card__metric">
                        {r.prefix && <span className="case-card__prefix">{r.prefix}</span>}
                        {r.metric}
                      </span>
                      <span className="case-card__rlabel">{r.label}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="case-card__footer">
                  <Link to="/contact" className="case-card__link">
                    Get similar results <ArrowRight size={13} />
                  </Link>
                </div>

                {/* Hover accent bar */}
                <span className="case-card__bar" />
              </article>
            ))}
          </div>

          {/* Empty state */}
          {visible.length === 0 && (
            <div className="work-empty">
              <p>No case studies found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="work-cta section">
        <div className="container">
          <div className="work-cta__box reveal" ref={addRef}>
            <div className="work-cta__glow" />
            <span className="work-cta__eyebrow">Ready to Grow?</span>
            <h2 className="work-cta__title">Your Business Could Be<br />Our Next Success Story</h2>
            <p className="work-cta__sub">
              Book a free strategy call. No commitment, no jargon — just an honest look
              at what's possible for your business.
            </p>
            <div className="work-cta__actions">
              <Link to="/contact" className="btn-primary btn-primary--lg">
                Book Free Strategy Call <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-ghost btn-ghost--lg">
                View Services <ExternalLink size={14} />
              </Link>
            </div>
            <p className="work-cta__note">
              ✓ No credit card &nbsp;·&nbsp; ✓ Reply within 24 h &nbsp;·&nbsp; ✓ Free audit included
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}