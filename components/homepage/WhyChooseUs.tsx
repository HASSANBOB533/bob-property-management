'use client';

import {useTranslations} from 'next-intl';

export default function WhyChooseUs() {
  const t = useTranslations('whyChoose');

  const reasons = [
    {key: 'maximize', icon: '📈', color: 'bg-green-primary'},
    {key: 'zeroStress', icon: '😌', color: 'bg-blue-primary'},
    {key: 'technology', icon: '💻', color: 'bg-yellow-primary'},
    {key: 'superhost', icon: '⭐', color: 'bg-red-accent'},
    {key: 'datadriven', icon: '📊', color: 'bg-green-primary'},
    {key: 'sustainable', icon: '🌱', color: 'bg-blue-primary'},
  ];

  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-12">
          {t('title')}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.key}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`w-16 h-16 ${reason.color} rounded-full flex items-center justify-center text-3xl mb-4 text-white`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-2">
                {t(`${reason.key}.title`)}
              </h3>
              <p className="text-dark-text/70">
                {t(`${reason.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
