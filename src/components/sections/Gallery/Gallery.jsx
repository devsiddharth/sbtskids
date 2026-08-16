import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'
import { gallery } from '../../../data/gallery.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import SmartImage from '../../ui/SmartImage/SmartImage.jsx'
import Lightbox from '../../ui/Lightbox/Lightbox.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import styles from './Gallery.module.css'

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (i) => setLightboxIndex(i)

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
          subtitle="Tap any moment to see it up close. New photos from our little ones’ days are added all the time."
          emoji="📸"
        />

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <motion.div variants={fadeUp}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop
              grabCursor
              autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                980: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              className={styles.swiper}
            >
              {gallery.map((g, i) => (
                <SwiperSlide key={g.id}>
                  <button
                    className={styles.slideBtn}
                    onClick={() => openLightbox(i)}
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
                    <span className={styles.slideLabel}>
                      <span className={styles.slideCat}>{g.category}</span>
                      {g.label}
                      <span className={styles.zoomHint} aria-hidden="true">
                        🔍
                      </span>
                    </span>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={gallery}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  )
}
