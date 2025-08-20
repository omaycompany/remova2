import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You - Welcome to Remova',
  description: 'Thank you for joining Remova. We will begin your privacy protection immediately.',
  robots: 'noindex, nofollow', // Don't index thank you pages
};

function ThankYouContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-base-200 to-secondary/5">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Header */}
          <div className="mb-12">
            <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thank You. Your 
              <span className="text-primary block md:inline md:ml-3">Digital Shield is Being Activated.</span>
            </h1>
            
            <p className="text-xl opacity-80 mb-8 leading-relaxed">
              Welcome to Remova. We have received your payment and our team is already beginning the process of securing your business data.
            </p>
            
            {/* What Happens Next */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 mb-8">
              <h3 className="font-bold text-primary text-xl mb-6 text-center">What Happens Next:</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Provide Your Details (Next 10 minutes)</h4>
                    <p className="opacity-80">Complete our secure intake form below. It should take about 10 minutes and provides us with the company information we need to protect you.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Initial Protection Begins (Within 24 hours)</h4>
                    <p className="opacity-80">As soon as you complete the intake, we will begin the CBP filing process and our initial platform scans. Your shield activation starts immediately.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Monitor Your Dashboard (First 24-48 hours)</h4>
                    <p className="opacity-80">You will see real-time progress in your new dashboard within the first 24-48 hours. Track filings, removals, and ongoing protection status.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card bg-base-100 border border-base-300">
              <div className="card-body text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Step 1: Complete Your Profile</h3>
                <p className="text-sm opacity-80">
                  Fill out the form below with your company details so we can begin your CBP filing and takedown campaigns.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 border border-base-300">
              <div className="card-body text-center p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Step 2: CBP Filing Begins</h3>
                <p className="text-sm opacity-80">
                  Our team will immediately begin your CBP Manifest Confidentiality filing to protect future shipments.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 border border-base-300">
              <div className="card-body text-center p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Step 3: Takedown Campaigns</h3>
                <p className="text-sm opacity-80">
                  We&apos;ll start systematic takedown requests across 40+ data broker platforms to remove your historical data.
                </p>
              </div>
            </div>
          </div>

          {/* HubSpot Form */}
          <div className="card bg-base-100 border border-base-300 max-w-3xl mx-auto">
            <div className="card-body p-8">
              <h2 className="text-2xl font-bold text-center mb-6">Complete Your Company Profile</h2>
              <p className="text-center opacity-80 mb-8">
                Please provide your company details so we can begin your privacy protection services immediately.
              </p>
              
              {/* HubSpot Form Container */}
              <div id="hubspot-form-container">
                {/* HubSpot form will be loaded here via script */}
                <div className="text-center py-8">
                  <div className="loading loading-spinner loading-lg text-primary"></div>
                  <p className="mt-4 opacity-70">Loading secure form...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">
              <strong>Questions?</strong> Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:hello@remova.org" 
                className="btn btn-outline"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Support
              </a>
              <a 
                href="/contact" 
                className="btn btn-outline"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Schedule Call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* HubSpot Form Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Load HubSpot form
            (function() {
              const portalId = "${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || 'YOUR_PORTAL_ID'}";
              const formId = "${process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || 'YOUR_FORM_ID'}";
              
              if (portalId === 'YOUR_PORTAL_ID' || formId === 'YOUR_FORM_ID') {
                document.getElementById('hubspot-form-container').innerHTML = 
                  '<div class="alert alert-warning"><strong>Form Configuration Needed:</strong> Please set NEXT_PUBLIC_HUBSPOT_PORTAL_ID and NEXT_PUBLIC_HUBSPOT_FORM_ID environment variables.</div>';
                return;
              }
              
              const script = document.createElement('script');
              script.src = 'https://js.hsforms.net/forms/v2.js';
              script.onload = function() {
                window.hbspt?.forms?.create({
                  region: "na1",
                  portalId: portalId,
                  formId: formId,
                  target: '#hubspot-form-container'
                });
              };
              document.head.appendChild(script);
            })();
          `,
        }}
      />
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}