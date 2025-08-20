"use client";

import { useState, useEffect } from "react";

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("remova-analytics-consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      // Initialize analytics if consent was previously given
      initializeAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("remova-analytics-consent", "accepted");
    setShowBanner(false);
    initializeAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem("remova-analytics-consent", "declined");
    setShowBanner(false);
  };

  const initializeAnalytics = () => {
    // Simple privacy-friendly analytics - you can replace with your preferred solution
    // This is a placeholder for analytics initialization
    console.log("Analytics initialized with user consent");
    
    // Example: Initialize privacy-friendly analytics like Plausible or Simple Analytics
    // if (typeof window !== 'undefined') {
    //   // Initialize your analytics service here
    // }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-base-100 border-t border-base-300 shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-sm">Privacy-Friendly Analytics</h3>
            <p className="text-sm opacity-80 mt-1">
              We use privacy-friendly analytics to understand how our site is used. 
              No personal data is collected or shared with third parties.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button 
              onClick={handleDecline}
              className="btn btn-ghost btn-sm"
            >
              Decline
            </button>
            <button 
              onClick={handleAccept}
              className="btn btn-primary btn-sm"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}