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
    description1: {
      [Locale.EN]: 'Aging is by far the largest cause of suffering, death and sickness.',
      [Locale.SV]: 'Åldrande är den överlägset största orsaken till lidande, död och sjukdom.',
    },
    description2: {
      [Locale.EN]: 'It\'s a humanitarian emergency - that can and should be solved.',
      [Locale.SV]: 'Det är en humanitär nödsituation - som kan och bör lösas.',
    },
  },
  demonstrations: {
    title: {
      [Locale.EN]: 'How will this work?',
      [Locale.SV]: 'Hur kommer detta att fungera?',
    },
    description: {
      [Locale.EN]: 'Learn how our demonstrations work and how you can participate.',
      [Locale.SV]: 'Lär dig hur våra demonstrationer fungerar och hur du kan delta.',
    },
  },
  howCanYouHelp: {
    title: {
      [Locale.EN]: 'Join',
      [Locale.SV]: 'Gå med',
    },
    description: {
      [Locale.EN]: 'Join us in the fight against aging. There are many ways to contribute.',
      [Locale.SV]: 'Gå med oss i kampen mot åldrande. Det finns många sätt att bidra.',
    },
  },
  aboutUs: {
    title: {
      [Locale.EN]: 'About us',
      [Locale.SV]: 'Om oss',
    },
    description: {
      [Locale.EN]: 'Learn more about our mission and the team behind Fund Longevity.',
      [Locale.SV]: 'Läs mer om vårt uppdrag och teamet bakom Fund Longevity.',
    },
    subtitle: {
      [Locale.EN]: 'Fund Longevity is a grass-roots, non-profit movement to fight aging via public events.',
      [Locale.SV]: 'Fund Longevity är en gräsrotsrörelse, ideell rörelse för att bekämpa åldrande via offentliga evenemang.',
    },
  },
  buttons: {
    learnMore: {
      [Locale.EN]: 'Learn more',
      [Locale.SV]: 'Läs mer',
    },
    getInvolved: {
      [Locale.EN]: 'Get involved',
      [Locale.SV]: 'Engagera dig',
    },
    joinDiscord: {
      [Locale.EN]: 'Join our Discord community',
      [Locale.SV]: 'Gå med i vår Discord-gemenskap',
    },
  },
} as const satisfies Record<string, Record<string, Translation>>;

