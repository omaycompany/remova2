'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LayoutContentProps {
  children: React.ReactNode;
}

export function LayoutContent({ children }: LayoutContentProps) {
  const pathname = usePathname();
  
  // Pages that should not have header and footer (dashboard pages)
  const isDashboardPage = pathname.startsWith('/members/') || pathname === '/members';
  
  if (isDashboardPage) {
    // Dashboard pages: no header/footer, just the content
    return (
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
    );
  }
  
  // Regular pages: include header and footer
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
