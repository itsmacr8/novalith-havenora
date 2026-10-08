import { IBottomNavLinksProps } from '@/lib/mock-data';

function BottomNavigation({ navLinks }: IBottomNavLinksProps) {
  return (
    <>
      {navLinks.length > 0 && (
        <nav className='relative z-10 bg-black/40 backdrop-blur-md border-t border-[color:var(--accent)]/30 px-6 py-4'>
          <div className='max-w-4xl mx-auto flex flex-wrap gap-4 justify-center'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-sm font-medium text-[color:var(--accent)] hover:text-white transition-colors'
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}

export { BottomNavigation };
