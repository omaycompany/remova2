import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default async function ReportLeakPage() {
  // Server-side authentication check
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');
  
  if (!sessionCookie?.value) {
    redirect('/membership/free?redirect=/members/report-leak');
  }

  const client = await getClientById(sessionCookie.value);
  if (!client) {
    redirect('/membership/free?redirect=/members/report-leak');
  }

  return (
    <DashboardLayout title="Report Data Leak">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-medium text-gray-900">Report Data Leak</h1>
          <p className="text-gray-600 mt-1">
            Found your company data exposed online? Report it immediately for fast removal
          </p>
        </div>

        {/* Usage Limits Banner */}
        <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <h3 className="font-medium text-blue-800">On-Demand Takedown Requests</h3>
                <p className="text-sm text-blue-700">
                  You have <span className="font-semibold">4 of 5</span> on-demand requests remaining for your annual term
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">4</div>
              <div className="text-xs text-blue-600">Remaining</div>
            </div>
          </div>
          <div className="mt-3">
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <p className="text-xs text-blue-600 mt-1">
              Your plan renews on March 15, 2025. Need more requests? <a href="/pricing" className="underline hover:no-underline">Upgrade your plan</a>
            </p>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="border border-red-200 bg-red-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h3 className="font-medium text-red-800">Time-Sensitive: Act Fast</h3>
              <p className="text-sm text-red-700 mt-1">
                Data leaks can spread quickly across platforms. Report immediately to minimize exposure and prevent data aggregation.
              </p>
            </div>
          </div>
        </div>

        {/* Report Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-red-600">0</div>
            <div className="text-sm text-gray-500">Active Reports</div>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-yellow-600">0</div>
            <div className="text-sm text-gray-500">Under Review</div>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-green-600">0</div>
            <div className="text-sm text-gray-500">Resolved</div>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-blue-600">24</div>
            <div className="text-sm text-gray-500">Avg Response (hrs)</div>
          </div>
        </div>

        {/* Report Form */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Submit Data Leak Report</h2>
          <form className="space-y-6">
            {/* URL and Platform */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="leak-url" className="block text-sm font-medium text-gray-700 mb-1">
                  URL Where Data Found *
                </label>
                <input
                  type="url"
                  id="leak-url"
                  name="leak-url"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/your-company-data"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Provide the exact URL where you found the exposed data</p>
              </div>
              <div>
                <label htmlFor="platform-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Platform/Website Name *
                </label>
                <input
                  type="text"
                  id="platform-name"
                  name="platform-name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., ImportGenius, Panjiva, etc."
                  required
                />
              </div>
            </div>

            {/* Data Type */}
            <div>
              <label htmlFor="data-type" className="block text-sm font-medium text-gray-700 mb-1">
                Type of Exposed Data *
              </label>
              <select
                id="data-type"
                name="data-type"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select data type</option>
                <option value="shipping-manifests">Shipping Manifests / Bills of Lading</option>
                <option value="trade-data">Import/Export Trade Data</option>
                <option value="supplier-info">Supplier/Partner Information</option>
                <option value="company-directory">Company Directory Listing</option>
                <option value="vessel-tracking">Vessel/Cargo Tracking Data</option>
                <option value="customs-records">Customs Records</option>
                <option value="business-intelligence">Business Intelligence Reports</option>
                <option value="financial-data">Financial/Transaction Data</option>
                <option value="contact-info">Contact Information</option>
                <option value="other">Other (describe below)</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="leak-description" className="block text-sm font-medium text-gray-700 mb-1">
                Detailed Description *
              </label>
              <textarea
                id="leak-description"
                name="leak-description"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe what specific data is exposed, how you found it, and any other relevant details..."
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Include details like: specific data fields visible, date ranges, partner names mentioned, etc.
              </p>
            </div>

            {/* Severity and Discovery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="urgency-level" className="block text-sm font-medium text-gray-700 mb-1">
                  Urgency Level *
                </label>
                <select
                  id="urgency-level"
                  name="urgency-level"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select urgency</option>
                  <option value="critical">Critical - Public & Detailed Data</option>
                  <option value="high">High - Sensitive Business Data</option>
                  <option value="medium">Medium - Limited Data Exposure</option>
                  <option value="low">Low - Basic Company Information</option>
                </select>
              </div>
              <div>
                <label htmlFor="discovery-method" className="block text-sm font-medium text-gray-700 mb-1">
                  How Did You Find This?
                </label>
                <select
                  id="discovery-method"
                  name="discovery-method"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select method</option>
                  <option value="google-search">Google Search</option>
                  <option value="competitor-intel">Competitor Intelligence</option>
                  <option value="partner-notification">Partner Notification</option>
                  <option value="direct-browsing">Direct Platform Browsing</option>
                  <option value="alert-system">Third-party Alert System</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <label htmlFor="additional-info" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Information
              </label>
              <textarea
                id="additional-info"
                name="additional-info"
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any other relevant information, context, or concerns about this data leak..."
              />
            </div>

            {/* Screenshot Upload (Placeholder) */}
            <div>
              <label htmlFor="screenshot" className="block text-sm font-medium text-gray-700 mb-1">
                Screenshot Evidence (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <svg className="w-8 h-8 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-sm text-gray-600">Upload screenshot showing the exposed data</p>
                <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                <input type="file" className="hidden" accept="image/*" />
                <button type="button" className="mt-2 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  Choose File
                </button>
              </div>
            </div>

            {/* Contact Preference */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method for Updates
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="contact-method" value="email" className="text-blue-600" defaultChecked />
                  <span className="text-sm">Email notifications (default)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="contact-method" value="phone" className="text-blue-600" />
                  <span className="text-sm">Phone call for urgent matters</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="contact-method" value="dashboard" className="text-blue-600" />
                  <span className="text-sm">Dashboard notifications only</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-gray-200">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
              >
                Submit Urgent Report
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Our team will review your report within 2 hours and begin immediate action.
              </p>
            </div>
          </form>
        </div>

        {/* Previous Reports */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Your Reports</h2>
          <div className="text-center py-8 text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-sm">No data leak reports submitted yet</p>
            <p className="text-xs text-gray-400 mt-1">When you submit reports, they'll appear here with status updates</p>
          </div>
        </div>

        {/* Response Timeline */}
        <div className="border border-gray-200 bg-blue-50 rounded-lg p-6">
          <h3 className="font-medium text-blue-800 mb-3">What Happens Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-medium">1</div>
              <h4 className="font-medium text-blue-900">Immediate Review</h4>
              <p className="text-blue-700 text-xs">Within 2 hours</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-medium">2</div>
              <h4 className="font-medium text-blue-900">Removal Request</h4>
              <p className="text-blue-700 text-xs">Within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-medium">3</div>
              <h4 className="font-medium text-blue-900">Follow-up</h4>
              <p className="text-blue-700 text-xs">3-7 days</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-medium">4</div>
              <h4 className="font-medium text-blue-900">Verification</h4>
              <p className="text-blue-700 text-xs">Data removed</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
