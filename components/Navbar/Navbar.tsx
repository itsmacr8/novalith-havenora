'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { DEFAULT_NAV_ITEMS, INavbarProps, CONTACT_INFO } from '@/lib/mock-data';

function Navbar({
  phone = CONTACT_INFO.phoneNumber,
  navItems = DEFAULT_NAV_ITEMS,
}: INavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const openMenu = () => {
    setIsMounted(true);
    setIsOpen(true);
  };

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Unmount after exit animation completes
  useEffect(() => {
    if (!isOpen && isMounted) {
      const timeout = setTimeout(() => {
        setIsMounted(false);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, isMounted]);

  // Lock background scrolling
  useEffect(() => {
    document.body.style.overflow = isMounted ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMounted]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeMenu();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeMenu]);

  const sanitizedPhone = phone?.replace(/[^0-9+]/g, '');

  return (
    <header className='absolute top-0 z-30 w-full bg-primary'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-2'>
        {/* Logo */}
        <Link
          href='/'
          className='text-xl font-bold no-underline text-white focus-visible:outline-2 focus-visible:outline-(--accent)'
        >
          BRAND<span className='text-white'>.</span>
        </Link>

        {/* Header Right Side */}
        <div className='flex items-center gap-2'>
          <Link
            href={`tel:${sanitizedPhone}`}
            className='text-sm font-medium no-underline text-white transition-colors hover:text-(--accent)'
          >
            {phone}
          </Link>

          {/* Hamburger Trigger Button */}
          <button
            type='button'
            onClick={openMenu}
            aria-expanded={isOpen}
            aria-label='Open Navigation Menu'
            className='flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-(--primary) focus-visible:outline-2 focus-visible:outline-(--accent)'
          >
            <div className='relative flex h-3.5 w-5 flex-col justify-between'>
              <span className='h-0.5 w-full rounded-full bg-current' />
              <span className='h-0.5 w-full rounded-full bg-current' />
              <span className='h-0.5 w-full rounded-full bg-current' />
            </div>
          </button>
        </div>
      </div>

      {/* Full Screen Overlay Menu */}
      {isMounted && (
        <div
          aria-label='Menu'
          role='dialog'
          aria-modal='true'
          className={`fixed inset-0 z-50 flex flex-col justify-between bg-primary px-6 py-4 ${
            isOpen ? 'animate-expand-top-right' : 'animate-collapse-top-right'
          }`}
        >
          {/* Top Bar inside Overlay for exact align & visible Cross Icon */}
          <div className='mx-auto flex w-full max-w-7xl items-center justify-end'>
            <button
              type='button'
              onClick={closeMenu}
              aria-label='Close Navigation Menu'
              className='flex h-10 w-10 items-center justify-center rounded-full text-[color:var(--text-menu)] transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[color:var(--accent)]'
            >
              <div className='relative flex h-4 w-4 items-center justify-center'>
                <span className='absolute h-0.5 w-full rotate-45 rounded-full bg-current' />
                <span className='absolute h-0.5 w-full -rotate-45 rounded-full bg-current' />
              </div>
            </button>
          </div>

          {/* Centered Navigation Links */}
          <nav className='my-auto flex flex-col items-center justify-center gap-8 text-center'>
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                className='text-3xl font-semibold no-underline text-[color:var(--text-menu)] transition-colors hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-[color:var(--accent)]'
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Footer Direct Line */}
          <div className='border-t border-(--border-subtle)/20 pt-6 pb-6 text-center'>
            <p className='text-xs uppercase tracking-wider text-(--text-muted)'>
              Call Us Directly
            </p>
            <Link
              href={`tel:${sanitizedPhone}`}
              className='mt-1 block text-lg font-medium no-underline text-(--accent) hover:opacity-90'
            >
              {phone}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export { Navbar };
