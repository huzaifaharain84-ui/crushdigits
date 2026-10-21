const points = [
  'Professional and dependable service',
  'Clear, straightforward financial advice',
  'Support for both businesses and individuals',
  'Accurate, timely reporting',
  'Practical help with compliance',
]

export default function WhyUs() {
  return (
    <section className="why" id="about">
      <div className="container why-grid">
        <div className="about-copy">
          <span className="eyebrow">Why Crush Digits</span>
          <h2>Trusted accounting, tax and payroll support</h2>
          <p>
            Crush Digits Accountants Limited provides accounting, tax,
            payroll and business advisory services, helping startups,
            growing companies, contractors, established businesses and
            individuals stay organised, compliant and financially confident.
          </p>
          <p>
            We focus on clear communication and practical advice, so you
            can concentrate on running your business. We believe financial
            services should be professional, understandable and focused on
            what matters to each client.
          </p>
          <a className="btn" href="#contact">
            Start a Conversation
          </a>
        </div>
        <ul className="why-list">
          {points.map((point) => (
            <li key={point}>
              <b aria-hidden="true">✓</b>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
