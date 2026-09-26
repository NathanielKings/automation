import { Link } from 'react-router-dom'
import Reveal from '../Reveal/Reveal.jsx'
import styles from './Footer.module.css'

const nav = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/#services' },
  { label: 'Work', to: '/#work' },
  { label: 'Process', to: '/#process' },
  { label: 'Stack', to: '/#stack' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
]

const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oyedokunadebayo/' },
  { label: 'GitHub', href: 'https://github.com/NathanielKings' },
  { label: 'Email', href: 'mailto:oyedokunadebayon@gmail.com' },
]

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Reveal>
          <div className={styles.top}>
            <div className={styles.brand}>
              <span className={styles.name}>Nathaniel Kings</span>
              <span className={styles.tagline}>
                Automation • Integration • Process Improvement
              </span>
            </div>

            <div className={styles.links}>
              <nav className={styles.nav} aria-label="Footer">
                {nav.map((link) => (
                  <Link key={link.to} className={styles.navLink} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className={styles.social}>
                {social.map((link) => {
                  const external = link.href.startsWith('http')
                  return (
                    <a
                      key={link.label}
                      className={styles.socialLink}
                      href={link.href}
                      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      {link.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <span className={styles.copyright}>
              &copy; 2026 Nathaniel Kings. All rights reserved.
            </span>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}

export default Footer
