export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <img
            src="/wordmark.png"
            alt="Crush Digits Accountants Limited wordmark"
            className="wordmark-image"
          />
          <p className="company-name">Crush Digits Accountants Limited</p>
          <span className="badge">ACCOUNTING • TAX • PAYROLL • ADVISORY</span>
          <h1>Clarity in your numbers. Confidence in your business.</h1>
          <p>
            Professional accounting, tax, payroll and advisory support
            designed to help businesses and individuals stay organised,
            compliant and ready for the next stage of growth.
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
            <span>Accounting services</span>
          </div>
          <div className="check">
            <b>✓</b>
            <span>Tax services</span>
          </div>
          <div className="check">
            <b>✓</b>
            <span>Business advisory</span>
          </div>
          <div className="check">
            <b>✓</b>
            <span>Audit &amp; assurance</span>
          </div>
          <div className="check">
            <b>✓</b>
            <span>Payroll &amp; employer services</span>
          </div>
        </div>
      </div>
    </section>
  )
}
