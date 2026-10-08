'use client';

import { useRef, useEffect, useState, CSSProperties } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  author: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: 'Sarah Johnson',
    role: 'Product Manager',
    content: 'This solution transformed how we approach our workflow. The results speak for themselves.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    id: 2,
    author: 'Michael Chen',
    role: 'CEO',
    content: 'Outstanding experience from start to finish. Highly recommend to any organization.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    id: 3,
    author: 'Emily Rodriguez',
    role: 'Designer',
    content: 'The attention to detail is incredible. Every aspect was thoughtfully designed.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
  {
    id: 4,
    author: 'David Park',
    role: 'Engineer',
    content: 'Seamless integration with our existing stack. Performance improvements were immediate.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  },
];

function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [videoScale, setVideoScale] = useState(0);
  const [sectionInView, setSectionInView] = useState(false);

  // Track when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const currentElement = sectionRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  // Calculate video scale based on section's position in viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      // When section top reaches the center of viewport (windowHeight / 2), start scaling
      // Scale reaches 1.0 when section is fully visible in viewport
      const scrollProgress = Math.max(
        0,
        Math.min(1, (windowHeight / 2 - sectionTop) / (windowHeight / 2))
      );

      setVideoScale(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const inlineStyles: CSSProperties & Record<string, string | number> = {
    '--video-scale': videoScale,
  };

  return (
    <div
      ref={sectionRef}
      style={inlineStyles}
      className="relative min-h-screen flex items-center justify-center bg-gray-50 py-20 px-4"
    >
      {/* Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto z-10 relative">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* Video Layer - Scales from Center */}
      <div
        ref={videoContainerRef}
        className="absolute inset-0 flex items-center justify-center z-100"
        style={{
          transform: `scale(var(--video-scale, 0))`,
          transformOrigin: 'center center',
          willChange: 'transform',
        }}
      >
        <div className="w-full h-full flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/q_jyA6YDvNo"
              title="Testimonial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentElement = cardRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const inlineStyles: CSSProperties & Record<string, string | number> = {
    '--sr-distance': '40px',
    '--sr-duration': '750ms',
    '--sr-delay': '0ms',
  };

  return (
    <div
      ref={cardRef}
      style={inlineStyles}
      className={`${
        isVisible ? 'sr-visible' : 'sr-hidden-up'
      } bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300`}
    >
      <div className="flex items-start gap-4 mb-4">
        <Image
          src={testimonial.image}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
          width={12}
          height={12}
        />
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
      <div className="mt-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export { Testimonials };
