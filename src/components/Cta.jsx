import CtaPerson from './CtaPerson.jsx'

export default function Cta() {
  return (
    <section className="cta">
      <div className="container cta-grid">
        <div className="cta-copy">
          <h2>Helping your business grow</h2>
          <p>
            From bookkeeping and payroll to tax planning and business advice,
            we support each stage of your financial journey. Tell us what you
            need and start a conversation with Crush Digits Accountants Limited.
          </p>
          <a className="btn" href="#contact">
            Get in Touch
          </a>
        </div>
        <div className="cta-visual">
          <CtaPerson />
        </div>
      </div>
    </section>
  )
}
