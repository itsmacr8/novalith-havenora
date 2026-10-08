import { SERVICES } from '@/lib/mock-data';
import Image from 'next/image';

function ServiceCards() {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-2'>
      {SERVICES.map((service) => (
        <article
          key={service.id}
          className='group relative isolate min-h-72 overflow-hidden rounded-2xl bg-primary-light p-5'
        >
          <div
            aria-hidden='true'
            className='
              pointer-events-none absolute inset-0 z-0 bg-primary
              [clip-path:polygon(100%_0,100%_0,100%_0,100%_0)]
              transition-[clip-path] duration-500 ease-out
              group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]
            '
          />

          <h2 className='text-h2 text-primary-darker underline underline-offset-2 transition-colors duration-300 group-hover:text-primary-light relative z-20'>
            {service.title}
          </h2>

          <div className='absolute -bottom-4 left-0 z-10 h-[72%] w-[90%] transition-transform duration-500 ease-out group-hover:-translate-y-2'>
            <Image
              src={service.imageSrc}
              alt={service.imageAlt}
              fill
              sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
              className='object-contain object-left-bottom'
            />
          </div>
        </article>
      ))}
    </div>
  );
}

export { ServiceCards };
