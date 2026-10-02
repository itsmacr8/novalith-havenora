import { Hero } from '@/components/hero/hero';
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
      </main>
    </>
  );
}
