import type { HTMLAttributes } from 'react';

type SectionProps = HTMLAttributes<HTMLHeadingElement> & {
  headingText: string;
};

function SectionHeading({
  headingText,
  className = '',
  ...props
}: SectionProps) {
  return (
    <h2
      className={`text-h2 leading-[0.98] font-bold text-primary-darker ${className}`}
      {...props}
    >
      {headingText}
    </h2>
  );
}

export { SectionHeading };
