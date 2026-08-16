import styles from './WaveDivider.module.css'

/**
 * WaveDivider — animated curved SVG separator between sections.
 * `fill` = the background color of the NEXT section (the wave dips into it).
 * `flip` renders it upside down. `zTop` keeps it above neighbor content.
 */
export default function WaveDivider({
  fill = '#FFFFFF',
  flip = false,
  className = '',
  zTop = false,
}) {
  return (
    <div
      className={`${styles.wrap} ${flip ? styles.flip : ''} ${zTop ? styles.zTop : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        className={styles.svg}
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        role="presentation"
      >
        <path
          className={styles.wavePath}
          d="M0,56 C180,96 360,96 540,72 C720,48 900,16 1080,24 C1260,32 1350,56 1440,64 L1440,96 L0,96 Z"
          fill={fill}
        />
        <path
          className={styles.wavePathSlow}
          d="M0,72 C240,96 480,96 720,80 C960,64 1200,56 1440,68 L1440,96 L0,96 Z"
          fill={fill}
          opacity="0.55"
        />
      </svg>
    </div>
  )
}
