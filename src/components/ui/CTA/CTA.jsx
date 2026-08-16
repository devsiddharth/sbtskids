import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import Button from '../Button/Button.jsx'
import { site } from '../../../data/site.js'
import { Balloon, Cloud, Star, Heart } from '../Decor/Decor.jsx'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={`section-pad ${styles.wrap}`} aria-labelledby="cta-title">
      <motion.div
        className={`container ${styles.card}`}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <Cloud className={styles.cloud} opacity={0.35} />
        <Cloud className={styles.cloud2} opacity={0.3} />
        <Balloon className={styles.balloon1} color="#FFD93D" />
        <Balloon className={styles.balloon2} color="#55D6BE" />
        <Star className={styles.star1} size={26} delay={0.3} />
        <Star className={styles.star2} size={18} delay={1.1} />
        <Heart className={styles.heart} size={22} delay={0.7} />

        <motion.span className={styles.eyebrow} variants={fadeUp}>
          🎈 Admissions Open · {site.admissionYear}
        </motion.span>
        <motion.h2 id="cta-title" className={styles.title} variants={fadeUp}>
          Come, meet us — and watch your child fall in love with learning.
        </motion.h2>
        <motion.p className={styles.subtitle} variants={fadeUp}>
          Book a fun-filled campus tour today. Limited seats for the new session — your child’s
          little adventure is just one call away.
        </motion.p>
        <motion.div className={styles.actions} variants={fadeUp}>
          <Button to="/admissions" variant="secondary" size="lg">
            🌟 Begin the Journey
          </Button>
          <Button href={site.phoneLink} variant="white" size="lg">
            📞 {site.phone}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
