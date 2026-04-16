'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Opportunities', id: 'opportunities' },
  { label: 'Investment',    id: 'investment' },
  { label: 'Process',       id: 'process' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    // slight delay so mobile menu exit animation completes first
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
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'top-3 mx-4 md:mx-auto md:max-w-4xl rounded-2xl border border-[#c8a96e]/20 bg-[#faf7f2]/80 backdrop-blur-xl shadow-[0_4px_40px_rgba(139,90,43,0.08)]'
            : 'bg-transparent'
        )}
      >
        <div
          className={cn(
            'mx-auto flex items-center justify-between transition-all duration-500',
            isScrolled ? 'px-6 py-3 max-w-none' : 'px-6 py-5 max-w-7xl'
          )}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Go to top"
          >
            {/* Monogram mark */}
            <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-[#8b5a2b]/30 bg-[#8b5a2b]/5 transition-colors group-hover:bg-[#8b5a2b]/10">
              <span className="font-serif text-sm font-bold tracking-widest text-[#8b5a2b]">D</span>
            </div>
            <span
              className="font-serif text-xl font-bold tracking-tight text-[#1a1208] transition-opacity group-hover:opacity-70"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              D-Cotton
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-0 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="group relative px-5 py-2 text-sm font-medium tracking-wide text-[#4a3728] transition-colors hover:text-[#1a1208]"
              >
                {link.label}
                <span className="absolute inset-x-5 -bottom-0.5 h-px origin-left scale-x-0 bg-[#8b5a2b] transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}

            <div className="mx-5 h-5 w-px bg-[#8b5a2b]/20" />

            <button
              onClick={() => scrollToSection('apply')}
              className="group relative overflow-hidden rounded-full border border-[#1a1208] bg-[#1a1208] px-7 py-2.5 text-sm font-semibold tracking-wide text-[#faf7f2] transition-all duration-300 hover:border-[#8b5a2b] hover:bg-[#8b5a2b] active:scale-95"
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
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu — full-screen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{    opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-[#1a1208]/40 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{    x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 bottom-0 z-50 flex w-72 flex-col bg-[#faf7f2] shadow-2xl md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-[#8b5a2b]/10 px-6 py-5">
                <span
                  className="font-serif text-lg font-bold tracking-tight text-[#1a1208]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  D-Cotton
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[#4a3728] hover:bg-[#8b5a2b]/10"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1 px-4 pt-6">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center justify-between rounded-xl px-4 py-4 text-left font-medium text-[#1a1208] transition-colors hover:bg-[#8b5a2b]/8 active:bg-[#8b5a2b]/15"
                  >
                    <span>{link.label}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c8a96e]" />
                  </motion.button>
                ))}
              </nav>

              {/* CTA at bottom */}
              <div className="mt-auto border-t border-[#8b5a2b]/10 p-6">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0  }}
                  transition={{ delay: 0.35 }}
                  onClick={() => scrollToSection('apply')}
                  className="w-full rounded-xl bg-[#1a1208] py-4 text-center font-semibold tracking-wide text-[#faf7f2] transition-colors hover:bg-[#8b5a2b] active:scale-95"
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