import { useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

/**
 * Button — pill-shaped button with ripple, hover lift & gradient variants.
 * Renders a react-router <Link> when `to` is given, an <a> when `href`,
 * otherwise a <button>.
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  ariaLabel,
  ...rest
}) {
  const ref = useRef(null)

  const handleClick = (e) => {
    const btn = ref.current
    if (btn) {
      const rect = btn.getBoundingClientRect()
      const ripple = document.createElement('span')
      const size = Math.max(rect.width, rect.height)
      ripple.className = styles.ripple
      ripple.style.width = ripple.style.height = `${size}px`
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`
      btn.appendChild(ripple)
      setTimeout(() => ripple.remove(), 600)
    }
    onClick?.(e)
  }

  const classes = [styles.btn, styles[variant], styles[size], className].join(' ')

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} onClick={handleClick} aria-label={ariaLabel} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} onClick={handleClick} aria-label={ariaLabel} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button ref={ref} type={type} className={classes} onClick={handleClick} aria-label={ariaLabel} {...rest}>
      {children}
    </button>
  )
}
