import { Navbar } from '@/components/Navbar/Navbar';
import { Flats } from '@/components/flats/Flats';
import { SocialLinksWidget } from '@/components/Navbar/SocialLinksWidget';
import { AvailableLands } from '@/components/lands/AvailableLands';
import { CONTACT_INFO, BOTTOM_NAV_LINKS } from '@/lib/mock-data';
import { SectionIntro } from '@/components/shared/SectionIntro';
import { Section } from '@/components/shared/Section';
import Image from 'next/image';
import { Contact } from '@/components/contact/Contact';

function HomePage() {
  return (
    <>
      <Navbar />
      <SocialLinksWidget
        email={CONTACT_INFO.email}
        whatsappNumber={CONTACT_INFO.whatsappNumber}
        phone={CONTACT_INFO.phoneNumber}
      />
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
            badgeText='Verified Properties & Group Land Investment'
            title='Own Your Ready Home Today, Or Build Big Together Tomorrow.'
            location='Discover turnkey flats ready for handover, or join vetted group land-share opportunities to construct your dream home at cost.'
          />
        </Section>
        <Section id='contact'>
          <Contact />
        </Section>
      </main>
    </>
  );
}

export { HomePage as default };
