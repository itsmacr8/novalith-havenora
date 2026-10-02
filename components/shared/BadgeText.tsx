// interface BadgeTextProps {
//   badgeText: string;
//   className?: string;
// }

// function BadgeText({ badgeText, className = '' }: BadgeTextProps) {
//   return (
//     <p
//       className={`mb-2 rounded-full px-2 py-[0.15rem] subheading bg-accent-light text-primary-darker uppercase ${className}`}
//     >
//       {badgeText}
//     </p>
//   );
// }

// export { BadgeText };

interface BadgeTextProps {
  badgeText: string;
  className?: string;
}

function BadgeText({ badgeText, className = '' }: BadgeTextProps) {
  return (
    <p
      className={`mb-2 flex w-24 max-w-full overflow-hidden rounded-full bg-accent-light px-2 py-[0.15rem] uppercase text-primary-darker ${className}`}
    >
      <span className='flex w-max animate-marquee whitespace-nowrap motion-reduce:animate-none'>
        <span className='shrink-0 pr-8'>{badgeText}</span>
        <span aria-hidden='true' className='shrink-0 pr-8 motion-reduce:hidden'>
          {badgeText}
        </span>
      </span>
    </p>
  );
}

export { BadgeText };
