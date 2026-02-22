import { Locale } from '@/lib/types';

export const asksTranslations = {
  hero: {
    title: {
      [Locale.EN]: 'What a government can do to\u00A0fight\u00A0aging?',
      [Locale.SV]: 'Vad kan en regering göra för att bekämpa åldrande?',
    },
    subtitle: {
      [Locale.EN]: 'The science is close.\nPolitical will is what we need.',
      [Locale.SV]: 'Vetenskapen är nära.\nPolitiskt vilja är vad vi behöver.',
    },
  },
  pageTitle: {
    [Locale.EN]: 'Our asks',
    [Locale.SV]: 'Våra krav',
  },
  intro: {
    [Locale.EN]: 'We keep them a little bit broad, so the governments can shape their policies by themselves, but here are the main directions',
    [Locale.SV]: 'Vi håller dem lite breda, så att regeringarna kan forma sina policyer själva, men här är huvudriktningarna',
  },
  sectionTitle: {
    [Locale.EN]: 'What a government can do to\u00A0fight\u00A0aging?',
    [Locale.SV]: 'Vad kan en regering göra för att bekämpa åldrande?',
  },
  items: {
    [Locale.EN]: [
      { parts: [{ text: 'Parliament must ', bold: false }, { text: 'create an anti-aging commissions', bold: true }, { text: ' to advocate pro lifespan extension', bold: false }] },
      { parts: [{ text: '', bold: false }, { text: 'Classify aging as a disease', bold: true }, { text: ', so research and therapeutics could be targeted', bold: false }] },
      { parts: [{ text: '', bold: false }, { text: 'Gene editing legalized for the research', bold: true }, { text: ' with ethical comission approval', bold: false }] },
      { parts: [{ text: '', bold: false }, { text: 'Simplify human trials', bold: true }, { text: ' for anti-aging therapeutics', bold: false }] },
      { parts: [{ text: '', bold: false }, { text: '1% of country budget to anti-aging infrastructure ', bold: true }, { text: '(biobanks, research facilities), scientific, startup and educational programs', bold: false }] },
      { parts: [{ text: '', bold: false }, { text: 'Setup public biobanks with exhaustive data', bold: true }, { text: ', crucial for aging studies and make it accessible for the researchers', bold: false }] },
      { parts: [{ text: '', bold: false }, { text: 'Free medical & biotech education', bold: true }, { text: ' for those who want to study aging', bold: false }] },
      { parts: [{ text: '', bold: false }, { text: 'Include health checkups', bold: true }, { text: ' into government heath insurance', bold: false }] },
      { parts: [{ text: '', bold: false }, { text: 'Specific non-dilutive funding', bold: true }, { text: ' for biotech startup to do risky breakthroughs', bold: false }] },
    ],
    [Locale.SV]: [
      { parts: [{ text: 'Parlamenten måste ', bold: false }, { text: 'skapa anti-åldrandekommissioner', bold: true }, { text: ' för att förespråka livslängdsförlängning', bold: false }] },
      { parts: [{ text: '', bold: false }, { text: 'Klassificera åldrande som en sjukdom', bold: true }, { text: ', så att forskning och terapeutika kan riktas', bold: false }] },
      { parts: [{ text: '', bold: false }, { text: 'Genredigering legaliserad för forskningen', bold: true }, { text: ' med etisk kommissionsgodkännande', bold: false }] },
      { parts: [{ text: '', bold: false }, { text: 'Förenkla mänskliga försök', bold: true }, { text: ' för anti-åldrandeterapeutika', bold: false }] },
      { parts: [{ text: '', bold: false }, { text: '1% av landets budget till anti-åldrandeinfrastruktur ', bold: true }, { text: '(biobanker, forskningsanläggningar), vetenskapliga, startup- och utbildningsprogram', bold: false }] },
      { parts: [{ text: '', bold: false }, { text: 'Sätt upp offentliga biobanker med omfattande data', bold: true }, { text: ', avgörande för åldrandestudier och gör dem tillgängliga för forskare', bold: false }] },
      { parts: [{ text: '', bold: false }, { text: 'Gratis medicinsk och bioteknikutbildning', bold: true }, { text: ' för dem som vill studera åldrande', bold: false }] },
      { parts: [{ text: '', bold: false }, { text: 'Inkludera hälsokontroller', bold: true }, { text: ' i statlig hälsoförsäkring', bold: false }] },
      { parts: [{ text: '', bold: false }, { text: 'Specifik icke-spädande finansiering', bold: true }, { text: ' för biotekstartup för att göra riskfyllda genombrott', bold: false }] },
    ],
  },
} as const;


