'use client';

import { useState } from 'react';

interface SimpleTopBarProps {
  onMenuToggle: () => void;
  title?: string;
}

export default function SimpleTopBar({ onMenuToggle, title = "Dashboard" }: SimpleTopBarProps) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200 h-16">
      <div className="flex items-center justify-between h-full px-4">
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

        {/* Center - Spacer */}
        <div className="flex-1"></div>

        {/* Right side - Notifications & Profile */}
        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <div className="relative">
            <button 
              className="p-2 text-gray-400 hover:text-gray-600 relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9z" />
              </svg>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white">2</span>
              </div>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 top-12 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-3 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Notifications</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">2 new</span>
                  </div>
                </div>
                <div className="p-2">
                  <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="font-medium text-sm">CBP Filing Approved</div>
                      <span className="text-xs text-gray-500 ml-auto">2h</span>
                    </div>
                    <div className="text-xs text-gray-600">Your manifest confidentiality filing has been approved.</div>
                  </div>
                  <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="font-medium text-sm">New Data Exposure</div>
                      <span className="text-xs text-gray-500 ml-auto">1d</span>
                    </div>
                    <div className="text-xs text-gray-600">Data found on ImportGenius. Takedown initiated.</div>
                  </div>
                </div>
                <div className="p-2 border-t border-gray-200">
                  <button className="w-full text-center py-2 text-sm text-gray-600 hover:text-gray-800">
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">AC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
