'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { ScrollReveal } from '../shared/ScrollReveal';
import { IGalleryImage } from '@/lib/mock-data';
import { SectionIntro } from '../shared/SectionIntro';

interface IPropertyImageGalleryProps {
  readonly images: readonly IGalleryImage[];
  readonly title?: string;
  readonly subtitle?: string;
}

function PropertyImageGallery({
  images,
  title = 'Gallery',
  subtitle = 'Explore architectural renderings, viewpoint angles, and site imagery.',
}: IPropertyImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activeImage = selectedIndex !== null ? images[selectedIndex] : null;

  // Close lightbox handler
  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Navigate lightbox with arrow keys or close with Escape
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % images.length : 0,
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + images.length) % images.length : 0,
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent background scroll

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedIndex, images.length, closeLightbox]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
    <ScrollReveal>
      <SectionIntro
        badgeText='Visual Showcase'
        title={title}
        description={subtitle}
        icon='🖼️'
        align='center'
      />
    </ScrollReveal>
      {/* Modern Masonry Grid (CSS Columns) */}
      {/* add classes 'gap-3 space-y-3' to create spacing among cards */}
      <div className='columns-1 sm:columns-3 gap-0'>
        {images.map((image, index) => {
          // Alternate aspect ratios for dynamic masonry feel
          const aspectStyles =
            index % 3 === 0
              ? 'aspect-[4/5]'
              : index % 3 === 1
                ? 'aspect-[16/10]'
                : 'aspect-square';
          return (
            <ScrollReveal
              key={image.id}
              direction='up'
              delayMs={(index % 3) * 100}
              className='break-inside-avoid'
            >
              {/* add class 'rounded-2xl' to make the card round */}
              <div
                className={`group relative w-full ${aspectStyles} cursor-pointer overflow-hidden border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl`}
                onClick={() => setSelectedIndex(index)}
                role='button'
                tabIndex={0}
                aria-label={`Open photo: ${image.alt}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ')
                    setSelectedIndex(index);
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
                {/* Subtle hover overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6'>
                  <div>
                    {image.category && (
                      <span className='text-[10px] font-bold uppercase tracking-wider text-[color:var(--accent)] bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm'>
                        {image.category}
                      </span>
                    )}
                    <p className='mt-1 text-sm font-semibold text-white line-clamp-1'>
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fadeIn'
          role='dialog'
          aria-modal='true'
          aria-label='Image Lightbox Viewer'
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className='absolute top-6 right-6 z-50 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white'
            aria-label='Close lightbox'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>

          {/* Active Image Container */}
          <div
            className='relative max-h-[85vh] max-w-[90vw] w-full h-full flex flex-col items-center justify-center'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='relative w-full h-[75vh]'>
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                priority
                className='object-contain rounded-lg'
              />
            </div>
            <div className='mt-4 text-center'>
              <p className='text-sm font-medium text-slate-200'>
                {activeImage.alt}
              </p>
              <p className='text-xs text-slate-400 mt-0.5'>
                Image {selectedIndex! + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { PropertyImageGallery };
