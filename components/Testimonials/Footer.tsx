import Image from 'next/image';
import Link from 'next/link';
import { FooterLinks } from './FooterLinks';

function Footer() {
  return (
    <>
      <Image
        src='/images/flat-1.jpg'
        alt='/images/flat-1.jpg'
        fill
        sizes='100vw'
        className='-z-2 object-cover object-center brightness-60'
      />

      <div className='flex w-full max-w-136 flex-col items-center px-4 py-8 text-center'>
        <h2
          id='dream-home-title'
          className='text-h2 max-w-[12ch] font-semibold leading-[1.02] tracking-[-0.055em] text-balance'
        >
          Your dream home awaits
        </h2>

        <p className='mt-2 max-w-124 text-[clamp(0.6875rem,1.35vw,0.9375rem)] leading-[1.35] text-pretty'>
          Whether you&apos;re exploring our homes or envisioning something
          custom, we&apos;re here to bring your dream to life.
        </p>

        <Link
          href='/contact'
          className='mt-5 inline-flex size-30 items-center justify-center rounded-full bg-accent text-center text-primary-darker transition-transform duration-200 hover:-translate-2 hover:scale-110 motion-reduce:transition-none motion-reduce:hover:transform-none'
        >
          <span className='leading-tight'>
            <span className='block'>Get Your</span>
            <span className='block'>Free Quote</span>
          </span>
        </Link>
      </div>
      <FooterLinks />
    </>
  );
}

export { Footer };
