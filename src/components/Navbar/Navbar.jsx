import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Workflow, Menu, X } from 'lucide-react'
import Button from '../Button/Button.jsx'
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx'
import styles from './Navbar.module.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/#services' },
  { label: 'Work', to: '/#work' },
  { label: 'Process', to: '/#process' },
  { label: 'Stack', to: '/#stack' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()

  const activeTo = (() => {
    if (pathname.startsWith('/projects')) return '/#work'
    if (pathname === '/') {
      if (hash) return `/#${hash.slice(1)}`
      return '/'
    }
    return ''
  })()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label="Nathaniel Kings — home">
          <span className={styles.mark}>
            <Workflow size={17} aria-hidden="true" />
          </span>
          <span className={styles.name}>Nathaniel Kings</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${styles.link} ${link.to === activeTo ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <div className={styles.cta}>
            <Button to="/#contact" variant="primary" size="sm">
              Let&rsquo;s Talk
            </Button>
          </div>
          <button
            type="button"
            className={styles.toggle}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`${styles.menu} ${open ? styles.menuOpen : ''}`} id="mobile-menu">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`${styles.menuLink} ${link.to === activeTo ? styles.active : ''}`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/#contact" className={styles.menuCta} onClick={() => setOpen(false)}>
          Let&rsquo;s Talk
        </Link>
      </div>
    </header>
  )
}

export default Navbar
