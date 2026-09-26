const caseStudies = {
  'crm-sales-automation': {
    subtitle: 'Turning incoming leads into an organized, trackable sales process.',
    processSteps: [
      'New Lead',
      'Priority',
      'Sales Owner',
      'Notification',
      'Customer Acknowledgement',
      'Activity Log',
      'Follow-up',
    ],
    toolsLabel: 'Airtable · n8n · Telegram · Gmail',
    problem: [
      'Sales teams can lose valuable time when new leads have to be manually reviewed, assigned, communicated to sales staff, acknowledged, and tracked.',
      'Without a consistent process, lead ownership can be unclear, follow-ups can be missed, and important sales activity can become scattered across different tools.',
      'The goal of this system was to create a structured process that handles the repetitive operational work automatically while keeping the sales team informed.',
    ],
    solution: [
      'I built an automated lead-management workflow that connects Airtable, n8n, Gmail and Telegram.',
      'When a new lead enters the CRM, the workflow evaluates the lead, assigns a sales owner, notifies the responsible team member, acknowledges the enquiry by email, records the activity, and monitors follow-up dates.',
      'The result is a connected workflow where each stage of the lead process triggers the next action automatically.',
    ],
    howItWorks: [
      {
        number: '01',
        title: 'Lead Capture',
        body: 'A new lead is stored in Airtable with information such as name, email, company, service interest, budget and message.',
      },
      {
        number: '02',
        title: 'Priority',
        body: "The workflow evaluates the lead's budget and assigns a priority level:",
        items: ['High', 'Medium', 'Low'],
      },
      {
        number: '03',
        title: 'Sales Owner',
        body: "The lead is assigned to a sales team member from the CRM's Team Members table.",
      },
      {
        number: '04',
        title: 'Internal Notification',
        body: "n8n retrieves the assigned salesperson's Telegram details and sends an internal notification containing the lead information.",
      },
      {
        number: '05',
        title: 'Customer Acknowledgement',
        body: 'Gmail automatically sends the prospect an acknowledgement confirming that their enquiry has been received.',
      },
      {
        number: '06',
        title: 'Activity Logging',
        body: 'The workflow creates an activity record containing the lead, activity type, date, description and outcome. This creates a history of what happened with the lead.',
      },
      {
        number: '07',
        title: 'Follow-up Monitoring',
        body: "A scheduled workflow checks upcoming follow-up dates. When a follow-up becomes due, the assigned salesperson receives a Telegram notification. The lead's follow-up status is updated to reflect the action required.",
      },
    ],
    tools: [
      { name: 'Airtable', description: 'CRM database and sales records.' },
      { name: 'n8n', description: 'Workflow orchestration and business logic.' },
      { name: 'Gmail', description: 'Automated customer acknowledgement.' },
      { name: 'Telegram', description: 'Internal sales notifications and follow-up alerts.' },
    ],
    improvements: [
      'Consistent lead processing',
      'Automated lead prioritization',
      'Clear sales ownership',
      'Immediate internal notifications',
      'Automatic customer acknowledgement',
      'Centralized activity history',
      'Follow-up monitoring',
      'Reduced repetitive administrative work',
    ],
  },
}

export default caseStudies
