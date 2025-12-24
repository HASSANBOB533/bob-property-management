import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';

const locales = ['en', 'ar'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        {/* SEO Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Best of Bedz (BOB) - Premium property management services in Egypt. Maximize your rental revenue with professional marketing, design, and all-inclusive property management." />
        <meta name="keywords" content="property management, rental property, vacation rental, airbnb management, property design, Egypt property management, Best of Bedz, BOB" />
        <meta name="author" content="Best of Bedz LLC" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bobpropertymanagement.com/" />
        <meta property="og:title" content="Best of Bedz - Premium Property Management Services" />
        <meta property="og:description" content="Maximize your rental revenue with professional property management, interior design, and marketing services." />
        <meta property="og:image" content="https://bobpropertymanagement.com/images/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Best of Bedz" />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_EG' : 'en_US'} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://bobpropertymanagement.com/" />
        <meta name="twitter:title" content="Best of Bedz - Premium Property Management" />
        <meta name="twitter:description" content="Professional property management services to maximize your rental revenue" />
        <meta name="twitter:image" content="https://bobpropertymanagement.com/images/og-image.svg" />
        
        {/* Favicon and Icons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B6CB4" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Best of Bedz',
              alternateName: 'BOB Property Management',
              url: 'https://bobpropertymanagement.com',
              logo: 'https://bobpropertymanagement.com/images/logo.svg',
              description: 'Premium property management services in Egypt',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'EG',
                addressRegion: 'Cairo'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                availableLanguage: ['English', 'Arabic']
              },
              sameAs: [
                'https://www.facebook.com/BestofBedz/',
                'https://www.instagram.com/bestofbedz',
                'https://www.linkedin.com/company/best-of-bedz/',
                'https://www.youtube.com/@BestofBedz-LLC',
                'https://www.tiktok.com/@bestofbedzofficial'
              ]
            })
          }}
        />
      </head>
      <body className="font-sans">
        <NextIntlClientProvider messages={messages}>
          {/* Skip to main content for keyboard navigation */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <MobileBottomBar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
