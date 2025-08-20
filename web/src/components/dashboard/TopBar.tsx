'use client';

import { useState } from 'react';

interface TopBarProps {
  onMenuToggle: () => void;
  title?: string;
}

export default function TopBar({ onMenuToggle, title = "Dashboard" }: TopBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Left side - Menu toggle & Title */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 text-gray-400 hover:text-gray-600"
            aria-label="Toggle sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <h1 className="hidden sm:block text-xl font-medium text-gray-900">
            {title}
          </h1>
        </div>

        {/* Center - Search Box */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side - Icons */}
        <div className="flex items-center space-x-2">
          {/* Notifications */}
          <div className="relative">
            <button 
              className="p-2 text-gray-400 hover:text-gray-600 relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.24 21.06a9.003 9.003 0 01-5.24-8.06c0-4.97 4.03-9 9-9s9 4.03 9 9c0 1.15-.22 2.25-.62 3.26" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9z" />
              </svg>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-medium">2</span>
              </div>
            </button>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-80 p-2 shadow-xl border border-base-300">
              <li className="menu-title p-3">
                <div className="flex items-center justify-between w-full">
                  <span className="font-semibold">Notifications</span>
                  <span className="badge badge-primary badge-sm">2 new</span>
                </div>
              </li>
              <li>
                <a className="flex flex-col items-start p-3 hover:bg-success/10">
                  <div className="flex items-center gap-2 w-full">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <div className="font-medium text-sm">CBP Filing Approved</div>
                    <span className="text-xs opacity-50 ml-auto">2h</span>
                  </div>
                  <div className="text-xs opacity-70 mt-1 ml-4">Your manifest confidentiality filing has been approved and is now active</div>
                </a>
              </li>
              <li>
                <a className="flex flex-col items-start p-3 hover:bg-primary/10">
                  <div className="flex items-center gap-2 w-full">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="font-medium text-sm">Takedown Complete</div>
                    <span className="text-xs opacity-50 ml-auto">5h</span>
                  </div>
                  <div className="text-xs opacity-70 mt-1 ml-4">Successfully removed data from Panjiva platform</div>
                </a>
              </li>
              <li className="border-t border-base-300 mt-2 pt-2">
                <a className="text-center text-sm text-primary font-medium p-2">View all notifications</a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <button className="btn btn-ghost btn-sm" title="Help & Support">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>

          {/* User Profile */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-content font-bold text-xs">AC</span>
              </div>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-base-300">
              <li className="menu-title">
                <span>Acme Trading Corp</span>
              </li>
              <li><a href="/members/settings">Account Settings</a></li>
              <li><a href="/members/subscription">Subscription</a></li>
              <li className="border-t border-base-300 mt-2 pt-2">
                <a href="/members/logout" className="text-error">Sign Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}