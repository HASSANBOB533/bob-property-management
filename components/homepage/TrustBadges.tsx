'use client';

import {useTranslations} from 'next-intl';

export default function TrustBadges() {
  const t = useTranslations('trustBadges');

  const badges = [
    {label: t('superhost'), icon: '🏆'},
    {label: t('rating'), icon: '⭐'},
    {label: t('properties'), icon: '🏠'},
    {label: t('support'), icon: '📞'},
  ];

  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge) => (
            <div key={badge.label} className="text-center">
              <div className="text-4xl mb-2">{badge.icon}</div>
              <div className="font-semibold text-dark-text text-sm md:text-base">
                {badge.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
