import { motion } from 'framer-motion'
import { dailyTimeline } from '../../../data/content.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import styles from './DailyActivities.module.css'

export default function DailyActivities() {
  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="day-title">
      <div className="container">
        <SectionHeading
          eyebrow="A Day in Our World"
          title={
            <>
              One happy day, <span style={{ color: 'var(--soft-blue)' }}>from prayer to giggles</span>
            </>
          }
          subtitle="A gentle, joyful rhythm that keeps little ones engaged, curious and wonderfully tired by home time."
          emoji="⏰"
        />

        <div className={styles.timeline}>
          {dailyTimeline.map((item, i) => {
            const left = i % 2 === 0
            return (
              <motion.div
                key={`${item.time}-${item.title}`}
                className={`${styles.row} ${left ? styles.rowLeft : styles.rowRight}`}
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <motion.div className={styles.cardBox} variants={fadeUp}>
                  <article className={styles.card}>
                    <span className={styles.cardEmoji} aria-hidden="true">
                      {item.emoji}
                    </span>
                    <div>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardText}>{item.text}</p>
                    </div>
                  </article>
                </motion.div>

                <div className={styles.node} aria-hidden="true">
                  <span className={styles.nodeDot}>
                    {item.emoji}
                  </span>
                  <span className={styles.nodeTime}>{item.time}</span>
                </div>

                <div className={styles.spacer} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
