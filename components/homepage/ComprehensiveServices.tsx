'use client';

import {useTranslations} from 'next-intl';

export default function ComprehensiveServices() {
  const t = useTranslations('comprehensiveServices');

  const services = [
    {key: 'design', icon: '🎨', color: 'from-green-primary to-green-primary/70'},
    {key: 'listing', icon: '📸', color: 'from-blue-primary to-blue-primary/70'},
    {key: 'revenue', icon: '💰', color: 'from-yellow-primary to-yellow-primary/70'},
    {key: 'guest', icon: '👥', color: 'from-red-accent to-red-accent/70'},
    {key: 'property', icon: '🔧', color: 'from-blue-primary to-blue-primary/70'},
    {key: 'financial', icon: '📊', color: 'from-green-primary to-green-primary/70'},
    {key: 'legal', icon: '⚖️', color: 'from-dark-text to-dark-text/70'},
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-12">
          {t('title')}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.key}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-dark-text mb-2">
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-sm text-dark-text/70">
                {t(`${service.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
