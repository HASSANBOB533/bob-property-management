'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';

export default function FinalCTA() {
  const t = useTranslations('finalCTA');
  const locale = useLocale();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-primary to-green-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          {t('title')}
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
        <Link
          href={`/${locale}/list-property`}
          className="inline-block bg-white text-blue-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
        >
          {t('button')}
        </Link>
      </div>
    </section>
  );
}
