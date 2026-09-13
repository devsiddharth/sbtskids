import { motion } from 'framer-motion'
import { achievements } from '../../../data/content.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import styles from './Achievements.module.css'

export default function Achievements() {
  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="achievements-title">
      <div className="container">
        <SectionHeading
          eyebrow="Proud Little Moments"
          title={
            <>
              Little achievements, <span style={{ color: 'var(--secondary)' }}>big hearts</span>
            </>
          }
          subtitle="Recognition is lovely, but our proudest achievement is still the sound of children laughing while they learn."
          emoji="🏆"
        />

        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {achievements.map((a) => (
            <motion.article className={styles.card} key={a.title} variants={fadeUp}>
              <span className={styles.ribbon} aria-hidden="true" />
              <span className={styles.emoji} aria-hidden="true">
                {a.emoji}
              </span>
              <span className={styles.year}>{a.year}</span>
              <h3 className={styles.title}>{a.title}</h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
