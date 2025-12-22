'use client';

import {useTranslations} from 'next-intl';

export default function DesignHero() {
  const t = useTranslations('design.hero');

  return (
    <section className="relative bg-gradient-to-br from-green-primary/10 via-cream to-yellow-primary/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-dark-text/80">
            {t('subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}
