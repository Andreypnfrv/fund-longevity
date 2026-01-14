import type { Translation } from './types';
import { Locale } from './types';

export const globalTranslations = {
  nav: {
    home: {
      [Locale.EN]: 'Home',
      [Locale.SV]: 'Hem',
    },
    why: {
      [Locale.EN]: 'Why',
      [Locale.SV]: 'Varför',
    },
    demonstrations: {
      [Locale.EN]: 'Demonstrations',
      [Locale.SV]: 'Demonstrationer',
    },
    asks: {
      [Locale.EN]: 'Asks',
      [Locale.SV]: 'Krav',
    },
    join: {
      [Locale.EN]: 'How can you help',
      [Locale.SV]: 'Hur kan du hjälpa',
    },
    about: {
      [Locale.EN]: 'About us',
      [Locale.SV]: 'Om oss',
    },
  },
  footer: {
    summary: {
      [Locale.EN]: 'Fund Longevity is a multinational initiative to demonstrate for life extension.',
      [Locale.SV]: 'Fund Longevity är en multinationell initiativ för att demonstrera för livsförlängning.',
    },
    copyright: {
      [Locale.EN]: '© 2024 Fund Longevity. All rights reserved.',
      [Locale.SV]: '© 2024 Fund Longevity. Alla rättigheter förbehållna.',
    },
    discord: {
      [Locale.EN]: 'Join Discord',
      [Locale.SV]: 'Gå med i Discord',
    },
  },
  common: {
    join: {
      [Locale.EN]: 'Join',
      [Locale.SV]: 'Gå med',
    },
    learnMore: {
      [Locale.EN]: 'Learn more',
      [Locale.SV]: 'Läs mer',
    },
    close: {
      [Locale.EN]: 'Close',
      [Locale.SV]: 'Stäng',
    },
  },
  forms: {
    firstName: {
      [Locale.EN]: 'First name',
      [Locale.SV]: 'Förnamn',
    },
    city: {
      [Locale.EN]: 'City',
      [Locale.SV]: 'Stad',
    },
    email: {
      [Locale.EN]: 'Email',
      [Locale.SV]: 'E-post',
    },
    phone: {
      [Locale.EN]: 'Phone',
      [Locale.SV]: 'Telefon',
    },
    company: {
      [Locale.EN]: 'Company',
      [Locale.SV]: 'Företag',
    },
    submit: {
      [Locale.EN]: 'Send',
      [Locale.SV]: 'Skicka',
    },
    joinOffline: {
      [Locale.EN]: "I'll join offline",
      [Locale.SV]: 'Jag kommer delta offline',
    },
    canTakePart: {
      [Locale.EN]: 'I can take part',
      [Locale.SV]: 'Jag kan delta',
    },
    intent: {
      [Locale.EN]: 'Intent',
      [Locale.SV]: 'Avsikt',
    },
    joinInPerson: {
      [Locale.EN]: "I want to join in-person",
      [Locale.SV]: 'Jag vill delta personligen',
    },
    joinOnline: {
      [Locale.EN]: "I want to join online",
      [Locale.SV]: 'Jag vill delta online',
    },
    canTakePartInOrganisation: {
      [Locale.EN]: 'I can take part in organisation',
      [Locale.SV]: 'Jag kan delta i organisationen',
    },
    media: {
      [Locale.EN]: 'Media',
      [Locale.SV]: 'Media',
    },
    ideallyUrl: {
      [Locale.EN]: 'Ideally url',
      [Locale.SV]: 'Helst url',
    },
    sending: {
      [Locale.EN]: 'Sending...',
      [Locale.SV]: 'Skickar...',
    },
    emailInvalid: {
      [Locale.EN]: 'Please enter a valid email address',
      [Locale.SV]: 'Vänligen ange en giltig e-postadress',
    },
    successMessage: {
      [Locale.EN]: 'Thank you! Your submission was successful.',
      [Locale.SV]: 'Tack! Din inlämning lyckades.',
    },
    errorMessage: {
      [Locale.EN]: 'Something went wrong. Please try again.',
      [Locale.SV]: 'Något gick fel. Vänligen försök igen.',
    },
    fieldRequired: {
      [Locale.EN]: 'This field is required',
      [Locale.SV]: 'Detta fält är obligatoriskt',
    },
  },
} as const satisfies Record<string, Record<string, Translation>>;

export type GlobalTranslationKeys = typeof globalTranslations;

