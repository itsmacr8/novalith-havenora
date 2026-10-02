import { Blog } from '@/components/blog/Blog';
import { Contact } from '@/components/contact/Contact';
import { Hero } from '@/components/hero/hero';
import { ServiceCards } from '@/components/service-card/ServiceCard';
import { Section } from '@/components/shared/Section';
import { SectionIntro } from '@/components/shared/SectionIntro';
import { Works } from '@/components/works/Works';
import { HERO_IMAGES, WORKS } from '@/lib/mock-data';

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
        <section id='works'>
          <SectionIntro
            badgeText='Selected Projects'
            headingText='Take a brief look at some of the services we offer'
          />
          <Works works={WORKS} />
        </section>
        <Section>
          <Contact />
        </Section>
        <Section>
          <Blog />
        </Section>
      </main>
    </>
  );
}
