'use client';

import Image from 'next/image';
import { ArrowRight, Sparkles, CheckCircle2, Phone } from 'lucide-react';

const categories = [
  { name: 'Franchise',    desc: 'Own Your D-KOTTON Store',  number: '01', highlight: true  },
  { name: 'Wholesale',    desc: 'Bulk Supply Solutions',    number: '02', highlight: false },
  { name: 'Shop-in-Shop', desc: 'Retail Partnership',       number: '03', highlight: false },
  { name: 'Support',      desc: 'End-to-End Guidance',      number: '04', highlight: false },
];

const benefits = [
  'Zero Franchise Fee',
  '100% Refundable Deposit',
  'Complete Store Setup',
  'Direct Factory Supply',
  'Monthly Audits & Training',
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes slideRight {
          from { width: 0; }
          to   { width: 100%; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .hero-fade-1 { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0ms; }
        .hero-fade-2 { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 150ms; }
        .hero-fade-3 { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 300ms; }
        .hero-fade-4 { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 450ms; }
        .hero-fade-5 { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 600ms; }
        .hero-img    { animation: scaleIn 1s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 200ms; }
        .hero-cards  { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 700ms; }

        .float-anim  { animation: floatY 5s ease-in-out infinite; }
        .spin-ring   { animation: spinRing 18s linear infinite; }
        .pulse-dot   { animation: pulseDot 2s ease-in-out infinite; }

        .shimmer-text {
          background: linear-gradient(90deg, #8b5a2b 0%, #c8a96e 40%, #8b5a2b 60%, #c8a96e 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .card-hover {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.3s ease,
                      background 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(139,90,43,0.15);
          border-color: rgba(200,169,110,0.5);
          background: rgba(255,255,255,0.9);
        }

        .card-line {
          position: absolute;
          bottom: 0; left: 0;
          height: 2px; width: 0;
          background: linear-gradient(90deg, #c8a96e, #8b5a2b);
          transition: width 0.5s cubic-bezier(0.22,1,0.36,1);
          border-radius: 0 0 0 0;
        }
        .card-hover:hover .card-line { width: 100%; }

        .card-arrow {
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.3s, transform 0.3s;
        }
        .card-hover:hover .card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .btn-primary-hover {
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .btn-primary-hover:hover {
          background: #8b5a2b !important;
          box-shadow: 0 12px 40px rgba(139,90,43,0.4) !important;
          transform: translateY(-2px);
        }
        .btn-primary-hover:active { transform: scale(0.97); }

        .btn-secondary-hover {
          transition: all 0.3s ease;
        }
        .btn-secondary-hover:hover {
          border-color: rgba(139,90,43,0.6) !important;
          background: rgba(139,90,43,0.06) !important;
        }

        .benefit-item {
          opacity: 0;
          transform: translateX(-12px);
          animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both;
        }

        .img-overlay-hover {
          transition: transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .img-wrap:hover .img-overlay-hover {
          transform: scale(1.05);
        }

        .stat-divider {
          width: 1px;
          height: 36px;
          background: rgba(139,90,43,0.15);
          align-self: center;
        }

        .eyebrow-badge {
          transition: box-shadow 0.3s;
        }
        .eyebrow-badge:hover {
          box-shadow: 0 4px 20px rgba(200,169,110,0.2);
        }

        .highlight-card {
          background: linear-gradient(135deg, rgba(200,169,110,0.08), rgba(139,90,43,0.04)) !important;
          border-color: rgba(200,169,110,0.35) !important;
        }

        .float-tag {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .float-tag:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(139,90,43,0.2);
        }

        @media (max-width: 768px) {
          .hero-right-col { display: none; }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden bg-[#faf7f2] pt-24 md:pt-32 pb-16 w-full"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* ── Ambient background ── */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 70% 60% at 5% 15%, rgba(200,169,110,0.13) 0%, transparent 65%),
              radial-gradient(ellipse 55% 50% at 95% 85%, rgba(139,90,43,0.09) 0%, transparent 65%),
              radial-gradient(ellipse 40% 40% at 50% 50%, rgba(250,247,242,0.5) 0%, transparent 80%)
            `,
          }}
        />

        {/* Grain texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '180px 180px',
          }}
        />

        {/* Top accent line */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-[80px] h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.2) 15%, rgba(200,169,110,0.2) 85%, transparent)' }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

          {/* ── Main Grid ── */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 mb-20 md:mb-28">

            {/* ── LEFT: Copy ── */}
            <div className="flex flex-col items-start">

              {/* Eyebrow */}
              <div
                className="hero-fade-1 eyebrow-badge mb-7 flex items-center gap-2.5 rounded-full border border-[#c8a96e]/40 bg-white/70 px-5 py-2.5 shadow-sm backdrop-blur-sm cursor-default"
              >
                <div className="pulse-dot h-2 w-2 rounded-full bg-[#8b5a2b]" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b4423]">
                   Maharashtra&apos;s Premier Men's Fashion Brand
                </span>
              </div>

              {/* Headline */}
              <h1
                className="hero-fade-2 mb-5 text-[42px] font-bold leading-[1.07] tracking-tight text-[#1a1208] md:text-5xl lg:text-[58px]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Build Your Business<br />
                With{' '}
                <span className="shimmer-text"> Maharashtra&apos;s</span>
                <br />
                Fastest Growing<br />
                <span className="italic text-[#8b5a2b]">Menswear Brand</span>
              </h1>

              {/* Subheading */}
              <p
                className="hero-fade-3 mb-8 max-w-[460px] text-[17px] font-light leading-relaxed text-[#5c4033]"
                style={{ letterSpacing: '0.01em' }}
              >
                D-KOTTON Franchise —{' '}
                <strong className="font-semibold text-[#3d2314]">Zero Franchise Fee,</strong>{' '}
                100% Refundable Deposit, Complete Store Setup.
                Backed by Swami Textiles,  Maharashtra&apos;s trusted manufacturer.
              </p>

              {/* Benefits list */}
              <ul className="hero-fade-3 mb-9 flex flex-col gap-2.5">
                {benefits.map((b, i) => (
                  <li
                    key={b}
                    className="benefit-item flex items-center gap-3"
                    style={{ animationDelay: `${350 + i * 80}ms` }}
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8b5a2b]" />
                    <span className="text-sm font-medium text-[#4a3728]">{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="hero-fade-4 flex flex-wrap items-center gap-4 mb-12">
                <button
                  onClick={() => scrollToSection('franchise')}
                  className="btn-primary-hover group flex items-center gap-2.5 rounded-full bg-[#1a1208] px-8 py-4 text-sm font-semibold tracking-wide text-[#faf7f2] shadow-lg"
                >
                  Start Your Franchise Today
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <a
                  href="tel:+918087145570"
                  className="btn-secondary-hover flex items-center gap-2.5 rounded-full border border-[#8b5a2b]/30 bg-transparent px-8 py-4 text-sm font-semibold tracking-wide text-[#4a3728]"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Talk to Us — 8087145570
                </a>
              </div>

              {/* Stats strip */}
              <div className="hero-fade-5 flex items-center gap-6 border-t border-[#8b5a2b]/10 pt-8 w-full">
                {[
                  { value: '₹0',   label: 'Franchise Fee' },
                  { value: '100%', label: 'Deposit Refundable' },
                  { value: '300+', label: 'Sq.Ft to Start' },
                ].map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-6">
                    {i > 0 && <div className="stat-divider" />}
                    <div className="flex flex-col gap-1">
                      <span
                        className="text-2xl font-bold text-[#1a1208]"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {stat.value}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9b8070]">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Image ── */}
            <div className="hero-img hero-right-col relative flex justify-center lg:justify-end">

              {/* Spinning ring */}
              <div
                aria-hidden
                className="spin-ring absolute inset-0 m-auto"
                style={{
                  width: '88%',
                  maxWidth: '380px',
                  aspectRatio: '1',
                  borderRadius: '50%',
                  border: '1px dashed rgba(200,169,110,0.25)',
                }}
              />

              {/* Solid ring */}
              <div
                aria-hidden
                className="absolute inset-0 m-auto"
                style={{
                  width: '75%',
                  maxWidth: '320px',
                  aspectRatio: '1',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, rgba(200,169,110,0.12), rgba(139,90,43,0.04) 40%, rgba(200,169,110,0.12) 70%, rgba(139,90,43,0.04))',
                }}
              />

              {/* Float tag — top left */}
              <div
                className="float-anim float-tag absolute -left-4 top-10 z-20 hidden rounded-2xl border border-[#c8a96e]/30 bg-[#faf7f2]/95 px-5 py-3.5 shadow-xl backdrop-blur-md lg:block"
                style={{ animationDelay: '0s' }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#8b5a2b]">Quality</p>
                <p
                  className="mt-0.5 text-lg font-bold text-[#1a1208]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  100% Cotton
                </p>
              </div>

              {/* Float tag — bottom right */}
              <div
                className="float-anim float-tag absolute -right-4 bottom-14 z-20 hidden rounded-2xl border border-[#c8a96e]/30 bg-[#faf7f2]/95 px-5 py-3.5 shadow-xl backdrop-blur-md lg:block"
                style={{ animationDelay: '2.5s' }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#8b5a2b]">Backed By</p>
                <p
                  className="mt-0.5 text-lg font-bold text-[#1a1208]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Swami Textiles
                </p>
              </div>

              {/* Main image */}
              <div className="relative z-10 w-full max-w-[340px] sm:max-w-[400px]">
                <div
                  className="img-wrap relative overflow-hidden rounded-3xl border border-[#c8a96e]/20 shadow-[0_32px_80px_rgba(139,90,43,0.2)]"
                  style={{ aspectRatio: '4/5' }}
                >
                  <Image
                    src="https://res.cloudinary.com/demz8cf5k/image/upload/v1776613535/uploads/myrvvgipb6snhzyjm5xy.jpg"
                    alt="D-KOTTON Premium Men's Fashion"
                    fill
                    priority
                    className="img-overlay-hover object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    unoptimized
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/40 via-transparent to-transparent" />

                  {/* Bottom label inside image */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <div className="rounded-full bg-[#1a1208]/70 px-4 py-2 backdrop-blur-sm">
                      <span className="text-xs font-semibold tracking-widest text-[#c8a96e] uppercase">
                        D-KOTTON
                      </span>
                    </div>
                    <div className="rounded-full bg-[#faf7f2]/90 px-4 py-2 backdrop-blur-sm">
                      <span className="text-xs font-semibold tracking-wide text-[#4a3728]">
                        Premium Wear
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Category Cards ── */}
          <div className="hero-cards">
            {/* Section label */}
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#8b5a2b]/10" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9b8070]">
                Partnership Opportunities
              </span>
              <div className="h-px flex-1 bg-[#8b5a2b]/10" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((item, i) => (
                <div
                  key={item.name}
                  onClick={() => scrollToSection(item.name.toLowerCase().replace('-', ''))}
                  className={`card-hover relative cursor-pointer overflow-hidden rounded-2xl border p-6 backdrop-blur-sm ${
                    item.highlight
                      ? 'highlight-card'
                      : 'border-[#c8a96e]/20 bg-white/60'
                  }`}
                  style={{ animationDelay: `${750 + i * 80}ms` }}
                >
                  {/* Popular tag */}
                  {item.highlight && (
                    <div className="absolute right-4 top-4 rounded-full border border-[#c8a96e]/40 bg-[#c8a96e]/10 px-2.5 py-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#8b5a2b]">
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Number */}
                  <span
                    className="mb-4 block text-[42px] font-bold leading-none text-[#c8a96e]/20"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.number}
                  </span>

                  {/* Name */}
                  <p
                    className="mb-1 text-base font-bold tracking-tight text-[#1a1208]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.name}
                  </p>

                  {/* Desc */}
                  <p className="text-sm text-[#8b7060]">{item.desc}</p>

                  {/* Arrow */}
                  <div className="card-arrow absolute bottom-5 right-5 text-[#8b5a2b]">
                    <ArrowRight size={15} />
                  </div>

                  {/* Bottom line */}
                  <div className="card-line" />
                </div>
              ))}
            </div>

            {/* Bottom CTA banner */}
            <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#c8a96e]/20 bg-white/50 px-7 py-5 backdrop-blur-sm sm:flex-row">
              <div className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-[#8b5a2b]" />
                <p className="text-sm text-[#5c4033]">
                  <strong className="font-semibold text-[#1a1208]">Ready to get started?</strong>{' '}
                  Minimum 300 sq.ft space in a commercial area is all you need.
                </p>
              </div>
              <button
                onClick={() => scrollToSection('franchise')}
                className="btn-primary-hover flex shrink-0 items-center gap-2 rounded-full bg-[#1a1208] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#faf7f2] shadow-md"
              >
                Enquire Now <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}