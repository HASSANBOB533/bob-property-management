'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';

export default function MobileBottomBar() {
  const t = useTranslations('nav');
  const locale = useLocale();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="grid grid-cols-2 gap-2 p-3">
        <Link
          href={`/${locale}/list-property`}
          className="bg-blue-primary text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-opacity-90 transition-all text-sm"
        >
          {t('getEvaluation')}
        </Link>
        <a
          href="tel:+201234567890"
          className="bg-green-primary text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-opacity-90 transition-all text-sm"
        >
          📞 Call Us
        </a>
      </div>
    </div>
  );
}
