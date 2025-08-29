import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default async function PrivacyRepresentativePage() {
  // Server-side authentication check
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');
  
  if (!sessionCookie?.value) {
    redirect('/membership/free?redirect=/members/privacy-representative');
  }

  const client = await getClientById(sessionCookie.value);
  if (!client) {
    redirect('/membership/free?redirect=/members/privacy-representative');
  }

  return (
    <DashboardLayout title="Privacy Representative">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-medium text-gray-900">Your Privacy Representative</h1>
          <p className="text-gray-600 mt-1">
            Direct access to your dedicated privacy protection specialist
          </p>
        </div>

        {/* Representative Profile */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-medium text-gray-900">Sarah Chen</h2>
              <p className="text-blue-600 text-sm font-medium">Senior Privacy Protection Specialist</p>
              <p className="text-gray-600 text-sm mt-2">
                Sarah has over 8 years of experience in international trade privacy and data protection. 
                She specializes in commercial intelligence platforms and cross-border privacy compliance.
              </p>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900 text-sm mb-2">Specializations:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Commercial trade data protection</li>
                    <li>• International privacy law compliance</li>
                    <li>• Platform takedown negotiations</li>
                    <li>• Supply chain privacy strategies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm mb-2">Languages:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• English (Native)</li>
                    <li>• Mandarin Chinese (Fluent)</li>
                    <li>• Spanish (Conversational)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <svg className="w-8 h-8 mx-auto mb-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="font-medium text-gray-900">Email</h3>
            <p className="text-sm text-gray-600 mt-1">sarah.chen@remova.org</p>
            <p className="text-xs text-gray-500 mt-2">Response within 4 hours</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
              Send Email
            </button>
          </div>
          
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <svg className="w-8 h-8 mx-auto mb-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <h3 className="font-medium text-gray-900">Phone</h3>
            <p className="text-sm text-gray-600 mt-1">+1 (555) 123-4567</p>
            <p className="text-xs text-gray-500 mt-2">Available Mon-Fri 9AM-6PM EST</p>
            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
              Schedule Call
            </button>
          </div>
          
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <svg className="w-8 h-8 mx-auto mb-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <h3 className="font-medium text-gray-900">Video Call</h3>
            <p className="text-sm text-gray-600 mt-1">Secure video consultation</p>
            <p className="text-xs text-gray-500 mt-2">30-60 minute sessions</p>
            <button className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700">
              Book Meeting
            </button>
          </div>
        </div>



        {/* Quick Actions */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="border border-gray-300 rounded-lg p-4 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900">Ask a Question</h3>
                  <p className="text-sm text-gray-600 mt-1">Get expert advice on privacy protection strategies</p>
                </div>
              </div>
            </button>
            
            <button className="border border-gray-300 rounded-lg p-4 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900">Report Urgent Issue</h3>
                  <p className="text-sm text-gray-600 mt-1">Immediate assistance for critical privacy concerns</p>
                </div>
              </div>
            </button>
            
            <button className="border border-gray-300 rounded-lg p-4 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900">Request Status Update</h3>
                  <p className="text-sm text-gray-600 mt-1">Get detailed updates on ongoing protection efforts</p>
                </div>
              </div>
            </button>
            
            <button className="border border-gray-300 rounded-lg p-4 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-purple-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900">Review Strategy</h3>
                  <p className="text-sm text-gray-600 mt-1">Schedule consultation to review protection strategy</p>
                </div>
              </div>
            </button>
          </div>
        </div>



        {/* Contact History */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Contact History</h2>
          
          {client.plan_tier === 'free' ? (
            /* Free users see comprehensive sample communication history */
            <div className="space-y-4">
              <div className="border-l-4 border-blue-200 pl-4 py-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">Initial Privacy Assessment Complete</h4>
                  <span className="text-xs text-gray-500">3 days ago</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Sarah completed your comprehensive privacy assessment and identified 12 high-risk exposures across major platforms.
                </p>
                <div className="text-xs text-blue-600">✉ Email • 📞 Follow-up call scheduled</div>
              </div>
              
              <div className="border-l-4 border-green-200 pl-4 py-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">CBP Confidentiality Filing Submitted</h4>
                  <span className="text-xs text-gray-500">5 days ago</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Sarah submitted your CBP confidentiality filing and provided updates on expected processing timeline.
                </p>
                <div className="text-xs text-green-600">📋 Document filed • 📧 Confirmation sent</div>
              </div>
              
              <div className="border-l-4 border-yellow-200 pl-4 py-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">Panjiva Takedown Request Initiated</h4>
                  <span className="text-xs text-gray-500">1 week ago</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Sarah initiated takedown requests for your data on Panjiva and provided strategy for other platforms.
                </p>
                <div className="text-xs text-yellow-600">🔄 In progress • 📊 Status tracking active</div>
              </div>
              
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Sample Communications:</strong> This shows the level of personal attention and detailed updates you'd receive. 
                  Upgrade to get your dedicated privacy representative.
                </p>
              </div>
            </div>
          ) : (
            /* Paid users see minimal sample */
            <div className="space-y-4">
              <div className="border-l-4 border-blue-200 pl-4 py-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">Welcome & Initial Setup</h4>
                  <span className="text-xs text-gray-500">Sample</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Your privacy representative will contact you within 24 hours to begin your protection setup.
                </p>
                <div className="text-xs text-blue-600">Sample communication entry</div>
              </div>
              
              <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600">
                  Your actual communications with Sarah will appear here once your service begins.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
