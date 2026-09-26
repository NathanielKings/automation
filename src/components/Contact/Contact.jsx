import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal/Reveal.jsx'
import styles from './Contact.module.css'

function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <Reveal>
              <span className={styles.eyebrow}>Let&rsquo;s Automate Something</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className={styles.heading}>Have a process that should be simpler?</h2>
            </Reveal>
          </div>

          <div className={styles.right}>
            <Reveal delay={120}>
              <p className={styles.text}>
                Tell me what you&rsquo;re doing manually. I&rsquo;ll help you identify what can
                be automated and how the workflow could work.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <a className={styles.cta} href="mailto:oyedokunadebayon@gmail.com">
                Start a Conversation
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </Reveal>

            <Reveal delay={240}>
              <div className={styles.contacts}>
                <a className={styles.contactLink} href="mailto:oyedokunadebayon@gmail.com">
                  Email
                </a>
                <a
                  className={styles.contactLink}
                  href="https://www.linkedin.com/in/oyedokunadebayo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className={styles.contactLink}
                  href="https://github.com/NathanielKings"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
