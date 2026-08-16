import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, viewportOnce } from '../../../utils/motion.js'
import { Sun, Cloud, Balloon, Star } from '../Decor/Decor.jsx'
import WaveDivider from '../WaveDivider/WaveDivider.jsx'
import styles from './PageHero.module.css'

export default function PageHero({ eyebrow, title, subtitle, emoji = '⭐', crumbs = [] }) {
  return (
    <header className={styles.hero}>
      {/* Decorative background */}
      <div className={styles.blobBlob} aria-hidden="true" />
      <div className={styles.blobBlob2} aria-hidden="true" />
      <Sun className={styles.decorSun} />
      <Cloud className={styles.decorCloud1} />
      <Cloud className={styles.decorCloud2} opacity={0.7} />
      <Balloon className={styles.decorBalloon} color="#FF5A5F" />
      <Balloon className={styles.decorBalloon2} color="#55D6BE" />
      <Star className={styles.decorStar} size={20} delay={0.4} />
      <Star className={styles.decorStar2} size={14} delay={1.2} />

      <motion.div
        className={`container ${styles.content}`}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        initial="hidden"
        animate="visible"
      >
        <motion.span className={styles.eyebrow} variants={fadeUp}>
          <span aria-hidden="true">{emoji}</span> {eyebrow}
        </motion.span>
        <motion.h1 className={styles.title} variants={fadeUp}>
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p className={styles.subtitle} variants={fadeUp}>
            {subtitle}
          </motion.p>
        )}
        <motion.nav className={styles.crumbs} variants={fadeUp} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c}>
              <span className={styles.crumbSep} aria-hidden="true">
                →
              </span>
              {c}
            </span>
          ))}
        </motion.nav>
      </motion.div>

      <WaveDivider fill="#FFFDF7" zTop className={styles.wave} />
    </header>
  )
}
