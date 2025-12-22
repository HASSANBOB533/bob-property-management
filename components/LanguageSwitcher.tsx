'use client';

import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Store preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', newLocale);
    }
    
    // Replace current locale in pathname
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex items-center gap-1 border border-gray-300 rounded-lg overflow-hidden">
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 text-sm font-medium transition-colors ${
          locale === 'en'
            ? 'bg-blue-primary text-white'
            : 'bg-white text-dark-text hover:bg-gray-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('ar')}
        className={`px-3 py-1 text-sm font-medium transition-colors ${
          locale === 'ar'
            ? 'bg-blue-primary text-white'
            : 'bg-white text-dark-text hover:bg-gray-100'
        }`}
      >
        AR
      </button>
    </div>
  );
}
