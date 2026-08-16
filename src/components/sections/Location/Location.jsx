import { motion } from 'framer-motion'
import { IoLocation, IoTime, IoCall, IoMail } from 'react-icons/io5'
import { site } from '../../../data/site.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import styles from './Location.module.css'

export default function Location() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`

  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="location-title">
      <div className="container">
        <SectionHeading
          eyebrow="Find Us"
          title={
            <>
              Come visit — <span style={{ color: 'var(--soft-blue)' }}>coffee’s on us</span>, and a tour for your little star
            </>
          }
          subtitle="We'd love to show you around. The children are the best tour guides you'll ever meet."
          emoji="📍"
        />

        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div className={styles.mapCard} variants={fadeUp}>
            <span className={styles.mapBadge}>
              <span aria-hidden="true">📍</span> {site.name}
            </span>
            <iframe
              className={styles.mapFrame}
              src={mapSrc}
              title={`Map showing ${site.name} location`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          <motion.div className={styles.info} variants={stagger}>
            {[
              { icon: <IoLocation />, title: 'Our Address', text: site.address },
              { icon: <IoTime />, title: 'School Hours', text: site.timings },
              { icon: <IoCall />, title: 'Call Us', text: <a href={site.phoneLink}>{site.phone}</a> },
              { icon: <IoMail />, title: 'Write to Us', text: <a href={`mailto:${site.email}`}>{site.email}</a> },
            ].map((c, i) => (
              <motion.div className={styles.infoCard} key={c.title} variants={fadeUp}>
                <span className={styles.infoIcon} aria-hidden="true">
                  {c.icon}
                </span>
                <h3 className={styles.infoTitle}>{c.title}</h3>
                <p className={styles.infoText}>{c.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
