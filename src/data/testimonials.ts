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
    quote: 'The turnaround was faster than expected, and every video looked professional. It felt like working with a real production partner, not just an editor.',
    author: 'Sarah M.',
    role: 'Marketing Director',
    company: 'Skincare Brand'
  },
  {
    id: '2',
    quote: 'I send raw footage and a brief. What I get back is polished, structured, and ready to post. The consistency has made our content calendar so much easier to manage.',
    author: 'Omar K.',
    role: 'Founder',
    company: 'Personal Brand'
  },
  {
    id: '3',
    quote: 'We needed someone who understood both the creative side and the business side. The videos are sharp, but more importantly, they help us close clients.',
    author: 'Jennifer L.',
    role: 'Operations Manager',
    company: 'Real Estate Agency'
  },
  {
    id: '4',
    quote: 'Working in Arabic and English was seamless. The attention to cultural detail made a real difference in how our Gulf audience responded.',
    author: 'Khalid A.',
    role: 'Brand Manager',
    company: 'Hospitality Group'
  },
  {
    id: '5',
    quote: 'I was tired of random editors who missed deadlines. This was organized, reliable, and the quality stayed consistent across dozens of videos.',
    author: 'Mark T.',
    role: 'CEO',
    company: 'SaaS Startup'
  },
  {
    id: '6',
    quote: 'Instead of just editing, I got strategic input on how to structure our content. That systems-level thinking is what made this different from other services.',
    author: 'Rachel P.',
    role: 'Content Lead',
    company: 'Ecommerce Store'
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
