'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, ClipboardList } from 'lucide-react';

/** Standaard formulier; overschrijf met NEXT_PUBLIC_ACTIVITY_FORM_EMBED_URL of ?embed=. */
const DEFAULT_ACTIVITY_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfMMYHhVWd-FNE6A5y1LrQWKo97gGc0uQ71WC8E4hS_TGRnRw/viewform';

/** Alleen https://docs.google.com/forms/.../viewform — zet ?embedded=true indien nodig. */
function normalizeGoogleFormEmbedUrl(raw) {
  if (!raw || typeof raw !== 'string') return null;
  let url;
  try {
    url = new URL(raw.trim());
  } catch {
    return null;
  }
  if (url.protocol !== 'https:') return null;
  if (url.hostname !== 'docs.google.com') return null;
  if (!url.pathname.includes('/forms/')) return null;
  if (!url.pathname.includes('/viewform')) return null;
  url.searchParams.set('embedded', 'true');
  return url.toString();
}

export default function InschrijvenActiviteitPage() {
  const searchParams = useSearchParams();

  const embedUrl = useMemo(() => {
    const q = searchParams.get('embed');
    if (q) {
      try {
        const decoded = decodeURIComponent(q);
        const n = normalizeGoogleFormEmbedUrl(decoded);
        if (n) return n;
      } catch {
        /* ignore */
      }
    }
    const env = process.env.NEXT_PUBLIC_ACTIVITY_FORM_EMBED_URL;
    return (
      normalizeGoogleFormEmbedUrl(env || '') ||
      normalizeGoogleFormEmbedUrl(DEFAULT_ACTIVITY_FORM_EMBED_URL)
    );
  }, [searchParams]);

  const title =
    searchParams.get('t')?.trim() ||
    process.env.NEXT_PUBLIC_ACTIVITY_TITLE?.trim() ||
    'Inschrijven voor activiteit';

  const badge =
    searchParams.get('badge')?.trim() ||
    process.env.NEXT_PUBLIC_ACTIVITY_BADGE?.trim() ||
    'Opkomende activiteit';

  return (
    <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(135deg, rgba(254,240,138,0.22) 0%, rgba(187,247,208,0.35) 40%, rgba(191,219,254,0.28) 70%, rgba(253,224,71,0.12) 100%)',
        }}
      />

      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-800 font-medium mb-6 py-2 px-3 -ml-3 rounded-lg hover:bg-white/70 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            Terug naar home
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-violet-800 bg-violet-100/90 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm border border-violet-200/60">
            <Calendar className="h-4 w-4 shrink-0" aria-hidden />
            <span>{badge}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            {title}
          </h1>
          <div className="flex justify-center mb-4">
            <ClipboardList className="h-8 w-8 text-violet-600" aria-hidden />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed text-pretty">
            Schrijf je in voor de volgende Tennis Connect-activiteit. Het formulier hieronder wordt
            per activiteit bijgewerkt — staat er nog niets, check later even opnieuw of neem contact
            op.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          {embedUrl ? (
            <iframe
              src={embedUrl}
              width="100%"
              height="692"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title={title}
              className="min-h-[692px] w-full block"
            >
              Laden…
            </iframe>
          ) : (
            <div className="px-6 py-12 md:py-16 text-center">
              <p className="text-gray-800 font-medium mb-2">Inschrijfformulier volgt</p>
              <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed mb-6">
                Er is op dit moment nog geen formulier gekoppeld aan deze pagina. Kom later terug,
                of neem contact op voor meer informatie.
              </p>
              <a
                href="mailto:info@tennisconnect.nl"
                className="inline-flex text-sky-600 hover:text-sky-700 font-medium text-sm underline underline-offset-2"
              >
                info@tennisconnect.nl
              </a>
            </div>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          Vragen? Mail ons op{' '}
          <a
            href="mailto:info@tennisconnect.nl"
            className="text-sky-600 hover:text-sky-700 font-medium underline underline-offset-2"
          >
            info@tennisconnect.nl
          </a>
        </motion.p>
      </div>
    </main>
  );
}
