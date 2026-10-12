import {
  COMPANY,
  FIRST_LINK_GROUP,
  SECOND_LINK_GROUP,
  SOCIAL_LINKS,
} from '@/lib/mock-data';
import Image from 'next/image';
import Link from 'next/link';

function FooterLinks({}) {
  const PHONE = COMPANY.phoneNumber;
  const EMAIL = COMPANY.email;
  return (
    <div className='relative isolate overflow-hidden px-3 pt-12 pb-5 text-primary-darker'>
      <span
        aria-hidden='true'
        className='pointer-events-none absolute top-1 right-10 sm:-top-6 sm:right-22 lg:-top-8 lg:right-4 z-20 text-[clamp(4.5rem,20vw,13rem)] font-extrabold text-neutral-0/30 block leading-none'
      >
        {COMPANY.name}
      </span>
      <div className='relative z-30 mx-auto flex min-h-51 w-full max-w-7xl flex-col justify-between rounded-[1.25rem] bg-neutral-0 px-3 py-4 sm:px-4'>
        <div className='grid grid-cols-2 gap-x-3 gap-y-4 min-[480px]:grid-cols-[1.2fr_0.7fr_0.7fr_1.2fr]'>
          <div className='flex flex-col items-start'>
            <Image
              src={COMPANY.logo}
              alt={COMPANY.logo}
              width={140}
              height={40}
              className='h-auto w-16 object-contain sm:w-20'
            />
            <p className='mt-3 max-w-36 text-[0.55rem] leading-[1.35] text-neutral-400'>
              We are creators of transformative spaces that inspire, innovate,
              and endure.
            </p>
          </div>

          <nav aria-label='Footer navigation'>
            <ul className='flex flex-col gap-1.5'>
              {FIRST_LINK_GROUP.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-[0.55rem] leading-tight underline-offset-2 hover:underline focus-visible:underline'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label='More footer links'>
            <ul className='flex flex-col gap-1.5'>
              {SECOND_LINK_GROUP.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-[0.55rem] leading-tight underline-offset-2 hover:underline focus-visible:underline'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='flex flex-col items-start gap-2'>
            <div className='flex flex-col'>
              <Link
                href={`tel:${PHONE.replaceAll(' ', '')}`}
                className='text-[0.65rem] font-semibold leading-tight'
              >
                {PHONE}
              </Link>
              <Link
                href={`mailto:${EMAIL}`}
                className='mt-1 break-all text-[0.65rem] font-semibold leading-tight'
              >
                {EMAIL}
              </Link>
            </div>

            <ul className='mt-auto flex flex-wrap gap-x-2 text-[0.5rem] leading-tight text-neutral-400'>
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='underline-offset-2 hover:underline focus-visible:underline'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-neutral-200 pt-3 text-[0.5rem] leading-tight'>
          <p>© {new Date().getFullYear()} Spaciaz. All Rights Reserved.</p>
          <p>
            Template Designed by{' '}
            <Link
              href='https://www.linkedin.com/in/itsmacr8/'
              className='font-semibold underline-offset-2 hover:underline'
            >
              ITS MAC
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export { FooterLinks };
