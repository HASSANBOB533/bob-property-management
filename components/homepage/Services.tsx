'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();

  return (
    <section id="services" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-12">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Property Management */}
          <div className="bg-gradient-to-br from-blue-primary to-blue-primary/80 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold mb-2">{t('propertyManagement.title')}</h3>
            <p className="text-lg opacity-90">{t('propertyManagement.subtitle')}</p>
          </div>

          {/* Design & Furnishing */}
          <Link href={`/${locale}/design`}>
            <div className="bg-gradient-to-br from-green-primary to-green-primary/80 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-2">{t('designFurnishing.title')}</h3>
              <p className="text-lg opacity-90">{t('designFurnishing.subtitle')}</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
