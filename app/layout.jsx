import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import ConditionalNavbar from '@/components/ConditionalNavbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Providers from '@/components/Providers';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Kids Tennis TVO Oostvoorne | Tennis Connect',
  description:
    'Vernieuwd jeugdprogramma bij TVO Oostvoorne: Tenniskids Rood, Oranje & Groen. Basispakket €170 of Totaalpakket €240 (13 weken) met Vrijdag Speelmoment en Tofscore.',
  icons: {
    icon: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
    shortcut: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
    apple: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
  },
  openGraph: {
    title: 'Kids Tennis op TVO Oostvoorne',
    description:
      'Tenniskids TOF bij TVO Oostvoorne. Vaste pakketten, Vrijdag Speelmoment en Tofscore-spaarprogramma voor kids.',
    type: 'website',
    locale: 'nl_NL',
    images: [
      {
        url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/herkenbaar.jpg',
        width: 1200,
        height: 630,
        alt: 'Kids Tennis TVO Oostvoorne · Tenniskids TOF',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kids Tennis op TVO Oostvoorne',
    description:
      'Tenniskids TOF bij TVO Oostvoorne. Vaste pakketten, Vrijdag Speelmoment en Tofscore-spaarprogramma voor kids.',
    images: [
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/herkenbaar.jpg',
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl-NL" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white font-poppins flex flex-col">
        <Providers>
          <ConditionalNavbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <CookieConsent />
          <Toaster />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

