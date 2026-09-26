import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import projects from '../../data/projects.js'
import Reveal from '../Reveal/Reveal.jsx'
import styles from './SelectedWork.module.css'

const featured = projects[0]
const supporting = projects.slice(1)

function SelectedWork() {
  const handleViewProject = () => {
    sessionStorage.setItem('projectsScrollPosition', String(window.scrollY))
  }

  return (
    <section className={styles.section} id="work">
      <div className="container">
        <Reveal>
          <div className={styles.head}>
            <h2 className={styles.heading}>Selected Automations</h2>
            <p className={styles.sub}>
              A selection of workflow systems I&rsquo;ve built to automate repetitive
              processes, connect business tools, and improve day-to-day operations.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <article className={styles.featured}>
            <span className={styles.number}>{featured.number}</span>
            <h3 className={styles.featuredTitle}>{featured.title}</h3>
            <p className={styles.desc}>{featured.description}</p>
            <p className={styles.tools}>
              <span className={styles.toolsLabel}>Tools</span>
              {featured.tools.join(' · ')}
            </p>
            <Link className={styles.link} to={`/projects/${featured.slug}`} onClick={handleViewProject}>
              View Project
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </article>
        </Reveal>

        <Reveal delay={160}>
          <div className={styles.grid}>
            {supporting.map((project) => (
              <article className={styles.card} key={project.number}>
                <span className={styles.number}>{project.number}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <p className={styles.tools}>{project.tools.join(' · ')}</p>
                <Link className={styles.link} to={`/projects/${project.slug}`} onClick={handleViewProject}>
                  View Project
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default SelectedWork
