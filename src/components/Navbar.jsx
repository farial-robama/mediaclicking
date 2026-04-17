import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <Zap size={18} />
          </div>
          <span>Media<strong>Clicking</strong></span>
        </Link>

        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} className={`navbar__link ${pathname === l.to ? 'active' : ''}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="navbar__cta">Get Free Quote</Link>

        <button className="navbar__burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}>
        {links.map(l => (
          <Link key={l.to} to={l.to} className={`navbar__mobile-link ${pathname === l.to ? 'active' : ''}`}>
            {l.label}
          </Link>
        ))}
        <Link to="/contact" className="navbar__mobile-cta">Get Free Quote →</Link>
      </div>
    </nav>
  )
}
