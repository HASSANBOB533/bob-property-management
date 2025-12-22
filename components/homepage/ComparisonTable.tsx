'use client';

import {useTranslations} from 'next-intl';

export default function ComparisonTable() {
  const t = useTranslations('comparison');

  const features = [
    'technology',
    'pricing',
    'support',
    'transparency',
    'multiOTA',
    'superhost',
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-12">
          {t('title')}
        </h2>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-dark-text">
                <th className="text-left py-4 px-4 font-semibold text-dark-text">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-blue-primary">
                  {t('bob')}
                </th>
                <th className="text-center py-4 px-4 font-semibold text-dark-text/50">
                  {t('typical')}
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={feature} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-4 px-4 text-dark-text">
                    {t(`features.${feature}`)}
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-2xl text-green-primary">✓</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-2xl text-red-accent">✗</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
