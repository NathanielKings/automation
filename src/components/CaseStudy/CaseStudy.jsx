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

function ArchitectureDiagram({ architecture }) {
  const { viewBox, labels = [], nodes = [], edges = [] } = architecture

  return (
    <div className={styles.archWrap}>
      <svg className={styles.arch} viewBox={viewBox} role="img" aria-label="Workflow architecture">
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

        {edges.map((edge, i) => (
          <line
            key={i}
            className={styles.archLine}
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            markerEnd={edge.arrow ? 'url(#archArrow)' : undefined}
          />
        ))}

        {labels.map((label, i) => (
          <text key={i} className={styles.archLabel} x={label.x} y={label.y} textAnchor="middle">
            {label.text}
          </text>
        ))}

        {nodes.map((node, i) => {
          const cx = node.x + node.w / 2
          const titleY = node.sub ? node.y + node.h / 2 - 2 : node.y + node.h / 2 + 5
          return (
            <Fragment key={i}>
              <rect className={styles.archBox} x={node.x} y={node.y} width={node.w} height={node.h} />
              <text className={styles.archTitle} x={cx} y={titleY} textAnchor="middle">
                {node.title}
              </text>
              {node.sub && (
                <text className={styles.archSub} x={cx} y={titleY + 18} textAnchor="middle">
                  {node.sub}
                </text>
              )}
            </Fragment>
          )
        })}
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
          <ArchitectureDiagram architecture={data.architecture} />
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
