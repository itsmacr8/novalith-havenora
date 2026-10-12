import { Section } from '@/components/shared/Section';
// import { SectionIntro } from '@/components/shared/SectionIntro';
import {
  DEFAULT_REVIEWERS,
  DEFAULT_TESTIMONIALS,
  HERO_IMAGES,
  WORKS,
} from '@/lib/mock-data';
import { Testimonials } from '@/components/Testimonials/Testimonials';
import { ServiceCards } from '@/components/hero/ServiceCard';
import { Team } from '@/components/Testimonials/Team';
import { Blog } from '@/components/Testimonials/Blog';
import { Works } from '@/components/Testimonials/Works';
import { Hero } from '@/components/Testimonials/hero';
import { SectionIntro } from '@/components/Testimonials/SectionIntro';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/Testimonials/Footer';
import { WhatMakesUsDifferent } from '@/components/Testimonials/WhatMakesUsDifferent';
import { BadgeText } from '@/components/Testimonials/BadgeText';

function HomePage() {
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
        <Section
          aria-labelledby='what-makes-us-different-heading'
          className='text-primary-darker'
        >
          <BadgeText badgeText='Our Commitment' className='mx-auto' />
          <WhatMakesUsDifferent reviewers={DEFAULT_REVIEWERS} />
        </Section>

        <Section>
          {/* <SectionIntro
            badgeText='Client Experiences'
            title='Trusted by Visionary Buyers & Investors'
            description='Hear directly from our clients about their property acquisition and investment journeys.'
            icon='💬'
            align='center'
          /> */}
          <SectionIntro
            badgeText='Client Experiences'
            headingText='Trusted by Buyers'
          />
          <Testimonials testimonials={DEFAULT_TESTIMONIALS} />
        </Section>

        <Section>
          <SectionIntro
            badgeText='Meet the Team'
            headingText='Executive Leadership'
          />
          <Team />
        </Section>
        <Section>
          <Contact />
        </Section>
        <Section>
          <Blog />
        </Section>
      </main>
      <footer
        aria-labelledby='dream-home-title'
        className='relative isolate grid place-items-center overflow-hidden bg-primary-darker text-neutral-0'
      >
        <Footer />
      </footer>
    </>
  );
}

export { HomePage as default };
