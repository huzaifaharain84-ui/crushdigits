import { serviceGroups } from '../data/services.js'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">Crush Digits Accountants Limited</div>
            <ul className="footer-contact">
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                <span>333 Leeds Road, Huddersfield, HD2 1YB</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
                <a href="tel:03300431234">03300431234</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
                </svg>
                <a href="mailto:info@crushdigits.co.uk">info@crushdigits.co.uk</a>
              </li>
            </ul>
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
        <div className="legal">© 2026 Crush Digits Accountants Limited.</div>
      </div>
    </footer>
  )
}
