// import { useState, useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import './Navbar.css'
// import {
//   Menu, X, Sun, Moon,
//   Home, Info, FolderOpen, Lightbulb, Phone, Search,
// } from 'lucide-react'

// // Social icons as inline SVG (avoids lucide-react version conflicts)
// const TwitterIcon   = () => <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.7 5.5 4.3 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
// const LinkedinIcon  = () => <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
// const InstagramIcon = () => <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
// const FacebookIcon  = () => <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>

// // Cursor/click logo mark — placed between MEDIA and CLICKING
// const LogoMark = () => (
//   <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//     <path d="M5 2L5 13.5L8 10.5L10.2 16.5L12 15.8L9.8 9.8L14 9.8L5 2Z" />
//   </svg>
// )

// const NAV_LINKS = [
//   { to: '/',         label: 'Home',     Icon: Home       },
//   { to: '/about',    label: 'About',    Icon: Info       },
//   { to: '/services', label: 'Services', Icon: Search     },
//   { to: '/work',     label: 'Work',     Icon: FolderOpen },
//   { to: '/insights', label: 'Insights', Icon: Lightbulb  },
//   { to: '/contact',  label: 'Contact',  Icon: Phone      },
// ]

// const SOCIALS = [
//   { href: '#', Icon: TwitterIcon,   label: 'Twitter'   },
//   { href: '#', Icon: LinkedinIcon,  label: 'LinkedIn'  },
//   { href: '#', Icon: InstagramIcon, label: 'Instagram' },
//   { href: '#', Icon: FacebookIcon,  label: 'Facebook'  },
// ]

// // Shared logo element
// function NavLogo({ onClick }) {
//   return (
//     <Link to="/" className="navbar__logo" onClick={onClick}>
//       <span className="navbar__logo-name">
//         MEDIA
//         <span className="navbar__logo-icon"><LogoMark /></span>
//         <strong>CLICKING</strong>
//       </span>
//     </Link>
//   )
// }

// export default function Navbar({ theme = 'light', onToggle }) {
//   const [scrolled, setScrolled] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const { pathname } = useLocation()

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 50)
//     window.addEventListener('scroll', fn, { passive: true })
//     return () => window.removeEventListener('scroll', fn)
//   }, [])

//   useEffect(() => { setMenuOpen(false) }, [pathname])

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [menuOpen])

//   const ThemeBtn = () => (
//     <button
//       className="navbar__theme-btn"
//       onClick={onToggle}
//       aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
//       title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
//     >
//       {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
//     </button>
//   )

//   const SocialLinks = () => (
//     <div className="navbar__socials">
//       {SOCIALS.map(({ href, Icon, label }) => (
//         <a key={label} href={href} className="navbar__social-link" aria-label={label}>
//           <Icon />
//         </a>
//       ))}
//     </div>
//   )

//   return (
//     <>
//       {/* ── NAVBAR ── */}
//       <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${theme === 'dark' ? ' navbar--dark' : ''}`}>
//         <div className="navbar__inner">

//           {/* LEFT: burger + logo, no gap */}
//           <div className="navbar__left">
//             <button
//               className={`navbar__burger${menuOpen ? ' is-open' : ''}`}
//               onClick={() => setMenuOpen(o => !o)}
//               aria-label={menuOpen ? 'Close menu' : 'Open menu'}
//             >
//               {menuOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//             <NavLogo />
//           </div>

//           {/* RIGHT: socials + theme + CTA */}
//           <div className="navbar__right">
//             <SocialLinks />
//             <ThemeBtn />
//             <Link to="/contact" className="navbar__cta">Get Started</Link>
//           </div>
//         </div>
//       </nav>

//       {/* ── FULL-SCREEN MENU OVERLAY ── */}
//       <div className={`nav-menu${menuOpen ? ' nav-menu--open' : ''}${theme === 'dark' ? ' nav-menu--dark' : ''}`}>
//         <div className="nav-menu__inner">

//           {/* Top bar — mirrors navbar */}
//           <div className="nav-menu__topbar">
//             <div className="navbar__left">
//               <button
//                 className="nav-menu__close"
//                 onClick={() => setMenuOpen(false)}
//                 aria-label="Close menu"
//               >
//                 <X size={20} />
//               </button>
//               <NavLogo onClick={() => setMenuOpen(false)} />
//             </div>

//             <div className="navbar__right">
//               <SocialLinks />
//               <ThemeBtn />
//               <Link to="/contact" className="navbar__cta" onClick={() => setMenuOpen(false)}>
//                 Get Started
//               </Link>
//             </div>
//           </div>

//           {/* Label */}
//           <p className="nav-menu__label">NAVIGATION</p>

//           {/* Nav grid — 6 items */}
//           <div className="nav-menu__grid">
//             {NAV_LINKS.map(({ to, label, Icon }) => (
//               <Link
//                 key={to}
//                 to={to}
//                 className={`nav-menu__item${pathname === to ? ' is-active' : ''}`}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <span className="nav-menu__icon-wrap">
//                   <Icon size={28} strokeWidth={1.6} />
//                 </span>
//                 <span className="nav-menu__item-label">{label}</span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Backdrop */}
//       {menuOpen && (
//         <div
//           className="nav-backdrop"
//           onClick={() => setMenuOpen(false)}
//           aria-hidden="true"
//         />
//       )}
//     </>
//   )
// }




import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Menu, X, Sun, Moon,
  Home, Info, FolderOpen, Lightbulb, Phone, Search,
} from 'lucide-react'
import './Navbar.css'

// ── Social icons (inline SVG — no lucide version conflicts) ──
const TwitterIcon   = () => <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.7 5.5 4.3 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
const LinkedinIcon  = () => <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
const InstagramIcon = () => <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
const FacebookIcon  = () => <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>

// ── Logo mark ──
const LogoMark = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 2L5 13.5L8 10.5L10.2 16.5L12 15.8L9.8 9.8L14 9.8L5 2Z" />
  </svg>
)

// ── Nav links — hash = scroll to section on homepage, no hash = separate page ──
const NAV_LINKS = [
  { hash: 'home',     label: 'Home',     Icon: Home       },
  { hash: 'about',    label: 'About',    Icon: Info       },
  { hash: 'services', label: 'Services', Icon: Search     },
  { hash: 'work',     label: 'Work',     Icon: FolderOpen },
  { hash: 'insights', label: 'Insights', Icon: Lightbulb  },
  { hash: 'contact',  label: 'Contact',  Icon: Phone      },
]

const SOCIALS = [
  { href: '#', Icon: TwitterIcon,   label: 'Twitter'   },
  { href: '#', Icon: LinkedinIcon,  label: 'LinkedIn'  },
  { href: '#', Icon: InstagramIcon, label: 'Instagram' },
  { href: '#', Icon: FacebookIcon,  label: 'Facebook'  },
]

// ── Smooth scroll helper ──
function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const navH = 64
  const top = el.getBoundingClientRect().top + window.scrollY - navH
  window.scrollTo({ top, behavior: 'smooth' })
}

function NavLogo({ onClick }) {
  return (
    <Link to="/" className="navbar__logo" onClick={onClick}>
      <span className="navbar__logo-name">
        MEDIA
        <span className="navbar__logo-icon"><LogoMark /></span>
        <strong>CLICKING</strong>
      </span>
    </Link>
  )
}

export default function Navbar({ theme = 'light', onToggle }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeId,  setActiveId]  = useState('home')

  const { pathname } = useLocation()
  const navigate     = useNavigate()
  const isHome       = pathname === '/'

  // Scroll spy — highlight active section while on homepage
  useEffect(() => {
    if (!isHome) return
    const ids = NAV_LINKS.map(l => l.hash)
    const onScroll = () => {
      const scrollY = window.scrollY + 80
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.offsetTop <= scrollY) { setActiveId(ids[i]); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Click handler: if on homepage scroll, otherwise go home then scroll
  const handleNavClick = (hash) => {
    setMenuOpen(false)
    if (isHome) {
      scrollToSection(hash)
    } else {
      // Navigate to home, then scroll after page loads
      navigate('/')
      setTimeout(() => scrollToSection(hash), 80)
    }
  }

  const isActive = (hash) => isHome ? activeId === hash : false

  const ThemeBtn = () => (
    <button
      className="navbar__theme-btn"
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )

  const SocialLinks = () => (
    <div className="navbar__socials">
      {SOCIALS.map(({ href, Icon, label }) => (
        <a key={label} href={href} className="navbar__social-link" aria-label={label}>
          <Icon />
        </a>
      ))}
    </div>
  )

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${theme === 'dark' ? ' navbar--dark' : ''}`}>
        <div className="navbar__inner">
          <div className="navbar__left">
            <button
              className={`navbar__burger${menuOpen ? ' is-open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <NavLogo />
          </div>

          <div className="navbar__right">
            <SocialLinks />
            <ThemeBtn />
            <button className="navbar__cta" onClick={() => handleNavClick('contact')}>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ── FULL-SCREEN MENU OVERLAY ── */}
      <div className={`nav-menu${menuOpen ? ' nav-menu--open' : ''}${theme === 'dark' ? ' nav-menu--dark' : ''}`}>
        <div className="nav-menu__inner">

          <div className="nav-menu__topbar">
            <div className="navbar__left">
              <button className="nav-menu__close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X size={20} />
              </button>
              <NavLogo onClick={() => setMenuOpen(false)} />
            </div>
            <div className="navbar__right">
              <SocialLinks />
              <ThemeBtn />
              <button className="navbar__cta" onClick={() => handleNavClick('contact')}>
                Get Started
              </button>
            </div>
          </div>

          <p className="nav-menu__label">NAVIGATION</p>

          <div className="nav-menu__grid">
            {NAV_LINKS.map(({ hash, label, Icon }) => (
              <button
                key={hash}
                className={`nav-menu__item${isActive(hash) ? ' is-active' : ''}`}
                onClick={() => handleNavClick(hash)}
              >
                <span className="nav-menu__icon-wrap">
                  <Icon size={28} strokeWidth={1.6} />
                </span>
                <span className="nav-menu__item-label">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="nav-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </>
  )
}