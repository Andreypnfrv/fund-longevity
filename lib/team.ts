export interface TeamMember {
  name: string;
  description: string;
  location: string;
  image?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    x?: string;
    website?: string;
    telegram?: string;
    github?: string;
  };
}

export interface CityGroup {
  city: string;
  members: TeamMember[];
}

export interface TeamData {
  coreTeam: TeamMember[];
  cities: CityGroup[];
}

export const TEAM_DATA: TeamData = {
  coreTeam: [],
  cities: [
    {
      city: 'Stockholm',
      members: [
        {
          name: 'Linus Petersson',
          description: 'Local lead. Co-founder of the Swedish Longevity Cluster. Expert on Longevity and Pharma. Public speaking, keynotes and talks on longevity. Startup guidance within longevity. Career guidance on longevity.',
          location: 'Stockholm, Sweden',
          image: '/linus-peteresson.png',
          socialLinks: {
            linkedin: 'https://www.linkedin.com/in/linuspetersson/',
            x: 'https://x.com/LinusPeters',
            website: 'http://www.linuspetersson.se/',
            telegram: 'https://t.me/lpetersson_longevity',
          },
        },
        {
          name: 'Andrei Panferov',
          description: 'Responsible for design and coordination. Serial tech entrepreneur with focus on AI, BioTech, and Web3. 17 yrs in entrepreneurship, 7 yrs in tech. Co-founder Talent River, Dowell.',
          location: 'Stockholm, Sweden',
          image: '/andrei-panferov.jpg',
          socialLinks: {
            linkedin: 'https://www.linkedin.com/in/andreypnfrv/',
            x: 'https://x.com/andreypnfrv',
            telegram: 'https://t.me/andreypnfrv',
          },
        },
        {
          name: 'Peter Ottsjö',
          description: 'Media lead. Scientific journalist and science communicator specializing in longevity research. CEO of LEVITY Media Group and co-host of the LEVITY Podcast.',
          location: 'Stockholm, Sweden',
          image: '/peter-ottsjo.png',
          socialLinks: {
            website: 'https://reachlevity.com/',
          },
        },
      ],
    },
    {
      city: 'Hague',
      members: [
        {
          name: 'Vladimir Leshko',
          description: 'Biomedical engineer working toward extending human lifespan through public engagement, thoughtful self-experimentation, and operational leadership as COO at Unlimited Bio, a gene therapy startup.',
          location: 'Hague, Netherlands',
          image: '/vladimir-leshko.png',
          socialLinks: {
            linkedin: 'https://www.linkedin.com/in/vllesh/',
            x: 'https://x.com/vladileshko',
            telegram: 'https://t.me/vleshko',
          },
        },
        {
          name: 'Sofia Eremchuk',
          description: 'Operations at EightSix Science and Synconetics Organisation | Emerging Neurotech | Longevity',
          location: 'Hague, Netherlands',
          image: '/sofia-eremchuk.JPG',
          socialLinks: {
            linkedin: 'https://www.linkedin.com/in/sofia-eremchuk/',
          },
        },
      ],
    },
    {
      city: 'Brussels',
      members: [
        {
          name: 'Didier Coeurnelle',
          description: '',
          location: 'Brussels, Belgium',
          socialLinks: {
            linkedin: 'https://www.linkedin.com/in/didiercoeurnelle/',
          },
        },
      ],
    },
    {
      city: 'Berlin',
      members: [
        {
          name: 'Felix Werth',
          description: '',
          location: 'Berlin, Germany',
          image: '/felix-werth-2.jpg',
          socialLinks: {
            linkedin: 'https://www.linkedin.com/in/felix-werth-830784a1/',
            x: 'https://x.com/felixwerth2',
            telegram: 'https://t.me/felixwerth',
          },
        },
      ],
    },
    {
      city: 'Paris',
      members: [
        {
          name: 'Mitoz Deina',
          description: '',
          location: 'Paris, France',
          image: '/mitoz-deina.png',
          socialLinks: {
            linkedin: 'https://www.linkedin.com/in/mitoz-deina/',
            telegram: 'https://t.me/deinamitoz',
          },
        },
      ],
    },
    {
      city: 'Rome',
      members: [
        {
          name: 'Ferdinando Randisi',
          description: 'AI/ML technologist | Longevity scientist | DPhil (PhD) Computational Biophysics | Vitalist',
          location: 'Rome, Italy',
          image: '/ferdinando-randsini.png',
          socialLinks: {},
        },
      ],
    },
  ],
};
