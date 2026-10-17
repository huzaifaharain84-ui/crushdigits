import HeroScene from './HeroScene.jsx'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="badge">ACCOUNTING • TAX • PAYROLL • ADVISORY</span>
          <h1>Clarity in your numbers. Confidence in your business.</h1>
          <p>
            Professional accounting, tax, payroll and advisory support
            designed to help businesses and individuals stay organised,
            compliant and ready for the next stage of growth.
          </p>
          <a className="btn" href="#contact">
            Get in Touch
          </a>
          <a className="btn secondary" href="#services">
            Our Services
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden={false}>
        <span className="hero-ribbon hero-ribbon-gold" aria-hidden="true" />
        <span className="hero-ribbon hero-ribbon-green" aria-hidden="true" />
        <div className="hero-image">
          <HeroScene />
        </div>
      </div>
    </section>
  )
}
