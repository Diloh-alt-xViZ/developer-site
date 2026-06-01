export function About() {
  const traits = [
    { label: 'Approach', value: 'Problem-first, tools second' },
    { label: 'Focus', value: 'Full-stack & mobile' },
    { label: 'Specialty', value: 'GIS · ML · API Integration' },
    { label: 'Based in', value: 'Zimbabwe' },
    { label: 'Languages', value: 'Shona · English · Ndebele' },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '120px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Section number */}
      <div
        style={{
          position: 'absolute',
          top: '60px',
          right: '32px',
          fontFamily: 'Bricolage Grotesque, sans-serif',
          fontSize: 'clamp(80px, 12vw, 200px)',
          fontWeight: 800,
          color: 'rgba(56,189,248,0.04)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        01
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section label */}
        <div
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
            letterSpacing: '0.15em',
            color: '#38bdf8',
            marginBottom: '48px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#38bdf8' }} />
          01 / ABOUT
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left: Statement */}
          <div>
            <h2
              style={{
                fontFamily: 'Bricolage Grotesque, sans-serif',
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#dde3f0',
                marginBottom: '32px',
              }}
            >
              Self-taught. Practical. <span style={{ color: '#38bdf8' }}>Impact-driven.</span>
            </h2>

            <p
              style={{
                color: '#5a6a8a',
                lineHeight: 1.8,
                fontSize: '16px',
                marginBottom: '24px',
              }}
            >
              I'm a self-taught software developer who builds software that solves real problems. My work spans full-stack web development, mobile apps, API integrations, GIS systems, and machine learning — always with an emphasis on software that's useful, scalable, and easy to use.
            </p>
            <p
              style={{
                color: '#5a6a8a',
                lineHeight: 1.8,
                fontSize: '16px',
              }}
            >
              I don't just implement features — I think through the entire user journey, the data flow, the edge cases, and the experience. Every project I've built has taught me something about building better software faster.
            </p>
          </div>

          {/* Right: Terminal card */}
          <div
            style={{
              background: '#0c1022',
              border: '1px solid rgba(56,189,248,0.12)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            {/* Terminal header */}
            <div
              style={{
                padding: '12px 16px',
                borderBottom: '1px solid rgba(56,189,248,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(56,189,248,0.03)',
              }}
            >
              {['#ff5f57', '#ffbd2e', '#28ca41'].map((color, i) => (
                <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: color, opacity: 0.8 }} />
              ))}
              <span
                style={{
                  marginLeft: '12px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: '#5a6a8a',
                  letterSpacing: '0.05em',
                }}
              >
                dillan.config.ts
              </span>
            </div>

            {/* Terminal content */}
            <div style={{ padding: '24px', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', lineHeight: 2 }}>
              <div style={{ color: '#5a6a8a' }}>const developer = {'{'}</div>
              {traits.map((t, i) => (
                <div key={i} style={{ paddingLeft: '24px' }}>
                  <span style={{ color: '#818cf8' }}>{t.label.toLowerCase().replace(' ', '_')}</span>
                  <span style={{ color: '#5a6a8a' }}>: </span>
                  <span style={{ color: '#34d399' }}>"{t.value}"</span>
                  <span style={{ color: '#5a6a8a' }}>,</span>
                </div>
              ))}
              <div style={{ paddingLeft: '24px' }}>
                <span style={{ color: '#818cf8' }}>available</span>
                <span style={{ color: '#5a6a8a' }}>: </span>
                <span style={{ color: '#38bdf8' }}>true</span>
                <span style={{ color: '#5a6a8a' }}>,</span>
              </div>
              <div style={{ color: '#5a6a8a' }}>{'}'}</div>
              <div style={{ marginTop: '8px', color: '#38bdf8' }}>
                <span style={{ color: '#5a6a8a' }}>// </span>
                ready to ship
                <span style={{ animation: 'blink 1s step-start infinite', marginLeft: '2px' }}>|</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
