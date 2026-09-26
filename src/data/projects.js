import crmHero from '../assets/projects/crm/base table.jfif'
import crmWorkflow from '../assets/projects/crm/workflow.jfif'
import crmShotA from '../assets/projects/crm/email template.jfif'
import crmShotB from '../assets/projects/crm/reporting.jfif'

const projects = [
  {
    id: 1,
    number: '01',
    title: 'CRM Sales Automation',
    slug: 'crm-sales-automation',
    description:
      'A CRM workflow that automates lead assignment, follow-ups, notifications, activity logging, and daily sales reporting.',
    tools: ['Airtable', 'n8n', 'Gmail', 'Telegram'],
    demoUrl: '',
    heroImage: crmHero,
    workflowImage: crmWorkflow,
    screenshots: [crmShotA, crmShotB],
  },
  {
    id: 2,
    number: '02',
    title: 'Certificate Generator',
    slug: 'certificate-generator',
    description:
      'An automated document workflow that takes participant information from an Excel file, generates personalized certificates as PDFs, and sends them by email.',
    tools: ['Excel', 'Google Sheets', 'Google Docs', 'Zapier', 'n8n'],
    demoUrl: 'https://youtu.be/B-SGtqLfoDE',
    heroImage: '',
    workflowImage: '',
    screenshots: [],
  },
  {
    id: 3,
    number: '03',
    title: 'Gym Membership Automation',
    slug: 'gym-membership-automation',
    description:
      'A membership workflow that automates new-member onboarding, payment status updates, confirmation messages, and renewal reminders.',
    tools: ['Airtable', 'n8n', 'Gmail', 'Telegram'],
    demoUrl: 'https://youtu.be/HRvDu8rHakM?si=_2o4RmJUBBOHehLj',
    heroImage: '',
    workflowImage: '',
    screenshots: [],
  },
  {
    id: 4,
    number: '04',
    title: 'Document Signing Workflow',
    slug: 'document-signing-workflow',
    description:
      'An automated document workflow that generates documents, sends them for electronic signature, and manages the signing process.',
    tools: ['PDF.co', 'DocuSign'],
    demoUrl: 'https://youtu.be/jeF75XRga7o',
    heroImage: '',
    workflowImage: '',
    screenshots: [],
  },
]

export default projects
