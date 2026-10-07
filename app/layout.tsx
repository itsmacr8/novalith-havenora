import type { Metadata } from 'next';
import { Playfair_Display, Poppins, Lato } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar/Navbar';
import { CONTACT_INFO } from '@/lib/mock-data';
import { SocialLinksWidget } from '@/components/Navbar/SocialLinksWidget';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Novalith Havenora',
  description: 'Novalith Havenora is a real state company based in Bangladesh.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${playfair.variable} ${poppins.variable} ${lato.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <Navbar />
        <SocialLinksWidget whatsappNumber={CONTACT_INFO.whatsappNumber} />
        {children}
      </body>
    </html>
  );
}
