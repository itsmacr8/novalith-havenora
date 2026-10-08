import {
  IBenefitIconProps,
  IWhatMakesUsDifferentProps,
  BENEFITS,
} from '@/lib/mock-data';
import Image from 'next/image';

function BenefitIcon({ kind }: IBenefitIconProps) {
  return (
    <svg
      aria-hidden='true'
      viewBox='0 0 24 24'
      fill='none'
      className='size-[1.15rem] stroke-primary-darker stroke-[1.4]'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      {kind === 'responsibility' && (
        <>
          <path d='M12 20s-7-4.1-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.9-7 10-7 10Z' />
          <path d='M12 7v9m-3-4h6' />
        </>
      )}
      {kind === 'expertise' && (
        <>
          <circle cx='12' cy='8' r='3' />
          <path d='M6 20v-1a6 6 0 0 1 12 0v1M5 7l1.5 1.5M19 7l-1.5 1.5M12 2v2' />
        </>
      )}
      {kind === 'diversity' && (
        <>
          <circle cx='12' cy='12' r='8' />
          <path d='M12 4c2.3 2.2 3.4 4.9 3.4 8s-1.1 5.8-3.4 8m0-16c-2.3 2.2-3.4 4.9-3.4 8s1.1 5.8 3.4 8M4 12h16' />
        </>
      )}
    </svg>
  );
}

function WhatMakesUsDifferent({ reviewers }: IWhatMakesUsDifferentProps) {
  return (
    <div className='mt-6 mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 sm:gap-12 md:grid-cols-[0.95fr_1.05fr]'>
      <div className='relative min-w-0'>
        <div className='relative aspect-[0.82] overflow-hidden rounded-2xl bg-primary-light'>
          <Image
            src='/images/team-work.jpg'
            alt='Colleagues working together at a table'
            fill
            sizes='(max-width: 767px) 100vw, 42vw'
            className='object-cover'
          />
        </div>
        <div
          aria-label='Rated 4.9 out of 5'
          className='absolute -bottom-4 md:bottom-24 inset-x-0 flex flex-col items-center w-[75%] mx-auto bg-linear-to-t from-primary-darker/90 to-primary/50 px-4 py-4 text-neutral-0'
        >
          <span className='text-3xl font-bold leading-none text-accent-light'>
            4.9
          </span>

          <div aria-hidden='true' className='mt-2 flex justify-center pl-2'>
            {reviewers?.map((reviewer, index) => (
              <span
                className='relative -ml-2 size-8 overflow-hidden rounded-full border-2 border-neutral-0 bg-secondary-light'
                key={`${reviewer.src}-${index}`}
              >
                <Image
                  src={reviewer.src}
                  alt={reviewer.alt}
                  fill
                  sizes='32px'
                  className='object-cover'
                />
              </span>
            ))}
          </div>

          <span className='mt-1 text-xs font-semibold'>
            2k+ satisfied customers
          </span>
        </div>
      </div>

      <div className='min-w-0'>
        <h2
          id='what-makes-us-different-heading'
          className='text-h2 font-bold leading-[1.08] text-primary-darker'
        >
          What makes us different
        </h2>

        <p className='text-small mb-5 mt-3 max-w-xl leading-relaxed text-primary-dark'>
          It&apos;s not just about creating something good. It&apos;s about
          designing, innovating, and creating lasting change with a team that
          cares.
        </p>

        <ul className='m-0 list-none p-0'>
          {BENEFITS.map((benefit) => (
            <li
              className='grid grid-cols-[2.75rem_minmax(6.5rem,0.8fr)_minmax(0,1.4fr)] items-center gap-3 border-t border-neutral-200 py-3 max-[420px]:grid-cols-[2.75rem_1fr] sm:gap-4'
              key={benefit.icon}
            >
              <span className='grid aspect-square w-11 place-items-center rounded-full bg-accent-light'>
                <BenefitIcon kind={benefit.icon} />
              </span>

              <h3 className='m-0 text-xs font-bold leading-snug text-primary-darker'>
                {benefit.title}
              </h3>

              <p className='m-0 text-xs leading-relaxed text-primary-dark max-[420px]:col-start-2'>
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { WhatMakesUsDifferent };
