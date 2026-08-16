import { motion } from 'framer-motion'
import { site } from '../../../data/site.js'
import { admissionSteps as steps } from '../../../data/content.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import Button from '../../ui/Button/Button.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import { Star } from '../../ui/Decor/Decor.jsx'
import styles from './Admission.module.css'

export default function Admission() {
  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="admission-title">
      <Star className={styles.star1} size={16} delay={0.4} />
      <Star className={styles.star2} size={20} delay={1.6} />

      <div className="container">
        <SectionHeading
          eyebrow="Admissions Open"
          title={
            <>
              Joining our family is as easy as <span style={{ color: 'var(--soft-blue)' }}>1-2-3-4</span>
            </>
          }
          subtitle={`Seats are limited for ${site.admissionYear}. Here's how your little one's adventure begins.`}
          emoji="🎈"
        />

        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {steps.map((s, i) => (
            <motion.div className={styles.step} key={s.step} variants={fadeUp}>
              <div className={styles.stepHead}>
                <span className={styles.stepNum}>{s.step}</span>
                <span className={styles.stepEmoji} aria-hidden="true">
                  {s.emoji}
                </span>
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
              {i < steps.length - 1 && (
                <span className={styles.connector} aria-hidden="true">
                  →
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55 }}
        >
          <Button to="/admissions" variant="secondary" size="lg">
            🎒 Apply for Admission
          </Button>
          <Button href={site.phoneLink} variant="outline" size="lg">
            📞 Book a Campus Tour
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
