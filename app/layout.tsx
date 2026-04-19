import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const playfair = Playfair_Display({
  subsets : ['latin'],
  variable: '--font-display',
  display : 'swap',
});

const dmSans = DM_Sans({
  subsets : ['latin'],
  variable: '--font-sans',
  weight  : ['300', '400', '500', '600', '700'],
  display : 'swap',
});

export const viewport = {
  themeColor   : '#8b5a2b',
  width        : 'device-width',
  initialScale : 1,
  maximumScale : 1,
};

export const metadata: Metadata = {
  title: {
    default : 'D-KOTTON | Maharashtra\'s Premier Menswear Franchise',
    template: '%s | D-KOTTON',
  },
  description: 'Own a D-KOTTON franchise — Zero Franchise Fee, 100% Refundable Deposit, Complete Store Setup. Maharashtra\'s fastest growing menswear brand by Swami Textiles.',
  metadataBase: new URL('https://rushibhapkar.github.io/d-cotton-web'),
  keywords: ['D-KOTTON', 'Franchise', 'Menswear', 'Maharashtra', 'Swami Textiles', 'Fashion'],
  openGraph: {
    type       : 'website',
    locale     : 'en_US',
    url        : 'https://rushibhapkar.github.io/d-cotton-web',
    siteName   : 'D-KOTTON',
    title      : 'D-KOTTON | Maharashtra\'s Premier Menswear Franchise',
    description: 'Zero Franchise Fee. 100% Refundable Deposit. Complete Store Setup.',
    images     : [{ url: '/og-image.png', width: 1200, height: 630, alt: 'D-KOTTON' }],
  },
  twitter: {
    card       : 'summary_large_image',
    title      : 'D-KOTTON',
    description: 'Maharashtra\'s Premier Menswear Franchise',
    images     : ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmSans.variable} bg-[#faf7f2]`}
    >
      <body
        suppressHydrationWarning
        className={cn(
          'min-h-screen overflow-x-hidden bg-[#faf7f2] font-sans antialiased',
          'selection:bg-amber-100 selection:text-amber-900',
        )}
      >
        <main className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}