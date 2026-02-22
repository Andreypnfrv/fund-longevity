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

export const discordUrl = process.env['DISCORD_URL'] || '';

export interface Partner {
  name: string;
  logo?: string;
  description?: string;
  url?: string;
  logoSize?: 'small' | 'normal';
}

export const PARTNERS: Partner[] = [
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
    logoSize: 'small' as const,
    url: 'https://reachlevity.com',
    description: 'Levity is an independent longevity media platform, shaping the conversation that will take us to longevity escape velocity. Sign up for the newsletter at reachlevity.com',
  },
  {
    name: 'Heales',
    logo: '/heales.jpg',
    logoSize: 'small' as const,
    url: 'https://heales.org',
    description: 'Heales is an organization that informs and raises awareness about technological and medical developments in the field of biogerontology.',
  },
  {
    name: 'Open Longevity',
    logo: '/open-longevity-logo.png',
    url: 'https://openlongevity.org',
    description: 'A life extension community focused on fighting aging and death through scientific methods. Runs multiple active projects including Open Genes database, AgingNets, and research initiatives.',
  },
];
