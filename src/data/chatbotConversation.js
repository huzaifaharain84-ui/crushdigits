// Data-driven conversation tree for the Crush Digits chat assistant.
//
// This is a deterministic, pre-authored conversation — NOT an AI chatbot.
// Every message and option below is fixed content. Editing the wording or
// adding/removing branches only requires editing this file; the UI in
// Chatbot.jsx simply walks this tree.
//
// Node shape:
// {
//   id: string
//   messages: string[]              // one or more short bot bubbles, shown in order
//   options: [{
//     label: string                 // button text shown to the visitor
//     next?: string                 // id of the next node to move to
//     action?: 'contact' | 'restart' // special action instead of / alongside `next`
//     event?: string                 // analytics event name (see CHATBOT_EVENTS)
//   }]
// }

export const CONTACT_PHONE = '03300431234'
export const CONTACT_PHONE_DISPLAY = '0330 043 1234'

export const CHATBOT_EVENTS = {
  OPENED: 'chatbot_opened',
  CLOSED: 'chatbot_closed',
  OPTION_SELECTED: 'chatbot_option_selected',
  SERVICE_INTEREST_SELECTED: 'service_interest_selected',
  PRICING_QUESTION: 'pricing_question',
  CONTACT_CLICKED: 'contact_clicked',
  QUOTE_CLICKED: 'quote_clicked',
  RESTARTED: 'conversation_restarted',
}

export const START_NODE = 'root'

export const conversationNodes = {
  root: {
    id: 'root',
    messages: [
      'Hi! 👋 Welcome to Crush Digits Accountants Limited.',
      'I can help point you toward the right service or get you in touch with our team. What would you like to do?',
    ],
    options: [
      { label: 'Accounting services', next: 'accounting', event: CHATBOT_EVENTS.SERVICE_INTEREST_SELECTED },
      { label: 'Tax services', next: 'tax', event: CHATBOT_EVENTS.SERVICE_INTEREST_SELECTED },
      { label: 'Payroll & employer services', next: 'payroll', event: CHATBOT_EVENTS.SERVICE_INTEREST_SELECTED },
      { label: 'Business startup & advisory', next: 'advisory', event: CHATBOT_EVENTS.SERVICE_INTEREST_SELECTED },
      { label: 'Pricing', next: 'pricing', event: CHATBOT_EVENTS.PRICING_QUESTION },
      { label: "I'm not sure / something else", next: 'not_sure' },
    ],
  },

  accounting: {
    id: 'accounting',
    messages: [
      'Our accounting services include year-end accounts, management accounts, bookkeeping, VAT returns, payroll processing, CIS returns and cloud accounting setup.',
      'Would you like our team to look at what suits your business?',
    ],
    options: [
      { label: 'Contact us', action: 'contact' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  tax: {
    id: 'tax',
    messages: [
      'We help with corporation tax and self-assessment returns, personal tax planning, capital gains tax, VAT advice and registration, and director and dividend tax planning.',
      'Which would you like to know more about?',
    ],
    options: [
      { label: 'Business tax', next: 'tax_business' },
      { label: 'Personal tax', next: 'tax_personal' },
      { label: 'Speak to the team', next: 'speak_to_team' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  tax_business: {
    id: 'tax_business',
    messages: [
      'For businesses we can help with corporation tax returns, VAT advice and registration, tax efficiency planning, and dividend and director tax planning.',
      'Every situation is different, so our team will need to look at your details before advising.',
    ],
    options: [
      { label: 'Contact us', action: 'contact' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  tax_personal: {
    id: 'tax_personal',
    messages: [
      'For individuals we can help with self-assessment tax returns, personal tax planning and capital gains tax advice.',
      'Every situation is different, so our team will need to look at your details before advising.',
    ],
    options: [
      { label: 'Contact us', action: 'contact' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  payroll: {
    id: 'payroll',
    messages: [
      'Our payroll and employer services cover employee payroll management, pension auto-enrolment, PAYE administration, payroll reporting and director payroll.',
      'Would you like to talk through your payroll needs with our team?',
    ],
    options: [
      { label: 'Contact us', action: 'contact' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  advisory: {
    id: 'advisory',
    messages: [
      'Our business advisory services include startup support, company formation, budgeting and forecasting, financial strategy, growth support, profit improvement advice and software guidance.',
      'Would you like to speak with our team about getting started?',
    ],
    options: [
      { label: 'Speak to the team', next: 'speak_to_team' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  pricing: {
    id: 'pricing',
    messages: [
      "Fees depend on the services you need and the size and complexity of your business, so we don't publish fixed prices.",
      'We can give you a clearer idea once we understand what you need.',
    ],
    options: [
      { label: 'Tell me what I need', next: 'not_sure' },
      { label: 'Get a quote', action: 'contact', event: CHATBOT_EVENTS.QUOTE_CLICKED },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  not_sure: {
    id: 'not_sure',
    messages: [
      'No problem — a quick question will help point you in the right direction.',
      'What best describes you?',
    ],
    options: [
      { label: "I'm starting a business", next: 'advisory' },
      { label: 'I already run a business', next: 'business_needs' },
      { label: 'I have a personal tax matter', next: 'tax_personal' },
      { label: 'Common questions', next: 'something_else' },
      { label: 'I just want to talk to someone', next: 'speak_to_team' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  business_needs: {
    id: 'business_needs',
    messages: ['What are you looking for?'],
    options: [
      { label: 'Accounting', next: 'accounting' },
      { label: 'Tax', next: 'tax_business' },
      { label: 'Payroll', next: 'payroll' },
      { label: 'Advisory', next: 'advisory' },
      { label: "I'm not sure", next: 'speak_to_team' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  speak_to_team: {
    id: 'speak_to_team',
    messages: [
      "Of course — here's the best way to reach us.",
      `You can call us on ${CONTACT_PHONE_DISPLAY}, or send us a message and we'll get back to you.`,
    ],
    options: [
      { label: 'Open contact form', action: 'contact' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  something_else: {
    id: 'something_else',
    messages: ['Here are a few common questions:'],
    options: [
      { label: 'What services do you offer?', next: 'faq_services' },
      { label: 'Who do you work with?', next: 'faq_clients' },
      { label: 'How do I get in touch?', next: 'speak_to_team' },
      { label: 'Where are you based?', next: 'faq_location' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  faq_services: {
    id: 'faq_services',
    messages: [
      'We offer four service areas: Accounting, Tax, Business Advisory, and Payroll & Employer Services.',
    ],
    options: [
      { label: 'Contact us', action: 'contact' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  faq_clients: {
    id: 'faq_clients',
    messages: [
      'We support startups, growing companies, contractors, established businesses and individuals.',
    ],
    options: [
      { label: 'Speak to the team', next: 'speak_to_team' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  faq_location: {
    id: 'faq_location',
    messages: ['Our address is at the bottom of this page, in the footer.'],
    options: [
      { label: 'Open contact form', action: 'contact' },
      { label: 'Back to menu', next: 'root' },
    ],
  },
}
