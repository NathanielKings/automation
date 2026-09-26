import Reveal from '../Reveal/Reveal.jsx'
import styles from './Stack.module.css'

const categories = [
  { label: 'Automation', tools: ['n8n', 'Zapier', 'Make'] },
  { label: 'Databases & CRM', tools: ['Airtable', 'Google Sheets'] },
  { label: 'Communication', tools: ['Gmail', 'Telegram'] },
  {
    label: 'Documents & Integrations',
    tools: ['Google Docs', 'PDF.co', 'DocuSign'],
  },
]

function Stack() {
  return (
    <section className={styles.section} id="stack">
      <div className="container">
        <Reveal>
          <div className={styles.head}>
            <h2 className={styles.heading}>The Stack</h2>
            <p className={styles.sub}>The tools I use to build reliable, connected workflows.</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
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
        </Reveal>
      </div>
    </section>
  )
}

export default Stack
