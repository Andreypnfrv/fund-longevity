import type { Translation } from '@/lib/types';
import { Locale } from '@/lib/types';

export const demonstrationsTranslations = {
  hero: {
    title: {
      [Locale.EN]: 'How Will the Demonstrations Work',
      [Locale.SV]: 'Hur kommer demonstrationerna att fungera',
    },
  },
  simple: {
    [Locale.EN]: "It's simple: we meet up, demonstrate.",
    [Locale.SV]: 'Det är enkelt: vi träffas, demonstrerar.',
  },
  localLead: {
    [Locale.EN]: "You'll meet up the Local Lead, who will bring pre-printed signs. If you want to use them, bring your own sign or none at all is totally up to you.",
    [Locale.SV]: 'Du kommer att träffa den lokala ledaren, som kommer att ta med förutskrivna skyltar. Om du vill använda dem, ta med din egen skylt eller ingen alls är helt upp till dig.',
  },
  liveStream: {
    [Locale.EN]: 'The events will be live-streamed. This way all those who cannot be there in person can still be part of the experience.',
    [Locale.SV]: 'Evenemangen kommer att sändas live. På så sätt kan alla som inte kan vara där personligen fortfarande vara en del av upplevelsen.',
  },
  nextDemo: {
    [Locale.EN]: 'When is the next demonstration?',
    [Locale.SV]: 'När är nästa demonstration?',
  },
  behavior: {
    [Locale.EN]: 'How to behave on the demonstration',
    [Locale.SV]: 'Hur man beter sig på demonstrationen',
  },
  signs: {
    [Locale.EN]: "Want to make a sign? Pick it up here",
    [Locale.SV]: 'Vill du göra en skylt? Hämta den här',
  },
} as const satisfies Record<string, Translation>;

