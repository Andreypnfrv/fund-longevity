import { Locale } from '@/lib/types';

export const demonstrationsTranslations = {
  hero: {
    title: {
      [Locale.EN]: 'How Will the Demonstrations Work',
      [Locale.SV]: 'Hur kommer demonstrationerna att fungera',
    },
  },
  sections: {
    overview: {
      title: {
        [Locale.EN]: 'Overview',
        [Locale.SV]: 'Översikt',
      },
      content: {
        [Locale.EN]: "It's simple: we meet up, demonstrate. You'll meet up the Local Lead, who will bring pre-printed signs. If you want to use them, bring your own sign or none at all is totally up to you. The events will be live-streamed. This way all those who cannot be there in person can still be part of the experience.",
        [Locale.SV]: 'Det är enkelt: vi träffas, demonstrerar. Du kommer att träffa den lokala ledaren, som kommer att ta med förutskrivna skyltar. Om du vill använda dem, ta med din egen skylt eller ingen alls är helt upp till dig. Evenemangen kommer att sändas live. På så sätt kan alla som inte kan vara där personligen fortfarande vara en del av upplevelsen.',
      },
    },
    behavior: {
      title: {
        [Locale.EN]: 'How to behave on the demonstration',
        [Locale.SV]: 'Hur man beter sig på demonstrationen',
      },
      content: {
        [Locale.EN]: 'Guidelines for demonstration behavior...',
        [Locale.SV]: 'Riktlinjer för demonstrationsbeteende...',
      },
    },
    signs: {
      title: {
        [Locale.EN]: "Want to make a sign? Pick it up here",
        [Locale.SV]: 'Vill du göra en skylt? Hämta den här',
      },
      content: {
        [Locale.EN]: 'Sign gallery with screenshots and PDF downloads...',
        [Locale.SV]: 'Skyltgalleri med skärmdumpar och PDF-nedladdningar...',
      },
    },
    discord: {
      title: {
        [Locale.EN]: 'Discord Community',
        [Locale.SV]: 'Discord-gemenskap',
      },
      content: {
        [Locale.EN]: 'Join our Discord community to connect with other supporters.',
        [Locale.SV]: 'Gå med i vår Discord-gemenskap för att ansluta med andra supportrar.',
      },
    },
  },
  nextDemo: {
    [Locale.EN]: 'When is the next demonstration?',
    [Locale.SV]: 'När är nästa demonstration?',
  },
} as const;


