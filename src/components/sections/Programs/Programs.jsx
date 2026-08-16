import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { programs } from '../../../data/programs.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import Button from '../../ui/Button/Button.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import styles from './Programs.module.css'

export default function Programs() {
  const [activeId, setActiveId] = useState(programs[0].id)
  const tabRefs = useRef([])
  const active = programs.find((p) => p.id === activeId)

  /* Roving-tabindex keyboard navigation (WAI-ARIA tabs pattern) */
  const onTablistKeyDown = (e) => {
    const idx = programs.findIndex((p) => p.id === activeId)
    let next = null
    if (e.key === 'ArrowRight') next = (idx + 1) % programs.length
    else if (e.key === 'ArrowLeft') next = (idx - 1 + programs.length) % programs.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = programs.length - 1
    if (next !== null) {
      e.preventDefault()
      setActiveId(programs[next].id)
      tabRefs.current[next]?.focus()
    }
  }

  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="programs-title">
      <div className="container">
        <SectionHeading
          eyebrow="Our Programs"
          title={
            <>
              A perfect little class for every <span style={{ color: 'var(--secondary)' }}>growing star</span>
            </>
          }
          subtitle="From wobbly first steps to big-school readiness — each stage is a joyful adventure, gently matched to your child’s age and rhythm."
          emoji="🧸"
        />

        {/* Tabs */}
        <div className={styles.tabs} role="tablist" aria-label="Choose a program" onKeyDown={onTablistKeyDown}>
          {programs.map((p, i) => (
            <button
              key={p.id}
              role="tab"
              id={`tab-${p.id}`}
              aria-selected={activeId === p.id}
              aria-controls={`panel-${p.id}`}
              tabIndex={activeId === p.id ? 0 : -1}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              className={`${styles.tab} ${activeId === p.id ? styles.tabActive : ''}`}
              onClick={() => setActiveId(p.id)}
              style={{ '--tab-grad': `linear-gradient(135deg, ${p.gradient[0]}, ${p.gradient[1]})` }}
            >
              <span className={styles.tabEmoji} aria-hidden="true">
                {p.emoji}
              </span>
              <span className={styles.tabMeta}>
                <span className={styles.tabName}>{p.name}</span>
                <span className={styles.tabAge}>{p.age}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            className={styles.panel}
            style={{ '--panel-grad': `linear-gradient(135deg, ${active.gradient[0]}22, ${active.gradient[1]}22)` }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className={styles.panelLeft}>
              <span className={styles.panelEmoji} aria-hidden="true">
                {active.emoji}
              </span>
              <h3 className={styles.panelTitle}>{active.name}</h3>
              <p className={styles.panelTag}>{active.tagline}</p>
              <p className={styles.panelDesc}>{active.description}</p>
              <div className={styles.panelChips}>
                <span className={styles.chip}>
                  👶 {active.age}
                </span>
                <span className={styles.chip}>
                  🕘 {active.time}
                </span>
              </div>
              <div className={styles.panelAction}>
                <Button to="/admissions" variant="primary">
                  Enquire for {active.name} →
                </Button>
              </div>
            </div>
            <ul className={styles.panelList}>
              {active.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  className={styles.panelItem}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.08 }}
                >
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>
                  {h}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className={styles.footerNote}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp}>
            <span aria-hidden="true">💡</span> Not sure which class fits? Visit us — our teachers will
            happily help you choose the right group for your little one.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
