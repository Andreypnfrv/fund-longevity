import type { Translation } from '@/lib/types';
import { Locale } from '@/lib/types';

const en = (s: string): Translation =>
  ({
    [Locale.EN]: s,
    [Locale.SV]: s,
    [Locale.DE]: s,
    [Locale.FR]: s,
    [Locale.ES]: s,
    [Locale.IT]: s,
    [Locale.NL]: s,
    [Locale.CS]: s,
  }) as Translation;

export const messagesTranslations = {
  heroTitle: en('Print one of those signs or make your own'),
  sectionImportant: en('Most important signs'),
  sectionImportantSubtitle: en(
    "It's good to have those so we can keep consistency across cities",
  ),
  sectionMeme: en('Meme-sign ideas'),
  sectionInspiration: en('Inspiration'),
  inspirationCredit: en('AI-generated images that represent our vision'),
  inspirationEmpty: en('More photos will be added here soon.'),
  download: en('Download'),
  memePdfCta: en('More slogan ideas (Google Doc)'),
  memePdfUrl:
    'https://docs.google.com/document/d/1poE0bmPsSDeWWzs2kBynoCwhXg5qcg4Luj-siIucCFY/edit',
};

export const MEME_SIGN_LINES = [
  'If Death is So Great, Why Do We Have Seatbelts?',
  'Life sucks, but death is worse',
  "I'm Pro-Life. Especially My Own",
  'Death: 0/10. Would Not Recommend to a Friend',
  "Why Are We Funding Everything Except 'Not Dying'?",
  'Aging: The Only Disease People Get Mad at You for Trying to Fix',
  "Cancer is Bad. Heart Disease is Bad. Why is the Root Cause 'Acceptable'?",
  'I Have Plans for the Year 2150. Please Help',
  "I Don't Want to Go to a Better Place. I want to fix this one and stay here longer.",
  "Life is good. Death is bad. It's that easy. Fund Longevity research.",
  "can't wait to get old, not able to move, losing memory, getting cancer and dying!",
  'Planned obsolescence Sucks. I want a body that lasts forever',
  "Don't let my telomeres set my expiration date",
  "Aging: still undefeated. Let's fix that.",
  'Imagine accepting rust on your car. Now imagine accepting it in your body.',
  "I'd like fewer birthdays and more years, thanks.",
  'Aging is natural. So is fixing problems.',
  '"It\'s natural" — so is dying of preventable diseases.',
  'Side effects of aging include… everything.',
  "Aging: 100% fatal. Weird we're chill about it.",
  "Just because it's common doesn't mean it's good.",
  'We cured smallpox but aging gets a free pass?',
  'If it breaks, we fix it. Except us?',
  'We fund rockets to Mars but not "don\'t fall apart"?',
  'Fix potholes, fix bridges, fix aging.',
  'Budget idea: slightly less dying.',
  'I refuse to expire.',
  'Aging is a design flaw.',
  'Patch notes: human body v2.0 when?',
  'I just got used to life. Can we not end it?',
  "Give me more time, I'm just getting started.",
  'Aging is the slowest mass casualty event we ignore',
  'We treat symptoms. Why not the cause?',
] as const;
