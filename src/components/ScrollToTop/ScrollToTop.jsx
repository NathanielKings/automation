import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const saved = sessionStorage.getItem('projectsScrollPosition')

    if (pathname === '/' && saved !== null) {
      sessionStorage.removeItem('projectsScrollPosition')
      window.scrollTo(0, Number(saved))
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}

export default ScrollToTop
