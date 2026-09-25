import { Fragment } from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '../Button/Button.jsx'
import styles from './Hero.module.css'

const trail = ['Airtable', 'n8n', 'Gmail', 'Telegram']

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>Automation without the busywork.</h1>

          <p className={styles.lead}>
            I build practical business automation systems that eliminate repetitive
            tasks, connect your tools, and keep your workflows moving.
          </p>

          <div className={styles.actions}>
            <Button href="#work">
              See My Work
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="secondary">
              Let&rsquo;s Talk
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.wire} aria-hidden="true">
        {trail.map((name, i) => (
          <Fragment key={name}>
            <span className={styles.wireStation}>
              <span className={styles.wireDot} />
              <span className={styles.wireLabel}>{name}</span>
            </span>
            {i < trail.length - 1 && (
              <span className={styles.wireLink}>
                <span className={styles.wireFlow} style={{ animationDelay: `${i * 0.5}s` }} />
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  )
}

export default Hero
