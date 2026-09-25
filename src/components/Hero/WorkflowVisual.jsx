import { Fragment } from 'react'
import { Database, Workflow, Mail, Send, Check } from 'lucide-react'
import styles from './WorkflowVisual.module.css'

const steps = [
  { id: 'airtable', icon: Database, name: 'Airtable', role: 'Trigger' },
  { id: 'n8n', icon: Workflow, name: 'n8n', role: 'Automate' },
  { id: 'gmail', icon: Mail, name: 'Gmail', role: 'Deliver' },
  { id: 'telegram', icon: Send, name: 'Telegram', role: 'Notify' },
]

function WorkflowVisual() {
  return (
    <div className={styles.card} aria-hidden="true">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.statusDot} />
          <span className={styles.headerTitle}>Automation flow</span>
        </div>
        <span className={styles.badge}>Active</span>
      </div>

      <ol className={styles.flow}>
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <Fragment key={step.id}>
              {i > 0 && (
                <li className={styles.connector} aria-hidden="true">
                  <span
                    className={styles.pulse}
                    style={{ animationDelay: `${(i - 1) * 0.4}s` }}
                  />
                </li>
              )}
              <li className={styles.node}>
                <span className={styles.icon}>
                  <Icon size={18} />
                </span>
                <span className={styles.meta}>
                  <span className={styles.name}>{step.name}</span>
                  <span className={styles.role}>{step.role}</span>
                </span>
                <span className={styles.check}>
                  <Check size={14} strokeWidth={3} />
                </span>
              </li>
            </Fragment>
          )
        })}
      </ol>
    </div>
  )
}

export default WorkflowVisual
