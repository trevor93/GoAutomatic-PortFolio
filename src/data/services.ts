export interface Service {
  id: string;
  title: string;
  description: string;
  includes: string[];
  forWho: string;
  solves: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Website Development',
    description: 'Professional websites for businesses, brands, and founders who need a strong online presence that looks credible, communicates clearly, and supports real business growth.',
    includes: [
      'Professional website design',
      'Clear service presentation',
      'Mobile-responsive layout',
      'Trust-building elements',
      'Business-focused structure'
    ],
    forWho: 'Businesses that need a strong, credible online presence',
    solves: 'Creates professional websites that improve trust and support business growth'
  },
  {
    id: '2',
    title: 'Troubleshooting, Fixes & Debugging',
    description: 'Technical support for website issues, broken sections, workflow problems, content errors, and practical digital fixes. Built for businesses that need problems solved without drama.',
    includes: [
      'Issue identification and resolution',
      'Website troubleshooting',
      'Workflow problem solving',
      'Content error fixes',
      'Practical technical support'
    ],
    forWho: 'Businesses facing technical issues that need quick resolution',
    solves: 'Solves problems fast so your business can keep moving forward'
  },
  {
    id: '3',
    title: 'Automatic Content Creation',
    description: 'Support for content systems that help businesses stay active online more consistently, with less manual effort and better workflow support.',
    includes: [
      'Content system setup',
      'Workflow automation support',
      'Consistent publishing structure',
      'Reduced manual effort',
      'Online presence maintenance'
    ],
    forWho: 'Businesses that want consistent online presence with less manual work',
    solves: 'Helps maintain active online presence without overwhelming your team'
  },
  {
    id: '4',
    title: 'Client Lead Generation',
    description: 'Lead research and outreach support for businesses that want help identifying prospects, organizing opportunities, and creating more chances to win clients.',
    includes: [
      'Prospect identification',
      'Lead research support',
      'Opportunity organization',
      'Outreach preparation',
      'Client acquisition support'
    ],
    forWho: 'Businesses that need more qualified leads and client opportunities',
    solves: 'Creates more opportunities for revenue by identifying and organizing leads'
  },
  {
    id: '5',
    title: 'Website Updates & Support',
    description: 'Ongoing support for edits, improvements, and small updates that help keep your website useful, current, and client-ready.',
    includes: [
      'Content updates and edits',
      'Feature improvements',
      'Ongoing maintenance',
      'Regular optimization',
      'Client-ready presentation'
    ],
    forWho: 'Businesses that need ongoing website maintenance and updates',
    solves: 'Keeps your website current and effective without internal technical overhead'
  },
  {
    id: '6',
    title: 'Landing Pages & Business Presentation',
    description: 'Focused pages built to present one offer clearly, improve conversions, and help businesses communicate their value more effectively.',
    includes: [
      'Focused page design',
      'Clear offer presentation',
      'Conversion optimization',
      'Value communication',
      'Professional presentation'
    ],
    forWho: 'Businesses that need targeted pages for specific offers or campaigns',
    solves: 'Improves conversion by communicating value clearly and professionally'
  }
];
