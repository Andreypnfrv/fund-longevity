import type { Translation } from '@/lib/types';
import { Locale } from '@/lib/types';

export const homeTranslations = {
  hero: {
    title: {
      [Locale.EN]: 'Fund Longevity',
      [Locale.SV]: 'Fund Longevity',
    },
    subtitle: {
      [Locale.EN]: 'A multinational initiative to demonstrate for life extension',
      [Locale.SV]: 'Ett multinationellt initiativ för att demonstrera för livsförlängning',
    },
  },
  whyAging: {
    title: {
      [Locale.EN]: 'Why Aging',
      [Locale.SV]: 'Varför åldrande',
    },
    description: {
      [Locale.EN]: 'Aging is the largest cause of suffering, death and sickness. It's a humanitarian emergency - that can and should be solved.',
      [Locale.SV]: 'Åldrande är den största orsaken till lidande, död och sjukdom. Det är en humanitär nödsituation - som kan och bör lösas.',
    },
  },
  demonstrations: {
    title: {
      [Locale.EN]: 'How will the demonstrations work',
      [Locale.SV]: 'Hur kommer demonstrationerna att fungera',
    },
  },
  howCanYouHelp: {
    title: {
      [Locale.EN]: 'How can you help',
      [Locale.SV]: 'Hur kan du hjälpa',
    },
  },
  aboutUs: {
    title: {
      [Locale.EN]: 'About us',
      [Locale.SV]: 'Om oss',
    },
  },
} as const satisfies Record<string, Record<string, Translation>>;

