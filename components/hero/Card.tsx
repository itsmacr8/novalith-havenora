import Link from 'next/link';

interface CardProps {
  emoji: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const Card: React.FC<CardProps> = ({
  emoji,
  title,
  description,
  linkText,
  linkHref,
}) => (
  <div className='flex flex-col justify-between rounded-2xl border border-[color:var(--border-glass)] bg-[color:var(--bg-card-glass)] p-4 transition-all duration-300 hover:bg-[color:var(--bg-card-glass-hover)] backdrop-blur-md max-w-sm'>
    <div className='space-y-2'>
      <div className='flex items-center gap-2'>
        <span className='text-2xl' role='img' aria-label={title}>
          {emoji}
        </span>
        <h2 className='text-h2 font-bold text-[color:var(--text-inverse)]'>
          {title}
        </h2>
      </div>
      <p className='text-sm text-[color:var(--text-muted-inverse)]'>
        {description}
      </p>
    </div>
    <Link
      href={linkHref}
      className='inline-flex items-center gap-2 font-semibold no-underline text-[color:var(--accent)] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-[color:var(--accent)]'
    >
      {linkText}
      <span aria-hidden='true'>&rarr;</span>
    </Link>
  </div>
);

export { Card };

// Delete
