import { motion } from 'framer-motion'
import { safetyFeatures } from '../../../data/content.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import SmartImage from '../../ui/SmartImage/SmartImage.jsx'
import Button from '../../ui/Button/Button.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import { Star, Heart } from '../../ui/Decor/Decor.jsx'
import styles from './Safety.module.css'

const cctvImage = {
  src: '/images/cctv/IMG_0700.jpg',
  emoji: '🖥️',
  label: 'CCTV Control Room',
}

export default function Safety() {
  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="safety-title">
      <div className={styles.decors} aria-hidden="true">
        <Star size={16} delay={0.5} />
        <Star size={20} delay={1.6} />
        <Heart size={18} delay={2.2} />
      </div>

      <div className="container">
        <SectionHeading
          eyebrow="Safety First, Always"
          title={
            <>
              Your child’s safety is our <span style={{ color: 'var(--soft-blue)' }}>highest priority</span>
            </>
          }
          subtitle="Our campus is monitored with modern CCTV surveillance and layered safety systems giving parents complete peace of mind, every single day."
          emoji="🛡️"
          light={false}
        />

        <div className={styles.grid}>
          {/* CCTV card */}
          <motion.div
            className={styles.cctvCard}
            initial={{ opacity: 0, scale: 0.95, rotate: -1.5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className={styles.cctvHead}>
              <span className={styles.recDot} aria-hidden="true" />
              <span className={styles.cctvTitle}>Live · CCTV Control Room</span>
              <span className={styles.liveTag}>● LIVE</span>
            </div>
            <SmartImage
              src={cctvImage.src}
              alt="School CCTV control room monitoring every corner of campus"
              label={cctvImage.label}
              emoji={cctvImage.emoji}
              color="#7692FF"
              radius="0"
              aspectRatio="16 / 9"
            />
            <div className={styles.cctvFoot}>
              <span aria-hidden="true">🎥</span> 24 hours cameras · Every corridor &amp; play area covered
            </div>
          </motion.div>

          {/* Feature list */}
          <motion.div
            className={styles.features}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {safetyFeatures.map((f) => (
              <motion.div className={styles.feature} key={f.title} variants={fadeUp}>
                <span className={styles.featureIcon} aria-hidden="true">
                  {f.icon}
                </span>
                <div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureText}>{f.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55 }}
        >
          <Button to="/safety" variant="blue" size="lg">
            🛡️ Explore Our Safety Promise
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
