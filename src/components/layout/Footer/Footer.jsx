import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCall, IoMail, IoLocation, IoTime, IoPaperPlane } from 'react-icons/io5'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa'
import { navLinks, site } from '../../../data/site.js'
import Logo from '../../ui/Logo/Logo.jsx'
import { Balloon, Star, Cloud, Rainbow } from '../../ui/Decor/Decor.jsx'
import styles from './Footer.module.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <footer className={styles.footer}>
      {/* Decorative top */}
      <div className={styles.decors} aria-hidden="true">
        <Cloud className={styles.cloud} opacity={0.22} />
        <Balloon className={styles.balloon1} color="#FFD93D" />
        <Balloon className={styles.balloon2} color="#FF5A5F" />
        <Star className={styles.star1} size={18} delay={0.3} />
        <Star className={styles.star2} size={14} delay={1.4} />
        <Star className={styles.star3} size={22} delay={0.8} />
        <Rainbow className={styles.rainbow} />
      </div>

      <div className={`container ${styles.grid}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <Logo size={52} />
            <div>
              <p className={styles.name}>{site.name}</p>
              <p className={styles.tagline}>{site.tagline}</p>
            </div>
          </div>
          <p className={styles.about}>
            A joyful, safe and loving kindergarten where every little smile learns to shine.
            Play-based learning, caring teachers and a campus that feels like family — since {site.established}.
          </p>
          <ul className={styles.socials} aria-label="Social media">
            <li>
              <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.social}>
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={styles.social}>
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href={site.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className={styles.social}>
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href={site.socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className={styles.social}>
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <nav className={styles.col} aria-label="Footer quick links">
          <h3 className={styles.colTitle}>Quick Links</h3>
          <ul className={styles.colLinks}>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>
                  <span aria-hidden="true" className={styles.arrow}>
                    →
                  </span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Say Hello</h3>
          <ul className={styles.contact}>
            <li>
              <a href={site.phoneLink}>
                <IoCall aria-hidden="true" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>
                <IoMail aria-hidden="true" /> {site.email}
              </a>
            </li>
            <li>
              <IoLocation aria-hidden="true" /> {site.address}
            </li>
            <li>
              <IoTime aria-hidden="true" /> {site.timings}
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Little Updates</h3>
          <p className={styles.newsText}>
            Monthly stories, activity ideas and admissions news — straight to your inbox. No spam, only smiles.
          </p>
          {subscribed ? (
            <p className={styles.subscribed} role="status">
              🎉 Yay! You’re on the list. Welcome to the family!
            </p>
          ) : (
            <form className={styles.newsForm} onSubmit={handleSubscribe}>
              <label htmlFor="newsletter-email" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="parent@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" aria-label="Subscribe">
                <IoPaperPlane />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>
            © {new Date().getFullYear()} {site.name}. Made with <span aria-hidden="true">💛</span> for little learners.
          </p>
          <p className={styles.credits}>
            <Link to="/safety">Safety</Link>
            <span aria-hidden="true">·</span>
            <Link to="/admissions">Admissions {site.admissionYear}</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
