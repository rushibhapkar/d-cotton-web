'use client';

import { useEffect, useRef, useState } from 'react';

const row1 = [
  '✦ Zero Franchise Fee',
  '✦ 100% Refundable Deposit',
  '✦ Complete Store Setup',
  '✦ Factory Direct Pricing',
  '✦ Marketing Support from HQ',
  '✦ No Hidden Charges',
  '✦ Zero GST on Setup',
  '✦ Monthly Audits Included',
];

const row2 = [
  '◆ Backed by Swami Textiles',
  "◆ Maharashtra's Own Brand",
  '◆ Premium 100% Cotton',
  '◆ Stock Exchange Policy',
  '◆ Full Staff Training',
  '◆ Direct Warehouse Supply',
  '◆ No Royalty Fees',
  '◆ Social Media Marketing',
];

const pills = [
  { label: 'Franchise Fee',      value: '₹0',   color: '#4a7c4e', bg: 'rgba(74,124,78,0.07)',   border: 'rgba(74,124,78,0.2)'    },
  { label: 'Deposit Refundable', value: '100%',  color: '#8b5a2b', bg: 'rgba(139,90,43,0.07)',  border: 'rgba(139,90,43,0.2)'   },
  { label: 'Setup by Brand',     value: 'Full',  color: '#c8a96e', bg: 'rgba(200,169,110,0.08)', border: 'rgba(200,169,110,0.25)' },
  { label: 'Response Time',      value: '24hr',  color: '#8b5a2b', bg: 'rgba(139,90,43,0.07)',  border: 'rgba(139,90,43,0.2)'   },
];

/* ── Ticker strip ─────────────────────────────────── */
function TickerStrip({ items, direction, speed }: { items: string[]; direction: 'left' | 'right'; speed: number }) {
  const tripled = [...items, ...items, ...items];
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div style={{
        display    : 'flex',
        width      : 'max-content',
        animation  : `wdk-ticker-${direction} ${speed}s linear infinite`,
        willChange : 'transform',
      }}>
        {tripled.map((item, i) => (
          <span key={i} style={{
            display      : 'inline-flex',
            alignItems   : 'center',
            padding      : '0 28px',
            fontSize     : 13,
            fontWeight   : 600,
            letterSpacing: '0.04em',
            whiteSpace   : 'nowrap',
            color        : direction === 'left' ? '#8b5a2b' : '#c8a96e',
            borderRight  : '1px solid rgba(200,169,110,0.15)',
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Main ─────────────────────────────────────────── */
export default function WhyDKotton() {
  const sectionRef            = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [inView,  setInView]  = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [mounted]);

  const vis = mounted && inView;

  const fadeStyle = (delay: number) =>
    vis
      ? { animation: `wdk-fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both`, animationDelay: `${delay}ms` }
      : { opacity: 0 as const };

  return (
    <>
      <style>{`
        @keyframes wdk-ticker-left  { from { transform:translateX(0) }         to { transform:translateX(-33.333%) } }
        @keyframes wdk-ticker-right { from { transform:translateX(-33.333%) }  to { transform:translateX(0) } }
        @keyframes wdk-fadeUp  { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
        @keyframes wdk-shimmer { 0% { background-position:-200% center } 100% { background-position:200% center } }
        @keyframes wdk-pulse   { 0%,100% { opacity:1; transform:scale(1) } 50% { opacity:.5; transform:scale(.75) } }
        @keyframes wdk-float   { 0%,100% { transform:translateY(0) }  50% { transform:translateY(-5px) } }

        .wdk-shimmer {
          background: linear-gradient(90deg,#8b5a2b 0%,#c8a96e 35%,#8b5a2b 55%,#c8a96e 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: wdk-shimmer 4s linear infinite;
        }
        .wdk-pulse  { animation: wdk-pulse 2s ease-in-out infinite; }
        .wdk-float  { animation: wdk-float 4s ease-in-out infinite; }

        .wdk-ticker-wrap:hover .wdk-ticker-inner { animation-play-state: paused !important; }

        .wdk-btn-p { transition: all .3s cubic-bezier(.22,1,.36,1); }
        .wdk-btn-p:hover { background:#8b5a2b !important; box-shadow:0 10px 32px rgba(139,90,43,.38) !important; transform:translateY(-2px); }
        .wdk-btn-p:active { transform:scale(.97); }

        .wdk-btn-s { transition: all .3s ease; }
        .wdk-btn-s:hover { border-color:rgba(139,90,43,.55) !important; background:rgba(139,90,43,.05) !important; }
      `}</style>

      <section
        id="why-dkotton"
        ref={sectionRef}
        className="relative overflow-hidden bg-[#faf7f2] py-20 md:py-28 w-full"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        suppressHydrationWarning
      >
        {/* Ambient */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 55% at 50% 0%,   rgba(200,169,110,.1)  0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 50% 100%, rgba(139,90,43,.07)   0%, transparent 60%)
          `,
        }} />

        {/* Grain */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.016]" style={{
          backgroundImage : `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize  : '180px 180px',
        }} />

        <div className="relative z-10">

          {/* ── Centre copy ── */}
          <div className="mx-auto mb-12 max-w-4xl px-6 text-center lg:px-8">

            {/* Eyebrow */}
            <div
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#c8a96e]/40 bg-white/70 px-5 py-2.5 shadow-sm backdrop-blur-sm"
              style={fadeStyle(0)}
            >
              <div className="wdk-pulse h-2 w-2 rounded-full bg-[#8b5a2b]" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b4423]">
                Why Choose D-KOTTON
              </span>
            </div>

            {/* Headline */}
            <h2
              className="mb-6 font-bold tracking-tight text-[#1a1208]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize  : 'clamp(30px, 5vw, 56px)',
                lineHeight: 1.08,
                ...fadeStyle(120),
              }}
            >
              The Only Menswear Franchise<br />
              in Maharashtra With{' '}
              <span className="wdk-shimmer">Zero Entry Cost</span>
            </h2>

            {/* Body */}
            <p
              className="mx-auto mb-8 max-w-xl text-[15px] font-light leading-relaxed text-[#6b5544]"
              style={fadeStyle(240)}
            >
              While others charge ₹5–20 Lakh just to use their name, D-KOTTON gives you a
              complete ready-to-run store — backed by Maharashtra's own Swami Textiles —
              with{' '}
              <strong className="font-semibold text-[#3d2314]">absolutely zero franchise fee.</strong>
            </p>

            {/* Stat pills */}
            <div
              className="flex flex-wrap items-center justify-center gap-3"
              style={fadeStyle(340)}
            >
              {pills.map((p) => (
                <div
                  key={p.label}
                  className="wdk-float flex flex-col items-center rounded-2xl px-5 py-3"
                  style={{ background: p.bg, border: `1px solid ${p.border}`, minWidth: 88 }}
                >
                  <span style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize  : 22, fontWeight: 700,
                    color     : p.color, lineHeight: 1,
                  }}>
                    {p.value}
                  </span>
                  <span style={{
                    fontSize     : 10, fontWeight: 600,
                    letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                    color        : '#9b8070', marginTop: 4,
                  }}>
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Ticker ── */}
          <div
            className="wdk-ticker-wrap mb-12"
            style={fadeStyle(460)}
          >
            <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(200,169,110,.25) 20%,rgba(200,169,110,.25) 80%,transparent)' }} />

            <div style={{ background: 'rgba(255,255,255,.45)', borderBottom: '1px solid rgba(200,169,110,.1)', padding: '12px 0' }}>
              <div className="wdk-ticker-inner" style={{ display: 'contents' }}>
                <TickerStrip items={row1} direction="left" speed={38} />
              </div>
            </div>

            <div style={{ background: 'rgba(200,169,110,.04)', borderBottom: '1px solid rgba(200,169,110,.1)', padding: '12px 0' }}>
              <div className="wdk-ticker-inner" style={{ display: 'contents' }}>
                <TickerStrip items={row2} direction="right" speed={44} />
              </div>
            </div>

            <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(200,169,110,.25) 20%,rgba(200,169,110,.25) 80%,transparent)' }} />
          </div>

          {/* ── CTA strip ── */}
          <div
            className="mx-auto max-w-4xl px-6 lg:px-8"
            style={fadeStyle(560)}
          >
            <div
              className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#c8a96e]/25 bg-white/60 px-8 py-6 backdrop-blur-sm sm:flex-row"
              style={{ boxShadow: '0 4px 24px rgba(139,90,43,.07)' }}
            >
              <div>
                <p className="mb-1 text-base font-bold text-[#1a1208]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Still comparing options?
                </p>
                <p className="text-sm text-[#7a6555]">
                  No other brand in Maharashtra offers this combination. Talk to us today.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <button
                  className="wdk-btn-p flex items-center gap-2 rounded-full bg-[#1a1208] px-6 py-3 text-sm font-semibold tracking-wide text-[#faf7f2] shadow-md"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Enquire Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <a
                  href="tel:+918087145570"
                  className="wdk-btn-s flex items-center gap-2 rounded-full border border-[#8b5a2b]/25 px-6 py-3 text-sm font-semibold text-[#4a3728]"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8b5a2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  8087145570
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}