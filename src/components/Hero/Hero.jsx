import { ArrowRight } from 'lucide-react'
import Button from '../Button/Button.jsx'
import styles from './Hero.module.css'

const W = 1200
const H = 800
const HORIZON = 320
const VANISH_X = 600

const gridLines = (() => {
  const lines = []

  for (let i = 1; i <= 18; i += 1) {
    const t = i / 18
    const y = HORIZON + (H - HORIZON) * t * t
    lines.push({ x1: 0, y1: y, x2: W, y2: y })
  }

  for (let i = 0; i <= 30; i += 1) {
    const t = i / 30 - 0.5
    lines.push({ x1: VANISH_X, y1: HORIZON, x2: VANISH_X + t * 1800, y2: H })
  }

  return lines
})()

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <svg
        className={styles.grid}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {gridLines.map((line, i) => (
          <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} />
        ))}
      </svg>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>Automation without the busywork.</h1>

          <p className={styles.lead}>
            I build practical business automation systems that eliminate repetitive
            tasks, connect your tools, and keep your workflows moving.
          </p>

          <div className={styles.actions}>
            <Button href="#work">
              See My Work
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="secondary">
              Let&rsquo;s Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
