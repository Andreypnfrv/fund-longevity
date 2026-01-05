import type { Translation } from '@/lib/types';
import { Locale } from '@/lib/types';

export const asksTranslations = {
  hero: {
    title: {
      [Locale.EN]: 'Our Asks',
      [Locale.SV]: 'Våra krav',
    },
  },
  intro: {
    [Locale.EN]: 'We keep them a little bit broad, so the governments can shape their policies by themselves, but here are the main directions',
    [Locale.SV]: 'Vi håller dem lite breda, så att regeringarna kan forma sina policyer själva, men här är huvudriktningarna',
  },
  regulations: {
    title: {
      [Locale.EN]: 'Pure regulations',
      [Locale.SV]: 'Rena regleringar',
    },
    items: {
      [Locale.EN]: [
        'Parliaments must have anti-aging commissions to advocate pro lifespan extension',
        'Classify aging as a disease, so research and therapeutics could be targeted',
        'Gene editing legalized for the research',
        'Simplify human trials for anti-aging therapeutics',
      ],
      [Locale.SV]: [
        'Parlamenten måste ha anti-åldrandekommissioner för att förespråka livslängdsförlängning',
        'Klassificera åldrande som en sjukdom, så att forskning och terapeutika kan riktas',
        'Genredigering legaliserad för forskningen',
        'Förenkla mänskliga försök för anti-åldrandeterapeutika',
      ],
    },
  },
  funding: {
    title: {
      [Locale.EN]: 'Funding for fundamental research',
      [Locale.SV]: 'Finansiering för grundforskning',
    },
    items: {
      [Locale.EN]: [
        '1% of GDP to anti-aging infrastructure (biobanks, research facilities), scientific, startup and educational programs',
        'Setup public biobanks with exhaustive human data and make it accessible for the researchers',
        'Free medical & biotech education for those who want to study aging',
        'Include health checkups into free insurance',
        'Specific non-dilutive funding for biotech startup',
        'ARPA-H-alike government funds to do risky breakthroughs',
      ],
      [Locale.SV]: [
        '1% av BNP till anti-åldrandeinfrastruktur (biobanker, forskningsanläggningar), vetenskapliga, startup- och utbildningsprogram',
        'Sätt upp offentliga biobanker med omfattande mänskliga data och gör dem tillgängliga för forskare',
        'Gratis medicinsk och bioteknikutbildning för dem som vill studera åldrande',
        'Inkludera hälsokontroller i gratis försäkring',
        'Specifik icke-spädande finansiering för biotekstartup',
        'ARPA-H-liknande statliga fonder för att göra riskfyllda genombrott',
      ],
    },
  },
} as const satisfies Record<string, Record<string, Translation> | Translation>;

