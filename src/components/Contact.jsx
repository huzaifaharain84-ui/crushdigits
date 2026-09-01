import { useState } from 'react'

const initialForm = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('sent')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message)
    }
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
              <small>Phone</small>
              <strong>03300431234</strong>
            </div>
            <div className="contact-item">
              <small>Website</small>
              <strong>crushdigits.co.uk</strong>
            </div>
            {/* Note: the Footer now shows crushdigits.vercel.app per your latest request —
                left this contact-info entry as crushdigits.co.uk since you only asked
                for the footer change. Let me know if you want this one updated too. */}
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
            <button className="btn" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
            </button>
            {status === 'sent' && (
              <p style={{ color: '#1e63b5', fontWeight: 600 }}>
                Thank you — your enquiry has been sent. We'll be in touch
                soon.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#b3261e', fontWeight: 600 }}>{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
