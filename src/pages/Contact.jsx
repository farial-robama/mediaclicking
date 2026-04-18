import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle, MessageSquare, Zap, Shield } from 'lucide-react'
import './Contact.css'

const contactInfo = [
  {
    icon: <Mail size={20} />,
    title: 'Drop Us an Email',
    val: 'hello@mediaclicking.com',
    sub: 'We reply within 2 hours',
    color: '#ff4d3d',
    bg: '#fff1f0',
  },
  {
    icon: <Phone size={20} />,
    title: 'Give Us a Call',
    val: '+1 (234) 567-890',
    sub: 'Mon–Fri, 9AM–6PM EST',
    color: '#0f1b35',
    bg: '#eef0f8',
  },
  {
    icon: <MapPin size={20} />,
    title: 'Visit Our Office',
    val: '123 Digital Ave',
    sub: 'New York, NY 10001',
    color: '#c47f00',
    bg: '#fdf6e8',
  },
  {
    icon: <Clock size={20} />,
    title: 'Working Hours',
    val: 'Mon–Fri: 9AM – 6PM',
    sub: 'Weekend: Emergency only',
    color: '#ff4d3d',
    bg: '#fff1f0',
  },
]

const perks = [
  { icon: <Zap size={15} />, text: 'Response within 24 hours' },
  { icon: <Shield size={15} />, text: 'No-obligation, 100% free' },
  { icon: <MessageSquare size={15} />, text: 'Personalized strategy plan' },
]

const services = [
  'SEO Optimization',
  'Social Media Marketing',
  'PPC / Google Ads',
  'Web Design & Development',
  'Email Marketing',
  'Analytics & Reporting',
  'Full Digital Package',
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', company: '', budget: '', service: '', message: '',
  })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="ct-hero">
        <div className="ct-hero__pattern" />
        <div className="container ct-hero__inner">
          <div className="ct-pill">
            <MessageSquare size={12} /> Get In Touch
          </div>
          <h1 className="ct-hero__title">
            Let's Build Something
            <br /><span className="ct-hero__highlight">Extraordinary Together</span>
          </h1>
          <p className="ct-hero__sub">
            Tell us about your project and receive a free, tailored strategy plan within 24 hours —
            no strings attached, no pushy sales calls.
          </p>
          <div className="ct-perks">
            {perks.map((p, i) => (
              <div key={i} className="ct-perk">
                <span className="ct-perk__icon">{p.icon}</span>
                {p.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="ct-main">
        <div className="container ct-main__grid">

          {/* LEFT: Info */}
          <div className="ct-left">
            <h3 className="ct-left__heading">Ways to Reach Us</h3>
            <div className="ct-info-cards">
              {contactInfo.map((item, i) => (
                <div key={i} className="ct-info-card">
                  <div className="ct-info-card__icon" style={{ background: item.bg, color: item.color }}>
                    {item.icon}
                  </div>
                  <div className="ct-info-card__body">
                    <p className="ct-info-card__title">{item.title}</p>
                    <p className="ct-info-card__val">{item.val}</p>
                    <p className="ct-info-card__sub">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="ct-social-proof">
              <div className="ct-social-proof__stars">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="ct-social-proof__text">
                "MediaClicking grew our revenue by 220% in just 5 months. The best decision we ever made."
              </p>
              <div className="ct-social-proof__author">
                <div className="ct-social-proof__avatar">SR</div>
                <div>
                  <strong>Sarah R.</strong>
                  <span> — CEO, TechNova</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="ct-form-card">
            {sent ? (
              <div className="ct-success">
                <div className="ct-success__icon">
                  <CheckCircle size={32} color="#ff4d3d" />
                </div>
                <h3 className="ct-success__title">You're All Set! 🎉</h3>
                <p className="ct-success__text">
                  Thanks for reaching out! Our team will review your project and send you a personalized
                  strategy plan within 24 hours.
                </p>
                <div className="ct-success__steps">
                  <div className="ct-success__step">
                    <span className="ct-success__step-num">1</span>
                    <span>We review your brief today</span>
                  </div>
                  <div className="ct-success__step">
                    <span className="ct-success__step-num">2</span>
                    <span>Strategy plan sent within 24h</span>
                  </div>
                  <div className="ct-success__step">
                    <span className="ct-success__step-num">3</span>
                    <span>Free 30-min consultation call</span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="ct-form-card__header">
                  <h3 className="ct-form-card__title">Request a Free Audit</h3>
                  <p className="ct-form-card__sub">Takes 2 minutes · 100% free · No obligation</p>
                </div>

                <form onSubmit={handleSubmit} className="ct-form">
                  <div className="ct-form__row">
                    <div className="ct-field">
                      <label>Full Name <span>*</span></label>
                      <input name="name" type="text" placeholder="John Smith" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="ct-field">
                      <label>Work Email <span>*</span></label>
                      <input name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="ct-form__row">
                    <div className="ct-field">
                      <label>Company Name</label>
                      <input name="company" type="text" placeholder="Your Company Ltd." value={form.company} onChange={handleChange} />
                    </div>
                    <div className="ct-field">
                      <label>Monthly Budget</label>
                      <select name="budget" value={form.budget} onChange={handleChange}>
                        <option value="">Select budget range</option>
                        <option>Under $1,000/mo</option>
                        <option>$1,000 – $3,000/mo</option>
                        <option>$3,000 – $7,000/mo</option>
                        <option>$7,000 – $15,000/mo</option>
                        <option>$15,000+/mo</option>
                      </select>
                    </div>
                  </div>

                  <div className="ct-field">
                    <label>Service You Need</label>
                    <div className="ct-service-chips">
                      {services.map((s, i) => (
                        <button
                          key={i}
                          type="button"
                          className={`ct-chip ${form.service === s ? 'ct-chip--active' : ''}`}
                          onClick={() => setForm(f => ({ ...f, service: s }))}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="ct-field">
                    <label>Tell Us About Your Project <span>*</span></label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="What are your main goals? What challenges are you facing? The more detail, the better our strategy plan will be..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="ct-submit">
                    Send My Request <ArrowRight size={18} />
                  </button>

                  <p className="ct-form__note">
                    🔒 Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

    </main>
  )
}
