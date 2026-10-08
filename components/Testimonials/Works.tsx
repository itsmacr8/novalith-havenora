import { WorkProps } from '@/lib/mock-data';
import Image from 'next/image';
import Link from 'next/link';

function ProjectMark() {
  return (
    <div
      aria-hidden='true'
      className='grid size-10 place-items-center rounded-full border border-neutral-400/50'
    >
      <span className='size-3 rounded-full border border-neutral-400/70' />
    </div>
  );
}

function Works({ works }: WorkProps) {
  return (
    <div aria-label='Featured projects' className='relative bg-primary-darker'>
      {works.map((work, index) => (
        <article
          key={`${work.projectName}-${index}`}
          className='sticky top-0 grid grid-cols-1 sm:grid-cols-2 min-h-0 sm:min-h-dvh'
          // className='sticky top-0 grid grid-cols-1 sm:grid-cols-2 min-h-[100svh] sm:min-h-dvh'
          style={{ zIndex: index + 1 }}
        >
          <div className='relative h-[25svh] sm:h-auto'>
            <Image
              src={work.imageSrc}
              alt={work.imageAlt}
              fill
              priority={index === 0}
              className='object-cover transition-transform duration-500 ease-out'
            />
          </div>

          <div className='relative flex flex-col justify-between overflow-hidden bg-primary-darker px-6 py-6 text-neutral-0 min-h-0'>
            {/* <div className='relative flex flex-col justify-between overflow-hidden bg-primary-darker px-6 py-6 text-neutral-0 min-h-[40dvh] sm:min-h-0'> */}
            <div className='mx-auto flex min-h-0 w-full max-w-xl flex-col gap-5 sm:flex-1'>
              <div className='flex items-start justify-between'>
                <span className='rounded-full border border-neutral-400/60 px-2 py-1 text-[0.625rem] uppercase tracking-[0.2em] text-neutral-200'>
                  {work.eyebrow}
                </span>

                <span className='text-small text-neutral-400'>
                  {String(index + 1).padStart(2, '0')} /{' '}
                  {String(works.length).padStart(2, '0')}
                </span>
              </div>

              <div className='flex flex-col sm:flex-1 sm:justify-around gap-2'>
                <h2 className='text-h2 max-w-md font-medium leading-[0.95] tracking-[-0.04em] text-neutral-0 sm:text-h2'>
                  {work.title}
                </h2>
                <div className='flex items-center gap-5'>
                  <ProjectMark />
                  <div className='flex flex-col'>
                    <span className='text-[0.625rem] uppercase tracking-[0.16em] text-neutral-400'>
                      {work.projectType}
                    </span>

                    <Link
                      href={work.projectHref}
                      className='text-small underline decoration-neutral-400/60 underline-offset-4 transition-colors hover:text-accent-lighter focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-lighter'
                    >
                      {work.projectName}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export { Works };
