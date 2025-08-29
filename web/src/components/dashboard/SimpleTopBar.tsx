'use client';

import { useState, useEffect } from 'react';
import NotificationDropdown from '@/components/NotificationDropdown';
import ProfileDropdown from '@/components/ProfileDropdown';

interface Client {
  id: string;
  email: string;
  org_name?: string;
  plan_tier: string;
}

interface SimpleTopBarProps {
  onMenuToggle: () => void;
  title?: string;
}

export default function SimpleTopBar({ onMenuToggle, title = "Dashboard" }: SimpleTopBarProps) {
  const [client, setClient] = useState<Client | null>(null);

  // Load client info from session
  useEffect(() => {
    const loadClientInfo = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const clientData = await response.json();
          setClient(clientData);
        }
      } catch (error) {
        console.error('Error loading client info:', error);
      }
    };

    loadClientInfo();
  }, []);

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
          <NotificationDropdown />

          {/* User Profile */}
          <ProfileDropdown client={client} />
        </div>
      </div>
    </div>
  );
}
