import './Marquee.css'

const clients = [
  'TechNova', 'BrandForge', 'PixelVault', 'CloudBase', 'Nexify',
  'LaunchPad', 'CoreSpark', 'MetaBloom', 'GridZone', 'PulseHQ',
]

export default function Marquee() {
  return (
    <section className="marquee-section">
      <p className="marquee-label">Trusted by industry leaders</p>
      <div className="marquee-track">
        <div className="marquee-inner">
          {[...clients, ...clients].map((c, i) => (
            <span key={i} className="marquee-item">{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
