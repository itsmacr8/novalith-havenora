import { Navbar } from '@/components/Navbar/Navbar';
import { Flats } from '@/components/flats/Flats';
import { SocialLinksWidget } from '@/components/Navbar/SocialLinksWidget';
import { AvailableLands } from '@/components/lands/AvailableLands';
import { CONTACT_INFO, BOTTOM_NAV_LINKS } from '@/lib/mock-data';

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
        <Flats />
        <AvailableLands />
      </main>
    </>
  );
}

export { HomePage as default };
