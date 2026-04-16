'use client';

import { wholesaleData, shopInShopData } from '@/data/content';
import { CircleCheck as CheckCircle2, ArrowRight, Store, Package } from 'lucide-react';

export default function BusinessModels() {
  const scrollToApply = () => {
    const el = document.getElementById('apply');
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <section
      className="relative overflow-hidden bg-[#f5f0e8] py-24 md:py-32"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Ambient background ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 50% 50% at 0%   50%, rgba(139,90,43,0.07)  0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 100% 50%, rgba(200,169,110,0.09) 0%, transparent 70%)
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
        <div className="mb-16 md:mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#8b5a2b]">
            More Ways to Partner
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2
              className="text-4xl font-bold leading-tight tracking-tight text-[#1a1208] md:text-5xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              More Partnership Models
            </h2>
            <p className="max-w-sm text-base font-light text-[#7a6555]">
              Choose the model that fits your goals and investment capacity
            </p>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="h-px w-12 bg-[#c8a96e]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#c8a96e]" />
            <div className="h-px w-6 bg-[#c8a96e]/40" />
          </div>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Wholesale card */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#c8a96e]/20 bg-white/70 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#c8a96e]/45 hover:shadow-[0_24px_64px_rgba(139,90,43,0.13)] md:p-10">

            {/* Header */}
            <div className="mb-8 flex items-start gap-5">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-[#c8a96e]/30 bg-[#c8a96e]/10 transition-all duration-300 group-hover:bg-[#c8a96e]/20">
                <Package className="h-6 w-6 text-[#8b5a2b]" />
              </div>
              <div>
                <h3
                  className="text-2xl font-bold tracking-tight text-[#1a1208] md:text-3xl"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {wholesaleData.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#7a6555]">
                  {wholesaleData.subtitle}
                </p>
              </div>
            </div>

            {/* Benefits list */}
            <div className="mb-8 space-y-3">
              {wholesaleData.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-[#c8a96e]/6"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#8b5a2b]" />
                  <span className="text-sm leading-relaxed text-[#4a3728]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={scrollToApply}
              className="group/btn flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#1a1208] px-6 py-4 text-sm font-semibold tracking-wide text-[#faf7f2] transition-all duration-300 hover:bg-[#8b5a2b] hover:shadow-[0_8px_24px_rgba(139,90,43,0.30)] active:scale-[0.98]"
            >
              Apply for Wholesale
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>

            {/* Decorative corner */}
            <div
              aria-hidden
              className="absolute right-0 top-0 h-24 w-24 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
              style={{ background: 'radial-gradient(circle at top right, rgba(200,169,110,0.18), transparent 70%)' }}
            />
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#c8a96e] to-[#8b5a2b] transition-all duration-500 group-hover:w-full" />
          </div>

          {/* Shop-in-Shop card */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#c8a96e]/20 bg-white/70 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#c8a96e]/45 hover:shadow-[0_24px_64px_rgba(139,90,43,0.13)] md:p-10">

            {/* Header */}
            <div className="mb-8 flex items-start gap-5">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-[#c8a96e]/30 bg-[#c8a96e]/10 transition-all duration-300 group-hover:bg-[#c8a96e]/20">
                <Store className="h-6 w-6 text-[#8b5a2b]" />
              </div>
              <div>
                <h3
                  className="text-2xl font-bold tracking-tight text-[#1a1208] md:text-3xl"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {shopInShopData.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#7a6555]">
                  {shopInShopData.subtitle}
                </p>
              </div>
            </div>

            {/* Features grid */}
            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {shopInShopData.features.map((feature, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#c8a96e]/15 bg-[#faf7f2]/60 p-4 transition-all duration-300 hover:border-[#c8a96e]/35 hover:bg-[#faf7f2]/90"
                >
                  <h4 className="mb-1 text-sm font-bold text-[#1a1208]">{feature.title}</h4>
                  <p className="text-xs leading-relaxed text-[#7a6555]">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={scrollToApply}
              className="group/btn flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#1a1208] px-6 py-4 text-sm font-semibold tracking-wide text-[#faf7f2] transition-all duration-300 hover:bg-[#8b5a2b] hover:shadow-[0_8px_24px_rgba(139,90,43,0.30)] active:scale-[0.98]"
            >
              Apply for Shop-in-Shop
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>

            {/* Decorative corner */}
            <div
              aria-hidden
              className="absolute right-0 top-0 h-24 w-24 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
              style={{ background: 'radial-gradient(circle at top right, rgba(200,169,110,0.18), transparent 70%)' }}
            />
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#c8a96e] to-[#8b5a2b] transition-all duration-500 group-hover:w-full" />
          </div>
        </div>

        {/* ── Consultation banner ── */}
        <div className="relative mt-10 overflow-hidden rounded-3xl bg-[#1a1208] px-8 py-12 md:px-14 md:py-14">

          {/* Background texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse 60% 80% at 0%   50%, rgba(200,169,110,0.12) 0%, transparent 60%),
                radial-gradient(ellipse 50% 60% at 100% 50%, rgba(139,90,43,0.18)  0%, transparent 60%)
              `,
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="max-w-lg">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c8a96e]">
                Not sure where to start?
              </p>
              <h3
                className="mb-3 text-2xl font-bold text-[#faf7f2] md:text-3xl"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Not Sure Which Model is Right for You?
              </h3>
              <p className="text-sm leading-relaxed text-[#a89585]">
                Our team will help you choose the best partnership model based on your
                investment capacity, location, and business goals.
              </p>
            </div>

            <button
              onClick={scrollToApply}
              className="group flex flex-shrink-0 items-center gap-3 rounded-xl border border-[#c8a96e]/40 bg-[#c8a96e]/10 px-8 py-4 text-sm font-semibold tracking-wide text-[#faf7f2] transition-all duration-300 hover:border-[#c8a96e] hover:bg-[#c8a96e]/20 active:scale-95"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}