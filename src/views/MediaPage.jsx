'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Camera, Heart } from 'lucide-react';

const MEDIA_BASE =
  'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp';

const MEDIA_ITEMS = [
  {
    src: `${MEDIA_BASE}/action.jpg`,
    title: 'Actie op de baan',
    description: 'Vol energie op de tennis- of padelbaan. Training, spel en plezier.',
  },
  {
    src: `${MEDIA_BASE}/bbq.jpg`,
    title: 'BBQ en gezelligheid',
    description: 'Samen eten en genieten. Een echte kampbeleving.',
  },
  {
    src: `${MEDIA_BASE}/chillen.jpg`,
    title: 'Samen chillen',
    description: 'Groepsfoto en sfeer van het kamp. Vriendschap en plezier staan centraal.',
  },
  {
    src: `${MEDIA_BASE}/colors.jpg`,
    title: 'Kleur en sfeer',
    description: 'Het kamp in volle glorie. Herinneringen voor later.',
  },
  {
    src: `${MEDIA_BASE}/e6a40d86-6352-44f0-88bf-d247ae52577a.jpg`,
    title: 'Kampmoment',
    description: 'Sfeerbeelden van het Tennis Connect kamp.',
  },
  {
    src: `${MEDIA_BASE}/eten.jpg`,
    title: 'Brandstof voor kampioenen',
    description: 'Gedekte tafel, lunch en blije gezichten. Elke dag vers van de bakker, onbeperkt fruit en drinken.',
  },
  {
    src: `${MEDIA_BASE}/hamburger.jpg`,
    title: 'Lekker eten',
    description: 'Genieten van een maaltijd samen. Gezelligheid en smaak.',
  },
  {
    src: `${MEDIA_BASE}/klimmen.jpg`,
    title: 'Klimmen en avontuur',
    description: 'Middagactiviteiten: klimmen, spelen en ontdekken.',
  },
  {
    src: `${MEDIA_BASE}/laser%20tag.jpg`,
    title: 'Laser tag',
    description: 'Teamspel en actie. Spannend en sportief.',
  },
  {
    src: `${MEDIA_BASE}/mee.jpg`,
    title: 'Meer dan alleen sport',
    description: 'Middagactiviteiten, teambuilding en avonturen in het bos, de duinen en op het water.',
  },
  {
    src: `${MEDIA_BASE}/nacht.jpg`,
    title: 'Een finale om nooit te vergeten',
    description: 'Feestelijke afsluiting samen met alle ouders. Een herinnering voor het hele gezin.',
  },
  {
    src: `${MEDIA_BASE}/spel.jpg`,
    title: 'Spel en plezier',
    description: 'Samen spelen, lachen en herinneringen maken.',
  },
  {
    src: `${MEDIA_BASE}/tafel%20tennis.jpg`,
    title: 'Tafeltennis',
    description: 'Naast tennis en padel ook tafeltennis. Voor iedereen wat wils.',
  },
  {
    src: `${MEDIA_BASE}/tennis%20camp.jpg`,
    title: 'Tennis Connect Kamp',
    description: 'Het kamp in beeld. Tennis, padel en veel meer.',
  },
  {
    src: `${MEDIA_BASE}/tennis.jpg`,
    title: 'Slaan, scoren en groeien',
    description: 'Kinderen in actie op de tennis- of padelbaan. Elke ochtend 2 uur training op eigen niveau.',
  },
  {
    src: `${MEDIA_BASE}/toren.jpg`,
    title: 'Toren en uitzicht',
    description: 'Avontuur en ontdekking tijdens het kamp.',
  },
];

export default function MediaPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(135deg, rgba(254,240,138,0.2) 0%, rgba(187,247,208,0.3) 40%, rgba(191,219,254,0.25) 70%, rgba(253,224,71,0.1) 100%)',
        }}
      />

      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-800 font-medium mb-6 py-2 px-3 -ml-3 rounded-lg hover:bg-white/70 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar home
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-amber-600 bg-amber-50/90 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            <Camera className="h-4 w-4" />
            <span>Sfeerbeelden</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Foto&apos;s van het kamp
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed flex items-center justify-center gap-2 flex-wrap">
            <Heart className="h-5 w-5 text-rose-400 fill-rose-400" aria-hidden />
            Een kijkje in de wereld van tennis, padel, vriendschap en lol in Oostvoorne.
          </p>
        </motion.header>

        <ul className="space-y-16">
          {MEDIA_ITEMS.map((item, index) => (
            <motion.li
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="relative aspect-[4/3] bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <Link
            href="/inschrijven"
            className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg"
          >
            Meld je aan voor het kamp
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
