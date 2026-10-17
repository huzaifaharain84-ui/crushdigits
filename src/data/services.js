// Single source of truth for the service groups shown on the home page
// (and referenced by the chat assistant). Edit here to change both.
export const COMPANY_NAME = 'Crush Digits Accountants Limited'

export const serviceGroups = [
  {
    id: 'accounting',
    icon: '£',
    tone: 'emerald',
    title: 'Accounting Services',
    items: [
      'Year-end accounts preparation',
      'Management accounts',
      'Bookkeeping services',
      'VAT returns and compliance',
      'Payroll processing',
      'CIS returns',
      'Cloud accounting setup and support',
    ],
  },
  {
    id: 'tax',
    icon: '%',
    tone: 'lime',
    title: 'Tax Services',
    items: [
      'Corporation tax returns',
      'Self-assessment tax returns',
      'Personal tax planning',
      'Capital gains tax advice',
      'VAT advice and registration',
      'Tax efficiency planning',
      'Dividend and director tax planning',
    ],
  },
  {
    id: 'advisory',
    icon: '↗',
    tone: 'teal',
    title: 'Business Advisory',
    items: [
      'Business startup support',
      'Company formation',
      'Financial strategy planning',
      'Budgeting and forecasting',
      'Business growth support',
      'Profit improvement advice',
      'Software and systems guidance',
    ],
  },
  {
    id: 'payroll',
    icon: '◎',
    tone: 'gold',
    title: 'Payroll & Employer Services',
    items: [
      'Employee payroll management',
      'Pension auto-enrolment',
      'PAYE administration',
      'Payroll reporting',
      'Director payroll services',
    ],
  },
]
