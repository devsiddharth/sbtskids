import { useId } from 'react'
import styles from './Decor.module.css'

/* ---------------------------------------------------------------
   Decor — lightweight, playful floating decorations rendered as pure
   SVG/CSS. Use sparingly: decoration should delight, never distract.
   --------------------------------------------------------------- */

export function Sun({ className = '' }) {
  const gradId = useId()
  return (
    <svg
      className={`${styles.sun} ${className}`}
      viewBox="0 0 100 100"
      aria-hidden="true"
      role="presentation"
    >
      <g className={styles.sunRays}>
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="8"
            x2="50"
            y2="22"
            stroke="#FFD93D"
            strokeWidth="7"
            strokeLinecap="round"
            transform={`rotate(${i * 45} 50 50)`}
          />
        ))}
      </g>
      <circle cx="50" cy="50" r="26" fill="#FFD93D" />
      <circle cx="50" cy="50" r="26" fill={`url(#${gradId})`} opacity="0.6" />
      <defs>
        <radialGradient id={gradId} cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#FFF6CC" />
          <stop offset="100%" stopColor="#FFD93D" />
        </radialGradient>
      </defs>
      <circle cx="42" cy="44" r="3.4" fill="#3d2f00" />
      <circle cx="58" cy="44" r="3.4" fill="#3d2f00" />
      <path
        d="M40 55 Q50 63 60 55"
        fill="none"
        stroke="#3d2f00"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Cloud({ className = '', opacity = 0.9 }) {
  return (
    <svg
      className={`${styles.cloud} ${className}`}
      viewBox="0 0 160 90"
      aria-hidden="true"
      role="presentation"
      style={{ opacity }}
    >
      <g fill="#FFFFFF">
        <ellipse cx="45" cy="60" rx="38" ry="24" />
        <ellipse cx="85" cy="40" rx="36" ry="26" />
        <ellipse cx="120" cy="58" rx="34" ry="22" />
        <rect x="45" y="52" width="78" height="30" rx="15" />
      </g>
    </svg>
  )
}

export function Balloon({ className = '', color = '#FF5A5F' }) {
  return (
    <svg className={`${styles.balloon} ${className}`} viewBox="0 0 60 110" aria-hidden="true">
      <ellipse cx="30" cy="32" rx="24" ry="28" fill={color} />
      <path d="M30 56 L26 66 L34 66 Z" fill={color} />
      <path
        d="M30 66 Q30 82 22 94 Q30 90 34 88"
        stroke="rgba(45,55,72,.55)"
        strokeWidth="2.4"
        fill="none"
      />
      <path d="M30 58 Q34 64 32 66" stroke="rgba(255,255,255,.75)" strokeWidth="3.4" strokeLinecap="round" fill="none" />
      <ellipse cx="30" cy="10" rx="6" ry="9" fill="rgba(255,255,255,.4)" transform="rotate(-18 30 10)" />
    </svg>
  )
}

export function Bird({ className = '', color = '#5F6B7A' }) {
  return (
    <svg className={`${styles.bird} ${className}`} viewBox="0 0 80 40" aria-hidden="true">
      <path
        d="M8 26 Q18 10 30 22 Q20 30 8 26 Z"
        fill={color}
        transform="rotate(4 20 20)"
      />
      <path
        d="M32 22 Q44 10 54 26"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Star({ className = '', size = 22, color = '#FFD93D', delay = 0 }) {
  return (
    <svg
      className={`${styles.star} ${className}`}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ animationDelay: `${delay}s` }}
    >
      <path
        fill={color}
        d="M12 1.8 L14.7 8.1 L21.6 8.6 L16.3 13.1 L18 19.8 L12 16.1 L6 19.8 L7.7 13.1 L2.4 8.6 L9.3 8.1 Z"
      />
    </svg>
  )
}

export function Rainbow({ className = '' }) {
  return (
    <svg className={`${styles.rainbow} ${className}`} viewBox="0 0 120 70" aria-hidden="true">
      <path d="M12 64 A48 48 0 0 1 108 64" fill="none" stroke="#FF5A5F" strokeWidth="8" strokeLinecap="round" />
      <path d="M22 64 A38 38 0 0 1 98 64" fill="none" stroke="#FFA94D" strokeWidth="8" strokeLinecap="round" />
      <path d="M32 64 A28 28 0 0 1 88 64" fill="none" stroke="#FFD93D" strokeWidth="8" strokeLinecap="round" />
      <path d="M42 64 A18 18 0 0 1 78 64" fill="none" stroke="#55D6BE" strokeWidth="8" strokeLinecap="round" />
      <path d="M52 64 A8 8 0 0 1 68 64" fill="none" stroke="#7692FF" strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

export function PaperPlane({ className = '', color = '#7692FF' }) {
  return (
    <svg className={`${styles.plane} ${className}`} viewBox="0 0 60 60" aria-hidden="true">
      <path d="M4 30 L56 6 L34 54 L27 36 Z" fill={color} />
      <path d="M27 36 L56 6 L34 54" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="2.4" />
      <circle cx="14" cy="20" r="3" fill="#FFD93D" />
    </svg>
  )
}

export function Heart({ className = '', color = '#FF5A5F', size = 22, delay = 0 }) {
  return (
    <svg
      className={`${styles.heart} ${className}`}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ animationDelay: `${delay}s` }}
    >
      <path
        fill={color}
        d="M12 21.3 C-4.5 10.6 1.2 -0.6 12 6.2 C22.8 -0.6 28.5 10.6 12 21.3 Z"
      />
    </svg>
  )
}
