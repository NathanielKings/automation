import Reveal from '../Reveal/Reveal.jsx'
import styles from './Footer.module.css'

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
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
                  <a key={link.href} className={styles.navLink} href={link.href}>
                    {link.label}
                  </a>
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
