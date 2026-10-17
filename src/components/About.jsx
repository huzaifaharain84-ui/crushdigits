export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="eyebrow">About Crush Digits</span>
          <h2>A straightforward approach to accounting.</h2>
          <p>
            Crush Digits Accountants Limited provides accounting, tax,
            payroll and business advisory services.
          </p>
          <p>
            We believe financial services should be professional,
            understandable and focused on what matters to each client.
          </p>
          <a className="btn" href="#contact">
            Start a Conversation
          </a>
        </div>
        <div className="about-box">
          <div className="number">4</div>
          <p className="about-box-sub">
            core service areas: accounting, tax, business advisory and
            payroll.
          </p>
          <hr className="about-rule" />
          <ul className="about-points">
            <li>
              <b>Clear communication</b>
              <span>Plain-language explanations, without the jargon.</span>
            </li>
            <li>
              <b>Practical advice</b>
              <span>Support focused on what matters to your business.</span>
            </li>
            <li>
              <b>Professional service</b>
              <span>Organised, dependable and compliance-minded.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
