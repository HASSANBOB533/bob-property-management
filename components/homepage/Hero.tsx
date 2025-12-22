'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative bg-gradient-to-br from-cream via-cream to-blue-primary/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text mb-6 leading-tight">
            {t('headline')}
          </h1>
          <p className="text-xl md:text-2xl text-dark-text/80 mb-8">
            {t('subheadline')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href={`/${locale}/list-property`}
              className="bg-blue-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              {t('ctaPrimary')}
            </Link>
            <Link
              href={`/${locale}#services`}
              className="bg-white text-blue-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all border-2 border-blue-primary"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
