'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  MapPin,
  Calendar,
  Clock,
  Star,
  ChevronDown,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5 },
};

const SLIDESHOW_IMAGES = [
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/tennis.jpg',
    alt: 'Kinderen in actie op de tennisbaan',
  },
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/tennis%20activiteit.jpeg',
    alt: 'Tennisactiviteit op het kamp',
  },
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/tennis%20foto.jpeg',
    alt: 'Tennis op het kamp',
  },
];

const BRANDSTOF_SLIDESHOW_IMAGES = [
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/eten.jpg',
    alt: 'Gedekte tafel, lunch en blije gezichten tijdens de pauze',
  },
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/hamburger.jpg',
    alt: 'Gezond menu en broodjes van de bakker',
  },
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/brandstof%201.jpeg',
    alt: 'Brandstof voor kampioenen',
  },
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/brandstof%202.jpeg',
    alt: 'Brandstof voor kampioenen',
  },
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/brandstof%203.jpeg',
    alt: 'Brandstof voor kampioenen',
  },
];

const ACTION_SLIDESHOW_IMAGES = [
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/action.jpg',
    alt: 'Actie naast de baan',
  },
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/action%202.jpeg',
    alt: 'Actie naast de baan',
  },
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/action%203.jpeg',
    alt: 'Actie naast de baan',
  },
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/action%204.jpeg',
    alt: 'Actie naast de baan',
  },
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/action%205.jpeg',
    alt: 'Actie naast de baan',
  },
];

const FINALE_SLIDESHOW_IMAGES = [
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/finale%201.jpeg',
    alt: 'Finale van het tenniskamp',
  },
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/finale%202.jpeg',
    alt: 'Finale van het tenniskamp',
  },
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/finale%203.jpeg',
    alt: 'Finale van het tenniskamp',
  },
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/finale.jpeg',
    alt: 'Finale van het tenniskamp',
  },
];

const WAAROM_SLIDESHOW_IMAGES = [
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/waarom%201.jpeg',
    alt: 'Waarom kiezen voor Tennis Connect Kamp',
  },
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/waarom%203.jpeg',
    alt: 'Waarom kiezen voor Tennis Connect Kamp',
  },
  {
    src: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/waarom.jpeg',
    alt: 'Waarom kiezen voor Tennis Connect Kamp',
  },
];

export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [brandstofSlideIndex, setBrandstofSlideIndex] = useState(0);
  const [actionSlideIndex, setActionSlideIndex] = useState(0);
  const [finaleSlideIndex, setFinaleSlideIndex] = useState(0);
  const [waaromSlideIndex, setWaaromSlideIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % SLIDESHOW_IMAGES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setBrandstofSlideIndex((i) => (i + 1) % BRANDSTOF_SLIDESHOW_IMAGES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActionSlideIndex((i) => (i + 1) % ACTION_SLIDESHOW_IMAGES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setFinaleSlideIndex((i) => (i + 1) % FINALE_SLIDESHOW_IMAGES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setWaaromSlideIndex((i) => (i + 1) % WAAROM_SLIDESHOW_IMAGES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* Eye-catcher */}
      <section
        className="text-white py-4 px-4 text-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, #22c55e 0%, #4ade80 25%, #fbbf24 50%, #fb923c 75%, #38bdf8 100%)',
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            backgroundSize: '200% 100%',
          }}
          animate={{ backgroundPosition: ['0% 50%', '200% 50%'] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-xl md:text-2xl font-bold max-w-4xl mx-auto drop-shadow-sm"
        >
          Wij hebben lol, terwijl jullie op kantoor zitten!
        </motion.p>
      </section>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(254,240,138,0.4) 0%, rgba(187,247,208,0.4) 40%, rgba(191,219,254,0.4) 70%, rgba(253,224,71,0.2) 100%)',
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
          >
            Het leukste{' '}
            <motion.span
              animate={{ color: ['#374151', '#4f46e5', '#2563eb', '#374151'] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              Tennis
            </motion.span>
            ,{' '}
            <motion.span
              animate={{ color: ['#374151', '#2563eb', '#6d28d9', '#374151'] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            >
              Padel
            </motion.span>
            {' & '}
            <motion.span
              animate={{ color: ['#374151', '#6d28d9', '#4f46e5', '#374151'] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            >
              Fun
            </motion.span>{' '}
            kamp van Voorne aan Zee!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-700 mb-2"
          >
            4 dagen vol sport, creativiteit en vriendschap voor kids van 6 t/m 12 jaar.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-emerald-600 font-semibold mb-8"
          >
            Maandag 20 t/m donderdag 23 juli 2026
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/inschrijven"
                className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                Meld je direct aan!
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/media"
                className="inline-flex items-center gap-2 border-2 border-sky-500 text-sky-600 hover:bg-sky-50 font-bold px-8 py-4 rounded-xl transition-colors"
              >
                Bekijk de foto&apos;s
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.a
          href="#verder"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sky-500 hover:text-sky-600"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.a>
      </section>

      {/* Promo video section */}
      <section className="py-16 md:py-24 bg-amber-400 scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-amber-950 text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            Bekijk de sfeer van het kamp
          </motion.h2>
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-amber-950/20">
              <video
                className="w-full aspect-video object-cover"
                src="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/promo.mp4"
                controls
                playsInline
                preload="metadata"
              >
                <track kind="captions" />
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Slaan, scoren en groeien */}
      <section id="verder" className="py-16 md:py-24 bg-amber-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-amber-100 shadow-lg"
              {...fadeInLeft}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              >
                {SLIDESHOW_IMAGES.map((slide, i) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                    style={{ opacity: slideIndex === i ? 1 : 0, zIndex: slideIndex === i ? 1 : 0 }}
                  />
                ))}
              </motion.div>
            </motion.div>
            <motion.div {...fadeInRight}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-lime-700">
                Slaan, scoren en groeien!
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Elke ochtend duiken we 2 uur lang de baan op voor een intensieve training. Of je nu
                voor het eerst een racket vasthoudt of al een echte wedstrijdexpert bent: onze
                trainers zorgen dat jij het beste uit jezelf haalt op jouw eigen niveau.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/inschrijven"
                  className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  Meld je aan
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Brandstof voor kampioenen */}
      <section className="py-16 md:py-24 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div className="order-2 md:order-1" {...fadeInRight}>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
                Brandstof voor kampioenen.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Van sporten krijg je trek! Daarom staat er elke middag een verrassend en gezond menu
                klaar. Elke dag vers van de bakker: broodjes van Bakkerij Voskamp. Tussendoor
                zorgen we voor onbeperkt fruit en drinken, zodat de energie de hele dag op 100%
                blijft.
              </p>
              <p className="text-amber-600 font-semibold">Elke dag vers van de bakker!</p>
            </motion.div>
            <motion.div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-amber-100 shadow-lg order-1 md:order-2"
              {...fadeInLeft}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              >
                {BRANDSTOF_SLIDESHOW_IMAGES.map((slide, i) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                    style={{
                      opacity: brandstofSlideIndex === i ? 1 : 0,
                      zIndex: brandstofSlideIndex === i ? 1 : 0,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Meer dan alleen sport */}
      <section className="py-16 md:py-24 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sky-100 shadow-lg"
              {...fadeInLeft}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              >
                {ACTION_SLIDESHOW_IMAGES.map((slide, i) => {
                  const isCurrent = actionSlideIndex === i;
                  const isNext =
                    i === (actionSlideIndex + 1) % ACTION_SLIDESHOW_IMAGES.length;
                  const isVisible = isCurrent || isNext;
                  return (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      key={slide.src}
                      src={slide.src}
                      alt={slide.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        zIndex: isCurrent ? 1 : 0,
                      }}
                    />
                  );
                })}
              </motion.div>
            </motion.div>
            <motion.div {...fadeInRight}>
              <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">
                Meer dan alleen sport.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Na de training is het tijd voor actie naast de baan. Onze middagen zitten vol
                creatieve challenges en teambuilding. Avonturen in het bos, de duinen en op het
                water. Samenwerken, lachen en nieuwe vrienden maken staan hierbij centraal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Een finale om nooit te vergeten */}
      <section className="py-16 md:py-24 bg-violet-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div className="order-2 md:order-1" {...fadeInRight}>
              <h2 className="text-3xl md:text-4xl font-bold text-violet-800 mb-4">
                Een finale om nooit te vergeten.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We sluiten de week op donderdag op een heel bijzondere manier af, samen met alle
                ouders. Een feestelijk hoogtepunt waar de kids laten zien wat ze die week hebben
                beleefd. Een herinnering die nog lang blijft plakken!
              </p>
              <p className="text-violet-600 font-semibold">
                Een knallend slotstuk! Op donderdag doen we er een schepje bovenop. We nodigen alle
                ouders uit om aan te sluiten. We sluiten de week gezamenlijk af en eindigen om 19:00
                uur. Een herinnering voor het hele gezin!
              </p>
            </motion.div>
            <motion.div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-violet-100 shadow-lg order-1 md:order-2"
              {...fadeInLeft}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              >
                {FINALE_SLIDESHOW_IMAGES.map((slide, i) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                    style={{
                      opacity: finaleSlideIndex === i ? 1 : 0,
                      zIndex: finaleSlideIndex === i ? 1 : 0,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Over Ons */}
      <section className="py-16 md:py-24 bg-rose-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-rose-800 mb-6 text-center"
            {...fadeInUp}
          >
            Al 6 jaar een begrip in de regio!
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed text-center"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Bij ons draait het om meer dan alleen een balletje slaan. Al 6 jaar organiseren wij met
            trots hét zomerkamp waar sportiviteit, creativiteit en teamspirit samenkomen.
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed mt-4 text-center"
            {...fadeInUp}
            transition={{ delay: 0.15 }}
          >
            Wij geloven dat elk kind moet kunnen schitteren op zijn of haar eigen niveau. Of je nu
            droomt van een profcarrière of voor het eerst een padelracket vasthoudt: onze
            professionele trainers staan klaar om je techniek te verbeteren met een glimlach.
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed mt-4 text-center"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Maar een kamp is pas écht af als de sfeer goed is. Daarom besteden we net zoveel
            aandacht aan onze creatieve middagactiviteiten en onze inmiddels beroemde lunches. Bij
            ons ben je geen nummer, maar onderdeel van een hecht team. Kom je deze zomer met ons
            meevieren?
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/inschrijven"
                className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                Meld je aan voor het kamp
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Waarom kiezen + groepsfoto */}
      <section className="py-16 md:py-24 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeInLeft}>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-8">
                Waarom kiezen voor ons?
              </h2>
              <ul className="space-y-4">
                {[
                  ['Professionele begeleiding: 2 uur intensieve training per dag op eigen niveau.', 'text-lime-600'],
                  ['All-inclusive genieten: Elke dag een vers gevarieerd menu, onbeperkt fruit en drinken.', 'text-amber-600'],
                  ['Focus op Teamspirit: Unieke middagactiviteiten die verder gaan dan alleen sport.', 'text-sky-600'],
                  ['Flexibiliteit: Doe alle 4 de dagen mee of schrijf je in per dag.', 'text-violet-600'],
                  ['Feestelijke afsluiting: Een spectaculair einde van de week samen met alle ouders.', 'text-rose-600'],
                ].map(([text, iconColor], i) => (
                  <motion.li
                    key={i}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <CheckCircle2 className={`h-6 w-6 flex-shrink-0 mt-0.5 ${iconColor}`} />
                    <span className="text-gray-700">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-emerald-100 shadow-lg"
              {...fadeInRight}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              >
                {WAAROM_SLIDESHOW_IMAGES.map((slide, i) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                    style={{
                      opacity: waaromSlideIndex === i ? 1 : 0,
                      zIndex: waaromSlideIndex === i ? 1 : 0,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locatie & Omgeving */}
      <section className="py-16 md:py-24 bg-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            {...fadeInUp}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <MapPin className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-800 mb-4">
              Meer dan alleen de baan...
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ons kamp vindt plaats bij <strong>Tvo in het prachtige Oostvoorne</strong>. De
              ochtenden staan in het teken van tennis en padel, maar &apos;s middags trekken we
              eropuit! Dankzij onze unieke locatie organiseren we de leukste avonturen in het bos,
              de duinen en zelfs op het water. Een echte vakantie-ervaring!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tofscore */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            {...fadeInUp}
          >
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Star className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              De Tofscore: Spelen is winnen!
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ons speciale puntensysteem waarbij plezier en inzet worden beloond. Hoe meer je speelt
              en meedoet, hoe hoger je score!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Praktische info & Prijzen */}
      <section className="py-16 md:py-24 bg-indigo-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-indigo-800 mb-10 text-center"
            {...fadeInUp}
          >
            Goed om te weten
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-sky-500" />
                Wanneer?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Data:</strong> Maandag 20 juli t/m donderdag 23 juli 2026
                </li>
                <li>
                  <strong>Dagelijkse tijden:</strong> 09:00 – 16:00 uur
                </li>
                <li>
                  <strong>Donderdag:</strong> tot 19:00 uur, inclusief afsluiting met ouders
                </li>
              </ul>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-violet-500" />
                Inschrijfmogelijkheden
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Volledig kamp: alle 4 de dagen</li>
                <li>Flexibel: per losse dag inschrijven kan ook</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-indigo-800 mb-4">Prijzen 2026</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between items-center py-2 border-b border-indigo-200">
                  <span>Losse dag</span>
                  <span className="font-bold text-lime-600">€ 60,-</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-indigo-200">
                  <span>Donderdag (incl. afsluiting)</span>
                  <span className="font-bold text-amber-600">€ 75,-</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span>Volledig kamp (4 dagen)</span>
                  <span className="font-bold text-emerald-600">€ 225,-</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">Leeftijd: 6 t/m 12 jaar</p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/inschrijven"
                  className="mt-6 inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow w-full justify-center"
                >
                  Direct inschrijven
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky CTA button - only on homepage */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/inschrijven"
            className="flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-bold px-6 py-4 rounded-full shadow-lg text-sm md:text-base"
            style={{ boxShadow: '0 4px 20px rgba(34, 197, 94, 0.4)' }}
          >
            Meld je aan!
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
