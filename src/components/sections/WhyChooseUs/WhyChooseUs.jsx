import { motion } from 'framer-motion'
import { whyChooseUs } from '../../../data/content.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import { Star } from '../../ui/Decor/Decor.jsx'
import styles from './WhyChooseUs.module.css'

export default function WhyChooseUs() {
  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="why-title">
      <div className="container">
        <SectionHeading
          eyebrow="Why Families Love Us"
          title={
            <>
              Six little promises we <span style={{ color: 'var(--secondary)' }}>never break</span>
            </>
          }
          subtitle="Parents don't just choose a school; they choose who they trust with their most precious person. Here is why thousands trust us."
          emoji="💛"
        />

        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {whyChooseUs.map((item, i) => (
            <motion.article
              key={item.title}
              className={styles.card}
              variants={fadeUp}
              style={{ '--card-bg': item.color }}
            >
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={styles.icon} aria-hidden="true">
                {item.icon}
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
              <span className={styles.scribbleBar} aria-hidden="true" />
            </motion.article>
          ))}
        </motion.div>

        <div className={styles.decor} aria-hidden="true">
          <Star size={16} delay={0.6} />
          <Star size={20} delay={1.8} />
          <Star size={13} delay={2.6} />
        </div>
      </div>
    </section>
  )
}
