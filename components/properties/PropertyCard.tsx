import Link from 'next/link';
import Image from 'next/image';

interface IPropertyCardProps {
  readonly id: string;
  readonly title: string;
  readonly location: string;
  readonly price: string;
  readonly image: string;
  readonly href?: string;
}

function PropertyCard({
  id,
  title,
  location,
  price,
  image,
  href = `/properties/flats/${id}`,
}: IPropertyCardProps) {
  return (
    <Link href={href} className='group block h-full no-underline'>
      <div className='flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
        <div className='relative aspect-[4/3] w-full overflow-hidden'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-110'
          />
        </div>
        <div className='flex flex-1 flex-col justify-between p-6'>
          <div>
            <h3 className='text-h3 font-bold text-[color:var(--text-primary)] group-hover:text-[color:var(--accent)] transition-colors'>
              {title}
            </h3>
            <p className='mt-2 text-sm text-[color:var(--text-muted)]'>
              {location}
            </p>
          </div>
          <div className='mt-6 pt-4 border-t border-[color:var(--border-subtle)] flex items-center justify-between'>
            <span className='text-lg font-extrabold text-[color:var(--accent)]'>
              {price}
            </span>
            <span className='text-sm font-semibold text-[color:var(--text-primary)] group-hover:translate-x-1 transition-transform'>
              View Details &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { PropertyCard };
