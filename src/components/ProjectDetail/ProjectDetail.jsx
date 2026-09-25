import { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import projects from '../../data/projects.js'
import styles from './ProjectDetail.module.css'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className={styles.section}>
        <div className="container">
          <div className={styles.notFound}>
            <h1 className={styles.notFoundTitle}>Project not found</h1>
            <Link className={styles.back} to="/">
              <ArrowLeft size={16} aria-hidden="true" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const whatItDoes = `${project.title} ties together ${project.tools.join(', ')} to run the whole process automatically, removing the manual steps in between.`

  return (
    <section className={styles.section}>
      <div className="container">
        <Link className={styles.back} to="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Projects
        </Link>

        <header className={styles.header}>
          <span className={styles.number}>{project.number}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.desc}>{project.description}</p>
          <p className={styles.tools}>
            <span className={styles.toolsLabel}>Tools</span>
            {project.tools.join(' · ')}
          </p>
        </header>

        <div className={styles.body}>
          <section className={styles.block}>
            <h2 className={styles.blockHeading}>What it does</h2>
            <p className={styles.blockText}>{whatItDoes}</p>
          </section>

          <section className={styles.block}>
            <h2 className={styles.blockHeading}>Workflow</h2>
            <div className={styles.flow}>
              {project.tools.map((tool, i) => (
                <Fragment key={tool}>
                  <span className={styles.flowStep}>{tool}</span>
                  {i < project.tools.length - 1 && (
                    <ArrowRight className={styles.flowArrow} size={16} aria-hidden="true" />
                  )}
                </Fragment>
              ))}
            </div>
          </section>

          <section className={styles.block}>
            <h2 className={styles.blockHeading}>Demo</h2>
            <div className={styles.demo}>
              {project.demoUrl ? (
                <a
                  className={styles.demoLink}
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch Demo
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              ) : (
                <p className={styles.demoPlaceholder}>Demo coming soon.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
