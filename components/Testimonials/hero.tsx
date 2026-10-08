'use client';

import { IHeroImages } from '@/lib/mock-data';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type HeroMotion = {
  progress: number;
  reducedMotion: boolean;
};

function useHeroScrollMotion(): HeroMotion {
  const [motion, setMotion] = useState<HeroMotion>({
    progress: 0,
    reducedMotion: false,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    let animationFrame = 0;

    const updateMotion = () => {
      const hero = document.querySelector<HTMLElement>(
        '[data-architecture-hero]',
      );

      if (!hero || mediaQuery.matches) {
        setMotion({
          progress: 0,
          reducedMotion: mediaQuery.matches,
        });

        return;
      }

      const heroBounds = hero.getBoundingClientRect();
      const scrollDistance = hero.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) {
        return;
      }

      const distanceScrolled = Math.max(0, -heroBounds.top);
      const progress = Math.min(
        1,
        Math.max(0, distanceScrolled / scrollDistance),
      );

      setMotion({
        progress,
        reducedMotion: false,
      });
    };

    const requestMotionUpdate = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateMotion);
    };

    const handleMotionPreferenceChange = () => {
      requestMotionUpdate();
    };

    requestMotionUpdate();

    window.addEventListener('scroll', requestMotionUpdate, {
      passive: true,
    });

    window.addEventListener('resize', requestMotionUpdate);

    mediaQuery.addEventListener('change', handleMotionPreferenceChange);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', requestMotionUpdate);
      window.removeEventListener('resize', requestMotionUpdate);
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
    };
  }, []);

  return motion;
}

function Hero({ buildingImage, cloudImages }: IHeroImages) {
  const { progress, reducedMotion } = useHeroScrollMotion();

  const firstCloudX = reducedMotion ? 0 : progress * 26;
  const secondCloudX = reducedMotion ? 0 : progress * 40;

  return (
    <>
      <div className='sticky top-0 isolate h-[60svh] sm:h-svh overflow-hidden bg-primary-light'>
        {/* Hero text */}
        <div className='absolute left-8 top-20 sm:top-30 z-40 sm:w-[min(20rem,50vw)] text-center sm:text-left'>
          <p className='text-small leading-[1.15] mb-2'>
            We are a developer invested in our customers&apos; success and
            improving the communities where we serve.
          </p>

          <Link
            href='#executive-members'
            className='block w-fit mx-auto sm:mx-0 rounded-full bg-neutral-0 py-1 px-3 text-primary-darker transition-colors hover:bg-accent-lighter focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-lighter'
          >
            More About Us
          </Link>
        </div>

        {/* Cloud image */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute left-[-14%] top-[4%] z-10 h-[58%] w-[66%]'
          style={{
            transform: `translate3d(${firstCloudX}vw, 0, 0)`,
          }}
        >
          <Image
            src={cloudImages.first}
            alt=''
            fill
            priority
            sizes='70vw'
            className='object-contain object-top-left'
          />
        </div>

        <div
          aria-hidden='true'
          className='pointer-events-none absolute right-[-14%] top-[14%] z-10 h-[54%] w-[64%]'
          style={{
            transform: `translate3d(${secondCloudX}vw, 0, 0)`,
          }}
        >
          <Image
            src={cloudImages.second}
            alt=''
            fill
            priority
            sizes='70vw'
            className='object-contain object-top-right'
          />
        </div>

        {/* Building image */}
        <div className='pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[55%] sm:h-[80%]'>
          <Image
            src={buildingImage.src}
            alt={buildingImage.alt}
            fill
            priority
            sizes='(max-width: 768px) 100vw, 72vw'
            className='object-contain object-bottom'
          />
        </div>

        {/* Independent continuous text animation */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute left-0 top-[72%] z-20 w-max -translate-y-1/2 overflow-visible whitespace-nowrap text-[clamp(7rem,22vw,22rem)] font-medium leading-[0.78] tracking-[-0.09em] text-neutral-0 motion-reduce:animate-none'
        >
          <div className='flex w-max animate-[hero-background-marquee_30s_linear_infinite]'>
            <span className='shrink-0 pr-[8vw]'>real estate</span>
            <span className='shrink-0 pr-[8vw]'>real estate</span>
          </div>
        </div>
      </div>
    </>
  );
}

export { Hero };
