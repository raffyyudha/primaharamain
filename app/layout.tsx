import type {Metadata} from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Prima Haramain Abadi | Premium Umrah Travel',
  description: 'Perjalanan ibadah Umroh dan Tour Aqsa yang nyaman, aman, dan penuh keberkahan.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className={`${cormorant.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="font-sans bg-bg text-text antialiased selection:bg-gold selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
