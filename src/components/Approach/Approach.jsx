import Reveal from '../Reveal/Reveal.jsx'
import styles from './Approach.module.css'

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

const categories = [
  { label: 'Automation', tools: ['n8n', 'Zapier', 'Make'] },
  { label: 'Databases & CRM', tools: ['Airtable', 'Google Sheets'] },
  { label: 'Communication', tools: ['Gmail', 'Telegram'] },
  {
    label: 'Documents & Integrations',
    tools: ['Google Docs', 'PDF.co', 'DocuSign'],
  },
]

function Approach() {
  return (
    <section className={styles.section} id="approach">
      <div className="container">
        <Reveal>
          <div className={styles.head}>
            <h2 className={styles.heading}>Approach</h2>
            <p className={styles.sub}>A clear process, backed by the right tools.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.subsection}>
            <h3 className={styles.subHeading}>
              <span className={styles.subNumber}>01</span>
              <span className={styles.subTitle}>The Process</span>
            </h3>
            <div className={styles.stages}>
              {stages.map((stage) => (
                <div className={styles.stage} key={stage.number}>
                  <span className={styles.node} aria-hidden="true" />
                  <span className={styles.number}>{stage.number}</span>
                  <h4 className={styles.stageTitle}>{stage.title}</h4>
                  <p className={styles.stageDesc}>{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className={`${styles.subsection} ${styles.subsectionStack}`}>
            <h3 className={styles.subHeading}>
              <span className={styles.subNumber}>02</span>
              <span className={styles.subTitle}>The Stack</span>
            </h3>
            <div className={styles.grid}>
              {categories.map((category) => (
                <div className={styles.category} key={category.label}>
                  <span className={styles.label}>{category.label}</span>
                  <ul className={styles.tools}>
                    {category.tools.map((tool) => (
                      <li className={styles.tool} key={tool}>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Approach
