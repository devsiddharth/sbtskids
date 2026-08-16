import { memo } from 'react'
import { motion } from 'framer-motion'
import { teachers } from '../../../data/teachers.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import SmartImage from '../../ui/SmartImage/SmartImage.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import { Star } from '../../ui/Decor/Decor.jsx'
import styles from './Teachers.module.css'

const TeacherCard = memo(function TeacherCard({ t }) {
  return (
    <article className={styles.card} style={{ '--tint': t.color }}>
      <div className={styles.photoWrap}>
        <div className={styles.photo}>
          <SmartImage
            src={t.image}
            alt={`${t.name}, ${t.role}`}
            label={`${t.name}’s photo`}
            emoji={t.emoji}
            color={t.color}
            radius="50%"
            aspectRatio="1 / 1"
          />
        </div>
        <span className={styles.emojiBadge} aria-hidden="true">
          {t.emoji}
        </span>
      </div>
      <h3 className={styles.name}>{t.name}</h3>
      <p className={styles.role}>{t.role}</p>
      <p className={styles.intro}>{t.intro}</p>
    </article>
  )
})

export default function Teachers() {
  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="teachers-title">
      <div className="container">
        <SectionHeading
          eyebrow="Meet Our Family"
          title={
            <>
              Teachers who love children — <span style={{ color: 'var(--secondary)' }}>and it shows</span>
            </>
          }
          subtitle="Every little smile matters. Our caring teachers turn curiosity into confidence through joyful learning every single day."
          emoji="👩‍🏫"
        />

        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {teachers.map((t) => (
            <motion.div key={t.id} variants={fadeUp}>
              <TeacherCard t={t} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.note}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55 }}
        >
          <span aria-hidden="true">💛</span> Every teacher is D.El.Ed / NTT certified, background-verified
          and trained in child safety &amp; first aid.
        </motion.div>

        <div className={styles.decors} aria-hidden="true">
          <Star size={16} delay={0.4} />
          <Star size={20} delay={1.5} />
        </div>
      </div>
    </section>
  )
}
