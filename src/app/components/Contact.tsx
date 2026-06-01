import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const contacts = [
  {
    label: 'Email',
    value: 'dbundo64@gmail.com',
    href: 'mailto:dbundo64@gmail.com',
    icon: Mail,
    color: '#38bdf8',
  },
  {
    label: 'Phone',
    value: '+263 780 073 255',
    href: 'tel:+263780073255',
    icon: Phone,
    color: '#818cf8',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const subject = fullName ? `Portfolio enquiry from ${fullName}` : 'Portfolio enquiry';
    const body = [
      `First name: ${formData.firstName}`,
      `Last name: ${formData.lastName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      '',
      'Message:',
      formData.message,
    ].join('\n');

    window.location.href = `mailto:dbundo64@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        padding: '96px 32px 72px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(56,189,248,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

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
        05
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
          05 / CONTACT
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          <div>
            <h2
              style={{
                fontFamily: 'Bricolage Grotesque, sans-serif',
                fontSize: 'clamp(34px, 5vw, 64px)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                color: '#dde3f0',
                marginBottom: '18px',
              }}
            >
              Let's build
              <br />
              <span style={{ color: '#38bdf8' }}>something</span>
              <br />
              great.
            </h2>
            <p
              style={{
                color: '#5a6a8a',
                lineHeight: 1.7,
                fontSize: '15px',
                maxWidth: '380px',
                marginBottom: '18px',
              }}
            >
              Open to freelance projects, collaborations, and software development opportunities.
              I work best on projects where the problem matters.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '420px' }}>
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      textDecoration: 'none',
                      color: '#dde3f0',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        background: `${contact.color}15`,
                        border: `1px solid ${contact.color}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} style={{ color: contact.color }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '11px',
                          letterSpacing: '0.1em',
                          color: '#5a6a8a',
                          marginBottom: '2px',
                        }}
                      >
                        {contact.label}
                      </div>
                      <div style={{ fontSize: '15px', color: '#dde3f0' }}>{contact.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div
            style={{
              background: '#0c1022',
              border: '1px solid rgba(56,189,248,0.1)',
              borderRadius: '10px',
              padding: '20px',
              maxWidth: '500px',
              width: '100%',
              justifySelf: 'end',
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                }}
                className="contact-name-grid"
              >
                <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0 }}>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      color: '#7e90b2',
                      textTransform: 'uppercase',
                    }}
                  >
                    First name
                  </span>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={e => handleChange('firstName', e.target.value)}
                    style={{
                      width: '100%',
                      height: '44px',
                      padding: '0 12px',
                      background: 'rgba(5,7,15,0.76)',
                      border: '1px solid rgba(56,189,248,0.12)',
                      borderRadius: '8px',
                      color: '#dde3f0',
                      boxSizing: 'border-box',
                    }}
                  />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0 }}>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      color: '#7e90b2',
                      textTransform: 'uppercase',
                    }}
                  >
                    Last name
                  </span>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={e => handleChange('lastName', e.target.value)}
                    style={{
                      width: '100%',
                      height: '44px',
                      padding: '0 12px',
                      background: 'rgba(5,7,15,0.76)',
                      border: '1px solid rgba(56,189,248,0.12)',
                      borderRadius: '8px',
                      color: '#dde3f0',
                      boxSizing: 'border-box',
                    }}
                  />
                </label>
              </div>

              <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0 }}>
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    color: '#7e90b2',
                    textTransform: 'uppercase',
                  }}
                >
                  Email
                </span>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '0 12px',
                    background: 'rgba(5,7,15,0.76)',
                    border: '1px solid rgba(56,189,248,0.12)',
                    borderRadius: '8px',
                    color: '#dde3f0',
                    boxSizing: 'border-box',
                  }}
                />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0 }}>
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    color: '#7e90b2',
                    textTransform: 'uppercase',
                  }}
                >
                  Phone
                </span>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '0 12px',
                    background: 'rgba(5,7,15,0.76)',
                    border: '1px solid rgba(56,189,248,0.12)',
                    borderRadius: '8px',
                    color: '#dde3f0',
                    boxSizing: 'border-box',
                  }}
                />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0 }}>
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    color: '#7e90b2',
                    textTransform: 'uppercase',
                  }}
                >
                  Message
                </span>
                <textarea
                  required
                  value={formData.message}
                  onChange={e => handleChange('message', e.target.value)}
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(5,7,15,0.76)',
                    border: '1px solid rgba(56,189,248,0.12)',
                    borderRadius: '8px',
                    color: '#dde3f0',
                    resize: 'vertical',
                    minHeight: '112px',
                    boxSizing: 'border-box',
                  }}
                />
              </label>

              <button
                type="submit"
                style={{
                  height: '46px',
                  marginTop: '4px',
                  background: '#38bdf8',
                  color: '#05070f',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                Send message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact {
            min-height: auto !important;
            padding: 96px 32px 96px !important;
            display: block !important;
          }
          .contact-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .contact-name-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
