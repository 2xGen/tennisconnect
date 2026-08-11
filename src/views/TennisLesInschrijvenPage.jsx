'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const WHATSAPP_NUMBER = '31622616535';
const WHATSAPP_MESSAGE =
  'Hoi Remco, ik heb een vraag over Kids Tennis bij TVO Oostvoorne.';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdv8c0sMH430_yaxb-ai5sZVCavUDOGwIlLJRYvo18Zl03Imw/viewform';
const GOOGLE_FORM_EMBED_URL = `${GOOGLE_FORM_URL}?embedded=true`;

const CATEGORIES = [
  {
    id: 'rood',
    name: 'Rood',
    ages: '4 t/m 8 jaar · minibaan',
    friday: '14:20 – 15:10',
    badgeClass: 'bg-red-100 text-red-900 border-red-200',
  },
  {
    id: 'oranje',
    name: 'Oranje',
    ages: '8 t/m 11 jaar · driekwartbaan',
    friday: '15:10 – 16:00',
    badgeClass: 'bg-orange-100 text-orange-950 border-orange-200',
  },
  {
    id: 'groen',
    name: 'Groen',
    ages: '10 t/m 12 jaar · hele baan',
    friday: '16:00 – 16:50',
    badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-200',
  },
];

export default function TennisLesInschrijvenPage() {
  return (
    <>
      <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(135deg, rgba(254,226,226,0.35) 0%, rgba(255,237,213,0.4) 40%, rgba(220,252,231,0.45) 100%)',
          }}
        />

        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.4 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-emerald-800 hover:text-emerald-900 font-medium mb-6 py-2 px-3 -ml-3 rounded-lg hover:bg-white/70 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" />
              Terug naar home
            </Link>
          </motion.div>

          <motion.header
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mb-8 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-balance">
              Inschrijven Kids Tennis
            </h1>
            <p className="mt-3 text-base text-gray-600">
              13 lesweken · TVO Oostvoorne · sept t/m dec
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed text-pretty">
              Kies je pakket en vul het formulier in.
            </p>
          </motion.header>

          <motion.section
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6"
          >
            <h2 className="text-lg font-bold text-gray-900">Wanneer</h2>
            <p className="mt-2 text-sm text-gray-600">
              13 lesdagen per weekdag, met 1 week herfstvakantie ertussen.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
              <li>
                <span className="font-semibold text-gray-900">Di:</span> 9 sep → 15 dec
              </li>
              <li>
                <span className="font-semibold text-gray-900">Wo:</span> 10 sep → 16 dec
              </li>
              <li>
                <span className="font-semibold text-gray-900">Do:</span> 11 sep → 17 dec
              </li>
              <li>
                <span className="font-semibold text-gray-900">Vr:</span> 12 sep → 18 dec
              </li>
              <li className="sm:col-span-2">
                <span className="font-semibold text-gray-900">Ma:</span> 15 sep → 21 dec
              </li>
            </ul>
          </motion.section>

          <motion.section
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6"
          >
            <h2 className="text-lg font-bold text-gray-900">Pakketten</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Basispakket
                </p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-gray-900">€ 170,-</p>
                <p className="mt-1 text-sm text-gray-600">1× per week training</p>
              </div>
              <div className="relative rounded-xl border-2 border-emerald-400 bg-emerald-50/40 p-4">
                <span className="absolute -top-2.5 right-3 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                  + € 70
                </span>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
                  Totaalpakket
                </p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-gray-900">€ 240,-</p>
                <p className="mt-1 text-sm text-gray-600">Training + elke vrijdag Speelmoment</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Instromen halverwege? Prijs naar rato. Trainer deelt in op kleur (Rood / Oranje /
              Groen).
            </p>
          </motion.section>

          <motion.section
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6"
          >
            <h2 className="text-lg font-bold text-gray-900">Kleuren</h2>
            <ul className="mt-4 space-y-2">
              {CATEGORIES.map((g) => (
                <li
                  key={g.id}
                  className="flex flex-col gap-1 rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-bold ${g.badgeClass}`}
                    >
                      {g.name}
                    </span>
                    <span className="text-sm text-gray-700">{g.ages}</span>
                  </div>
                  <span className="text-sm text-gray-500 sm:text-right">
                    Vrijdag{' '}
                    <span className="font-semibold tabular-nums text-gray-800">{g.friday}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.15 }}
            id="formulier"
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="bg-emerald-700 px-5 py-3 text-center">
              <p className="text-sm font-semibold text-white md:text-base">
                Vul het formulier in — daarna krijg je een bevestiging per mail
              </p>
            </div>
            <iframe
              src={GOOGLE_FORM_EMBED_URL}
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Inschrijven Kids Tennis"
              className="block min-h-[800px] w-full"
            >
              Loading…
            </iframe>
          </motion.section>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 text-center text-sm text-gray-500"
          >
            Formulier opent niet goed?{' '}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-emerald-800 underline underline-offset-2"
            >
              Open in een nieuw tabblad
            </a>
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-8 text-center text-sm text-gray-600"
          >
            Vragen? App{' '}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-emerald-800 underline underline-offset-2"
            >
              Remco
            </a>{' '}
            of mail{' '}
            <a
              href="mailto:info@tennisconnect.nl"
              className="font-medium text-emerald-800 underline underline-offset-2"
            >
              info@tennisconnect.nl
            </a>
            .
          </motion.p>
        </div>
      </main>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noreferrer"
        className="fixed z-50 flex h-14 items-center gap-2 rounded-full bg-[#25D366] pl-4 pr-5 text-white shadow-lg ring-2 ring-white/90 transition hover:bg-[#20bd5a] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
        style={{
          bottom: 'max(1.25rem, env(safe-area-inset-bottom, 0px))',
          right: 'max(1rem, env(safe-area-inset-right, 0px))',
        }}
        aria-label="WhatsApp Remco: vraag over Kids Tennis"
      >
        <MessageCircle className="h-6 w-6 shrink-0" aria-hidden />
        <span className="hidden text-sm font-bold sm:inline">Vraag? WhatsApp</span>
      </a>
    </>
  );
}
