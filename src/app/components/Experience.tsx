const experiences = [
  {
    role: 'Freelance Full-Stack Developer',
    org: 'Self-employed',
    period: '2023 – Present',
    year: '2023',
    color: '#38bdf8',
    description:
      'Designed and developed complete full-stack applications independently — handling everything from UI/UX design and backend architecture to API integrations, payment systems, and mobile deployment. Each project built from zero to production.',
    achievements: [
      'Lodge Booking App: full mobile + backend system',
      'GIS Guard Patrol System: geofenced tracking dashboard',
      'Tobacco Disease Detector: ML Android application',
      'End-to-end ownership of all projects',
    ],
  },
  {
    role: 'Software Development Student',
    org: 'Afrocodemy',
    period: 'Feb 2023 – Aug 2023',
    year: '2023',
    color: '#818cf8',
    description:
      'Completed an intensive six-month programming course covering software fundamentals, data structures, and project-based learning. The foundation from which all subsequent freelance work was built.',
    achievements: [
      'Six-month intensive programming course',
      'Software fundamentals and project development',
      'Foundation for all subsequent freelance work',
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: '120px 32px',
        background: 'rgba(12,16,34,0.4)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Watermark */}
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
        04
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section label */}
        <div
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
            letterSpacing: '0.15em',
            color: '#38bdf8',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#38bdf8' }} />
          04 / EXPERIENCE
        </div>

        <h2
          style={{
            fontFamily: 'Bricolage Grotesque, sans-serif',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: '#dde3f0',
            marginBottom: '80px',
          }}
        >
          The journey so far.
        </h2>

        <div style={{ position: 'relative' }}>
          {/* Vertical timeline line */}
          <div
            style={{
              position: 'absolute',
              left: '0',
              top: '0',
              bottom: '0',
              width: '1px',
              background: 'linear-gradient(180deg, #38bdf8, rgba(56,189,248,0.1))',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', paddingLeft: '40px' }}>
            {experiences.map((exp, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-46px',
                    top: '8px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: exp.color,
                    boxShadow: `0 0 12px ${exp.color}`,
                    border: '2px solid #05070f',
                  }}
                />

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '48px',
                    alignItems: 'start',
                  }}
                  className="exp-grid"
                >
                  {/* Left: Role + meta */}
                  <div>
                    <div
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '12px',
                        color: exp.color,
                        letterSpacing: '0.08em',
                        marginBottom: '12px',
                      }}
                    >
                      {exp.period}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Bricolage Grotesque, sans-serif',
                        fontSize: 'clamp(20px, 2.5vw, 28px)',
                        fontWeight: 700,
                        color: '#dde3f0',
                        letterSpacing: '-0.01em',
                        marginBottom: '6px',
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        fontSize: '14px',
                        color: '#5a6a8a',
                        marginBottom: '20px',
                      }}
                    >
                      {exp.org}
                    </div>
                    <p style={{ color: '#5a6a8a', lineHeight: 1.8, fontSize: '15px' }}>
                      {exp.description}
                    </p>
                  </div>

                  {/* Right: Achievements */}
                  <div
                    style={{
                      background: '#0c1022',
                      border: `1px solid ${exp.color}20`,
                      borderRadius: '8px',
                      padding: '24px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '11px',
                        letterSpacing: '0.1em',
                        color: exp.color,
                        marginBottom: '16px',
                        opacity: 0.8,
                      }}
                    >
                      HIGHLIGHTS
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {exp.achievements.map((a, j) => (
                        <li
                          key={j}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            padding: '8px 0',
                            borderBottom: j < exp.achievements.length - 1 ? '1px solid rgba(56,189,248,0.06)' : 'none',
                            fontSize: '14px',
                            color: '#dde3f0',
                          }}
                        >
                          <span style={{ color: exp.color, flexShrink: 0, marginTop: '2px' }}>›</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .exp-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
