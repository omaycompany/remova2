"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  // Hide global site header on members dashboard routes to avoid double headers/gap
  if (pathname && pathname.startsWith('/members')) return null;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '/membership', label: 'Membership' },
    { href: '/become-member', label: 'Free' },
    { href: '/resources', label: 'Docs' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header role="banner">
      <nav
        className="navbar bg-base-100/90 backdrop-blur border-b border-base-300 sticky top-0 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => setIsMenuOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-2 shadow"
            >
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a className="" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a className="btn btn-primary btn-sm w-full" href="/contact">
                  Start Intake + NDA
                </a>
              </li>
              <li>
                <a className="btn btn-outline btn-sm w-full" href="/membership">
                  Get Assessment
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-semibold" href="/">
            <img
              alt="Remova"
              loading="lazy"
              width={240}
              height={64}
              decoding="async"
              data-nimg="1"
              className="h-16 w-auto"
              style={{ color: 'transparent' }}
              srcSet="/_next/image?url=%2FREMOVA%20LOGO.png&w=256&q=75 1x, /_next/image?url=%2FREMOVA%20LOGO.png&w=640&q=75 2x"
              src="/_next/image?url=%2FREMOVA%20LOGO.png&w=640&q=75"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a className="" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn btn-primary" href="/contact">
            Start Intake + NDA
          </a>
          <a className="btn btn-outline" href="/membership">
            See Membership
          </a>
        </div>
      </nav>
    </header>
  );
}

