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

        {/* Partner Bonus Program */}
        <div className="border border-green-200 bg-green-50 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-green-800 mb-2">Partner Referral Bonus Program</h3>
              <p className="text-green-700 text-sm mb-3">
                Earn $1,000 USD for each trade partner you successfully refer to our protection services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-green-900 mb-2">How it works:</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• Refer your trade partners to Remova</li>
                    <li>• They must sign up for Vanish or Shield plan</li>
                    <li>• Earn $1,000 after their first month payment</li>
                    <li>• No limit on number of referrals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-900 mb-2">Requirements:</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• Partner must be an active trade relationship</li>
                    <li>• Minimum 12-month service commitment</li>
                    <li>• Cannot be existing Remova prospect</li>
                    <li>• Bonus paid after 30-day service period</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                  Start Referring Partners
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Your Partners List */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Your Partners</h2>
            <span className="text-sm text-gray-500">
              {client.plan_tier === 'free' ? 'Sample Data' : '1 partner added'}
            </span>
          </div>
          
          {client.plan_tier === 'free' ? (
            /* Free users see comprehensive sample data */
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">Shanghai Electronics Manufacturing</h3>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">Protected</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">Primary Supplier - Electronics Components</div>
                <div className="text-xs text-gray-500">Added 3 days ago • Last scan: Today • Status: Clean</div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">Global Logistics Partners Ltd</h3>
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Monitoring</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">Freight Forwarder - Asia-US Routes</div>
                <div className="text-xs text-gray-500">Added 1 week ago • Last scan: Yesterday • Status: 1 exposure found</div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">European Distribution Center</h3>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">Scanning</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">Distribution Partner - EU Market</div>
                <div className="text-xs text-gray-500">Added 2 days ago • Last scan: In progress • Status: Scanning 16 platforms</div>
              </div>
              
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Sample Data:</strong> This shows what your partner protection dashboard would look like. 
                  Upgrade to add real partners and get actual protection.
                </p>
              </div>
            </div>
          ) : (
            /* Paid users see minimal sample data */
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">Sample Manufacturing Partner</h3>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">Protected</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">Sample Supplier - Example Industry</div>
                <div className="text-xs text-gray-500">Sample entry • Add your real partners above</div>
              </div>
              
              <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600">
                  This is a sample entry. Use the form above to add your actual trade partners for protection.
                </p>
              </div>
            </div>
          )}
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
