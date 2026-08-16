import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import styles from './SectionHeading.module.css'

/**
 * SectionHeading — consistent eyebrow + title + subtitle treatment.
 * `align` can be 'center' | 'left'. Supports ReactNode title for highlighted words.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  emoji = '✨',
}) {
  return (
    <motion.div
      className={`${styles.wrap} ${styles[align]} ${light ? styles.light : ''}`}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.span className={styles.eyebrow} variants={fadeUp}>
        <span className={styles.eyebrowEmoji} aria-hidden="true">
          {emoji}
        </span>
        {eyebrow}
      </motion.span>
      <motion.h2 className={styles.title} variants={fadeUp}>
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p className={styles.subtitle} variants={fadeUp}>
          {subtitle}
        </motion.p>
      )}
      <motion.div className={styles.scribble} variants={fadeUp} aria-hidden="true">
        <span className={styles.scribbleDot} />
        <span className={styles.scribbleLine} />
        <span className={styles.scribbleDot} />
      </motion.div>
    </motion.div>
  )
}
