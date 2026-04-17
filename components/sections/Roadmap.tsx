'use client';

import { roadmapData } from '@/data/content';
import { CircleCheck as CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Roadmap() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          roadmapData.steps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps(prev => {
  if (prev.includes(index)) return prev;
  return [...prev, index];
});
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#120d07] py-24 md:py-32"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 50% 60% at 0%   30%, rgba(200,169,110,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 100% 70%, rgba(139,90,43,0.09)  0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 50%  50%, rgba(200,169,110,0.04) 0%, transparent 70%)
          `,
        }}
      />

      {/* Top divider */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.20) 30%, rgba(200,169,110,0.20) 70%, transparent)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#c8a96e]">
            Your Journey
          </p>
          <h2
            className="mb-5 text-4xl font-bold leading-tight tracking-tight text-[#faf7f2] md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {roadmapData.title}
          </h2>
          <p className="mx-auto max-w-xl text-lg font-light text-[#a89585]">
            {roadmapData.subtitle}
          </p>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#c8a96e]/60" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#c8a96e]" />
            <div className="h-px w-6 bg-[#c8a96e]/30" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Centre spine — desktop only */}
          <div
            aria-hidden
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,169,110,0.25) 10%, rgba(200,169,110,0.25) 90%, transparent)' }}
          />

          {/* Left spine — mobile only */}
          <div
            aria-hidden
            className="absolute left-6 top-0 h-full w-px md:hidden"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,169,110,0.25) 5%, rgba(200,169,110,0.25) 95%, transparent)' }}
          />

          <div className="space-y-10 md:space-y-0">
            {roadmapData.steps.map((step, index) => {
              const isVisible = visibleSteps.includes(index);
              const isEven    = index % 2 === 0;

              return (
                <div
                  key={step.day}
                  className="relative flex items-start md:mb-12 md:items-center"
                >
                  {/* ── Desktop layout ── */}
                  {/* Content pane */}
                  <div
                    className={`hidden w-5/12 md:block ${isEven ? 'pr-14 text-right' : 'order-last pl-14 text-left'}`}
                  >
                    <div
                      className={`inline-block rounded-2xl border border-[#c8a96e]/15 bg-[#1a1208]/80 p-7 backdrop-blur-sm transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Day badge */}
                      <div className={`mb-4 flex ${isEven ? 'justify-end' : 'justify-start'}`}>
                        <span className="inline-flex items-center rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#c8a96e]">
                          {step.day}
                        </span>
                      </div>

                      <h3
                        className="mb-2 text-xl font-bold text-[#faf7f2]"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {step.title}
                      </h3>
                      <p className="mb-5 text-sm leading-relaxed text-[#a89585]">
                        {step.description}
                      </p>

                      <ul className="space-y-2">
                        {step.tasks.map((task, ti) => (
                          <li
                            key={ti}
                            className={`flex items-start gap-2 ${isEven ? 'justify-end' : 'justify-start'} transition-all duration-500 ${
                              isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? 'translate-x-3' : '-translate-x-3'}`
                            }`}
                            style={{ transitionDelay: `${index * 100 + ti * 80}ms` }}
                          >
                            {!isEven && <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#c8a96e]" />}
                            <span className="text-xs text-[#8a7565]">{task}</span>
                            {isEven  && <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#c8a96e]" />}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Centre node — desktop */}
                  <div className="relative hidden w-2/12 justify-center md:flex">
                    <div
                      className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#c8a96e]/40 bg-[#1a1208] shadow-[0_0_0_6px_rgba(26,18,8,1)] transition-all duration-700 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <span
                        className="text-lg font-bold text-[#c8a96e]"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Spacer for the other side — desktop */}
                  <div className={`hidden w-5/12 md:block ${!isEven ? 'pr-14' : 'order-last pl-14'}`} />

                  {/* ── Mobile layout ── */}
                  <div className="flex w-full items-start gap-5 md:hidden">
                    {/* Mobile node */}
                    <div
                      className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#c8a96e]/40 bg-[#1a1208] shadow-[0_0_0_4px_rgba(18,13,7,1)] transition-all duration-700 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <span
                        className="text-sm font-bold text-[#c8a96e]"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {index + 1}
                      </span>
                    </div>

                    {/* Mobile content */}
                    <div
                      className={`flex-1 rounded-2xl border border-[#c8a96e]/15 bg-[#1a1208]/80 p-6 backdrop-blur-sm transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <span className="mb-3 inline-flex items-center rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#c8a96e]">
                        {step.day}
                      </span>
                      <h3
                        className="mb-2 mt-3 text-lg font-bold text-[#faf7f2]"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {step.title}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-[#a89585]">
                        {step.description}
                      </p>
                      <ul className="space-y-1.5">
                        {step.tasks.map((task, ti) => (
                          <li key={ti} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#c8a96e]" />
                            <span className="text-xs text-[#8a7565]">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA banner */}
        <div
          className={`mx-auto mt-20 max-w-2xl text-center transition-all duration-700 ${
            visibleSteps.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: `${roadmapData.steps.length * 100 + 200}ms` }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-[#c8a96e]/25 bg-[#1a1208] px-10 py-10">
            {/* Glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(ellipse 70% 60% at 50% 100%, rgba(200,169,110,0.10) 0%, transparent 70%)`,
              }}
            />
            <p
              className="relative z-10 mb-2 text-2xl font-bold text-[#faf7f2] md:text-3xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ready to Get Started?
            </p>
            <p className="relative z-10 mb-6 text-sm text-[#a89585]">
              Join our growing network of successful franchise partners
            </p>
            <button
              onClick={() => {
                const el = document.getElementById('apply');
                if (!el) return;
                window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior: 'smooth' });
              }}
              className="relative z-10 inline-flex items-center gap-2.5 rounded-xl border border-[#c8a96e]/40 bg-[#c8a96e]/10 px-8 py-3.5 text-sm font-semibold tracking-wide text-[#faf7f2] transition-all duration-300 hover:border-[#c8a96e] hover:bg-[#c8a96e]/20 active:scale-95"
            >
              Apply Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}