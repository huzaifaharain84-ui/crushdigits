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
      { label: 'Bookkeeping', next: 'bookkeeping', event: CHATBOT_EVENTS.SERVICE_INTEREST_SELECTED },
      { label: 'Tax consultancy', next: 'tax', event: CHATBOT_EVENTS.SERVICE_INTEREST_SELECTED },
      { label: "I'm starting a business", next: 'starting_business' },
      { label: 'Pricing', next: 'pricing', event: CHATBOT_EVENTS.PRICING_QUESTION },
      { label: "I'm not sure what I need", next: 'not_sure' },
      { label: 'Something else', next: 'something_else' },
    ],
  },

  accounting: {
    id: 'accounting',
    messages: [
      'We provide accounting support to help you understand your financial position and keep your records organised, so you always have a clear picture of where your business stands.',
      'Would you like our team to take a look at your situation?',
    ],
    options: [
      { label: 'Contact us', action: 'contact' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  bookkeeping: {
    id: 'bookkeeping',
    messages: [
      'We offer accurate, structured bookkeeping so your day-to-day financial records stay clear and up to date.',
      'Want us to see how this could work for your business?',
    ],
    options: [
      { label: 'Contact us', action: 'contact' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  tax: {
    id: 'tax',
    messages: [
      'We provide tax consultancy to help you understand your responsibilities and approach tax with confidence.',
      'Would you like to know a bit more, or speak with our team directly?',
    ],
    options: [
      { label: 'Tell me more', next: 'tax_more' },
      { label: 'Speak to the team', next: 'speak_to_team' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  tax_more: {
    id: 'tax_more',
    messages: [
      "Every tax situation is different, so we look at your specific circumstances rather than giving general answers here.",
      'The best next step is a conversation with our team, who can advise properly based on your situation.',
    ],
    options: [
      { label: 'Contact us', action: 'contact' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  starting_business: {
    id: 'starting_business',
    messages: [
      "Great — if you're starting a business, we can help you understand the accounting and tax side of getting set up, so you start on the right footing.",
      'Would you like to speak with our team about this?',
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
      'No problem — a couple of quick questions will help point you in the right direction.',
      'What best describes you?',
    ],
    options: [
      { label: "I'm starting a business", next: 'starting_business' },
      { label: 'I already run a business', next: 'business_needs' },
      { label: 'I have a personal tax matter', next: 'tax' },
      { label: 'I just want to talk to someone', next: 'speak_to_team' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  business_needs: {
    id: 'business_needs',
    messages: ['What are you looking for?'],
    options: [
      { label: 'Accounting', next: 'accounting', event: CHATBOT_EVENTS.SERVICE_INTEREST_SELECTED },
      { label: 'Bookkeeping', next: 'bookkeeping', event: CHATBOT_EVENTS.SERVICE_INTEREST_SELECTED },
      { label: 'Tax consultancy', next: 'tax', event: CHATBOT_EVENTS.SERVICE_INTEREST_SELECTED },
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
      { label: 'How do I get in touch?', next: 'speak_to_team' },
      { label: 'Where are you based?', next: 'faq_location' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  faq_services: {
    id: 'faq_services',
    messages: [
      'We offer three core services: Accounting, Bookkeeping and Tax Consultancy.',
    ],
    options: [
      { label: 'Contact us', action: 'contact' },
      { label: 'Back to menu', next: 'root' },
    ],
  },

  faq_location: {
    id: 'faq_location',
    messages: ["We're a UK-based firm, registered in Huddersfield, England."],
    options: [
      { label: 'Speak to the team', next: 'speak_to_team' },
      { label: 'Back to menu', next: 'root' },
    ],
  },
}
