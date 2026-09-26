import Reveal from '../Reveal/Reveal.jsx'
import styles from './About.module.css'

function About() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.inner}>
          <Reveal>
            <h2 className={styles.label}>About</h2>
          </Reveal>

          <div className={styles.right}>
            <Reveal>
              <p className={styles.statement}>
                I build systems that make business processes simpler.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className={styles.copy}>
                <p>
                  I&rsquo;m a workflow automation specialist focused on connecting tools,
                  reducing repetitive work, and building practical systems that help
                  businesses operate more efficiently.
                </p>
                <p>
                  My approach is straightforward: understand the process, identify what can
                  be improved, build the workflow, and make sure it works reliably in the
                  real world.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <p className={styles.tagline}>Automation • Integration • Process Improvement</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
