"use client";

import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  // Hide global site header on members dashboard routes to avoid double headers/gap
  if (pathname && pathname.startsWith('/members/')) return null;

  const menuItems = [
    { href: '/membership', label: 'Protection Plans' },
    { href: '/resources', label: 'Tools and Resources' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header role="banner" className="relative">
      {/* Enhanced background with gradient and blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-50 to-white backdrop-blur-xl opacity-95"></div>
      
      <nav
        className="relative navbar px-4 lg:px-8 py-3 border-b-2 border-gray-200/50 sticky top-0 z-50 shadow-lg"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white/95 backdrop-blur-md rounded-2xl z-[9999] mt-4 w-72 p-4 shadow-2xl border border-gray-200"
            >
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a className="text-lg font-semibold text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl py-3 transition-all" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <a className="btn btn-error btn-md w-full font-black text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105" href="/become-member">
                  🛡️ Get Protection Now
                </a>
              </li>
              <li className="mt-2">
                <a className="btn btn-outline btn-md w-full font-bold border-2 border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white transition-all" href="/signin">
                  Sign Up / Sign In
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost hover:bg-transparent p-2" href="/">
            <img
              alt="Remova"
              loading="lazy"
              width={240}
              height={64}
              decoding="async"
              data-nimg="1"
              className="h-14 lg:h-16 w-auto transition-all hover:scale-105"
              style={{ color: 'transparent' }}
              srcSet="/_next/image?url=%2FREMOVA%20LOGO.png&w=256&q=75 1x, /_next/image?url=%2FREMOVA%20LOGO.png&w=640&q=75 2x"
              src="/_next/image?url=%2FREMOVA%20LOGO.png&w=640&q=75"
            />
          </a>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a className="text-lg font-bold text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl px-4 py-3 transition-all duration-200" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="navbar-end gap-3">
          {/* Primary CTA Button */}
          <a className="group btn btn-error btn-sm lg:btn-md font-black text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-red-600" href="/become-member">
            <span className="hidden lg:inline flex items-center gap-2">
              🛡️ Get Protection
            </span>
            <span className="lg:hidden">🛡️ Protect</span>
          </a>
          
          {/* Secondary CTA Button - Combined Sign Up/Sign In */}
          <a className="btn btn-outline btn-sm lg:btn-md font-bold border-2 border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white transition-all shadow-lg" href="/signin">
            <span className="hidden lg:inline">Sign Up / Sign In</span>
            <span className="lg:hidden">Join</span>
          </a>
        </div>
      </nav>
      
      {/* Subtle security indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-60"></div>
    </header>
  );
}

