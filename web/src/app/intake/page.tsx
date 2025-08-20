import { Metadata } from 'next';
import IntakeForm from '@/components/IntakeForm';

export const metadata: Metadata = {
  title: 'Company Intake - Remova',
  description: 'Secure company intake form to begin your privacy protection services.',
  robots: 'noindex, nofollow',
};

export default function IntakePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Company Information Intake
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Please provide your company details so we can begin your privacy protection services immediately. 
              This information is securely encrypted and only used for your protection filing.
            </p>
          </div>
          
          {/* Security Notice */}
          <div className="border border-green-200 bg-green-50 rounded-lg p-4 mb-8">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <h3 className="font-medium text-green-800">Secure & Confidential</h3>
                <p className="text-sm text-green-700">
                  All information is encrypted end-to-end and protected under attorney-client privilege. 
                  We never share your data with third parties.
                </p>
              </div>
            </div>
          </div>

          <IntakeForm />
        </div>
      </div>
    </div>
  );
}