import {
  IAvailableLandsProps,
  DEFAULT_LAND,
  IPropertyItemProps,
} from '@/lib/mock-data';
import { Section } from '../shared/Section';
import Link from 'next/link';
import { SectionIntro } from '../shared/SectionIntro';
import { ScrollReveal } from '../shared/ScrollReveal';
import { PropertyCard } from '../shared/PropertyCard';

function AvailableLands({
  lands = DEFAULT_LAND,
  viewHref = '/properties/land',
  viewLabel = 'See All Lands',
}: IAvailableLandsProps) {
  // Map land data into shared PropertySection items
  const items: readonly IPropertyItemProps[] = lands.map((land) => ({
    id: land.id,
    title: land.title,
    location: land.location,
    imageSrc: land.imageSrc,
    imageAlt: land.imageAlt,
    statusBadge: land.status,
    secondaryBadge: `${land.landAreaKathas} Kathas`,
    href: land.href,
    ctaLabel: 'Explore Land Details',
    specs: [
      { label: 'Total Land Area', value: `${land.landAreaKathas} Kathas` },
      { label: 'Front Road', value: `${land.frontRoadWidthFt}-foot-wide` },
      {
        label: 'Adjacent Road',
        value: `${land.adjacentRoadWidthFt}-foot-wide`,
      },
      { label: 'Total Towers', value: `${land.totalTowers} Towers` },
      {
        label: 'Building Structure',
        value: land.buildingStructure,
        fullWidth: true,
      },
      {
        label: 'Planned Capacity',
        value: `${land.totalFlats} Total Flats`,
        fullWidth: true,
      },
    ],
  }));
  const displayItems = items.slice(0, 3);

  return (
    <Section>
      <SectionIntro
        badgeText='Land Opportunities'
        title='Available Lands'
        description='High-yield development sites with clear titles, optimal road access, and pre-approved structural plans for high-rise residential towers.'
      />
      {/* 3 Cards Grid */}
      <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
        {displayItems.map((item, index) => {
          return (
            <ScrollReveal
              key={item.id}
              delayMs={index * 250}
              className='h-full'
            >
              <PropertyCard {...item} />
            </ScrollReveal>
          );
        })}
      </div>

      {/* View All Button */}
      <div className='mt-3 text-center'>
        <Link
          href={viewHref}
          className='inline-flex items-center gap-2 rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-primary)] px-8 py-3.5 text-sm font-bold no-underline text-[color:var(--text-primary)] transition-all hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-[color:var(--accent)]'
        >
          {viewLabel}
          <span aria-hidden='true'>&rarr;</span>
        </Link>
      </div>
    </Section>
  );
}

export { AvailableLands };
