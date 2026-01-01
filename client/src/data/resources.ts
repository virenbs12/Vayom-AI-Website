export interface Blog {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  category: string;
  readTime: string;
  date: string;
}

export interface Event {
  event_id: string;
  name: string;
  description: string;
  type: string;
  start_datetime: string;
  timezone: string;
  location_mode: 'Online' | 'In-person' | 'Hybrid';
  registration_url: string;
  status: 'Scheduled' | 'Full' | 'Completed' | 'Cancelled';
  tags: string[];
  full_description?: string;
  agenda?: string[];
  who_should_attend?: string;
  duration?: string;
  host?: string;
}

export interface Demo {
  id: string;
  title: string;
  summary: string;
  duration: string;
  track: string;
  videoPlaceholder: string;
  gifUrl?: string;
}

export const blogs: Blog[] = [
  {
    id: '1',
    title: 'Stop cash leakage before close',
    summary: 'Spot pricing drift, duplicate credits, and deductions issues early, with proof attached.',
    tags: ['B2B', '6–10 min'],
    category: 'B2B',
    readTime: '6–10 min',
    date: '2025-05-15'
  },
  {
    id: '2',
    title: 'Evidence-linked outputs, explained simply',
    summary: 'What “evidence-linked” means in practice and how teams review faster without spreadsheets.',
    tags: ['RIAA solution', '3–5 min'],
    category: 'RIAA solution',
    readTime: '3–5 min',
    date: '2025-05-10'
  },
  {
    id: '3',
    title: 'Transaction deduplication for finance and ops',
    summary: 'Find repeats across invoices, credits, and payments, even when references differ.',
    tags: ['B2B', '6–10 min'],
    category: 'B2B',
    readTime: '6–10 min',
    date: '2025-04-22'
  },
  {
    id: '4',
    title: 'Returns and refunds leakage map',
    summary: 'Where margin disappears in B2C and how to isolate repeat patterns with verifiable records.',
    tags: ['B2C', '6–10 min'],
    category: 'B2C',
    readTime: '6–10 min',
    date: '2025-04-15'
  },
  {
    id: '5',
    title: 'SaaS vs VPC deployment',
    summary: 'Choose the right model for speed, control, and internal requirements.',
    tags: ['Security and deployment', '6–10 min'],
    category: 'Security and deployment',
    readTime: '6–10 min',
    date: '2025-03-28'
  },
  {
    id: '6',
    title: 'Partner delivery without rebuilding every time',
    summary: 'Deliver repeatable workflows with consistent outputs and review paths.',
    tags: ['Partnerships', '3–5 min'],
    category: 'Partnerships',
    readTime: '3–5 min',
    date: '2025-03-10'
  }
];

export const placeholderEvents: Event[] = [
  {
    event_id: 'e1',
    name: 'B2B leakage review, contract to invoice',
    description: 'Walk through a workflow that ties contract terms to invoice lines and flags exceptions with proof.',
    type: 'Product briefing',
    start_datetime: '2026-01-10T06:30:00-05:00',
    timezone: 'Eastern Time (US & Canada)',
    location_mode: 'Online',
    registration_url: '#',
    status: 'Scheduled',
    tags: ['B2B', 'Workflow'],
    full_description: 'Join our product experts for a deep dive into B2B leakage detection. We will demonstrate how to automatically reconcile contract terms against invoice line items, identifying discrepancies in real-time.',
    agenda: [
      'Connect ERP + CRM + contract sources',
      'Review exceptions with evidence links',
      'Output pack and next actions'
    ],
    who_should_attend: 'Finance, RevOps, Commercial Ops, Business Analytics',
    duration: '45 minutes',
    host: 'Sarah Chen, Product Lead'
  },
  {
    event_id: 'e2',
    name: 'Prevent duplicate credits and repeat payouts',
    description: 'Detect duplicates across invoices, credits, and payments, then resolve with a review-ready queue.',
    type: 'Workshop',
    start_datetime: '2026-01-17T12:00:00-05:00',
    timezone: 'Eastern Time (US & Canada)',
    location_mode: 'Online',
    registration_url: '#',
    status: 'Scheduled',
    tags: ['B2B', 'Operations'],
    full_description: 'Interactive workshop on setting up duplicate detection rules. Learn best practices for configuring sensitivity thresholds and handling false positives.',
    agenda: [
      'What gets flagged and why',
      'Side-by-side confirmation view',
      'Resolution workflow and documentation'
    ],
    who_should_attend: 'Finance, AR, Commercial Ops',
    duration: '60 minutes',
    host: 'Mike Ross, Solutions Architect'
  },
  {
    event_id: 'e3',
    name: 'B2C margin controls, promos to returns',
    description: 'Promo integrity, refund consistency, and shipping cost checks with evidence-linked outputs.',
    type: 'Webinar',
    start_datetime: '2026-01-24T11:00:00-05:00',
    timezone: 'Eastern Time (US & Canada)',
    location_mode: 'Online',
    registration_url: '#',
    status: 'Scheduled',
    tags: ['B2C', 'Retail'],
    full_description: 'Explore the complexities of B2C margin protection. We cover the entire lifecycle from promotion creation to return processing, ensuring every dollar is accounted for.',
    agenda: [
      'Promo stacking and policy drift',
      'Duplicate refunds and repeat behavior',
      'Shipping variance and returns patterns'
    ],
    who_should_attend: 'Operations, Finance, Ecommerce, Business Analytics',
    duration: '50 minutes',
    host: 'Elena Rodriguez, B2C Strategy'
  }
];

export const demos: Demo[] = [
  {
    id: 'd1',
    title: 'RIAA demo',
    summary: 'A solution walk-through showing how systems, documents, and feeds become evidence-linked outputs.',
    duration: '6:20',
    track: 'RIAA',
    videoPlaceholder: 'RIAA_DEMO_VIDEO',
    gifUrl: '/demos/riaa-demo.gif'
  },
  {
    id: 'd2',
    title: 'RIAA on Salesforce',
    summary: 'See RIAA inside a Salesforce-led workflow, tying account context to verified outputs and next actions.',
    duration: '4:45',
    track: 'RIAA',
    videoPlaceholder: 'RIAA_SALESFORCE_VIDEO',
    gifUrl: '/demos/salesforce-demo.gif'
  },
  {
    id: 'd3',
    title: 'RIAA on M365',
    summary: 'How teams review the same evidence, assign owners, and move from question to verified action without handoffs.',
    duration: '5:10',
    track: 'RIAA',
    videoPlaceholder: 'RIAA_M365_VIDEO',
    gifUrl: '/demos/m365-demo.gif'
  },
  {
    id: 'd4',
    title: 'RIAA on D365',
    summary: 'See RIAA integrated with Dynamics 365, connecting business processes with evidence-linked revenue intelligence.',
    duration: '4:30',
    track: 'RIAA',
    videoPlaceholder: 'RIAA_D365_VIDEO',
    gifUrl: '/demos/d365-demo.gif'
  }
];
