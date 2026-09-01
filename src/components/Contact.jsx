import { useState } from 'react'

const initialForm = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire this up to a real endpoint (e.g. a Vercel serverless
    // function under /api, or a form service like Formspree) before
    // publishing. Nothing is sent anywhere yet.
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Contact</span>
          <h2>Let's talk about your accounting needs</h2>
          <p>Send us a message and we can discuss how we can support you.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Crush Digits Accountants Limited</h3>
            <div className="contact-item">
              <small>Registered office</small>
              <strong>
                333 Leeds Road
                <br />
                Huddersfield, England
                <br />
                HD2 1YB
              </strong>
            </div>
            <div className="contact-item">
              <small>Company number</small>
              <strong>16386067</strong>
            </div>
            <div className="contact-item">
              <small>Website</small>
              <strong>crushdigits.co.uk</strong>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              required
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              name="phone"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
            />
            <textarea
              required
              name="message"
              placeholder="How can we help?"
              value={form.message}
              onChange={handleChange}
            />
            <button className="btn" type="submit">
              Send Enquiry
            </button>
            {submitted && (
              <p style={{ color: '#1e63b5', fontWeight: 600 }}>
                Thank you — your message has been noted. (Connect this
                form to a real backend before going live.)
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
