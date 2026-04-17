import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// ── Display font — headings ────────────────────────────────
const playfair = Playfair_Display({
  subsets:  ['latin'],
  variable: '--font-display',
  display:  'swap',
});

// ── Body font — all UI text ────────────────────────────────
const dmSans = DM_Sans({
  subsets:  ['latin'],
  variable: '--font-sans',
  weight:   ['300', '400', '500', '600', '700'],
  display:  'swap',
});

export const viewport = {
  themeColor:   '#8B4513',
  width:        'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default:  'D-Cotton | Sustainable Quality',
    template: '%s | D-Cotton',
  },
  description: 'Transforming the cotton industry through sustainable investment and innovative opportunities.',
metadataBase: new URL('https://rushibhapkar.github.io/d-cotton-web'),
  keywords: ['Cotton', 'Investment', 'Sustainability', 'Opportunities'],
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://d-cotton.com',
    siteName:    'D-Cotton',
    title:       'D-Cotton | Sustainable Quality',
    description: 'Transforming the cotton industry through sustainable investment.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'D-Cotton Preview' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'D-Cotton',
    description: 'Sustainable Investment Opportunities',
    images:      ['/og-image.png'],
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