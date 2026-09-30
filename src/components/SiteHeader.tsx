import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { guide } from '../content/guide';

// El menú móvil se cierra al elegir una sección, presionar Escape o salir con Tab.
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  return (
    <header className="site-header" ref={menuRef}>
      <div className="container header-inner">
        <a className="brand" href="#inicio" onClick={() => setOpen(false)} data-testid="link-brand">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 30 30" fill="none"><path d="M3 23h24M5 19l7-9 4 5 7-10M23 5h-5m5 0v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span className="brand-name">{guide.brand.name}<span className="brand-sub">{guide.brand.descriptor}</span></span>
        </a>
        <nav className="desktop-nav" aria-label={guide.accessibility.mainNav}>
          {guide.navigation.map(item => <a href={`#${item.id}`} key={item.id} data-testid={`link-nav-${item.id}`}>{item.label}</a>)}
        </nav>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-label={open ? guide.accessibility.closeMenu : guide.accessibility.openMenu}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(value => !value)}
          data-testid="button-toggle-menu"
        >
          {guide.accessibility.menu} {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label={guide.accessibility.mobileNav} hidden={!open}
        onBlur={event => {
          if (!event.currentTarget.contains(event.relatedTarget) && event.relatedTarget !== toggleRef.current) setOpen(false);
        }}>
        {guide.navigation.map(item => <a href={`#${item.id}`} key={item.id} onClick={() => setOpen(false)} data-testid={`link-mobile-${item.id}`}>{item.label}</a>)}
      </nav>
    </header>
  );
}