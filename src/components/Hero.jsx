import { Link } from 'react-router-dom'
import { ArrowRight, Play, TrendingUp, Users, Award } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* Background orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      {/* Grid lines */}
      <div className="hero__grid" />

      <div className="container hero__inner">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Trusted by 500+ businesses worldwide
        </div>

        <h1 className="hero__title">
          We Turn Clicks Into
          <span className="hero__title-gradient"> Revenue</span>
        </h1>

        <p className="hero__subtitle">
          MediaClicking is a full-service digital marketing agency helping brands grow through
          data-driven SEO, paid ads, social media, and conversion-focused web design.
        </p>

        <div className="hero__actions">
          <Link to="/contact" className="btn-primary">
            Start Growing Today <ArrowRight size={18} />
          </Link>
          <a href="#services" className="btn-ghost">
            <Play size={16} fill="currentColor" />
            See Our Work
          </a>
        </div>

        {/* Mini stats */}
        <div className="hero__stats">
          <div className="hero__stat">
            <TrendingUp size={20} className="hero__stat-icon" />
            <div>
              <strong>300%</strong>
              <span>Avg. ROI increase</span>
            </div>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <Users size={20} className="hero__stat-icon" />
            <div>
              <strong>500+</strong>
              <span>Happy clients</span>
            </div>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <Award size={20} className="hero__stat-icon" />
            <div>
              <strong>8+ Years</strong>
              <span>Of excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="hero__float-card hero__float-card--1 float">
        <div className="hero__float-icon">📈</div>
        <div>
          <p className="hero__float-label">Organic Traffic</p>
          <p className="hero__float-value">+247%</p>
        </div>
      </div>
      <div className="hero__float-card hero__float-card--2 float" style={{animationDelay:'1.2s'}}>
        <div className="hero__float-icon">⚡</div>
        <div>
          <p className="hero__float-label">Conversion Rate</p>
          <p className="hero__float-value">+84%</p>
        </div>
      </div>
    </section>
  )
}
