import Image from 'next/image';
import { ScrollReveal } from '../shared/ScrollReveal';

interface IMapProps {
  readonly address: string;
}

function Map({ address }: IMapProps) {
  return (
    <div>
      <ScrollReveal className='h-full flex flex-col'>
        <div className='relative flex-1 min-h-[400px] w-full overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] shadow-sm group'>
          {/* Simulated Map Visual Background */}
          <Image
            src='/images/map.jpg'
            alt='Interactive Map Placeholder'
            fill
            className='object-cover opacity-80 transition-transform duration-700 group-hover:scale-105'
          />

          {/* Bottom Address HUD Bar */}
          <div className='absolute bottom-4 left-4 right-4 rounded-xl bg-[color:var(--bg-card)]/95 p-4 backdrop-blur-md border border-[color:var(--border-subtle)] shadow-lg flex items-center justify-between'>
            <div>
              <span className='text-[10px] font-semibold uppercase tracking-wider text-[color:var(--text-muted)]'>
                Exact Address
              </span>
              <p className='text-sm font-bold text-[color:var(--text-primary)]'>
                {address}
              </p>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-lg bg-[color:var(--accent)] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[color:var(--accent-hover)] transition-colors'
            >
              Open Directions &rarr;
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export { Map };
