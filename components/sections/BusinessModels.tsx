'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Shield, Store, Wrench, BadgeCheck, TrendingUp, Phone } from 'lucide-react';

/* ── Data ─────────────────────────────────────────── */
const breakdown = [
  {
    label       : 'Shop Setup & Interior',
    amount      : '3,50,000',
    amountShort : '₹3.50 Lakh',
    icon        : Store,
    color       : '#8b5a2b',
    bg          : 'rgba(139,90,43,0.07)',
    border      : 'rgba(139,90,43,0.18)',
    includes    : ['Full interior design', 'Furniture & fixtures', 'AC installation', 'Signboard & branding', 'Lighting & flooring'],
    note        : 'Complete turnkey setup by D-KOTTON team',
  },
  {
    label       : 'Security Deposit',
    amount      : '7,50,000',
    amountShort : '₹7.50 Lakh',
    icon        : Shield,
    color       : '#c8a96e',
    bg          : 'rgba(200,169,110,0.07)',
    border      : 'rgba(200,169,110,0.25)',
    includes    : ['100% refundable', 'Returned on agreement end', 'Stock worth more than deposit', 'Zero risk on your capital', 'Exchange old stock anytime'],
    note        : 'Your money is safe — fully refundable',
    highlight   : true,
  },
  {
    label       : 'Franchise Fee',
    amount      : '0',
    amountShort : '₹0',
    icon        : BadgeCheck,
    color       : '#4a7c4e',
    bg          : 'rgba(74,124,78,0.06)',
    border      : 'rgba(74,124,78,0.18)',
    includes    : ['No hidden charges', 'No royalty fees', 'No GST on setup', 'No annual renewal fee', 'No marketing contribution'],
    note        : 'Zero. Nothing. Absolutely free.',
    isZero      : true,
  },
];

const perks = [
  { icon: Wrench,     label: 'Complete Setup',     desc: 'Interior, AC, flooring, signboard — all done by us' },
  { icon: TrendingUp, label: 'Marketing Support',  desc: 'Social media & local promotions managed by HQ' },
  { icon: Shield,     label: 'Stock Exchange',      desc: 'Swap non-moving inventory for fresh collections' },
  { icon: BadgeCheck, label: 'Training & Audits',   desc: 'Monthly system audits + full staff training' },
];
// At top of InvestmentSection component — add mounted state

/* ── Counter animation hook ────────────────────────── */
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

/* ── Intersection observer hook ────────────────────── */
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── Animated total ─────────────────────────────────── */
// ✅ FIXED
// ✅ FIXED — full replacement
function AnimatedTotal({ start }: { start: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const val = useCountUp(1100000, 2000, mounted && start);
  if (!mounted) return <span>₹11.00 Lakh</span>;
  return <span>₹{(val / 100000).toFixed(2)} Lakh</span>;
}

/* ── Main component ─────────────────────────────────── */
export default function InvestmentSection() {
  const [mounted, setMounted] = useState(false);
useEffect(() => { setMounted(true); }, []);
  const { ref: sectionRef, inView } = useInView(0.15);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @keyframes fadeUpInv {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInInv {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scaleInInv {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 100%; }
        }
        @keyframes shimmerInv {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pulseRing {
          0%   { box-shadow: 0 0 0 0 rgba(200,169,110,0.35); }
          70%  { box-shadow: 0 0 0 14px rgba(200,169,110,0); }
          100% { box-shadow: 0 0 0 0 rgba(200,169,110,0); }
        }
        @keyframes countFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }

        .inv-fade-1 { opacity:0; }
        .inv-fade-2 { opacity:0; }
        .inv-fade-3 { opacity:0; }
        .inv-fade-4 { opacity:0; }

        .inv-visible .inv-fade-1 { animation: fadeUpInv 0.8s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0ms; }
        .inv-visible .inv-fade-2 { animation: fadeUpInv 0.8s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 150ms; }
        .inv-visible .inv-fade-3 { animation: fadeUpInv 0.8s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 300ms; }
        .inv-visible .inv-fade-4 { animation: fadeUpInv 0.8s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 450ms; }

        .inv-card-0 { opacity:0; }
        .inv-card-1 { opacity:0; }
        .inv-card-2 { opacity:0; }
        .inv-visible .inv-card-0 { animation: scaleInInv 0.75s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 350ms; }
        .inv-visible .inv-card-1 { animation: scaleInInv 0.75s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 500ms; }
        .inv-visible .inv-card-2 { animation: scaleInInv 0.75s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 650ms; }

        .inv-perk-0, .inv-perk-1, .inv-perk-2, .inv-perk-3 { opacity: 0; }
        .inv-visible .inv-perk-0 { animation: fadeUpInv 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 800ms; }
        .inv-visible .inv-perk-1 { animation: fadeUpInv 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 900ms; }
        .inv-visible .inv-perk-2 { animation: fadeUpInv 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 1000ms; }
        .inv-visible .inv-perk-3 { animation: fadeUpInv 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 1100ms; }

        .inv-total { opacity: 0; }
        .inv-visible .inv-total { animation: fadeInInv 0.8s ease both; animation-delay: 750ms; }

        .inv-shimmer {
          background: linear-gradient(90deg, #8b5a2b 0%, #c8a96e 40%, #8b5a2b 60%, #c8a96e 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerInv 4s linear infinite;
        }

        .inv-card-wrap {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s cubic-bezier(0.22,1,0.36,1);
          cursor: pointer;
        }
        .inv-card-wrap:hover { transform: translateY(-8px); }

        .inv-card-hl {
          animation: pulseRing 2.5s ease-in-out infinite;
        }

        .inv-include-item {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 0;
          border-bottom: 1px solid rgba(139,90,43,0.07);
          transition: background 0.2s;
        }
        .inv-include-item:last-child { border-bottom: none; }

        .inv-dot {
          width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
        }

        .inv-perk-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.3s ease;
        }
        .inv-perk-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(139,90,43,0.13);
          border-color: rgba(200,169,110,0.5) !important;
        }

        .inv-total-bar {
          height: 4px;
          background: linear-gradient(90deg, #c8a96e, #8b5a2b, #c8a96e);
          border-radius: 2px;
          width: 0;
          transition: width 1.8s cubic-bezier(0.22,1,0.36,1);
        }
        .inv-visible .inv-total-bar { width: 100%; }

        .inv-zero-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(74,124,78,0.08);
          border: 1px solid rgba(74,124,78,0.2);
          border-radius: 100px;
          padding: 4px 12px;
          animation: countFloat 3s ease-in-out infinite;
        }

        .inv-cta-btn {
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .inv-cta-btn:hover {
          background: #8b5a2b !important;
          box-shadow: 0 12px 40px rgba(139,90,43,0.38) !important;
          transform: translateY(-2px);
        }
        .inv-cta-btn:active { transform: scale(0.97); }

        .inv-phone-btn {
          transition: all 0.3s ease;
        }
        .inv-phone-btn:hover {
          border-color: rgba(139,90,43,0.55) !important;
          background: rgba(139,90,43,0.05) !important;
        }

        .inv-amount-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(28px, 3vw, 38px);
          font-weight: 700;
          line-height: 1.1;
        }
      `}</style>

<section
  id="investment"
  ref={sectionRef}
  className={`relative overflow-hidden bg-[#faf7f2] py-24 md:py-32 w-full ${mounted && inView ? 'inv-visible' : ''}`}
  suppressHydrationWarning
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Background */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 50% at 100% 0%, rgba(200,169,110,0.09) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 0% 100%, rgba(139,90,43,0.06) 0%, transparent 60%)
          `,
        }} />

        {/* Grain */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.016]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat', backgroundSize: '180px 180px',
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

          {/* ── Header ── */}
          <div className="mb-16 text-center">
            <div className="inv-fade-1 mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#c8a96e]/40 bg-white/70 px-5 py-2.5 shadow-sm backdrop-blur-sm">
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#8b5a2b' }} />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b4423]">
                Investment Breakdown
              </span>
            </div>

            <h2
              className="inv-fade-2 mb-4 font-bold tracking-tight text-[#1a1208]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1 }}
            >
              Exactly What Your{' '}
              <span className="inv-shimmer">₹11 Lakh</span>
              <br />Covers — No Surprises
            </h2>

            <p className="inv-fade-3 mx-auto max-w-xl text-[16px] font-light leading-relaxed text-[#6b5544]">
              We believe in complete transparency. Here's a detailed breakdown of every rupee
              you invest — and why it's one of the safest business decisions you'll make.
            </p>

            {/* Divider */}
            <div className="inv-fade-4 mx-auto mt-8 flex items-center gap-4" style={{ maxWidth: 320 }}>
              <div className="h-px flex-1" style={{ background: 'rgba(200,169,110,0.3)' }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#c8a96e' }} />
              <div className="h-px flex-1" style={{ background: 'rgba(200,169,110,0.3)' }} />
            </div>
          </div>

          {/* ── Cards ── */}
          <div className="mb-16 grid gap-6 lg:grid-cols-3">
            {breakdown.map((item, i) => {
              const Icon = item.icon;
              const isActive = activeCard === i;
              return (
                <div
                  key={item.label}
                  className={`inv-card-wrap inv-card-${i} relative rounded-3xl border p-8 ${item.highlight ? 'inv-card-hl' : ''}`}
                  style={{
                    background: item.bg,
                    borderColor: isActive ? item.color : item.border,
                    boxShadow: isActive
                      ? `0 24px 60px rgba(139,90,43,0.18), 0 4px 16px rgba(139,90,43,0.08)`
                      : `0 4px 24px rgba(139,90,43,0.06)`,
                  }}
                  onClick={() => setActiveCard(isActive ? null : i)}
                >
                  {/* Highlight ribbon */}
                  {item.highlight && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1"
                      style={{ background: '#c8a96e', boxShadow: '0 4px 16px rgba(200,169,110,0.4)' }}
                    >
                      <span className="text-[11px] font-bold uppercase tracking-widest text-white">
                        100% Refundable
                      </span>
                    </div>
                  )}

                  {/* Icon row */}
                  <div className="mb-6 flex items-start justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                    >
                      <Icon size={22} style={{ color: item.color }} />
                    </div>

                    {item.isZero && (
                      <div className="inv-zero-badge">
                        <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#4a7c4e' }} />
                        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4a7c4e' }}>
                          FREE
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Amount */}
                  <div className="mb-2">
                    <div
                      className="inv-amount-num"
                      style={{ color: item.isZero ? '#4a7c4e' : item.color }}
                    >
                      {item.isZero ? '₹ Zero' : `₹ ${item.amount}`}
                    </div>
                  </div>

                  {/* Label */}
                  <p
                    className="mb-5 text-lg font-bold text-[#1a1208]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.label}
                  </p>

                  {/* Includes list */}
                  <div className="mb-5">
                    {item.includes.map((inc) => (
                      <div key={inc} className="inv-include-item">
                        <div className="inv-dot" style={{ background: item.color }} />
                        <span className="text-sm text-[#4a3728]">{inc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Note */}
                  <div
                    className="rounded-xl px-4 py-3"
                    style={{ background: `${item.color}09`, border: `1px solid ${item.color}18` }}
                  >
                    <p className="text-xs font-semibold" style={{ color: item.color }}>
                      ✦ {item.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Total bar ── */}
          <div className="inv-total mb-16 overflow-hidden rounded-3xl border border-[#c8a96e]/25 bg-white/60 backdrop-blur-sm" style={{ boxShadow: '0 8px 40px rgba(139,90,43,0.08)' }}>

            {/* Gold top bar */}
            <div className="inv-total-bar" />

<div className="grid gap-8 p-8 md:grid-cols-3 md:divide-x divide-[#c8a96e]/20">

              {/* Total amount */}
              <div className="flex flex-col items-center justify-center text-center md:border-r md:border-[#c8a96e]/15">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#9b8070]">
                  Total Investment
                </p>
                <div
                  className="mb-1 font-bold text-[#1a1208]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1 }}
                >
<AnimatedTotal start={inView} />
                </div>
                <p className="text-xs text-[#9b8070]">One-time startup cost</p>
              </div>

              {/* What you get */}
              <div className="flex flex-col justify-center px-4 md:border-r md:border-[#c8a96e]/15">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#9b8070]">
                  What You Get
                </p>
                {[
                  { label: 'Shop Setup', value: '₹3.50L', bar: 32 },
                  { label: 'Security Deposit', value: '₹7.50L', bar: 68 },
                  { label: 'Franchise Fee', value: '₹0', bar: 0, isZero: true },
                ].map((row) => (
                  <div key={row.label} className="mb-3">
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-[#4a3728]">{row.label}</span>
                      <span
                        className="text-sm font-bold"
                        style={{ color: row.isZero ? '#4a7c4e' : '#8b5a2b' }}
                      >
                        {row.value}
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e8ddd4]">
                      <div
                        className="h-full rounded-full"
                        style={{
                       width: mounted && inView ? `${row.bar}%` : '0%',

                          background: row.isZero ? '#4a7c4e' : 'linear-gradient(90deg, #c8a96e, #8b5a2b)',
                          transition: `width 1.5s cubic-bezier(0.22,1,0.36,1) ${row.isZero ? '1.2s' : '1s'}`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Key insight */}
              <div className="flex flex-col justify-center px-4">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#9b8070]">
                  The Smart Part
                </p>
                <div
                  className="mb-3 rounded-2xl p-4"
                  style={{ background: 'rgba(200,169,110,0.08)', border: '1px solid rgba(200,169,110,0.2)' }}
                >
                  <p className="text-sm font-semibold text-[#1a1208] leading-relaxed">
                    ₹7.50 Lakh of your investment is a <span style={{ color: '#8b5a2b' }}>100% refundable deposit</span> — not an expense.
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-[#7a6555]">
                  Your actual non-refundable investment is just ₹3.50 Lakh for a complete, ready-to-run branded store.
                </p>
              </div>
            </div>
          </div>

          {/* ── Perks ── */}
          <div className="mb-14">
            <p className="inv-fade-3 mb-6 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#9b8070]">
              Also Included — At No Extra Cost
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={perk.label}
                    className={`inv-perk-card inv-perk-${i} rounded-2xl border border-[#c8a96e]/20 bg-white/60 p-5 backdrop-blur-sm`}
                  >
                    <div
                      className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: 'rgba(139,90,43,0.07)', border: '1px solid rgba(139,90,43,0.12)' }}
                    >
                      <Icon size={18} style={{ color: '#8b5a2b' }} />
                    </div>
                    <p
                      className="mb-1.5 text-sm font-bold text-[#1a1208]"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {perk.label}
                    </p>
                    <p className="text-xs leading-relaxed text-[#8b7060]">{perk.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── CTA ── */}
          <div
            className="inv-total overflow-hidden rounded-3xl p-8 text-center md:p-12"
            style={{
              background: 'linear-gradient(135deg, #1a1208 0%, #2d1f0f 50%, #1a1208 100%)',
              boxShadow: '0 24px 80px rgba(26,18,8,0.25)',
            }}
          >
            {/* Glow */}
            <div aria-hidden style={{
              position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
              width: '60%', height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.6), transparent)',
            }} />

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: '#c8a96e' }}>
              Ready to Invest?
            </p>
            <h3
              className="mb-4 font-bold text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.2 }}
            >
              Start Your D-KOTTON Journey Today
            </h3>
            <p className="mx-auto mb-8 max-w-md text-sm font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Our team will walk you through every detail — site selection, setup timeline, and stock planning. No pressure, just clarity.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                className="inv-cta-btn flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-lg"
                style={{ background: '#8b5a2b', boxShadow: '0 8px 32px rgba(139,90,43,0.4)' }}
              >
                Apply for Franchise
                <ArrowRight size={16} />
              </button>
              <a
                href="tel:+918087145570"
                className="inv-phone-btn flex items-center gap-2.5 rounded-full border px-8 py-4 text-sm font-semibold tracking-wide"
                style={{ borderColor: 'rgba(200,169,110,0.3)', color: '#c8a96e' }}
              >
                <Phone size={14} />
                8087145570
              </a>
            </div>

            {/* Trust note */}
            <p className="mt-6 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              ✦ No obligation · Free consultation · Response within 24 hours
            </p>
          </div>

        </div>
      </section>
    </>
  );
}