import { useEffect, useRef } from 'react'
import { CheckCircle, Target, LineChart, HeartHandshake } from 'lucide-react'
import './WhyUs.css'

const reasons = [
  {
    icon: <Target size={22} />,
    title: 'Strategy-First Approach',
    desc: 'We start with deep research into your market, competitors, and audience before touching a single ad or keyword.',
  },
  {
    icon: <LineChart size={22} />,
    title: 'Data-Driven Decisions',
    desc: 'No guesswork. Every campaign decision is backed by real performance data, tested and optimized continuously.',
  },
  {
    icon: <CheckCircle size={22} />,
    title: 'Transparent Reporting',
    desc: 'You see everything — live dashboards, weekly reports, and honest conversations about results and next steps.',
  },
  {
    icon: <HeartHandshake size={22} />,
    title: 'Dedicated Partnership',
    desc: 'We act as an extension of your team, not just a vendor. Your success is literally our business model.',
  },
]

/* ── 3-D Marketing Dashboard Animation ─────────────────────────── */
function Dashboard3D() {
  const sceneRef = useRef(null)

  // Subtle mouse-parallax tilt
  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return
    const handleMove = e => {
      const rect = scene.getBoundingClientRect()
      const cx = rect.left + rect.width  / 2
      const cy = rect.top  + rect.height / 2
      const dx = (e.clientX - cx) / rect.width
      const dy = (e.clientY - cy) / rect.height
      scene.style.setProperty('--rx', `${-dy * 8}deg`)
      scene.style.setProperty('--ry', `${ dx * 10}deg`)
    }
    const handleLeave = () => {
      scene.style.setProperty('--rx', '0deg')
      scene.style.setProperty('--ry', '0deg')
    }
    scene.addEventListener('mousemove', handleMove)
    scene.addEventListener('mouseleave', handleLeave)
    return () => {
      scene.removeEventListener('mousemove', handleMove)
      scene.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div className="dash3d-scene" ref={sceneRef}>
      {/* floating orbs */}
      <span className="orb orb-1" />
      <span className="orb orb-2" />
      <span className="orb orb-3" />

      <div className="dash3d-stage">
        {/* ── Main dashboard card ── */}
        <div className="d3-card d3-card--main">
          <div className="d3-card__header">
            <div className="d3-header-dots">
              <span /><span /><span />
            </div>
            <span className="d3-header-title">Campaign Overview</span>
            <span className="d3-live-badge"><span className="d3-live-dot" />Live</span>
          </div>

          {/* big metric */}
          <div className="d3-metric-row">
            <div>
              <p className="d3-metric-label">Total Reach</p>
              <p className="d3-metric-value">247K</p>
              <p className="d3-metric-delta">↑ 38.4% this month</p>
            </div>
            <div className="d3-sparkline">
              {[40, 55, 45, 70, 60, 85, 75, 100].map((h, i) => (
                <span
                  key={i}
                  className="d3-spark-bar"
                  style={{ '--h': h + '%', animationDelay: i * 0.08 + 's' }}
                />
              ))}
            </div>
          </div>

          {/* mini stat grid */}
          <div className="d3-mini-grid">
            {[
              { v: '3.8×', l: 'ROAS',      c: 'cyan'   },
              { v: '94%',  l: 'Retention', c: 'pink'   },
              { v: '62%',  l: 'Organic ↑', c: 'purple' },
              { v: '12K',  l: 'Leads/mo',  c: 'green'  },
            ].map((s, i) => (
              <div key={i} className={`d3-mini-stat d3-mini-stat--${s.c}`}>
                <span className="d3-mini-val">{s.v}</span>
                <span className="d3-mini-lbl">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Floating pill card 1 — SEO ── */}
        <div className="d3-card d3-card--pill d3-card--pill-top">
          <span className="d3-pill-icon">🔍</span>
          <div>
            <p className="d3-pill-title">SEO Ranking</p>
            <p className="d3-pill-sub">↑ Position #1 achieved</p>
          </div>
          <span className="d3-pill-badge d3-pill-badge--green">+340%</span>
        </div>

        {/* ── Floating pill card 2 — ROAS ── */}
        <div className="d3-card d3-card--pill d3-card--pill-bot">
          <span className="d3-pill-icon">💰</span>
          <div>
            <p className="d3-pill-title">Ad Spend ROI</p>
            <p className="d3-pill-sub">Google + Meta combined</p>
          </div>
          <span className="d3-pill-badge d3-pill-badge--red">3.8×</span>
        </div>

        {/* ── Progress bars card ── */}
        <div className="d3-card d3-card--bars">
          {[
            { label: 'Google Ads',  pct: 88, c: 'red'    },
            { label: 'Meta Ads',    pct: 74, c: 'purple' },
            { label: 'SEO',         pct: 95, c: 'teal'   },
            { label: 'Email',       pct: 62, c: 'amber'  },
          ].map((b, i) => (
            <div key={i} className="d3-bar-row">
              <span className="d3-bar-label">{b.label}</span>
              <div className="d3-bar-track">
                <div
                  className={`d3-bar-fill d3-bar-fill--${b.c}`}
                  style={{ '--pct': b.pct + '%', animationDelay: i * 0.15 + 's' }}
                />
              </div>
              <span className="d3-bar-pct">{b.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section className="whyus">
      <div className="container whyus__inner">

        {/* ── Left text column ── */}
        <div className="whyus__left">
          <span className="section-tag">Why MediaClicking</span>
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            We Don't Just Market.<br />
            We <span className="text-accent">Grow Brands.</span>
          </h2>
          <p className="section-sub" style={{ textAlign: 'left', maxWidth: 'none', marginBottom: 32 }}>
            Most agencies chase vanity metrics. We chase revenue. Our obsession with ROI has
            helped 500+ businesses break through plateaus and reach new heights.
          </p>

          <div className="whyus__proof">
            {[
              { dot: 'red',  label: 'Google Partner Agency'  },
              { dot: 'navy', label: 'Meta Business Partner'  },
              { dot: 'gold', label: 'HubSpot Certified'      },
            ].map((p, i) => (
              <div key={i} className="whyus__proof-item">
                <div className={`whyus__proof-dot whyus__proof-dot--${p.dot}`} />
                <span>{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right — 3D animation + reason cards ── */}
        <div className="whyus__right">
          {/* 3D Dashboard sits above the cards */}
          <Dashboard3D />

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