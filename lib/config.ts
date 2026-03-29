import type { Metadata } from 'next';
import { LOCALES, Locale } from './types';

export const siteUrl =
  (typeof process !== 'undefined' && process.env['NEXT_PUBLIC_SITE_URL']) ||
  'https://fund-longevity.web.app';

export const ogLocaleByLang: Record<string, string> = {
  en: 'en_US',
  sv: 'sv_SE',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
  it: 'it_IT',
  nl: 'nl_NL',
  cs: 'cs_CZ',
};

export function getOgLocale(lang: string): string {
  const v = ogLocaleByLang[lang];
  return v !== undefined ? v : 'en_US';
}

export const defaultOgImage = '/hero4.jpg';

export function buildLocalizedPageMetadata(opts: {
  lang: string;
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  const { lang, title, description, path, ogImage = defaultOgImage } = opts;
  const languages = Object.fromEntries(
    LOCALES.map((loc) => [loc, path.replace(/^\/[^/]+/, `/${loc}`)]),
  );
  return {
    title,
    description,
    alternates: { canonical: path, languages },
    openGraph: {
      type: 'website',
      title,
      description,
      url: path,
      locale: getOgLocale(lang),
      alternateLocale: LOCALES.filter((loc) => loc !== lang).map((loc) => getOgLocale(loc)),
      siteName: 'Fund Longevity',
      images: [{ url: ogImage, alt: title }],
    },
    robots: { index: true, follow: true },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

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
  /** Locale-specific overrides for description. Falls back to `description` (English) if not set. */
  descriptions?: Partial<Record<Locale, string>>;
  url?: string;
  logoSize?: 'small' | 'medium' | 'normal' | 'large';
}

export const PARTNERS: Partner[] = [
  {
    name: 'Vitalism',
    logo: '/vitalism-logo.jpg',
    url: 'https://www.vitalism.io',
    description: 'Coordinates key leaders, government, business, and academia to direct unprecedented attention towards solving humanity\'s greatest challenge, death.',
    descriptions: {
      [Locale.SV]: 'Samordnar nyckelledare, myndigheter, näringsliv och akademi för att rikta exceptionell uppmärksamhet mot att lösa mänsklighetens största utmaning: döden.',
      [Locale.DE]: 'Koordiniert Schlüsselführungskräfte, Regierung, Wirtschaft und Wissenschaft, um beispiellose Aufmerksamkeit auf die Lösung der größten Herausforderung der Menschheit zu lenken: den Tod.',
      [Locale.FR]: 'Coordonne les dirigeants clés, le gouvernement, les entreprises et le monde académique pour diriger une attention sans précédent vers la résolution du plus grand défi de l\'humanité : la mort.',
      [Locale.ES]: 'Coordina a líderes clave, gobierno, empresa y academia para dirigir una atención sin precedentes hacia la resolución del mayor desafío de la humanidad: la muerte.',
      [Locale.IT]: 'Coordina leader chiave, governo, imprese e accademia per orientare un\'attenzione senza precedenti verso la soluzione della più grande sfida dell\'umanità: la morte.',
      [Locale.NL]: 'Coördineert sleutelfiguren, overheid, bedrijfsleven en academische wereld om ongekende aandacht te richten op het oplossen van de grootste uitdaging van de mensheid: de dood.',
      [Locale.CS]: 'Koordinuje klíčové lídry, vládu, byznys a akademickou sféru, aby nasměrovala bezprecedentní pozornost k řešení největší výzvy lidstva: smrti.',
    },
  },
  {
    name: 'Longevity Biotech Fellowship',
    logo: '/lbf-logo.jpg',
    url: 'https://www.longbiofellowship.org',
    description: 'A community of hardcore Longevity Accelerationists. Our members build, join, and invest in revolutionary biotechnology projects for radical life extension.',
    descriptions: {
      [Locale.SV]: 'En gemenskap av engagerade Longevity-accelerationister. Våra medlemmar bygger, deltar i och investerar i revolutionära bioteknologiprojekt för radikal livsförlängning.',
      [Locale.DE]: 'Eine Gemeinschaft von überzeugten Longevity-Beschleunigern. Unsere Mitglieder bauen revolutionäre Biotechnologieprojekte für radikale Lebensverlängerung auf, schließen sich ihnen an und investieren in sie.',
      [Locale.FR]: 'Une communauté d\'accélérationnistes de la longévité engagés. Nos membres construisent, rejoignent et investissent dans des projets de biotechnologie révolutionnaires pour l\'extension radicale de la vie.',
      [Locale.ES]: 'Una comunidad de Longevity Accelerationists dedicados. Nuestros miembros construyen, se unen e invierten en proyectos de biotecnología revolucionarios para la extensión radical de la vida.',
      [Locale.IT]: 'Una comunità di Longevity Accelerazionisti appassionati. I nostri membri costruiscono, si uniscono e investono in progetti di biotecnologia rivoluzionari per l\'estensione radicale della vita.',
      [Locale.NL]: 'Een gemeenschap van toegewijde Longevity-accelerationisten. Onze leden bouwen aan, sluiten zich aan bij en investeren in revolutionaire biotechnologieprojecten voor radicale levensverlenging.',
      [Locale.CS]: 'Komunita oddaných Longevity Acceleracionistů. Naši členové budují, připojují se a investují do revolučních biotechnologických projektů pro radikální prodloužení života.',
    },
  },
  {
    name: 'Swedish Longevity Cluster',
    logo: '/SLC-logo.png',
    url: 'https://www.swedishlongevitycluster.se',
    description: 'An organization with the goal of kickstarting the longevity industry in the Nordics and work on longevity advocacy.',
    descriptions: {
      [Locale.SV]: 'En organisation med målet att starta upp longevityindustrin i Norden och arbeta med longevity-förespråkande.',
      [Locale.DE]: 'Eine Organisation mit dem Ziel, die Langlebigkeitsindustrie in den nordischen Ländern anzukurbeln und sich für Langlebigkeit einzusetzen.',
      [Locale.FR]: 'Une organisation dont l\'objectif est de lancer l\'industrie de la longévité dans les pays nordiques et de travailler sur la promotion de la longévité.',
      [Locale.ES]: 'Una organización con el objetivo de impulsar la industria de la longevidad en los países nórdicos y trabajar en la defensa de la longevidad.',
      [Locale.IT]: 'Un\'organizzazione con l\'obiettivo di avviare l\'industria della longevità nei paesi nordici e lavorare sulla promozione della longevità.',
      [Locale.NL]: 'Een organisatie met als doel de longevity-industrie in de Noordse landen op gang te brengen en te werken aan longevity-belangenbehartiging.',
      [Locale.CS]: 'Organizace s cílem nastartovat průmysl dlouhověkosti v severských zemích a pracovat na advokacii dlouhověkosti.',
    },
  },
  {
    name: 'Levity',
    logo: '/levity.png',
    logoSize: 'medium' as const,
    url: 'https://reachlevity.com',
    description: 'Levity is an independent longevity media platform, shaping the conversation that will take us to longevity escape velocity. Sign up for the newsletter at reachlevity.com',
    descriptions: {
      [Locale.SV]: 'Levity är en oberoende longevitets-medieplattform som formar samtalet som tar oss till longevity escape velocity. Anmäl dig till nyhetsbrevet på reachlevity.com',
      [Locale.DE]: 'Levity ist eine unabhängige Langlebigkeits-Medienplattform, die das Gespräch gestaltet, das uns zur Longevity Escape Velocity bringt. Melde dich für den Newsletter auf reachlevity.com an',
      [Locale.FR]: 'Levity est une plateforme médiatique indépendante sur la longévité, qui façonne la conversation qui nous mènera à la vitesse d\'échappement de la longévité. Inscrivez-vous à la newsletter sur reachlevity.com',
      [Locale.ES]: 'Levity es una plataforma de medios de comunicación independiente sobre longevidad, que da forma a la conversación que nos llevará a la velocidad de escape de la longevidad. Regístrate en el boletín en reachlevity.com',
      [Locale.IT]: 'Levity è una piattaforma media indipendente sulla longevità, che modella la conversazione che ci porterà alla velocità di fuga della longevità. Iscriviti alla newsletter su reachlevity.com',
      [Locale.NL]: 'Levity is een onafhankelijk longevity-mediaplatform dat het gesprek vormt dat ons naar longevity escape velocity brengt. Schrijf je in voor de nieuwsbrief op reachlevity.com',
      [Locale.CS]: 'Levity je nezávislá mediální platforma zaměřená na dlouhověkost, která formuje konverzaci, která nás přivede k longevity escape velocity. Přihlaste se k newsletteru na reachlevity.com',
    },
  },
  {
    name: 'Heales',
    logo: '/heales.jpg',
    logoSize: 'medium' as const,
    url: 'https://heales.org',
    description: 'Heales is an organization that informs and raises awareness about technological and medical developments in the field of biogerontology.',
    descriptions: {
      [Locale.SV]: 'Heales är en organisation som informerar om och ökar medvetenheten om teknologiska och medicinska framsteg inom biogerontologi.',
      [Locale.DE]: 'Heales ist eine Organisation, die über technologische und medizinische Entwicklungen auf dem Gebiet der Biogerontologie informiert und das Bewusstsein dafür schärft.',
      [Locale.FR]: 'Heales est une organisation qui informe et sensibilise aux développements technologiques et médicaux dans le domaine de la biogérontologie.',
      [Locale.ES]: 'Heales es una organización que informa y conciencia sobre los avances tecnológicos y médicos en el campo de la biogerontología.',
      [Locale.IT]: 'Heales è un\'organizzazione che informa e sensibilizza sugli sviluppi tecnologici e medici nel campo della biogerontologia.',
      [Locale.NL]: 'Heales is een organisatie die informeert en bewustzijn kweekt over technologische en medische ontwikkelingen op het gebied van biogerontologie.',
      [Locale.CS]: 'Heales je organizace, která informuje a zvyšuje povědomí o technologických a lékařských pokrocích v oblasti biogerontologie.',
    },
  },
  {
    name: 'Open Longevity',
    logo: '/open-longevity-logo.png',
    logoSize: 'large' as const,
    url: 'https://openlongevity.org',
    description: 'A life extension community focused on fighting aging and death through scientific methods. Runs multiple active projects including Open Genes database, AgingNets, and research initiatives.',
    descriptions: {
      [Locale.SV]: 'En livsförlängningsgemenskap som fokuserar på att bekämpa åldrande och döden med vetenskapliga metoder. Driver flera aktiva projekt inklusive Open Genes-databasen, AgingNets och forskningsinitiativ.',
      [Locale.DE]: 'Eine Gemeinschaft zur Lebensverlängerung, die sich auf die Bekämpfung von Altern und Tod durch wissenschaftliche Methoden konzentriert. Betreibt mehrere aktive Projekte, darunter die Open-Genes-Datenbank, AgingNets und Forschungsinitiativen.',
      [Locale.FR]: 'Une communauté d\'extension de la vie axée sur la lutte contre le vieillissement et la mort par des méthodes scientifiques. Gère plusieurs projets actifs, notamment la base de données Open Genes, AgingNets et des initiatives de recherche.',
      [Locale.ES]: 'Una comunidad de extensión de la vida centrada en combatir el envejecimiento y la muerte mediante métodos científicos. Gestiona múltiples proyectos activos, incluida la base de datos Open Genes, AgingNets e iniciativas de investigación.',
      [Locale.IT]: 'Una comunità per l\'estensione della vita focalizzata sul combattere l\'invecchiamento e la morte attraverso metodi scientifici. Gestisce molteplici progetti attivi tra cui il database Open Genes, AgingNets e iniziative di ricerca.',
      [Locale.NL]: 'Een levensverlengingsgemeenschap gericht op het bestrijden van veroudering en de dood door middel van wetenschappelijke methoden. Beheert meerdere actieve projecten, waaronder de Open Genes-database, AgingNets en onderzoeksinitiatieven.',
      [Locale.CS]: 'Komunita zaměřená na prodlužování života bojující proti stárnutí a smrti vědeckými metodami. Provozuje několik aktivních projektů včetně databáze Open Genes, AgingNets a výzkumných iniciativ.',
    },
  },
  {
    name: 'VivaCity',
    logo: '/viva-city.avif',
    logoSize: 'small' as const,
    url: 'https://viva.city',
    description: 'A permanent physical city being built for people who prioritize longevity and life extension research, with a mission to make death optional by bringing together experts and innovators to accelerate aging science.',
    descriptions: {
      [Locale.SV]: 'En permanent fysisk stad som byggs för personer som prioriterar forskning om longevity och livsförlängning, med uppdraget att göra döden valfri genom att samla experter och innovatörer för att påskynda åldringsvetenskap.',
      [Locale.DE]: 'Eine dauerhafte physische Stadt, die für Menschen gebaut wird, die Langlebigkeits- und Lebensverlängerungsforschung priorisieren, mit der Mission, den Tod optional zu machen, indem Experten und Innovatoren zusammengebracht werden, um die Altersforschung zu beschleunigen.',
      [Locale.FR]: 'Une ville physique permanente construite pour les personnes qui accordent la priorité à la recherche sur la longévité et l\'extension de la vie, avec la mission de rendre la mort optionnelle en rassemblant des experts et des innovateurs pour accélérer la science du vieillissement.',
      [Locale.ES]: 'Una ciudad física permanente que se construye para personas que priorizan la investigación sobre longevidad y extensión de la vida, con la misión de hacer que la muerte sea opcional reuniendo a expertos e innovadores para acelerar la ciencia del envejecimiento.',
      [Locale.IT]: 'Una città fisica permanente in costruzione per persone che danno priorità alla ricerca sulla longevità e sull\'estensione della vita, con la missione di rendere la morte opzionale riunendo esperti e innovatori per accelerare la scienza dell\'invecchiamento.',
      [Locale.NL]: 'Een permanente fysieke stad die gebouwd wordt voor mensen die longevity en levensverlengingsonderzoek prioriteit geven, met de missie om de dood optioneel te maken door experts en innovators samen te brengen om de verouderingswetenschap te versnellen.',
      [Locale.CS]: 'Permanentní fyzické město budované pro lidi, kteří upřednostňují výzkum dlouhověkosti a prodlužování života, s posláním učinit smrt volitelnou tím, že spojí odborníky a inovátory k urychlení vědy o stárnutí.',
    },
  },
  {
    name: 'HydraDAO',
    logo: '/hydradao.png',
    logoSize: 'small' as const,
    url: 'https://hydradao.org',
    description: 'A DeSci DAO dedicated to advancing human longevity through biological replacement research, funding tissue, organ, and whole-body replacement projects to radically extend human lifespan.',
    descriptions: {
      [Locale.SV]: 'En DeSci DAO dedikerad till att främja mänsklig longevity genom biologisk ersättningsforskning, finansiering av vävnads-, organ- och helkroppsprojekt för att radikalt förlänga den mänskliga livslängden.',
      [Locale.DE]: 'Eine DeSci-DAO, die sich der Förderung menschlicher Langlebigkeit durch biologische Ersetzungsforschung widmet und Gewebe-, Organ- und Ganzkörperersetzungsprojekte finanziert, um die menschliche Lebensspanne radikal zu verlängern.',
      [Locale.FR]: 'Une DAO DeSci dédiée à l\'avancement de la longévité humaine grâce à la recherche sur le remplacement biologique, finançant des projets de remplacement de tissus, d\'organes et de corps entier pour prolonger radicalement la durée de vie humaine.',
      [Locale.ES]: 'Una DAO DeSci dedicada a avanzar en la longevidad humana mediante investigaciones de reemplazo biológico, financiando proyectos de reemplazo de tejidos, órganos y cuerpo completo para extender radicalmente la vida humana.',
      [Locale.IT]: 'Una DAO DeSci dedicata all\'avanzamento della longevità umana attraverso la ricerca sulla sostituzione biologica, finanziando progetti di sostituzione di tessuti, organi e corpo intero per estendere radicalmente la durata della vita umana.',
      [Locale.NL]: 'Een DeSci DAO gewijd aan het bevorderen van menselijke longeviteit door middel van biologisch vervangingsonderzoek, met financiering van weefsel-, orgaan- en gehele lichaamsvervangingsprojecten om de menselijke levensduur radicaal te verlengen.',
      [Locale.CS]: 'DeSci DAO věnovaná podpoře lidské dlouhověkosti prostřednictvím výzkumu biologické náhrady, financování projektů náhrady tkání, orgánů a celého těla s cílem radikálně prodloužit lidský věk.',
    },
  },
  {
    name: 'CryoDAO',
    logo: '/cryodao.svg',
    logoSize: 'small' as const,
    url: 'https://www.cryodao.org',
    description: 'A community-driven DAO advancing cryopreservation research, funding high-potential projects to improve cryopreservation quality and capabilities for life extension.',
    descriptions: {
      [Locale.SV]: 'En gemenskapsstyrd DAO som driver kryopreserveringsforskning, finansierar högpotentiella projekt för att förbättra kryopreserveringskvalitet och -kapacitet för livsförlängning.',
      [Locale.DE]: 'Eine gemeinschaftlich geführte DAO, die Kryokonservierungsforschung vorantreibt und hochpotenzielle Projekte zur Verbesserung der Qualität und Möglichkeiten der Kryokonservierung für die Lebensverlängerung finanziert.',
      [Locale.FR]: 'Une DAO communautaire qui fait avancer la recherche sur la cryoconservation, finançant des projets à fort potentiel pour améliorer la qualité et les capacités de cryoconservation pour l\'extension de la vie.',
      [Locale.ES]: 'Una DAO impulsada por la comunidad que avanza en la investigación de criopreservación, financiando proyectos de alto potencial para mejorar la calidad y las capacidades de criopreservación para la extensión de la vida.',
      [Locale.IT]: 'Una DAO guidata dalla comunità che promuove la ricerca sulla crioconservazione, finanziando progetti ad alto potenziale per migliorare la qualità e le capacità di crioconservazione per l\'estensione della vita.',
      [Locale.NL]: 'Een door de gemeenschap gedreven DAO die cryopreservatieonderzoek bevordert, met financiering van projecten met hoog potentieel om de kwaliteit en mogelijkheden van cryopreservatie voor levensverlenging te verbeteren.',
      [Locale.CS]: 'DAO řízená komunitou, která rozvíjí výzkum kryokonzervace a financuje vysoce slibné projekty ke zlepšení kvality a schopností kryokonzervace pro prodloužení života.',
    },
  },
  {
    name: 'Age.House',
    logo: '/age-house-logo.png',
    url: 'https://age.house',
    description: 'Longevity community and advocacy.',
    descriptions: {
      [Locale.SV]: 'Longevitets-community och opinionsbildning.',
      [Locale.DE]: 'Langlebigkeits-Community und Interessenvertretung.',
      [Locale.FR]: 'Communauté et plaidoyer pour la longévité.',
      [Locale.ES]: 'Comunidad de longevidad y defensa.',
      [Locale.IT]: 'Comunità e difesa della longevità.',
      [Locale.NL]: 'Longevity-gemeenschap en belangenbehartiging.',
      [Locale.CS]: 'Komunita a advokacie v oblasti dlouhověkosti.',
    },
  },
  {
    name: 'International Longevity Alliance',
    logo: '/international-longevity-alliance.jpeg',
    logoSize: 'medium' as const,
    url: 'https://longevityalliance.org',
    description: 'Coalition of organizations and individuals advocating for longevity research and aging as a treatable condition.',
    descriptions: {
      [Locale.SV]: 'Koalition av organisationer och individer som förespråkar longevitetsforskning och åldrande som ett behandlingsbart tillstånd.',
      [Locale.DE]: 'Koalition von Organisationen und Einzelpersonen, die sich für Langlebigkeitsforschung und Altern als behandelbare Erkrankung einsetzen.',
      [Locale.FR]: 'Coalition d\'organisations et d\'individus plaidant pour la recherche sur la longévité et le vieillissement comme condition traitable.',
      [Locale.ES]: 'Coalición de organizaciones e individuos que abogan por la investigación sobre longevidad y el envejecimiento como una condición tratable.',
      [Locale.IT]: 'Coalizione di organizzazioni e individui che sostengono la ricerca sulla longevità e l\'invecchiamento come condizione trattabile.',
      [Locale.NL]: 'Coalitie van organisaties en individuen die pleiten voor longevity-onderzoek en veroudering als behandelbare aandoening.',
      [Locale.CS]: 'Koalice organizací a jednotlivců prosazující výzkum dlouhověkosti a stárnutí jako léčitelného stavu.',
    },
  },
  {
    name: 'Society for vital life extension of Slovenia',
    logo: '/partner-slovenia-vital-life-extension.png',
    logoSize: 'medium' as const,
    description:
      'Slovenian nonprofit: public outreach on life extension, events, advocacy, light research, and connecting people in the field. Founded 2017; International Longevity Alliance member since 2019.',
    descriptions: {
      [Locale.SV]: 'Slovenskt ideellt: folkupplysning om livsförlängning, evenemang, opinionsbildning, viss forskning och nätverkande inom området. Grundat 2017; International Longevity Alliance-medlem sedan 2019.',
      [Locale.DE]: 'Slowenische gemeinnützige Organisation: Öffentlichkeitsarbeit zur Lebensverl\u00e4ngerung, Veranstaltungen, Interessenvertretung, leichte Forschung und Vernetzung von Fachleuten. Gegründet 2017; International Longevity Alliance-Mitglied seit 2019.',
      [Locale.FR]: 'Association slovène à but non lucratif : sensibilisation du public à l\'extension de la vie, événements, plaidoyer, recherche légère et mise en réseau des acteurs du domaine. Fondée en 2017 ; membre de l\'International Longevity Alliance depuis 2019.',
      [Locale.ES]: 'Organización sin ánimo de lucro eslovena: divulgación pública sobre extensión de la vida, eventos, defensa, investigación ligera y conexión de personas en el campo. Fundada en 2017; miembro de International Longevity Alliance desde 2019.',
      [Locale.IT]: 'Nonprofit slovena: sensibilizzazione pubblica sull\'estensione della vita, eventi, advocacy, ricerca leggera e collegamento di persone nel settore. Fondata nel 2017; membro dell\'International Longevity Alliance dal 2019.',
      [Locale.NL]: 'Sloveense non-profit: publieke voorlichting over levensverlenging, evenementen, belangenbehartiging, licht onderzoek en netwerken in het vakgebied. Opgericht in 2017; International Longevity Alliance-lid sinds 2019.',
      [Locale.CS]: 'Slovinská nezisková organizace: osvěta veřejnosti o prodlužování života, akce, advokacie, lehký výzkum a propojování lidí v oboru. Založena 2017; člen International Longevity Alliance od roku 2019.',
    },
  },
  {
    name: 'Humanity+',
    logo: '/humanityplus.jpg',
    logoSize: 'medium' as const,
    url: 'https://www.humanityplus.org',
    description: 'Advocates for the ethical use of technology and evidence-based science to expand human capabilities. Educational organization at the forefront of healthy longevity, AI, and the future of humanity; runs H+ Summits and TransVision conferences.',
    descriptions: {
      [Locale.SV]: 'Förespråkar etisk användning av teknik och evidensbaserad vetenskap för att utöka mänskliga förmågor. Utbildningsorganisation i framkant av hälsosam longevitet, AI och mänsklighetens framtid; arrangerar H+ Summits och TransVision-konferenser.',
      [Locale.DE]: 'Setzt sich für den ethischen Einsatz von Technologie und evidenzbasierter Wissenschaft zur Erweiterung menschlicher Fähigkeiten ein. Bildungsorganisation an der Spitze von gesunder Langlebigkeit, KI und der Zukunft der Menschheit; veranstaltet H+ Summits und TransVision-Konferenzen.',
      [Locale.FR]: 'Plaide pour l\'utilisation éthique de la technologie et de la science fondée sur des preuves pour élargir les capacités humaines. Organisation éducative à l\'avant-garde de la longévité saine, de l\'IA et de l\'avenir de l\'humanité ; organise les H+ Summits et les conférences TransVision.',
      [Locale.ES]: 'Aboga por el uso ético de la tecnología y la ciencia basada en evidencia para ampliar las capacidades humanas. Organización educativa a la vanguardia de la longevidad saludable, la IA y el futuro de la humanidad; organiza las Cumbres H+ y las conferencias TransVision.',
      [Locale.IT]: 'Sostiene l\'uso etico della tecnologia e della scienza basata sulle prove per espandere le capacità umane. Organizzazione educativa all\'avanguardia della longevità sana, dell\'IA e del futuro dell\'umanità; organizza gli H+ Summit e le conferenze TransVision.',
      [Locale.NL]: 'Pleit voor het ethisch gebruik van technologie en op bewijs gebaseerde wetenschap om menselijke mogelijkheden te vergroten. Educatieve organisatie aan de voorhoede van gezonde longeviteit, AI en de toekomst van de mensheid; organiseert H+ Summits en TransVision-conferenties.',
      [Locale.CS]: 'Prosazuje etické využití technologií a vědecky podložené vědy pro rozšíření lidských schopností. Vzdělávací organizace v čele zdravé dlouhověkosti, AI a budoucnosti lidstva; pořádá summity H+ a konference TransVision.',
    },
  },
  {
    name: 'HSAC',
    logo: '/hsac-logo.jpg',
    url: 'https://healthspanaction.org',
    description: 'A worldwide, cross-sector societal movement helping to establish a new paradigm in medicine.',
    descriptions: {
      [Locale.SV]: 'En världsomfattande, sektorsöverskridande samhällsrörelse som bidrar till att etablera ett nytt paradigm inom medicin.',
      [Locale.DE]: 'Eine weltweite, sektorenübergreifende gesellschaftliche Bewegung, die hilft, ein neues Paradigma in der Medizin zu etablieren.',
      [Locale.FR]: 'Un mouvement sociétal mondial et intersectoriel aidant à établir un nouveau paradigme en médecine.',
      [Locale.ES]: 'Un movimiento social mundial y multisectorial que ayuda a establecer un nuevo paradigma en medicina.',
      [Locale.IT]: 'Un movimento sociale mondiale e intersettoriale che aiuta a stabilire un nuovo paradigma in medicina.',
      [Locale.NL]: 'Een wereldwijde, sectoroverschrijdende maatschappelijke beweging die helpt een nieuw paradigma in de geneeskunde te vestigen.',
      [Locale.CS]: 'Celosvětové, mezisektorové společenské hnutí pomáhající ustanovit nové paradigma v medicíně.',
    },
  },
];
