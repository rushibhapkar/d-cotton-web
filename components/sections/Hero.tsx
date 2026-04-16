'use client';

import Image from 'next/image';
import { heroContent } from '@/data/content';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { name: 'Franchise',    desc: 'Own a D-Cotton Store',    number: '01' },
  { name: 'Wholesale',    desc: 'Bulk Supply Solutions',   number: '02' },
  { name: 'Shop-in-Shop', desc: 'Retail Partnership',      number: '03' },
  { name: 'Support',      desc: 'End-to-End Guidance',     number: '04' },
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#faf7f2] pt-28 md:pt-36 w-full"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Ambient background ─────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 50% at 10% 20%, rgba(200,169,110,0.12) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 90% 80%, rgba(139,90,43,0.08) 0%, transparent 70%)
          `,
        }}
      />

      {/* Subtle grain texture */}
<div
  aria-hidden
  className="pointer-events-none absolute inset-0 opacity-[0.025]"
  style={{
    // Using a direct link to the image file
    backgroundImage: `url("https://img.freepik.com/premium-photo/luxury-shopping-mall-department-clothing-store-interior_271317-1371.jpg")`,
    backgroundSize: '200px 200px',
  }}
/>

      {/* Horizontal rule — editorial accent */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-[88px] h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,90,43,0.15) 20%, rgba(139,90,43,0.15) 80%, transparent)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Main grid ──────────────────────────────────── */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Left — copy */}
          <div
            className="animate-fade-in-up flex flex-col items-start"
            style={{ animationDelay: '0ms' }}
          >
            {/* Eyebrow badge */}
            <div className="mb-8 flex items-center gap-2.5 rounded-full border border-[#c8a96e]/40 bg-[#c8a96e]/8 px-4 py-2 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#8b5a2b]" />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6b4423]">
                Premium Clothing Brand
              </span>
            </div>

            {/* Headline */}
            <h1
              className="mb-6 text-5xl font-bold leading-[1.08] tracking-tight text-[#1a1208] md:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {heroContent.title}
            </h1>

            {/* Tagline */}
            <p
              className="mb-5 max-w-md text-xl font-light leading-relaxed text-[#5c4033] md:text-2xl"
              style={{ letterSpacing: '0.01em' }}
            >
              {heroContent.tagline}
            </p>

            {/* Body */}
            <p className="mb-10 max-w-md text-base leading-relaxed text-[#7a6555]">
              {heroContent.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('opportunities')}
                className="group flex items-center gap-2.5 rounded-full bg-[#1a1208] px-8 py-4 text-sm font-semibold tracking-wide text-[#faf7f2] shadow-lg transition-all duration-300 hover:bg-[#8b5a2b] hover:shadow-[0_8px_30px_rgba(139,90,43,0.35)] active:scale-95"
              >
                {heroContent.cta.primary}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection('investment')}
                className="flex items-center gap-2 rounded-full border border-[#8b5a2b]/30 bg-transparent px-8 py-4 text-sm font-semibold tracking-wide text-[#4a3728] transition-all duration-300 hover:border-[#8b5a2b] hover:bg-[#8b5a2b]/5 active:scale-95"
              >
                {heroContent.cta.secondary}
              </button>
            </div>

            {/* Social proof strip */}
            <div className="mt-12 flex items-center gap-6 border-t border-[#8b5a2b]/10 pt-8">
              {[
                { value: '200+', label: 'Partners' },
                { value: '15+',  label: 'States' },
                { value: '98%',  label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="text-2xl font-bold text-[#1a1208]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-widest text-[#8b7060]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div
            className="animate-fade-in-up relative flex justify-center lg:justify-end"
            style={{ animationDelay: '150ms' }}
          >
            {/* Decorative ring */}
            <div
              aria-hidden
              className="absolute inset-0 m-auto aspect-square w-[85%] max-w-sm rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, rgba(200,169,110,0.15), rgba(139,90,43,0.05) 40%, rgba(200,169,110,0.15) 70%, rgba(139,90,43,0.05))',
              }}
            />

            {/* Floating label — editorial accent */}
            <div className="absolute -left-2 top-12 z-20 hidden rounded-xl border border-[#c8a96e]/30 bg-[#faf7f2]/90 px-4 py-3 shadow-xl backdrop-blur-sm lg:block">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#8b5a2b]">Est. Quality</p>
              <p
                className="text-lg font-bold text-[#1a1208]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                100% Cotton
              </p>
            </div>

            {/* Floating label — bottom right */}
            <div className="absolute -right-2 bottom-16 z-20 hidden rounded-xl border border-[#c8a96e]/30 bg-[#faf7f2]/90 px-4 py-3 shadow-xl backdrop-blur-sm lg:block">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#8b5a2b]">Nationwide</p>
              <p
                className="text-lg font-bold text-[#1a1208]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Delivery
              </p>
            </div>

            {/* Main image — rounded square, not circle -->
            {/* Bug fix: was aspect-square with rounded-full which clips image poorly on most product photos */}
<div className="relative z-10 w-full max-w-[340px] sm:max-w-[420px]">
  <div
    className="relative overflow-hidden rounded-3xl border border-[#c8a96e]/20 shadow-[0_24px_80px_rgba(139,90,43,0.18)]"
    style={{ aspectRatio: '4/5' }}
  >
    <Image
      // Replace with your preferred link from above
      src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop"
      alt="D-Cotton Premium Fabric"
      fill
      priority
      className="object-cover transition-transform duration-700 hover:scale-105"
      sizes="(max-width: 768px) 100vw, 420px"
      unoptimized // Add this if using an external URL in Next.js without configuring domains
    />
    {/* Warm tint overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/30 via-transparent to-transparent" />
  </div>
</div>
          </div>
        </div>

        {/* ── Category cards ──────────────────────────────── */}
        <div
          className="animate-fade-in-up mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-28"
          style={{ animationDelay: '300ms' }}
        >
          {categories.map((item, i) => (
            <div
              key={item.name}
              className="group cursor-pointer"
              style={{ animationDelay: `${400 + i * 80}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-[#c8a96e]/20 bg-white/60 p-6 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-[#c8a96e]/50 hover:bg-white/80 hover:shadow-[0_12px_40px_rgba(139,90,43,0.12)]">
                {/* Number accent */}
                <span
                  className="mb-4 block text-4xl font-bold text-[#c8a96e]/30 transition-colors duration-300 group-hover:text-[#c8a96e]/50"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.number}
                </span>

                <p
                  className="text-base font-bold tracking-tight text-[#1a1208] transition-colors duration-300 group-hover:text-[#8b5a2b]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-[#8b7060]">
                  {item.desc}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#c8a96e] to-[#8b5a2b] transition-all duration-400 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}