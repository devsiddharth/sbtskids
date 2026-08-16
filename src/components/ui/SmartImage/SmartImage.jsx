import { useState } from 'react'
import styles from './SmartImage.module.css'

/**
 * SmartImage — lazy-loaded <img> that automatically shows a beautiful
 * colour-block placeholder (emoji + label) until a real photo is provided.
 *
 * Add real images to /public/images/... and pass the path in `src`.
 * Nothing breaks if a path is empty or fails to load.
 */
export default function SmartImage({
  src = '',
  alt = '',
  label = '',
  emoji = '📷',
  color = 'var(--soft-blue)',
  radius = 'var(--r-md)',
  className = '',
  aspectRatio = '4 / 3',
  ...rest
}) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = !src || failed

  if (showPlaceholder) {
    return (
      <div
        className={`${styles.placeholder} ${className}`}
        style={
          {
            '--ph-color': color,
            '--ph-radius': radius,
            aspectRatio,
          }
        }
        role="img"
        aria-label={label || alt || 'Image coming soon'}
      >
        <span className={styles.placeholderEmoji} aria-hidden="true">
          {emoji}
        </span>
        <span className={styles.placeholderLabel}>{label}</span>
      </div>
    )
  }

  return (
    <img
      className={`${styles.img} ${className}`}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      style={{ borderRadius: radius, aspectRatio }}
      {...rest}
    />
  )
}
