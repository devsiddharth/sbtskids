import { memo } from 'react'
import { motion } from 'framer-motion'
import { teachers } from '../../../data/teachers.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import SmartImage from '../../ui/SmartImage/SmartImage.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import { Star } from '../../ui/Decor/Decor.jsx'
import styles from './Teachers.module.css'

/*
 * Leadership is derived from the existing teacher data — no names, roles or
 * image paths are hardcoded or changed here.
 */
const isVicePrincipal = (t) => /vice\s*principal/i.test(t.role)
const isPrincipal = (t) => !isVicePrincipal(t) && /principal/i.test(t.role)

const principal = teachers.find(isPrincipal) ?? teachers[0]
const vicePrincipal = teachers.find(isVicePrincipal)
const otherTeachers = teachers.filter((t) => t.id !== principal.id && t.id !== vicePrincipal?.id)

/**
 * TeacherCard — reusable portrait card.
 * `variant` controls the size/hierarchy: 'principal' | 'vice' | 'teacher'.
 */
const TeacherCard = memo(function TeacherCard({ t, variant = 'teacher', badge }) {
  return (
    <article className={`${styles.card} ${styles[variant]}`} style={{ '--tint': t.color }}>
      {badge && <span className={styles.badge}>{badge}</span>}

      <div className={styles.photoWrap}>
        <SmartImage
          className={styles.photo}
          src={t.image}
          alt={`${t.name}, ${t.role}`}
          label={`${t.name}’s photo`}
          emoji={t.emoji}
          color={t.color}
          radius="22px"
          aspectRatio="4 / 5"
        />
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
              Teachers who love children <span style={{ color: 'var(--secondary)' }}>and it shows</span>
            </>
          }
          subtitle="Every little smile matters. Our caring teachers turn curiosity into confidence through joyful learning every single day."
          emoji="👩‍🏫"
        />

        {/* Leadership: Principal on top, Vice Principal directly below */}
        <motion.div
          className={styles.leadership}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div className={styles.leadItem} variants={fadeUp}>
            <TeacherCard t={principal} variant="principal" badge="Principal" />
          </motion.div>

          {vicePrincipal && (
            <motion.div className={styles.leadItem} variants={fadeUp}>
              <TeacherCard t={vicePrincipal} variant="vice" badge="Vice Principal" />
            </motion.div>
          )}
        </motion.div>

        {/* Remaining teachers: centered responsive grid */}
        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {otherTeachers.map((t) => (
            <motion.div key={t.id} variants={fadeUp}>
              <TeacherCard t={t} variant="teacher" />
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
          <span aria-hidden="true">💛</span> Every teacher is Lead certified, background-verified
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
