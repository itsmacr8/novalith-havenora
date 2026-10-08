import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  FLAT1_IMAGE_GALLERY,
  FLATS_DATA,
  sampleLandmarks,
} from '@/lib/mock-data';
import { PropertyImageGallery } from '@/components/properties/PropertyImageGallery';
import { Section } from '@/components/shared/Section';
import { PropertyLocation } from '@/components/properties/PropertyLocation';
import { SectionIntro } from '@/components/shared/SectionIntro';
import { Contact } from '@/components/contact/Contact';

interface IPageProps {
  params: Promise<{ id: string }>;
}

async function FlatDetailPage({ params }: IPageProps) {
  const { id } = await params;
  const flat = FLATS_DATA[id] || FLATS_DATA['1'];

  if (!flat) notFound();

  return (
    <main className='w-full bg-(--bg-primary) min-h-screen'>
      <Section className='hero'>
        <Image
          src={flat.heroImage}
          alt={flat.heroImage}
          fill
          priority
          className='absolute inset-0 object-cover brightness-70'
        />
        <SectionIntro
          title={flat.name}
          location={flat.location}
          badgeText='Featured Flat Detail'
        />
      </Section>
      <Section>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Left Side: Flat Image */}
          <div>
            <div className='relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-(--border-subtle) shadow-xl'>
              <Image
                src={flat.propertyImage}
                alt={flat.name}
                fill
                className='object-cover hover:scale-105 transition-transform duration-700'
              />
            </div>
          </div>

          {/* Right Side: At a Glance Details */}
          <div>
            <div className='rounded-2xl border border-(--border-subtle) bg-(--bg-card) p-8 shadow-sm'>
              <h2 className='text-h2 font-bold tracking-tight text-(--text-primary) sm:text-3xl border-b border-(--border-subtle) pb-4'>
                At a Glance
              </h2>

              <div className='mt-4'>
                {Object.entries(flat.atAGlance).map(([label, value]) => (
                  <div
                    key={label}
                    className='border-b border-(--border-subtle)/60 pb-3'
                  >
                    <dt className='text-xs font-semibold uppercase tracking-wider text-(--text-muted)'>
                      {label}
                    </dt>
                    <dd className='mt-1 text-base font-bold text-(--text-primary)'>
                      {value}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <PropertyImageGallery images={FLAT1_IMAGE_GALLERY} />
      </Section>
      <Section>
        <PropertyLocation
          address='Plot 20/A, Road 26, Gulshan 1, Dhaka'
          areaName='Gulshan-Uttara Corridor'
          landmarks={sampleLandmarks}
          landmarkPreviewImage='/images/important-nearby-landmarks.jpg'
        />
      </Section>
      <Section id='contact'>
        <Contact />
      </Section>
    </main>
  );
}

export { FlatDetailPage as default };
