'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LayoutContentProps {
  children: React.ReactNode;
}

export function LayoutContent({ children }: LayoutContentProps) {
  // All pages use header and footer (no dashboard pages)
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-0">
        {children}
      </main>
      <Footer />
    </>
  );
}
