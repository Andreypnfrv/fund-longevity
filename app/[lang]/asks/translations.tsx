import type { Translation } from '@/lib/types';
import { Locale } from '@/lib/types';

export type AskBlueprintSection = {
  title: string;
  bullets: string[];
};

export type AsksBlueprint = {
  heroTitle: string;
  heroSubtitle: string;
  lead: string;
  objectivesLabel: string;
  objectives: string;
  ownershipLabel: string;
  ownership: string;
  sections: AskBlueprintSection[];
};

export const asksUiTranslations = {
  nasdaqImageAlt: {
    [Locale.EN]: 'Fund Longevity rally at Nasdaq, Times Square',
    [Locale.SV]: 'Fund Longevity-manifestation vid Nasdaq, Times Square',
    [Locale.DE]: 'Fund Longevity-Kundgebung am Nasdaq, Times Square',
    [Locale.FR]: 'Rassemblement Fund Longevity au Nasdaq, Times Square',
    [Locale.ES]: 'Manifestación Fund Longevity en el Nasdaq, Times Square',
    [Locale.IT]: 'Raduno Fund Longevity al Nasdaq, Times Square',
    [Locale.NL]: 'Fund Longevity-bijeenkomst bij Nasdaq, Times Square',
    [Locale.CS]: 'Shromáždění Fund Longevity u Nasdaq na Times Square',
  } satisfies Translation,
};

const asksBlueprintEn = {
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
} as const;

const asksBlueprintSv = {
  heroTitle: 'Stat för lång livslängd',
  heroSubtitle: 'En policyplan för en åldrande värld',
  lead: 'Åldrande är den främsta orsaken till död, funktionsnedsättning och sjukvårdskostnader — men det får en bråkdel av anslagen som läggs på dess symtom, som cancer och hjärtsjukdom. Med en åldrande befolkning och krympande arbetskraft är förlängda friska produktiva år den mest brådskande demografiska utmaningen och den mest försummade.',
  objectivesLabel: 'Mål',
  objectives:
    'Förlängda friska och produktiva år, lägre funktionshinder — längre arbetsliv, bredare skattebas, lägre omsorgskostnader. Effekten växer över tid.',
  ownershipLabel: 'Ansvar',
  ownership:
    'Styrs av en departementsöverskridande kommission (hälsa, utbildning, vetenskap, ekonomi, arbete) med en enhetlig nationell longivitetsstrategi, finansierad med 1 % av statens årliga budget.',
  sections: [
    {
      title:
        'Talanger — Attrahera, utveckla och behålla ledande kompetens inom åldringsvetenskap genom att ta bort hinder för inträde och stärka utbildning',
      bullets: [
        'Snabbspår för visum och erkännande av legitimation för forskare och kliniker',
        'Doktorand-/MD–PhD-program som förenar åldringsbiologi, medicin och datavetenskap',
      ],
    },
    {
      title:
        'Vetenskap — Hållbar långsiktig finansiering av åldringsforskning och gränsöverskridande interventioner',
      bullets: [
        'Avsedd finansiering särskilt för grundforskning om åldrande',
        'Riskproportionell reglering av humangeneditering, i stället för generella förbud',
      ],
    },
    {
      title:
        'Överföring — Anpassad reglering och offentlig finansiering för rättvis tillgängliga terapier',
      bullets: [
        'Särskild longivitetsmyndighet efter ARPA/DARPA-modellen: riktade utmaningar, konkurrenskraftigt genomförande, icke-utspädande finansiering, immateriella rättigheter hos utvecklare',
        'Anpassade licensieringar med syntetiska kontrollarmar från nationella hälsodata',
        'Regulatoriska sandlådor för kombinations- och återanvända terapier',
        'Rätt att pröva terapier',
        'Offentligt finansierade terapier prissatta för universell tillgänglighet via nationella sjukvårdssystem',
      ],
    },
    {
      title:
        'Hälso- och sjukvård — Klinisk infrastruktur optimerad för prevention i befolkningsstorlek',
      bullets: [
        'Screening och prevention i befolkningsstorlek mot stora åldersrelaterade sjukdomsrisker',
        'Longitudinell insamling av biomarkörer — funktionella och molekylära — opt-out som standard',
        'Integrering av preventiva studier i rutinklinisk praxis',
        'Geroterapeutiska endpoints i bedömning och ersättningsmodeller för medicinteknik',
      ],
    },
    {
      title:
        'Data — Öppet, interoperabelt och skalbart dataekosystem som driver åldringsforskning',
      bullets: [
        'Säker fri tillgång till anonymiserad data för alla forskare och AI-tillämpningar',
        'Enhetliga interoperabilitetsstandarder för hälsa, forskning och registerdata',
        'Standardiserade endpoints för geroterapeutiska studier',
      ],
    },
    {
      title:
        'Internationellt — Samordning för det inget land klarar ensamt',
      bullets: [
        'AI-anpassade perturbationsscreeningprogram och delad molekylär datainfrastruktur',
        'Ömsesidigt erkännande av kliniska studieresultat och utfallet i regulatoriska sandlådor',
        'Delad forskningsinfrastruktur: våtlabb, modellorganismer, beräkning, perturbationsscreening',
        'Offentlig dialog mot desinformation om longivitetsvetenskap',
      ],
    },
  ] satisfies AskBlueprintSection[],
} as const;

const asksBlueprintDe = {
  heroTitle: 'Staat Langlebigkeit',
  heroSubtitle: 'Ein Policy-Blueprint für die alternde Welt',
  lead: 'Altern ist die führende Ursache für Tod, Behinderung und Gesundheitskosten — erhält aber einen Bruchteil der Mittel, die für seine Symptome wie Krebs und Herzerkrankungen ausgegeben werden. Bei alternden Bevölkerungen und schrumpfenden Erwerbsbevölkerungen ist die Verlängerung gesunder produktiver Jahre die dringendste demografische Herausforderung und die am stärksten vernachlässigte.',
  objectivesLabel: 'Ziele',
  objectives:
    'Verlängerte gesunde und produktive Jahre, geringere Belastung durch Behinderung — längere Erwerbstätigkeit, breitere Steuerbasis, geringere Pflegekosten. Die Wirkung verstärkt sich über die Zeit.',
  ownershipLabel: 'Verantwortung',
  ownership:
    'Gesteuert von einer ministerienübergreifenden Kommission (Gesundheit, Bildung, Wissenschaft, Wirtschaft, Arbeit) mit einer einheitlichen nationalen Langlebigkeitsstrategie, finanziert mit 1 % des jährlichen Staatshaushalts.',
  sections: [
    {
      title:
        'Talente — Spitzenkräfte der Langlebigkeitsforschung anziehen, entwickeln und halten, indem Zugangshürden abgebaut und Ausbildung gestärkt werden',
      bullets: [
        'Beschleunigte Visa und Anerkennung von Qualifikationen für Forschende und Kliniker',
        'PhD-/MD-PhD-Programme, die Alternsbiologie, Medizin und Datenwissenschaft verbinden',
      ],
    },
    {
      title:
        'Wissenschaft — Nachhaltige Langzeitfinanzierung für Alternsforschung und Grenzinterventionen',
      bullets: [
        'Dedizierte Finanzierung speziell für Grundlagenforschung zum Altern',
        'Risikoadäquate Regulierung der Genomeditierung beim Menschen statt pauschaler Verbote',
      ],
    },
    {
      title:
        'Translation — Adaptive Regulierung und öffentliche Finanzierung für gerecht zugängliche Therapien',
      bullets: [
        'Dedizierte Langlebigkeitsbehörde nach ARPA/DARPA-Vorbild: gerichtete Challenges, wettbewerbliche Umsetzung, nicht verwässernde Finanzierung, IP bei Entwicklerinnen und Entwicklern',
        'Adaptive Zulassung mit synthetischen Kontrollarmen aus nationalen Gesundheitsdaten',
        'Regulatorische Sandboxes für Kombinations- und Repurposing-Therapien',
        'Recht auf Behandlungsversuch',
        'Öffentlich finanzierte Therapien, für universellen Zugang über nationale Gesundheitssysteme bepreist',
      ],
    },
    {
      title:
        'Gesundheitsversorgung — Klinische Infrastruktur für präventive Maßnahmen in Bevölkerungsgröße',
      bullets: [
        'Screening und Prävention in Bevölkerungsgröße für zentrale altersassoziierte Krankheitsrisiken',
        'Longitudinale Biomarker-Erfassung — funktionell und molekular — standardmäßig Opt-out',
        'Einbindung präventiver Studien in die klinische Routine',
        'Gerotherapeutische Endpunkte in Health-Technology-Assessment und Erstattungsrahmen',
      ],
    },
    {
      title:
        'Daten — Offenes, interoperables und skalierbares Datenökosystem für Alternsforschung',
      bullets: [
        'Sicherer freier Zugang zu anonymisierten Daten für alle Forschenden und KI-Anwendungen',
        'Einheitliche Interoperabilitätsstandards für Gesundheits-, Forschungs- und Registerdaten',
        'Standardisierte Endpunkte für gerotherapeutische Studien',
      ],
    },
    {
      title:
        'International — Koordination für das, was kein Land allein leisten kann',
      bullets: [
        'KI-taugliche Perturbations-Screening-Programme und geteilte molekulare Dateninfrastruktur',
        'Gegenseitige Anerkennung von klinischen Studienergebnissen und Sandbox-Outcomes der Regulierung',
        'Geteilte Forschungsinfrastruktur: Nasslabors, Modellorganismen, Rechenkapazität, Perturbations-Screening',
        'Öffentliche Aufklärung gegen Desinformation zur Langlebigkeitswissenschaft',
      ],
    },
  ] satisfies AskBlueprintSection[],
} as const;

const asksBlueprintFr = {
  heroTitle: 'État longévité',
  heroSubtitle: 'Une feuille de route politique pour un monde qui vieillit',
  lead: 'Le vieillissement est la première cause de décès, d\'incapacité et de coûts des soins — pourtant il reçoit une fraction des financements consacrés à ses symptômes comme le cancer et les maladies cardiaques. Avec des populations qui vieillissent et des effectifs qui se réduisent, prolonger des années en bonne santé et productives est le défi démographique le plus urgent et le plus négligé.',
  objectivesLabel: 'Objectifs',
  objectives:
    'Des années en bonne santé et productives plus longues, une charge d\'incapacité moindre — participation au marché du travail plus longue, assiette fiscale élargie, coûts de soins réduits. Les retours se cumulent dans le temps.',
  ownershipLabel: 'Gouvernance',
  ownership:
    'Porté par une commission interministérielle (Santé, Éducation, Science, Économie, Travail) avec une stratégie nationale unifiée pour la longévité, financée à hauteur de 1 % du budget annuel de l\'État.',
  sections: [
    {
      title:
        'Talents — Attirer, former et retenir les meilleurs talents des sciences de la longévité en supprimant les obstacles à l\'emploi et en renforçant la formation',
      bullets: [
        'Visas accélérés et reconnaissance des diplômes pour les chercheurs et les cliniciens',
        'Programmes doctoraux / MD–PhD reliant biologie du vieillissement, médecine et science des données',
      ],
    },
    {
      title:
        'Science — Financement durable à long terme pour la recherche sur le vieillissement et les interventions de frontière',
      bullets: [
        'Financement dédié spécifiquement à la recherche fondamentale sur le vieillissement',
        'Régulation proportionnée au risque de l\'édition génomique humaine, en remplacement des interdictions générales',
      ],
    },
    {
      title:
        'Transfert — Régulation adaptative et financement public pour des thérapies équitables et accessibles',
      bullets: [
        'Agence dédiée à la longévité calquée sur les cadres ARPA/DARPA : défis ciblés, exécution compétitive, financement non dilutif, PI conservée par les développeurs',
        'Autorisations adaptatives avec bras de contrôle synthétiques à partir des données de santé nationales',
        'Bac à sable réglementaire pour les thérapies combinées et repositionnées',
        'Droit d\'essayer les thérapies',
        'Thérapies financées par le public tarifées pour un accès universel via les systèmes nationaux de santé',
      ],
    },
    {
      title:
        'Soins — Infrastructures cliniques optimisées pour la prévention à l\'échelle de la population',
      bullets: [
        'Dépistage et prévention à l\'échelle de la population ciblant les principaux risques de maladies liées à l\'âge',
        'Collecte longitudinale de biomarqueurs — fonctionnels et moléculaires — avec opt-out par défaut',
        'Intégration des essais préventifs dans les pratiques cliniques de routine',
        'Critères d\'évaluation gérontothérapeutiques dans les cadres d\'évaluation des technologies de santé et de remboursement',
      ],
    },
    {
      title:
        'Données — Écosystème de données ouvert, interopérable et évolutif pour la recherche sur le vieillissement',
      bullets: [
        'Accès libre et sécurisé aux données anonymisées pour tout chercheur et toute application d\'IA',
        'Normes d\'interopérabilité unifiées pour les données de santé, de recherche et de registres',
        'Critères d\'évaluation normalisés pour les essais gérontothérapeutiques',
      ],
    },
    {
      title:
        'International — Coordination pour ce qu\'aucun pays ne peut faire seul',
      bullets: [
        'Programmes de criblage par perturbation prêts pour l\'IA et infrastructure de données moléculaires partagée',
        'Reconnaissance mutuelle des résultats d\'essais cliniques et des résultats des bacs à sable réglementaires',
        'Infrastructure de recherche partagée : laboratoires humides, organismes modèles, calcul, criblage par perturbation',
        'Engagement du public pour contrer la désinformation sur la science de la longévité',
      ],
    },
  ] satisfies AskBlueprintSection[],
} as const;

const asksBlueprintEs = {
  heroTitle: 'Estado de longevidad',
  heroSubtitle: 'Un plan de políticas para un mundo que envejece',
  lead: 'El envejecimiento es la principal causa de muerte, discapacidad y coste sanitario — y, sin embargo, recibe una fracción del financiamiento destinado a sus síntomas, como el cáncer y las cardiopatías. Con poblaciones que envejecen y fuerzas laborales que se reducen, alargar años sanos y productivos es el reto demográfico más urgente y el más descuidado.',
  objectivesLabel: 'Objetivos',
  objectives:
    'Más años de vida saludable y productiva, menor carga por discapacidad — mayor participación laboral, base fiscal más amplia, menores costes asistenciales. Los retornos se acumulan con el tiempo.',
  ownershipLabel: 'Gobernanza',
  ownership:
    'Impulsado por una comisión interministerial (Salud, Educación, Ciencia, Economía, Trabajo) con una Estrategia Nacional de Longevidad unificada, financiada con el 1 % del presupuesto anual del Estado.',
  sections: [
    {
      title:
        'Talento — Atraer, desarrollar y retener a los mejores talentos en ciencias de la longevidad eliminando barreras de acceso al empleo y reforzando la formación',
      bullets: [
        'Visados acelerados y reconocimiento de credenciales para investigadores y clínicos',
        'Programas de doctorado / MD–PhD que conectan biología del envejecimiento, medicina y ciencia de datos',
      ],
    },
    {
      title:
        'Ciencia — Financiación sostenible a largo plazo para la investigación del envejecimiento y las intervenciones de frontera',
      bullets: [
        'Financiación dedicada específicamente a la investigación fundamental sobre el envejecimiento',
        'Regulación proporcional al riesgo de la edición génica humana, sustituyendo prohibiciones generales',
      ],
    },
    {
      title:
        'Transferencia — Regulación adaptativa y financiación pública para terapias equitativas y accesibles',
      bullets: [
        'Agencia dedicada a la longevidad inspirada en marcos ARPA/DARPA: retos dirigidos, ejecución competitiva, financiación no dilutiva, PI retenida por los desarrolladores',
        'Autorizaciones adaptativas con brazos de control sintéticos a partir de datos sanitarios nacionales',
        'Entornos regulatorios sandbox para terapias combinadas y reposicionadas',
        'Derecho a probar terapias',
        'Terapias financiadas con fondos públicos con precios para acceso universal a través de los sistemas nacionales de salud',
      ],
    },
    {
      title:
        'Sanidad — Infraestructura clínica optimizada para la prevención a escala poblacional',
      bullets: [
        'Cribado y prevención a escala poblacional frente a los principales riesgos de enfermedades relacionadas con la edad',
        'Recogida longitudinal de biomarcadores — funcionales y moleculares — con exclusión (opt-out) por defecto',
        'Integración de ensayos preventivos en la práctica clínica habitual',
        'Criterios gero-terapéuticos en la evaluación de tecnologías sanitarias y marcos de reembolso',
      ],
    },
    {
      title:
        'Datos — Ecosistema de datos abierto, interoperable y escalable para impulsar la investigación del envejecimiento',
      bullets: [
        'Acceso libre y seguro a datos anonimizados para cualquier investigador y aplicación de IA',
        'Normas de interoperabilidad unificadas para datos sanitarios, de investigación y de registros',
        'Criterios normalizados para ensayos gero-terapéuticos',
      ],
    },
    {
      title:
        'Internacional — Coordinación para lo que ningún país puede hacer solo',
      bullets: [
        'Programas de cribado por perturbación listos para IA e infraestructura compartida de datos moleculares',
        'Reconocimiento mutuo de resultados de ensayos clínicos y de los entornos regulatorios sandbox',
        'Infraestructura de investigación compartida: laboratorios húmedos, organismos modelo, cómputo, cribado por perturbación',
        'Participación pública para contrarrestar la desinformación sobre la ciencia de la longevidad',
      ],
    },
  ] satisfies AskBlueprintSection[],
} as const;

const asksBlueprintIt = {
  heroTitle: 'Stato longevità',
  heroSubtitle: 'Una roadmap di policy per un mondo che invecchia',
  lead: 'L\'invecchiamento è la principale causa di morte, disabilità e costi sanitari — eppure riceve una frazione dei finanziamenti destinati ai suoi sintomi, come cancro e malattie cardiache. Con popolazioni che invecchiano e forze lavoro in calendario, estendere anni sani e produttivi è la sfida demografica più urgente e la più trascurata.',
  objectivesLabel: 'Obiettivi',
  objectives:
    'Anni in salute e produttivi più lunghi, minore carico di disabilità — partecipazione più prolungata al lavoro, base fiscale più ampia, costi di cura ridotti. I ritorni si accumulano nel tempo.',
  ownershipLabel: 'Governance',
  ownership:
    'Guidato da una commissione interministeriale (Salute, Istruzione, Scienza, Economia, Lavoro) con una strategia nazionale unificata sulla longevità, finanziata con l\'1% del bilancio statale annuale.',
  sections: [
    {
      title:
        'Talenti — Attrarre, sviluppare e trattenere i migliori talenti nelle scienze della longevità rimuovendo ostacoli all\'ingresso nel lavoro e rafforzando la formazione',
      bullets: [
        'Visti accelerati e riconoscimento delle credenziali per ricercatori e clinici',
        'Programmi PhD / MD–PhD che collegano biologia dell\'invecchiamento, medicina e scienza dei dati',
      ],
    },
    {
      title:
        'Scienza — Finanziamento sostenibile a lungo termine per la ricerca sull\'invecchiamento e gli interventi di frontiera',
      bullets: [
        'Finanziamento dedicato specificamente alla ricerca fondamentale sull\'invecchiamento',
        'Regolazione proporzionata al rischio dell\'editing genomico umano, al posto di divieti generalizzati',
      ],
    },
    {
      title:
        'Traslazione — Regolazione adattiva e finanziamento pubblico per terapie eque e accessibili',
      bullets: [
        'Agenzia dedicata alla longevità sul modello ARPA/DARPA: sfide mirate, esecuzione competitiva, finanziamento non diluitivo, PI trattenuta dagli sviluppatori',
        'Autorizzazioni adattive con bracci di controllo sintetici dai dati sanitari nazionali',
        'Sandbox regolatorie per terapie combinate e riposizionate',
        'Diritto di provare le terapie',
        'Terapie finanziate pubblicamente con prezzi per accesso universale tramite sistemi sanitari nazionali',
      ],
    },
    {
      title:
        'Sanità — Infrastruttura clinica ottimizzata per la prevenzione su scala di popolazione',
      bullets: [
        'Screening e prevenzione su scala di popolazione sui principali rischi di malattie legate all\'età',
        'Raccolta longitudinale di biomarcatori — funzionali e molecolari — con opt-out predefinito',
        'Integrazione di studi preventivi nella pratica clinica di routine',
        'Endpoint geroterapeutici nelle valutazioni delle tecnologie sanitarie e nei quadri di rimborso',
      ],
    },
    {
      title:
        'Dati — Ecosistema di dati aperto, interoperabile e scalabile per alimentare la ricerca sull\'invecchiamento',
      bullets: [
        'Accesso libero e sicuro a dati anonimizzati per ogni ricercatore e applicazione di IA',
        'Standard di interoperabilità unificati per dati sanitari, di ricerca e di registro',
        'Endpoint standardizzati per studi geroterapeutici',
      ],
    },
    {
      title:
        'Internazionale — Coordinamento per ciò che nessun paese può fare da solo',
      bullets: [
        'Programmi di screening per perturbazione pronti per l\'IA e infrastruttura condivisa di dati molecolari',
        'Riconoscimento reciproco dei risultati degli studi clinici e degli esiti delle sandbox regolatorie',
        'Infrastruttura di ricerca condivisa: laboratori umidi, organismi modello, calcolo, screening per perturbazione',
        'Coinvolgimento pubblico per contrastare la disinformazione sulla scienza della longevità',
      ],
    },
  ] satisfies AskBlueprintSection[],
} as const;

const asksBlueprintNl = {
  heroTitle: 'Staat van levensverlenging',
  heroSubtitle: 'Een beleidsplan voor een vergrijzende wereld',
  lead: 'Veroudering is de belangrijkste oorzaak van overlijden, arbeidsongeschiktheid en zorgkosten — toch krijgt het een fractie van de financiering die naar symptomen gaat, zoals kanker en hartziekten. Met vergrijzende bevolkingen en krapper wordende arbeidsmarkten is het verlengen van gezonde productieve jaren de meest urgente demografische uitdaging en de meest verwaarloosde.',
  objectivesLabel: 'Doelen',
  objectives:
    'Langere gezonde en productieve jaren, minder arbeidsongeschiktheid — langere deelname aan de arbeidsmarkt, bredere belastingbasis, lagere zorgkosten. De opbrengst stapelen zich in de tijd.',
  ownershipLabel: 'Governance',
  ownership:
    'Aangestuurd door een interdepartementale commissie (Volksgezondheid, Onderwijs, Wetenschap, Economie, Arbeid) met één nationale longeviteitsstrategie, gefinancierd met 1% van de jaarlijkse rijksbegroting.',
  sections: [
    {
      title:
        'Talent — Topaanwas in longevitywetenschap aantrekken, ontwikkelen en behouden door drempels voor instroom te verwijderen en opleiding te versterken',
      bullets: [
        'Versnelde visa en erkenning van kwalificaties voor onderzoekers en clinici',
        'PhD-/MD–PhD-trajecten die verouderingsbiologie, geneeskunde en datawetenschap verbinden',
      ],
    },
    {
      title:
        'Wetenschap — Duurzame langetermijnfinanciering voor verouderingsonderzoek en grensverleggende interventies',
      bullets: [
        'Toegewijde financiering specifiek voor fundamenteel onderzoek naar veroudering',
        'Risicoproportionele regulering van humane genoomediting in plaats van algemene verboden',
      ],
    },
    {
      title:
        'Translatie — Adaptieve regulering en overheidsfinanciering voor eerlijk toegankelijke therapieën',
      bullets: [
        'Toegewijde longevity-agentschap naar ARPA/DARPA-model: gerichte uitdagingen, competitieve uitvoering, non-dilutieve financiering, IP bij ontwikkelaars',
        'Adaptieve vergunningen met synthetische controlearmen uit nationale gezondheidsdata',
        'Regulatory sandboxes voor combinaties en herpositioneerde therapieën',
        'Recht om therapieën te proberen',
        'Publiek gefinancierde therapieën geprijsd voor universele toegang via nationale zorgsystemen',
      ],
    },
    {
      title:
        'Zorg — Klinische infrastructuur geoptimaliseerd voor preventie op bevolkingsschaal',
      bullets: [
        'Screening en preventie op bevolkingsschaal gericht op grote leeftijdsgebonden ziekterisico\'s',
        'Longitudinale verzameling van biomarkers — functioneel en moleculair — standaard opt-out',
        'Integratie van preventieve trials in de routinekliniek',
        'Gerotherapeutische eindpunten in beoordeling van zorgtechnologie en vergoedingskaders',
      ],
    },
    {
      title:
        'Data — Open, interoperabel en schaalbaar data-ecosysteem voor verouderingsonderzoek',
      bullets: [
        'Veilige vrije toegang tot geanonimiseerde data voor elke onderzoeker en elke AI-toepassing',
        'Eenheid interoperabiliteitsstandaarden voor gezondheids-, onderzoeks- en registergegevens',
        'Gestandaardiseerde eindpunten voor gerotherapeutische studies',
      ],
    },
    {
      title:
        'Internationaal — Coördinatie voor wat geen land alleen kan',
      bullets: [
        'AI-geschikte perturbatiescreeningsprogramma\'s en gedeelde moleculaire data-infrastructuur',
        'Wederzijdse erkenning van klinische studieresultaten en uitkomsten van regulatory sandboxes',
        'Gedeelde onderzoeksinfrastructuur: natte labs, modelorganismen, rekenkracht, perturbatiescreening',
        'Publieke betrokkenheid tegen desinformatie over longevitywetenschap',
      ],
    },
  ] satisfies AskBlueprintSection[],
} as const;

export const asksByLocale: Record<Locale, AsksBlueprint> = {
  [Locale.EN]: asksBlueprintEn,
  [Locale.SV]: asksBlueprintSv,
  [Locale.DE]: asksBlueprintDe,
  [Locale.FR]: asksBlueprintFr,
  [Locale.ES]: asksBlueprintEs,
  [Locale.IT]: asksBlueprintIt,
  [Locale.NL]: asksBlueprintNl,
  [Locale.CS]: asksBlueprintEn,
};

export function getAsksForLocale(locale: Locale): AsksBlueprint {
  return asksByLocale[locale] ?? asksByLocale[Locale.EN];
}
