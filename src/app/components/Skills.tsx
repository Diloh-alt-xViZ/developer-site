const skillGroups = [
  {
    category: 'Frontend',
    color: '#38bdf8',
    items: [
      { name: 'React', level: 90 },
      { name: 'React Native', level: 88 },
      { name: 'JavaScript', level: 92 },
      { name: 'Redux', level: 82 },
      { name: 'UI/UX Design', level: 75 },
    ],
  },
  {
    category: 'Backend',
    color: '#818cf8',
    items: [
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Spring Framework', level: 80 },
      { name: 'API Integration', level: 88 },
      { name: 'OAuth2', level: 78 },
    ],
  },
  {
    category: 'Data & Infrastructure',
    color: '#34d399',
    items: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'SQL', level: 83 },
      { name: 'Database Design', level: 78 },
      { name: 'GIS Systems', level: 75 },
      { name: 'Machine Learning', level: 70 },
    ],
  },
  {
    category: 'Platforms & Tools',
    color: '#f472b6',
    items: [
      { name: 'Android', level: 80 },
      { name: 'Payment Systems', level: 76 },
      { name: 'Twilio', level: 74 },
      { name: 'Geofencing', level: 72 },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: '120px 32px',
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
        03
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
          03 / SKILLS
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
          Tools of the trade.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
          }}
          className="skills-grid"
        >
          {skillGroups.map((group, gi) => (
            <div
              key={gi}
              style={{
                background: '#0c1022',
                border: '1px solid rgba(56,189,248,0.1)',
                borderRadius: '8px',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '80px',
                  height: '80px',
                  background: `radial-gradient(circle at top right, ${group.color}10, transparent 70%)`,
                  pointerEvents: 'none',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '28px',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: group.color,
                    boxShadow: `0 0 8px ${group.color}`,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    color: group.color,
                    textTransform: 'uppercase',
                  }}
                >
                  {group.category}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {group.items.map((skill, si) => (
                  <div key={si}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '6px',
                      }}
                    >
                      <span style={{ fontSize: '14px', color: '#dde3f0' }}>{skill.name}</span>
                      <span
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '11px',
                          color: '#5a6a8a',
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      style={{
                        height: '3px',
                        background: 'rgba(56,189,248,0.08)',
                        borderRadius: '2px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${group.color}80, ${group.color})`,
                          borderRadius: '2px',
                          transition: 'width 1s ease',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
