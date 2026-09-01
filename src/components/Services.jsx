const services = [
  {
    icon: '£',
    title: 'Accounting',
    text: 'Reliable accounting support to help you understand your financial position and keep your records organised.',
  },
  {
    icon: '✓',
    title: 'Bookkeeping',
    text: 'Accurate, structured bookkeeping so your day-to-day financial records stay clear and up to date.',
  },
  {
    icon: '%',
    title: 'Tax Consultancy',
    text: 'Practical tax guidance to help you understand your responsibilities and approach tax with confidence.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2>Professional services for your financial needs</h2>
          <p>
            From keeping your books in order to supporting your tax
            obligations, we help make your finances easier to manage.
          </p>
        </div>
        <div className="cards">
          {services.map((service) => (
            <div className="card" key={service.title}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
