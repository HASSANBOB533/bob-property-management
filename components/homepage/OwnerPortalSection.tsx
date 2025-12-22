'use client';

import {useTranslations} from 'next-intl';

export default function OwnerPortalSection() {
  const t = useTranslations('ownerPortal');

  const features = Array.from({length: 6}, (_, i) => t(`features.${i}`));

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-dark-text to-blue-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl mb-12 opacity-90">{t('subtitle')}</p>

          {/* Mockup Dashboard Preview */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="bg-white/5 rounded-lg p-6 border-2 border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">$12,450</div>
                  <div className="text-sm opacity-80">This Month</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">85%</div>
                  <div className="text-sm opacity-80">Occupancy</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center col-span-2 md:col-span-1">
                  <div className="text-3xl font-bold">4.9★</div>
                  <div className="text-sm opacity-80">Guest Rating</div>
                </div>
              </div>
              <div className="text-center text-sm opacity-70">
                Guesty Owner Portal Dashboard Preview
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-green-primary text-xl">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <a
            href="https://app.guesty.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-dark-text px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
