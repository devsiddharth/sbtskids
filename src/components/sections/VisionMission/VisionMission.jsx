import { motion } from 'framer-motion'
import { vision, mission } from '../../../data/content.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import styles from './VisionMission.module.css'

export default function VisionMission() {
  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="vision-title">
      <div className="container">
        <SectionHeading
          eyebrow="The Heart of Our School"
          title={
            <>
              Our <span style={{ color: 'var(--soft-blue)' }}>vision</span> &amp; our{' '}
              <span style={{ color: 'var(--secondary)' }}>mission</span>
            </>
          }
          subtitle="Two promises that guide every smile, every lesson and every school day."
          emoji="🌈"
        />

        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Vision */}
          <motion.article className={`${styles.card} ${styles.vision}`} variants={fadeUp}>
            <span className={styles.deco} aria-hidden="true">
              🌟
            </span>
            <span className={styles.deco2} aria-hidden="true">
              ☁️
            </span>
            <span className={styles.emoji} aria-hidden="true">
              {vision.emoji}
            </span>
            <h3 className={styles.title}>{vision.title}</h3>
            <p className={styles.text}>{vision.text}</p>
          </motion.article>

          {/* Mission */}
          <motion.article className={`${styles.card} ${styles.mission}`} variants={fadeUp}>
            <span className={styles.deco} aria-hidden="true">
              🎈
            </span>
            <span className={styles.deco2} aria-hidden="true">
              ✏️
            </span>
            <span className={styles.emoji} aria-hidden="true">
              {mission.emoji}
            </span>
            <h3 className={styles.title}>{mission.title}</h3>
            <p className={styles.text}>{mission.text}</p>
            <ul className={styles.points}>
              {mission.points.map((p) => (
                <li className={styles.point} key={p}>
                  {p}
                </li>
              ))}
            </ul>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}
