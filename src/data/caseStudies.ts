export interface CaseStudy {
  id: string;
  clientType: string;
  goal: string;
  approach: string;
  deliverables: string[];
  outcome: string;
  whyItWorked: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    clientType: 'Service Business',
    goal: 'Business Website Build — Clearer Presence, Better Trust',
    approach: 'A business needed a cleaner online presence that looked professional and made its services easier to understand. We focused on clearer presentation, stronger structure, and a more credible digital experience.',
    deliverables: [
      'Professional website design',
      'Clear service presentation',
      'Improved trust signals',
      'Mobile-responsive layout'
    ],
    outcome: 'Improved online credibility and customer trust',
    whyItWorked: 'Strong visual design and clear messaging helped the business communicate value more effectively to potential clients'
  },
  {
    id: '2',
    clientType: 'Growing Business',
    goal: 'Technical Cleanup — Practical Fixes That Reduced Friction',
    approach: 'A growing digital workflow needed structured troubleshooting and cleanup support. We worked through issues carefully, improved clarity, and helped move the system toward a more stable setup.',
    deliverables: [
      'Issue identification and documentation',
      'Systematic problem solving',
      'System cleanup and optimization',
      'Performance improvements'
    ],
    outcome: 'Reduced technical friction and improved workflow stability',
    whyItWorked: 'Methodical troubleshooting and practical fixes removed barriers that were slowing down operations'
  },
  {
    id: '3',
    clientType: 'Business Growth',
    goal: 'Growth Support — Content and Lead Flow Direction',
    approach: 'For businesses that need more than just a website, we also support visibility and client acquisition efforts through practical content direction and lead generation support.',
    deliverables: [
      'Content strategy development',
      'Lead generation system setup',
      'Client acquisition support',
      'Growth opportunity identification'
    ],
    outcome: 'Expanded reach and increased client acquisition opportunities',
    whyItWorked: 'Integrated approach to content and lead generation created more consistent opportunities for business growth'
  }
];
