'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Visible on all screen sizes, left side */}
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

          {/* Navigation Menu - Center, hidden on mobile */}
          <nav className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center gap-6">
              <Link 
                href="/" 
                className="text-sm font-medium text-gray-700 hover:text-lime-600 transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/media" 
                className="text-sm font-medium text-gray-700 hover:text-sky-600 transition-colors"
              >
                Foto&apos;s
              </Link>
              <Link 
                href="/inschrijven" 
                className="text-sm font-bold px-4 py-2 rounded-lg text-white transition-all shadow-md hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)' }}
              >
                Meld je aan!
              </Link>
            </div>
          </nav>

          {/* Right side - Hamburger menu on mobile */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Toggle - Right side */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-lime-600 transition-colors"
              aria-label="Menu toggle"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-gray-700 hover:text-lime-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/media"
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-gray-700 hover:text-sky-600 transition-colors"
              >
                Foto&apos;s
              </Link>
              <Link
                href="/inschrijven"
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-bold text-lime-600 hover:text-lime-700 transition-colors"
              >
                Meld je aan!
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
