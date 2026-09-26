import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      sessionStorage.removeItem('projectsScrollPosition')
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      return
    }

    const saved = sessionStorage.getItem('projectsScrollPosition')
    if (pathname === '/' && saved !== null) {
      sessionStorage.removeItem('projectsScrollPosition')
      window.scrollTo(0, Number(saved))
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default ScrollToTop
