import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
      }
      return
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
