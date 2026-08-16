import { useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5'
import SmartImage from '../SmartImage/SmartImage.jsx'
import styles from './Lightbox.module.css'

/**
 * Lightbox — accessible popup image viewer with keyboard navigation
 * and a simple focus trap.
 */
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const frameRef = useRef(null)

  const close = useCallback(() => onClose(), [onClose])

  const prev = useCallback(
    () => onNavigate((index + items.length - 1) % items.length),
    [index, items.length, onNavigate],
  )
  const next = useCallback(() => onNavigate((index + 1) % items.length), [index, items.length, onNavigate])

  useEffect(() => {
    const previousFocus = document.activeElement
    const el = frameRef.current
    el?.querySelector('button')?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      /* Keep Tab focus inside the dialog */
      if (e.key === 'Tab' && el) {
        const focusables = el.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])')
        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previousFocus?.focus?.()
    }
  }, [close, prev, next])

  const item = items[index]

  return (
    <AnimatePresence>
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={close}
        role="dialog"
        aria-modal="true"
        aria-label={`Image viewer: ${item?.label}`}
      >
        <motion.figure
          ref={frameRef}
          className={styles.frame}
          initial={{ scale: 0.85, y: 24, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 12, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          onClick={(e) => e.stopPropagation()}
        >
          <SmartImage
            src={item?.src}
            alt={item?.label}
            label={item?.label}
            emoji={item?.emoji}
            color={item?.color}
            radius="var(--r-lg)"
            aspectRatio="4 / 3"
          />
          <figcaption className={styles.caption}>
            <span className={styles.badge}>{item?.category}</span>
            <span className={styles.label}>{item?.label}</span>
            <span className={styles.counter}>
              {index + 1} / {items.length}
            </span>
          </figcaption>

          <button className={styles.close} onClick={close} aria-label="Close image viewer">
            <IoClose />
          </button>
          <button className={`${styles.nav} ${styles.prev}`} onClick={prev} aria-label="Previous image">
            <IoChevronBack />
          </button>
          <button className={`${styles.nav} ${styles.next}`} onClick={next} aria-label="Next image">
            <IoChevronForward />
          </button>
        </motion.figure>
      </motion.div>
    </AnimatePresence>
  )
}
