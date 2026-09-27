import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <h1 className={styles.title}>Page not found</h1>
          <Link className={styles.back} to="/">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
