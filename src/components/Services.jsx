import { serviceGroups } from '../data/services.js'

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2>Professional services for your financial needs</h2>
          <p>
            From everyday bookkeeping and payroll to tax planning and
            business advice, we help make your finances easier to manage.
          </p>
        </div>
        <div className="cards cards-four">
          {serviceGroups.map((group) => (
            <div
              className="card"
              key={group.id}
              id={`service-${group.id}`}
              data-tone={group.tone}
            >
              <div className="icon" aria-hidden="true">{group.icon}</div>
              <h3>{group.title}</h3>
              <ul className="service-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
