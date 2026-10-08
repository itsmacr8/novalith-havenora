import Image from 'next/image';
import { Section } from '@/components/shared/Section';
import { SectionIntro } from '@/components/shared/SectionIntro';
import { BottomNavigation } from '@/components/Navbar/BottomNavigation';
import { Flats } from '@/components/flats/Flats';
import { BOTTOM_NAV_LINKS } from '@/lib/mock-data';

function AllAvailableFlats() {
  return (
    <>
      <main>
        <Section className='hero'>
          <Image
            src='/images/flat-1.jpg'
            alt='Hero Image'
            fill
            priority
            className='absolute inset-0 object-cover brightness-70'
          />
          <SectionIntro
            badgeText='Ready To Move'
            title='Available Flats'
            description='Explore our ready-for-handover apartments built with premium specifications, verified land titles, and top-tier amenities.'
            align='center'
          />
          <BottomNavigation navLinks={BOTTOM_NAV_LINKS} />
        </Section>
        <Flats viewHref='' viewLabel='Load More' />
      </main>
    </>
  );
}

export { AllAvailableFlats as default };
