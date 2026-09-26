import { Fragment } from 'react'
import Reveal from '../Reveal/Reveal.jsx'
import styles from './CaseStudy.module.css'

function ProcessFlow({ steps }) {
  return (
    <div className={styles.flow}>
      {steps.map((step, i) => (
        <Fragment key={step}>
          <div className={styles.flowStep}>
            <span className={styles.flowNode} aria-hidden="true" />
            <span className={styles.flowLabel}>{step}</span>
          </div>
          {i < steps.length - 1 && <span className={styles.flowLink} aria-hidden="true" />}
        </Fragment>
      ))}
    </div>
  )
}

function ArchitectureDiagram() {
  return (
    <div className={styles.archWrap}>
      <svg
        className={styles.arch}
        viewBox="0 0 720 860"
        role="img"
        aria-label="CRM Sales Automation workflow architecture"
      >
      <defs>
        <marker
          id="archArrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path className={styles.archArrowHead} d="M 0 0 L 10 5 L 0 10 Z" />
        </marker>
      </defs>

      {/* lines */}
      <line className={styles.archLine} x1="360" y1="48" x2="360" y2="60" markerEnd="url(#archArrow)" />
      <line className={styles.archLine} x1="360" y1="112" x2="360" y2="152" markerEnd="url(#archArrow)" />
      <line className={styles.archLine} x1="360" y1="196" x2="360" y2="245" markerEnd="url(#archArrow)" />
      <line className={styles.archLine} x1="110" y1="245" x2="610" y2="245" />
      <line className={styles.archLine} x1="110" y1="245" x2="110" y2="290" markerEnd="url(#archArrow)" />
      <line className={styles.archLine} x1="360" y1="245" x2="360" y2="290" markerEnd="url(#archArrow)" />
      <line className={styles.archLine} x1="610" y1="245" x2="610" y2="290" markerEnd="url(#archArrow)" />
      <line className={styles.archLine} x1="360" y1="334" x2="360" y2="410" markerEnd="url(#archArrow)" />
      <line className={styles.archLine} x1="110" y1="334" x2="110" y2="480" />
      <line className={styles.archLine} x1="610" y1="334" x2="610" y2="480" />
      <line className={styles.archLine} x1="360" y1="454" x2="360" y2="480" />
      <line className={styles.archLine} x1="110" y1="480" x2="610" y2="480" />
      <line className={styles.archLine} x1="360" y1="480" x2="360" y2="540" markerEnd="url(#archArrow)" />
      <line className={styles.archLine} x1="360" y1="584" x2="360" y2="640" markerEnd="url(#archArrow)" />
      <line className={styles.archLine} x1="360" y1="684" x2="360" y2="740" markerEnd="url(#archArrow)" />

      {/* NEW LEAD label */}
      <text className={styles.archLabel} x="360" y="36" textAnchor="middle">
        New Lead
      </text>

      {/* Airtable */}
      <rect className={styles.archBox} x="285" y="60" width="150" height="52" />
      <text className={styles.archTitle} x="360" y="82" textAnchor="middle">
        Airtable
      </text>
      <text className={styles.archSub} x="360" y="100" textAnchor="middle">
        Leads
      </text>

      {/* n8n */}
      <rect className={styles.archBox} x="310" y="152" width="100" height="44" />
      <text className={styles.archTitle} x="360" y="180" textAnchor="middle">
        n8n
      </text>

      {/* Priority */}
      <rect className={styles.archBox} x="40" y="290" width="140" height="44" />
      <text className={styles.archTitle} x="110" y="318" textAnchor="middle">
        Priority
      </text>

      {/* Sales Owner */}
      <rect className={styles.archBox} x="285" y="290" width="150" height="44" />
      <text className={styles.archTitle} x="360" y="318" textAnchor="middle">
        Sales Owner
      </text>

      {/* Gmail */}
      <rect className={styles.archBox} x="550" y="290" width="120" height="44" />
      <text className={styles.archTitle} x="610" y="318" textAnchor="middle">
        Gmail
      </text>

      {/* Telegram (internal) */}
      <rect className={styles.archBox} x="295" y="410" width="130" height="44" />
      <text className={styles.archTitle} x="360" y="438" textAnchor="middle">
        Telegram
      </text>

      {/* Activity Logging */}
      <rect className={styles.archBox} x="275" y="540" width="170" height="44" />
      <text className={styles.archTitle} x="360" y="568" textAnchor="middle">
        Activity Logging
      </text>

      {/* Follow-up Monitoring */}
      <rect className={styles.archBox} x="260" y="640" width="200" height="44" />
      <text className={styles.archTitle} x="360" y="668" textAnchor="middle">
        Follow-up Monitoring
      </text>

      {/* Telegram (follow-up) */}
      <rect className={styles.archBox} x="295" y="740" width="130" height="44" />
      <text className={styles.archTitle} x="360" y="768" textAnchor="middle">
        Telegram
      </text>
      </svg>
    </div>
  )
}

function CaseStudy({ project, data }) {
  return (
    <div>
      <Reveal>
        <header className={styles.header}>
          <span className={styles.number}>{project.number}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{data.subtitle}</p>
          <ProcessFlow steps={data.processSteps} />
          <p className={styles.toolsLabel}>{data.toolsLabel}</p>
          {project.heroImage && (
            <img className={styles.heroImage} src={project.heroImage} alt={project.title} />
          )}
        </header>
      </Reveal>

      <Reveal>
        <section className={styles.block}>
          <h2 className={styles.blockHeading}>The Problem</h2>
          <div className={styles.paragraphs}>
            {data.problem.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.block}>
          <h2 className={styles.blockHeading}>The Solution</h2>
          <div className={styles.paragraphs}>
            {data.solution.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.block}>
          <h2 className={styles.blockHeading}>How the Process Works</h2>
          <div className={styles.steps}>
            {data.howItWorks.map((step) => (
              <div className={styles.step} key={step.number}>
                <div className={styles.stepHead}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
                <p className={styles.stepBody}>{step.body}</p>
                {step.items && (
                  <ul className={styles.stepItems}>
                    {step.items.map((item) => (
                      <li className={styles.stepItem} key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.block}>
          <h2 className={styles.blockHeading}>Workflow Architecture</h2>
          <ArchitectureDiagram />
          {project.workflowImage && (
            <img
              className={styles.workflowImage}
              src={project.workflowImage}
              alt={`${project.title} workflow`}
            />
          )}
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.block}>
          <h2 className={styles.blockHeading}>Tools &amp; Integrations</h2>
          <div className={styles.tools}>
            {data.tools.map((tool) => (
              <div className={styles.tool} key={tool.name}>
                <span className={styles.toolName}>{tool.name}</span>
                <p className={styles.toolDesc}>{tool.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.block}>
          <h2 className={styles.blockHeading}>What the Automation Improves</h2>
          <ul className={styles.improvements}>
            {data.improvements.map((item) => (
              <li className={styles.improvement} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>
    </div>
  )
}

export default CaseStudy
