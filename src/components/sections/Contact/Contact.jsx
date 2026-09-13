import { useState } from 'react'
import { motion } from 'framer-motion'
import { IoCall, IoMail, IoLocation, IoPaperPlane } from 'react-icons/io5'
import { site } from '../../../data/site.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import Button from '../../ui/Button/Button.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import styles from './Contact.module.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          eyebrow="Say Hello"
          title={
            <>
              We can’t wait to <span style={{ color: 'var(--secondary)' }}>meet your little star</span>
            </>
          }
          subtitle="Fill the form below and our team will call you back with a smile, usually within a few hours."
          emoji="💌"
        />

        <motion.div
          className={styles.card}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Info panel */}
          <motion.div className={styles.info} variants={stagger}>
            <span className={styles.infoEmoji} aria-hidden="true">
              🏫
            </span>
            <h3 className={styles.infoTitle}>Say hello, we're friendly, promise!</h3>
            <p className={styles.infoText}>
              Whether it's a question about admissions, a campus tour or simply to hear more about our
              little world, we'd love to chat.
            </p>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.infoItemIcon} aria-hidden="true">
                  <IoCall />
                </span>
                <a href={site.phoneLink}>{site.phone}</a>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoItemIcon} aria-hidden="true">
                  <IoMail />
                </span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoItemIcon} aria-hidden="true">
                  <IoLocation />
                </span>
                {site.address}
              </li>
            </ul>
          </motion.div>

          {/* Form / success */}
          <motion.div variants={fadeUp}>
            {submitted ? (
              <div className={styles.success} role="status">
                <span className={styles.successEmoji} aria-hidden="true">
                  🎉
                </span>
                <h3 className={styles.successTitle}>Thank you, dear parent!</h3>
                <p className={styles.successText}>
                  Your message has flown to our admissions desk. Expect a happy call from us very soon
                  usually within a few hours.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="ghost">
                  Send another message
                </Button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="parent-name">
                      Parent’s Name *
                    </label>
                    <input id="parent-name" className={styles.input} type="text" required placeholder="Your full name" />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="child-age">
                      Child’s Age
                    </label>
                    <select id="child-age" className={styles.input} defaultValue="">
                      <option value="" disabled>
                        Select age group
                      </option>
                      <option>🧸 Playgroup — 2+ years</option> 
                      <option>🐰 Nursery — 3+ years</option> 
                      <option>🦊 LKG · LKG — 4+ years</option> 
                      <option>🦁 UKG · UKG — 5+ years</option> 
                      <option>🐯 Grade 1 — 6+ years</option> 
                      <option>🐻 Grade 2 — 7+ years</option> 
                      <option>🐼 Grade 3 — 8+ years</option> 
                      <option>🦄 Grade 4 — 9+ years</option> 
                      <option>🦖 Grade 5 — 10+ years</option>
                    </select>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="phone">
                      Phone Number *
                    </label>
                    <input id="phone" className={styles.input} type="tel" required placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">
                      Email
                    </label>
                    <input id="email" className={styles.input} type="email" placeholder="you@email.com" />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className={styles.textarea}
                    placeholder="Tell us a little about your child…"
                  />
                </div>
                <div className={styles.submitRow}>
                  <Button type="submit" variant="primary" size="lg">
                    <IoPaperPlane /> Send Message
                  </Button>
                  <p className={styles.hint}>We reply within a few hours, usually faster! 🚀</p>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
