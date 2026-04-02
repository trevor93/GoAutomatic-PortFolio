export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'What stood out most was the professionalism of the website and how much clearer our business looked online after the work was done.',
    author: 'Business Owner',
    role: '',
    company: ''
  },
  {
    id: '2',
    quote: 'We needed practical support, not complicated talk. The work helped us clean things up, present ourselves better, and move faster.',
    author: 'Service Brand Founder',
    role: '',
    company: ''
  },
  {
    id: '3',
    quote: 'The combination of website support and growth-focused thinking made the service more useful than hiring for design alone.',
    author: 'Growing Business',
    role: '',
    company: ''
  },
  {
    id: '4',
    quote: 'We appreciated the clear communication, the practical fixes, and the fact that the work stayed focused on real business needs.',
    author: 'Client Team',
    role: '',
    company: ''
  }
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'What kinds of brands do you work with?',
    answer: 'I work with ecommerce brands, personal brands, hospitality and tourism businesses, real estate agencies, clinics, healthcare providers, and small to midsize companies that need recurring short-form video content. The common thread is a need for professional, consistent creative execution.'
  },
  {
    question: 'Do you only edit, or do you also help structure content?',
    answer: 'I provide full production support: strategy, scripting, structure, editing, packaging, and delivery. While editing is a core skill, the real value is in understanding how to position content for business results, not just making clips look good.'
  },
  {
    question: 'Can you work with existing footage and brand assets?',
    answer: 'Absolutely. Most projects involve working with client-provided footage, product shots, B-roll, stock assets, or existing brand materials. I can also guide you on what footage to capture if you are starting fresh.'
  },
  {
    question: 'Do you offer recurring monthly support?',
    answer: 'Yes. Many clients work with me on a monthly retainer basis for ongoing content production. This ensures priority turnaround, consistent quality, and a reliable workflow for brands that publish regularly.'
  },
  {
    question: 'Can you create multilingual videos?',
    answer: 'Yes. I specialize in Arabic and English video production, including localized voiceovers, text overlays, and culturally adapted messaging for Gulf and international audiences.'
  },
  {
    question: 'How does the review process work?',
    answer: 'After the initial brief, I deliver a first draft for review. You provide feedback in one organized round, I make revisions, and then deliver the final files. The process is structured to avoid endless back-and-forth while ensuring you are happy with the result.'
  },
  {
    question: 'What is the typical turnaround time?',
    answer: 'Turnaround depends on project scope and current capacity. Most short-form videos are delivered within 3-7 business days. Monthly clients get priority scheduling. Rush delivery is available when needed.'
  },
  {
    question: 'Do you help with content strategy or just execution?',
    answer: 'Both. While execution is the primary deliverable, I often provide input on content structure, messaging, platform optimization, and how to build repeatable systems. The goal is to help your content work harder for your business.'
  }
];
