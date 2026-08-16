import { memo } from 'react'
import { motion } from 'framer-motion'
import { facilities } from '../../../data/facilities.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import SmartImage from '../../ui/SmartImage/SmartImage.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import styles from './Facilities.module.css'

const FacilityCard = memo(function FacilityCard({ f }) {
  return (
    <article className={styles.card} style={{ '--fc': f.color }}>
      <div className={styles.media}>
        <span className={styles.badge}>{f.badge}</span>
        <SmartImage
          src={f.image}
          alt={f.title}
          label={f.title}
          emoji={f.emoji}
          color={f.color}
          radius="0"
          aspectRatio="16 / 10"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <span className={styles.emoji} aria-hidden="true">
            {f.emoji}
          </span>
          <h3 className={styles.title}>{f.title}</h3>
        </div>
        <p className={styles.text}>{f.description}</p>
      </div>
    </article>
  )
})

export default function Facilities() {
  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="facilities-title">
      <div className={styles.blob} aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="Our Little World"
          title={
            <>
              Spaces designed to make <span style={{ color: 'var(--soft-blue)' }}>little hearts</span> feel at home
            </>
          }
          subtitle="Every corner of our campus is thoughtfully built for wonder, safety and joy — from smart classrooms to sunny play areas."
          emoji="🏫"
        />

        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {facilities.map((f) => (
            <motion.div key={f.id} variants={fadeUp}>
              <FacilityCard f={f} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
