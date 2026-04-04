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
      city: 'core',
      members: [
        {
          name: 'Linus Petersson',
          description: 'Co-founder of Swedish Longevity Cluster and author of \'Läkemedel mot Åldrande\' (Drugs Against Aging). 20+ years in the longevity space. Consultant within pharmaceutical and longevity industry. Keynote speaker on aging and longevity.',
          descriptions: {
            [Locale.SV]: 'Medgrundare av Swedish Longevity Cluster och författare till \'Läkemedel mot Åldrande\'. 20+ år inom longevityområdet. Konsult inom läkemedels- och longevityindustrin. Föreläsare om åldrande och longevity.',
            [Locale.DE]: 'Mitgründer des Swedish Longevity Cluster und Autor von \'Läkemedel mot Åldrande\' (Medikamente gegen das Altern). 20+ Jahre im Bereich Longevity. Berater in der Pharma- und Longevity-Industrie. Keynote-Speaker über Altern und Longevity.',
            [Locale.FR]: 'Cofondateur du Swedish Longevity Cluster et auteur de \'Läkemedel mot Åldrande\' (Médicaments contre le vieillissement). Plus de 20 ans dans le domaine de la longévité. Consultant dans l\'industrie pharmaceutique et de la longévité. Conférencier principal sur le vieillissement et la longévité.',
            [Locale.ES]: 'Cofundador del Swedish Longevity Cluster y autor de \'Läkemedel mot Åldrande\' (Medicamentos contra el envejecimiento). Más de 20 años en el espacio de la longevidad. Consultor en la industria farmacéutica y de longevidad. Conferencista principal sobre envejecimiento y longevidad.',
            [Locale.IT]: 'Cofondatore dello Swedish Longevity Cluster e autore di \'Läkemedel mot Åldrande\' (Farmaci contro l\'invecchiamento). Oltre 20 anni nel settore della longevità. Consulente nell\'industria farmaceutica e della longevità. Relatore principale su invecchiamento e longevità.',
            [Locale.NL]: 'Medeoprichter van de Swedish Longevity Cluster en auteur van \'Läkemedel mot Åldrande\' (Medicijnen tegen veroudering). 20+ jaar in de longevity-sector. Consultant in de farmaceutische en longevity-industrie. Keynote-spreker over veroudering en longevity.',
            [Locale.CS]: 'Spoluzakladatel Swedish Longevity Cluster a autor knihy \'Läkemedel mot Åldrande\' (Léky proti stárnutí). Více než 20 let v oblasti dlouhověkosti. Konzultant ve farmaceutickém průmyslu a průmyslu dlouhověkosti. Hlavní řečník o stárnutí a dlouhověkosti.',
          },
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
          descriptions: {
            [Locale.SV]: 'Ansvarig för design och koordination. Seriell teknikentreprenör med fokus på AI, BioTech och Web3. 17 år i företagande, 7 år inom tech. Medgrundare av Talent River, Dowell.',
            [Locale.DE]: 'Verantwortlich für Design und Koordination. Serieller Technologieunternehmer mit Fokus auf KI, BioTech und Web3. 17 Jahre im Unternehmertum, 7 Jahre in der Technik. Mitgründer von Talent River, Dowell.',
            [Locale.FR]: 'Responsable du design et de la coordination. Entrepreneur technologique en série axé sur l\'IA, la BioTech et le Web3. 17 ans dans l\'entrepreneuriat, 7 ans dans la tech. Cofondateur de Talent River, Dowell.',
            [Locale.ES]: 'Responsable de diseño y coordinación. Emprendedor tecnológico en serie con enfoque en IA, BioTech y Web3. 17 años en emprendimiento, 7 años en tecnología. Cofundador de Talent River, Dowell.',
            [Locale.IT]: 'Responsabile di design e coordinamento. Imprenditore tecnologico seriale con focus su IA, BioTech e Web3. 17 anni nell\'imprenditoria, 7 anni in tecnologia. Cofondatore di Talent River, Dowell.',
            [Locale.NL]: 'Verantwoordelijk voor ontwerp en coördinatie. Serieel tech-ondernemer met focus op AI, BioTech en Web3. 17 jaar in ondernemerschap, 7 jaar in tech. Medeoprichter van Talent River, Dowell.',
            [Locale.CS]: 'Odpovědný za design a koordinaci. Sériový technologický podnikatel se zaměřením na AI, BioTech a Web3. 17 let v podnikání, 7 let v technologiích. Spoluzakladatel Talent River, Dowell.',
          },
          location: 'Stockholm, Sweden',
          image: '/andrei-panferov.jpg',
          socialLinks: {
            linkedin: 'https://www.linkedin.com/in/andreypnfrv/',
            x: 'https://x.com/andreypnfrv',
            telegram: 'https://t.me/andreypnfrv',
          },
        },
      ],
    },
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
        {
          name: 'Yuri Deigin',
          description:
            'Longevity biotech entrepreneur working on partial reprogramming gene therapies for Alzheimer\'s and other diseases.',
          descriptions: {
            [Locale.SV]:
              'Longevity biotech-entreprenör som arbetar med partiell omprogrammering och genterapi mot Alzheimers och andra sjukdomar.',
            [Locale.DE]:
              'Langlebigkeits-Biotech-Unternehmer mit Fokus auf partielle Reprogrammierungs-Gentherapien bei Alzheimer und anderen Erkrankungen.',
            [Locale.FR]:
              'Entrepreneur biotech en longévité, thérapies géniques de reprogrammation partielle pour Alzheimer et d\'autres maladies.',
            [Locale.ES]:
              'Emprendedor de biotecnología de longevidad que trabaja en terapias génicas de reprogramación parcial para Alzheimer y otras enfermedades.',
            [Locale.IT]:
              'Imprenditore biotech della longevità che lavora su terapie geniche di riprogrammazione parziale per Alzheimer e altre malattie.',
            [Locale.NL]:
              'Longevity biotech-ondernemer die werkt aan partiële herprogrammeringsgentherapieën voor Alzheimer en andere ziekten.',
            [Locale.CS]:
              'Podnikatel v oblasti biotechnologií dlouhověkosti zaměřený na genové terapie částečného reprogramování u Alzheimerovy choroby a dalších nemocí.',
          },
          location: '',
          image: '/yuri-deigin.png',
          socialLinks: { linkedin: 'https://www.linkedin.com/in/yurideigin/' },
        },
        {
          name: 'Ilia Stambler',
          description:
            'Chief Science Officer, Vetek (Seniority) Association, Israel. Fellow at Bar Ilan University. Chairman, International Longevity Alliance (ILA). Author of "A History of Life-extensionism in the Twentieth Century" and over 70 papers. Initiator of the Longevity Day and Month campaign.',
          descriptions: {
            [Locale.SV]: 'Chief Science Officer, Vetek (Seniority) Association, Israel. Forskarkolleg vid Bar Ilan University. Ordförande, International Longevity Alliance (ILA). Författare till "A History of Life-extensionism in the Twentieth Century" och över 70 artiklar. Initiativtagare till kampanjen Longevity Day and Month.',
            [Locale.DE]: 'Chief Science Officer, Vetek (Seniority) Association, Israel. Fellow an der Bar Ilan University. Vorsitzender, International Longevity Alliance (ILA). Autor von "A History of Life-extensionism in the Twentieth Century" und über 70 Veröffentlichungen. Initiator der Kampagne Longevity Day and Month.',
            [Locale.FR]: 'Directeur scientifique, Vetek (Seniority) Association, Israël. Fellow à l\'Université Bar Ilan. Président, International Longevity Alliance (ILA). Auteur de "A History of Life-extensionism in the Twentieth Century" et de plus de 70 articles. Initiateur de la campagne Longevity Day and Month.',
            [Locale.ES]: 'Director Científico, Vetek (Seniority) Association, Israel. Investigador asociado en la Universidad Bar Ilan. Presidente, International Longevity Alliance (ILA). Autor de "A History of Life-extensionism in the Twentieth Century" y más de 70 artículos. Iniciador de la campaña Longevity Day and Month.',
            [Locale.IT]: 'Chief Science Officer, Vetek (Seniority) Association, Israele. Fellow all\'Università Bar Ilan. Presidente, International Longevity Alliance (ILA). Autore di "A History of Life-extensionism in the Twentieth Century" e oltre 70 articoli. Iniziatore della campagna Longevity Day and Month.',
            [Locale.NL]: 'Chief Science Officer, Vetek (Seniority) Association, Israël. Fellow aan de Bar Ilan University. Voorzitter, International Longevity Alliance (ILA). Auteur van "A History of Life-extensionism in the Twentieth Century" en meer dan 70 artikelen. Initiatiefnemer van de Longevity Day and Month-campagne.',
            [Locale.CS]: 'Vědecký ředitel, Vetek (Seniority) Association, Izrael. Vědecký pracovník na Bar Ilan University. Předseda, International Longevity Alliance (ILA). Autor knihy "A History of Life-extensionism in the Twentieth Century" a více než 70 odborných článků. Iniciátor kampaně Longevity Day and Month.',
          },
          location: '',
          image: '/iliastambler.jpeg',
          socialLinks: { linkedin: 'https://www.linkedin.com/in/ilia-stambler-5099977/' },
        },
        {
          name: 'Andrew Steele',
          description:
            'Longevity scientist, Director of The Longevity Initiative, author of Ageless.',
          descriptions: {
            [Locale.SV]:
              'Longevitetsforskare, verksam vid The Longevity Initiative, författare till Ageless.',
            [Locale.DE]:
              'Langlebigkeitswissenschaftler, Director of The Longevity Initiative, Autor von Ageless.',
            [Locale.FR]:
              'Scientifique en longévité, directeur de The Longevity Initiative, auteur d\'Ageless.',
            [Locale.ES]:
              'Científico de la longevidad, director de The Longevity Initiative, autor de Ageless.',
            [Locale.IT]:
              'Scienziato della longevità, direttore di The Longevity Initiative, autore di Ageless.',
            [Locale.NL]:
              'Longevity-wetenschapper, directeur van The Longevity Initiative, auteur van Ageless.',
            [Locale.CS]:
              'Vědec v oblasti dlouhověkosti, ředitel iniciativy The Longevity Initiative, autor knihy Ageless.',
          },
          location: '',
          image: '/andrew-steele.png',
          socialLinks: { linkedin: 'https://www.linkedin.com/in/statto/' },
        },
        {
          name: 'Israel Pichardo-Casas, PhD',
          description:
            'Geroscientist and healthspan entrepreneur; CEO of Nentropy (nutraceuticals, biomarkers). PhD in Biomedical Sciences (UNAM, Mexico); postdoc with David Sinclair at Harvard (therapeutic peptides). Founder of PeptideFold. Former CSO and science advisor to Legacy Lyfe Labs, Life Biosciences, Cenegenics, Proteobiotech (Mexico). Co-organizing the 2026 Longevity Summit in Mexico City.',
          descriptions: {
            [Locale.SV]:
              'Gerovetenskapsman och entreprenör inom hälsospan; VD för Nentropy (nutraceuticals, biomarker). PhD i biomedicin (UNAM, Mexiko), postdoktor hos David Sinclair vid Harvard (terapeutiska peptider). Grundare av PeptideFold. Tidigare CSO och vetenskaplig rådgivare till Legacy Lyfe Labs, Life Biosciences, Cenegenics, Proteobiotech (Mexiko). Medorganiserar Longevity Summit 2026 i Mexico City.',
            [Locale.DE]:
              'Gerowissenschaftler und Unternehmer für Gesundheitsspanne; CEO von Nentropy (Nutraceuticals, Biomarker). Promotion Biomedizin (UNAM, Mexiko), Postdoc bei David Sinclair in Harvard (therapeutische Peptide). Gründer von PeptideFold. Ehem. CSO und Berater für Legacy Lyfe Labs, Life Biosciences, Cenegenics, Proteobiotech (Mexiko). Co-Organisator des Longevity Summit 2026 in Mexico City.',
            [Locale.FR]:
              'Géroscientifique et entrepreneur « healthspan » ; PDG de Nentropy (nutraceutiques, biomarqueurs). Doctorat biomédical (UNAM, Mexique), postdoc avec David Sinclair à Harvard (peptides thérapeutiques). Fondateur de PeptideFold. Ex-CSO et conseiller scientifique auprès de Legacy Lyfe Labs, Life Biosciences, Cenegenics, Proteobiotech (Mexique). Co-organise le Longevity Summit 2026 à Mexico.',
            [Locale.ES]:
              'Gerocientífico y emprendedor en vida saludable; CEO de Nentropy (nutracéuticos, biomarcadores). Doctor UNAM (México), posdoctorado con David Sinclair en Harvard (péptidos terapéuticos). Fundador de PeptideFold. Ex-CSO y asesor en Legacy Lyfe Labs, Life Biosciences, Cenegenics, Proteobiotech (México). Coorganiza el Longevity Summit 2026 en Ciudad de México.',
            [Locale.IT]:
              'Geroscientista e imprenditore sulla healthspan; CEO di Nentropy (nutraceutici, biomarcatori). PhD UNAM (Messico), postdoc con David Sinclair a Harvard (peptidi terapeutici). Fondatore di PeptideFold. Ex-CSO e consulente per Legacy Lyfe Labs, Life Biosciences, Cenegenics, Proteobiotech (Messico). Co-organizza il Longevity Summit 2026 a Città del Messico.',
            [Locale.NL]:
              'Gerowetenschapper en ondernemer rond gezonde levensduur; CEO van Nentropy (nutraceuticals, biomarkers). PhD biomedicina (UNAM, Mexico), postdoc bij David Sinclair op Harvard (therapeutische peptiden). Oprichter van PeptideFold. Ex-CSO en adviseur bij Legacy Lyfe Labs, Life Biosciences, Cenegenics, Proteobiotech (Mexico). Co-organiseert Longevity Summit 2026 in Mexico City.',
            [Locale.CS]:
              'Gerovědec a podnikatel se zaměřením na zdravé stáří; CEO Nentropy (nutraceutika, biomarkery). PhD biomedicína (UNAM, Mexiko), postdoktorát u Davida Sinclaira na Harvardu (terapeutické peptidy). Zakladatel PeptideFold. Dříve CSO a vědecký poradce u Legacy Lyfe Labs, Life Biosciences, Cenegenics, Proteobiotech (Mexiko). Spoluorganizuje Longevity Summit 2026 v Ciudad de México.',
          },
          location: '',
          image: '/israel-pichardo-casas.png',
          socialLinks: { linkedin: 'https://www.linkedin.com/in/israelpichardocasas/' },
        },
      ],
    },
    {
      city: 'Stockholm',
      members: [
        {
          name: 'Peter Ottsjö',
          description: 'Media lead. Scientific journalist and science communicator specializing in longevity research. CEO of LEVITY Media Group and co-host of the LEVITY Podcast.',
          descriptions: {
            [Locale.SV]: 'Medieansvarig. Vetenskapsjournalist och vetenskapskommunikatör specialiserad på longevityforskning. VD för LEVITY Media Group och medvärd för LEVITY Podcast.',
            [Locale.DE]: 'Medialeitung. Wissenschaftsjournalist und Wissenschaftskommunikator, spezialisiert auf Langlebigkeitsforschung. CEO der LEVITY Media Group und Co-Moderator des LEVITY Podcasts.',
            [Locale.FR]: 'Responsable médias. Journaliste scientifique et communicant scientifique spécialisé dans la recherche sur la longévité. PDG de LEVITY Media Group et co-animateur du LEVITY Podcast.',
            [Locale.ES]: 'Responsable de medios. Periodista científico y comunicador de ciencia especializado en investigación sobre longevidad. CEO de LEVITY Media Group y co-presentador del LEVITY Podcast.',
            [Locale.IT]: 'Responsabile media. Giornalista scientifico e comunicatore scientifico specializzato nella ricerca sulla longevità. CEO di LEVITY Media Group e co-conduttore del LEVITY Podcast.',
            [Locale.NL]: 'Mediaverantwoordelijke. Wetenschapsjournalist en wetenschapscommunicator gespecialiseerd in longevity-onderzoek. CEO van LEVITY Media Group en co-host van de LEVITY Podcast.',
            [Locale.CS]: 'Vedoucí médií. Vědecký novinář a popularizátor vědy specializující se na výzkum dlouhověkosti. CEO LEVITY Media Group a spolumoderátorem LEVITY Podcast.',
          },
          location: 'Stockholm, Sweden',
          image: '/peter-ottsjo.png',
          socialLinks: {
            website: 'https://reachlevity.com/',
          },
        },
        {
          name: 'Moa Quist',
          description: 'Curious visionary, doer and longevity organizer.',
          descriptions: {
            [Locale.SV]: 'Nyfiken visionär, görare och longevityorganisatör.',
            [Locale.DE]: 'Neugierige Visionärin, Macherin und Longevity-Organisatorin.',
            [Locale.FR]: 'Visionnaire curieuse, pragmatique et organisatrice de la longévité.',
            [Locale.ES]: 'Visionaria curiosa, hacedora y organizadora de longevidad.',
            [Locale.IT]: 'Visionaria curiosa, pragmatica e organizzatrice di longevità.',
            [Locale.NL]: 'Nieuwsgierige visionair, doener en longevity-organisator.',
            [Locale.CS]: 'Zvídavá vizionářka, realizátorka a organizátorka dlouhověkosti.',
          },
          location: 'Stockholm, Sweden',
          image: '/moaqusit.jpeg',
          socialLinks: { linkedin: 'https://www.linkedin.com/in/moaquist/' },
        },
        {
          name: 'Thomas Ahlström',
          description: 'Swedish transhumanist and longevity networker exploring ethics and technology to help reshape humanity\'s future. Driven to transcend human limits, expand human potential, and advance the pursuit of longer, healthier lives.',
          descriptions: {
            [Locale.SV]: 'Svensk transhumanist och longevitynätverkare som utforskar etik och teknik för att hjälpa omforma mänsklighetens framtid. Driven av att överskrida mänskliga gränser, utöka mänsklig potential och främja jakten på längre, hälsosammare liv.',
            [Locale.DE]: 'Schwedischer Transhumanist und Longevity-Netzwerker, der Ethik und Technologie erkundet, um die Zukunft der Menschheit neu zu gestalten. Getrieben vom Wunsch, menschliche Grenzen zu überwinden, menschliches Potenzial zu erweitern und das Streben nach längeren, gesünderen Leben voranzutreiben.',
            [Locale.FR]: 'Transhumaniste suédois et animateur de réseau sur la longévité qui explore l\'éthique et la technologie pour aider à remodeler l\'avenir de l\'humanité. Motivé par le désir de transcender les limites humaines, d\'élargir le potentiel humain et de promouvoir la quête de vies plus longues et en meilleure santé.',
            [Locale.ES]: 'Transhumanista sueco y networker de longevidad que explora la ética y la tecnología para ayudar a remodelar el futuro de la humanidad. Impulsado a trascender los límites humanos, expandir el potencial humano y avanzar en la búsqueda de vidas más largas y saludables.',
            [Locale.IT]: 'Transumanista svedese e networker della longevità che esplora l\'etica e la tecnologia per aiutare a ridefinire il futuro dell\'umanità. Motivato a trascendere i limiti umani, espandere il potenziale umano e promuovere la ricerca di vite più lunghe e sane.',
            [Locale.NL]: 'Zweedse transhumanist en longevity-netwerker die ethiek en technologie verkent om de toekomst van de mensheid te helpen herscheppen. Gedreven om menselijke grenzen te overstijgen, menselijk potentieel uit te breiden en de zoektocht naar langere, gezondere levens te bevorderen.',
            [Locale.CS]: 'Švédský transhumanista a síťovač v oblasti dlouhověkosti, který zkoumá etiku a technologie, aby pomohl přetvořit budoucnost lidstva. Motivován překonáváním lidských hranic, rozšiřováním lidského potenciálu a prosazováním touhy po delším a zdravějším životě.',
          },
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
          descriptions: {
            [Locale.SV]: 'Biomedicinsk ingenjör som arbetar för att förlänga människans livslängd genom samhällsengagemang, genomtänkt självexperimentering och operativt ledarskap som COO på Unlimited Bio, en generapistart-up.',
            [Locale.DE]: 'Biomedizinischer Ingenieur, der durch öffentliches Engagement, durchdachte Selbstexperimentierung und operative Führung als COO bei Unlimited Bio, einem Gentherapie-Startup, zur Verlängerung der menschlichen Lebensspanne beiträgt.',
            [Locale.FR]: 'Ingénieur biomédical travaillant à l\'extension de la durée de vie humaine par l\'engagement public, l\'auto-expérimentation réfléchie et le leadership opérationnel en tant que COO chez Unlimited Bio, une startup de thérapie génique.',
            [Locale.ES]: 'Ingeniero biomédico que trabaja para extender la vida humana mediante la participación pública, la autoexperimentación reflexiva y el liderazgo operativo como COO en Unlimited Bio, una startup de terapia génica.',
            [Locale.IT]: 'Ingegnere biomedico che lavora per estendere la durata della vita umana attraverso il coinvolgimento pubblico, l\'auto-sperimentazione ponderata e la leadership operativa come COO di Unlimited Bio, una startup di terapia genica.',
            [Locale.NL]: 'Biomedisch ingenieur die werkt aan het verlengen van de menselijke levensduur door middel van publieke betrokkenheid, doordachte zelfexperimentatie en operationeel leiderschap als COO bij Unlimited Bio, een startup voor gentherapie.',
            [Locale.CS]: 'Biomedicínský inženýr pracující na prodloužení lidského života prostřednictvím veřejného angažmá, promyšlené sebeexperimentace a provozního vedení jako COO ve společnosti Unlimited Bio, startupu zaměřeném na genovou terapii.',
          },
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
          descriptions: {
            [Locale.SV]: 'Verksamhet vid EightSix Science och Synconetics Organisation | Framväxande Neurotech | Longevity',
            [Locale.DE]: 'Betrieb bei EightSix Science und Synconetics Organisation | Aufkommende Neurotech | Longevity',
            [Locale.FR]: 'Opérations chez EightSix Science et Synconetics Organisation | Neurotechnologie émergente | Longévité',
            [Locale.ES]: 'Operaciones en EightSix Science y Synconetics Organisation | Neurotecnología emergente | Longevidad',
            [Locale.IT]: 'Operazioni presso EightSix Science e Synconetics Organisation | Neurotech emergente | Longevità',
            [Locale.NL]: 'Operaties bij EightSix Science en Synconetics Organisation | Opkomende Neurotech | Longevity',
            [Locale.CS]: 'Provoz v EightSix Science a Synconetics Organisation | Rozvíjející se Neurotech | Dlouhověkost',
          },
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
          descriptions: {
            [Locale.SV]: 'Medordförande för Heales (Healthy Life Extension Society), Bryssel. Styrelsemedlem i International Longevity Alliance och Humanity+. Vicepresident för Association Française Transhumaniste Technoprog. Författare till "Et si on arrêterait de vieillir!" och medförfattare till "Technoprog".',
            [Locale.DE]: 'Mitvorstand von Heales (Healthy Life Extension Society), Brüssel. Vorstandsmitglied der International Longevity Alliance und Humanity+. Vizepräsident der Association Française Transhumaniste Technoprog. Autor von "Et si on arrêterait de vieillir!" und Mitautor von "Technoprog".',
            [Locale.FR]: 'Coprésident de Heales (Healthy Life Extension Society), Bruxelles. Membre du conseil d\'administration de l\'International Longevity Alliance et de Humanity+. Vice-président de l\'Association Française Transhumaniste Technoprog. Auteur de "Et si on arrêterait de vieillir!" et co-auteur de "Technoprog".',
            [Locale.ES]: 'Copresidente de Heales (Healthy Life Extension Society), Bruselas. Miembro del consejo de International Longevity Alliance y Humanity+. Vicepresidente de Association Française Transhumaniste Technoprog. Autor de "Et si on arrêterait de vieillir!" y coautor de "Technoprog".',
            [Locale.IT]: 'Copresidente di Heales (Healthy Life Extension Society), Bruxelles. Membro del consiglio di International Longevity Alliance e Humanity+. Vicepresidente dell\'Association Française Transhumaniste Technoprog. Autore di "Et si on arrêterait de vieillir!" e coautore di "Technoprog".',
            [Locale.NL]: 'Co-voorzitter van Heales (Healthy Life Extension Society), Brussel. Bestuurslid van International Longevity Alliance en Humanity+. Vice-president van Association Française Transhumaniste Technoprog. Auteur van "Et si on arrêterait de vieillir!" en co-auteur van "Technoprog".',
            [Locale.CS]: 'Spolupředseda Heales (Healthy Life Extension Society), Brusel. Člen představenstva International Longevity Alliance a Humanity+. Viceprezident Association Française Transhumaniste Technoprog. Autor knihy "Et si on arrêterait de vieillir!" a spoluautor "Technoprog".',
          },
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
          descriptions: {
            [Locale.SV]: 'Författare till "The Case against Death" (MIT Press 2022) och "Mot döden en radikalt livsbejakande filosofi" (Volante 2024).',
            [Locale.DE]: 'Autor von "The Case against Death" (MIT Press 2022) und "Mot döden en radikalt livsbejakande filosofi" (Volante 2024).',
            [Locale.FR]: 'Auteur de "The Case against Death" (MIT Press 2022) et "Mot döden en radikalt livsbejakande filosofi" (Volante 2024).',
            [Locale.ES]: 'Autor de "The Case against Death" (MIT Press 2022) y "Mot döden en radikalt livsbejakande filosofi" (Volante 2024).',
            [Locale.IT]: 'Autore di "The Case against Death" (MIT Press 2022) e "Mot döden en radikalt livsbejakande filosofi" (Volante 2024).',
            [Locale.NL]: 'Auteur van "The Case against Death" (MIT Press 2022) en "Mot döden en radikalt livsbejakande filosofi" (Volante 2024).',
            [Locale.CS]: 'Autor knih "The Case against Death" (MIT Press 2022) a "Mot döden en radikalt livsbejakande filosofi" (Volante 2024).',
          },
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
          descriptions: {
            [Locale.SV]: 'Fältserviceingenjör. Laboratorieinstrumentering, spektroskopi, mikroskopi, analytiska system, felsökning och vetenskaplig support.',
            [Locale.DE]: 'Außendienstingenieur. Laborinstrumentierung, Spektroskopie, Mikroskopie, analytische Systeme, Fehlerbehebung und wissenschaftlicher Support.',
            [Locale.FR]: 'Ingénieur de service terrain. Instrumentation de laboratoire, spectroscopie, microscopie, systèmes analytiques, dépannage et support scientifique.',
            [Locale.ES]: 'Ingeniero de servicio de campo. Instrumentación de laboratorio, espectroscopía, microscopía, sistemas analíticos, resolución de problemas y soporte científico.',
            [Locale.IT]: 'Ingegnere di assistenza sul campo. Strumentazione di laboratorio, spettroscopia, microscopia, sistemi analitici, risoluzione dei problemi e supporto scientifico.',
            [Locale.NL]: 'Buitendienstingenieur. Laboratoriumapparatuur, spectroscopie, microscopie, analytische systemen, probleemoplossing en wetenschappelijke ondersteuning.',
            [Locale.CS]: 'Terénní servisní inženýr. Laboratorní instrumentace, spektroskopie, mikroskopie, analytické systémy, odstraňování závad a vědecká podpora.',
          },
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
          descriptions: {
            [Locale.SV]: 'Futurist, katalysator, författare, singularitarianist',
            [Locale.DE]: 'Futurist, Katalysator, Autor, Singularitarianist',
            [Locale.FR]: 'Futuriste, catalyseur, auteur, singularitarien',
            [Locale.ES]: 'Futurista, catalizador, autor, singularitariano',
            [Locale.IT]: 'Futurista, catalizzatore, autore, singolaritariano',
            [Locale.NL]: 'Futurist, katalysator, auteur, singularitariaan',
            [Locale.CS]: 'Futurista, katalyzátor, autor, singularitarián',
          },
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
          descriptions: {
            [Locale.SV]: 'AI/ML-teknolog | Longevitetsforskare | DPhil (PhD) Beräkningsbiofysik | Vitalist',
            [Locale.DE]: 'KI/ML-Technologe | Longevity-Wissenschaftler | DPhil (PhD) Biophysikalische Informatik | Vitalist',
            [Locale.FR]: 'Technologue IA/ML | Scientifique en longévité | DPhil (PhD) Biophysique computationnelle | Vitaliste',
            [Locale.ES]: 'Tecnólogo de IA/ML | Científico de longevidad | DPhil (PhD) Biofísica Computacional | Vitalista',
            [Locale.IT]: 'Tecnologo AI/ML | Scienziato della longevità | DPhil (PhD) Biofisica Computazionale | Vitalista',
            [Locale.NL]: 'AI/ML-technoloog | Longevity-wetenschapper | DPhil (PhD) Computationele Biofysica | Vitalist',
            [Locale.CS]: 'Technolog AI/ML | Vědec v oblasti dlouhověkosti | DPhil (PhD) Výpočetní biofyzika | Vitalista',
          },
          location: 'Rome, Italy',
          image: '/ferdinando-randsini.png',
          socialLinks: {},
        },
      ],
    },
    {
      city: 'madrid',
      members: [
        { name: 'José Luis Cordeiro', description: 'Engineer, economist and futurist. Vice-chair of Humanity+, founding faculty at Singularity University, co-author of "The Death of Death". Advocates longevity escape velocity and aging as a curable disease.', descriptions: { [Locale.SV]: 'Ingenjör, ekonom och futurist. Vice ordförande för Humanity+, grundande fakultetsmedlem vid Singularity University, medförfattare till "The Death of Death". Förespråkar longevity escape velocity och åldrande som en behandlingsbar sjukdom.', [Locale.DE]: 'Ingenieur, Ökonom und Futurist. Stellvertretender Vorsitzender von Humanity+, Gründungsfakultät der Singularity University, Mitautor von "The Death of Death". Setzt sich für die Longevity Escape Velocity und Altern als heilbare Krankheit ein.', [Locale.FR]: 'Ingénieur, économiste et futuriste. Vice-président de Humanity+, membre fondateur du corps enseignant de la Singularity University, co-auteur de "The Death of Death". Défenseur de la vitesse d\'échappement à la longévité et du vieillissement comme maladie curable.', [Locale.ES]: 'Ingeniero, economista y futurista. Vicepresidente de Humanity+, miembro fundador del profesorado de la Singularity University, coautor de "The Death of Death". Defiende la velocidad de escape de la longevidad y el envejecimiento como enfermedad curable.', [Locale.IT]: 'Ingegnere, economista e futurista. Vicepresidente di Humanity+, membro fondatore del corpo docente della Singularity University, co-autore di "The Death of Death". Sostiene la velocità di fuga della longevità e l\'invecchiamento come malattia curabile.', [Locale.NL]: 'Ingenieur, econoom en futurist. Vice-voorzitter van Humanity+, oprichtend faculteitslid van de Singularity University, co-auteur van "The Death of Death". Pleit voor longevity escape velocity en veroudering als een behandelbare ziekte.', [Locale.CS]: 'Inženýr, ekonom a futurista. Místopředseda Humanity+, zakládající člen fakulty Singularity University, spoluautor knihy "The Death of Death". Zastává myšlenku longevity escape velocity a stárnutí jako léčitelné nemoci.' }, location: '', image: '/jose-luis-cordeiro.png' },
        { name: 'Maristela Bermúdez', description: 'Engineer working on sustainability and health. Director, International Longevity Summit, Madrid.', descriptions: { [Locale.SV]: 'Ingenjör som arbetar med hållbarhet och hälsa. Direktör, International Longevity Summit, Madrid.', [Locale.DE]: 'Ingenieurin, die an Nachhaltigkeit und Gesundheit arbeitet. Direktorin, International Longevity Summit, Madrid.', [Locale.FR]: 'Ingénieure travaillant sur la durabilité et la santé. Directrice, International Longevity Summit, Madrid.', [Locale.ES]: 'Ingeniera que trabaja en sostenibilidad y salud. Directora, International Longevity Summit, Madrid.', [Locale.IT]: 'Ingegnera che lavora su sostenibilità e salute. Direttrice, International Longevity Summit, Madrid.', [Locale.NL]: 'Ingenieur die werkt aan duurzaamheid en gezondheid. Directeur, International Longevity Summit, Madrid.', [Locale.CS]: 'Inženýrka pracující na udržitelnosti a zdraví. Ředitelka, International Longevity Summit, Madrid.' }, location: '', image: '/maristela-bermudez.png' },
        { name: 'Miguel Ferrero', description: 'Neuropsychologist, Advisor, International Longevity Summit, Madrid.', descriptions: { [Locale.SV]: 'Neuropsykolog, rådgivare, International Longevity Summit, Madrid.', [Locale.DE]: 'Neuropsychologe, Berater, International Longevity Summit, Madrid.', [Locale.FR]: 'Neuropsychologue, conseiller, International Longevity Summit, Madrid.', [Locale.ES]: 'Neuropsicólogo, asesor, International Longevity Summit, Madrid.', [Locale.IT]: 'Neuropsicólogo, consulente, International Longevity Summit, Madrid.', [Locale.NL]: 'Neuropsycholoog, adviseur, International Longevity Summit, Madrid.', [Locale.CS]: 'Neuropsycholog, poradce, International Longevity Summit, Madrid.' }, location: '', image: '/miguel-ferrero.png' },
      ],
    },
    {
      city: 'Prague',
      members: [
        {
          name: 'Georgij Boljuba',
          description: 'Aspiring longevity activist.',
          descriptions: {
            [Locale.SV]: 'Blivande longevityaktivist.',
            [Locale.DE]: 'Angehender Longevity-Aktivist.',
            [Locale.FR]: 'Militant en devenir pour la longévité.',
            [Locale.ES]: 'Aspirante a activista de la longevidad.',
            [Locale.IT]: 'Aspirante attivista della longevità.',
            [Locale.NL]: 'Aankomend longevity-activist.',
            [Locale.CS]: 'Začínající aktivista v oblasti dlouhověkosti.',
          },
          location: 'Prague, Czech Republic',
          image: '/georgij-boljuba.jpg',
          socialLinks: {},
        },
        {
          name: 'Petr Šrámek',
          description:
            'Czech entrepreneur, Managing Partner at VC LongevityTech.fund; CEO HealthyLongevity.clinic; Whytics Lead Scientist.',
          descriptions: {
            [Locale.SV]:
              'Tjeckisk entreprenör, Managing Partner på VC LongevityTech.fund; VD för HealthyLongevity.clinic; Whytics Lead Scientist.',
            [Locale.DE]:
              'Tschechischer Unternehmer, Managing Partner bei VC LongevityTech.fund; CEO von HealthyLongevity.clinic; Whytics Lead Scientist.',
            [Locale.FR]:
              'Entrepreneur tchèque, associé directeur chez VC LongevityTech.fund ; PDG de HealthyLongevity.clinic ; scientifique principal chez Whytics.',
            [Locale.ES]:
              'Emprendedor checo, socio director en VC LongevityTech.fund; CEO de HealthyLongevity.clinic; Whytics Lead Scientist.',
            [Locale.IT]:
              'Imprenditore ceco, Managing Partner di VC LongevityTech.fund; CEO di HealthyLongevity.clinic; Whytics Lead Scientist.',
            [Locale.NL]:
              'Tsjechische ondernemer, Managing Partner bij VC LongevityTech.fund; CEO van HealthyLongevity.clinic; Whytics Lead Scientist.',
            [Locale.CS]:
              'Český podnikatel, řídící partner ve VC LongevityTech.fund; CEO HealthyLongevity.clinic; vedoucí vědec ve Whytics.',
          },
          location: 'Prague, Czech Republic',
          socialLinks: { linkedin: 'https://www.linkedin.com/in/petrsramek/' },
        },
      ],
    },
    {
      city: 'Ljubljana',
      members: [
        {
          name: 'Martin Lipovšek',
          description: 'PhD student at University of Ljubljana. Member of the Board of Directors, International Longevity Alliance (ILA).',
          descriptions: {
            [Locale.SV]: 'Doktorandstudent vid Universitetet i Ljubljana. Styrelsemedlem, International Longevity Alliance (ILA).',
            [Locale.DE]: 'Doktorand an der Universität Ljubljana. Mitglied des Vorstands, International Longevity Alliance (ILA).',
            [Locale.FR]: 'Doctorant à l\'Université de Ljubljana. Membre du conseil d\'administration, International Longevity Alliance (ILA).',
            [Locale.ES]: 'Estudiante de doctorado en la Universidad de Ljubljana. Miembro del Consejo de Administración, International Longevity Alliance (ILA).',
            [Locale.IT]: 'Dottorando all\'Università di Ljubljana. Membro del Consiglio di Amministrazione, International Longevity Alliance (ILA).',
            [Locale.NL]: 'Promotieonderzoeker aan de Universiteit van Ljubljana. Lid van het bestuur, International Longevity Alliance (ILA).',
            [Locale.CS]: 'Doktorand na Univerzitě v Lublani. Člen představenstva, International Longevity Alliance (ILA).',
          },
          location: 'Ljubljana, Slovenia',
          image: '/martinlipovsek.jpeg',
          socialLinks: { linkedin: 'https://www.linkedin.com/in/martin-lipov%C5%A1ek-8905b3175/' },
        },
        {
          name: 'Zala Berk',
          description: 'Co-host. Student at University of Ljubljana, Faculty of Arts.',
          descriptions: {
            [Locale.SV]: 'Medvärd. Student vid Universitetet i Ljubljana, filosofiska fakulteten.',
            [Locale.DE]: 'Co-Moderatorin. Studentin an der Universität Ljubljana, Philosophische Fakultät.',
            [Locale.FR]: 'Co-animatrice. Étudiante à l\'Université de Ljubljana, faculté des lettres.',
            [Locale.ES]: 'Co-anfitriona. Estudiante en la Universidad de Ljubljana, Facultad de Letras.',
            [Locale.IT]: 'Co-host. Studentessa all\'Università di Lubiana, Facoltà di Lettere.',
            [Locale.NL]: 'Co-host. Student aan de Universiteit van Ljubljana, Faculteit der Letteren.',
            [Locale.CS]: 'Spoluhostitelka. Studentka na Univerzitě v Lublani, Filozofická fakulta.',
          },
          location: 'Ljubljana, Slovenia',
          socialLinks: { linkedin: 'https://www.linkedin.com/in/zala-berk-220v022/' },
        },
      ],
    },
    {
      city: 'telAviv',
      members: [
        {
          name: 'Ilia Stambler',
          description:
            'Chief Science Officer, Vetek (Seniority) Association, Israel. Fellow at Bar Ilan University. Chairman, International Longevity Alliance (ILA). Author of "A History of Life-extensionism in the Twentieth Century" and over 70 papers. Initiator of the Longevity Day and Month campaign.',
          descriptions: {
            [Locale.SV]: 'Chief Science Officer, Vetek (Seniority) Association, Israel. Forskarkolleg vid Bar Ilan University. Ordförande, International Longevity Alliance (ILA). Författare till "A History of Life-extensionism in the Twentieth Century" och över 70 artiklar. Initiativtagare till kampanjen Longevity Day and Month.',
            [Locale.DE]: 'Chief Science Officer, Vetek (Seniority) Association, Israel. Fellow an der Bar Ilan University. Vorsitzender, International Longevity Alliance (ILA). Autor von "A History of Life-extensionism in the Twentieth Century" und über 70 Veröffentlichungen. Initiator der Kampagne Longevity Day and Month.',
            [Locale.FR]: 'Directeur scientifique, Vetek (Seniority) Association, Israël. Fellow à l\'Université Bar Ilan. Président, International Longevity Alliance (ILA). Auteur de "A History of Life-extensionism in the Twentieth Century" et de plus de 70 articles. Initiateur de la campagne Longevity Day and Month.',
            [Locale.ES]: 'Director Científico, Vetek (Seniority) Association, Israel. Investigador asociado en la Universidad Bar Ilan. Presidente, International Longevity Alliance (ILA). Autor de "A History of Life-extensionism in the Twentieth Century" y más de 70 artículos. Iniciador de la campaña Longevity Day and Month.',
            [Locale.IT]: 'Chief Science Officer, Vetek (Seniority) Association, Israele. Fellow all\'Università Bar Ilan. Presidente, International Longevity Alliance (ILA). Autore di "A History of Life-extensionism in the Twentieth Century" e oltre 70 articoli. Iniziatore della campagna Longevity Day and Month.',
            [Locale.NL]: 'Chief Science Officer, Vetek (Seniority) Association, Israël. Fellow aan de Bar Ilan University. Voorzitter, International Longevity Alliance (ILA). Auteur van "A History of Life-extensionism in the Twentieth Century" en meer dan 70 artikelen. Initiatiefnemer van de Longevity Day and Month-campagne.',
            [Locale.CS]: 'Vědecký ředitel, Vetek (Seniority) Association, Izrael. Vědecký pracovník na Bar Ilan University. Předseda, International Longevity Alliance (ILA). Autor knihy "A History of Life-extensionism in the Twentieth Century" a více než 70 odborných článků. Iniciátor kampaně Longevity Day and Month.',
          },
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
          descriptions: {
            [Locale.SV]: 'Konsult inom hållbarhet och longevity, specialiserad på strategisk integration av välmåenderetreat, grön energiinfrastruktur och lyxvarutransformation för att etablera Svaneti (Georgien) som en ledande global destination för hälsa och high-end biohacking.',
            [Locale.DE]: 'Nachhaltigkeits- und Langlebigkeitsberaterin, spezialisiert auf die strategische Integration von Wellness-Retreats, grüner Energieinfrastruktur und Luxusmarken-Transformation, um Svaneti (Georgien) als erstklassiges globales Ziel für Gesundheit und High-End-Biohacking zu etablieren.',
            [Locale.FR]: 'Consultante en durabilité et longévité spécialisée dans l\'intégration stratégique des retraites bien-être, de l\'infrastructure énergétique verte et de la transformation des marques de luxe pour établir Svaneti (Géorgie) comme destination mondiale de premier plan pour la santé et le biohacking haut de gamme.',
            [Locale.ES]: 'Consultora de sostenibilidad y longevidad especializada en la integración estratégica de retiros de bienestar, infraestructura de energía verde y transformación de marcas de lujo para establecer Svaneti (Georgia) como un destino global de primer nivel para la salud y el biohacking de alta gama.',
            [Locale.IT]: 'Consulente di sostenibilità e longevità specializzata nell\'integrazione strategica di ritiri benessere, infrastrutture di energia verde e trasformazione di marchi di lusso per stabilire Svaneti (Georgia) come destinazione globale di prim\'ordine per la salute e il biohacking di alto livello.',
            [Locale.NL]: 'Duurzaamheids- en longevity-consultant gespecialiseerd in de strategische integratie van wellness-retraites, groene energieinfrastructuur en luxemerk-transformatie om Svaneti (Georgië) te vestigen als een toonaangevende wereldwijde bestemming voor gezondheid en high-end biohacking.',
            [Locale.CS]: 'Konzultantka v oblasti udržitelnosti a dlouhověkosti specializující se na strategickou integraci wellness retreatů, infrastruktury zelené energie a transformace luxusních značek za účelem etablování Svaneti (Gruzie) jako přední světové destinace pro zdraví a high-end biohacking.',
          },
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
        { name: 'Melissa King', description: 'Co-Founder and COO, Healthspan Action Coalition. Founding senior staff member, California Institute for Regenerative Medicine. Policy wonk, patient advocate and science communicator.', descriptions: { [Locale.SV]: 'Medgrundare och COO, Healthspan Action Coalition. Grundande seniorpersonal, California Institute for Regenerative Medicine. Policyexpert, patientförespråkare och vetenskapskommunikatör.', [Locale.DE]: 'Mitgründerin und COO, Healthspan Action Coalition. Gründendes leitendes Mitglied, California Institute for Regenerative Medicine. Politikexpertin, Patientenanwältin und Wissenschaftskommunikatorin.', [Locale.FR]: 'Cofondatrice et COO, Healthspan Action Coalition. Membre fondateur du personnel supérieur, California Institute for Regenerative Medicine. Experte en politiques, défenseure des patients et communicante scientifique.', [Locale.ES]: 'Cofundadora y COO, Healthspan Action Coalition. Miembro fundador del personal superior, California Institute for Regenerative Medicine. Experta en políticas, defensora de pacientes y comunicadora científica.', [Locale.IT]: 'Cofondatrice e COO, Healthspan Action Coalition. Membro fondatore dello staff senior, California Institute for Regenerative Medicine. Esperta di politiche, difensore dei pazienti e comunicatrice scientifica.', [Locale.NL]: 'Medeoprichter en COO, Healthspan Action Coalition. Oprichtend senior personeelslid, California Institute for Regenerative Medicine. Beleidsexpert, patiëntenadvocaat en wetenschapscommunicator.', [Locale.CS]: 'Spoluzakladatelka a COO, Healthspan Action Coalition. Zakládající člen vyššího personálu, California Institute for Regenerative Medicine. Odbornice na politiku, zastánkyně pacientů a popularizátorka vědy.' }, location: 'San Francisco, USA', image: '/melissa-king.jpg', socialLinks: {} },
      ],
    },
    {
      city: 'Austin',
      members: [
        {
          name: 'Aufstin Filiko',
          description:
            'Full Stack AI Engineer | LLM Agent Systems · Computer Vision · RAG Pipelines.',
          descriptions: {
            [Locale.SV]:
              'Full Stack AI-ingenjör | LLM-agentssystem · datorseende · RAG-pipelines.',
            [Locale.DE]:
              'Full-Stack-KI-Ingenieur | LLM-Agentensysteme · Computer Vision · RAG-Pipelines.',
            [Locale.FR]:
              'Ingénieur IA full stack | systèmes d\'agents LLM · vision par ordinateur · pipelines RAG.',
            [Locale.ES]:
              'Ingeniero de IA Full Stack | sistemas de agentes LLM · visión por computador · pipelines RAG.',
            [Locale.IT]:
              'Full Stack AI Engineer | sistemi di agenti LLM · computer vision · pipeline RAG.',
            [Locale.NL]:
              'Full Stack AI-engineer | LLM-agentsystemen · computervisie · RAG-pipelines.',
            [Locale.CS]:
              'Full Stack AI inženýr | LLM agentní systémy · počítačové vidění · RAG pipeline.',
          },
          location: 'Austin, Texas, USA',
          image: '/aufstin-filiko.png',
          socialLinks: { linkedin: 'https://www.linkedin.com/in/filiko/' },
        },
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
        { name: 'José Gregorio Bermúdez Cancine', description: 'Mechanical engineer, expert in the control of contracts for major projects in the oil and manufacturing industries.', descriptions: { [Locale.SV]: 'Maskiningenjör, expert på kontrollering av kontrakt för stora projekt inom olje- och tillverkningsindustrin.', [Locale.DE]: 'Maschinenbauingenieur, Experte für die Kontrolle von Verträgen für Großprojekte in der Öl- und Fertigungsindustrie.', [Locale.FR]: 'Ingénieur mécanicien, expert dans le contrôle des contrats pour les grands projets dans les industries pétrolière et manufacturière.', [Locale.ES]: 'Ingeniero mecánico, experto en el control de contratos para proyectos importantes en las industrias petrolera y manufacturera.', [Locale.IT]: 'Ingegnere meccanico, esperto nel controllo dei contratti per grandi progetti nelle industrie petrolifera e manifatturiera.', [Locale.NL]: 'Werktuigbouwkundig ingenieur, expert in de beheersing van contracten voor grote projecten in de olie- en maakindustrie.', [Locale.CS]: 'Strojní inženýr, expert na kontrolu smluv pro velké projekty v ropném a výrobním průmyslu.' }, location: 'Caracas, Venezuela', image: '/jose-caracas.jpeg' },
      ],
    },
    {
      city: 'liveStreamOrgs',
      members: [
        { name: 'Nastya Egorova', description: 'CEO & Co-Founder @Open Longevity and SayForever campaign, counselor @LBF, advisor @Vitalism Foundation. Biologist and artist by training, Nastya has been wearing multiple hats in science communication, social movements building, and open science projects.', descriptions: { [Locale.SV]: 'VD & medgrundare @Open Longevity och SayForever-kampanjen, rådgivare @LBF, konsult @Vitalism Foundation. Biolog och konstnär i grunden, Nastya har haft många roller inom vetenskapskommunikation, samhällsrörelseskapande och öppna vetenskapsprojekt.', [Locale.DE]: 'CEO & Mitgründerin @Open Longevity und SayForever-Kampagne, Beraterin @LBF, Beraterin @Vitalism Foundation. Als ausgebildete Biologin und Künstlerin hat Nastya viele Rollen in der Wissenschaftskommunikation, im Aufbau sozialer Bewegungen und in offenen Wissenschaftsprojekten übernommen.', [Locale.FR]: 'PDG et cofondatrice @Open Longevity et campagne SayForever, conseillère @LBF, conseillère @Vitalism Foundation. Biologiste et artiste de formation, Nastya a porté de nombreux chapeaux dans la communication scientifique, la construction de mouvements sociaux et les projets de science ouverte.', [Locale.ES]: 'CEO y cofundadora @Open Longevity y campaña SayForever, consejera @LBF, asesora @Vitalism Foundation. Bióloga y artista de formación, Nastya ha desempeñado múltiples roles en comunicación científica, construcción de movimientos sociales y proyectos de ciencia abierta.', [Locale.IT]: 'CEO e cofondatrice @Open Longevity e campagna SayForever, consigliera @LBF, consulente @Vitalism Foundation. Biologa e artista di formazione, Nastya ha ricoperto molteplici ruoli nella comunicazione scientifica, nella costruzione di movimenti sociali e nei progetti di scienza aperta.', [Locale.NL]: 'CEO en medeoprichter @Open Longevity en SayForever-campagne, adviseur @LBF, adviseur @Vitalism Foundation. Biologe en kunstenares van opleiding, Nastya heeft meerdere rollen vervuld in wetenschapscommunicatie, het opbouwen van sociale bewegingen en open wetenschapsprojecten.', [Locale.CS]: 'CEO a spoluzakladatelka @Open Longevity a kampaně SayForever, poradkyně @LBF, poradkyně @Vitalism Foundation. Bioložka a umělkyně vzděláním, Nastya zastávala mnoho rolí ve vědecké komunikaci, budování sociálních hnutí a projektech otevřené vědy.' }, location: '', image: '/nastya.jpg', socialLinks: { linkedin: 'https://www.linkedin.com/in/nastya-egorova/' } },
        { name: 'Danila Immortalist', description: '', location: '', image: '/danila-immortalist.jpeg' },
      ],
    },
  ],
};
