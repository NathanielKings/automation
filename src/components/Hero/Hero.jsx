import { ArrowRight } from 'lucide-react'
import Button from '../Button/Button.jsx'
import WorkflowVisual from './WorkflowVisual.jsx'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Automation
            <br />
            without
            <br />
            the busywork.
          </h1>

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

        <div className={styles.visual}>
          <WorkflowVisual />
        </div>
      </div>
    </section>
  )
}

export default Hero
