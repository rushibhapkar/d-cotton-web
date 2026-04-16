'use client';

import { franchiseData } from '@/data/content';
import * as Icons from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

export default function Franchise() {
  return (
    <section
      id="opportunities"
      className="relative overflow-hidden bg-[#faf7f2] py-24 md:py-32"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Ambient background ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 55% 45% at 95% 10%, rgba(200,169,110,0.10) 0%, transparent 65%),
            radial-gradient(ellipse 45% 40% at 5%  90%, rgba(139,90,43,0.07)  0%, transparent 65%)
          `,
        }}
      />

      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="mb-16 max-w-2xl md:mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#8b5a2b]">
            Partnership Opportunities
          </p>
          <h2
            className="mb-5 text-4xl font-bold leading-tight tracking-tight text-[#1a1208] md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {franchiseData.title}
          </h2>
          <p className="text-lg font-light leading-relaxed text-[#7a6555]">
            {franchiseData.subtitle}
          </p>
          {/* Decorative rule */}
          <div className="mt-8 flex items-center gap-3">
            <div className="h-px w-12 bg-[#c8a96e]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#c8a96e]" />
            <div className="h-px w-6 bg-[#c8a96e]/40" />
          </div>
        </div>

        {/* ── Investment details ── */}
        <div id="investment" className="mb-24">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8b5a2b]">
            Investment Overview
          </p>
          <h3
            className="mb-10 text-2xl font-bold text-[#1a1208] md:text-3xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {franchiseData.investment.title}
          </h3>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {franchiseData.investment.details.map((item, index) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-[#c8a96e]/20 bg-white/70 p-6 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-[#c8a96e]/50 hover:shadow-[0_16px_48px_rgba(139,90,43,0.12)]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Index accent */}
                <span
                  className="mb-4 block text-5xl font-bold text-[#c8a96e]/20 transition-colors duration-300 group-hover:text-[#c8a96e]/35"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#8b7060]">
                  {item.label}
                </p>
                <p
                  className="mb-2 text-3xl font-bold text-[#1a1208]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.value}
                </p>
                <p className="text-sm leading-relaxed text-[#8b7060]">
                  {item.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#c8a96e] to-[#8b5a2b] transition-all duration-400 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Benefits ── */}
        <div>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8b5a2b]">
                Why Partner With Us
              </p>
              <h3
                className="text-2xl font-bold text-[#1a1208] md:text-3xl"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Benefits of Partnership
              </h3>
            </div>
            {/* Decorative rule right-aligned */}
            <div className="hidden items-center gap-3 md:flex">
              <div className="h-px w-6 bg-[#c8a96e]/40" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#c8a96e]" />
              <div className="h-px w-12 bg-[#c8a96e]" />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {franchiseData.benefits.map((benefit, index) => {
              const IconComponent = Icons[benefit.icon as keyof typeof Icons] as LucideIcon;

              return (
                <div
                  key={benefit.title}
                  className="group relative overflow-hidden rounded-2xl border border-[#c8a96e]/15 bg-white/60 p-7 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-[#c8a96e]/40 hover:bg-white/80 hover:shadow-[0_16px_48px_rgba(139,90,43,0.10)]"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#c8a96e]/30 bg-[#c8a96e]/8 transition-all duration-300 group-hover:border-[#c8a96e]/60 group-hover:bg-[#c8a96e]/15">
                    <IconComponent className="h-5 w-5 text-[#8b5a2b]" />
                  </div>

                  <h4
                    className="mb-2.5 text-lg font-bold tracking-tight text-[#1a1208] transition-colors duration-300 group-hover:text-[#8b5a2b]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {benefit.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[#7a6555]">
                    {benefit.description}
                  </p>

                  {/* Corner accent */}
                  <div
                    aria-hidden
                    className="absolute right-0 top-0 h-16 w-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: 'radial-gradient(circle at top right, rgba(200,169,110,0.15), transparent 70%)',
                    }}
                  />
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#c8a96e] to-[#8b5a2b] transition-all duration-400 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}