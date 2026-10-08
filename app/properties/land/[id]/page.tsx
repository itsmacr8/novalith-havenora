import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import {
  LAND1_IMAGE_GALLERY,
  LANDS_DATA,
  sampleLandmarks,
} from '@/lib/mock-data';
import { Section } from '@/components/shared/Section';
import { PropertyImageGallery } from '@/components/properties/PropertyImageGallery';
import { PropertyLocation } from '@/components/properties/PropertyLocation';
import { Contact } from '@/components/contact/Contact';
import { SectionIntro } from '@/components/shared/SectionIntro';

interface IPageProps {
  readonly params: Promise<{ id: string }>;
}

async function LandDetailPage({ params }: IPageProps) {
  const { id } = await params;
  const land = LANDS_DATA[id] || LANDS_DATA['1'];

  if (!land) notFound();

  return (
    <main className='w-full bg-[color:var(--bg-primary)] min-h-screen'>
      <Section className='hero'>
        <Image
          src={land.heroImage}
          alt={land.heroImage}
          fill
          priority
          className='absolute inset-0 object-cover brightness-70'
        />
        <SectionIntro
          title={land.name}
          location={land.location}
          badgeText={`Verified Land Opportunity • ${land.totalLandArea}`}
        />
      </Section>

      {/* Tower Configurations Section */}
      <Section>
        <SectionIntro
          badgeText='Development Potential'
          title='Tower & Apartment Configurations'
          description='Pre-calculated layout estimates and area breakdowns for high-rise residential plans.'
          align='center'
        />
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
          {land.towers.map((tower, index) => (
            <ScrollReveal
              key={tower.towerName}
              direction={{
                base: index % 2 === 0 ? 'right' : 'left',
                md: 'up',
              }}
              durationMs={1200}
              delayMs={index * 200}
            >
              <div className='h-full flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] shadow-sm hover:shadow-md transition-shadow'>
                <div className='relative h-56 w-full bg-[color:var(--border-subtle)]'>
                  <Image
                    src={tower.towerImage}
                    alt={tower.towerName}
                    fill
                    className='object-cover'
                  />
                  <div className='absolute top-4 right-4 rounded-lg bg-[color:var(--bg-primary)]/90 px-3 py-1 text-xs font-bold text-[color:var(--text-primary)] backdrop-blur-sm shadow-sm'>
                    {tower.landArea}
                  </div>
                </div>

                <div className='flex flex-1 flex-col p-8'>
                  <div className='flex items-center justify-between border-b border-[color:var(--border-subtle)] pb-4'>
                    <h3 className='text-h3 font-bold text-[color:var(--text-primary)] flex items-center gap-2'>
                      <span>🏢</span> {tower.towerName}
                    </h3>
                    <span className='rounded-lg bg-[color:var(--accent)]/10 px-3 py-1 text-xs font-bold text-[color:var(--accent)]'>
                      {tower.totalFlats} Total Flats
                    </span>
                  </div>

                  <dl className='mt-6 space-y-4 flex-1'>
                    <div className='flex justify-between border-b border-[color:var(--border-subtle)]/50 pb-2 text-sm'>
                      <dt className='text-[color:var(--text-muted)]'>
                        Flats Per Floor
                      </dt>
                      <dd className='font-bold text-[color:var(--text-primary)]'>
                        {tower.flatsPerFloor}
                      </dd>
                    </div>
                    <div className='flex justify-between border-b border-[color:var(--border-subtle)]/50 pb-2 text-sm'>
                      <dt className='text-[color:var(--text-muted)]'>
                        Carpet Area
                      </dt>
                      <dd className='font-bold text-[color:var(--text-primary)]'>
                        {tower.carpetArea}
                      </dd>
                    </div>
                    <div className='flex justify-between border-b border-[color:var(--border-subtle)]/50 pb-2 text-sm'>
                      <dt className='text-[color:var(--text-muted)]'>
                        Common Area
                      </dt>
                      <dd className='font-bold text-[color:var(--text-primary)]'>
                        {tower.commonArea}
                      </dd>
                    </div>
                    <div className='flex justify-between border-b border-[color:var(--border-subtle)]/50 pb-2 text-sm'>
                      <dt className='text-[color:var(--text-muted)]'>
                        Parking Allocation
                      </dt>
                      <dd className='font-bold text-[color:var(--text-primary)]'>
                        {tower.parkingArea}
                      </dd>
                    </div>
                    <div className='flex justify-between pt-2 text-base font-extrabold'>
                      <dt className='text-[color:var(--accent)]'>
                        Total Saleable Area (approx.)
                      </dt>
                      <dd className='text-[color:var(--accent)]'>
                        {tower.totalSaleableArea}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <PropertyImageGallery images={LAND1_IMAGE_GALLERY} />
      </Section>

      {/* Nearby Landmarks Section */}
      {/* <Section>
        <SectionIntro
          badgeText='Proximity & Accessibility'
          title='Important Nearby Landmarks'
          icon='📍'
          align='center'
        >
          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4'>
            {land.nearbyLandmarks.map((item, idx) => (
              <ScrollReveal
                key={item.name}
                direction={{ base: 'right', md: 'up' }}
                delayMs={idx * 150}
              >
                <div className='flex items-center gap-4 rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] p-5 shadow-sm'>
                  <span className='text-3xl'>{item.icon}</span>
                  <div>
                    <h4 className='font-bold text-[color:var(--text-primary)] text-sm'>
                      {item.name}
                    </h4>
                    {item.distance && (
                      <p className='mt-1 text-xs text-[color:var(--text-muted)] font-medium'>
                        {item.distance} away
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </SectionIntro>
      </Section> */}

      <Section>
        <PropertyLocation
          address='Plot 20/A, Road 26, Gulshan 1, Dhaka'
          areaName='Gulshan-Uttara Corridor'
          landmarks={sampleLandmarks}
          landmarkPreviewImage='/images/important-nearby-landmarks.jpg'
        />
      </Section>

      {/* Why This Location Section */}
      <Section>
        <div className='rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] p-8 sm:p-12 shadow-sm'>
          <SectionIntro title='Why This Location?' icon='⭐' align='left' />
          <ul className='mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {land.locationAdvantages.map((advantage, i) => (
              <li key={i} className='flex items-start gap-3'>
                <span className='mt-0.5 text-lg text-[color:var(--accent)] font-bold'>
                  ✅
                </span>
                <span className='text-base font-semibold text-[color:var(--text-primary)] leading-relaxed'>
                  {advantage}
                </span>
              </li>
            ))}
          </ul>

          <div className='mt-10 border-t border-[color:var(--border-subtle)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-6'>
            <div>
              <h4 className='text-lg font-bold text-[color:var(--text-primary)]'>
                Interested in this development site?
              </h4>
              <p className='text-sm text-[color:var(--text-muted)] mt-1'>
                Request full legal verification documents, plot maps, and soil
                test audits.
              </p>
            </div>
            <Link
              href='#contact'
              className='inline-flex items-center justify-center rounded-xl bg-[color:var(--accent)] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[color:var(--accent-hover)] transition-colors whitespace-nowrap'
            >
              Inquire For Land
            </Link>
          </div>
        </div>
      </Section>

      <Section id='contact'>
        <Contact />
      </Section>
    </main>
  );
}

export { LandDetailPage as default };
