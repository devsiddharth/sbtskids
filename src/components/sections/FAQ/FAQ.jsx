import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IoAdd, IoRemove } from 'react-icons/io5'
import { faqs } from '../../../data/faqs.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import Button from '../../ui/Button/Button.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import styles from './FAQ.module.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="faq-title">
      <div className="container">
        <SectionHeading
          eyebrow="Good Questions"
          title={
            <>
              Everything parents <span style={{ color: 'var(--secondary)' }}>love to ask</span>
            </>
          }
          subtitle="Still curious after reading? Call us — we genuinely love talking about our school."
          emoji="🙋"
        />

        <div className={styles.layout}>
          <motion.div
            className={styles.list}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {faqs.map((f, i) => {
              const open = openIndex === i
              return (
                <motion.div
                  className={`${styles.item} ${open ? styles.itemOpen : ''}`}
                  key={f.q}
                  variants={fadeUp}
                >
                  <button
                    className={styles.question}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                  >
                    <span className={styles.qEmoji} aria-hidden="true">
                      {open ? '😊' : '❓'}
                    </span>
                    <span className={styles.qText}>{f.q}</span>
                    <span className={styles.toggle} aria-hidden="true">
                      {open ? <IoRemove /> : <IoAdd />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-button-${i}`}
                        className={styles.answerWrap}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                      >
                        <p className={styles.answer}>{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.aside
            className={styles.sideCard}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55 }}
          >
            <span className={styles.sideEmoji} aria-hidden="true">
              💌
            </span>
            <h3 className={styles.sideTitle}>Have a question?</h3>
            <p className={styles.sideText}>
              Our friendly admissions team answers every call with a smile — and every message with care.
            </p>
            <Button to="/contact" variant="primary" className={styles.sideBtn}>
              Ask Us Anything
            </Button>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
