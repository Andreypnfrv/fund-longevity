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
      city: 'experts',
      members: [
        { name: 'Aubrey De Grey', description: 'Biomedical gerontologist, co-founder of SENS Research Foundation, Chief Science Officer of LEV Foundation, author of "Ending Aging".', location: '', image: '/aubrey-de-grey.jpg', socialLinks: { linkedin: 'https://www.linkedin.com/in/aubrey-de-grey-24260b', x: 'https://x.com/aubreydegrey', website: 'https://www.levf.org/aubreydegrey' } },
        { name: 'Peter Lidskiy', description: 'Assistant Professor at City University of Hong Kong, studies evolutionary biology of aging and the pathogen control hypothesis.', location: '', image: '/pl.jpg', socialLinks: { website: 'https://scholars.cityu.edu.hk/en/persons/plidskiy/' } },
        { name: 'Alexander Panchin', description: 'Biologist and science communicator, author of "Immortality or Death", researcher at Russian Academy of Sciences.', location: '', image: '/panchin.jpg', socialLinks: { telegram: 'https://t.me/ScienceInquisition', website: 'https://www.researchgate.net/profile/Alexander-Panchin' } },
        { name: 'Laurence Ion', description: 'Founding Steward of VitaDAO, Co-initiator of Vitalia. Focuses on DeSci and longevity research funding, and on new cities to accelerate drug development and make death optional.', location: '', image: '/laurence-ion.jpg', socialLinks: { linkedin: 'https://www.linkedin.com/in/laurenceion' } },
        { name: 'Natasha Vita-More', description: 'Longevity scientist, AI Futures Theorist (PhD).', location: '', image: '/natasha-vita-more.jpg', socialLinks: {} },
        { name: 'José Luis Cordeiro', description: 'Engineer, economist and futurist. Vice-chair of Humanity+, founding faculty at Singularity University, co-author of "The Death of Death". Advocates longevity escape velocity and aging as a curable disease.', location: '', image: '/jose-luis-cordeiro.png', socialLinks: {} },
      ],
    },
    {
      city: 'Stockholm',
      members: [
        {
          name: 'Linus Petersson',
          description: 'Co-founder of Swedish Longevity Cluster and author of \'Läkemedel mot Åldrande\' (Drugs Against Aging). 20+ years in the longevity space. Consultant within pharmaceutical and longevity industry. Keynote speaker on aging and longevity.',
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
        {
          name: 'Moa Quist',
          description: 'Curious visionary, doer and longevity organizer.',
          location: 'Stockholm, Sweden',
          image: '/moaqusit.jpeg',
          socialLinks: { linkedin: 'https://www.linkedin.com/in/moaquist/' },
        },
        {
          name: 'Thomas Ahlström',
          description: 'Swedish transhumanist and longevity networker exploring ethics and technology to help reshape humanity\'s future. Driven to transcend human limits, expand human potential, and advance the pursuit of longer, healthier lives.',
          location: 'Stockholm, Sweden',
          image: '/thomas-ahlstrom.png',
          socialLinks: {
            linkedin: 'https://www.linkedin.com/in/thomasahlstrom',
            telegram: 'https://t.me/thomas_ahl',
          },
        },
      ],
    },
    {
      city: 'Amsterdam',
      members: [
        {
          name: 'Vladimir Leshko',
          description: 'Biomedical engineer working toward extending human lifespan through public engagement, thoughtful self-experimentation, and operational leadership as COO at Unlimited Bio, a gene therapy startup.',
          location: 'Amsterdam, Netherlands',
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
          location: 'Amsterdam, Netherlands',
          image: '/sofia-eremchuk.JPG',
          socialLinks: {
            linkedin: 'https://www.linkedin.com/in/sofia-eremchuk/',
          },
        },
      ],
    },
    {
      city: 'brussels',
      members: [
        {
          name: 'Didier Coeurnelle',
          description: 'Co-chair of Heales (Healthy Life Extension Society), Brussels. Board member of International Longevity Alliance and Humanity+. Vice-president of Association Française Transhumaniste Technoprog. Author of "Et si on arrêterait de vieillir!" and co-author of "Technoprog".',
          location: 'Brussels, Belgium',
          image: '/didier.jpeg',
          socialLinks: {
            linkedin: 'https://www.linkedin.com/in/didiercoeurnelle/',
            x: 'https://x.com/DidierCo',
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
        {
          name: 'Ingemar Patrick Linden',
          description: 'Author of "The Case against Death" (MIT Press 2022) and "Mot döden en radikalt livsbejakande filosofi" (Volante 2024).',
          location: 'Berlin, Germany',
          image: '/patricklinden.jpg',
          socialLinks: { linkedin: 'https://www.linkedin.com/in/ingemar-patrick-linden-122bb3b/' },
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
    {
      city: 'madrid',
      members: [
        { name: 'José Luis Cordeiro', description: 'Engineer, economist and futurist. Vice-chair of Humanity+, founding faculty at Singularity University, co-author of "The Death of Death". Advocates longevity escape velocity and aging as a curable disease.', location: '', image: '/jose-luis-cordeiro.png' },
        { name: 'Maristela Bermúdez', description: 'Engineer working on sustainability and health. Director, International Longevity Summit, Madrid.', location: '', image: '/maristela-bermudez.png' },
        { name: 'Miguel Ferrero', description: 'Neuropsychologist, Advisor, International Longevity Summit, Madrid.', location: '', image: '/miguel-ferrero.png' },
      ],
    },
    {
      city: 'Ljubljana',
      members: [
        { name: 'Martin Lipovšek', description: 'PhD student at University of Ljubljana. Member of the Board of Directors, International Longevity Alliance (ILA).', location: 'Ljubljana, Slovenia', image: '/martinlipovsek.jpeg', socialLinks: { linkedin: 'https://www.linkedin.com/in/martin-lipov%C5%A1ek-8905b3175/' } },
      ],
    },
    {
      city: 'telAviv',
      members: [
        {
          name: 'Ilia Stambler',
          description:
            'Chief Science Officer, Vetek (Seniority) Association, Israel. Fellow at Bar Ilan University. Chairman, International Longevity Alliance (ILA). Author of "A History of Life-extensionism in the Twentieth Century" and over 70 papers. Initiator of the Longevity Day and Month campaign.',
          location: 'Tel Aviv, Israel',
          image: '/iliastambler.jpeg',
          socialLinks: { linkedin: 'https://www.linkedin.com/in/ilia-stambler-5099977/' },
        },
      ],
    },
    {
      city: 'Tbilisi',
      members: [
        {
          name: 'Ksenia Svaneti',
          description:
            'Sustainability and longevity consultant specializing in the strategic integration of wellness retreats, green energy infrastructure, and luxury brand transformation to establish Svaneti (Georgia) as a premier global destination for health and high-end biohacking.',
          location: 'Tbilisi, Georgia',
          image: '/ksenia.jpg',
          socialLinks: {
            linkedin: 'https://www.linkedin.com/in/ksenia-markovskaia',
            telegram: 'https://t.me/kseniasvaneti',
          },
        },
      ],
    },
    {
      city: 'Mexico',
      members: [
        { name: 'Paulina Alva Flores', description: '', location: 'Mexico', image: '/paulina-mexico.png' },
      ],
    },
    {
      city: 'San Francisco',
      members: [
        { name: 'Melissa King', description: 'Co-Founder and COO, Healthspan Action Coalition. Founding senior staff member, California Institute for Regenerative Medicine. Policy wonk, patient advocate and science communicator.', location: 'San Francisco, USA', image: '/melissa-king.jpg', socialLinks: {} },
      ],
    },
    {
      city: 'abuDhabi',
      members: [
        { name: 'Javier Torres', description: '', location: 'Abu Dhabi, UAE', image: '/javier-torres.jpeg' },
      ],
    },
    {
      city: 'Caracas',
      members: [
        { name: 'José Gregorio Bermúdez Cancine', description: 'Mechanical engineer, expert in the control of contracts for major projects in the oil and manufacturing industries.', location: 'Caracas, Venezuela', image: '/jose-caracas.jpeg' },
      ],
    },
    {
      city: 'liveStreamOrgs',
      members: [
        { name: 'Nastya Egorova', description: 'CEO & Co-Founder @Open Longevity and SayForever campaign, counselor @LBF, advisor @Vitalism Foundation. Biologist and artist by training, Nastya has been wearing multiple hats in science communication, social movements building, and open science projects.', location: '', image: '/nastya.jpg', socialLinks: { linkedin: 'https://www.linkedin.com/in/nastya-egorova/' } },
        { name: 'Danila Immortalist', description: '', location: '', image: '/danila-immortalist.jpeg' },
      ],
    },
  ],
};
