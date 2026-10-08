import type { HTMLAttributes, PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

function Section({ children, className = '', ...props }: SectionProps) {
  let classes = `mx-auto max-w-7xl py-6 px-4 lg:px-8 ${className}`;
  // If the className is less than 5 characters, we assume it's the hero class and apply the hero section styles
  if (className === 'hero' && className.length < 5) {
    classes = `relative h-[100dvh] min-h-[500px] w-full grid grid-rows-[1fr_auto] overflow-hidden ${className}`;
  }
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
}

export { Section };
