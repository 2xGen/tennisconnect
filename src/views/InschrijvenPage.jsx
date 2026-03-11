'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ClipboardList, Sparkles } from 'lucide-react';

const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfHvitziMQkOOEV8UMhTYVbpIDEtFdSyAS4-YpmHhxaDwX90A/viewform?embedded=true';

export default function InschrijvenPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Soft gradient background – matches homepage */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(135deg, rgba(254,240,138,0.25) 0%, rgba(187,247,208,0.35) 40%, rgba(191,219,254,0.3) 70%, rgba(253,224,71,0.15) 100%)',
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
            <ArrowLeft className="h-4 w-4" />
            Terug naar home
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-amber-600 bg-amber-50/90 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            <Sparkles className="h-4 w-4" />
            <span>Nog plek in juli 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Schrijf je in en claim je plek!
          </h1>
          <div className="flex justify-center mb-4">
            <ClipboardList className="h-8 w-8 text-emerald-500" aria-hidden />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meld je zoon of dochter aan voor een onvergetelijke week in Oostvoorne. Wacht niet te
            lang, want onze kampen zijn elk jaar razendsnel volgeboekt. Of je nu 4 dagen komt
            knallen of gezellig één dagje meedoet: wij zorgen voor een onvergetelijke week. Rackets
            zijn aanwezig, een goed humeur neem je zelf mee!
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="bg-emerald-600 px-6 py-3 text-center">
            <p className="text-white font-semibold text-sm md:text-base">
              Vul het formulier hieronder in – daarna ontvang je een bevestiging per e-mail.
            </p>
          </div>
          <iframe
            src={GOOGLE_FORM_EMBED_URL}
            width="100%"
            height="812"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Inschrijfformulier Tennis & Padel Kamp"
            className="min-h-[812px] w-full block"
          >
            Loading…
          </iframe>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
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
