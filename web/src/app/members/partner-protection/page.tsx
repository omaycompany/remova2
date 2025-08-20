import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default async function PartnerProtectionPage() {
  // Server-side authentication check
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');
  
  if (!sessionCookie?.value) {
    redirect('/membership/free?redirect=/members/partner-protection');
  }

  const client = await getClientById(sessionCookie.value);
  if (!client) {
    redirect('/membership/free?redirect=/members/partner-protection');
  }

  return (
    <DashboardLayout title="Partner Protection">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-medium text-gray-900">Partner Protection</h1>
          <p className="text-gray-600 mt-1">
            Protect your trade partners' data and maintain confidential business relationships
          </p>
        </div>

        {/* Protection Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-blue-600">0</div>
            <div className="text-sm text-gray-500">Partners Protected</div>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-green-600">0</div>
            <div className="text-sm text-gray-500">Active Requests</div>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-gray-600">16</div>
            <div className="text-sm text-gray-500">Platforms Monitored</div>
          </div>
        </div>

        {/* Add Partner Form */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Add Trade Partner for Protection</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="partner-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Partner Company Name *
                </label>
                <input
                  type="text"
                  id="partner-name"
                  name="partner-name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter company name"
                  required
                />
              </div>
              <div>
                <label htmlFor="partner-country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country/Region
                </label>
                <select
                  id="partner-country"
                  name="partner-country"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select country</option>
                  <option value="United States">United States</option>
                  <option value="China">China</option>
                  <option value="India">India</option>
                  <option value="Germany">Germany</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Japan">Japan</option>
                  <option value="South Korea">South Korea</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="relationship-type" className="block text-sm font-medium text-gray-700 mb-1">
                Relationship Type
              </label>
              <select
                id="relationship-type"
                name="relationship-type"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select relationship type</option>
                <option value="Supplier">Supplier</option>
                <option value="Manufacturer">Manufacturer</option>
                <option value="Distributor">Distributor</option>
                <option value="Customer">Customer</option>
                <option value="Joint Venture">Joint Venture</option>
                <option value="Strategic Partner">Strategic Partner</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="protection-reason" className="block text-sm font-medium text-gray-700 mb-1">
                Protection Reason
              </label>
              <textarea
                id="protection-reason"
                name="protection-reason"
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Explain why this partner needs protection (optional)"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="urgent-request"
                name="urgent-request"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="urgent-request" className="text-sm text-gray-700">
                Urgent request (expedited processing)
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Submit Protection Request
              </button>
            </div>
          </form>
        </div>

        {/* Protection Process */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">How Partner Protection Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Protection Process:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">1</div>
                  <div>
                    <h4 className="font-medium text-sm">Submit Partner Information</h4>
                    <p className="text-xs text-gray-600">Provide partner company details and relationship type</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">2</div>
                  <div>
                    <h4 className="font-medium text-sm">Comprehensive Scan</h4>
                    <p className="text-xs text-gray-600">We scan 16+ platforms for partner data exposure</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">3</div>
                  <div>
                    <h4 className="font-medium text-sm">Protection Implementation</h4>
                    <p className="text-xs text-gray-600">Submit removal requests and legal protection measures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">4</div>
                  <div>
                    <h4 className="font-medium text-sm">Ongoing Monitoring</h4>
                    <p className="text-xs text-gray-600">Continuous monitoring for new exposures</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-3">What We Protect:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Trade relationship details
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Shipping manifests and bills of lading
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Supply chain intelligence data
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Commercial relationship mappings
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Transaction volume and frequency data
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Protected Partners List (Placeholder) */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Protected Partners</h2>
          <div className="text-center py-8 text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-sm">No partners protected yet</p>
            <p className="text-xs text-gray-400 mt-1">Submit your first partner protection request above</p>
          </div>
        </div>

        {/* Important Notes */}
        <div className="border border-gray-200 bg-yellow-50 rounded-lg p-6">
          <h3 className="font-medium text-yellow-800 mb-2">Important Considerations</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Partner protection requests may require additional documentation</li>
            <li>• Processing time varies by jurisdiction and platform cooperation</li>
            <li>• Some platforms may require direct authorization from the partner company</li>
            <li>• Urgent requests are prioritized but subject to additional fees</li>
            <li>• We maintain strict confidentiality of all partner relationships</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
