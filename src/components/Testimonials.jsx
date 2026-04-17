import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechNova Inc.',
    avatar: 'SJ',
    color: '#00e5ff',
    text: 'MediaClicking transformed our online presence completely. Our organic traffic grew by 340% in just 6 months, and our cost per lead dropped by 60%. Best investment we\'ve ever made in marketing.',
    stars: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Founder, BrandForge',
    avatar: 'MC',
    color: '#7b2ff7',
    text: 'The PPC campaigns they run for us are absolutely phenomenal. We went from burning money on ads to a consistent 4x ROAS. Their team is transparent, proactive, and genuinely cares about results.',
    stars: 5,
  },
  {
    name: 'Aisha Patel',
    role: 'Marketing Director, CloudBase',
    avatar: 'AP',
    color: '#ff4d6d',
    text: 'Working with MediaClicking feels like having an elite in-house marketing team. They redesigned our website, launched our SEO strategy, and within 4 months we were ranking on page 1 for 50+ keywords.',
    stars: 5,
  },
  {
    name: 'David Williams',
    role: 'COO, Nexify Solutions',
    avatar: 'DW',
    color: '#00e5ff',
    text: 'I\'ve worked with 3 digital marketing agencies before. MediaClicking is in a different league. Data-driven, creative, and they actually deliver what they promise. Our revenue is up 180% YoY.',
    stars: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(i => (i + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="testimonials">
      <div className="testimonials__orb" />
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Client Stories</span>
          <h2 className="section-title">Real Results,<br />Real People</h2>
        </div>

        <div className="testimonials__card">
          <div className="testimonials__stars">
            {Array.from({ length: t.stars }).map((_, i) => (
              <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>

          <blockquote className="testimonials__quote">"{t.text}"</blockquote>

          <div className="testimonials__author">
            <div className="testimonials__avatar" style={{ background: `${t.color}22`, borderColor: `${t.color}44`, color: t.color }}>
              {t.avatar}
            </div>
            <div>
              <p className="testimonials__name">{t.name}</p>
              <p className="testimonials__role">{t.role}</p>
            </div>
          </div>

          <div className="testimonials__nav">
            <button className="testimonials__btn" onClick={prev} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="testimonials__btn" onClick={next} aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
