import { ArrowRight } from 'lucide-react'
import Button from '../Button/Button.jsx'
import WorkflowCard from './WorkflowCard.jsx'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.scene} aria-hidden="true">
        <div className={`${styles.floatWrap} ${styles.floatA}`}>
          <WorkflowCard
            badge="When this happens"
            title="New record in Airtable"
            sub="Triggers the workflow"
          />
        </div>
        <span className={styles.connector} />
        <div className={`${styles.floatWrap} ${styles.floatB}`}>
          <WorkflowCard
            badge="Then do this"
            title="n8n routes the data"
            sub="Automates the process"
          />
        </div>
        <span className={styles.connector} />
        <div className={`${styles.floatWrap} ${styles.floatC}`}>
          <WorkflowCard
            badge="Then do this"
            title="Update via Gmail & Telegram"
            sub="Delivers the result"
          />
        </div>
      </div>

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
    </section>
  )
}

export default Hero
