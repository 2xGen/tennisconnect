'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdv8c0sMH430_yaxb-ai5sZVCavUDOGwIlLJRYvo18Zl03Imw/viewform?usp=dialog';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#categorieen', label: 'Categorieën' },
  { href: '/#pakketten', label: 'Pakketten' },
  { href: '/#proeflessen', label: 'Proeflessen' },
  { href: '/inschrijven-tennis-les', label: 'Inschrijven' },
  { href: GOOGLE_FORM_URL, label: 'Inschrijfformulier', external: true },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100/80">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <Image
                src="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tennis%20connect%20kamp/tennos%20connect%20logo.png"
                alt="Tennis Connect"
                width={200}
                height={31}
                className="h-12 md:h-14 w-auto object-contain"
                priority
                quality={90}
              />
            </Link>
          </div>

          <nav className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center gap-5 lg:gap-6">
              {NAV_LINKS.map(({ href, label, external }) =>
                external ? (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm font-medium text-gray-700 hover:text-emerald-700 transition-colors"
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-emerald-700 transition-colors"
              aria-label="Menu toggle"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              {NAV_LINKS.map(({ href, label, external }) =>
                external ? (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-base font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-base font-medium text-gray-700 hover:text-emerald-700 transition-colors"
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
