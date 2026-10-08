interface ISectionIntroProps {
  readonly badgeText?: string;
  readonly title: string;
  readonly description?: string;
  readonly location?: string;
  readonly icon?: string;
  readonly align?: 'left' | 'center';
  readonly className?: string;
}

function SectionIntro({
  badgeText,
  title,
  icon,
  align = 'center',
  description = '',
  location = '',
  className = '',
}: ISectionIntroProps) {
  const isCentered = align === 'center';
  return (
    <>
      <div className='relative z-10 flex items-center justify-center'>
        <div
          className={`max-w-2xl ${
            isCentered ? 'mx-auto text-center' : 'text-left'
          } ${className}`}
        >
          {badgeText && (
            <span className='text-xs font-bold uppercase tracking-widest text-(--accent) inline-block bg-(--primary)/40 px-4 py-2 rounded-full border border-(--accent)/30 backdrop-blur-md'>
              {badgeText}
            </span>
          )}
          <h2
            className={`my-2 text-h2 font-extrabold tracking-tight text-(--text-primary) flex items-center gap-2 ${
              isCentered ? 'justify-center' : ''
            }`}
          >
            {icon && <span>{icon}</span>}
            {title}
          </h2>
          {description.length > 0 ? (
            <p className='mb-4 max-w-md mx-auto text-base text-(--text-muted)'>
              {description}
            </p>
          ) : (
            <p className='mb-4 max-w-md mx-auto text-base text-(--text-muted) flex items-center justify-center gap-2'>
              <svg
                className='w-5 h-5 text-(--accent)'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
              {location}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export { SectionIntro };
