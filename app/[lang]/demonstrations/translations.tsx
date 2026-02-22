import { Locale } from '@/lib/types';

export const demonstrationsTranslations = {
  hero: {
    title: {
      [Locale.EN]: 'The Demonstrations, Explained',
      [Locale.SV]: 'Demonstrationerna, förklarade',
    },
  },
  sections: {
    overview: {
      title: {
        [Locale.EN]: 'Overview',
        [Locale.SV]: 'Översikt',
      },
      content: {
        [Locale.EN]: 'It\'s simple: we meet, we demonstrate.\nDemonstrations happen simultaneously in cities around the world and are live-streamed from every location. Each city is coordinated by a Local Lead. All you need to do is sign up below.',
        [Locale.SV]: 'Det är enkelt: vi träffas, vi demonstrerar.\nDemonstrationer sker samtidigt i städer över hela världen och sänds live från varje plats. Varje stad koordineras av en lokal ledare. Allt du behöver göra är att registrera dig nedan.',
      },
    },
    behavior: {
      title: {
        [Locale.EN]: 'How to behave on the demonstration',
        [Locale.SV]: 'Hur man beter sig på demonstrationen',
      },
      content: {
        [Locale.EN]: 'We ask everyone attending to conduct themselves with seriousness, calm, and respect. Our goal is to be seen as credible and responsible by the public, the media, and policymakers. Peaceful, considered behavior is essential to ensuring our message is taken seriously.',
        [Locale.SV]: 'Vi ber alla som deltar att uppföra sig med allvar, lugn och respekt. Vårt mål är att ses som trovärdiga och ansvarsfulla av allmänheten, media och beslutsfattare. Fredligt, genomtänkt beteende är avgörande för att säkerställa att vårt budskap tas på allvar.',
      },
    },
    signs: {
      title: {
        [Locale.EN]: "Want to make a sign? Pick it up here",
        [Locale.SV]: 'Vill du göra en skylt? Hämta den här',
      },
      content: {
        [Locale.EN]: 'Below is a gallery of suggested signs to help keep our message clear and unified. Using them is encouraged but not required. Local Leads will bring signs, and participants are also welcome to make and bring their own.',
        [Locale.SV]: 'Nedan finns en galleri med föreslagna skyltar för att hjälpa till att hålla vårt budskap tydligt och enhetligt. Att använda dem uppmuntras men krävs inte. Lokala ledare kommer att ta med skyltar, och deltagare är också välkomna att göra och ta med sina egna.',
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
    [Locale.EN]: 'When is the next demonstration Join us!',
    [Locale.SV]: 'När är nästa demonstration Gå med oss!',
  },
  nextDemoDescription: {
    [Locale.EN]: 'Get notified about when and where. You can attend in-person or join the live-stream online.',
    [Locale.SV]: 'Få meddelande om när och var. Du kan delta personligen eller gå med i livestreamen online.',
  },
} as const;


