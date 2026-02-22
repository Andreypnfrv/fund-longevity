import type { Translation } from '@/lib/types';
import { Locale } from '@/lib/types';

export const aboutTranslations = {
  hero: {
    title: {
      [Locale.EN]: 'Team',
      [Locale.SV]: 'Team',
    },
    subtitle: {
      [Locale.EN]: 'Fund Longevity is a multinational initiative to demonstrate for life extension. It is not a formal organization, but a non-profit initiative founded by Linus Petersson and Andrei Panferov. The goal is to make fighting aging main-stream.',
      [Locale.SV]: 'Fund Longevity är ett multinationellt initiativ för att demonstrera för livsförlängning. Det är inte en formell organisation, utan ett ideellt initiativ grundat av Linus Petersson och Andrei Panferov. Målet är att göra kampen mot åldrande mainstream.',
    },
  },
  about: {
    [Locale.EN]: '',
    [Locale.SV]: '',
  },
  localLeads: {
    title: {
      [Locale.EN]: 'Local Leads',
      [Locale.SV]: 'Lokala ledare',
    },
  },
  mediaLeads: {
    title: {
      [Locale.EN]: 'Media Leads',
      [Locale.SV]: 'Medialedare',
    },
  },
  partners: {
    title: {
      [Locale.EN]: 'Featured organisations',
      [Locale.SV]: 'Utvalda organisationer',
    },
  },
} as const satisfies Record<string, Record<string, Translation> | Translation>;

