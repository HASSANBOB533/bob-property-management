'use client';

import {useTranslations} from 'next-intl';

export default function DesignPricing() {
  const t = useTranslations('design.pricing');

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-12">
          {t('title')}
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-blue-primary rounded-xl p-8">
              <div className="text-4xl mb-4 text-center">💎</div>
              <h3 className="text-xl font-bold text-dark-text mb-2 text-center">
                {t('designFee')}
              </h3>
              <p className="text-center text-dark-text/70 text-sm">
                Professional design services and project management
              </p>
            </div>

            <div className="bg-white border-2 border-green-primary rounded-xl p-8">
              <div className="text-4xl mb-4 text-center">🛋️</div>
              <h3 className="text-xl font-bold text-dark-text mb-2 text-center">
                {t('markup')}
              </h3>
              <p className="text-center text-dark-text/70 text-sm">
                Transparent pricing on all furniture and equipment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
