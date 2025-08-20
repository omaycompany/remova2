'use client';

import { useState } from 'react';

interface NotificationBannerProps {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  dismissible?: boolean;
  onDismiss?: () => void;
}

export default function NotificationBanner({ 
  type = 'info', 
  title, 
  message, 
  action, 
  dismissible = true,
  onDismiss 
}: NotificationBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  const typeStyles = {
    info: 'bg-info/10 border-info/20 text-info',
    success: 'bg-success/10 border-success/20 text-success', 
    warning: 'bg-warning/10 border-warning/20 text-warning',
    error: 'bg-error/10 border-error/20 text-error'
  };

  const iconMap = {
    info: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    success: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  return (
    <div className={`border-l-4 p-4 ${typeStyles[type]}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            {iconMap[type]}
          </div>
          <div className="flex-1">
            {title && (
              <h3 className="text-sm font-medium mb-1">
                {title}
              </h3>
            )}
            <p className="text-sm opacity-90">
              {message}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 ml-4">
          {action && (
            <button
              onClick={action.onClick}
              className="text-sm font-medium underline hover:no-underline"
            >
              {action.label}
            </button>
          )}
          
          {dismissible && (
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 ml-2 opacity-70 hover:opacity-100"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Example usage component for demo
export function ExampleBanners() {
  return (
    <div className="space-y-4">
      <NotificationBanner
        type="success"
        title="CBP Filing Approved"
        message="Your manifest confidentiality filing has been successfully processed and approved."
        action={{
          label: "View Details",
          onClick: () => console.log("View CBP details")
        }}
      />
      
      <NotificationBanner
        type="warning" 
        title="Action Required"
        message="Please update your payment method to continue your subscription."
        action={{
          label: "Update Payment",
          onClick: () => console.log("Update payment")
        }}
      />
      
      <NotificationBanner
        type="info"
        message="New anonymity check results are available for review."
        action={{
          label: "View Results",
          onClick: () => console.log("View results")
        }}
      />
    </div>
  );
}