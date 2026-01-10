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
      [Locale.EN]: 'Why Longevity',
      [Locale.SV]: 'Varför långlivet',
    },
    description: {
      [Locale.EN]: 'Funding longevity science aims to cure aging, the largest cause of suffering, death and sickness. It\'s a humanitarian emergency - that can and should be solved.',
      [Locale.SV]: 'Att finansiera långlivetsvetenskap är att bota åldrande, som den största orsaken till lidande, död och sjukdom. Det är en humanitär nödsituation - som kan och bör lösas.',
    },
  },
  demonstrations: {
    title: {
      [Locale.EN]: 'How will the demonstrations work',
      [Locale.SV]: 'Hur kommer demonstrationerna att fungera',
    },
    description: {
      [Locale.EN]: 'Learn how our demonstrations work and how you can participate.',
      [Locale.SV]: 'Lär dig hur våra demonstrationer fungerar och hur du kan delta.',
    },
  },
  howCanYouHelp: {
    title: {
      [Locale.EN]: 'How can you help',
      [Locale.SV]: 'Hur kan du hjälpa',
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

