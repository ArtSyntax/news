'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, MOBILE_NAV_ITEMS, CATEGORIES } from '@/lib/categories';

/* ─────────── SVG Icon Components ─────────── */
function IconHome({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--color-primary)' : 'var(--color-text-muted)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconChart({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--color-primary)' : 'var(--color-text-muted)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-secondary)" stroke="none">
      <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" />
    </svg>
  );
}

function IconBriefcase({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--color-primary)' : 'var(--color-text-muted)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function IconMenu({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--color-primary)' : 'var(--color-text-muted)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const ICON_MAP = {
  home: IconHome,
  chart: IconChart,
  sparkle: IconSparkle,
  briefcase: IconBriefcase,
  menu: IconMenu,
};

/* ─────────── Header Component ─────────── */
export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`site-header ${isScrolled ? 'scrolled' : ''}`}
      role="banner"
    >
      <div className="header-inner">
        {/* Logo */}
        <Link href="/" className="logo" aria-label="FINSYNTAX หน้าหลัก">
          <span className="logo-icon">F</span>
          <span className="logo-text">
            FINSYNTAX
            <svg className="logo-sparkle" width="12" height="12" viewBox="0 0 24 24" fill="var(--color-secondary)">
              <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" />
            </svg>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="เมนูหลัก">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="header-actions">
          <button
            className="search-toggle"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="ค้นหา"
          >
            <IconSearch />
          </button>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div className="search-overlay">
          <div className="search-container">
            <IconSearch />
            <input
              type="search"
              placeholder="ค้นหาข่าว บทวิเคราะห์ หุ้น..."
              className="search-input"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="search-close"
              aria-label="ปิดการค้นหา"
            >
              <IconClose />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─────────── Category Chips Bar ─────────── */
export function CategoryChips() {
  const pathname = usePathname();

  const chipItems = Object.values(CATEGORIES);

  return (
    <div className="category-chips" role="navigation" aria-label="หมวดหมู่ข่าว">
      <div className="chips-scroll">
        <Link
          href="/"
          className={`chip ${pathname === '/' ? 'active' : ''}`}
        >
          ทั้งหมด
        </Link>
        {chipItems.map((cat) => (
          <Link
            key={cat.slug}
            href={`/${cat.slug}`}
            className={`chip ${pathname === `/${cat.slug}` ? 'active' : ''}`}
          >
            {cat.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─────────── Mobile Bottom Navigation ─────────── */
export function MobileNav({ onDrawerToggle }) {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav" aria-label="เมนูด้านล่าง">
      {MOBILE_NAV_ITEMS.map((item) => {
        const IconComponent = ICON_MAP[item.icon];
        const isActive = item.href === pathname;

        if (item.isDrawerToggle) {
          return (
            <button
              key={item.label}
              className="bottom-nav-item"
              onClick={onDrawerToggle}
              aria-label={item.label}
            >
              <IconComponent active={false} />
              <span className="bottom-nav-label">{item.label}</span>
            </button>
          );
        }

        if (item.isSpecial) {
          return (
            <button
              key={item.label}
              className="bottom-nav-item ai-copilot-btn"
              aria-label={item.label}
            >
              <div className="ai-copilot-icon-wrapper">
                <IconComponent />
              </div>
              <span className="bottom-nav-label">{item.label}</span>
            </button>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
          >
            <IconComponent active={isActive} />
            <span className="bottom-nav-label">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

/* ─────────── Off-Canvas Drawer ─────────── */
export function OffCanvasDrawer({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`drawer-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`drawer ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="เมนูทั้งหมด"
      >
        <div className="drawer-header">
          <Link href="/" className="logo" onClick={onClose}>
            <span className="logo-icon">F</span>
            <span className="logo-text">FINSYNTAX</span>
          </Link>
          <button
            className="drawer-close"
            onClick={onClose}
            aria-label="ปิดเมนู"
          >
            <IconClose />
          </button>
        </div>

        <div className="drawer-search">
          <div className="drawer-search-wrapper">
            <IconSearch />
            <input
              type="search"
              placeholder="ค้นหาข่าว..."
              className="drawer-search-input"
            />
          </div>
        </div>

        <nav className="drawer-nav">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="drawer-nav-link"
              onClick={onClose}
            >
              <span>{item.label}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          ))}
        </nav>

        <div className="drawer-footer">
          <p className="drawer-tagline">Decode the Market. Empower Your Wealth.</p>
        </div>
      </aside>
    </>
  );
}
