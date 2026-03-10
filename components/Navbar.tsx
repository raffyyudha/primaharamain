'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Paket Umroh', href: '#paket' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Testimoni', href: '#testimoni' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-surface shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3 z-50">
          <Image
            src="/images/logo.avif"
            alt="Prima Haramain Logo"
            width={44}
            height={44}
            className="rounded-full drop-shadow-md"
          />
          <span className={`text-xl font-serif font-bold ${isScrolled ? 'text-primary' : 'text-white'} drop-shadow-md`}>
            Prima<span className="text-gold">Haramain</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-gold transition-colors ${isScrolled ? 'text-text' : 'text-white'} drop-shadow-md`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#kontak"
            className="bg-gold hover:bg-gold-light text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2 shadow-md"
          >
            <Phone className="w-4 h-4" />
            Hubungi Kami
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden z-50 p-2 ${isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-white'} drop-shadow-md`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <div className={`fixed inset-0 bg-surface z-40 flex flex-col pt-24 px-6 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden`}>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-text hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#kontak"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-gold text-white px-6 py-3 rounded-full text-center font-medium mt-4 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Hubungi Kami
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
