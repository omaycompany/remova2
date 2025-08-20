import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import NotificationPreferences from '@/components/NotificationPreferences';

export default async function SettingsPage() {
  // Server-side authentication check
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');
  
  if (!sessionCookie?.value) {
    redirect('/membership/free?redirect=/members/settings');
  }

  const client = await getClientById(sessionCookie.value);
  if (!client) {
    redirect('/membership/free?redirect=/members/settings');
  }

  return (
    <DashboardLayout title="Account Settings">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-medium text-gray-900">Account Settings</h1>
          <p className="text-gray-600 mt-1">
            Manage your account preferences and notification settings
          </p>
        </div>

        {/* Notification Preferences */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-4">Notification Preferences</h3>
          <NotificationPreferences clientId={client.id} />
        </div>

        {/* Account Information */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-4">Account Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Organization Name
              </label>
              <input
                type="text"
                value={client.org_name || ''}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={client.email || ''}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Plan Tier
              </label>
              <input
                type="text"
                value={client.plan_tier || 'Free'}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 capitalize"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Member Since
              </label>
              <input
                type="text"
                value={client.created_at ? new Date(client.created_at).toLocaleDateString() : 'N/A'}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
              />
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-700">
              To update your account information, please contact our support team at{' '}
              <a href="mailto:support@remova.org" className="underline">support@remova.org</a>
            </p>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-4">Privacy & Security</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-sm">Two-Factor Authentication</h4>
                <p className="text-xs text-gray-500">Add an extra layer of security to your account</p>
              </div>
              <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50">
                Enable
              </button>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-sm">Session Management</h4>
                <p className="text-xs text-gray-500">Manage active sessions and logout from all devices</p>
              </div>
              <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50">
                Manage
              </button>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-sm">Data Export</h4>
                <p className="text-xs text-gray-500">Download a copy of your account data</p>
              </div>
              <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50">
                Request Export
              </button>
            </div>
          </div>
        </div>

        {/* Billing & Subscription */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-4">Billing & Subscription</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-sm mb-2">Current Plan</h4>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="font-medium capitalize">{client.plan_tier || 'Free'} Plan</div>
                <div className="text-sm text-gray-500">
                  {client.plan_tier === 'free' ? 'No billing' : 'Billed annually'}
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-2">Quick Actions</h4>
              <div className="space-y-2">
                <a 
                  href="/members/subscription" 
                  className="block px-3 py-2 border border-gray-300 text-center rounded text-sm hover:bg-gray-50"
                >
                  Manage Subscription
                </a>
                {client.plan_tier === 'free' && (
                  <a 
                    href="/pricing" 
                    className="block px-3 py-2 bg-blue-600 text-white text-center rounded text-sm hover:bg-blue-700"
                  >
                    Upgrade Plan
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="border border-red-200 bg-red-50 rounded-lg p-6">
          <h3 className="font-medium text-red-800 mb-4">Danger Zone</h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="font-medium text-sm text-red-800">Pause Account</h4>
                <p className="text-xs text-red-600">Temporarily suspend your account and services</p>
              </div>
              <button className="px-3 py-1 border border-red-300 text-red-700 rounded text-sm hover:bg-red-100">
                Pause Account
              </button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="font-medium text-sm text-red-800">Delete Account</h4>
                <p className="text-xs text-red-600">Permanently delete your account and all data</p>
              </div>
              <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
