const points = [
  'Professional and dependable service',
  'Clear, straightforward financial advice',
  'Support for both businesses and individuals',
  'Accurate, timely reporting',
  'Practical help with compliance',
]

export default function WhyUs() {
  return (
    <section className="why" id="why-us">
      <div className="container why-grid">
        <div className="about-copy">
          <span className="eyebrow">Why Crush Digits</span>
          <h2>Trusted accounting, tax and payroll support</h2>
          <p>
            Crush Digits Accountants Limited helps startups, growing
            companies, contractors, established businesses and individuals
            stay organised, compliant and financially confident.
          </p>
          <p>
            We focus on clear communication and practical advice, so you
            can concentrate on running your business.
          </p>
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
