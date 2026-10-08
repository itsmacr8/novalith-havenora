'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { type TestimonialsProps } from '@/lib/mock-data';

function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials.length) {
    return null;
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
    console.log(current.image)
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4 md:gap-8">
        <button
          onClick={goToPrevious}
          aria-label="Previous testimonial"
          className="shrink-0 rounded-full bg-primary-light p-2 transition-all duration-200 hover:bg-primary-lighter active:scale-95"
        >
          <FiChevronLeft size={24} className="text-primary-dark" />
        </button>

        <div className="flex-1 text-center mt-6">
          <blockquote className="mb-8">
            <p className="text-h3 text-primary-darker">{current.quote}</p>
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <Image
              src={current.image}
              alt={current.imageAlt}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-primary-dark text-h5">{current.author}</p>
              <p className="text-small text-secondary-dark">{current.title}</p>
            </div>
          </div>
        </div>

        <button
          onClick={goToNext}
          aria-label="Next testimonial"
          className="shrink-0 rounded-full bg-primary-light p-2 transition-all duration-200 hover:bg-primary-lighter active:scale-95"
        >
          <FiChevronRight size={24} className="text-primary-dark" />
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-2">
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
    </div>
  );
}

export { Testimonials };
