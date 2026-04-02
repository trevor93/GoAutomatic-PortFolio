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
    question: 'What is your main service?',
    answer: 'Our main services are Website Development and Troubleshooting, Fixes & Debugging. We also offer Automatic Content Creation and Client Lead Generation as secondary support services for businesses that need broader growth support.'
  },
  {
    question: 'What kind of businesses do you work with?',
    answer: 'We work with businesses, founders, and brands that need a stronger online presence, practical technical help, or support improving how they attract clients online.'
  },
  {
    question: 'Do you only build new websites?',
    answer: 'No. We can help with both new website development and support for existing websites, including updates, fixes, cleanup, and troubleshooting.'
  },
  {
    question: 'Do you also help with growth support?',
    answer: 'Yes. In addition to websites and technical support, we also help with automatic content creation support and client lead generation for businesses that want broader digital support.'
  },
  {
    question: 'How do I get started?',
    answer: 'Send a short message about your business, what you need help with, and any current website or workflow issue. We will review it and respond with the clearest next step.'
  },
  {
    question: 'Can I hire you for one specific service only?',
    answer: 'Yes. You can hire GoAutomatic for one service only, such as Website Development or Troubleshooting, or combine services depending on your business needs.'
  }
];
