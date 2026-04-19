'use client';

import { useEffect, useRef, useState } from 'react';
import { Phone, FileText, Store, GraduationCap, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    number : '01',
    icon   : Phone,
    title  : 'Enquire',
    desc   : 'Call or WhatsApp us. Our team responds within 24 hours.',
    detail : 'No forms, no pressure — just a friendly conversation about your goals and location.',
    color  : '#c8a96e',
  },
  {
    number : '02',
    icon   : FileText,
    title  : 'Consultation',
    desc   : 'Free site visit and one-on-one business discussion.',
    detail : 'We visit your proposed location, assess footfall, and guide you on the best setup.',
    color  : '#8b5a2b',
  },
  {
    number : '03',
    icon   : FileText,
    title  : 'Agreement',
    desc   : 'Sign the franchise agreement — clear, simple, no hidden clauses.',
    detail : 'Transparent terms with zero franchise fee and 100% refundable deposit policy.',
    color  : '#c8a96e',
  },
  {
    number : '04',
    icon   : Store,
    title  : 'Store Setup',
    desc   : 'D-KOTTON team handles everything — interior to signboard.',
    detail : 'Complete turnkey setup: flooring, furniture, AC, lighting, branding — all done for you.',
    color  : '#8b5a2b',
  },
  {
    number : '05',
    icon   : GraduationCap,
    title  : 'Training',
    desc   : 'Full staff training and system walkthrough.',
    detail : 'Your team learns inventory management, customer handling, and display standards.',
    color  : '#c8a96e',
  },
  {
    number : '06',
    icon   : Rocket,
    title  : 'Launch',
    desc   : 'Grand opening with marketing support from HQ.',
    detail : 'Social media promotions, local campaigns, and ongoing monthly audits from day one.',
    color  : '#8b5a2b',
  },
];

export default function HowItWorks() {
  const sectionRef              = useRef<HTMLDivElement>(null);
  const [inView,  setInView]    = useState(false);
  const [mounted, setMounted]   = useState(false);
  const [active,  setActive]    = useState<number>(0);

  /* mount guard — prevents hydration mismatch */
  useEffect(() => { setMounted(true); }, []);

  /* intersection observer — only runs client-side after mount */
  useEffect(() => {
    if (!mounted) return;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [mounted]);

  const visible = mounted && inView;

  return (
    <>
      <style>{`
        @keyframes hiw-fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hiw-scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes hiw-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes hiw-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.75); }
        }
        @keyframes hiw-lineGrow {
          from { height: 0; }
          to   { height: 100%; }
        }

        .hiw-shimmer {
          background: linear-gradient(90deg,#8b5a2b 0%,#c8a96e 40%,#8b5a2b 60%,#c8a96e 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: hiw-shimmer 4s linear infinite;
        }

        .hiw-step {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.3s ease,
                      background 0.3s ease;
          cursor: pointer;
        }
        .hiw-step:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(139,90,43,0.13) !important;
          border-color: rgba(200,169,110,0.45) !important;
        }
        .hiw-step.active {
          border-color: rgba(200,169,110,0.5) !important;
          background: rgba(255,255,255,0.92) !important;
          box-shadow: 0 16px 48px rgba(139,90,43,0.15) !important;
        }

        .hiw-icon-ring {
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
        }
        .hiw-step:hover .hiw-icon-ring,
        .hiw-step.active .hiw-icon-ring {
          background: rgba(139,90,43,0.1) !important;
          border-color: rgba(139,90,43,0.25) !important;
          transform: scale(1.08);
        }

        .hiw-connector {
          position: absolute;
          top: 28px;
          left: calc(50% + 28px);
          right: calc(-50% + 28px);
          height: 1px;
          background: linear-gradient(90deg, rgba(200,169,110,0.5), rgba(200,169,110,0.15));
          pointer-events: none;
        }

        .hiw-detail {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s cubic-bezier(0.22,1,0.36,1),
                      opacity 0.35s ease,
                      margin-top 0.3s ease;
          opacity: 0;
          margin-top: 0;
        }
        .hiw-detail.open {
          max-height: 120px;
          opacity: 1;
          margin-top: 10px;
        }

        .hiw-cta-btn {
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .hiw-cta-btn:hover {
          background: #8b5a2b !important;
          box-shadow: 0 10px 32px rgba(139,90,43,0.38) !important;
          transform: translateY(-2px);
        }
        .hiw-cta-btn:active { transform: scale(0.97); }

        .hiw-phone-btn {
          transition: all 0.3s ease;
        }
        .hiw-phone-btn:hover {
          border-color: rgba(139,90,43,0.55) !important;
          background: rgba(139,90,43,0.05) !important;
        }

        .hiw-dot-pulse {
          animation: hiw-pulse 2s ease-in-out infinite;
        }
      `}</style>

      <section
        id="process"
        ref={sectionRef}
        className="relative overflow-hidden bg-[#faf7f2] py-20 md:py-28 w-full"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        suppressHydrationWarning
      >
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 65% 50% at 0% 50%, rgba(200,169,110,0.08) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 100% 50%, rgba(139,90,43,0.06) 0%, transparent 60%)
            `,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

          {/* ── Header ── */}
          <div
            className="mb-14 text-center"
            style={visible ? { animation: 'hiw-fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both' } : { opacity: 0 }}
          >
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#c8a96e]/40 bg-white/70 px-5 py-2.5 shadow-sm backdrop-blur-sm">
              <div className="hiw-dot-pulse h-2 w-2 rounded-full bg-[#8b5a2b]" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b4423]">
                Simple 6-Step Process
              </span>
            </div>

            <h2
              className="mb-4 font-bold tracking-tight text-[#1a1208]"
              style={{
                fontFamily  : "'Playfair Display', Georgia, serif",
                fontSize    : 'clamp(30px, 4vw, 48px)',
                lineHeight  : 1.1,
              }}
            >
              From First Call to{' '}
              <span className="hiw-shimmer">Grand Opening</span>
              <br />
              <span className="italic text-[#8b5a2b]">We Handle Everything</span>
            </h2>

            <p
              className="mx-auto max-w-lg text-[15px] font-light leading-relaxed text-[#6b5544]"
            >
              No guesswork. No surprises. Here's exactly what happens after
              you make that first call — step by step.
            </p>
          </div>

          {/* ── Steps grid ── */}
          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => {
              const Icon    = step.icon;
              const isActive = active === i;
              return (
                <div
                  key={step.number}
                  className={`hiw-step relative rounded-2xl border border-[#c8a96e]/20 bg-white/60 p-6 backdrop-blur-sm${isActive ? ' active' : ''}`}
                  style={
                    visible
                      ? {
                          animation      : `hiw-scaleIn 0.7s cubic-bezier(0.22,1,0.36,1) both`,
                          animationDelay : `${i * 100}ms`,
                        }
                      : { opacity: 0 }
                  }
                  onClick={() => setActive(isActive ? -1 : i)}
                >
                  {/* Step number — top right */}
                  <span
                    className="absolute right-5 top-5 font-bold"
                    style={{
                      fontFamily : "'Playfair Display', Georgia, serif",
                      fontSize   : 13,
                      color      : 'rgba(200,169,110,0.5)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="hiw-icon-ring mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      background  : 'rgba(139,90,43,0.06)',
                      border      : '1px solid rgba(139,90,43,0.12)',
                    }}
                  >
                    <Icon size={19} style={{ color: step.color }} />
                  </div>

                  {/* Title */}
                  <p
                    className="mb-2 text-base font-bold text-[#1a1208]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {step.title}
                  </p>

                  {/* Desc */}
                  <p className="text-sm leading-relaxed text-[#7a6555]">
                    {step.desc}
                  </p>

                  {/* Expandable detail */}
                  <div className={`hiw-detail${isActive ? ' open' : ''}`}>
                    <div
                      className="rounded-xl px-3 py-2.5"
                      style={{ background: 'rgba(200,169,110,0.07)', border: '1px solid rgba(200,169,110,0.18)' }}
                    >
                      <p className="text-xs leading-relaxed text-[#6b5544]">
                        ✦ {step.detail}
                      </p>
                    </div>
                  </div>

                  {/* Bottom line on active */}
                  <div
                    style={{
                      position   : 'absolute',
                      bottom     : 0,
                      left       : 0,
                      height     : 2,
                      width      : isActive ? '100%' : '0%',
                      background : `linear-gradient(90deg, ${step.color}, #8b5a2b)`,
                      borderRadius: '0 0 16px 16px',
                      transition : 'width 0.45s cubic-bezier(0.22,1,0.36,1)',
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* ── Timeline strip — compact ── */}
          <div
            className="mb-12 overflow-hidden rounded-2xl border border-[#c8a96e]/20 bg-white/50 backdrop-blur-sm"
            style={
              visible
                ? { animation: 'hiw-fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both', animationDelay: '650ms' }
                : { opacity: 0 }
            }
          >
            <div className="flex items-center overflow-x-auto px-6 py-5 gap-0">
              {steps.map((step, i) => (
                <div key={step.number} className="flex items-center" style={{ flexShrink: 0 }}>
                  {/* Node */}
                  <button
                    onClick={() => setActive(active === i ? -1 : i)}
                    className="flex flex-col items-center gap-1.5 px-3"
                    style={{ minWidth: 72 }}
                  >
                    <div
                      style={{
                        width       : 32,
                        height      : 32,
                        borderRadius: '50%',
                        background  : active === i ? '#8b5a2b' : 'rgba(139,90,43,0.08)',
                        border      : `1.5px solid ${active === i ? '#8b5a2b' : 'rgba(200,169,110,0.35)'}`,
                        display     : 'flex',
                        alignItems  : 'center',
                        justifyContent: 'center',
                        transition  : 'all 0.3s ease',
                        flexShrink  : 0,
                      }}
                    >
                      <span
                        style={{
                          fontFamily : "'Playfair Display', Georgia, serif",
                          fontSize   : 11,
                          fontWeight : 700,
                          color      : active === i ? 'white' : '#8b5a2b',
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize   : 10,
                        fontWeight : 600,
                        color      : active === i ? '#1a1208' : '#9b8070',
                        letterSpacing: '0.04em',
                        whiteSpace : 'nowrap',
                        transition : 'color 0.3s',
                      }}
                    >
                      {step.title}
                    </span>
                  </button>

                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        height     : 1,
                        width      : 32,
                        background : 'linear-gradient(90deg, rgba(200,169,110,0.5), rgba(200,169,110,0.15))',
                        flexShrink : 0,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Active step detail in strip */}
            {active >= 0 && active < steps.length && (
              <div
                className="border-t border-[#c8a96e]/15 px-6 py-4"
                style={{ background: 'rgba(200,169,110,0.04)' }}
              >
                <div className="flex items-start gap-3">
                  <div
                    style={{
                      width       : 6,
                      height      : 6,
                      borderRadius: '50%',
                      background  : '#8b5a2b',
                      marginTop   : 6,
                      flexShrink  : 0,
                    }}
                  />
                  <div>
                    <span
                      className="text-sm font-bold text-[#1a1208]"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      Step {steps[active].number} — {steps[active].title}:{' '}
                    </span>
                    <span className="text-sm text-[#6b5544]">{steps[active].detail}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── Compact CTA ── */}
          <div
            className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#c8a96e]/25 bg-white/60 px-8 py-6 backdrop-blur-sm sm:flex-row"
            style={
              visible
                ? {
                    animation     : 'hiw-fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both',
                    animationDelay: '750ms',
                    boxShadow     : '0 4px 24px rgba(139,90,43,0.07)',
                  }
                : { opacity: 0 }
            }
          >
            <div>
              <p
                className="mb-1 text-base font-bold text-[#1a1208]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Ready to take the first step?
              </p>
              <p className="text-sm text-[#7a6555]">
                One call is all it takes — our team handles the rest.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                className="hiw-cta-btn flex items-center gap-2 rounded-full bg-[#1a1208] px-6 py-3 text-sm font-semibold tracking-wide text-[#faf7f2] shadow-md"
              >
                Start Now
                <ArrowRight size={14} />
              </button>
              <a
                href="tel:+918087145570"
                className="hiw-phone-btn flex items-center gap-2 rounded-full border border-[#8b5a2b]/25 px-6 py-3 text-sm font-semibold text-[#4a3728]"
              >
                <Phone size={13} style={{ color: '#8b5a2b' }} />
                8087145570
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}