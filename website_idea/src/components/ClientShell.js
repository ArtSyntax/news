'use client';

import { useState } from 'react';
import { Header, CategoryChips, MobileNav, OffCanvasDrawer } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

/**
 * Client-side shell wrapping the navigation components.
 * Manages drawer state for mobile navigation.
 */
export default function ClientShell({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Header />
      <CategoryChips />

      <main id="main-content" role="main">
        {children}
      </main>

      <Footer />

      {/* Mobile-only components */}
      <MobileNav onDrawerToggle={() => setDrawerOpen(true)} />
      <OffCanvasDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
