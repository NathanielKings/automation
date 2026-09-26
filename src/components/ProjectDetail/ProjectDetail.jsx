import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import projects from '../../data/projects.js'
import caseStudies from '../../data/caseStudies.js'
import { getYouTubeEmbedUrl } from '../../utils/youtube.js'
import Reveal from '../Reveal/Reveal.jsx'
import CaseStudy from '../CaseStudy/CaseStudy.jsx'
import styles from './ProjectDetail.module.css'

function BackLink() {
  return (
    <Link className={styles.back} to="/projects">
      <ArrowLeft size={16} aria-hidden="true" />
      Back to Projects
    </Link>
  )
}

function Media({ project }) {
  const embedUrl = getYouTubeEmbedUrl(project.demoUrl)

  return (
    <>
      {project.screenshots && project.screenshots.length > 0 && (
        <Reveal>
          <section className={styles.block}>
            <h2 className={styles.blockHeading}>Screenshots</h2>
            <div className={styles.screenshots}>
              {project.screenshots.map((src, i) => (
                <img
                  className={styles.screenshot}
                  key={`${src}-${i}`}
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                />
              ))}
            </div>
          </section>
        </Reveal>
      )}

      {embedUrl && (
        <Reveal>
          <section className={styles.block}>
            <h2 className={styles.blockHeading}>Watch the demo</h2>
            <iframe
              className={styles.videoFrame}
              src={embedUrl}
              title={`${project.title} demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </section>
        </Reveal>
      )}
    </>
  )
}

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

  const caseStudy = caseStudies[slug]

  if (caseStudy) {
    return (
      <section className={styles.section}>
        <div className="container">
          <BackLink />
          <CaseStudy project={project} data={caseStudy} />
          <Media project={project} />
        </div>
      </section>
    )
  }

  const whatItDoes = `${project.title} ties together ${project.tools.join(', ')} to run the whole process automatically, removing the manual steps in between.`

  return (
    <section className={styles.section}>
      <div className="container">
        <BackLink />

        <Reveal>
          <header className={styles.header}>
            <span className={styles.number}>{project.number}</span>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.desc}>{project.description}</p>
            <p className={styles.tools}>
              <span className={styles.toolsLabel}>Tools</span>
              {project.tools.join(' · ')}
            </p>
            {project.heroImage && (
              <img className={styles.heroImage} src={project.heroImage} alt={project.title} />
            )}
          </header>
        </Reveal>

        <div className={styles.body}>
          <Reveal>
            <section className={styles.block}>
              <h2 className={styles.blockHeading}>What it does</h2>
              <p className={styles.blockText}>{whatItDoes}</p>
            </section>
          </Reveal>

          {project.workflowImage && (
            <Reveal>
              <section className={styles.block}>
                <h2 className={styles.blockHeading}>Workflow</h2>
                <img
                  className={styles.workflowImage}
                  src={project.workflowImage}
                  alt={`${project.title} workflow`}
                />
              </section>
            </Reveal>
          )}

          <Media project={project} />
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
