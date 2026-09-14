import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IoPlay, IoClose } from 'react-icons/io5'
import { fadeUp, stagger } from '../../../utils/motion.js'
import { site } from '../../../data/site.js'
import Button from '../../ui/Button/Button.jsx'
import SmartImage from '../../ui/SmartImage/SmartImage.jsx'
import WaveDivider from '../../ui/WaveDivider/WaveDivider.jsx'
import { Sun, Cloud, Bird, Balloon, Star, Rainbow, PaperPlane } from '../../ui/Decor/Decor.jsx'
import styles from './Hero.module.css'

const visual = {
  campusImage: '/images/campus/Hero_cover.jpg',
  campusEmoji: '🏫',
  campusLabel: 'Our Happy Campus',
  video: '/images/campus/IMG_0723.mp4',
}

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)
  const [videoRatio, setVideoRatio] = useState(16 / 9)
  const videoRef = useRef(null)
  const closeBtnRef = useRef(null)

  /* Pause playback before hiding so no audio/video outlives the modal */
  const closeVideo = useCallback(() => {
    videoRef.current?.pause()
    setShowVideo(false)
  }, [])

  useEffect(() => {
    if (!showVideo) return
    const previousFocus = document.activeElement
    closeBtnRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') closeVideo()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previousFocus?.focus?.()
    }
  }, [showVideo, closeVideo])

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      {/* Floating decorations */}
      <div className={styles.decorLayer} aria-hidden="true">
        <Cloud className={styles.cloud1} />
        <Cloud className={styles.cloud2} opacity={0.75} />
        <Cloud className={styles.cloud3} opacity={0.6} />
        <Sun className={styles.sun} />
        <Bird className={styles.bird1} />
        <Bird className={styles.bird2} />
        <Balloon className={styles.balloon1} color="#FF5A5F" />
        <Balloon className={styles.balloon2} color="#55D6BE" />
        <Star className={styles.star} size={22} delay={0.5} />
        <Rainbow className={styles.rainbow} />
        <PaperPlane className={styles.plane} />
      </div>

      <motion.div
        className={`container ${styles.grid}`}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Copy */}
        <div className={styles.copy}>
          <motion.span className={styles.badge} variants={fadeUp}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Admissions Open · {site.admissionYear}
          </motion.span>

          <motion.h1 id="hero-title" className={styles.title} variants={fadeUp}>
            <span className={styles.schoolName}>{site.fullName}</span>
            Where Little Smiles{' '}
            <span className={styles.titleGrad}>Learn to Shine</span>
          </motion.h1>

          <motion.p className={styles.subtitle} variants={fadeUp}>
            Every little smile matters. Our caring teachers turn curiosity into
            confidence through joyful, play-based learning in a safe, colourful
            world made just for your child.
          </motion.p>

          <motion.div className={styles.actions} variants={fadeUp}>
            <Button to="/admissions" variant="primary" size="lg">
              🎈 Begin the Adventure
            </Button>
            <button
              className={styles.watchBtn}
              onClick={() => setShowVideo(true)}
              aria-label="Watch our campus video"
            >
              <span className={styles.playIcon} aria-hidden="true">
                <IoPlay />
              </span>
              Watch Video
            </button>
          </motion.div>

          <motion.div className={styles.miniFacts} variants={fadeUp}>
            <span className={styles.miniFact}>
              <span aria-hidden="true">🛡️</span> Safe &amp; CCTV Monitored
            </span>
            <span className={styles.miniFact}>
              <span aria-hidden="true">🧑‍🏫</span> 1:18 Teacher Ratio
            </span>
            <span className={styles.miniFact}>
              <span aria-hidden="true">🎨</span> Play-Based Learning
            </span>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div className={styles.visual} variants={fadeUp}>
          <div className={styles.campusCard}>
            <SmartImage
              src={visual.campusImage}
              alt="Our colourful kindergarten campus"
              label={visual.campusLabel}
              emoji={visual.campusEmoji}
              color="#FFA94D"
              radius="calc(var(--r-xl) - 6px)"
              aspectRatio="16 / 10"
            />
          </div>

          <div className={`${styles.chip} ${styles.chip1}`} aria-hidden="true">
            <span>🛡️</span> 24/7 Safe Campus
          </div>
          <div className={`${styles.chip} ${styles.chip2}`} aria-hidden="true">
            <span>👩‍🏫</span> Loving Teachers
          </div>
          <div className={`${styles.chip} ${styles.chip3}`} aria-hidden="true">
            <span>🎈</span> 4+ Years of Joy
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.mouse} />
        <span>Scroll</span>
      </div>

      {/* Wave separator */}
      <WaveDivider fill="#FFFDF7" zTop className={styles.wave} />

      {/* Video modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className={styles.videoBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
            role="dialog"
            aria-modal="true"
            aria-label="Campus walkway video"
          >
            <motion.div
              className={styles.videoFrame}
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              style={{ '--video-ratio': videoRatio }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={videoRef}
                className={styles.videoEl}
                src={visual.video}
                poster={visual.campusImage}
                autoPlay
                muted
                playsInline
                controls
                preload="auto"
                aria-label="A walk through our school campus"
                onLoadedMetadata={(e) => {
                  const v = e.currentTarget
                  if (v.videoWidth && v.videoHeight) setVideoRatio(v.videoWidth / v.videoHeight)
                }}
              >
                Your browser does not support the video tag.
              </video>
              <button
                ref={closeBtnRef}
                className={styles.videoClose}
                onClick={closeVideo}
                aria-label="Close video"
              >
                <IoClose />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
