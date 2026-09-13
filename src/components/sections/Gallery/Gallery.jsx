import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { galleryGroups } from '../../../data/gallery.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import SmartImage from '../../ui/SmartImage/SmartImage.jsx'
import Lightbox from '../../ui/Lightbox/Lightbox.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import styles from './Gallery.module.css'

/* The grid shows a tidy preview; the lightbox always holds the full album. */
const PREVIEW_LIMIT = 8

export default function Gallery() {
  const [activeId, setActiveId] = useState(galleryGroups[0].id)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const active = galleryGroups.find((g) => g.id === activeId) ?? galleryGroups[0]

  const items = useMemo(
    () =>
      active.photos.map((photo) => ({
        ...photo,
        category: active.title,
        emoji: active.emoji,
        color: active.color,
      })),
    [active],
  )

  const preview = items.slice(0, PREVIEW_LIMIT)
  const hasMore = items.length > PREVIEW_LIMIT

  const selectGroup = (id) => {
    setActiveId(id)
    setLightboxIndex(null)
  }

  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="gallery-title">
      <div className="container">
        <SectionHeading
          eyebrow="Little Moments, Big Smiles"
          title={
            <>
              A peek inside our <span style={{ color: 'var(--soft-blue)' }}>colourful world</span>
            </>
          }
          subtitle="Pick a gallery to see the whole album, then tap any moment to view it up close."
          emoji="📸"
        />

        <div className={styles.tabs} role="group" aria-label="Choose a photo gallery">
          {galleryGroups.map((g) => (
            <button
              key={g.id}
              type="button"
              className={`${styles.tab} ${g.id === active.id ? styles.tabActive : ''}`}
              style={{ '--tint': g.color }}
              aria-pressed={g.id === active.id}
              onClick={() => selectGroup(g.id)}
            >
              <span className={styles.tabEmoji} aria-hidden="true">
                {g.emoji}
              </span>
              See {g.title}
              <span className={styles.tabCount}>{g.photos.length}</span>
            </button>
          ))}
        </div>

        <p className={styles.blurb}>{active.blurb}</p>

        {items.length === 0 ? (
          <motion.div
            className={styles.empty}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55 }}
            role="status"
          >
            <span className={styles.emptyEmoji} aria-hidden="true">
              {active.emoji}
            </span>
            <h3 className={styles.emptyTitle}>Photos coming soon</h3>
            <p className={styles.emptyText}>{active.emptyText}</p>
          </motion.div>
        ) : (
          <>
            <motion.div
              key={active.id}
              className={styles.grid}
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {preview.map((g, i) => (
                <motion.div key={g.src} variants={fadeUp}>
                  <button
                    type="button"
                    className={styles.tile}
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`View photo: ${g.label}`}
                  >
                    <SmartImage
                      src={g.src}
                      alt={g.label}
                      label={g.label}
                      emoji={g.emoji}
                      color={g.color}
                      radius="var(--r-lg)"
                      aspectRatio="4 / 3"
                    />
                    <span className={styles.tileLabel}>
                      <span className={styles.tileCat}>{g.category}</span>
                      {g.label}
                      <span className={styles.zoomHint} aria-hidden="true">
                        🔍
                      </span>
                    </span>
                  </button>
                </motion.div>
              ))}
            </motion.div>

            {hasMore && (
              <div className={styles.more}>
                <button type="button" className={styles.moreBtn} onClick={() => setLightboxIndex(0)}>
                  View all {items.length} {active.title.toLowerCase()} photos
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  )
}
