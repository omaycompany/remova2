'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import SimpleTopBar from './SimpleTopBar';
import NotificationBanner from './NotificationBanner';
import FloatingHelpButton from './FloatingHelpButton';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  showNotification?: boolean;
  notificationProps?: React.ComponentProps<typeof NotificationBanner>;
}

export default function DashboardLayout({ 
  children, 
  title = "Dashboard",
  showNotification = false,
  notificationProps
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      {/* Main Content Area */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <SimpleTopBar 
          title={title}
          onMenuToggle={() => setSidebarOpen(true)}
        />
        
        {/* Notification Banner */}
        {showNotification && notificationProps && (
          <NotificationBanner {...notificationProps} />
        )}
        
        {/* Page Content */}
        <div className="px-2 sm:px-4 lg:px-6 py-2 sm:py-4">
          {children}
        </div>
      </div>
      
      {/* Floating Help Button */}
      <FloatingHelpButton />
    </div>
  );
}