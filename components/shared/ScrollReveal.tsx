'use client';

import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';

type RevealDirection = 'up' | 'down' | 'left' | 'right';

interface IResponsiveDirection {
  /** Mobile / base default direction */
  readonly base: RevealDirection;
  /** Desktop (>=768px) direction */
  readonly md?: RevealDirection;
}

interface IScrollRevealProps {
  readonly children: ReactNode;
  /** Direction string or responsive breakpoint object `{ base: "right", md: "up" }` */
  readonly direction?: RevealDirection | IResponsiveDirection;
  /** Distance in pixels or CSS units */
  readonly distance?: number | string;
  /** Animation duration in milliseconds */
  readonly durationMs?: number;
  /** Delay before animation starts in milliseconds */
  readonly delayMs?: number;
  /** Percentage of element visible before triggering (0.0 to 1.0) */
  readonly threshold?: number;
  /** Additional container classes */
  readonly className?: string;
  /** Trigger animation once or reset when out of view */
  readonly once?: boolean;
}

function ScrollReveal({
  children,
  direction = { base: 'right', md: 'up' },
  distance = 40,
  durationMs = 750,
  delayMs = 0,
  threshold = 0.15,
  className = '',
  once = true,
}: IScrollRevealProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold },
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, once]);

  // Format distance cleanly
  const formattedDistance =
    typeof distance === 'number' ? `${distance}px` : distance;

  // Class helper maps
  const baseClassMap: Record<RevealDirection, string> = {
    up: 'reveal-hidden-up',
    down: 'reveal-hidden-down',
    left: 'reveal-hidden-left',
    right: 'reveal-hidden-right',
  };

  const mdClassMap: Record<RevealDirection, string> = {
    up: 'md:reveal-hidden-up',
    down: 'md:reveal-hidden-down',
    left: 'md:reveal-hidden-left',
    right: 'md:reveal-hidden-right',
  };

  // Resolve directional CSS classes
  let hiddenClasses = '';
  if (typeof direction === 'string') {
    hiddenClasses = baseClassMap[direction];
  } else {
    const baseClass = baseClassMap[direction.base];
    const mdClass = direction.md ? mdClassMap[direction.md] : '';
    hiddenClasses = `${baseClass} ${mdClass}`.trim();
  }

  const inlineStyles: CSSProperties & Record<string, string | number> = {
    '--reveal-distance': formattedDistance,
    transitionDuration: `${durationMs}ms`,
    transitionDelay: `${delayMs}ms`,
  };

  return (
    <div
      ref={elementRef}
      style={inlineStyles}
      className={`${isVisible ? 'reveal-visible' : hiddenClasses} ${className}`}
    >
      {children}
    </div>
  );
}

export { ScrollReveal };
