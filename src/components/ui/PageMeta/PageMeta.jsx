import { useEffect } from 'react'

/**
 * PageMeta — sets the document title & meta description for a page.
 * Keeps shared-screenshot/tab titles correct for the digital card.
 */
export default function PageMeta({ title, description }) {
  useEffect(() => {
    const previous = document.title
    if (title) document.title = title

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      const previousDescription = meta.getAttribute('content')
      meta.setAttribute('content', description)

      return () => {
        document.title = previous
        if (previousDescription !== null) meta.setAttribute('content', previousDescription)
      }
    }

    return () => {
      document.title = previous
    }
  }, [title, description])

  return null
}
