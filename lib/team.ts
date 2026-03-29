import { Locale } from './types';

export interface TeamMember {
  name: string;
  description: string;
  /** Locale-specific overrides for description. Falls back to `description` (English) if not set. */
  descriptions?: Partial<Record<Locale, string>>;
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
        {
          name: 'Aubrey De Grey',
          description: 'Biomedical gerontologist, co-founder of SENS Research Foundation, Chief Science Officer of LEV Foundation, author of "Ending Aging".',
          descriptions: {
            [Locale.SV]: 'Biomedicinsk gerontolog, medgrundare av SENS Research Foundation, Chief Science Officer vid LEV Foundation, författare till "Ending Aging".',
            [Locale.DE]: 'Biomedizinischer Gerontologe, Mitgründer der SENS Research Foundation, Chief Science Officer der LEV Foundation, Autor von "Ending Aging".',
            [Locale.FR]: 'Gérontologue biomédical, co-fondateur de la SENS Research Foundation, directeur scientifique de la LEV Foundation, auteur de "Ending Aging".',
            [Locale.ES]: 'Gerontólogo biomédico, cofundador de SENS Research Foundation, director científico de LEV Foundation, autor de "Ending Aging".',
            [Locale.IT]: 'Gerontologo biomedico, cofondatore della SENS Research Foundation, Chief Science Officer della LEV Foundation, autore di "Ending Aging".',
            [Locale.NL]: 'Biomedisch gerontoloog, medeoprichter van de SENS Research Foundation, Chief Science Officer van de LEV Foundation, auteur van "Ending Aging".',
            [Locale.CS]: 'Biomedicínský gerontolog, spoluzakladatel SENS Research Foundation, ředitel vědy LEV Foundation, autor knihy "Ending Aging".',
          },
          location: '', image: '/aubrey-de-grey.jpg', socialLinks: { linkedin: 'https://www.linkedin.com/in/aubrey-de-grey-24260b', x: 'https://x.com/aubreydegrey', website: 'https://www.levf.org/aubreydegrey' },
        },
        {
          name: 'Peter Lidskiy',
          description: 'Assistant Professor at City University of Hong Kong, studies evolutionary biology of aging and the pathogen control hypothesis.',
          descriptions: {
            [Locale.SV]: 'Biträdande professor vid City University of Hong Kong, forskar om åldringsbiologins evolutionslära och patogenkontrollhypotesen.',
            [Locale.DE]: 'Assistenzprofessor an der City University of Hong Kong, erforscht die Evolutionsbiologie des Alterns und die Pathogenkontrollhypothese.',
            [Locale.FR]: 'Maître de conférences à la City University de Hong Kong, étudie la biologie évolutive du vieillissement et l\'hypothèse du contrôle des pathogènes.',
            [Locale.ES]: 'Profesor asistente en la City University of Hong Kong, estudia la biología evolutiva del envejecimiento y la hipótesis del control de patógenos.',
            [Locale.IT]: 'Professore assistente alla City University of Hong Kong, studia la biologia evolutiva dell\'invecchiamento e l\'ipotesi del controllo dei patogeni.',
            [Locale.NL]: 'Universitair docent aan de City University of Hong Kong, bestudeert de evolutionaire biologie van veroudering en de pathogeen-controlehypothese.',
            [Locale.CS]: 'Odborný asistent na City University of Hong Kong, zkoumá evoluční biologii stárnutí a hypotézu kontroly patogenů.',
          },
          location: '', image: '/pl.jpg', socialLinks: { website: 'https://scholars.cityu.edu.hk/en/persons/plidskiy/' },
        },
        {
          name: 'Alexander Panchin',
          description: 'Biologist and science communicator, author of "Immortality or Death", researcher at Russian Academy of Sciences.',
          descriptions: {
            [Locale.SV]: 'Biolog och vetenskapskommunikatör, författare till "Immortality or Death", forskare vid Ryska vetenskapsakademin.',
            [Locale.DE]: 'Biologe und Wissenschaftskommunikator, Autor von "Immortality or Death", Forscher an der Russischen Akademie der Wissenschaften.',
            [Locale.FR]: 'Biologiste et communicant scientifique, auteur de "Immortality or Death", chercheur à l\'Académie des sciences de Russie.',
            [Locale.ES]: 'Biólogo y comunicador científico, autor de "Immortality or Death", investigador en la Academia Rusa de Ciencias.',
            [Locale.IT]: 'Biologo e divulgatore scientifico, autore di "Immortality or Death", ricercatore presso l\'Accademia delle Scienze Russa.',
            [Locale.NL]: 'Bioloog en wetenschapscommunicator, auteur van "Immortality or Death", onderzoeker aan de Russische Academie van Wetenschappen.',
            [Locale.CS]: 'Biolog a vědecký popularizátor, autor knihy "Immortality or Death", výzkumný pracovník Ruské akademie věd.',
          },
          location: '', image: '/panchin.jpg', socialLinks: { telegram: 'https://t.me/ScienceInquisition', website: 'https://www.researchgate.net/profile/Alexander-Panchin' },
        },
        {
          name: 'Laurence Ion',
          description: 'Founding Steward of VitaDAO, Co-initiator of Vitalia. Focuses on DeSci and longevity research funding, and on new cities to accelerate drug development and make death optional.',
          descriptions: {
            [Locale.SV]: 'Grundande förvaltare av VitaDAO, medarrangör av Vitalia. Fokuserar på DeSci och finansiering av åldrandeforskning, samt på nya städer för att påskynda läkemedelsutveckling och göra döden valfri.',
            [Locale.DE]: 'Gründender Steward von VitaDAO, Mitinitiator von Vitalia. Fokussiert auf DeSci und Finanzierung der Langlebigkeitsforschung sowie auf neue Städte zur Beschleunigung der Arzneimittelentwicklung und Verfügbarmachung eines optionalen Todes.',
            [Locale.FR]: 'Steward fondateur de VitaDAO, co-initiateur de Vitalia. Se concentre sur la DeSci et le financement de la recherche sur la longévité, ainsi que sur les nouvelles villes pour accélérer le développement de médicaments et rendre la mort optionnelle.',
            [Locale.ES]: 'Fundador Steward de VitaDAO, co-iniciador de Vitalia. Se centra en DeSci y la financiación de la investigación sobre longevidad, y en nuevas ciudades para acelerar el desarrollo de fármacos y hacer que la muerte sea opcional.',
            [Locale.IT]: 'Steward fondatore di VitaDAO, co-iniziatore di Vitalia. Si concentra su DeSci e il finanziamento della ricerca sulla longevità, e sulle nuove città per accelerare lo sviluppo di farmaci e rendere la morte opzionale.',
            [Locale.NL]: 'Oprichtend Steward van VitaDAO, co-initiatiefnemer van Vitalia. Richt zich op DeSci en financiering van longevity-onderzoek, en op nieuwe steden om geneesmiddelenontwikkeling te versnellen en de dood optioneel te maken.',
            [Locale.CS]: 'Zakládající správce VitaDAO, spoluzakladatel Vitalia. Zaměřuje se na DeSci a financování výzkumu dlouhověkosti a na nová města pro urychlení vývoje léků a zpřístupnění volitelné smrti.',
          },
          location: '', image: '/laurence-ion.jpg', socialLinks: { linkedin: 'https://www.linkedin.com/in/laurenceion' },
        },
        {
          name: 'Natasha Vita-More',
          description: 'Longevity scientist, AI Futures Theorist (PhD).',
          descriptions: {
            [Locale.SV]: 'Longevitetsforskare, AI-framtidsteoretiker (PhD).',
            [Locale.DE]: 'Langlebigkeitswissenschaftlerin, KI-Zukunftstheoretikerin (PhD).',
            [Locale.FR]: 'Scientifique en longévité, théoricienne des futurs de l\'IA (PhD).',
            [Locale.ES]: 'Científica de la longevidad, teórica de los futuros de la IA (PhD).',
            [Locale.IT]: 'Scienziata della longevità, teorica dei futuri dell\'IA (PhD).',
            [Locale.NL]: 'Longevity-wetenschapper, AI-toekomsttheoreticus (PhD).',
            [Locale.CS]: 'Vědkyně v oblasti dlouhověkosti, teoretička budoucnosti AI (PhD).',
          },
          location: '',
          image: '/natasha-vita-more.jpg',
          socialLinks: { linkedin: 'https://www.linkedin.com/in/natasha-vita-more-phd-mphil-msc-1st-380363/' },
        },
        {
          name: 'Max More',
          description: 'Philosopher and futurist who writes, speaks, and consults on emerging technologies. President and CEO of the Alcor Life Extension Foundation, 2010–2020.',
          descriptions: {
            [Locale.SV]: 'Filosof och futurist som skriver, föreläser och konsulterar om framväxande teknologier. President och VD för Alcor Life Extension Foundation, 2010–2020.',
            [Locale.DE]: 'Philosoph und Futurist, der über aufkommende Technologien schreibt, spricht und berät. Präsident und CEO der Alcor Life Extension Foundation, 2010–2020.',
            [Locale.FR]: 'Philosophe et futuriste qui écrit, intervient et conseille sur les technologies émergentes. Président-directeur général de la Alcor Life Extension Foundation, 2010–2020.',
            [Locale.ES]: 'Filósofo y futurista que escribe, habla y asesora sobre tecnologías emergentes. Presidente y CEO de la Alcor Life Extension Foundation, 2010–2020.',
            [Locale.IT]: 'Filosofo e futurista che scrive, parla e consulta sulle tecnologie emergenti. Presidente e CEO della Alcor Life Extension Foundation, 2010–2020.',
            [Locale.NL]: 'Filosoof en futurist die schrijft, spreekt en adviseert over opkomende technologieën. President en CEO van de Alcor Life Extension Foundation, 2010–2020.',
            [Locale.CS]: 'Filosof a futurista, který píše, přednáší a konzultuje o rozvíjejících se technologiích. Prezident a generální ředitel Alcor Life Extension Foundation v letech 2010–2020.',
          },
          location: '',
          image: '/maxmore.png',
          socialLinks: {
            linkedin: 'https://www.linkedin.com/in/max-more-06a11a1/',
            website: 'https://www.maxmore.com/',
          },
        },
        {
          name: 'José Luis Cordeiro',
          description: 'Engineer, economist and futurist. Vice-chair of Humanity+, founding faculty at Singularity University, co-author of "The Death of Death". Advocates longevity escape velocity and aging as a curable disease.',
          descriptions: {
            [Locale.SV]: 'Ingenjör, ekonom och futurist. Vice ordförande för Humanity+, grundande fakultetsmedlem vid Singularity University, medförfattare till "The Death of Death". Förespråkar longevity escape velocity och åldrande som en behandlingsbar sjukdom.',
            [Locale.DE]: 'Ingenieur, Ökonom und Futurist. Stellvertretender Vorsitzender von Humanity+, Gründungsfakultät der Singularity University, Mitautor von "The Death of Death". Setzt sich für die Longevity Escape Velocity und Altern als heilbare Krankheit ein.',
            [Locale.FR]: 'Ingénieur, économiste et futuriste. Vice-président de Humanity+, membre fondateur du corps enseignant de la Singularity University, co-auteur de "The Death of Death". Défenseur de la vitesse d\'échappement à la longévité et du vieillissement comme maladie curable.',
            [Locale.ES]: 'Ingeniero, economista y futurista. Vicepresidente de Humanity+, miembro fundador del profesorado de la Singularity University, coautor de "The Death of Death". Defiende la velocidad de escape de la longevidad y el envejecimiento como enfermedad curable.',
            [Locale.IT]: 'Ingegnere, economista e futurista. Vicepresidente di Humanity+, membro fondatore del corpo docente della Singularity University, co-autore di "The Death of Death". Sostiene la velocità di fuga della longevità e l\'invecchiamento come malattia curabile.',
            [Locale.NL]: 'Ingenieur, econoom en futurist. Vice-voorzitter van Humanity+, oprichtend faculteitslid van de Singularity University, co-auteur van "The Death of Death". Pleit voor longevity escape velocity en veroudering als een behandelbare ziekte.',
            [Locale.CS]: 'Inženýr, ekonom a futurista. Místopředseda Humanity+, zakládající člen fakulty Singularity University, spoluautor knihy "The Death of Death". Zastává myšlenku longevity escape velocity a stárnutí jako léčitelné nemoci.',
          },
          location: '', image: '/jose-luis-cordeiro.png', socialLinks: {},
        },
        {
          name: 'Carrie Radomski',
          description: 'Director & Co-Founder involved in radical life-extension and cryonics for 10 years. Has appeared on National Canadian TV about cryonics and on the HBO season finale of "How to with John Wilson". Legal activist who sued the Crown for the rights of cryonicists living in BC. Currently creating the Futurist Club and Cryonics Rapid Response Standby Organization in Alberta, Canada. Other interests include philosophy, AI safety, quantified-self, parenting and neurodiversity.',
          descriptions: {
            [Locale.SV]: 'Direktör och medgrundare verksam inom radikal livsförlängning och kryonik i 10 år. Har framträtt i kanadensisk nationell TV om kryonik och i HBO-säsongsfinalen av "How to with John Wilson". Juridisk aktivist som stämde kronan för kryonisters rättigheter i British Columbia. Skapar för närvarande Futurist Club och Cryonics Rapid Response Standby Organization i Alberta, Kanada. Andra intressen inkluderar filosofi, AI-säkerhet, quantified-self, föräldraskap och neurodiversitet.',
            [Locale.DE]: 'Direktorin und Mitgründerin mit 10-jähriger Erfahrung in radikaler Lebensverlängerung und Kryonik. Trat im kanadischen Nationalfernsehen über Kryonik auf und im HBO-Saisonfinale von "How to with John Wilson". Rechtsaktivistin, die die Krone für die Rechte von Kryonikern in British Columbia verklagte. Gründet derzeit den Futurist Club und die Cryonics Rapid Response Standby Organization in Alberta, Kanada. Weitere Interessen umfassen Philosophie, KI-Sicherheit, Quantified Self, Erziehung und Neurodiversität.',
            [Locale.FR]: 'Directrice et cofondatrice impliquée dans l\'extension radicale de la vie et la cryonie depuis 10 ans. A été présentée à la télévision nationale canadienne sur la cryonie et dans le final de saison HBO de "How to with John Wilson". Militante juridique qui a poursuivi la Couronne pour les droits des cryonistes vivant en Colombie-Britannique. Crée actuellement le Futurist Club et la Cryonics Rapid Response Standby Organization en Alberta, Canada. Ses autres intérêts comprennent la philosophie, la sécurité de l\'IA, le quantified-self, la parentalité et la neurodiversité.',
            [Locale.ES]: 'Directora y cofundadora involucrada en la extensión radical de la vida y la criónica durante 10 años. Ha aparecido en la televisión nacional canadiense sobre criónica y en el final de temporada de HBO de "How to with John Wilson". Activista legal que demandó a la Corona por los derechos de los criónicos que viven en Columbia Británica. Actualmente está creando el Futurist Club y la Cryonics Rapid Response Standby Organization en Alberta, Canadá. Sus otros intereses incluyen filosofía, seguridad de la IA, quantified-self, crianza y neurodiversidad.',
            [Locale.IT]: 'Direttrice e cofondatrice coinvolta nell\'estensione radicale della vita e nella crionica da 10 anni. È apparsa sulla televisione nazionale canadese riguardo alla crionica e nel finale di stagione HBO di "How to with John Wilson". Attivista legale che ha citato in giudizio la Corona per i diritti dei crionici che vivono in British Columbia. Sta attualmente creando il Futurist Club e la Cryonics Rapid Response Standby Organization in Alberta, Canada. Altri interessi includono filosofia, sicurezza dell\'IA, quantified-self, genitorialità e neurodiversità.',
            [Locale.NL]: 'Directeur en medeoprichter al 10 jaar actief in radicale levensverlenging en cryonica. Is verschenen op Canadese nationale televisie over cryonica en in de HBO-seizoensfinale van "How to with John Wilson". Juridisch activist die de Kroon aanklaagde voor de rechten van cryonicisten in British Columbia. Is momenteel bezig met het oprichten van de Futurist Club en de Cryonics Rapid Response Standby Organization in Alberta, Canada. Andere interesses zijn filosofie, AI-veiligheid, quantified-self, ouderschap en neurodiversiteit.',
            [Locale.CS]: 'Ředitelka a spoluzakladatelka působící v oblasti radikálního prodlužování života a kryoniky po dobu 10 let. Vystoupila v kanadské celostátní televizi o kryonice a v závěrečné epizodě sezóny HBO "How to with John Wilson". Právní aktivistka, která zažalovala Korunu za práva kryoniků žijících v Britské Kolumbii. V současnosti vytváří Futurist Club a Cryonics Rapid Response Standby Organization v Albertě, Kanada. Mezi další zájmy patří filozofie, bezpečnost AI, quantified-self, rodičovství a neurodiverzita.',
          },
          location: '', image: '/carrie-radomski.jpg', socialLinks: {},
        },
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
        {
          name: 'Quentin Le Bihan',
          description:
            'Field Service Engineer. Laboratory instrumentation, spectroscopy, microscopy, analytical systems, troubleshooting and scientific support.',
          location: 'Paris, France',
          image: '/quentin-le-bihan.png',
          socialLinks: {
            linkedin: 'https://www.linkedin.com/in/quentin-le-bihan-43aa8840',
          },
        },
      ],
    },
    {
      city: 'London',
      members: [
        {
          name: 'David Wood',
          description: 'Futurist, catalyst, author, singularitarian',
          location: 'London, United Kingdom',
          image: '/david-wood.png',
          socialLinks: { linkedin: 'https://www.linkedin.com/in/dw2cco/' },
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
