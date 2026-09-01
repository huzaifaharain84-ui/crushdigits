export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          {/* Wordmark placeholder — swap this div for an <img src="/wordmark.svg" ...>
              (or .png) once the logo asset is ready. */}
          <div className="wordmark-placeholder" aria-label="Wordmark placeholder">
            <span>Wordmark / logo goes here</span>
          </div>
          <p className="company-name">Crush Digits Accountants Limited</p>
          <span className="badge">ACCOUNTING • BOOKKEEPING • TAX</span>
          <h1>Clarity in your numbers. Confidence in your business.</h1>
          <p>
            Professional accounting and tax support designed to help
            businesses stay organised, compliant and ready for the next
            stage of growth.
          </p>
          <a className="btn" href="#contact">
            Speak to Us
          </a>
          <a className="btn secondary" href="#services">
            Our Services
          </a>
        </div>
        <div className="hero-card">
          <h3>Accounting made simpler.</h3>
          <p>Practical financial support with a clear, professional approach.</p>
          <div className="check">
            <b>✓</b>
            <span>Accounting & auditing support</span>
          </div>
          <div className="check">
            <b>✓</b>
            <span>Bookkeeping services</span>
          </div>
          <div className="check">
            <b>✓</b>
            <span>Tax consultancy</span>
          </div>
          <div className="check">
            <b>✓</b>
            <span>Business-focused guidance</span>
          </div>
        </div>
      </div>
    </section>
  )
}
