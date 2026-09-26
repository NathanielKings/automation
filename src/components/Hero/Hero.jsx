import { ArrowRight } from 'lucide-react'
import Button from '../Button/Button.jsx'
import styles from './Hero.module.css'

const W = 1200
const H = 800
const VPX = 600
const VPY = 400
const WALL = { l: 460, r: 740, t: 300, b: 500 }

const roomSegments = (() => {
  const segs = []

  // Room corner edges (back wall corners -> outer frame corners)
  segs.push([WALL.l, WALL.t, 0, 0])
  segs.push([WALL.r, WALL.t, W, 0])
  segs.push([WALL.l, WALL.b, 0, H])
  segs.push([WALL.r, WALL.b, W, H])

  // Back wall grid
  for (let i = 1; i < 8; i += 1) {
    const x = WALL.l + ((WALL.r - WALL.l) * i) / 8
    segs.push([x, WALL.t, x, WALL.b])
  }
  for (let i = 1; i < 6; i += 1) {
    const y = WALL.t + ((WALL.b - WALL.t) * i) / 6
    segs.push([WALL.l, y, WALL.r, y])
  }

  // Floor — receding horizontal lines + radial lines
  for (let i = 1; i <= 10; i += 1) {
    const t = i / 10
    const y = WALL.b + (H - WALL.b) * t * t
    const xl = WALL.l - WALL.l * ((y - WALL.b) / (H - WALL.b))
    const xr = WALL.r + (W - WALL.r) * ((y - WALL.b) / (H - WALL.b))
    segs.push([xl, y, xr, y])
  }
  for (let i = 0; i <= 20; i += 1) {
    const bx = (W * i) / 20
    const xAtWall = VPX + (bx - VPX) * ((WALL.b - VPY) / (H - VPY))
    segs.push([xAtWall, WALL.b, bx, H])
  }

  // Ceiling — receding horizontal lines + radial lines
  for (let i = 1; i <= 8; i += 1) {
    const t = i / 8
    const y = WALL.t - WALL.t * t * t
    const xl = WALL.l - WALL.l * ((WALL.t - y) / WALL.t)
    const xr = WALL.r + (W - WALL.r) * ((WALL.t - y) / WALL.t)
    segs.push([xl, y, xr, y])
  }
  for (let i = 0; i <= 20; i += 1) {
    const tx = (W * i) / 20
    const xAtWall = VPX + (tx - VPX) * ((VPY - WALL.t) / VPY)
    segs.push([xAtWall, WALL.t, tx, 0])
  }

  // Left wall
  for (let i = 1; i < 7; i += 1) {
    const x = (WALL.l * i) / 7
    const yTop = (WALL.t / WALL.l) * x
    const yBottom = WALL.b + (H - WALL.b) * ((WALL.l - x) / WALL.l)
    segs.push([x, yTop, x, yBottom])
  }
  for (let i = 1; i < 6; i += 1) {
    const t = i / 6
    const y1 = WALL.t + (WALL.b - WALL.t) * t
    const y2 = H * t
    segs.push([WALL.l, y1, 0, y2])
  }

  // Right wall
  for (let i = 1; i < 7; i += 1) {
    const x = WALL.r + ((W - WALL.r) * i) / 7
    const yTop = WALL.t * ((W - x) / (W - WALL.r))
    const yBottom = WALL.b + (H - WALL.b) * ((x - WALL.r) / (W - WALL.r))
    segs.push([x, yTop, x, yBottom])
  }
  for (let i = 1; i < 6; i += 1) {
    const t = i / 6
    const y1 = WALL.t + (WALL.b - WALL.t) * t
    const y2 = H * t
    segs.push([WALL.r, y1, W, y2])
  }

  return segs
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
        {roomSegments.map((seg, i) => (
          <line key={i} x1={seg[0]} y1={seg[1]} x2={seg[2]} y2={seg[3]} />
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
