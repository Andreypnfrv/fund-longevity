import { H2, H3 } from './Typography';
import { Card } from './Card';
import { Locale } from '@/lib/types';

interface PartnersProps {
  locale: Locale;
  title: string;
  partners: string[];
}

export function Partners({ locale: _locale, title, partners }: PartnersProps) {
  return (
    <section className="mt-16">
      <H2 display className="mb-8">{title}</H2>
      <div className="grid md:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <Card key={index}>
            <H3>{partner}</H3>
          </Card>
        ))}
      </div>
    </section>
  );
}

