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
  'https://docs.google.com/forms/d/e/1FAIpQLSdv8c0sMH430_yaxb-ai5sZVCavUDOGwIlLJRYvo18Zl03Imw/viewform?usp=dialog';

const SCHEDULE_DATES = [
  { day: 'Woensdag', range: '9 sep → 16 dec' },
  { day: 'Vrijdag', range: '11 sep → 18 dec' },
  { day: 'Maandag', range: '14 sep → 21 dec' },
  { day: 'Dinsdag', range: '15 sep → 22 dec' },
];

const LESSON_SLOTS = [
  {
    day: 'Maandag',
    slots: [
      { time: '15:50 – 16:40', group: 'Groen 1' },
      { time: '17:10 – 18:00', group: 'Geel A' },
    ],
  },
  {
    day: 'Dinsdag',
    slots: [
      { time: '16:20 – 17:10', group: 'Groen 2' },
      { time: '17:10 – 18:00', group: 'Geel B / Geel C' },
    ],
  },
  {
    day: 'Woensdag',
    slots: [
      { time: '14:20 – 15:10', group: 'Rood 1 & 2' },
      { time: '15:10 – 16:00', group: 'Oranje 1 & 2' },
      { time: '16:00 – 16:50', group: 'Geel D' },
    ],
  },
  {
    day: 'Vrijdag · Speelmoment',
    slots: [
      { time: '14:20 – 15:10', group: 'Rood' },
      { time: '15:10 – 16:00', group: 'Oranje' },
      { time: '16:00 – 16:50', group: 'Groen' },
    ],
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
              Kies je pakket of Geel in het formulier.
            </p>
          </motion.header>

          <motion.section
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mb-6 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 md:p-6"
          >
            <h2 className="text-lg font-bold text-gray-900">Belangrijk bij herinschrijving</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              Had je voor de zomervakantie al les bij ons? Dan behoud je in principe dezelfde lesdag
              en lestijd.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              <strong>Let op:</strong> voor Oranje 2 is de lestijd op woensdag gewijzigd — van{' '}
              14:20–15:10 naar <strong>15:10–16:00</strong>.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Vul op het formulier in op welke dag en tijd je voor de zomervakantie les had.
            </p>
          </motion.section>

          <motion.section
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6"
          >
            <h2 className="text-lg font-bold text-gray-900">Wanneer</h2>
            <p className="mt-2 text-sm text-gray-600">
              13 lesdagen per weekdag, met 1 week herfstvakantie ertussen. Woensdag start 9
              september; maandag en dinsdag beginnen (en stoppen) een week later.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
              {SCHEDULE_DATES.map((item) => (
                <li key={item.day}>
                  <span className="font-semibold text-gray-900">{item.day}:</span> {item.range}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6"
          >
            <h2 className="text-lg font-bold text-gray-900">Lesdagen &amp; tijden</h2>
            <div className="mt-4 space-y-5">
              {LESSON_SLOTS.map((block) => (
                <div key={block.day}>
                  <p className="text-sm font-bold text-gray-900">{block.day}</p>
                  <ul className="mt-2 space-y-1.5">
                    {block.slots.map((slot) => (
                      <li
                        key={`${block.day}-${slot.time}`}
                        className="flex flex-wrap items-baseline justify-between gap-2 text-sm text-gray-700"
                      >
                        <span className="tabular-nums font-medium text-gray-900">{slot.time}</span>
                        <span className="text-gray-600">{slot.group}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="mb-6 grid gap-4 sm:grid-cols-3"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Basispakket
              </p>
              <p className="mt-1 text-2xl font-bold tabular-nums text-gray-900">€ 170,-</p>
              <p className="mt-2 text-sm text-gray-600">
                1× per week training · Rood / Oranje / Groen
              </p>
            </div>

            <div className="relative rounded-2xl border-2 border-emerald-400 bg-white p-5 shadow-sm">
              <span className="absolute -top-2.5 right-3 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                + € 70
              </span>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
                Totaalpakket
              </p>
              <p className="mt-1 text-2xl font-bold tabular-nums text-gray-900">€ 240,-</p>
              <p className="mt-2 text-sm text-gray-600">
                Training + 13 vrijdagse speelmomenten (t.w.v. € 130,-; los € 10 per keer). Alleen
                voor Rood / Oranje / Groen — niet voor Geel.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-yellow-400 bg-yellow-50/50 p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-yellow-800">
                Geel
              </p>
              <p className="mt-1 text-2xl font-bold text-gray-900">Geel A – D</p>
              <p className="mt-2 text-sm text-gray-600">
                Lessen op ma / di / wo. Totaalpakket / Speelmoment niet beschikbaar.
              </p>
            </div>
          </motion.section>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.16 }}
            id="formulier"
            className="mb-6 rounded-2xl border border-emerald-200 bg-white p-6 text-center shadow-sm md:p-8"
          >
            <h2 className="text-xl font-bold text-gray-900">Inschrijven</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-gray-600">
              Eén formulier. Kies daarin Basis, Totaal of Geel.
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-emerald-700 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-800"
            >
              Naar inschrijfformulier
            </a>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center text-sm text-gray-500"
          >
            Instromen halverwege? Prijs naar rato van de resterende weken.
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-6 text-center text-sm text-gray-600"
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
