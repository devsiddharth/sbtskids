import { motion } from 'framer-motion'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import { viewportOnce } from '../../../utils/motion.js'
import styles from './Testimonials.module.css'

/**
 * Testimonials — temporarily greyed out.
 *
 * No real parent testimonials are available yet, so instead of showing
 * placeholder quotes we render a muted "coming soon" card. When genuine
 * reviews arrive, add them to `src/data/testimonials.js` and restore the
 * carousel markup (styles for it are still kept in Testimonials.module.css).
 */
export default function Testimonials() {
  return (
    <section className={`section-pad ${styles.section} ${styles.muted}`} aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading
          eyebrow="Words From Our Families"
          title={
            <>
              Parents say it <span style={{ color: 'var(--secondary)' }}>better than we ever could</span>
            </>
          }
          subtitle="Real words from real families the smiles, the tears of joy, and the everyday magic we get to witness."
          emoji="💬"
        />

        <motion.div
          className={styles.placeholder}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55 }}
          role="status"
        >
          <span className={styles.placeholderEmoji} aria-hidden="true">
            💬
          </span>
          <span className={styles.pill}>Coming soon</span>
          <h3 className={styles.placeholderTitle}>Testimonials coming soon</h3>
          <p className={styles.placeholderText}>
            As a young school, we’re still collecting stories from our families. Check back soon — we can’t
            wait to share them with you.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
