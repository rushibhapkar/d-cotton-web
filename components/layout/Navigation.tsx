'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { label: 'Franchise',  id: 'franchise'  },
  { label: 'Wholesale',  id: 'wholesale'  },
  { label: 'Investment', id: 'investment' },
  { label: 'Process',    id: 'process'    },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled]           = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, isMobileMenuOpen ? 300 : 0);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'top-3 mx-4 md:mx-auto md:max-w-4xl rounded-2xl border border-[#c8a96e]/25 bg-[#faf7f2]/85 backdrop-blur-xl shadow-[0_8px_40px_rgba(139,90,43,0.1)]'
            : 'bg-transparent'
        )}
      >
        <div
          className={cn(
            'mx-auto flex items-center justify-between transition-all duration-500',
            isScrolled ? 'px-6 py-3.5 max-w-none' : 'max-w-7xl px-6 py-5 lg:px-8'
          )}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Go to top"
          >
<div className="relative h-10 w-10 overflow-hidden rounded-lg transition-all duration-300 group-hover:opacity-85">
  <Image
    src="https://res.cloudinary.com/demz8cf5k/image/upload/v1776613533/uploads/k2izcqjkbmd0nynknv9w.jpg"
    alt="D-KOTTON Logo"
    fill
    className="object-contain"
    unoptimized
    priority
  />
</div>
            <div className="flex flex-col leading-none">
              <span
                className="text-[17px] font-bold tracking-tight text-[#1a1208] transition-opacity duration-300 group-hover:opacity-70"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                D-KOTTON
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#9b8070]">
                by Swami Textiles
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="group relative px-4 py-2 text-sm font-medium tracking-wide text-[#4a3728] transition-colors duration-200 hover:text-[#1a1208]"
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 rounded-full bg-[#8b5a2b] transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}

            <div className="mx-4 h-4 w-px bg-[#8b5a2b]/20" />

            {/* Phone */}
            <a
              href="tel:+918087145570"
              className="flex items-center gap-2 rounded-full border border-[#8b5a2b]/25 px-4 py-2 text-sm font-medium text-[#4a3728] transition-all duration-300 hover:border-[#8b5a2b]/50 hover:bg-[#8b5a2b]/5"
            >
              <Phone size={13} className="text-[#8b5a2b]" />
              8087145570
            </a>

            {/* CTA */}
            <button
              onClick={() => scrollToSection('franchise')}
              className="ml-2 rounded-full bg-[#1a1208] px-6 py-2.5 text-sm font-semibold tracking-wide text-[#faf7f2] shadow-md transition-all duration-300 hover:bg-[#8b5a2b] hover:shadow-[0_6px_24px_rgba(139,90,43,0.3)] active:scale-95"
            >
              Get Started
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8b5a2b]/20 bg-[#8b5a2b]/5 text-[#1a1208] transition-colors hover:bg-[#8b5a2b]/10 md:hidden"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0,   opacity: 1 }}
                exit={{   rotate:  90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{    opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-[#1a1208]/35 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{    x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 bottom-0 z-50 flex w-72 flex-col bg-[#faf7f2] shadow-2xl md:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#8b5a2b]/10 px-6 py-5">
                <div className="flex flex-col leading-none">
                  <span
                    className="text-lg font-bold tracking-tight text-[#1a1208]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    D-KOTTON
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9b8070]">
                    by Swami Textiles
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[#4a3728] transition-colors hover:bg-[#8b5a2b]/10"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1 px-4 pt-6">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0  }}
                    transition={{ delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center justify-between rounded-xl px-4 py-4 text-left text-[15px] font-medium text-[#1a1208] transition-colors hover:bg-[#8b5a2b]/8 active:bg-[#8b5a2b]/15"
                  >
                    <span>{link.label}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c8a96e]" />
                  </motion.button>
                ))}
              </nav>

              {/* Phone + CTA */}
              <div className="mt-auto border-t border-[#8b5a2b]/10 p-6 flex flex-col gap-3">
                <motion.a
                  href="tel:+918087145570"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0  }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#8b5a2b]/25 py-3.5 text-sm font-medium text-[#4a3728] transition-colors hover:bg-[#8b5a2b]/5"
                >
                  <Phone size={14} className="text-[#8b5a2b]" />
                  8087145570
                </motion.a>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0  }}
                  transition={{ delay: 0.38 }}
                  onClick={() => scrollToSection('franchise')}
                  className="w-full rounded-xl bg-[#1a1208] py-4 text-center text-sm font-semibold tracking-wide text-[#faf7f2] transition-colors hover:bg-[#8b5a2b] active:scale-95"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}