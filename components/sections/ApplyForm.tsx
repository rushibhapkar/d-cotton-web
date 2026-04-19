'use client';

import { useEffect, useRef, useState } from 'react';

type FormState = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name        : string;
  phone       : string;
  city        : string;
  interest    : string;
  spaceReady  : string;
  message     : string;
}

const INITIAL: FormData = {
  name       : '',
  phone      : '',
  city       : '',
  interest   : 'Franchise',
  spaceReady : 'Not yet',
  message    : '',
};

const interests  = ['Franchise', 'Wholesale', 'Shop-in-Shop'];
const spaceOpts  = ['Not yet', 'Yes, ready', 'Looking for space'];

/* ── Input component ─────────────────────────────── */
function Field({
  label, value, onChange, type = 'text', placeholder, required = true,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={{
        display: 'block', fontSize: 11, fontWeight: 700,
        letterSpacing: '0.12em', textTransform: 'uppercase' as const,
        color: 'rgba(250,247,242,0.65)', marginBottom: 8,
      }}>
        {label}{required && <span style={{ color: '#c8a96e', marginLeft: 3 }}>*</span>}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width          : '100%',
background : focused ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.07)',
border     : `1px solid ${focused ? 'rgba(200,169,110,0.6)' : 'rgba(255,255,255,0.18)'}`,
          borderRadius   : 10,
          padding        : '12px 16px',
          fontSize       : 14,
color      : '#faf7f2',
          outline        : 'none',
          transition     : 'all 0.25s ease',
          boxShadow      : focused ? '0 0 0 3px rgba(200,169,110,0.1)' : 'none',
        }}
      />
    </div>
  );
}

/* ── Select component ────────────────────────────── */
function SelectField({
  label, value, onChange, options,
}: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={{
        display: 'block', fontSize: 11, fontWeight: 700,
        letterSpacing: '0.12em', textTransform: 'uppercase' as const,
        color: 'rgba(250,247,242,0.65)', marginBottom: 8,
      }}>
        {label}<span style={{ color: '#c8a96e', marginLeft: 3 }}>*</span>
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width       : '100%',
background : focused ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.07)',
border     : `1px solid ${focused ? 'rgba(200,169,110,0.6)' : 'rgba(255,255,255,0.18)'}`,
          borderRadius: 10,
          padding     : '12px 16px',
          fontSize    : 14,
color      : '#faf7f2',
          outline     : 'none',
          cursor      : 'pointer',
          transition  : 'all 0.25s ease',
          boxShadow   : focused ? '0 0 0 3px rgba(200,169,110,0.1)' : 'none',
        }}
      >
        {options.map((o) => (
          <option key={o} value={o} style={{ background: '#1a1208', color: '#faf7f2' }}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ── Main ─────────────────────────────────────────── */
export default function ContactSection() {
  const sectionRef            = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [inView,  setInView]  = useState(false);
  const [form,    setForm]    = useState<FormData>(INITIAL);
  const [status,  setStatus]  = useState<FormState>('idle');

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [mounted]);

  const vis = mounted && inView;

  const set = (key: keyof FormData) => (val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city) return;
    setStatus('sending');
    /* ── Replace this with your actual API call ── */
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    /* ─────────────────────────────────────────── */
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi D-KOTTON Team!\n\nI'm interested in a ${form.interest} opportunity.\nName: ${form.name || '(not filled)'}\nCity: ${form.city || '(not filled)'}\n\nPlease contact me.`
    );
    window.open(`https://wa.me/918087145570?text=${msg}`, '_blank');
  };

  const fadeStyle = (delay: number): React.CSSProperties =>
    vis
      ? { animation: `ct-fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both`, animationDelay: `${delay}ms` }
      : { opacity: 0 };

  return (
    <>
      <style>{`
        @keyframes ct-fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes ct-shimmer {
          0%   { background-position:-200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes ct-pulse {
          0%,100% { opacity:1; transform:scale(1);    }
          50%      { opacity:.5; transform:scale(.75); }
        }
        @keyframes ct-spin {
          from { transform:rotate(0deg);   }
          to   { transform:rotate(360deg); }
        }

.ct-shimmer {
  background: linear-gradient(90deg, #c8a96e 0%, #faf7f2 40%, #c8a96e 60%, #faf7f2 100%);
  background-size: 200% auto;
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ct-shimmer 4s linear infinite;
}
        .ct-pulse { animation: ct-pulse 2s ease-in-out infinite; }

        .ct-submit {
          transition: all .3s cubic-bezier(.22,1,.36,1);
          cursor: pointer;
        }
        .ct-submit:hover:not(:disabled) {
          background: #8b5a2b !important;
          box-shadow: 0 12px 36px rgba(139,90,43,.45) !important;
          transform: translateY(-2px);
        }
        .ct-submit:active:not(:disabled) { transform: scale(.97); }
        .ct-submit:disabled { opacity:.7; cursor:not-allowed; }

        .ct-wa {
          transition: all .3s cubic-bezier(.22,1,.36,1);
          cursor: pointer;
        }
        .ct-wa:hover {
          background: #1da851 !important;
          box-shadow: 0 10px 32px rgba(29,168,81,.35) !important;
          transform: translateY(-2px);
        }
        .ct-wa:active { transform: scale(.97); }

        .ct-phone-card {
          transition: all .3s ease;
        }
        .ct-phone-card:hover {
          border-color: rgba(200,169,110,.45) !important;
          background: rgba(255,255,255,.06) !important;
        }

        .ct-spin { animation: ct-spin .8s linear infinite; }

    input::placeholder, textarea::placeholder {
  color: rgba(250,247,242,0.35) !important;
}
        select option { background: #1a1208 !important; }
      `}</style>

      <section
        id="contact"
        ref={sectionRef}
        className="relative overflow-hidden py-20 md:py-28 w-full"
        style={{
          fontFamily: "'DM Sans', sans-serif",
background: 'linear-gradient(160deg, #0e0905 0%, #1a1208 50%, #0e0905 100%)',
        }}
        suppressHydrationWarning
      >
        {/* Top gold line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg,transparent,rgba(200,169,110,.5) 20%,rgba(200,169,110,.5) 80%,transparent)',
        }} />

        {/* Ambient glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 50% at 0% 50%,   rgba(200,169,110,.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 100% 50%, rgba(139,90,43,.08)   0%, transparent 60%)
          `,
        }} />

        {/* Grain */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
          backgroundImage : `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat', backgroundSize: '180px 180px',
        }} />

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">

          {/* ── Header ── */}
          <div className="mb-14 text-center" style={fadeStyle(0)}>
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5" style={{
              background: 'rgba(200,169,110,0.1)', border: '1px solid rgba(200,169,110,0.25)',
            }}>
              <div className="ct-pulse h-2 w-2 rounded-full" style={{ background: '#c8a96e' }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8a96e' }}>
                Apply Now
              </span>
            </div>

            <h2
              className="mb-4 font-bold tracking-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize  : 'clamp(28px, 4.5vw, 50px)',
                lineHeight: 1.08, color: '#faf7f2',
              }}
            >
              Start Your{' '}
              <span className="ct-shimmer">D-KOTTON</span>
              <br />Journey Today
            </h2>

            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: 'rgba(250,247,242,0.65)', maxWidth: 440, margin: '0 auto' }}>
              Fill in your details and our team will reach out within 24 hours.
              No obligation — just a friendly conversation.
            </p>
          </div>

          {/* ── Two column layout ── */}
          <div className="grid gap-8 lg:grid-cols-5">

            {/* LEFT — Form (3 cols) */}
            <div className="lg:col-span-3" style={fadeStyle(150)}>
              {status === 'success' ? (
                /* Success state */
                <div
                  className="flex flex-col items-center justify-center text-center"
                  style={{
                    background   : 'rgba(255,255,255,0.03)',
                    border       : '1px solid rgba(200,169,110,0.2)',
                    borderRadius : 20,
                    padding      : '64px 40px',
                    minHeight    : 420,
                  }}
                >
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: 'rgba(74,124,78,0.12)', border: '1px solid rgba(74,124,78,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a7c4e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 24, fontWeight: 700, color: '#faf7f2', marginBottom: 10 }}>
                    Application Received!
                  </p>
                  <p style={{ fontSize: 14, color: 'rgba(250,247,242,0.65)', lineHeight: 1.7, maxWidth: 320 }}>
                    Thank you {form.name}. Our team will contact you within 24 hours on{' '}
                    <span style={{ color: '#c8a96e', fontWeight: 600 }}>{form.phone}</span>.
                  </p>
                  <button
                    onClick={() => { setForm(INITIAL); setStatus('idle'); }}
                    style={{
                      marginTop: 28, background: 'transparent',
                      border: '1px solid rgba(200,169,110,0.3)',
                      borderRadius: 100, padding: '10px 24px',
                      fontSize: 13, fontWeight: 600, color: '#c8a96e', cursor: 'pointer',
                    }}
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                /* Form */
                <form
                  onSubmit={handleSubmit}
                  style={{
background  : 'rgba(255,255,255,0.05)',
border      : '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 20,
                    padding     : '32px',
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Full Name"
                      value={form.name}
                      onChange={set('name')}
                      placeholder="Your full name"
                    />
                    <Field
                      label="Phone Number"
                      value={form.phone}
                      onChange={set('phone')}
                      type="tel"
                      placeholder="+91 98765 43210"
                    />
                    <Field
                      label="City / Location"
                      value={form.city}
                      onChange={set('city')}
                      placeholder="e.g. Pune, Nashik"
                    />
                    <SelectField
                      label="Interested In"
                      value={form.interest}
                      onChange={set('interest')}
                      options={interests}
                    />
                    <div className="sm:col-span-2">
                      <SelectField
                        label="Do you have a shop space?"
                        value={form.spaceReady}
                        onChange={set('spaceReady')}
                        options={spaceOpts}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label style={{
                        display: 'block', fontSize: 11, fontWeight: 700,
                        letterSpacing: '0.12em', textTransform: 'uppercase' as const,
                        color: 'rgba(250,247,242,0.65)', marginBottom: 8,
                      }}>
                        Message <span style={{ color: 'rgba(250,247,242,0.25)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => set('message')(e.target.value)}
                        placeholder="Any questions or specific requirements..."
                        rows={3}
                        style={{
                          width       : '100%',
                          background  : 'rgba(255,255,255,0.04)',
                          border      : '1px solid rgba(255,255,255,0.1)',
                          borderRadius: 10,
                          padding     : '12px 16px',
                          fontSize    : 14,
                          color       : 'rgba(250,247,242,0.9)',
                          outline     : 'none',
                          resize      : 'none',
                          fontFamily  : "'DM Sans', sans-serif",
                          transition  : 'all 0.25s ease',
                        }}
                        onFocus={(e) => {
                          e.target.style.border     = '1px solid rgba(200,169,110,0.5)';
                          e.target.style.boxShadow  = '0 0 0 3px rgba(200,169,110,0.1)';
                          e.target.style.background = 'rgba(255,255,255,0.07)';
                        }}
                        onBlur={(e) => {
                          e.target.style.border    = '1px solid rgba(255,255,255,0.1)';
                          e.target.style.boxShadow = 'none';
                          e.target.style.background = 'rgba(255,255,255,0.04)';
                        }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="ct-submit mt-6 w-full rounded-xl py-4 text-sm font-semibold tracking-wide text-white"
                    style={{
                      background : '#8b5a2b',
                      border     : 'none',
                      boxShadow  : '0 8px 28px rgba(139,90,43,0.38)',
                      fontSize   : 14,
                    }}
                  >
                    {status === 'sending' ? (
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                        <svg className="ct-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                        Submit Application
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    )}
                  </button>

                  <p style={{ marginTop: 12, textAlign: 'center', fontSize: 11, color: 'rgba(250,247,242,0.25)' }}>
                    ✦ No spam · No obligation · Response within 24 hours
                  </p>
                </form>
              )}
            </div>

            {/* RIGHT — Contact options (2 cols) */}
            <div className="flex flex-col gap-5 lg:col-span-2" style={fadeStyle(300)}>

              {/* WhatsApp */}
              <button
                onClick={handleWhatsApp}
                className="ct-wa flex items-center gap-4 rounded-2xl p-5 text-left"
                style={{
                  background : 'rgba(29,168,81,0.1)',
                  border     : '1px solid rgba(29,168,81,0.25)',
                  cursor     : 'pointer',
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                  background: 'rgba(29,168,81,0.15)', border: '1px solid rgba(29,168,81,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#1da851">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#faf7f2', marginBottom: 3 }}>
                    Chat on WhatsApp
                  </p>
                  <p style={{ fontSize: 12, color: 'rgba(250,247,242,0.45)', lineHeight: 1.5 }}>
                    Instant reply · Share your details directly
                  </p>
                </div>
                <svg style={{ marginLeft: 'auto', flexShrink: 0, color: 'rgba(29,168,81,0.6)' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* Phone */}
              <a
                href="tel:+918087145570"
                className="ct-phone-card flex items-center gap-4 rounded-2xl p-5"
                style={{
                  background   : 'rgba(255,255,255,0.03)',
                  border       : '1px solid rgba(255,255,255,0.08)',
                  textDecoration: 'none',
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                  background: 'rgba(200,169,110,0.1)', border: '1px solid rgba(200,169,110,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(250,247,242,0.4)', marginBottom: 4 }}>
                    Call Directly
                  </p>
                  <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: '#faf7f2', letterSpacing: '0.02em' }}>
                    8087145570
                  </p>
                </div>
              </a>

              {/* Info cards */}
              <div
                className="rounded-2xl p-5"
                style={{
                  background: 'rgba(200,169,110,0.06)',
                  border    : '1px solid rgba(200,169,110,0.15)',
                }}
              >
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: '#c8a96e', marginBottom: 14,
                }}>
                  What Happens Next
                </p>
                {[
                  { step: '01', text: 'We call you within 24 hours' },
                  { step: '02', text: 'Free consultation & site discussion' },
                  { step: '03', text: 'Agreement & setup begins' },
                ].map((item) => (
                  <div key={item.step} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <span style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: 11, fontWeight: 700, color: 'rgba(200,169,110,0.5)',
                      minWidth: 24,
                    }}>
                      {item.step}
                    </span>
                    <span style={{ fontSize: 13, color: 'rgba(250,247,242,0.6)', lineHeight: 1.5 }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Business hours */}
              <div
                className="rounded-2xl p-5"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border    : '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(250,247,242,0.35)', marginBottom: 4 }}>
                      Business Hours
                    </p>
                    <p style={{ fontSize: 14, fontWeight: 500, color: 'rgba(250,247,242,0.7)' }}>
                      Mon – Sat, 10am – 7pm
                    </p>
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    background: 'rgba(74,124,78,0.1)', border: '1px solid rgba(74,124,78,0.2)',
                    borderRadius: 100, padding: '5px 12px',
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4a7c4e' }} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#4a7c4e' }}>Available</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── Bottom note ── */}
          <p
            className="mt-10 text-center"
            style={{
              fontSize: 12, color: 'rgba(250,247,242,0.2)',
              ...fadeStyle(500),
            }}
          >
            ✦ D-KOTTON by Swami Textiles, Maharashtra &nbsp;·&nbsp; All enquiries responded within 24 hours &nbsp;·&nbsp; Zero obligation consultation
          </p>

        </div>
      </section>
    </>
  );
}