import { Suspense } from 'react';
import KnltbPage from '@/views/KnltbPage';

export const metadata = {
  title: 'Tenniskids - Tennis Connect',
  description: 'Powered by KNLTB. Ontdek de Spelerskaarten en de Leraren App voor tenniscoaches.',
  openGraph: {
    title: 'Tenniskids - Tennis Connect',
    description: 'Powered by KNLTB. Ontdek de Spelerskaarten en de Leraren App voor tenniscoaches.',
    url: 'https://www.tennisconnect.nl/knltb',
    siteName: 'Tennis Connect',
    images: [
      {
        url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/herkenbaar.jpg',
        width: 1200,
        height: 630,
        alt: 'Kids Tennis TVO Oostvoorne · Tenniskids TOF',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Laden...</p>
      </div>
    </div>}>
      <KnltbPage />
    </Suspense>
  );
}
