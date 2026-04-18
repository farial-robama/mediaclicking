import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap, ChevronDown, ArrowRight, Sun, Moon } from 'lucide-react'
import './Navbar.css'

const serviceItems = [
  { to: '/services', emoji: '🔍', label: 'SEO Optimization', sub: 'Rank higher, get found' },
  { to: '/services', emoji: '📱', label: 'Social Media', sub: 'Build loyal audiences' },
  { to: '/services', emoji: '💰', label: 'PPC Advertising', sub: 'High-ROI paid campaigns' },
  { to: '/services', emoji: '💻', label: 'Web Design', sub: 'Convert-first websites' },
  { to: '/services', emoji: '📧', label: 'Email Marketing', sub: 'Nurture & retain' },
  { to: '/services', emoji: '📊', label: 'Analytics', sub: 'Data-driven decisions' },
]

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { label: 'Services', hasDropdown: true },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ theme, onToggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [barVisible, setBarVisible] = useState(true)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false); setDropdown(false) }, [pathname])

  return (
    <>
      {/* ── Announcement Bar ── */}
      {barVisible && (
        <div className="ann-bar">
          <div className="ann-bar__content">
            <span className="ann-bar__dot" />
            <span className="ann-bar__text">
              🎉 Limited offer: Free digital marketing audit for new clients this month
            </span>
            <Link to="/contact" className="ann-bar__cta">
              Claim now <ArrowRight size={11} />
            </Link>
          </div>
          <button className="ann-bar__close" onClick={() => setBarVisible(false)} aria-label="Close">
            <X size={13} />
          </button>
        </div>
      )}

      {/* ── Navbar ── */}
      <nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        style={{ top: barVisible ? '40px' : '0' }}
      >
        <div className="navbar__inner container">

          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-mark">
              <Zap size={15} strokeWidth={2.5} />
            </div>
            <span className="navbar__logo-name">
              Media<strong>Clicking</strong>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar__links">
            {navLinks.map((l, i) =>
              l.hasDropdown ? (
                <li
                  key={i}
                  className="navbar__item navbar__item--drop"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <button className={`navbar__link navbar__link--btn ${pathname === '/services' ? 'active' : ''}`}>
                    Services
                    <ChevronDown size={13} className={`nav-chevron ${dropdown ? 'nav-chevron--open' : ''}`} />
                  </button>

                  {/* Mega dropdown */}
                  <div className={`nav-drop ${dropdown ? 'nav-drop--open' : ''}`}>
                    <div className="nav-drop__inner">
                      <div className="nav-drop__header">
                        <p className="nav-drop__title">What We Do</p>
                        <p className="nav-drop__sub">Full-service digital growth</p>
                      </div>
                      <div className="nav-drop__grid">
                        {serviceItems.map((s, j) => (
                          <Link key={j} to={s.to} className="nav-drop__item">
                            <span className="nav-drop__emoji">{s.emoji}</span>
                            <div>
                              <p className="nav-drop__item-label">{s.label}</p>
                              <p className="nav-drop__item-sub">{s.sub}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="nav-drop__footer">
                        <Link to="/services" className="nav-drop__footer-link">
                          View all services <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={i} className="navbar__item">
                  <Link to={l.to} className={`navbar__link ${pathname === l.to ? 'active' : ''}`}>
                    {l.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Right side — theme toggle + CTA */}
          <div className="navbar__actions">
            <button
              className="theme-toggle"
              onClick={onToggle}
              aria-label="Toggle theme"
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <Link to="/contact" className="navbar__cta">
              Free Audit <ArrowRight size={14} />
            </Link>
          </div>

          {/* Burger */}
          <button className="navbar__burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* ── Mobile Drawer ── */}
        <div className={`mob-menu ${open ? 'mob-menu--open' : ''}`}>
          <div className="mob-menu__body">
            {navLinks.map((l, i) =>
              l.hasDropdown ? (
                <div key={i} className="mob-menu__group">
                  <p className="mob-menu__group-title">Services</p>
                  {serviceItems.map((s, j) => (
                    <Link key={j} to={s.to} className="mob-menu__child">
                      <span>{s.emoji}</span> {s.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={i}
                  to={l.to}
                  className={`mob-menu__link ${pathname === l.to ? 'active' : ''}`}
                >
                  {l.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile theme toggle row */}
          <div className="mob-menu__theme">
            <span className="mob-menu__theme-label">
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </span>
            <button className="mob-theme-toggle" onClick={onToggle}>
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
            </button>
          </div>

          <div className="mob-menu__foot">
            <Link to="/contact" className="mob-menu__cta">
              Get My Free Audit <ArrowRight size={15} />
            </Link>
            <p className="mob-menu__note">No credit card · Reply within 24h</p>
          </div>
        </div>
      </nav>
    </>
  )
}