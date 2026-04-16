'use client';

import { testimonialsData } from '@/data/content';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden bg-[#faf7f2] py-24 md:py-32"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 55% 45% at 5%  20%, rgba(200,169,110,0.10) 0%, transparent 65%),
            radial-gradient(ellipse 45% 40% at 95% 80%, rgba(139,90,43,0.07)  0%, transparent 65%)
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

        {/* Header */}
        <div className="mb-16 max-w-xl md:mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#8b5a2b]">
            Partner Voices
          </p>
          <h2
            className="mb-5 text-4xl font-bold leading-tight tracking-tight text-[#1a1208] md:text-5xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Success Stories
          </h2>
          <p className="text-lg font-light leading-relaxed text-[#7a6555]">
            Hear from our successful partners across India
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="h-px w-12 bg-[#c8a96e]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#c8a96e]" />
            <div className="h-px w-6 bg-[#c8a96e]/40" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group animate-fade-in-up relative overflow-hidden rounded-3xl border border-[#c8a96e]/20 bg-white/70 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#c8a96e]/45 hover:shadow-[0_20px_56px_rgba(139,90,43,0.12)]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Giant quote mark — decorative */}
              <div
                aria-hidden
                className="pointer-events-none absolute right-5 top-4 opacity-[0.055] transition-opacity duration-300 group-hover:opacity-[0.09]"
              >
                <Quote
                  className="h-20 w-20 text-[#8b5a2b]"
                  strokeWidth={1}
                />
              </div>

              {/* Stars */}
              <div className="mb-5 flex gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#c8a96e] text-[#c8a96e]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="relative z-10 mb-8 text-sm leading-relaxed text-[#4a3728] md:text-base">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-[#c8a96e]/15 pt-6">
                {/* Monogram avatar */}
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10">
                  <span
                    className="text-base font-bold text-[#8b5a2b]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p
                    className="text-base font-bold text-[#1a1208]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {testimonial.name}
                  </p>
                  <p className="text-xs font-semibold text-[#8b5a2b]">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-[#8b7060]">{testimonial.location}</p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#c8a96e] to-[#8b5a2b] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}