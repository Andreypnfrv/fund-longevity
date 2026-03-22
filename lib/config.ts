export const mailchimpConfig = {
  userId: 'f5fb33aedc3387e255921da9c',
  server: 'us16',
  formIds: {
    demonstrations: '00edc2e1f0',
    media: '00ecc2e1f0',
    partners: '0093c2e1f0',
  },
  listIds: {
    demonstrations: '3618a3bc44',
    media: '3618a3bc44',
    partners: '3618a3bc44',
  },
};

export const discordUrl = 'https://discord.gg/cgGMhDgHvE';

export interface Partner {
  name: string;
  logo?: string;
  description?: string;
  url?: string;
  logoSize?: 'small' | 'medium' | 'normal' | 'large';
}

export const PARTNERS: Partner[] = [
  {
    name: 'HSAC',
    logo: '/hsac-logo.jpg',
    url: 'https://healthspanaction.org',
    description: 'We are a worldwide, cross-sector societal movement helping to establish a new paradigm in medicine.',
  },
  {
    name: 'Vitalism',
    logo: '/vitalism-logo.jpg',
    url: 'https://www.vitalism.io',
    description: 'Coordinates key leaders, government, business, and academia to direct unprecedented attention towards solving humanity\'s greatest challenge, death.',
  },
  {
    name: 'Longevity Biotech Fellowship',
    logo: '/lbf-logo.jpg',
    url: 'https://www.longbiofellowship.org',
    description: 'A community of hardcore Longevity Accelerationists. Our members build, join, and invest in revolutionary biotechnology projects for radical life extension.',
  },
  {
    name: 'Swedish Longevity Cluster',
    logo: '/SLC-logo.png',
    url: 'https://www.swedishlongevitycluster.se',
    description: 'An organization with the goal of kickstarting the longevity industry in the Nordics and work on longevity advocacy.',
  },
  {
    name: 'Levity',
    logo: '/levity.png',
    logoSize: 'medium' as const,
    url: 'https://reachlevity.com',
    description: 'Levity is an independent longevity media platform, shaping the conversation that will take us to longevity escape velocity. Sign up for the newsletter at reachlevity.com',
  },
  {
    name: 'Heales',
    logo: '/heales.jpg',
    logoSize: 'medium' as const,
    url: 'https://heales.org',
    description: 'Heales is an organization that informs and raises awareness about technological and medical developments in the field of biogerontology.',
  },
  {
    name: 'Open Longevity',
    logo: '/open-longevity-logo.png',
    logoSize: 'large' as const,
    url: 'https://openlongevity.org',
    description: 'A life extension community focused on fighting aging and death through scientific methods. Runs multiple active projects including Open Genes database, AgingNets, and research initiatives.',
  },
  {
    name: 'VivaCity',
    logo: '/viva-city.avif',
    logoSize: 'small' as const,
    url: 'https://viva.city',
    description: 'A permanent physical city being built for people who prioritize longevity and life extension research, with a mission to make death optional by bringing together experts and innovators to accelerate aging science.',
  },
  {
    name: 'HydraDAO',
    logo: '/hydradao.png',
    logoSize: 'small' as const,
    url: 'https://hydradao.org',
    description: 'A DeSci DAO dedicated to advancing human longevity through biological replacement research, funding tissue, organ, and whole-body replacement projects to radically extend human lifespan.',
  },
  {
    name: 'CryoDAO',
    logo: '/cryodao.svg',
    logoSize: 'small' as const,
    url: 'https://www.cryodao.org',
    description: 'A community-driven DAO advancing cryopreservation research, funding high-potential projects to improve cryopreservation quality and capabilities for life extension.',
  },
  {
    name: 'Age.House',
    logo: '/age-house-logo.png',
    url: 'https://age.house',
    description: 'Longevity community and advocacy.',
  },
  {
    name: 'International Longevity Alliance',
    logo: '/international-longevity-alliance.jpeg',
    logoSize: 'medium' as const,
    url: 'https://longevityalliance.org',
    description: 'Coalition of organizations and individuals advocating for longevity research and aging as a treatable condition.',
  },
  {
    name: 'Humanity+',
    logo: '/humanity.png',
    logoSize: 'medium' as const,
    url: 'https://www.humanityplus.org',
    description: 'Advocates for the ethical use of technology and evidence-based science to expand human capabilities. Educational organization at the forefront of healthy longevity, AI, and the future of humanity; runs H+ Summits and TransVision conferences.',
  },
];
