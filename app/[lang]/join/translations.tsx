import type { Translation } from '@/lib/types';
import { Locale } from '@/lib/types';

export const joinTranslations = {
  hero: {
    title: {
      [Locale.EN]: 'Join the Fund Longevity movement',
      [Locale.SV]: 'Gå med i Fund Longevity-rörelsen',
    },
    subtitle: {
      [Locale.EN]: '',
      [Locale.SV]: '',
    },
  },
  discord: {
    title: {
      [Locale.EN]: 'Join the Discord Community',
      [Locale.SV]: 'Gå med i Discord-gemenskapen',
    },
    description: {
      [Locale.EN]: 'Join the tribe! Do you want to chat with like-minded aging-fighters? Then this is for you!',
      [Locale.SV]: 'Gå med i stammen! Vill du chatta med likasinnade åldrandesbekämpare? Då är detta för dig!',
    },
  },
  demonstration: {
    title: {
      [Locale.EN]: 'Join the Demonstration',
      [Locale.SV]: 'Gå med i demonstrationen',
    },
    description: {
      [Locale.EN]: 'Get notified about when and where. You can attend in-person or join the live-stream online.',
      [Locale.SV]: 'Få meddelande om när och var. Du kan delta personligen eller gå med i livestreamen online.',
    },
  },
  media: {
    title: {
      [Locale.EN]: 'Join as Media',
      [Locale.SV]: 'Gå med som media',
    },
    description: {
      [Locale.EN]: 'We welcome you to the demonstrations and also to get in touch if you need any comments on biotech, public health, etc. We\'ll connect you with experts.',
      [Locale.SV]: 'Vi välkomnar dig till demonstrationerna och även att höra av dig om du behöver några kommentarer om bioteknik, folkhälsa etc. Vi kopplar dig med experter.',
    },
  },
  partner: {
    title: {
      [Locale.EN]: 'Become a Partner',
      [Locale.SV]: 'Bli partner',
    },
    description: {
      [Locale.EN]: 'Is your organization already fighting aging? Awesome! We want to help you. Be it finding talent, fundraising or getting media exposure.',
      [Locale.SV]: 'Kämpar din organisation redan mot åldrande? Fantastiskt! Vi vill hjälpa dig. Oavsett om det handlar om att hitta talanger, insamling eller få mediaexponering.',
    },
  },
  partners: {
    title: {
      [Locale.EN]: 'Featured organisations',
      [Locale.SV]: 'Utvalda organisationer',
    },
  },
} as const satisfies Record<string, Record<string, Translation>>;

