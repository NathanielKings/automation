import Reveal from '../Reveal/Reveal.jsx'
import styles from './Process.module.css'

const stages = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand the current process, identify repetitive work, and define what should be automated.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Map the workflow, choose the right tools, and define how the systems should connect.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Develop and test the automation, integrations, notifications, and business logic.',
  },
  {
    number: '04',
    title: 'Optimize',
    description:
      'Refine the workflow, handle edge cases, and make sure it works reliably.',
  },
]

function Process() {
  return (
    <section className={styles.section} id="process">
      <div className="container">
        <Reveal>
          <div className={styles.head}>
            <h2 className={styles.heading}>The Process</h2>
            <p className={styles.sub}>
              A straightforward approach from identifying the problem to putting the
              automation into production.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className={styles.stages}>
            {stages.map((stage) => (
              <div className={styles.stage} key={stage.number}>
                <span className={styles.node} aria-hidden="true" />
                <span className={styles.number}>{stage.number}</span>
                <h3 className={styles.stageTitle}>{stage.title}</h3>
                <p className={styles.stageDesc}>{stage.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Process
