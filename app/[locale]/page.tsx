import {useTranslations} from 'next-intl';
import Hero from '@/components/homepage/Hero';
import TrustBadges from '@/components/homepage/TrustBadges';
import PartnerLogos from '@/components/homepage/PartnerLogos';
import Services from '@/components/homepage/Services';
import ComprehensiveServices from '@/components/homepage/ComprehensiveServices';
import PricingPackages from '@/components/homepage/PricingPackages';
import OwnerPortalSection from '@/components/homepage/OwnerPortalSection';
import WhyChooseUs from '@/components/homepage/WhyChooseUs';
import ComparisonTable from '@/components/homepage/ComparisonTable';
import FinalCTA from '@/components/homepage/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <PartnerLogos />
      <Services />
      <ComprehensiveServices />
      <PricingPackages />
      <OwnerPortalSection />
      <WhyChooseUs />
      <ComparisonTable />
      <FinalCTA />
    </>
  );
}
