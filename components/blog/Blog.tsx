'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { FocusEvent } from 'react';
import { BadgeText } from '../shared/BadgeText';
import { SectionHeading } from '../shared/SectionHeading';
import { BLOG_POSTS, NEXT_SLIDE_INTERVAL } from '@/lib/mock-data';

function getSnapPoints(track: HTMLDivElement): number[] {
  const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
  const slideOffsets = Array.from(
    track.querySelectorAll<HTMLElement>('[data-blog-slide]'),
    (slide) =>
      Math.min(maxScroll, Math.max(0, slide.offsetLeft - track.offsetLeft)),
  );

  return slideOffsets.filter(
    (offset, index) =>
      slideOffsets.findIndex(
        (candidate) => Math.abs(candidate - offset) < 1,
      ) === index,
  );
}

function Blog() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;

    if (!track || isPaused) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );

    if (prefersReducedMotion.matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (document.hidden) {
        return;
      }

      const points = getSnapPoints(track);

      if (points.length < 2) {
        return;
      }

      const currentIndex = points.reduce(
        (closestIndex, point, index) =>
          Math.abs(point - track.scrollLeft) <
          Math.abs(points[closestIndex] - track.scrollLeft)
            ? index
            : closestIndex,
        0,
      );

      const nextIndex = (currentIndex + 1) % points.length;

      track.scrollTo({
        left: points[nextIndex],
        behavior: 'smooth',
      });
    }, NEXT_SLIDE_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  function resumeAfterFocusLeaves(event: FocusEvent<HTMLElement>): void {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false);
    }
  }

  return (
    <>
      <div
        aria-labelledby='blog-heading'
        aria-roledescription='carousel'
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={resumeAfterFocusLeaves}
      >
        <header className='flex flex-col sm:flex-row gap-3 justify-between items-center'>
          <div>
            <BadgeText
              badgeText='Articles & Insights'
              className='mx-auto sm:mx-0'
            />
            <SectionHeading headingText='Discover inspiration & trends' />
          </div>
          <Link
            href='/blog'
            className='rounded-full border border-primary-light py-2 px-4 text-primary-darker'
          >
            View All Posts
          </Link>
        </header>
        <div
          ref={trackRef}
          aria-label='Blog posts'
          className='mt-4 grid auto-cols-[100%] grid-flow-col gap-2 min-[30rem]:auto-cols-[calc((100%_-_1rem)/3)] gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x motion-reduce:scroll-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
        >
          {BLOG_POSTS.map((post, index) => (
            <article
              key={post.href}
              data-blog-slide
              aria-roledescription='slide'
              aria-label={`${index + 1} of ${BLOG_POSTS.length}`}
              className='min-w-0 snap-start'
            >
              <Link
                href={post.href}
                className='flex flex-col text-primary-darker no-underline'
              >
                <div className='aspect-[122/84] overflow-hidden rounded-lg bg-primary-light'>
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    width={366}
                    height={252}
                    sizes='(max-width: 28rem) 100vw, 122px'
                    className='h-full w-full object-cover'
                  />
                </div>

                <div className='mt-1 flex min-w-0 items-center justify-between gap-1'>
                  <span className='max-w-[58%] truncate rounded-full bg-accent-light px-[0.35rem] py-[0.12rem] text-[0.46rem] leading-none font-medium text-primary-darker'>
                    {post.category}
                  </span>

                  <time
                    dateTime={post.dateTime}
                    className='shrink-0 text-[0.46rem] leading-none text-primary-dark'
                  >
                    {post.date}
                  </time>
                </div>

                <h3 className='mt-1.5 mb-0 text-[0.56rem] leading-[1.2] font-semibold text-primary-darker underline decoration-1 underline-offset-2'>
                  {post.title}
                </h3>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export { Blog };
