'use client';

import { statsData } from '@/data/content';
import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#1a1208] py-20 md:py-24"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 80% at 15% 50%, rgba(200,169,110,0.08) 0%, transparent 65%),
            radial-gradient(ellipse 60% 80% at 85% 50%, rgba(139,90,43,0.10) 0%, transparent 65%)
          `,
        }}
      />

      {/* Top + bottom dividers */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.25) 30%, rgba(200,169,110,0.25) 70%, transparent)' }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.15) 30%, rgba(200,169,110,0.15) 70%, transparent)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-0">
          {statsData.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Vertical divider between items (desktop) */}
              <div className="relative w-full">
                {index !== 0 && (
                  <div
                    aria-hidden
                    className="absolute -left-px top-1/2 hidden h-12 w-px -translate-y-1/2 bg-[#c8a96e]/15 md:block"
                  />
                )}

                {/* Value */}
                <div className="mb-2 flex items-end justify-center gap-0.5">
                  <span
                    className="text-5xl font-bold leading-none text-[#faf7f2] md:text-6xl"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span
                      className="mb-1 text-3xl font-bold text-[#c8a96e] md:text-4xl"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Decorative dot */}
                <div className="mx-auto mb-3 h-0.5 w-8 rounded-full bg-[#c8a96e]/50" />

                {/* Label */}
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a89585]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}