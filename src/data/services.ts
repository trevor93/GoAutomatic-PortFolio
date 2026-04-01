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
    title: 'Short-Form Video Editing',
    description: 'Professional editing for Instagram Reels, TikTok, YouTube Shorts, and vertical video ads.',
    includes: [
      'Dynamic cuts and pacing',
      'Captions and text overlays',
      'Sound design and music',
      'Color grading and polish',
      'Platform-specific formatting'
    ],
    forWho: 'Brands and creators who need consistent, high-quality short-form content',
    solves: 'Eliminates the time drain of editing while maintaining professional standards'
  },
  {
    id: '2',
    title: 'UGC-Style Ad Creative',
    description: 'Authentic creator-style videos structured for paid social performance.',
    includes: [
      'Hook and script optimization',
      'Relatable pacing and delivery',
      'Clear CTA integration',
      'Multiple ad variations',
      'Performance-focused editing'
    ],
    forWho: 'Ecommerce brands running paid social campaigns',
    solves: 'Creates trust-building content that performs in competitive ad environments'
  },
  {
    id: '3',
    title: 'Product Promo Videos',
    description: 'High-conversion product videos that showcase features, benefits, and brand story.',
    includes: [
      'Product + lifestyle B-roll integration',
      'Benefit-driven messaging',
      'Professional motion graphics',
      'Multiple format exports',
      'Optimized for web and social'
    ],
    forWho: 'Product brands and online retailers',
    solves: 'Turns existing footage into polished promo content that drives clarity and trust'
  },
  {
    id: '4',
    title: 'Faceless Explainer Videos',
    description: 'Clean, professional videos that explain complex services without on-camera talent.',
    includes: [
      'Script consultation and structure',
      'B-roll and stock footage sourcing',
      'Voiceover integration',
      'Motion graphics and text',
      'Professional pacing and delivery'
    ],
    forWho: 'Service businesses, SaaS companies, and educational brands',
    solves: 'Communicates value clearly without relying on camera-ready spokespeople'
  },
  {
    id: '5',
    title: 'Multilingual Video Production',
    description: 'Video content adapted for Arabic, English, and international audiences.',
    includes: [
      'Localized voiceover and text',
      'Cultural adaptation and messaging',
      'Multi-language subtitle options',
      'Regional platform optimization',
      'Dual-version delivery'
    ],
    forWho: 'Brands targeting Gulf markets or multilingual audiences',
    solves: 'Expands reach with culturally appropriate content that builds trust across regions'
  },
  {
    id: '6',
    title: 'B-Roll / Mixed Asset Storytelling',
    description: 'Brand story videos that combine customer footage, product shots, and environmental B-roll.',
    includes: [
      'Asset organization and selection',
      'Narrative structure and pacing',
      'Music and sound design',
      'Professional color and polish',
      'Multiple deliverable formats'
    ],
    forWho: 'Hospitality, real estate, clinics, and experience-driven businesses',
    solves: 'Transforms scattered footage into cohesive stories that communicate brand value'
  },
  {
    id: '7',
    title: 'Monthly Content Production Support',
    description: 'Ongoing video production partnership for brands that need reliable, recurring content.',
    includes: [
      'Dedicated monthly capacity',
      'Organized project intake',
      'Priority turnaround',
      'Consistent quality and branding',
      'Flexible deliverable mix'
    ],
    forWho: 'Brands publishing regular content across multiple platforms',
    solves: 'Provides consistent creative execution without the overhead of in-house teams'
  },
  {
    id: '8',
    title: 'Video Content System Setup',
    description: 'Custom workflows and templates for repeatable, high-quality video production.',
    includes: [
      'Production workflow design',
      'Template and asset library creation',
      'Brand guideline integration',
      'Process documentation',
      'Training and handoff support'
    ],
    forWho: 'Growing brands that want to scale content production efficiently',
    solves: 'Builds internal capacity with systems that ensure speed and consistency'
  }
];
