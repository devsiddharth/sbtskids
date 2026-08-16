import { memo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../../hooks/useInView.js'
import { useCountUp } from '../../../hooks/useCountUp.js'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import { stats } from '../../../data/content.js'
import { site } from '../../../data/site.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import SmartImage from '../../ui/SmartImage/SmartImage.jsx'
import Button from '../../ui/Button/Button.jsx'
import { PaperPlane, Heart } from '../../ui/Decor/Decor.jsx'
import styles from './About.module.css'

const yearsOfJoy = new Date().getFullYear() - site.established

const aboutImages = {
  main: '', // '/images/campus/main-building.jpg'
  mainEmoji: '🏫',
  mainLabel: 'Our School Building',
  small: '', // '/images/play-area/happy-kids.jpg'
  smallEmoji: '😊',
  smallLabel: 'Happy Little Learners',
}

const StatCard = memo(function StatCard({ stat }) {
  const [ref, inView] = useInView()
  const value = useCountUp(stat.value, inView)
  return (
    <div className={styles.stat} ref={ref}>
      <span className={styles.statEmoji} aria-hidden="true">
        {stat.emoji}
      </span>
      <p className={styles.statValue}>
        {value}
        {stat.suffix}
      </p>
      <p className={styles.statLabel}>{stat.label}</p>
    </div>
  )
})

export default function About() {
  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="about-title">
      <PaperPlane className={styles.plane} />
      <Heart className={styles.heart} size={20} delay={1.2} />

      <div className="container">
        <div className={styles.grid}>
          {/* Collage */}
          <motion.div
            className={styles.collage}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
          >
            <motion.div className={styles.expChip} variants={fadeUp}>
              <p className={styles.expNum}>{yearsOfJoy}+</p>
              <p className={styles.expLabel}>Years of Joy</p>
            </motion.div>
            <motion.div className={styles.mainImg} variants={fadeUp}>
              <SmartImage
                src={aboutImages.main}
                alt="Our colourful school building"
                label={aboutImages.mainLabel}
                emoji={aboutImages.mainEmoji}
                color="#7692FF"
                radius="calc(var(--r-xl) - 6px)"
                aspectRatio="4 / 3"
              />
            </motion.div>
            <motion.div className={styles.smallImg} variants={fadeUp}>
              <SmartImage
                src={aboutImages.small}
                alt="Happy children playing"
                label={aboutImages.smallLabel}
                emoji={aboutImages.smallEmoji}
                color="#55D6BE"
                radius="calc(var(--r-lg) - 6px)"
                aspectRatio="1 / 1"
              />
            </motion.div>
          </motion.div>

          {/* Copy */}
          <motion.div
            className={styles.copy}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="Welcome to Our World"
              title={
                <>
                  A little school with a <span style={{ color: 'var(--secondary)' }}>very big heart</span>
                </>
              }
              subtitle=""
              align="left"
              emoji="🌻"
            />
            <motion.p className={styles.lead} variants={fadeUp}>
              At {site.name}, we believe childhood is not a race — it’s a wonderland. Since 2012,
              we’ve been the happy place where first steps, first words and first friendships bloom.
            </motion.p>
            <motion.p className={styles.body} variants={fadeUp}>
              Our bright classrooms, leafy play areas and warm, loving teachers are designed around
              one simple idea: when children feel safe and happy, they learn almost magically. Here,
              every child is seen, heard, and celebrated — exactly as they are.
            </motion.p>
            <motion.ul className={styles.list} variants={fadeUp}>
              <li className={styles.item}>
                <span className={styles.itemIcon} aria-hidden="true">
                  🧸
                </span>
                Play-Based Curriculum
              </li>
              <li className={styles.item}>
                <span className={styles.itemIcon} aria-hidden="true">
                  👶
                </span>
                Ages 1.5 – 5.5 Years
              </li>
              <li className={styles.item}>
                <span className={styles.itemIcon} aria-hidden="true">
                  🏡
                </span>
                Feels Like Family
              </li>
              <li className={styles.item}>
                <span className={styles.itemIcon} aria-hidden="true">
                  🌱
                </span>
                Nurture, Not Pressure
              </li>
            </motion.ul>

            <motion.div className={styles.stats} variants={fadeUp}>
              {stats.map((s) => (
                <StatCard key={s.label} stat={s} />
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Button to="/about" variant="blue">
                Discover Our Story →
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}