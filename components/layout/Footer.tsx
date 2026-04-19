'use client';

import { useEffect, useState } from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { label: 'Franchise',          id: 'franchise'    },
  { label: 'How It Works',       id: 'process'      },
  { label: 'Investment Details', id: 'investment'   },
  { label: 'Why D-KOTTON',       id: 'why-dkotton'  },
  { label: 'Apply Now',          id: 'contact'      },
];

const opportunities = [
  'Franchise Model',
  'Wholesale Supply',
  'Shop-in-Shop (SIS)',
  'Marketing Support',
  'Staff Training',
  'Stock Exchange Policy',
];

export default function Footer() {
const [year, setYear] = useState(2025);
useEffect(() => { setYear(new Date().getFullYear()); }, []);

  const scroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @keyframes ft-shimmer {
          0%   { background-position:-200% center; }
          100% { background-position: 200% center; }
        }
        .ft-shimmer {
          background: linear-gradient(90deg,#c8a96e 0%,#faf7f2 40%,#c8a96e 60%,#faf7f2 100%);
          background-size:200% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text;
          animation: ft-shimmer 5s linear infinite;
        }
        .ft-link {
          transition: color .25s, transform .25s;
          display: inline-block;
        }
        .ft-link:hover { color: #c8a96e; transform: translateX(4px); }

        .ft-social {
          transition: background .3s, border-color .3s, transform .3s;
        }
        .ft-social:hover {
          background: rgba(200,169,110,0.15) !important;
          border-color: rgba(200,169,110,0.5) !important;
          transform: translateY(-3px);
        }

        .ft-contact-link { transition: color .25s; }
        .ft-contact-link:hover { color: #c8a96e; }

        .ft-bottom-link { transition: color .25s; }
        .ft-bottom-link:hover { color: rgba(250,247,242,0.6); }

        .ft-marathi {
          font-size: clamp(18px, 3vw, 28px);
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          font-style: italic;
          line-height: 1.5;
          color: rgba(200,169,110,0.75);
          letter-spacing: 0.01em;
          text-align: center;
        }
      `}</style>

      <footer
        style={{
          background  : 'linear-gradient(170deg, #0e0905 0%, #1a1208 60%, #0e0905 100%)',
          fontFamily  : "'DM Sans', sans-serif",
          position    : 'relative',
          overflow    : 'hidden',
        }}
        suppressHydrationWarning
      >
        {/* Top gold border */}
        <div style={{
          height    : 1,
          background: 'linear-gradient(90deg,transparent,rgba(200,169,110,.5) 20%,rgba(200,169,110,.5) 80%,transparent)',
        }} />

        {/* Ambient glow */}
        <div aria-hidden style={{
          position       : 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            radial-gradient(ellipse 60% 40% at 20% 50%, rgba(200,169,110,.05) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 80% 50%, rgba(139,90,43,.04)   0%, transparent 60%)
          `,
        }} />

        {/* ── Marathi tagline banner ── */}
        <div style={{
          borderBottom: '1px solid rgba(200,169,110,.12)',
          padding     : '28px 24px',
          textAlign   : 'center',
          position    : 'relative',
          zIndex      : 10,
        }}>
          <p className="ft-marathi">
            &ldquo;कापड आणि गुणवत्तेत तडजोड नाही —
<br />
आम्ही कमीत कमी दरात उत्तम दर्जा देतो.&rdquo;
          </p>
          <p style={{ marginTop: 8, fontSize: 12, color: 'rgba(200,169,110,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
            — Swami Textiles, Maharashtra
          </p>
        </div>

        {/* ── Main grid ── */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 24px 48px', position: 'relative', zIndex: 10 }}>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-14">

            {/* Brand column */}
            <div>
              {/* Logo text */}
<div style={{ marginBottom: 16 }}>
  <div style={{ position: 'relative', width: 80, height: 80, marginBottom: 10 }}>
    <Image
      src="https://res.cloudinary.com/demz8cf5k/image/upload/v1776613533/uploads/k2izcqjkbmd0nynknv9w.jpg"
      alt="D-KOTTON Logo"
      fill
      className="object-contain"
      unoptimized
      style={{ filter: 'brightness(1.05)' }}
    />
  </div>
  <p
    style={{
      fontFamily   : "'Playfair Display', Georgia, serif",
      fontSize     : 20, fontWeight: 700,
      letterSpacing: '0.08em', color: '#faf7f2',
      marginBottom : 2,
    }}
  >
    D<span style={{ color: '#c8a96e' }}>-</span>KOTTON
  </p>
  <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(200,169,110,0.5)' }}>
    by Swami Textiles
  </p>
</div>

              <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(250,247,242,0.45)', marginBottom: 20, maxWidth: 240 }}>
Maharashtra&apos;s fastest growing...
              </p>

              {/* Social icons */}
              <div style={{ display: 'flex', gap: 10 }}>
                {[
                  {
                    icon: Instagram,
                    href: 'https://instagram.com',
                    label: 'Instagram',
                  },
                  {
                    icon: Facebook,
                    href: 'https://facebook.com',
                    label: 'Facebook',
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="ft-social"
                    style={{
                      width       : 38, height: 38, borderRadius: '50%',
                      background  : 'rgba(255,255,255,0.05)',
                      border      : '1px solid rgba(255,255,255,0.1)',
                      display     : 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <s.icon size={15} style={{ color: 'rgba(250,247,242,0.6)' }} />
                  </a>
                ))}

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918087145570"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="ft-social"
                  style={{
                    width       : 38, height: 38, borderRadius: '50%',
                    background  : 'rgba(29,168,81,0.08)',
                    border      : '1px solid rgba(29,168,81,0.2)',
                    display     : 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(29,168,81,0.8)">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(200,169,110,0.6)', marginBottom: 20 }}>
                Quick Links
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scroll(link.id)}
                      className="ft-link"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: 'rgba(250,247,242,0.5)', padding: 0, textAlign: 'left' }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opportunities */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(200,169,110,0.6)', marginBottom: 20 }}>
                Opportunities
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {opportunities.map((item) => (
                  <li key={item} style={{ fontSize: 13, color: 'rgba(250,247,242,0.45)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(200,169,110,0.4)', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(200,169,110,0.6)', marginBottom: 20 }}>
                Contact Us
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <li>
                  <a
                    href="tel:+918087145570"
                    className="ft-contact-link"
                    style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'rgba(250,247,242,0.55)' }}
                  >
                    <div style={{
                      width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                      background: 'rgba(200,169,110,0.08)', border: '1px solid rgba(200,169,110,0.18)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Phone size={14} style={{ color: '#c8a96e' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(200,169,110,0.45)', marginBottom: 2 }}>
                        Call / WhatsApp
                      </p>
                      <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(250,247,242,0.75)' }}>
                        +91 80871 45570
                      </p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:franchise@dkotton.in"
                    className="ft-contact-link"
                    style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'rgba(250,247,242,0.55)' }}
                  >
                    <div style={{
                      width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                      background: 'rgba(200,169,110,0.08)', border: '1px solid rgba(200,169,110,0.18)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Mail size={14} style={{ color: '#c8a96e' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(200,169,110,0.45)', marginBottom: 2 }}>
                        Email
                      </p>
                      <p style={{ fontSize: 13, fontWeight: 500, color: 'rgba(250,247,242,0.65)' }}>
                        franchise@dkotton.in
                      </p>
                    </div>
                  </a>
                </li>

                {/* Business hours */}
                <li style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 12, padding: '12px 14px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(200,169,110,0.45)', marginBottom: 3 }}>
                        Business Hours
                      </p>
                      <p style={{ fontSize: 13, color: 'rgba(250,247,242,0.6)' }}>
                        Mon – Sat · 10am – 7pm
                      </p>
                    </div>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 5,
                      background: 'rgba(74,124,78,0.1)', border: '1px solid rgba(74,124,78,0.2)',
                      borderRadius: 100, padding: '4px 10px',
                    }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4a7c4e' }} />
                      <span style={{ fontSize: 10, fontWeight: 700, color: '#4a7c4e' }}>Open</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div style={{
            borderTop  : '1px solid rgba(255,255,255,0.07)',
            paddingTop : 24,
            display    : 'flex',
            flexWrap   : 'wrap',
            alignItems : 'center',
            justifyContent: 'space-between',
            gap        : 12,
          }}>
            <p style={{ fontSize: 12, color: 'rgba(250,247,242,0.25)' }} suppressHydrationWarning>
              © {year} D-KOTTON by Swami Textiles, Maharashtra. All rights reserved.
            </p>

            <div style={{ display: 'flex', gap: 20 }}>
              {['Privacy Policy', 'Terms of Service'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="ft-bottom-link"
                  style={{ fontSize: 12, color: 'rgba(250,247,242,0.22)', textDecoration: 'none' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom grain overlay */}
        <div aria-hidden style={{
          position       : 'absolute', inset: 0, pointerEvents: 'none',
          opacity        : 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat', backgroundSize: '180px 180px',
        }} />
      </footer>
    </>
  );
}