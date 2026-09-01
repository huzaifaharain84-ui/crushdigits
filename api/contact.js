// Vercel Serverless Function — runs on Node.js, not in the browser.
// Anything placed in /api at the project root is auto-deployed by
// Vercel as its own endpoint: this file becomes POST /api/contact.
//
// It currently validates the submission and logs it. To actually
// deliver enquiries to an inbox, plug in an email provider where
// marked below (Resend is used as the example) and set the
// RESEND_API_KEY environment variable in the Vercel project settings.

const RECIPIENT_EMAIL = 'info@crushdigits.co.uk'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, message } = req.body ?? {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  try {
    // --- Plug in real email delivery here -------------------------
    // Example using Resend (https://resend.com). Once you have a
    // RESEND_API_KEY, uncomment this block — enquiries will then be
    // forwarded to RECIPIENT_EMAIL (info@crushdigits.co.uk), with
    // reply_to set to the enquirer's own address so you can hit
    // "Reply" directly.
    //
    // const resendResponse = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: 'Crush Digits Website <enquiries@crushdigits.co.uk>',
    //     to: [RECIPIENT_EMAIL],
    //     reply_to: email,
    //     subject: `New enquiry from ${name}`,
    //     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'n/a'}\n\n${message}`,
    //   }),
    // })
    // if (!resendResponse.ok) throw new Error('Email provider rejected the request')
    // ----------------------------------------------------------------

    // Until an email provider is wired in, at least log the enquiry
    // so it's visible in the Vercel function logs.
    console.log(`New contact enquiry (would forward to ${RECIPIENT_EMAIL}):`, {
      name,
      email,
      phone,
      message,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Failed to process enquiry:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' })
  }
}
