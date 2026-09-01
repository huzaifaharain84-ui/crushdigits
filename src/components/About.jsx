export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="eyebrow">About Crush Digits</span>
          <h2>A straightforward approach to accounting.</h2>
          <p>
            Crush Digits Accountants Limited is a UK private limited
            company providing accounting, bookkeeping and tax consultancy
            services.
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
          <div className="number">2025</div>
          <p style={{ marginTop: 12, color: '#d8e2ef' }}>
            Established in the UK and focused on delivering clear,
            practical financial support.
          </p>
          <hr style={{ border: 0, borderTop: '1px solid #36516e', margin: '28px 0' }} />
          <p style={{ color: '#d8e2ef' }}>
            <strong style={{ color: '#fff' }}>Company No.</strong>
            <br />
            16386067
          </p>
        </div>
      </div>
    </section>
  )
}
