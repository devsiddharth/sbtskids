import { motion } from 'framer-motion'
import { methodology } from '../../../data/content.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import styles from './Methodology.module.css'

export default function Methodology() {
  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="method-title">
      <div className="container">
        <SectionHeading
          eyebrow="How We Learn"
          title={
            <>
              Learning that feels like <span style={{ color: 'var(--secondary)' }}>playing</span> — because it is
            </>
          }
          subtitle="No rote, no pressure. Just eight joyful ways little brains grow, one giggle at a time."
          emoji="🧠"
        />

        <motion.ul
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {methodology.map((m) => (
            <motion.li
              key={m.title}
              className={styles.item}
              variants={fadeUp}
              style={{ '--m-color': m.color }}
            >
              <span className={styles.icon} aria-hidden="true">
                {m.emoji}
              </span>
              <div className={styles.copy}>
                <h3 className={styles.title}>{m.title}</h3>
                <p className={styles.text}>{m.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
