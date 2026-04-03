import { Suspense } from 'react';
import InschrijvenActiviteitPage from '@/views/InschrijvenActiviteitPage';

/** Formulier-URL: standaard in InschrijvenActiviteitPage.jsx; override via
 *  NEXT_PUBLIC_ACTIVITY_FORM_EMBED_URL, of ?embed= + encodeURIComponent(viewform-URL).
 *  Optioneel: NEXT_PUBLIC_ACTIVITY_TITLE, NEXT_PUBLIC_ACTIVITY_BADGE. */

export async function generateMetadata() {
  const custom = process.env.NEXT_PUBLIC_ACTIVITY_TITLE?.trim();
  return {
    title: custom ? `${custom} | Tennis Connect` : 'Inschrijven activiteit | Tennis Connect',
    description:
      'Meld je aan voor de opkomende Tennis Connect-activiteit via het online formulier.',
  };
}

function ActiviteitPageFallback() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl text-center text-gray-600 py-16">
        Laden…
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<ActiviteitPageFallback />}>
      <InschrijvenActiviteitPage />
    </Suspense>
  );
}
