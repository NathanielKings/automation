import { ArrowRight } from 'lucide-react'
import Button from '../Button/Button.jsx'
import WorkflowCard from './WorkflowCard.jsx'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.scene} aria-hidden="true">
        <svg className={styles.lines} viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline points="22,50 70,24 66,72" />
        </svg>
        <span className={styles.node} style={{ left: '22%', top: '50%' }} />
        <span className={styles.node} style={{ left: '70%', top: '24%' }} />
        <span className={styles.node} style={{ left: '66%', top: '72%' }} />

        <div className={`${styles.cardPos} ${styles.cardA}`}>
          <div className={`${styles.cardFloat} ${styles.floatA}`}>
            <WorkflowCard
              badge="When this happens"
              title="New record in Airtable"
              sub="Triggers the workflow"
            />
          </div>
        </div>

        <div className={`${styles.cardPos} ${styles.cardB}`}>
          <div className={`${styles.cardFloat} ${styles.floatB}`}>
            <WorkflowCard
              badge="Then do this"
              title="n8n routes the data"
              sub="Automates the process"
            />
          </div>
        </div>

        <div className={`${styles.cardPos} ${styles.cardC}`}>
          <div className={`${styles.cardFloat} ${styles.floatC}`}>
            <WorkflowCard
              badge="Then do this"
              title="Update via Gmail & Telegram"
              sub="Delivers the result"
            />
          </div>
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
