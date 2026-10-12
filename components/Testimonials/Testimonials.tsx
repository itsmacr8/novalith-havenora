'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { NEXT_SLIDE_INTERVAL, type TestimonialsProps } from '@/lib/mock-data';

function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   if (!testimonials.length) return;

  //   const intervalId = setInterval(() => {
  //     setCurrentIndex((prev) =>
  //       prev === testimonials.length - 1 ? 0 : prev + 1,
  //     );
  //   }, NEXT_SLIDE_INTERVAL);

  //   return () => clearInterval(intervalId);
  // }, [testimonials.length]);

  if (!testimonials.length) {
    return;
  }

  const current = testimonials[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <>
      <div className='flex items-center justify-between sm:gap-4'>
        <button
          onClick={goToPrevious}
          aria-label='Previous testimonial'
          className='shrink-0 rounded-full bg-primary-light p-2 transition-all duration-200 hover:bg-primary-lighter active:scale-95'
        >
          <FiChevronLeft size={20} className='text-primary-dark' />
        </button>

        <div className='text-center'>
          <blockquote className='mb-6'>
            <p className='text-h4 text-primary-darker'>{current.quote}</p>
          </blockquote>

          <div className='flex items-center justify-center gap-3'>
            <Image
              src={current.image}
              alt={current.imageAlt}
              width={48}
              height={48}
              className='rounded-full object-cover'
            />
            <div className='text-left'>
              <p className='text-primary-dark text-h5'>{current.author}</p>
              <p className='text-small text-secondary-dark'>{current.title}</p>
            </div>
          </div>
        </div>

        <button
          onClick={goToNext}
          aria-label='Next testimonial'
          className='shrink-0 rounded-full bg-primary-light p-2 transition-all duration-200 hover:bg-primary-lighter active:scale-95'
        >
          <FiChevronRight size={20} className='text-primary-dark' />
        </button>
      </div>

      <div className='mt-6 flex justify-center gap-2'>
        {testimonials.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'w-4 bg-primary'
                : 'w-2 bg-secondary-light hover:bg-secondary-lighter'
            }`}
          />
        ))}
      </div>
    </>
  );
}

export { Testimonials };
