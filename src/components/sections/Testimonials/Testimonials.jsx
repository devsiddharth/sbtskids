import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'
import { IoStar } from 'react-icons/io5'
import { testimonials } from '../../../data/testimonials.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import { fadeUp, stagger, viewportOnce } from '../../../utils/motion.js'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading
          eyebrow="Words From Our Families"
          title={
            <>
              Parents say it <span style={{ color: 'var(--secondary)' }}>better than we ever could</span>
            </>
          }
          subtitle="Real words from real families — the smiles, the tears of joy, and the everyday magic we get to witness."
          emoji="💬"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              loop
              grabCursor
              autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
              pagination={{ clickable: true }}
              breakpoints={{ 760: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
              className={styles.swiper}
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <figure className={styles.card} style={{ '--tint': t.color }}>
                    <span className={styles.quoteMark} aria-hidden="true">
                      “
                    </span>
                    <span className={styles.emoji} aria-hidden="true">
                      {t.emoji}
                    </span>
                    <div className={styles.stars} aria-label={`Rated ${t.rating} out of 5`}>
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <IoStar key={i} aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className={styles.quote}>{t.quote}</blockquote>
                    <figcaption className={styles.author}>
                      <span className={styles.avatar} aria-hidden="true">
                        {t.emoji}
                      </span>
                      <span>
                        <span className={styles.name}>{t.parent}</span>
                        <span className={styles.child}>{t.child}</span>
                      </span>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
