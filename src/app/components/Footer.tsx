import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        padding: '40px 32px',
        borderTop: '1px solid rgba(56,189,248,0.08)',
        background: '#05070f',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
          <button
            onClick={() => go('hero')}
            style={{
              fontFamily: 'Bricolage Grotesque, sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              color: '#38bdf8',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '-0.02em',
            }}
          >
            DB
          </button>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px',
              color: '#5a6a8a',
            }}
          >
            © {year} Dillan Bundo
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* Status indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              border: '1px solid rgba(52,211,153,0.2)',
              borderRadius: '100px',
              background: 'rgba(52,211,153,0.05)',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#34d399',
                boxShadow: '0 0 6px #34d399',
                animation: 'pulse-green 2s ease-in-out infinite',
              }}
            />
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                color: '#34d399',
                letterSpacing: '0.08em',
              }}
            >
              OPEN TO WORK
            </span>
          </div>

          {[
            { href: 'https://github.com', icon: <Github size={16} />, label: 'GitHub' },
            { href: 'https://linkedin.com', icon: <Linkedin size={16} />, label: 'LinkedIn' },
            { href: 'mailto:dbundo64@gmail.com', icon: <Mail size={16} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              style={{ color: '#5a6a8a', transition: 'color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#38bdf8'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#5a6a8a'; }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-green {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px #34d399; }
          50% { opacity: 0.6; box-shadow: 0 0 2px #34d399; }
        }
      `}</style>
    </footer>
  );
}
