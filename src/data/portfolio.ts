export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  result: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Product Promo for Skincare Brand',
    category: 'Product Promos',
    description: 'High-conversion vertical video combining product shots, lifestyle B-roll, and clear benefit-driven messaging.',
    result: 'Built to drive clarity and trust in short-form offers'
  },
  {
    id: '2',
    title: 'UGC Ad Creative for Ecommerce Offer',
    category: 'UGC-Style Ads',
    description: 'Authentic creator-style testimonial video structured for performance and trust.',
    result: 'Designed for paid social with clear CTA and relatable delivery'
  },
  {
    id: '3',
    title: 'Arabic Vertical Promo for Gulf Audience',
    category: 'Multilingual Video',
    description: 'Culturally adapted short-form creative with Arabic voiceover, text, and localized messaging.',
    result: 'Structured for audience trust and regional positioning'
  },
  {
    id: '4',
    title: 'Faceless Explainer for Service Business',
    category: 'Faceless Explainers',
    description: 'Clean B-roll and motion graphics explainer with professional voiceover explaining a complex service in under 60 seconds.',
    result: 'Built for clarity and accessibility without on-camera talent'
  },
  {
    id: '5',
    title: 'Mixed B-Roll Business Story Video',
    category: 'B-Roll / Mixed Asset',
    description: 'Brand story video combining customer footage, product shots, and environmental B-roll into a cohesive narrative.',
    result: 'Created as part of a repeatable content workflow for ongoing brand storytelling'
  },
  {
    id: '6',
    title: 'Direct Response Creative for SaaS Tool',
    category: 'Direct Response',
    description: 'Problem-solution format video with screen recordings, benefit callouts, and structured offer presentation.',
    result: 'Designed to package the offer clearly in short-form format'
  }
];

export const workCategories = [
  {
    title: 'Website Development',
    description: 'Professional business websites built to present your offer clearly, improve trust, and help visitors take action. Ideal for service businesses, local brands, and founders who need a strong online presence.'
  },
  {
    title: 'Troubleshooting, Fixes & Debugging',
    description: 'Practical technical support for websites, pages, forms, and digital workflows. We help identify issues, clean up problems, and restore things so your business can keep moving.'
  },
  {
    title: 'Automatic Content Creation',
    description: 'Content support systems designed to help businesses stay visible online with less manual effort. Useful for brands that want consistency without handling everything themselves.'
  },
  {
    title: 'Client Lead Generation',
    description: 'Lead research and client acquisition support to help businesses find relevant prospects, organize outreach opportunities, and create more chances for revenue.'
  }
];
