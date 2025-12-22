'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';

export default function PricingPackages() {
  const t = useTranslations('pricing');
  const locale = useLocale();

  const packages = [
    {
      key: 'marketing',
      color: 'border-blue-primary',
      bgColor: 'bg-blue-primary/5',
    },
    {
      key: 'performance',
      color: 'border-green-primary',
      bgColor: 'bg-green-primary/5',
      popular: true,
    },
    {
      key: 'allInclusive',
      color: 'border-yellow-primary',
      bgColor: 'bg-yellow-primary/5',
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-dark-text/70">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => {
            const features = Array.from({length: 5}, (_, i) =>
              t(`${pkg.key}.features.${i}`)
            );

            return (
              <div
                key={pkg.key}
                className={`relative border-2 ${pkg.color} ${pkg.bgColor} rounded-2xl p-8 hover:shadow-lg transition-shadow`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {t('performance.popular')}
                  </div>
                )}

                <h3 className="text-2xl font-bold text-dark-text mb-2">
                  {t(`${pkg.key}.title`)}
                </h3>
                <div className="text-3xl font-bold text-blue-primary mb-6">
                  {t(`${pkg.key}.percentage`)}
                </div>

                <ul className="space-y-3 mb-8">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-green-primary mt-1">✓</span>
                      <span className="text-dark-text/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/list-property`}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-green-primary text-white hover:bg-green-primary/90'
                      : 'bg-dark-text text-white hover:bg-dark-text/90'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
