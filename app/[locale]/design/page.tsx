import {useTranslations} from 'next-intl';
import DesignHero from '@/components/design/DesignHero';
import DesignProcess from '@/components/design/DesignProcess';
import DesignPricing from '@/components/design/DesignPricing';
import ProjectGallery from '@/components/design/ProjectGallery';

export default function DesignPage() {
  return (
    <>
      <DesignHero />
      <DesignProcess />
      <DesignPricing />
      <ProjectGallery />
    </>
  );
}
