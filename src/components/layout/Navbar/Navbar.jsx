import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { IoMenu, IoClose, IoCall } from 'react-icons/io5'
import { navLinks, site } from '../../../data/site.js'
import Button from '../../ui/Button/Button.jsx'
import Logo from '../../ui/Logo/Logo.jsx'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close the drawer on navigation */
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  /* Lock body scroll when the drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.inner}`} aria-label="Main navigation">
        <Link to="/" className={styles.logoLink} aria-label={`${site.name} — home`}>
          <Logo size={58} />
          <span className={styles.logoText}>
            <span className={styles.logoName}>{site.name}</span>
            <span className={styles.logoTag}>{site.tagline}</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Button to="/admissions" variant="primary" size="sm" className={styles.cta}>
            🎈 Admissions
          </Button>
          <button
            className={styles.burger}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className={styles.drawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              role="dialog"
              aria-label="Mobile menu"
            >
              <ul className={styles.drawerLinks}>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) => (isActive ? `${styles.drawerLink} ${styles.active}` : styles.drawerLink)}
                    >
                      <span aria-hidden="true">{link.emoji}</span>
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <div className={styles.drawerFooter}>
                <Button to="/admissions" variant="primary" className={styles.drawerCta}>
                  🎈 Book a Campus Tour
                </Button>
                <Button href={site.phoneLink} variant="ghost" className={styles.drawerCta}>
                  <IoCall /> {site.phone}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
