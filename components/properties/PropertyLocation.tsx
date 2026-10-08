'use client';

import Image from 'next/image';
import { ScrollReveal } from '../shared/ScrollReveal';
import { ILandmarkItem } from '@/lib/mock-data';
import { Map } from '../contact/Map';
import { SectionIntro } from '../shared/SectionIntro';

interface IPropertyLocationProps {
  readonly address: string;
  readonly areaName: string;
  readonly landmarks: readonly ILandmarkItem[];
  readonly landmarkPreviewImage?: string;
}

function PropertyLocation({
  address,
  areaName,
  landmarks,
  landmarkPreviewImage = '/images/important-nearby-landmarks.jpg',
}: IPropertyLocationProps) {
  return (
    <>
      <SectionIntro
        badgeText='Location & Proximity'
        title='Neighborhood & Nearby Landmarks'
        description={`Strategically positioned in ${areaName}, offering seamless connectivity and premium urban convenience.`}
        icon='📍'
        align='center'
      />
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
        {/* Left Side: Real Map Placeholder */}
        {/* https://www.sheltech-bd.com/contact */}
        <Map address={address} />

        {/* Right Side: Landmark Image Preview & Structured List */}
        <div>
          {/* Landmark Featured Image Card */}
          <ScrollReveal>
            <div className='relative h-48 w-full overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] shadow-sm'>
              <Image
                src={landmarkPreviewImage}
                alt='Neighborhood surroundings'
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6'>
                <div>
                  <span className='text-[10px] font-bold uppercase tracking-wider text-[color:var(--accent)] bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm'>
                    Prime Surroundings
                  </span>
                  <h4 className='mt-1 text-lg font-bold text-white'>
                    Connected Urban Infrastructure
                  </h4>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Structured Landmarks List */}
          <ScrollReveal className='flex-1'>
            <div className='h-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] p-4 shadow-sm flex flex-col justify-between mt-2'>
              <h4 className='text-sm font-bold uppercase tracking-wider text-[color:var(--text-primary)] border-b border-[color:var(--border-subtle)] pb-3 mb-4'>
                Key Proximity Hubs
              </h4>

              <ul className='grid gap-2'>
                {landmarks.map((landmark) => (
                  <li
                    key={landmark.id}
                    className='flex items-center justify-between rounded-xl bg-[color:var(--bg-primary)] p-3 border border-[color:var(--border-subtle)]/60 transition-colors hover:border-[color:var(--accent)]'
                  >
                    <div className='flex items-center gap-3'>
                      <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[color:var(--accent)]/10 text-lg'>
                        {landmark.icon}
                      </span>
                      <div>
                        <p className='text-xs font-bold text-[color:var(--text-primary)]'>
                          {landmark.name}
                        </p>
                        <p className='text-[11px] text-[color:var(--text-muted)]'>
                          {landmark.category}
                        </p>
                      </div>
                    </div>
                    <span className='rounded-md bg-[color:var(--bg-card)] px-2.5 py-1 text-xs font-extrabold text-[color:var(--accent)] shadow-sm border border-[color:var(--border-subtle)]'>
                      {landmark.distance}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}

export { PropertyLocation };
