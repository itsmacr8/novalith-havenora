'use client';

import { IContactInfo } from '@/lib/mock-data';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

interface SocialLink {
  id: string;
  label: string;
  icon: string;
  href: string;
  ariaLabel: string;
}

const iconMap = {
  whatsapp: FaWhatsapp,
  email: MdEmail,
  phone: MdPhone,
};

function SocialLinksWidget({ whatsappNumber }: IContactInfo) {
  const SOCIAL_LINKS: SocialLink[] = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: 'whatsapp',
      href: `https://wa.me/${whatsappNumber}/?text=Hello`,
      ariaLabel: 'Contact us on WhatsApp',
    },
  ];

  // const SOCIAL_LINKS: SocialLink[] = [
  //   {
  //     id: 'email',
  //     label: 'Email',
  //     icon: 'mail',
  //     href: `mailto:${email}`,
  //     ariaLabel: 'Send us an email',
  //   },
  //   {
  //     id: 'phone',
  //     label: 'Phone',
  //     icon: 'phone',
  //     href: `tel:${phone}`,
  //     ariaLabel: 'Call us',
  //   },
  //   {
  //     id: 'whatsapp',
  //     label: 'WhatsApp',
  //     icon: 'whatsapp',
  //     href: `https://wa.me/${whatsappNumber}/?text=Hello`,
  //     ariaLabel: 'Contact us on WhatsApp',
  //   },
  // ];
  // For messenger: `https://m.me/${username}?text=Hello`

  return (
    <aside
      className='fixed bottom-10 right-2 z-40'
      aria-label='Social media contact options'
    >
      <ul className='flex flex-col gap-2 list-none m-0 p-0'>
        {SOCIAL_LINKS.map((link) => {
          const IconComponent = iconMap[link.id as keyof typeof iconMap];
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                className='flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white no-underline transition-all duration-300 ease-in-out shadow-md hover:bg-green-600 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
                aria-label={link.ariaLabel}
                target={
                  link.id !== 'email' && link.id !== 'phone'
                    ? '_blank'
                    : undefined
                }
                rel={
                  link.id !== 'email' && link.id !== 'phone'
                    ? 'noopener noreferrer'
                    : undefined
                }
              >
                <IconComponent size={24} className='shrink-0' />
                <span className='sr-only'>{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export { SocialLinksWidget };
