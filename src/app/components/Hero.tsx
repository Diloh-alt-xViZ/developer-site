import { useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const TICKER_ITEMS = [
  'React Native',
  'Spring Boot',
  'GIS Systems',
  'Machine Learning',
  'PostgreSQL',
  'OAuth2',
  'Twilio',
  'Android',
  'Redux',
  'API Integration',
  'React Native',
  'Spring Boot',
  'GIS Systems',
  'Machine Learning',
  'PostgreSQL',
  'OAuth2',
  'Twilio',
  'Android',
  'Redux',
  'API Integration',
];

const STATS = [
  { value: '3+', label: 'Production apps' },
  { value: '90%+', label: 'ML accuracy' },
  { value: '5+', label: 'Tech stacks' },
  { value: '2023', label: 'Self-taught since' },
];

export function Hero() {
  const radarRef = useRef<HTMLDivElement>(null);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 32px 80px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(56,189,248,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          mask: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '-200px',
          right: '-200px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
            letterSpacing: '0.15em',
            color: '#38bdf8',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#38bdf8',
              boxShadow: '0 0 8px #38bdf8',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }}
          />
          AVAILABLE FOR WORK | FULL-STACK DEVELOPER | ZIMBABWE
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          <div>
            <h1
              style={{
                fontFamily: 'Bricolage Grotesque, sans-serif',
                fontSize: 'clamp(64px, 10vw, 140px)',
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                color: '#dde3f0',
                marginBottom: '24px',
              }}
            >
              DILLAN
              <br />
              <span style={{ color: '#38bdf8' }}>BUNDO</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                color: '#5a6a8a',
                maxWidth: '520px',
                lineHeight: 1.7,
                marginBottom: '48px',
              }}
            >
              I build scalable web and mobile applications - from GIS patrol systems to
              ML-powered disease detection. Clean interfaces, reliable backends, real-world
              impact.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                onClick={() => go('projects')}
                style={{
                  padding: '14px 32px',
                  background: '#38bdf8',
                  color: '#05070f',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '15px',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  borderRadius: '4px',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#7dd3fc';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = '#38bdf8';
                }}
              >
                View Projects
              </button>
              <button
                onClick={() => go('contact')}
                style={{
                  padding: '14px 32px',
                  background: 'transparent',
                  color: '#dde3f0',
                  border: '1px solid rgba(56,189,248,0.25)',
                  cursor: 'pointer',
                  fontSize: '15px',
                  fontWeight: 500,
                  borderRadius: '4px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.6)';
                  (e.currentTarget as HTMLElement).style.color = '#38bdf8';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.25)';
                  (e.currentTarget as HTMLElement).style.color = '#dde3f0';
                }}
              >
                Get in touch
              </button>

              <div style={{ display: 'flex', gap: '20px', marginLeft: '8px' }}>
                {[
                  { href: 'https://github.com/Diloh-alt-xViZ', icon: <Github size={18} />, label: 'GitHub' },
                  { href: 'https://linkedin.com', icon: <Linkedin size={18} />, label: 'LinkedIn' },
                  { href: 'mailto:dbundo64@gmail.com', icon: <Mail size={18} />, label: 'Email' },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{ color: '#5a6a8a', transition: 'color 0.2s' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.color = '#38bdf8';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.color = '#5a6a8a';
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={radarRef}
            className="radar-orb"
            style={{ position: 'relative', width: '320px', height: '320px', flexShrink: 0 }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  inset: `${(i - 1) * 18}%`,
                  borderRadius: '50%',
                  border: `1px solid rgba(125,211,252,${0.62 - i * 0.09})`,
                  boxShadow: '0 0 18px rgba(56,189,248,0.18)',
                  animation: `ring-pulse ${2 + i * 0.4}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}

            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#7dd3fc',
                boxShadow: '0 0 28px #7dd3fc, 0 0 58px rgba(56,189,248,0.7)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '50%',
                height: '1px',
                transformOrigin: '0 50%',
                background: 'linear-gradient(90deg, rgba(125,211,252,1), rgba(56,189,248,0.55), transparent)',
                boxShadow: '0 0 16px rgba(125,211,252,0.9)',
                animation: 'sweep 4s linear infinite',
              }}
            />

            {[
              { top: '28%', left: '65%', delay: '0s' },
              { top: '62%', left: '35%', delay: '1.2s' },
              { top: '45%', left: '72%', delay: '2.4s' },
            ].map((pos, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: pos.top,
                  left: pos.left,
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#7dd3fc',
                  boxShadow: '0 0 12px #7dd3fc, 0 0 26px rgba(56,189,248,0.75)',
                  animation: 'blip 4s ease-in-out infinite',
                  animationDelay: pos.delay,
                }}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            marginTop: '80px',
            borderTop: '1px solid rgba(56,189,248,0.1)',
            paddingTop: '40px',
          }}
          className="stats-grid"
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '0 24px',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(56,189,248,0.1)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'Bricolage Grotesque, sans-serif',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 700,
                  color: '#38bdf8',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', color: '#5a6a8a', letterSpacing: '0.02em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          overflow: 'hidden',
          borderTop: '1px solid rgba(56,189,248,0.08)',
          padding: '14px 0',
          background: 'rgba(12,16,34,0.68)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '48px',
            animation: 'ticker 24s linear infinite',
            whiteSpace: 'nowrap',
            width: 'max-content',
            willChange: 'transform',
          }}
          className="ticker-track"
        >
          {TICKER_ITEMS.map((item, i) => (
            <span
              key={`${item}-${i}`}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                color: '#a5b4cf',
                letterSpacing: '0.12em',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ color: '#d7e6f7' }}>{item}</span>
              <span
                style={{
                  color: '#7dd3fc',
                  opacity: 0.85,
                  textShadow: '0 0 10px rgba(125,211,252,0.5)',
                }}
              >
                •
              </span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #38bdf8; }
          50% { opacity: 0.5; box-shadow: 0 0 2px #38bdf8; }
        }
        @keyframes ring-pulse {
          0% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        @keyframes sweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes blip {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          40%, 60% { opacity: 1; transform: scale(1); }
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .radar-orb { display: none !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div:nth-child(2) { border-right: none !important; }
          .stats-grid > div:nth-child(n+3) { margin-top: 24px; }
          .ticker-track { gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
