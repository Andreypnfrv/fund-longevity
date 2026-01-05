import type { Translation } from '@/lib/types';
import { Locale } from '@/lib/types';

export const aboutTranslations = {
  hero: {
    title: {
      [Locale.EN]: 'About Us',
      [Locale.SV]: 'Om oss',
    },
  },
  about: {
    [Locale.EN]: 'Fund Longevity is not a formal organization, but a non profit initiative founded by Linus Petersson and Andrei Panferov. It is purely informal social movement, that could be represented by anyone, who wants to advocate pro lifespan extension. We do promote other longevity organizations, but do not get any compensation.',
    [Locale.SV]: 'Fund Longevity är inte en formell organisation, utan ett ideellt initiativ grundat av Linus Petersson och Andrei Panferov. Det är en rent informell social rörelse, som kan representeras av alla som vill förespråka livslängdsförlängning. Vi främjar andra långlivetsorganisationer, men får ingen ersättning.',
  },
  coreTeam: {
    title: {
      [Locale.EN]: 'Core Team',
      [Locale.SV]: 'Kärnteam',
    },
  },
  advisors: {
    title: {
      [Locale.EN]: 'Advisors',
      [Locale.SV]: 'Rådgivare',
    },
  },
  localLeads: {
    title: {
      [Locale.EN]: 'Local Leads',
      [Locale.SV]: 'Lokala ledare',
    },
  },
  partners: {
    title: {
      [Locale.EN]: 'Partners',
      [Locale.SV]: 'Partners',
    },
  },
} as const satisfies Record<string, Record<string, Translation> | Translation>;

