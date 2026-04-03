'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Euro,
  Users,
  Clock,
  MapPin,
  MessageCircle,
  ChevronRight,
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const navItems = [
  { id: 'lesperiode', label: 'Lesperiode' },
  { id: 'vakanties', label: 'Vakanties' },
  { id: 'tarieven', label: 'Tarieven' },
  { id: 'groepen', label: 'Groepen' },
  { id: 'rooster', label: 'Rooster' },
];

const YOUTH_GROUPS = [
  {
    id: 'rood',
    name: 'Rood',
    badgeClass: 'bg-red-100 text-red-900 border-red-200',
    line: 'Wo + vrijdag — zie rooster.',
  },
  {
    id: 'oranje',
    name: 'Oranje',
    badgeClass: 'bg-orange-100 text-orange-950 border-orange-200',
    line: 'Wo + vrijdag — zie rooster.',
  },
  {
    id: 'groen',
    name: 'Groen',
    badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    line: 'Ma, di + vrijdag — zie rooster.',
  },
  {
    id: 'geel',
    name: 'Geel',
    badgeClass: 'bg-amber-100 text-amber-950 border-amber-300',
    line: 'Niet in dit rooster — WhatsApp voor lestijd.',
  },
];

const SENIOR_INFO = {
  name: 'Senior',
  badgeClass: 'bg-slate-200 text-slate-900 border-slate-300',
  line: 'Volwassenen. Eigen planning.',
};

const highlights = [
  {
    icon: Calendar,
    label: 'Start',
    value: '2 feb 2026',
    hint: 'Einde 10 jul',
  },
  {
    icon: Clock,
    label: 'Lestijden',
    value: 'Ma–Wo + vrijdag',
    hint: 'Zie rooster',
  },
  {
    icon: Euro,
    label: 'Jeugd',
    value: '€ 200 of € 220',
    hint: 'Zie tarieven',
  },
  {
    icon: Users,
    label: 'Groepsindeling',
    value: '± 25 jan',
    hint: 'Per e-mail',
  },
];

const WHATSAPP_NUMBER = '31622616535'; // +31 6 22616535 (digits only)
const WHATSAPP_MESSAGE = 'Hoi Remco, ik wil graag tennisles.';

function SectionCard({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 bg-white rounded-2xl shadow-lg border border-gray-100 ${className}`}
    >
      {children}
    </section>
  );
}

export default function TennisLesInschrijvenPage() {
  return (
    <>
    <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(135deg, rgba(254,240,138,0.22) 0%, rgba(187,247,208,0.38) 35%, rgba(191,219,254,0.28) 70%, rgba(253,224,71,0.12) 100%)',
        }}
      />

      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div {...fadeUp} transition={{ duration: 0.4 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-800 font-medium mb-6 py-2 px-3 -ml-3 rounded-lg hover:bg-white/70 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            Terug naar home
          </Link>
        </motion.div>

        <motion.header
          {...fadeUp}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-center mb-8"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-amber-900 bg-amber-100/90 px-4 py-2 rounded-full text-sm font-semibold mb-5 shadow-sm border border-amber-200/60">
            <Calendar className="h-4 w-4 shrink-0" />
            <span>Voorjaar 2026 — jeugdlessen vanaf 2 februari</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 text-balance">
            Inschrijven tennisles
          </h1>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Schrijf je in voor tennisles via WhatsApp"
            className="group mx-auto mb-6 flex max-w-md items-center gap-4 rounded-2xl border border-emerald-200/90 bg-white/95 px-4 py-4 text-left shadow-md shadow-emerald-900/5 backdrop-blur-sm transition hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:px-5"
          >
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm ring-4 ring-emerald-100"
              aria-hidden
            >
              <MessageCircle className="h-6 w-6" strokeWidth={2} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold text-gray-900 sm:text-lg">
                Schrijf je in voor tennisles
              </span>
              <span className="mt-0.5 block text-sm text-emerald-700">
                Open WhatsApp — Remco helpt je verder
              </span>
            </span>
            <ChevronRight className="h-5 w-5 shrink-0 text-gray-400 transition group-hover:translate-x-0.5 group-hover:text-emerald-600" aria-hidden />
          </a>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed text-pretty">
            Data, tarieven en rooster voor het voorjaar.
          </p>
        </motion.header>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8"
        >
          {highlights.map(({ icon: Icon, label, value, hint }) => (
            <div
              key={label}
              className="rounded-xl border border-white/80 bg-white/85 backdrop-blur-sm px-4 py-3 shadow-sm"
            >
              <div className="flex items-center gap-2 text-emerald-700 mb-1">
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {label}
                </span>
              </div>
              <p className="font-bold text-gray-900 text-sm md:text-base">{value}</p>
              <p className="text-xs text-gray-600 mt-0.5">{hint}</p>
            </div>
          ))}
        </motion.div>

        <motion.nav
          {...fadeUp}
          transition={{ duration: 0.45, delay: 0.1 }}
          aria-label="Op deze pagina"
          className="sticky top-[4.5rem] z-20 mb-8 rounded-xl border border-gray-200/80 bg-white/85 backdrop-blur-md shadow-sm px-2 py-2 sm:px-3"
        >
          <p className="sr-only">Snel naar sectie</p>
          <ul className="flex gap-2 overflow-x-auto pb-0.5 sm:flex-wrap sm:justify-center [-webkit-overflow-scrolling:touch]">
            {navItems.map(({ id, label }) => (
              <li key={id} className="shrink-0">
                <a
                  href={`#${id}`}
                  className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:border-emerald-300 hover:bg-emerald-50/50 hover:text-emerald-900 transition-colors"
                >
                  {label}
                  <ChevronRight className="h-3.5 w-3.5 opacity-50 hidden sm:inline" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        <div className="space-y-8">
          <motion.div {...fadeUp} transition={{ duration: 0.45, delay: 0.12 }}>
            <SectionCard id="lesperiode" className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-emerald-600 shrink-0" />
                Lesperiode
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                De nieuwe lesperiode loopt van <strong>2 februari t/m 10 juli 2026</strong>. De
                lestijden blijven zoveel mogelijk ongewijzigd op de vertrouwde dagen:{' '}
                <strong>maandag, dinsdag en woensdag</strong> (en vrijdag voor wedstrijdtraining —
                zie rooster).
              </p>
              <p className="text-gray-600 text-sm flex items-start gap-2 rounded-lg bg-gray-50 px-3 py-2 border border-gray-100">
                <MapPin className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden />
                <span>Voor de vakanties volgen we de data van de basisschool.</span>
              </p>
            </SectionCard>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.45, delay: 0.14 }}>
            <SectionCard id="vakanties" className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Vakanties &amp; vrije dagen</h2>

              <div className="space-y-4 mb-8">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                  Schoolvakanties
                </h3>
                <dl className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-3 border-b border-gray-100">
                    <dt className="font-semibold text-gray-900">Voorjaarsvakantie</dt>
                    <dd className="text-gray-700 tabular-nums sm:text-right">14 t/m 22 februari</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <dt className="font-semibold text-gray-900">Meivakantie</dt>
                    <dd className="text-gray-700 tabular-nums sm:text-right">18 april t/m 3 mei</dd>
                  </div>
                </dl>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">
                  Feestdagen (geen les)
                </h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {[
                    ['Goede Vrijdag', '3 april'],
                    ['2e Paasdag', '6 april'],
                    ['Bevrijdingsdag', '5 mei'],
                    ['Hemelvaart', '14 t/m 17 mei'],
                    ['2e Pinksterdag', '25 mei'],
                  ].map(([name, date]) => (
                    <li
                      key={name}
                      className="flex items-center justify-between gap-3 rounded-lg bg-gray-50 px-3 py-2 text-sm border border-gray-100"
                    >
                      <span className="text-gray-800">{name}</span>
                      <span className="font-medium text-gray-900 tabular-nums shrink-0">{date}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-sky-50 border border-sky-100 p-4 md:p-5">
                <p className="text-gray-800 leading-relaxed">
                  <strong>Zomerstop:</strong> we stoppen een week vóór de officiële zomervakantie.
                  De laatste lessen zijn in de week van <strong>6 t/m 10 juli</strong>.
                </p>
              </div>
            </SectionCard>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.45, delay: 0.16 }}>
            <SectionCard id="tarieven" className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Euro className="h-5 w-5 text-emerald-600 shrink-0" />
                Tarieven &amp; afspraken
              </h2>
              <p className="text-gray-700 mb-5 text-sm">
                Jeugd: vast bedrag voor <strong>18 lesweken</strong>. Wanneer welke groep speelt:{' '}
                <a href="#groepen" className="text-sky-700 font-medium underline underline-offset-2">
                  Groepen
                </a>{' '}
                en{' '}
                <a href="#rooster" className="text-sky-700 font-medium underline underline-offset-2">
                  Rooster
                </a>
                .
              </p>

              <div className="overflow-hidden rounded-xl border border-gray-200 mb-6">
                <table className="w-full text-sm">
                  <caption className="sr-only">Tarieven per groep</caption>
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-left">
                      <th scope="col" className="px-4 py-3 font-semibold text-gray-900">
                        Groep
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-gray-900">
                        Tarief
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 text-gray-800 font-semibold">Geel</td>
                      <td className="px-4 py-3 text-gray-800">
                        <span className="font-bold text-gray-900 tabular-nums">€ 200,-</span>
                        <span className="text-gray-500 text-xs block mt-0.5">18 lesweken</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="px-4 py-3 text-gray-800 font-semibold">
                        Rood, oranje, groen
                      </td>
                      <td className="px-4 py-3 text-gray-800">
                        <span className="font-bold text-gray-900 tabular-nums">€ 220,-</span>
                        <span className="text-gray-500 text-xs block mt-0.5">18 lesweken</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-800 font-semibold">Senior</td>
                      <td className="px-4 py-3 text-gray-800">
                        <strong className="tabular-nums">€ 60 per uur</strong>
                        <span className="text-gray-600 block text-xs mt-1">
                          gedeeld door het aantal deelnemers
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Bevestiging &amp; indeling
                </h3>
                <ul className="space-y-2 text-gray-700 leading-relaxed list-none">
                  <li className="flex gap-2">
                    <span className="text-emerald-600 font-bold shrink-0" aria-hidden>
                      •
                    </span>
                    <span>
                      Wil je vanaf februari <strong>geen</strong> lessen meer? Laat het ons zo snel
                      mogelijk weten.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 font-bold shrink-0" aria-hidden>
                      •
                    </span>
                    <span>
                      Na alle aanmeldingen maken we de planning definitief. De groepsindeling sturen
                      we <strong>rond 25 januari</strong> naar iedereen.
                    </span>
                  </li>
                </ul>
              </div>
            </SectionCard>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.45, delay: 0.18 }}>
            <SectionCard id="groepen" className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Groepen</h2>
              <p className="text-gray-600 text-sm mb-6">
                Alleen <strong>wanneer</strong> je groep speelt — bedragen staan bij{' '}
                <a href="#tarieven" className="text-sky-700 font-medium underline underline-offset-2">
                  Tarieven
                </a>
                .
              </p>

              <div className="space-y-3 mb-6">
                {YOUTH_GROUPS.map((g) => (
                  <div
                    key={g.id}
                    className="flex flex-col gap-2 rounded-xl border border-gray-100 bg-gray-50/80 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span
                      className={`inline-flex w-fit items-center rounded-lg border px-3 py-1 text-sm font-bold ${g.badgeClass}`}
                    >
                      {g.name}
                    </span>
                    <p className="text-gray-700 text-sm sm:text-right">{g.line}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <span
                  className={`inline-flex w-fit items-center rounded-lg border px-3 py-1 text-sm font-bold ${SENIOR_INFO.badgeClass}`}
                >
                  {SENIOR_INFO.name}
                </span>
                <p className="text-gray-700 text-sm sm:text-right">{SENIOR_INFO.line}</p>
              </div>
            </SectionCard>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.45, delay: 0.2 }}>
            <SectionCard id="rooster" className="overflow-hidden">
              <div className="px-6 md:px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-sky-50">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-emerald-600 shrink-0" />
                  Rooster lestijden
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  Rood, oranje, groen. Geel en senior: zie{' '}
                  <a href="#groepen" className="text-sky-700 font-medium underline underline-offset-2">
                    Groepen
                  </a>
                  . Prijzen: zie{' '}
                  <a href="#tarieven" className="text-sky-700 font-medium underline underline-offset-2">
                    Tarieven
                  </a>
                  .
                </p>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    day: 'Maandag',
                    rows: [{ label: 'Groen 1', time: '15:50 – 16:40' }],
                    alt: false,
                  },
                  {
                    day: 'Dinsdag',
                    rows: [{ label: 'Groen 2', time: '16:20 – 17:10' }],
                    alt: true,
                  },
                  {
                    day: 'Woensdag',
                    rows: [
                      { label: 'Rood', time: '14:20 – 15:10' },
                      { label: 'Oranje 1 & 2', time: '14:20 – 15:10' },
                      { label: 'Oranje 3', time: '15:10 – 16:00' },
                    ],
                    alt: false,
                  },
                ].map(({ day, rows, alt }) => (
                  <div
                    key={day}
                    className={`px-6 md:px-8 py-4 ${alt ? 'bg-gray-50/60' : ''}`}
                  >
                    <p className="font-bold text-gray-900 mb-3">{day}</p>
                    <ul className="space-y-2">
                      {rows.map(({ label, time }) => (
                        <li
                          key={`${day}-${label}`}
                          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4"
                        >
                          <span className="text-gray-800 font-medium">{label}</span>
                          <span className="inline-flex w-fit items-center rounded-md bg-gray-100 px-2.5 py-1 text-sm font-semibold text-gray-900 tabular-nums">
                            {time}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="px-6 md:px-8 py-4 bg-amber-50/50 border-t border-amber-100">
                  <p className="font-bold text-gray-900">Vrijdagmiddag</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Wedstrijdtraining &amp; spel — inzicht
                  </p>
                  <ul className="mt-3 space-y-2">
                    {[
                      { label: 'Rood & Oranje 1 & 2', time: '14:20 – 15:10' },
                      { label: 'Oranje 3 & Groen 1 & 2', time: '15:10 – 16:00' },
                    ].map(({ label, time }) => (
                      <li
                        key={label}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4"
                      >
                        <span className="text-gray-800 font-medium">{label}</span>
                        <span className="inline-flex w-fit items-center rounded-md bg-amber-100/80 px-2.5 py-1 text-sm font-semibold text-amber-950 tabular-nums">
                          {time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="rounded-2xl border border-gray-200 bg-white/90 p-6 md:p-8 text-center shadow-md"
          >
            <MessageCircle className="h-8 w-8 text-sky-600 mx-auto mb-3" aria-hidden />
            <h2 className="text-lg font-bold text-gray-900 mb-2">Vragen over de lessen?</h2>
            <p className="text-gray-600 text-sm mb-4 max-w-md mx-auto">
              WhatsApp Remco Van Reek (+31 6 22616535): we reageren zo snel we kunnen.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-base text-white font-semibold hover:bg-sky-700 transition-colors shadow-sm"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
              WhatsApp Remco Van Reek
            </a>
          </motion.div>
        </div>
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
      aria-label="WhatsApp Remco: aanmelden voor tennisles"
    >
      <MessageCircle className="h-6 w-6 shrink-0" aria-hidden />
      <span className="text-sm font-bold hidden sm:inline">WhatsApp Remco</span>
    </a>
    </>
  );
}
