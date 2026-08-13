'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-gray-800"
      style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #ecfdf5 45%, #fff7ed 100%)' }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/tennos%20connect%20logo.png"
                alt="Tennis Connect"
                width={150}
                height={23}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Kids Tennis op TVO Oostvoorne. Tenniskids TOF — Rood, Oranje &amp; Groen. Pakketten van
              13 weken met Vrijdag Speelmoment en Tofscore.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/toftennis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-emerald-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/toftennis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-emerald-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#categorieen"
                  className="text-gray-600 hover:text-red-700 transition-colors text-sm"
                >
                  Categorieën
                </Link>
              </li>
              <li>
                <Link
                  href="/#pakketten"
                  className="text-gray-600 hover:text-orange-700 transition-colors text-sm"
                >
                  Pakketten
                </Link>
              </li>
              <li>
                <Link
                  href="/#proeflessen"
                  className="text-gray-600 hover:text-emerald-800 transition-colors text-sm"
                >
                  Proeflessen
                </Link>
              </li>
              <li>
                <Link
                  href="/inschrijven-tennis-les"
                  className="text-gray-600 hover:text-amber-700 transition-colors text-sm"
                >
                  Inschrijven
                </Link>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdv8c0sMH430_yaxb-ai5sZVCavUDOGwIlLJRYvo18Zl03Imw/viewform?usp=dialog"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-emerald-800 transition-colors text-sm font-semibold"
                >
                  Inschrijfformulier
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-emerald-700 flex-shrink-0" />
                <span>
                  TVO Oostvoorne
                  <br />
                  Kids Tennis · Tenniskids TOF
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <Mail className="h-4 w-4 text-amber-700 flex-shrink-0" />
                <a
                  href="mailto:info@tennisconnect.nl"
                  className="hover:text-emerald-800 transition-colors"
                >
                  info@tennisconnect.nl
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Bedrijfsgegevens</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <span className="text-gray-500">KVK:</span> 70507929
              </li>
              <li>
                <span className="text-gray-500">BTW:</span> NL858349954B01
              </li>
              <li>
                <span className="text-gray-500">IBAN:</span> NL56KNAB0257029400
              </li>
              <li>
                <span className="text-gray-500">BIC:</span> KNABNL2H
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-200/70">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © Tennis Connect 2018-{currentYear}. Alle rechten voorbehouden.
            </p>
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
              <p className="text-gray-500 text-sm text-center">
                Built &amp; managed by{' '}
                <a
                  href="https://2xgen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-700 underline underline-offset-2 transition-colors hover:text-emerald-800"
                >
                  2xGen.com
                </a>
              </p>
              <button
                onClick={() => {
                  if (typeof window !== 'undefined' && window.openCookieSettings) {
                    window.openCookieSettings();
                  }
                }}
                className="text-gray-500 hover:text-emerald-800 transition-colors text-sm"
              >
                Cookie Instellingen
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
