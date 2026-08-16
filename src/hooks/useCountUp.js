import { useEffect, useState } from 'react'

/**
 * useCountUp — animates a number from 0 to `target` with ease-out.
 * Starts only when `start` becomes truthy (usually when scrolled into view).
 *
 * @param {number} target
 * @param {boolean} start
 * @param {number} duration  milliseconds
 * @returns {number}
 */
export function useCountUp(target, start, duration = 1800) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return undefined

    let raf
    const t0 = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start, duration])

  return value
}
