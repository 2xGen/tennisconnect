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
  title: 'Tennis & Padel Kamp Oostvoorne 2026 | Tennis Connect',
  description: 'Het leukste Tennis & Padel zomerkamp van Oostvoorne. 4 dagen sport, creativiteit en vriendschap voor kids 6-12 jaar. 20-23 juli 2026. Meld je aan!',
  icons: {
    icon: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
    shortcut: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
    apple: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
  },
  openGraph: {
    title: 'Het leukste Tennis, Padel & Fun kamp van Voorne aan Zee!',
    description: 'Het leukste Tennis & Padel zomerkamp van Oostvoorne. 4 dagen sport, creativiteit en vriendschap voor kids 6-12 jaar. 20-23 juli 2026.',
    type: 'website',
    locale: 'nl_NL',
    images: [
      {
        url: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/tennis%20foto.jpeg',
        width: 1200,
        height: 630,
        alt: 'Tennis Connect kamp',
      },
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

