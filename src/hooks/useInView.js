import { useEffect, useRef, useState } from 'react'

/**
 * useInView — observes an element and reports once it enters the viewport.
 * Used to drive entrance animations, count-ups and lazy reveals.
 *
 * @param {Object} options { threshold, rootMargin }
 * @returns {[React.RefObject, boolean]}
 */
export function useInView(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = options
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}
