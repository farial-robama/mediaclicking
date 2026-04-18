import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CTA from '../components/CTA'
import './Page.css'

const services = [
  {
    emoji: '🔍',
    color: '#00e5ff',
    title: 'Search Engine Optimization',
    desc: 'Dominate search results and drive consistent organic traffic that compounds over time. We handle everything from technical audits to link building.',
    features: ['Technical SEO Audits', 'Keyword Research & Strategy', 'On-Page Optimization', 'Link Building & Authority', 'Local SEO', 'Monthly Reporting'],
  },
  {
    emoji: '📱',
    color: '#7b2ff7',
    title: 'Social Media Marketing',
    desc: 'Build a loyal following and convert your audience into paying customers with scroll-stopping content and community management.',
    features: ['Content Strategy & Creation', 'Community Management', 'Influencer Partnerships', 'Paid Social Campaigns', 'Instagram, TikTok, LinkedIn, Facebook', 'Analytics & Reporting'],
  },
  {
    emoji: '💰',
    color: '#ff4d6d',
    title: 'Pay-Per-Click Advertising',
    desc: 'Put your brand in front of buyers at the exact moment they\'re ready to purchase. We run high-ROI campaigns across every major platform.',
    features: ['Google Search & Display Ads', 'Meta & Instagram Ads', 'YouTube Advertising', 'Conversion Tracking Setup', 'A/B Testing & Optimization', 'Budget Management'],
  },
  {
    emoji: '💻',
    color: '#00e5ff',
    title: 'Web Design & Development',
    desc: 'Fast, beautiful, conversion-optimized websites built to impress and perform. From landing pages to full e-commerce stores.',
    features: ['Custom Website Design', 'E-Commerce Development', 'Landing Page Creation', 'Speed & Performance Optimization', 'Mobile-First Responsive Design', 'CMS Integration'],
  },
  {
    emoji: '📧',
    color: '#7b2ff7',
    title: 'Email Marketing',
    desc: 'Automated sequences and broadcast campaigns that nurture leads, re-engage customers, and drive consistent recurring revenue.',
    features: ['Email Strategy & Copywriting', 'Automation Sequences', 'Newsletter Campaigns', 'List Segmentation', 'A/B Testing', 'Deliverability Optimization'],
  },
  {
    emoji: '📊',
    color: '#ff4d6d',
    title: 'Analytics & Reporting',
    desc: 'Make smarter marketing decisions with clear, real-time data. We set up full tracking and provide weekly insights you can actually act on.',
    features: ['Google Analytics 4 Setup', 'Custom Dashboard Creation', 'Conversion Tracking', 'Competitor Analysis', 'Weekly Performance Reports', 'ROI Attribution Modeling'],
  },
]

export default function ServicesPage() {
  return (
    <main className="page">
      <section className="page-hero">
        <div className="page-hero__orb page-hero__orb--1" />
        <div className="page-hero__orb page-hero__orb--2" />
        <div className="container page-hero__inner">
          <span className="section-tag">Our Services</span>
          <h1 className="page-hero__title">
            Everything You Need to<br />
            <span className="text-gradient">Dominate Online</span>
          </h1>
          <p className="page-hero__sub">
            Full-service digital marketing under one roof. No outsourcing, no fluff —
            just an expert team fully dedicated to growing your business.
          </p>
        </div>
      </section>

      <section className="services-page">
        <div className="container">
          <div className="services__grid">
            {services.map((s, i) => (
              <div key={i} className="service-detail-card">
                <div className="service-detail-card__icon" style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}>
                  {s.emoji}
                </div>
                <h3 className="service-detail-card__title">{s.title}</h3>
                <p className="service-detail-card__desc">{s.desc}</p>
                <ul className="service-detail-card__features">
                  {s.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 12, background: 'var(--accent)', color: 'var(--bg)', fontWeight: 600, fontSize: '1rem' }}>
              Get a Free Strategy Call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
