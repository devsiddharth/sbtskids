import { useState } from 'react'
import { motion } from 'framer-motion'
import { IoCall, IoMail, IoLocation, IoGlobe, IoShareSocial, IoCheckmark } from 'react-icons/io5'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPaperPlane } from 'react-icons/fa'
import { site } from '../../../data/site.js'
import { fadeUp, stagger } from '../../../utils/motion.js'
import Logo from '../Logo/Logo.jsx'
import QRCode from '../QRCode/QRCode.jsx'
import { Star, Balloon, Cloud, Rainbow } from '../Decor/Decor.jsx'
import styles from './DigitalVisitingCard.module.css'

/**
 * DigitalVisitingCard — a premium, share-ready digital business card for the
 * school. Portrait (4:5) social-friendly composition built entirely from the
 * existing design system: Baloo 2 headings, the yellow/red/green/blue palette,
 * rounded cards, floating decor and Framer Motion entrances.
 */
export default function DigitalVisitingCard() {
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(site.website)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — no-op */
    }
  }

  const shareText = `${site.fullName} — ${site.tagline}. Explore our little world: ${site.website}`

  return (
    <section className={styles.stage} aria-label="Digital visiting card">
      {/* Ambient playground backdrop (matches the site's hero treatment) */}
      <div className={styles.backdrop} aria-hidden="true">
        <Cloud className={styles.cloud1} opacity={0.8} />
        <Cloud className={styles.cloud2} opacity={0.6} />
        <Balloon className={styles.balloon1} color="#FF5A5F" />
        <Balloon className={styles.balloon2} color="#55D6BE" />
        <Star className={styles.star1} size={20} delay={0.4} />
        <Star className={styles.star2} size={14} delay={1.3} />
        <Rainbow className={styles.rainbow} />
      </div>

      {/* ================= THE CARD ================= */}
      <motion.article
        className={styles.card}
        initial={{ opacity: 0, y: 34, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Card header ribbon */}
        <div className={styles.ribbon} aria-hidden="true">
          <span className={styles.ribbonDot} style={{ background: '#FF5A5F' }} />
          <span className={styles.ribbonDot} style={{ background: '#FFD93D' }} />
          <span className={styles.ribbonDot} style={{ background: '#55D6BE' }} />
          <span className={styles.ribbonDot} style={{ background: '#7692FF' }} />
          <span className={styles.ribbonText}>Digital Visiting Card</span>
        </div>

        <motion.div
          className={styles.inner}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* ---------- HERO: logo + FULL school name ---------- */}
          <motion.div className={styles.hero} variants={fadeUp}>
            <div className={styles.logoRing}>
              <Logo size={116} className={styles.logoImg} />
            </div>

            <h1 className={styles.schoolName}>
              <span>Sri Balatripura</span>{' '}
              <span>Sundari</span>{' '}
              <span className={styles.nameAccent}>Kids&rsquo; school</span>
            </h1>

            <p className={styles.tagline}>
              <span aria-hidden="true">✨</span> {site.tagline} <span aria-hidden="true">✨</span>
            </p>
            <p className={styles.motto}>{site.motto}</p>
          </motion.div>

          {/* ---------- SHORT DESCRIPTION ---------- */}
          <motion.p className={styles.description} variants={fadeUp}>
            A joyful, safe and loving kids&rsquo; school where playful learning, caring teachers and a
            colourful campus help every little smile shine — since {site.established}.
          </motion.p>

          {/* ---------- DETAILS ---------- */}
          <motion.dl className={styles.details} variants={fadeUp}>
            <div className={styles.detail}>
              <span className={styles.detailIcon} style={{ background: 'var(--secondary-soft)', color: 'var(--secondary)' }} aria-hidden="true">
                <IoCall />
              </span>
              <div className={styles.detailBody}>
                <dt>Call Us</dt>
                <dd>
                  <a href={site.phoneLink}>{site.phone}</a>
                </dd>
              </div>
            </div>

            <div className={styles.detail}>
              <span className={styles.detailIcon} style={{ background: 'var(--accent-soft)', color: '#1d8f7a' }} aria-hidden="true">
                <IoMail />
              </span>
              <div className={styles.detailBody}>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
            </div>

            <div className={`${styles.detail} ${styles.detailWide}`}>
              <span className={styles.detailIcon} style={{ background: 'var(--soft-blue-soft)', color: 'var(--soft-blue)' }} aria-hidden="true">
                <IoLocation />
              </span>
              <div className={styles.detailBody}>
                <dt>Visit Us</dt>
                <dd>{site.address}</dd>
              </div>
            </div>

            <div className={styles.detail}>
              <span className={styles.detailIcon} style={{ background: 'var(--lavender-soft)', color: '#7c5cd6' }} aria-hidden="true">
                <IoGlobe />
              </span>
              <div className={styles.detailBody}>
                <dt>Website</dt>
                <dd>
                  <a href={site.website} target="_blank" rel="noreferrer">
                    {site.websiteLabel}
                  </a>
                </dd>
              </div>
            </div>

            <div className={styles.detail}>
              <span className={styles.detailIcon} style={{ background: 'var(--orange-soft)', color: '#e07400' }} aria-hidden="true">
                🎈
              </span>
              <div className={styles.detailBody}>
                <dt>Admissions</dt>
                <dd>Open · {site.admissionYear}</dd>
              </div>
            </div>
          </motion.dl>

          {/* ---------- CTA + QR ---------- */}
          <motion.div className={styles.ctaRow} variants={fadeUp}>
            <QRCode value={site.website} size={128} className={styles.qr} />

            <div className={styles.ctaCol}>
              <a
                className={styles.cta}
                href={site.website}
                target="_blank"
                rel="noreferrer"
              >
                <span aria-hidden="true">🌈</span> Visit Our Website
              </a>
              <p className={styles.ctaHint}>
                Scan the QR code or tap to explore <strong>{site.websiteLabel}</strong>
              </p>

              <div className={styles.shareRow}>
                <a
                  className={styles.shareBtn}
                  style={{ background: '#25D366' }}
                  href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share this card on WhatsApp"
                >
                  <FaWhatsapp aria-hidden="true" />
                </a>
                <a
                  className={styles.shareBtn}
                  style={{ background: '#1877F2' }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on Facebook"
                >
                  <FaFacebookF aria-hidden="true" />
                </a>
                <a
                  className={styles.shareBtn}
                  style={{ background: '#E4405F' }}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on Instagram"
                >
                  <FaInstagram aria-hidden="true" />
                </a>
                <a
                  className={styles.shareBtn}
                  style={{ background: 'var(--soft-blue)' }}
                  href={`mailto:?subject=${encodeURIComponent(site.fullName)}&body=${encodeURIComponent(shareText)}`}
                  aria-label="Share this card by email"
                >
                  <FaPaperPlane aria-hidden="true" />
                </a>
                <button
                  type="button"
                  className={styles.copyBtn}
                  onClick={copyLink}
                  aria-label={copied ? 'Website link copied' : 'Copy website link'}
                >
                  {copied ? <IoCheckmark aria-hidden="true" /> : <IoShareSocial aria-hidden="true" />}
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Card footer strip */}
        <div className={styles.cardFooter}>
          <span>Established {site.established}</span>
          <span className={styles.footerDot} aria-hidden="true">•</span>
          <span>Playgroup to Grade 5</span>
          <span className={styles.footerDot} aria-hidden="true">•</span>
          <span>Ramagundam, Telangana</span>
        </div>
      </motion.article>
    </section>
  )
}
