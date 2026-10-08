import { IFlatProps, DEFAULT_FLATS, IPropertyItemProps } from '@/lib/mock-data';
import { SectionIntro } from '../shared/SectionIntro';
import { Section } from '../shared/Section';
import Link from 'next/link';
import { ScrollReveal } from '../shared/ScrollReveal';
import { PropertyCard } from '../shared/PropertyCard';

function Flats({
  projects = DEFAULT_FLATS,
  viewHref = '/properties/flats',
  viewLabel = 'See All Flats',
}: IFlatProps) {
  // Map flat data into shared PropertySection items
  const items: readonly IPropertyItemProps[] = projects.map((project) => ({
    id: project.id,
    title: project.title,
    location: project.location,
    imageSrc: project.imageSrc,
    imageAlt: project.imageAlt,
    statusBadge: project.unitType,
    href: project.href,
    ctaLabel: 'View Project Details',
    specs: [
      {
        label: 'Unit Size',
        value: `${project.sizeSqFt.toLocaleString()} sq. ft.`,
      },
      { label: 'Parking Space', value: `${project.parkingSqFt} sq. ft.` },
      {
        label: 'Bedrooms / Baths',
        value: `${project.bedrooms} Bed / ${project.bathrooms} Bath`,
      },
      { label: 'Balconies', value: `${project.balconies} Balcony` },
      { label: 'Floor Level', value: `${project.floorNumber}th Floor` },
      { label: 'Total Units', value: `${project.totalUnits} Units` },
    ],
  }));
  const displayItems = items.slice(0, 3);

  return (
    <Section>
      <SectionIntro
        badgeText='Ready To Move'
        title='Available Flats'
        description='Explore our ready-for-handover apartments built with premium specifications, verified land titles, and top-tier amenities.'
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

export { Flats };
