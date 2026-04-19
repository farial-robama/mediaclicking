import { Link } from 'react-router-dom'
import { Search, Share2, MousePointer, Code, Mail, BarChart3, ArrowRight } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: <Search size={24} />,
    color: '#ff4d3d',
    title: 'Search Engine Optimization',
    desc: 'Rank higher, get found faster. We build sustainable organic traffic through technical SEO, content strategy, and authoritative link building.',
    stat: '+247% avg traffic'
  },
  {
    icon: <Share2 size={24} />,
    color: '#c47f00',
    title: 'Social Media Marketing',
    desc: 'Turn followers into customers. Our creative social strategies build communities, boost engagement, and drive real conversions.',
    stat: '5x engagement boost'
  },
  {
    icon: <MousePointer size={24} />,
    color: '#ff4d3d',
    title: 'Pay-Per-Click Advertising',
    desc: 'Every dollar counts. We run high-ROI campaigns on Google, Meta, and beyond — laser-targeted to your ideal customer.',
    stat: '300% avg ROI'
  },
  {
    icon: <Code size={24} />,
    color: '#c47f00',
    title: 'Web Design & Development',
    desc: 'Stunning, fast, conversion-optimized websites. We build digital experiences that impress visitors and turn them into buyers.',
    stat: '98 avg PageSpeed'
  },
  {
    icon: <Mail size={24} />,
    color: '#ff4d3d',
    title: 'Email Marketing',
    desc: 'Stay top of mind and top of inbox. Automated email funnels and campaigns that nurture leads and drive repeat revenue.',
    stat: '42% open rates'
  },
  {
    icon: <BarChart3 size={24} />,
    color: '#c47f00',
    title: 'Analytics & Reporting',
    desc: "Know your numbers. Crystal-clear dashboards and insights to track what's working and scale what matters most.",
    stat: 'Real-time dashboards'
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Services Built to<br />Drive Real Results</h2>
          <p className="section-sub">Everything you need to dominate your market — under one roof.</p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div key={i} className="service-card" style={{ '--card-color': s.color }}>
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <div className="service-card__stat">{s.stat}</div>
              <div className="service-card__hover-line" />
            </div>
          ))}
        </div>

        <div className="services__cta">
          <Link to="/services" className="btn-outline">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}