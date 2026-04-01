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
    title: 'Product Promos',
    description: 'High-impact short-form videos that showcase products with clarity and convert viewers into customers.'
  },
  {
    title: 'UGC-Style Ads',
    description: 'Authentic creator-driven content built for trust, performance, and modern paid social platforms.'
  },
  {
    title: 'Direct Response Creatives',
    description: 'Structured videos designed to present offers clearly and drive immediate action.'
  },
  {
    title: 'Faceless Explainers',
    description: 'Professional B-roll and motion-based videos that communicate complex ideas without on-camera talent.'
  },
  {
    title: 'Arabic / Multilingual Video',
    description: 'Culturally adapted content for Gulf and international audiences with localized messaging.'
  },
  {
    title: 'Content Systems',
    description: 'Repeatable production workflows for brands that need consistent quality at scale.'
  }
];
