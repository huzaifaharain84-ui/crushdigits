import { serviceGroups } from '../data/services.js'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">Crush Digits Accountants Limited</div>
            <p className="footer-text">
              333 Leeds Road
              <br />
              Huddersfield, England, HD2 1YB
              <br />
              <a href="tel:03300431234">Phone: 03300431234</a>
              <br />
              <a href="mailto:info@crushdigits.co.uk">info@crushdigits.co.uk</a>
            </p>
          </div>
          <ul className="footer-links">
            {serviceGroups.map((g) => (
              <li key={g.id}>
                <a href="#services">{g.title}</a>
              </li>
            ))}
          </ul>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="legal">
          © 2026 Crush Digits Accountants Limited. Company No. 16386067.
          Registered office: 333 Leeds Road, Huddersfield, England, HD2
          1YB. Website: crushdigits.vercel.app
        </div>
      </div>
    </footer>
  )
}
