'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Sparkles,
  Trophy,
  Users,
  MessageCircle,
  Ruler,
} from 'lucide-react';

const GALLERY_IMAGES = [
  {
    src: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/media%209.jpg',
    alt: 'Kinderen met rackets bij Piramide Tennis op TVO Oostvoorne',
  },
  {
    src: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/media%208.jpg',
    alt: 'Jeugdspeler in actie op de baan',
  },
  {
    src: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/media%202.jpg',
    alt: 'Trainer en kinderen bij het TOF-bord tijdens de les',
  },
];

const TOFSCORE_IMAGES = [
  {
    src: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/de%20swirl%20500.jpeg',
    alt: 'Kind verplaatst naammagneten op het TOF-bord met fases en levels',
  },
  {
    src: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/Scoreboard.jpeg',
    alt: 'Kinderen bij het Tofscore-scorebord op de club',
  },
  {
    src: 'https://toftennis.nl/wp-content/uploads/2021/05/e85e3afa-a4cd-4e9b-bd2f-eb4fd149df18-1024x768.jpg',
    alt: 'Tenniskids spelerskaarten Rood, Oranje en Groen aan een TOF-koord',
  },
];

const WHATSAPP_NUMBER = '31622616535';
const WHATSAPP_MESSAGE =
  'Hoi Remco, ik wil graag meer info over Kids Tennis / de proeflessen bij TVO Oostvoorne.';

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

const CATEGORIES = [
  {
    id: 'rood',
    name: 'Tenniskids Rood',
    short: 'Rood',
    ages: 'Ca. 5 t/m 8/9 jaar',
    agesBrief: '4 t/m 8 jaar',
    court: 'Minibaan (6 × 12 m)',
    ball: 'Grote, zachte rode bal',
    racket: 'Korter racket (43–56 cm)',
    time: '14:20 – 15:10 uur',
    accent: '#DC2626',
    soft: '#FEF2F2',
    border: '#FECACA',
    focus:
      'Veel spelen, weinig stilstand. Gooien, vangen, voetenwerk, eerste slagen en leren tellen.',
    learn: [
      'Gooien, vangen en de balstuit leren inschatten',
      'Eerste forehand en backhand over een laag net',
      'Korte rally’s en de eerste spelregels',
    ],
    friday:
      'Vooral speels: balvaardigheid, voetenwerk, tellen en samenwerken.',
  },
  {
    id: 'oranje',
    name: 'Tenniskids Oranje',
    short: 'Oranje',
    ages: 'Ca. 8 t/m 11 jaar',
    agesBrief: '8 t/m 11 jaar',
    court: 'Driekwartbaan (18 m)',
    ball: 'Oranje bal (zachter dan geel)',
    racket: 'Gemiddeld racket (56–63,5 cm)',
    time: '15:10 – 16:00 uur',
    accent: '#EA580C',
    soft: '#FFF7ED',
    border: '#FED7AA',
    focus:
      'Meer echte tennis: rally’s, service, enkel en dubbel, en omgaan met winnen en verliezen.',
    learn: [
      'Bovenhandse service, smash en volley',
      'Diep of kort spelen, hoeken zoeken, beter voetenwerk',
      'Tiebreaks, enkel- en dubbelspel, communicatie met een partner',
    ],
    friday:
      'Meer wedstrijdvorm: dubbel, tiebreaks, piramidetennis en conditie.',
  },
  {
    id: 'groen',
    name: 'Tenniskids Groen',
    short: 'Groen',
    ages: 'Ca. 10 t/m 12 jaar',
    agesBrief: '10 t/m 12 jaar',
    court: 'Hele baan',
    ball: 'Groene bal (iets zachter dan geel)',
    racket: 'Racket 63,5–68 cm',
    time: '16:00 – 16:50 uur',
    accent: '#16A34A',
    soft: '#F0FDF4',
    border: '#BBF7D0',
    focus:
      'Wedstrijdtennis op de hele baan: harder slaan, slimmer spelen en toernooivormen.',
    learn: [
      'Topspin, slice, snellere services en passeerslagen',
      'Zelf een speelplan maken, fair play en wedstrijdspanning',
      'Conditie, wendbaarheid en herstel na een punt',
    ],
    friday:
      'Wedstrijden: King of the Court, teampunten en mix-toernooitjes.',
  },
];

const FRIDAY_PROGRAM = [
  {
    week: 1,
    theme: 'Dubbelspel & Samenwerken',
    rood: 'Racket-vanger/gooier, samen hooghouden, duospelletjes',
    oranjeGroen: 'Positie op de baan, communicatie met partner, dubbeltactiek',
  },
  {
    week: 2,
    theme: 'Enkelspel & Zelfstandigheid',
    rood: 'Leren tellen (1-2-3-4/punten), baangrenzen verkennen',
    oranjeGroen: 'Servicelijnen benutten, rallyopbouw, diep vs. kort spelen',
  },
  {
    week: 3,
    theme: 'Tiebreak Toernooi',
    rood: 'Aangepaste minigames, mikken op vakken voor punten',
    oranjeGroen: 'Officiële tiebreak-vormen, omgaan met wedstrijdspanning',
  },
  {
    week: 4,
    theme: 'Piramidetennis',
    rood: "Ranglijst-spel op de minibaan, successen vieren",
    oranjeGroen: "Uitdagen van hogere plekken op de 'ladder'",
  },
  {
    week: 5,
    theme: 'Service & Retour',
    rood: 'Bovenhandse gooibeweging, balcoördinatie & vangen',
    oranjeGroen: 'Bovenhandse service, inslaan en retourneren van snelle ballen',
  },
  {
    week: 6,
    theme: 'Conditie & Behendigheid',
    rood: 'Voetenwerk-parcours, reactie- en vangspellen',
    oranjeGroen: 'Agility-ladders, herstelvoetenwerk, conditie-games',
  },
  {
    week: 7,
    theme: 'King of the Court',
    rood: 'Afvalrace op minibaan, continu doordraaien',
    oranjeGroen: 'King of the Court (enkel & dubbel) onder tijdsdruk',
  },
  {
    week: 8,
    theme: 'Richting & Doelraken',
    rood: 'Targets en doelen omver spelen, balcontrole',
    oranjeGroen: 'Hoeken zoeken, vaart maken vs. controle houden',
  },
  {
    week: 9,
    theme: 'Tactiek & Slim Spelen',
    rood: "'Slimme ballen' (hoog/laag, zacht/hard afwisselen)",
    oranjeGroen: 'Tegenstander weglokken, de zwakke plek opzoeken',
  },
  {
    week: 10,
    theme: 'Tellen & Fair Play',
    rood: 'Zelf stand bijhouden, eerlijk uit/in roepen',
    oranjeGroen: 'Zelfstandig wedstrijden leiden, arbitrage, sportiviteit',
  },
  {
    week: 11,
    theme: 'Team Challenge',
    rood: 'Rood-teamgames (estafette + tenniselementen)',
    oranjeGroen: 'Groepscompetitie, samen teampunten verzamelen',
  },
  {
    week: 12,
    theme: 'Fun-toernooi',
    rood: 'Spelletjes met belemmeringen (bijv. 1 hand, obstakels)',
    oranjeGroen: 'Mix-toernooi (Oranje & Groen door elkaar)',
  },
  {
    week: 13,
    theme: 'Finale & Diploma-uitreiking',
    rood: "Feestelijke afsluiting, minitoernooitje, diploma's",
    oranjeGroen: 'Finalewedstrijden, prijsuitreiking & feestelijke afsluiting',
  },
];

function CategoryAccordion() {
  const [openId, setOpenId] = useState('rood');

  return (
    <div className="space-y-0 divide-y divide-gray-200 border-y border-gray-200">
      {CATEGORIES.map((cat) => {
        const open = openId === cat.id;
        return (
          <div key={cat.id}>
            <button
              type="button"
              onClick={() => setOpenId(open ? null : cat.id)}
              className="flex w-full items-start gap-4 py-5 text-left transition-colors hover:bg-gray-50/80 md:gap-6 md:py-6"
              aria-expanded={open}
            >
              <span
                className="mt-1.5 h-10 w-1.5 shrink-0 rounded-full"
                style={{ background: cat.accent }}
                aria-hidden
              />
              <span className="min-w-0 flex-1">
                <span
                  className="block text-xl font-bold md:text-2xl"
                  style={{ color: cat.accent }}
                >
                  {cat.name}
                </span>
                <span className="mt-1 block text-sm text-gray-600 md:text-base">
                  {cat.agesBrief} · {cat.court.split('(')[0].trim()} · Vrijdag {cat.time}
                </span>
              </span>
              <ChevronDown
                className={`mt-2 h-5 w-5 shrink-0 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden"
                >
                  <div className="pb-7 pl-6 md:pl-8">
                    <p className="max-w-2xl text-base leading-relaxed text-gray-700">
                      {cat.focus}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-gray-600">
                      <span className="font-semibold text-gray-800">Baan &amp; materiaal:</span>{' '}
                      {cat.court}, {cat.ball.toLowerCase()}, {cat.racket.toLowerCase()}.
                    </p>
                    <p className="mt-3 text-sm font-semibold text-gray-800">Wat ze leren</p>
                    <ul className="mt-2 max-w-2xl space-y-1.5">
                      {cat.learn.map((line) => (
                        <li key={line} className="text-sm leading-relaxed text-gray-600">
                          · {line}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm leading-relaxed text-gray-600">
                      <span className="font-semibold text-gray-800">
                        Vrijdag Speelmoment ({cat.time}):
                      </span>{' '}
                      {cat.friday}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-end md:items-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/un%20dos%20tres%20500.jpg')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.55) 45%, rgba(15,23,42,0.88) 100%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 20% 20%, rgba(220,38,38,0.35), transparent 45%), radial-gradient(ellipse at 80% 30%, rgba(234,88,12,0.3), transparent 40%), radial-gradient(ellipse at 60% 80%, rgba(22,163,74,0.28), transparent 45%)',
          }}
        />

        <div className="container relative z-10 mx-auto px-4 pb-16 pt-28 md:pb-24 md:pt-32">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
          >
            TVO Oostvoorne · Tenniskids TOF
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Kids Tennis op TVO Oostvoorne
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl"
          >
            Vaste trainingen, optioneel een speelmoment op vrijdag, en een spelerskaart waarmee
            kinderen echt zien wat ze leren.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/inschrijven-tennis-les"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-bold text-gray-900 shadow-lg transition hover:bg-emerald-50"
            >
              Inschrijven
            </Link>
            <a
              href="#proeflessen"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Eerst 3× proberen
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro / TOF */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(160deg, #ecfdf5 0%, #fff7ed 45%, #f0fdf4 100%)',
          }}
        />
        <div className="container relative z-10 mx-auto max-w-4xl px-4">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Tenniskids op TVO
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">
              We werken met Tenniskids TOF van de KNLTB. Kleine kinderen spelen op een minibaan met
              een zachte bal, grotere kinderen groeien door naar een grotere baan. Zo blijft het
              leuk én leerzaam.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
              Het oude vrijblijvende systeem stopt. Voor de komende cyclus van{' '}
              <strong>13 weken</strong> (sept t/m dec, met herfstvakantie ertussen) kies je bij
              inschrijving uit twee pakketten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sfeerimpressie */}
      <section className="bg-white py-8 md:py-12" aria-label="Sfeerimpressie Tenniskids">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {GALLERY_IMAGES.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categorieen" className="scroll-mt-24 bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <motion.div {...fadeInUp} className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Rood, Oranje &amp; Groen
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
              Welke kleur past, hangt af van leeftijd en niveau. De trainer deelt definitief in.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <CategoryAccordion />
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section
        id="pakketten"
        className="scroll-mt-24 relative overflow-hidden py-16 md:py-20"
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #f8fafc 0%, #ecfdf5 50%, #f8fafc 100%)',
          }}
        />
        <div className="container relative z-10 mx-auto max-w-4xl px-4">
          <motion.div {...fadeInUp} className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Pakketten
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              13 lesweken · sept t/m dec · 1 week herfstvakantie ertussen
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6"
          >
            <h3 className="text-base font-bold text-gray-900">Start &amp; einde per lesdag</h3>
            <p className="mt-2 text-sm text-gray-600">
              Di t/m vr starten in de week van 9–12 september. Maandag start een week later (15
              september).
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
              <li>
                <span className="font-semibold text-gray-900">Dinsdag:</span> 9 sep → 15 dec
              </li>
              <li>
                <span className="font-semibold text-gray-900">Woensdag:</span> 10 sep → 16 dec
              </li>
              <li>
                <span className="font-semibold text-gray-900">Donderdag:</span> 11 sep → 17 dec
              </li>
              <li>
                <span className="font-semibold text-gray-900">Vrijdag:</span> 12 sep → 18 dec
              </li>
              <li className="sm:col-span-2">
                <span className="font-semibold text-gray-900">Maandag:</span> 15 sep → 21 dec
              </li>
            </ul>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            <motion.article
              {...fadeInUp}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-7"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Basispakket
              </p>
              <p className="mt-2 text-3xl font-bold tabular-nums text-gray-900">€ 170,-</p>
              <p className="mt-2 text-gray-600">1× per week training</p>
              <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5 text-gray-700">
                <li>· 13 weken in Rood, Oranje of Groen</li>
                <li>· Techniek, spelinzicht en meters maken</li>
              </ul>
            </motion.article>

            <motion.article
              {...fadeInUp}
              className="relative rounded-2xl border-2 border-emerald-400 bg-white p-6 shadow-sm md:p-7"
            >
              <span className="absolute -top-2.5 right-4 rounded-full bg-emerald-600 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
                + € 70
              </span>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
                Totaalpakket
              </p>
              <p className="mt-2 text-3xl font-bold tabular-nums text-gray-900">€ 240,-</p>
              <p className="mt-2 text-gray-600">
                Training + elke vrijdag het Speelmoment
              </p>
              <ul className="mt-5 space-y-2 border-t border-emerald-100 pt-5 text-gray-700">
                <li>· 13 weken training én elke vrijdag meespelen</li>
                <li>
                  · Voor <strong>€ 70,-</strong> extra (een tweede trainingsuur apart zou € 170,-
                  kosten)
                </li>
              </ul>
            </motion.article>
          </div>

          <motion.p {...fadeInUp} className="mt-8 text-sm text-gray-500">
            Instromen halverwege? Dan rekenen we naar rato van de resterende weken.
          </motion.p>
        </div>
      </section>

      {/* Friday Speelmoment */}
      <section id="vrijdag" className="scroll-mt-24 bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div {...fadeInUp} className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Vrijdag Speelmoment
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Tennis leer je door te spelen, niet alleen door te trainen. Op vrijdag maken we meters
              in wedstrijdvormen en spelletjes. Start{' '}
              <strong>12 september</strong>, laatste keer <strong>18 december</strong>. Omdat
              iedereen vooraf is aangemeld, is er een vaste groep — en dat merk je meteen.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="mb-10 grid gap-6 sm:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="border-l-4 pl-4" style={{ borderColor: cat.accent }}>
                <p className="font-bold" style={{ color: cat.accent }}>
                  {cat.short}
                </p>
                <p className="mt-1 text-lg font-semibold tabular-nums text-gray-900">{cat.time}</p>
                <p className="text-sm text-gray-500">50 minuten</p>
              </div>
            ))}
          </motion.div>

          <motion.p {...fadeInUp} className="mb-8 text-sm text-gray-500">
            Minder dan 5 aanmeldingen per kleur? Dan voegen we groepen samen (bijv. Rood-Oranje of
            Oranje-Groen).
          </motion.p>

          <motion.div {...fadeInUp}>
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Programma per week
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-slate-50">
                    <th className="px-4 py-3 font-semibold text-gray-900">Wk</th>
                    <th className="px-4 py-3 font-semibold text-gray-900">Thema</th>
                    <th className="px-4 py-3 font-semibold text-red-700">Rood · speels</th>
                    <th className="px-4 py-3 font-semibold text-orange-700">
                      Oranje &amp; Groen · wedstrijdgericht
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {FRIDAY_PROGRAM.map((row) => (
                    <tr key={row.week} className="align-top hover:bg-slate-50/80">
                      <td className="px-4 py-3 font-bold tabular-nums text-gray-900">{row.week}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">{row.theme}</td>
                      <td className="px-4 py-3 text-gray-600">{row.rood}</td>
                      <td className="px-4 py-3 text-gray-600">{row.oranjeGroen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Spelerskaart & TOF */}
      <section
        id="tofscore"
        className="scroll-mt-24 relative overflow-hidden py-16 md:py-20"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #fff7ed 0%, #fefce8 40%, #ecfdf5 100%)',
          }}
        />
        <div className="container relative z-10 mx-auto max-w-5xl px-4">
          <motion.div {...fadeInUp} className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Spelerskaart &amp; Tofscore
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">
              Elk kind krijgt een spelerskaart aan de tennistas. Bolletjes inkleuren, levels halen,
              buttons verdienen.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
          >
            {TOFSCORE_IMAGES.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <motion.div
              {...fadeInUp}
              className="rounded-2xl border border-orange-200 bg-white/90 p-6 shadow-sm"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Fases &amp; levels</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Per kleur zijn er <strong>10 fases</strong>. Elke fase heeft{' '}
                <strong>3 levels</strong>:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>
                  <strong>Level 1 – Ontdekken:</strong> kennismaken met de oefening
                </li>
                <li>
                  <strong>Level 2 – Beheersen:</strong> het zit erin
                </li>
                <li>
                  <strong>Level 3 – Excelleren:</strong> een extra uitdaging erbij
                </li>
              </ul>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="rounded-2xl border border-emerald-200 bg-white/90 p-6 shadow-sm"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Stippen sparen</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Samen met de trainer kleur je bolletjes in als iets lukt. Ook na lessen of op
                vrijdag spaar je stippen — bijvoorbeeld voor buttons op de tas.
              </p>
              <p className="mt-4 text-sm text-gray-600">
                Levels gaan over techniek, tactiek, bewegen en sportief gedrag.
              </p>
            </motion.div>
          </div>

          <motion.div
            {...fadeInUp}
            className="rounded-2xl border border-gray-200 bg-white/80 px-5 py-5 md:px-8"
          >
            <div className="flex gap-3">
              <Ruler className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
              <p className="text-gray-700 leading-relaxed">
                <strong>Door naar een nieuwe kleur?</strong> Dat gebeurt pas als de fases van de
                huidige kleur goed zitten — bijvoorbeeld van Rood naar Oranje. Twijfel je over het
                niveau? Vraag het even aan de trainer na de les.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proeflessen */}
      <section id="proeflessen" className="scroll-mt-24 bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div {...fadeInUp} className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Proeflessen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Nog niet zeker of tennis iets is? Eerst vrijblijvend meedoen.
            </p>
          </motion.div>

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {[
              {
                step: '1 & 2',
                title: 'Twee gewone lessen',
                text: 'Op de trainingsdag, in de juiste categorie.',
              },
              {
                step: '3',
                title: 'Eén vrijdag',
                text: 'Meedoen met het Speelmoment — inclusief Tofscore.',
              },
              {
                step: 'Daarna',
                title: 'Lid worden',
                text: 'Basis- of Totaalpakket kiezen en lid worden van TVO.',
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                {...fadeInUp}
                className="rounded-2xl border border-gray-200 bg-slate-50 px-5 py-6"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  Stap {item.step}
                </p>
                <h3 className="mt-2 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="flex flex-col gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 md:flex-row md:items-center md:justify-between md:p-8"
          >
            <div>
              <div className="mb-2 flex items-center gap-2 text-emerald-800">
                <Users className="h-5 w-5" />
                <span className="font-bold">Racket te leen</span>
              </div>
              <p className="text-gray-700">
                Voor de proeflessen hebben wij een racket. Vragen of aanmelden? Mail{' '}
                <a
                  href="mailto:info@tennisconnect.nl"
                  className="font-semibold text-emerald-800 underline underline-offset-2"
                >
                  info@tennisconnect.nl
                </a>{' '}
                of app Remco.
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-[#20bd5a]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Remco
            </a>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-gray-200 bg-white py-16 md:py-20">
        <div className="container relative z-10 mx-auto max-w-2xl px-4 text-center">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold text-gray-900 md:text-4xl"
          >
            Meedoen?
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-lg leading-relaxed text-gray-600">
            Geef bij aanmelden door of je voor Basis (€ 170,-) of Totaal (€ 240,-) gaat.
          </motion.p>
          <motion.div {...fadeInUp} className="mt-8">
            <Link
              href="/inschrijven-tennis-les"
              className="text-base font-semibold text-emerald-800 underline underline-offset-4 transition hover:text-emerald-950"
            >
              Naar inschrijven
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
