'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Camera, Heart, Play } from 'lucide-react';

const MEDIA_BASE =
  'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp';

// All photos shown on the homepage (slideshows)
const HOMEPAGE_IMAGES = [
  `${MEDIA_BASE}/tennis.jpg`,
  `${MEDIA_BASE}/tennis%20activiteit.jpeg`,
  `${MEDIA_BASE}/tennis%20foto.jpeg`,
  `${MEDIA_BASE}/eten.jpg`,
  `${MEDIA_BASE}/hamburger.jpg`,
  `${MEDIA_BASE}/brandstof%201.jpeg`,
  `${MEDIA_BASE}/brandstof%202.jpeg`,
  `${MEDIA_BASE}/brandstof%203.jpeg`,
  `${MEDIA_BASE}/action.jpg`,
  `${MEDIA_BASE}/action%202.jpeg`,
  `${MEDIA_BASE}/action%203.jpeg`,
  `${MEDIA_BASE}/action%204.jpeg`,
  `${MEDIA_BASE}/action%205.jpeg`,
  `${MEDIA_BASE}/finale%201.jpeg`,
  `${MEDIA_BASE}/finale%202.jpeg`,
  `${MEDIA_BASE}/finale%203.jpeg`,
  `${MEDIA_BASE}/finale.jpeg`,
  `${MEDIA_BASE}/waarom%201.jpeg`,
  `${MEDIA_BASE}/waarom%203.jpeg`,
  `${MEDIA_BASE}/waarom.jpeg`,
  `${MEDIA_BASE}/chillen.jpg`,
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

      <div className="container mx-auto px-4 max-w-5xl">
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

        {/* Video van vorig jaar */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-16"
        >
          <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-lg border border-amber-100 text-center">
            <div className="inline-flex items-center gap-2 text-amber-600 bg-amber-50 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Play className="h-4 w-4" />
              <span>Video</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Sfeerimpressie van vorig jaar
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Krijg een indruk van de sfeer op het kamp: tennis, padel, leuke middagactiviteiten en een gezellige feestelijke afsluiting. Zo zag het er vorig jaar uit — en dit jaar belooft het minstens net zo leuk te worden!
            </p>
            <div className="rounded-xl overflow-hidden shadow-xl ring-2 ring-amber-200/50">
              <video
                className="w-full aspect-video object-cover"
                src={`${MEDIA_BASE}/promo.mp4`}
                controls
                playsInline
                preload="metadata"
                title="Sfeerfilm Tennis Connect Kamp vorig jaar"
              >
                <track kind="captions" />
              </video>
            </div>
          </div>
        </motion.section>

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

        <ul className="grid grid-cols-3 gap-4">
          {HOMEPAGE_IMAGES.map((src, index) => (
            <motion.li
              key={src}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.04 * index }}
              className="rounded-xl overflow-hidden shadow-md bg-gray-100 aspect-[4/3]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Sfeerfoto van het Tennis Connect kamp"
                className="w-full h-full object-cover"
              />
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
