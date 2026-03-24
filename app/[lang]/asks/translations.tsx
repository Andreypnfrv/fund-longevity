export type AskBlueprintSection = {
  title: string;
  bullets: string[];
};

export const asksContentEn = {
  heroTitle: 'Longevity State',
  heroSubtitle: 'A policy blueprint for the aging world',
  lead: 'Aging is the leading cause of death, disability, and healthcare cost — yet it receives a fraction of the funding spent on its symptoms like cancer and heart disease. With aging populations and shrinking workforces, extending healthy productive years is the most urgent demographic challenge and the most neglected.',
  objectivesLabel: 'Objectives',
  objectives:
    'Extended healthy and productive years, lower disability burden — leading to longer workforce participation, broader tax base, reduced care costs. Returns compound over time.',
  ownershipLabel: 'Ownership',
  ownership:
    'Driven by a cross-ministerial commission (Health, Education, Science, Economy, Labor) with a unified National Longevity Strategy, funded by 1% of the yearly government budget.',
  sections: [
    {
      title:
        'Talents — Attract, develop, and retain top longevity science talents by removing barriers for job entry and strengthening training',
      bullets: [
        'Fast-tracks visas and credential recognition for researchers and clinicians',
        'PhD/MD-PhD programs bridging aging biology, medicine and data science',
      ],
    },
    {
      title:
        'Science — Sustainable long-term funding for aging research and frontier interventions',
      bullets: [
        'Dedicated financing specifically for fundamental research in aging',
        'Risk-proportionate regulation of human gene editing, replacing blanket prohibitions',
      ],
    },
    {
      title:
        'Translation — Adaptive regulation and public funding for equitable accessible therapies',
      bullets: [
        'Dedicated longevity agency modeled on proven ARPA/DARPA frameworks: directed challenges, competitive execution, non-dilutive funding, IP retained by developers',
        'Adaptive licensing with synthetic control arms from national health data',
        'Regulatory sandboxes for combination and repurposed therapies',
        'Right to try for therapies',
        'Publicly funded therapies priced for universal access through national healthcare systems',
      ],
    },
    {
      title:
        'Healthcare — Clinical infrastructure optimized for population-scale prevention',
      bullets: [
        'Population-scale screening and prevention targeting major age-related disease risks',
        'Longitudinal biomarker collection — functional and molecular — opt-out by default',
        'Integration of preventive trials into routine clinical practices',
        'Gero-therapeutic endpoints in health tech assessment and reimbursement frameworks',
      ],
    },
    {
      title:
        'Data — Open, interoperable, and scalable data ecosystem to power aging research',
      bullets: [
        'Secure free access to anonymized data for any researcher and AI application',
        'Unified interoperability standards across health, research, and registry data',
        'Standardized endpoints for gero-therapeutic trials',
      ],
    },
    {
      title:
        'International — Coordination for what no single country can do alone',
      bullets: [
        'AI-ready perturbation screening programs and shared molecular data infrastructure',
        'Mutual recognition of clinical trial results and regulatory sandbox outcomes',
        'Shared research infrastructure: wet labs, model organisms, compute, perturbation screening',
        'Public engagement to counter misinformation on longevity science',
      ],
    },
  ] satisfies AskBlueprintSection[],
};
