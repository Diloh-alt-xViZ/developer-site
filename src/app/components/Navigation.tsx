import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: 'about', num: '01' },
  { label: 'Projects', href: 'projects', num: '02' },
  { label: 'Skills', href: 'skills', num: '03' },
  { label: 'Experience', href: 'experience', num: '04' },
  { label: 'Contact', href: 'contact', num: '05' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navItems.map(n => document.getElementById(n.href));
      let current = '';
      sections.forEach((sec) => {
        if (sec && window.scrollY >= sec.offsetTop - 120) {
          current = sec.id;
        }
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [mobileOpen]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.4s ease',
          padding: scrolled
            ? '12px clamp(16px, 4vw, 32px)'
            : 'clamp(16px, 3vw, 24px) clamp(16px, 4vw, 32px)',
          background: scrolled
            ? 'rgba(5,7,15,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(56,189,248,0.08)' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <button
            onClick={() => go('hero')}
            style={{
              fontFamily: 'Bricolage Grotesque, sans-serif',
              fontSize: 'clamp(18px, 4vw, 20px)',
              fontWeight: 700,
              letterSpacing: 0,
              color: '#38bdf8',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            DB
          </button>

          {/* Desktop nav */}
          <div
            className="navigation-links"
            style={{ alignItems: 'center' }}
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: active === item.href ? '#38bdf8' : '#5a6a8a',
                  transition: 'color 0.2s',
                  fontSize: '14px',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={e => { if (active !== item.href) (e.currentTarget as HTMLElement).style.color = '#dde3f0'; }}
                onMouseLeave={e => { if (active !== item.href) (e.currentTarget as HTMLElement).style.color = '#5a6a8a'; }}
              >
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#38bdf8', opacity: 0.7 }}>{item.num}</span>
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-trigger"
            style={{
              width: '44px',
              height: '44px',
              background: 'rgba(12,16,34,0.55)',
              border: '1px solid rgba(56,189,248,0.14)',
              borderRadius: '6px',
              cursor: 'pointer',
              color: '#dde3f0',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-navigation"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          pointerEvents: mobileOpen ? 'all' : 'none',
          flexDirection: 'column',
        }}
        className="mobile-navigation-shell"
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(5,7,15,0.7)',
            backdropFilter: 'blur(8px)',
            opacity: mobileOpen ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 'min(82vw, 360px)',
            height: '100%',
            background: '#0c1022',
            borderLeft: '1px solid rgba(56,189,248,0.15)',
            padding: 'clamp(76px, 18vw, 96px) clamp(22px, 7vw, 32px) 40px',
            transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => go(item.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 0',
                borderBottom: '1px solid rgba(56,189,248,0.06)',
                color: active === item.href ? '#38bdf8' : '#dde3f0',
                textAlign: 'left',
                fontSize: '18px',
                fontFamily: 'Bricolage Grotesque, sans-serif',
              }}
            >
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#38bdf8', opacity: 0.6, minWidth: '24px' }}>{item.num}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .navigation-links {
          display: none;
          gap: clamp(20px, 3vw, 40px);
        }

        .mobile-menu-trigger {
          display: inline-flex;
        }

        .mobile-navigation-shell {
          display: flex;
        }

        @media (min-width: 768px) {
          .navigation-links {
            display: flex !important;
          }

          .mobile-menu-trigger,
          .mobile-navigation-shell {
            display: none !important;
          }
        }

        @media (max-width: 360px) {
          #mobile-navigation button {
            font-size: 16px !important;
          }
        }
      `}</style>
    </>
  );
}
