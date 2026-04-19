'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Store, Shield, BadgeCheck, Wrench,
  TrendingUp, GraduationCap, RefreshCw,
  Truck, BarChart2, Megaphone,
} from 'lucide-react';

const investmentDetails = [
  {
    label      : 'Shop Setup Cost',
    value      : '₹3.50 Lakh',
    icon       : Store,
    color      : '#8b5a2b',
    description: 'Complete interior, furniture, AC, lighting, signboard & branding — all done by our team.',
    highlight  : false,
    isZero     : false,
    isTotal    : false,
  },
  {
    label      : 'Security Deposit',
    value      : '₹7.50 Lakh',
    icon       : Shield,
    color      : '#c8a96e',
    description: '100% refundable on agreement completion. Stock provided is worth more than the deposit.',
    highlight  : true,
    isZero     : false,
    isTotal    : false,
  },
  {
    label      : 'Franchise Fee',
    value      : '₹0',
    icon       : BadgeCheck,
    color      : '#4a7c4e',
    description: 'No franchise fee. No royalty. No GST on setup. No hidden charges — ever.',
    highlight  : false,
    isZero     : true,
    isTotal    : false,
  },
  {
    label      : 'Total Investment',
    value      : '₹11 Lakh',
    icon       : BarChart2,
    color      : '#8b5a2b',
    description: 'One-time cost for a complete, ready-to-run branded menswear store in your city.',
    highlight  : false,
    isZero     : false,
    isTotal    : true,
  },
];

const benefits = [
  { icon: Wrench,       title: 'Complete Store Setup',          desc: 'Our team handles interior, flooring, electrical, AC, glasswork and signboards. You just open the door.' },
  { icon: Shield,       title: 'Stock Exchange Policy',         desc: 'Non-moving or old inventory can be exchanged for fresh collections anytime. Zero dead stock risk for you.' },
  { icon: Megaphone,    title: 'Marketing by HQ',               desc: 'Professional social media marketing and localized discount schemes managed directly by our head office.' },
  { icon: GraduationCap, title: 'Full Staff Training',          desc: 'Complete training for your store team — customer handling, display standards and inventory management.' },
  { icon: RefreshCw,    title: 'Monthly System Audits',         desc: 'Regular audits every month to ensure your store runs at peak performance with full brand compliance.' },
  { icon: Truck,        title: 'Direct Warehouse Supply',       desc: 'Stock delivered directly from Swami Textiles warehouse to your store — factory-fresh, no middlemen.' },
  { icon: TrendingUp,   title: 'Factory-to-Customer Pricing',   desc: 'Backed by Swami Textiles, you get premium menswear at manufacturer prices — better margins for you.' },
  { icon: BadgeCheck,   title: 'Zero Hidden Costs',             desc: 'No royalty fees. No annual renewal. No marketing contribution. What you see is exactly what you pay.' },
  { icon: Store,        title: 'Minimum 300 Sq.Ft Required',    desc: 'Owned or rented commercial space in a high-footfall area is all you need to launch your D-KOTTON store.' },
];

function useInView(threshold = 0.12) {
  const ref                   = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [inView,  setInView]  = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [mounted]);

  return { ref, visible: mounted && inView };
}

export default function Franchise() {
  const header      = useInView(0.1);
  const investment  = useInView(0.1);
  const benefitsRef = useInView(0.08);

  const fade = (delay: number, visible: boolean): React.CSSProperties =>
    visible
      ? { animation: `fr-fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both`, animationDelay: `${delay}ms` }
      : { opacity: 0 };

  return (
    <>
      <style>{`
        @keyframes fr-fadeUp  { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fr-scaleIn { from { opacity:0; transform:scale(0.93); }       to { opacity:1; transform:scale(1); } }
        @keyframes fr-shimmer { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
        @keyframes fr-pulse   { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:.5; transform:scale(.75); } }

        .fr-shimmer {
          background: linear-gradient(90deg,#8b5a2b 0%,#c8a96e 40%,#8b5a2b 60%,#c8a96e 100%);
          background-size:200% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation: fr-shimmer 4s linear infinite;
        }
        .fr-pulse { animation: fr-pulse 2s ease-in-out infinite; }

        .fr-inv-card {
          transition: transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s cubic-bezier(.22,1,.36,1), border-color .3s;
        }
        .fr-inv-card:hover { transform:translateY(-6px); box-shadow:0 20px 50px rgba(139,90,43,.14); border-color:rgba(200,169,110,.5) !important; }
        .fr-inv-line { position:absolute; bottom:0; left:0; height:2px; width:0; background:linear-gradient(90deg,#c8a96e,#8b5a2b); transition:width .5s cubic-bezier(.22,1,.36,1); }
        .fr-inv-card:hover .fr-inv-line { width:100%; }

        .fr-ben-card {
          transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s cubic-bezier(.22,1,.36,1), border-color .3s, background .3s;
        }
        .fr-ben-card:hover { transform:translateY(-5px); box-shadow:0 16px 40px rgba(139,90,43,.11); border-color:rgba(200,169,110,.45) !important; background:rgba(255,255,255,.88) !important; }
        .fr-ben-line { position:absolute; bottom:0; left:0; height:2px; width:0; background:linear-gradient(90deg,#c8a96e,#8b5a2b); transition:width .5s cubic-bezier(.22,1,.36,1); }
        .fr-ben-card:hover .fr-ben-line { width:100%; }
        .fr-icon { transition: background .3s, border-color .3s, transform .3s; }
        .fr-ben-card:hover .fr-icon { background:rgba(200,169,110,.15) !important; border-color:rgba(200,169,110,.5) !important; transform:scale(1.08); }

        .fr-zero-pill {
          display:inline-flex; align-items:center; gap:5px;
          background:rgba(74,124,78,.08); border:1px solid rgba(74,124,78,.22);
          border-radius:100px; padding:3px 10px; margin-bottom:8px;
        }
      `}</style>

      <section
        id="opportunities"
        className="relative overflow-hidden bg-[#faf7f2] py-24 md:py-32 w-full"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        suppressHydrationWarning
      >
        {/* Ambient */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(ellipse 55% 45% at 95% 10%, rgba(200,169,110,.1) 0%, transparent 65%),
            radial-gradient(ellipse 45% 40% at 5%  90%, rgba(139,90,43,.07) 0%, transparent 65%)
          `,
        }} />

        {/* Grain */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.018]" style={{
          backgroundImage : `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat', backgroundSize: '180px 180px',
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

          {/* ── Header ── */}
          <div ref={header.ref} className="mb-16 max-w-2xl md:mb-20">

            <div
              className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#c8a96e]/40 bg-white/70 px-5 py-2.5 shadow-sm backdrop-blur-sm"
              style={fade(0, header.visible)}
            >
              <div className="fr-pulse h-2 w-2 rounded-full bg-[#8b5a2b]" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b4423]">
                Partnership Opportunities
              </span>
            </div>

            <h2
              className="mb-5 font-bold leading-tight tracking-tight text-[#1a1208]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize  : 'clamp(32px, 5vw, 56px)',
                ...fade(120, header.visible),
              }}
            >
              Own a{' '}
              <span className="fr-shimmer">D-KOTTON</span>
              <br />Store in Your City
            </h2>

            <p
              className="text-[17px] font-light leading-relaxed text-[#7a6555]"
              style={fade(240, header.visible)}
            >
              Three flexible partnership models — Franchise, Wholesale, and Shop-in-Shop —
              designed for entrepreneurs at every stage. Start with what fits you best.
            </p>

            <div className="mt-8 flex items-center gap-3" style={fade(320, header.visible)}>
              <div className="h-px w-12 bg-[#c8a96e]" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#c8a96e]" />
              <div className="h-px w-6 bg-[#c8a96e]/40" />
            </div>
          </div>

          {/* ── Investment ── */}
          <div ref={investment.ref} id="investment" className="mb-24">

            <div style={fade(0, investment.visible)}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8b5a2b]">
                Investment Overview
              </p>
              <h3
                className="mb-10 font-bold text-[#1a1208]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(22px, 3vw, 32px)' }}
              >
                Transparent Pricing — No Surprises
              </h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {investmentDetails.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="fr-inv-card relative overflow-hidden rounded-2xl border p-6 backdrop-blur-sm"
                    style={{
                      background  : item.highlight
                        ? 'linear-gradient(135deg,rgba(200,169,110,.08),rgba(139,90,43,.04))'
                        : 'rgba(255,255,255,0.65)',
                      borderColor : item.highlight ? 'rgba(200,169,110,.35)' : 'rgba(200,169,110,.2)',
                      boxShadow   : '0 4px 20px rgba(139,90,43,.06)',
                      ...(investment.visible
                        ? { animation: `fr-scaleIn .75s cubic-bezier(.22,1,.36,1) both`, animationDelay: `${i * 100 + 150}ms` }
                        : { opacity: 0 }),
                    }}
                  >
                    {item.highlight && (
                      <div style={{
                        position:'absolute', top:0, left:0, right:0, height:2,
                        background:'linear-gradient(90deg,transparent,#c8a96e,transparent)',
                      }} />
                    )}

                    <div
                      className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: `${item.color}12`, border: `1px solid ${item.color}22` }}
                    >
                      <Icon size={20} style={{ color: item.color }} />
                    </div>

                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#9b8070]">
                      {item.label}
                    </p>

                    {item.isZero && (
                      <div className="fr-zero-pill">
                        <div style={{ width:6, height:6, borderRadius:'50%', background:'#4a7c4e' }} />
                        <span style={{ fontSize:10, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#4a7c4e' }}>
                          Free
                        </span>
                      </div>
                    )}

                    <p
                      className="mb-3 font-bold leading-none"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize  : 'clamp(24px, 3vw, 32px)',
                        color     : item.isZero ? '#4a7c4e' : item.color,
                      }}
                    >
                      {item.value}
                    </p>

                    <p className="text-sm leading-relaxed text-[#7a6555]">
                      {item.description}
                    </p>

                    <div className="fr-inv-line" />
                  </div>
                );
              })}
            </div>

            <div
              className="mt-5 flex items-start gap-3 rounded-xl border border-[#c8a96e]/20 bg-white/50 px-5 py-4 backdrop-blur-sm"
              style={fade(600, investment.visible)}
            >
              <div style={{ width:6, height:6, borderRadius:'50%', background:'#c8a96e', flexShrink:0, marginTop:4 }} />
              <p className="text-sm text-[#6b5544]">
                <strong className="font-semibold text-[#1a1208]">Smart breakdown:</strong>{' '}
                ₹7.50 Lakh of your total investment is a 100% refundable deposit — not an expense.
                Your actual non-refundable investment is just ₹3.50 Lakh for a complete, branded, ready-to-run store.
              </p>
            </div>
          </div>

          {/* ── Benefits ── */}
          <div ref={benefitsRef.ref}>

            <div
              className="mb-10 flex items-end justify-between"
              style={fade(0, benefitsRef.visible)}
            >
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8b5a2b]">
                  What You Get
                </p>
                <h3
                  className="font-bold text-[#1a1208]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(22px, 3vw, 32px)' }}
                >
                  Everything Included — At No Extra Cost
                </h3>
              </div>
              <div className="hidden items-center gap-3 md:flex">
                <div className="h-px w-6 bg-[#c8a96e]/40" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#c8a96e]" />
                <div className="h-px w-12 bg-[#c8a96e]" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="fr-ben-card relative overflow-hidden rounded-2xl border border-[#c8a96e]/15 bg-white/60 p-6 backdrop-blur-sm"
                    style={
                      benefitsRef.visible
                        ? { animation: `fr-fadeUp .7s cubic-bezier(.22,1,.36,1) both`, animationDelay: `${i * 70 + 150}ms` }
                        : { opacity: 0 }
                    }
                  >
                    <div
                      className="fr-icon mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: 'rgba(200,169,110,.08)', border: '1px solid rgba(200,169,110,.22)' }}
                    >
                      <Icon size={18} style={{ color: '#8b5a2b' }} />
                    </div>

                    <h4
                      className="mb-2 text-base font-bold tracking-tight text-[#1a1208]"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {b.title}
                    </h4>

                    <p className="text-sm leading-relaxed text-[#7a6555]">{b.desc}</p>

                    <div
                      aria-hidden
                      style={{
                        position  : 'absolute', top: 0, right: 0,
                        width     : 64, height: 64,
                        background: 'radial-gradient(circle at top right,rgba(200,169,110,.1),transparent 70%)',
                        opacity   : 0,
                        transition: 'opacity .3s',
                      }}
                    />
                    <div className="fr-ben-line" />
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}