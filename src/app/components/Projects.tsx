import { useState } from 'react';
import { ArrowUpRight, Smartphone, Map, Leaf } from 'lucide-react';

const projects = [
  {
    num: '01',
    icon: Smartphone,
    title: 'Lodge Booking App',
    type: 'Mobile · Full-Stack',
    color: '#38bdf8',
    tagline: 'End-to-end hospitality platform with real-time bookings, payments, and notifications.',
    description:
      'A cross-platform lodge booking application handling the full guest journey — browse, book, pay, and receive confirmation via SMS. Built to support concurrent bookings without conflicts using optimistic locking on the Spring Boot backend.',
    challenge: 'The core challenge: preventing double-bookings under concurrent load while keeping the mobile UX instant and responsive.',
    tags: ['React Native', 'Redux', 'Spring Boot', 'OAuth2', 'Twilio', 'Payment API', 'PostgreSQL'],
    highlights: [
      'Concurrent booking conflict resolution',
      'Real-time SMS confirmation via Twilio',
      'OAuth2 secure authentication',
      'Cross-platform iOS + Android',
    ],
  },
  {
    num: '02',
    icon: Map,
    title: 'GIS Guard Patrol System',
    type: 'GIS · Web · Mobile',
    color: '#818cf8',
    tagline: 'Geofencing-based patrol tracking with live dashboards and automated reporting.',
    description:
      'A geofencing-powered patrol management system that tracks guard positions in real-time, validates patrol cycles, and generates operational reports for security managers. Replaced manual radio-based check-ins entirely.',
    challenge: 'Translating physical patrol routes into digital geofences and surfacing meaningful operational insights for non-technical security managers.',
    tags: ['GIS', 'Geofencing', 'Real-time Tracking', 'Admin Dashboard', 'Report Generation'],
    highlights: [
      'Real-time guard location tracking',
      'Automated patrol cycle validation',
      'Admin monitoring dashboard',
      'Exportable operational reports',
    ],
  },
  {
    num: '03',
    icon: Leaf,
    title: 'Tobacco Disease Detector',
    type: 'Machine Learning · Android',
    color: '#34d399',
    tagline: 'ML-powered Android app that identifies tobacco leaf diseases from a photo with 90%+ accuracy.',
    description:
      'An Android application that lets farmers photograph tobacco leaves and instantly get disease diagnosis across four disease categories. Trained on local crop data specific to Zimbabwean growing conditions, deployable offline.',
    challenge: 'Building a model that works in low-connectivity rural conditions and remains accessible to farmers with limited tech experience.',
    tags: ['Machine Learning', 'Android', 'TensorFlow Lite', 'Image Classification', 'Offline-first'],
    highlights: [
      'Over 90% classification accuracy',
      'Four disease categories identified',
      'Offline-capable Android app',
      'Farmer-first UX design',
    ],
  },
];

export function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      style={{
        padding: '120px 32px',
        background: 'rgba(12,16,34,0.4)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Section number watermark */}
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
        02
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
          02 / FEATURED PROJECTS
        </div>

        <h2
          style={{
            fontFamily: 'Bricolage Grotesque, sans-serif',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: '#f4f7fb',
            marginBottom: '80px',
            maxWidth: '640px',
            textShadow: '0 0 24px rgba(12,16,34,0.18)',
          }}
        >
          Real solutions for real problems.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {projects.map((p, i) => {
            const Icon = p.icon;
            const isActive = activeProject === i;

            return (
              <div
                key={i}
                onClick={() => setActiveProject(isActive ? null : i)}
                style={{
                  background: isActive ? 'rgba(12,16,34,0.96)' : 'rgba(12,16,34,0.38)',
                  border: `1px solid ${isActive ? p.color + '34' : 'rgba(56,189,248,0.08)'}`,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  marginBottom: '8px',
                  boxShadow: isActive ? `0 20px 60px ${p.color}12` : 'none',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.borderColor = p.color + '30';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(12,16,34,0.72)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.08)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(12,16,34,0.38)';
                  }
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    padding: '28px 32px',
                    display: 'grid',
                    gridTemplateColumns: 'auto minmax(0, 1.15fr) minmax(180px, auto) auto',
                    gap: '24px',
                    alignItems: 'center',
                  }}
                  className="project-header"
                >
                  {/* Number + icon */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '12px',
                        color: p.color,
                        opacity: 0.7,
                        minWidth: '24px',
                      }}
                    >
                      {p.num}
                    </span>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        background: p.color + '15',
                        border: `1px solid ${p.color}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} style={{ color: p.color }} />
                    </div>
                  </div>

                  {/* Title + tagline */}
                  <div>
                    <h3
                      style={{
                        fontFamily: 'Bricolage Grotesque, sans-serif',
                        fontSize: 'clamp(18px, 2.5vw, 24px)',
                        fontWeight: 700,
                        color: '#dde3f0',
                        marginBottom: '4px',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: '#7e90b2', lineHeight: 1.7 }}>{p.tagline}</p>
                  </div>

                  {/* Type badge */}
                  <div
                    style={{
                      padding: '6px 14px',
                      border: `1px solid ${p.color}30`,
                      borderRadius: '100px',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '11px',
                      color: p.color,
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}
                    className="project-type-badge"
                  >
                    {p.type}
                  </div>

                  {/* Expand indicator */}
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: `1px solid ${isActive ? p.color : 'rgba(56,189,248,0.2)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s',
                      transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)',
                      color: isActive ? p.color : '#5a6a8a',
                      flexShrink: 0,
                    }}
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Expanded content */}
                {isActive && (
                  <div
                    style={{
                      padding: '0 32px 40px',
                      borderTop: `1px solid ${p.color}15`,
                    }}
                  >
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '48px',
                        paddingTop: '32px',
                      }}
                      className="project-detail-grid"
                    >
                      {/* Left: Description + challenge */}
                      <div>
                        <p style={{ color: '#5a6a8a', lineHeight: 1.8, fontSize: '15px', marginBottom: '24px' }}>
                          {p.description}
                        </p>

                        <div
                          style={{
                            background: p.color + '08',
                            border: `1px solid ${p.color}20`,
                            borderRadius: '6px',
                            padding: '16px 20px',
                          }}
                        >
                          <div
                            style={{
                              fontFamily: 'JetBrains Mono, monospace',
                              fontSize: '11px',
                              color: p.color,
                              letterSpacing: '0.1em',
                              marginBottom: '8px',
                            }}
                          >
                            THE CHALLENGE
                          </div>
                          <p style={{ color: '#dde3f0', fontSize: '14px', lineHeight: 1.7 }}>{p.challenge}</p>
                        </div>
                      </div>

                      {/* Right: Highlights + tags */}
                      <div>
                        <div
                          style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '11px',
                            color: '#5a6a8a',
                            letterSpacing: '0.1em',
                            marginBottom: '16px',
                          }}
                        >
                          KEY OUTCOMES
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '32px' }}>
                          {p.highlights.map((h, j) => (
                            <li
                              key={j}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px',
                                padding: '10px 0',
                                borderBottom: j < p.highlights.length - 1 ? '1px solid rgba(56,189,248,0.06)' : 'none',
                                fontSize: '14px',
                                color: '#dde3f0',
                              }}
                            >
                              <span style={{ color: p.color, marginTop: '2px', flexShrink: 0 }}>→</span>
                              {h}
                            </li>
                          ))}
                        </ul>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {p.tags.map((tag, j) => (
                            <span
                              key={j}
                              style={{
                                padding: '4px 12px',
                                background: 'rgba(56,189,248,0.06)',
                                border: '1px solid rgba(56,189,248,0.12)',
                                borderRadius: '4px',
                                fontFamily: 'JetBrains Mono, monospace',
                                fontSize: '11px',
                                color: '#5a6a8a',
                                letterSpacing: '0.05em',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-header { grid-template-columns: auto 1fr auto !important; }
          .project-type-badge { display: none !important; }
          .project-detail-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
