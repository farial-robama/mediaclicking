import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const stats = [
  { value: 500, suffix: '+', label: 'Clients Served' },
  { value: 300, suffix: '%', label: 'Average ROI Boost' },
  { value: 8, suffix: '+', label: 'Years of Experience' },
  { value: 98, suffix: '%', label: 'Client Retention Rate' },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const duration = 1800
        const step = (timestamp) => {
          if (!start) start = timestamp
          const progress = Math.min((timestamp - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * value))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__bg" />
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <div key={i} className="stats__item">
            <div className="stats__value">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="stats__label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
