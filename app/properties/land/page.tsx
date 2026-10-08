import Image from 'next/image';
import { Section } from '@/components/shared/Section';
import { SectionIntro } from '@/components/shared/SectionIntro';
import { BottomNavigation } from '@/components/Navbar/BottomNavigation';
import { AvailableLands } from '@/components/lands/AvailableLands';
import { BOTTOM_NAV_LINKS } from '@/lib/mock-data';

function AllAvailableLands() {
  return (
    <>
      <main>
        <Section className='hero'>
          <Image
            src='/images/land-1.jpg'
            alt='Hero Image'
            fill
            priority
            className='absolute inset-0 object-cover brightness-70'
          />
          <SectionIntro
            badgeText='Land Opportunities'
            title='Available Lands'
            description='High-yield development sites with clear titles, optimal road access, and pre-approved structural plans for high-rise residential towers.'
            align='center'
          />
          <BottomNavigation navLinks={BOTTOM_NAV_LINKS} />
        </Section>
        <AvailableLands viewHref='' viewLabel='Load More' />
      </main>
    </>
  );
}

export { AllAvailableLands as default };
