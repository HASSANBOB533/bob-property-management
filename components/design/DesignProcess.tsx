'use client';

import {useTranslations} from 'next-intl';

export default function DesignProcess() {
  const t = useTranslations('design.process');

  const steps = [
    {key: 'step1', icon: '🔍', color: 'bg-blue-primary'},
    {key: 'step2', icon: '✏️', color: 'bg-green-primary'},
    {key: 'step3', icon: '🛋️', color: 'bg-yellow-primary'},
    {key: 'step4', icon: '🔨', color: 'bg-red-accent'},
    {key: 'step5', icon: '📸', color: 'bg-blue-primary'},
    {key: 'step6', icon: '🚀', color: 'bg-green-primary'},
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-12">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div key={step.key} className="relative">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-2xl text-white flex-shrink-0`}>
                    {step.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-300">{idx + 1}</div>
                </div>
                <h3 className="text-xl font-bold text-dark-text mb-2">
                  {t(`${step.key}.title`)}
                </h3>
                <p className="text-dark-text/70">
                  {t(`${step.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
