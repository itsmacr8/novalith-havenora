import Image from 'next/image';
import Link from 'next/link';
import { IPropertyCardProps } from '@/lib/mock-data';

function PropertyCard({
  title,
  location,
  imageSrc,
  imageAlt,
  statusBadge,
  secondaryBadge,
  specs,
  href,
  ctaLabel = 'View Details',
}: IPropertyCardProps) {
  return (
    <article className='flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
      {/* Image Header */}
      <div className='relative h-60 w-full bg-[color:var(--border-subtle)]'>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover'
        />
        {statusBadge && (
          <div className='absolute top-4 left-4 rounded-md bg-[color:var(--bg-primary)]/90 px-3 py-1 text-xs font-bold text-[color:var(--text-primary)] backdrop-blur-sm'>
            {statusBadge}
          </div>
        )}
        {secondaryBadge && (
          <div className='absolute bottom-4 right-4 rounded-md bg-[color:var(--accent)] px-3 py-1 text-xs font-bold text-white shadow-sm'>
            {secondaryBadge}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className='flex flex-1 flex-col justify-between p-4'>
        <div>
          <h3 className='text-h3 font-bold text-[color:var(--text-primary)]'>
            {title}
          </h3>

          {/* Location */}
          <p className='mt-1 flex items-center text-sm font-medium text-[color:var(--text-muted)]'>
            <span className='mr-1.5' aria-hidden='true'>
              📍
            </span>
            {location}
          </p>

          {/* Property Specs Matrix */}
          <div className='grid grid-cols-2 gap-3 border-t border-[color:var(--border-subtle)] pt-4 text-xs'>
            {specs.map((spec, idx) => (
              <div
                key={`${spec.label}-${idx}`}
                className={spec.fullWidth ? 'col-span-2' : 'col-span-1'}
              >
                <span className='block text-[color:var(--text-muted)]'>
                  {spec.label}
                </span>
                <span className='font-semibold text-[color:var(--text-primary)]'>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Primary CTA */}
        <div className='mt-2 pt-4'>
          <Link
            href={href}
            className='block w-full rounded-xl bg-[color:var(--accent)] py-3 text-center text-sm font-semibold no-underline text-white transition-colors hover:bg-[color:var(--accent-hover)] focus-visible:outline-2 focus-visible:outline-[color:var(--accent)]'
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}

export { type IPropertyCardProps, PropertyCard };
