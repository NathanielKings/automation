import { ArrowRight } from 'lucide-react'
import styles from './SelectedWork.module.css'

const featured = {
  number: '01',
  title: 'CRM Sales Automation',
  description:
    'A CRM workflow that automates lead assignment, follow-ups, notifications, activity logging, and daily sales reporting.',
  tools: ['Airtable', 'n8n', 'Gmail', 'Telegram'],
}

const projects = [
  {
    number: '02',
    title: 'Certificate Generator',
    description:
      'An automated document workflow that takes participant information from an Excel file, generates personalized certificates as PDFs, and sends them by email.',
    tools: ['Excel', 'Google Sheets', 'Google Docs', 'Zapier', 'n8n'],
  },
  {
    number: '03',
    title: 'Gym Membership Automation',
    description:
      'A membership workflow that automates new-member onboarding, payment status updates, confirmation messages, and renewal reminders.',
    tools: ['Airtable', 'n8n', 'Gmail', 'Telegram'],
  },
  {
    number: '04',
    title: 'Document Signing Workflow',
    description:
      'An automated document workflow that generates documents, sends them for electronic signature, and manages the signing process.',
    tools: ['PDF.co', 'DocuSign'],
  },
]

function SelectedWork() {
  return (
    <section className={styles.section} id="work">
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.heading}>Selected Automations</h2>
          <p className={styles.sub}>
            A selection of workflow systems I&rsquo;ve built to automate repetitive
            processes, connect business tools, and improve day-to-day operations.
          </p>
        </div>

        <article className={styles.featured}>
          <span className={styles.number}>{featured.number}</span>
          <h3 className={styles.featuredTitle}>{featured.title}</h3>
          <p className={styles.desc}>{featured.description}</p>
          <p className={styles.tools}>
            <span className={styles.toolsLabel}>Tools</span>
            {featured.tools.join(' · ')}
          </p>
          <a className={styles.link} href="#">
            View Project
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </article>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article className={styles.card} key={project.number}>
              <span className={styles.number}>{project.number}</span>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <p className={styles.tools}>{project.tools.join(' · ')}</p>
              <a className={styles.link} href="#">
                View Project
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SelectedWork
