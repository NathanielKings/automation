import { useEffect, useState } from 'react'
import { Workflow, Menu, X } from 'lucide-react'
import Button from '../Button/Button.jsx'
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx'
import styles from './Navbar.module.css'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.brand} aria-label="Nathaniel — home">
          <span className={styles.mark}>
            <Workflow size={17} aria-hidden="true" />
          </span>
          <span className={styles.name}>Nathaniel</span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <div className={styles.cta}>
            <Button href="#contact" variant="primary" size="sm">
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
          <a
            key={link.href}
            href={link.href}
            className={styles.menuLink}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className={styles.menuCta}
          onClick={() => setOpen(false)}
        >
          Let&rsquo;s Talk
        </a>
      </div>
    </header>
  )
}

export default Navbar
