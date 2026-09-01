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

          <dl className="company-details">
            <div>
              <dt>Registered office</dt>
              <dd>333 Leeds Road, Huddersfield, England, HD2 1YB</dd>
            </div>
            <div>
              <dt>Company number</dt>
              <dd>16386067</dd>
            </div>
            <div>
              <dt>Company status</dt>
              <dd>Active</dd>
            </div>
            <div>
              <dt>Company type</dt>
              <dd>Private Limited Company</dd>
            </div>
            <div>
              <dt>Incorporated on</dt>
              <dd>14 April 2025</dd>
            </div>
            <div>
              <dt>Accounts</dt>
              <dd>
                First accounts made up to 30 April 2026
                <br />
                Due by 14 January 2027
              </dd>
            </div>
            <div>
              <dt>Confirmation statement</dt>
              <dd>
                Next statement date 13 April 2027, due by 27 April 2027
                <br />
                Last statement dated 13 April 2026
              </dd>
            </div>
            <div>
              <dt>Nature of business (SIC)</dt>
              <dd>
                69201 – Accounting and auditing activities
                <br />
                69202 – Bookkeeping activities
                <br />
                69203 – Tax consultancy
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
