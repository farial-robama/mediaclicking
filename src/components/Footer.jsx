import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin } from 'lucide-react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <div className="footer__logo-icon"><Zap size={16} /></div>
            <span>Media<strong>Clicking</strong></span>
          </Link>
          <p className="footer__tagline">
            Results-driven digital marketing. We turn clicks into customers and browsers into buyers.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Twitter"><FaTwitter size={18} /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
            <a href="#" aria-label="Instagram"><FaInstagram size={18} /></a>
            <a href="#" aria-label="Facebook"><FaFacebook size={18} /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">SEO Optimization</Link></li>
            <li><Link to="/services">Social Media Marketing</Link></li>
            <li><Link to="/services">PPC Advertising</Link></li>
            <li><Link to="/services">Web Design</Link></li>
            <li><Link to="/services">Email Marketing</Link></li>
            <li><Link to="/services">Analytics</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li>
              <Mail size={15} />
              <a href="mailto:hello@mediaclicking.com">hello@mediaclicking.com</a>
            </li>
            <li>
              <Phone size={15} />
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li>
              <MapPin size={15} />
              <span>123 Digital Ave, New York, NY 10001</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2025 MediaClicking. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
