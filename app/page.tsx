import { Hero } from '@/components/hero/hero';
import { ServiceCards } from '@/components/service-card/ServiceCard';
import { Section } from '@/components/shared/Section';
import { SectionIntro } from '@/components/shared/SectionIntro';
import { HERO_IMAGES } from '@/lib/mock-data';

export default function Home() {
  return (
    <>
      <main>
        <section
          data-architecture-hero
          className='relative sm:min-h-[200svh] bg-primary-light'
        >
          <Hero {...HERO_IMAGES} />
        </section>
        <Section>
          <SectionIntro
            badgeText='What we offer'
            headingText='Take a brief look at some of the services we offer'
          />
          <ServiceCards />
        </Section>
      </main>
    </>
  );
}
