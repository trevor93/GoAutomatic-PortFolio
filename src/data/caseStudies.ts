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
    clientType: 'Ecommerce Skincare Brand',
    goal: 'Launch a new product line with consistent short-form video content across Instagram and TikTok',
    approach: 'Developed a repeatable video template system using existing product footage, customer testimonials, and brand B-roll',
    deliverables: [
      '12 vertical videos per month',
      'Multiple aspect ratios for each piece',
      'Branded intro/outro templates',
      'Organized asset library'
    ],
    outcome: 'Built to improve content consistency and trust',
    whyItWorked: 'Clear structure, fast turnaround, and professional packaging helped the brand maintain a premium look while publishing frequently'
  },
  {
    id: '2',
    clientType: 'Personal Brand Coach',
    goal: 'Repurpose long-form podcast content into engaging short clips for social growth',
    approach: 'Created a workflow to identify high-value moments, add dynamic captions, and package clips with strong hooks',
    deliverables: [
      '20+ short-form clips per month',
      'Subtitle formatting and motion graphics',
      'Thumbnail creation',
      'Platform-specific optimization'
    ],
    outcome: 'Designed to package the offer clearly in short-form format',
    whyItWorked: 'Strategic clip selection and professional editing turned evergreen content into a reliable lead generation tool'
  },
  {
    id: '3',
    clientType: 'Hospitality Group (Gulf Region)',
    goal: 'Produce multilingual promotional videos for hotel properties targeting Arabic and English audiences',
    approach: 'Built custom video templates with localized voiceovers, text overlays, and culturally appropriate messaging',
    deliverables: [
      'Dual-language video versions',
      'Seasonal campaign content',
      'Location highlight reels',
      'Social ads and website hero videos'
    ],
    outcome: 'Adapted for multilingual audience positioning',
    whyItWorked: 'Professional localization and attention to cultural nuance created trust with both local and international guests'
  },
  {
    id: '4',
    clientType: 'Real Estate Agency',
    goal: 'Create a library of property tour videos and listing promos with fast turnaround',
    approach: 'Established a streamlined production system using agent-shot footage, drone clips, and templated editing',
    deliverables: [
      'Property tour videos',
      'Vertical listing promos',
      'Agent introduction videos',
      'Neighborhood highlight reels'
    ],
    outcome: 'Created as part of a repeatable content workflow',
    whyItWorked: 'Organized intake process and quick revisions allowed the team to publish professional videos the same week as listing launches'
  }
];
