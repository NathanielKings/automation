import { Zap, Star, ArrowUpRight, MoreHorizontal } from 'lucide-react'
import styles from './WorkflowCard.module.css'

function WorkflowCard({ badge, title, sub }) {
  return (
    <div className={styles.card}>
      <div className={styles.badge}>
        <Zap size={11} aria-hidden="true" />
        {badge}
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.sub}>{sub}</p>
      <div className={styles.footer} aria-hidden="true">
        <Star size={13} />
        <ArrowUpRight size={13} />
        <MoreHorizontal size={13} />
      </div>
    </div>
  )
}

export default WorkflowCard
