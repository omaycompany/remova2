'use client';

import { useState, useEffect } from 'react';

interface NotificationSettings {
  email: {
    weeklyReports: boolean;
    takedownUpdates: boolean;
    cbpUpdates: boolean;
    newExposures: boolean;
    referralUpdates: boolean;
    securityAlerts: boolean;
    billingNotices: boolean;
    productUpdates: boolean;
  };
  frequency: {
    reports: 'realtime' | 'daily' | 'weekly' | 'monthly';
    alerts: 'realtime' | 'daily' | 'weekly';
  };
  channels: {
    email: boolean;
    sms: boolean;
    dashboard: boolean;
  };
}

const defaultSettings: NotificationSettings = {
  email: {
    weeklyReports: true,
    takedownUpdates: true,
    cbpUpdates: true,
    newExposures: true,
    referralUpdates: true,
    securityAlerts: true,
    billingNotices: true,
    productUpdates: false,
  },
  frequency: {
    reports: 'weekly',
    alerts: 'realtime',
  },
  channels: {
    email: true,
    sms: false,
    dashboard: true,
  },
};

interface NotificationPreferencesProps {
  clientId: string;
}

export default function NotificationPreferences({ clientId }: NotificationPreferencesProps) {
  const [settings, setSettings] = useState<NotificationSettings>(defaultSettings);
  const [isLoading, setIsLoading] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    // TODO: Load settings from API
    // For now, use default settings
    setSettings(defaultSettings);
  }, [clientId]);

  const updateSetting = (section: keyof NotificationSettings, key: string, value: boolean | string) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
    setHasChanges(true);
  };

  const saveSettings = async () => {
    setIsLoading(true);
    try {
      // TODO: Save to API
      console.log('Saving notification settings:', settings);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setHasChanges(false);
      alert('Settings saved successfully!');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Error saving settings. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetToDefaults = () => {
    setSettings(defaultSettings);
    setHasChanges(true);
  };

  return (
    <div className="space-y-6">
      {/* Email Notifications */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Email Notifications</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Weekly Protection Reports</div>
              <div className="text-xs text-gray-500">Summary of your protection status and recent activity</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.email.weeklyReports}
                onChange={(e) => updateSetting('email', 'weeklyReports', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Takedown Updates</div>
              <div className="text-xs text-gray-500">When data removal requests are completed or updated</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.email.takedownUpdates}
                onChange={(e) => updateSetting('email', 'takedownUpdates', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">CBP Filing Updates</div>
              <div className="text-xs text-gray-500">Status changes on your CBP confidentiality filing</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.email.cbpUpdates}
                onChange={(e) => updateSetting('email', 'cbpUpdates', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">New Data Exposures</div>
              <div className="text-xs text-gray-500">Alerts when new data exposures are discovered</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.email.newExposures}
                onChange={(e) => updateSetting('email', 'newExposures', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Referral Updates</div>
              <div className="text-xs text-gray-500">When you earn referral commissions or payouts</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.email.referralUpdates}
                onChange={(e) => updateSetting('email', 'referralUpdates', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Security Alerts</div>
              <div className="text-xs text-gray-500">Login attempts, password changes, and security issues</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.email.securityAlerts}
                onChange={(e) => updateSetting('email', 'securityAlerts', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Billing Notices</div>
              <div className="text-xs text-gray-500">Payment confirmations, renewal reminders, and invoices</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.email.billingNotices}
                onChange={(e) => updateSetting('email', 'billingNotices', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Product Updates</div>
              <div className="text-xs text-gray-500">New features, service improvements, and platform updates</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.email.productUpdates}
                onChange={(e) => updateSetting('email', 'productUpdates', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Frequency Settings */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Notification Frequency</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report Frequency
            </label>
            <select
              value={settings.frequency.reports}
              onChange={(e) => updateSetting('frequency', 'reports', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="realtime">Real-time</option>
              <option value="daily">Daily digest</option>
              <option value="weekly">Weekly summary</option>
              <option value="monthly">Monthly report</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Alert Frequency
            </label>
            <select
              value={settings.frequency.alerts}
              onChange={(e) => updateSetting('frequency', 'alerts', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="realtime">Immediate</option>
              <option value="daily">Daily batch</option>
              <option value="weekly">Weekly batch</option>
            </select>
          </div>
        </div>
      </div>

      {/* Communication Channels */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Communication Channels</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Email Notifications</div>
              <div className="text-xs text-gray-500">Receive notifications via email</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.channels.email}
                onChange={(e) => updateSetting('channels', 'email', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">SMS Notifications</div>
              <div className="text-xs text-gray-500">Receive critical alerts via text message</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.channels.sms}
                onChange={(e) => updateSetting('channels', 'sms', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Dashboard Notifications</div>
              <div className="text-xs text-gray-500">Show notifications in your dashboard</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.channels.dashboard}
                onChange={(e) => updateSetting('channels', 'dashboard', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
        <button
          onClick={saveSettings}
          disabled={!hasChanges || isLoading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading && (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          {isLoading ? 'Saving...' : 'Save Changes'}
        </button>
        
        <button
          onClick={resetToDefaults}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
        >
          Reset to Defaults
        </button>
        
        <div className="text-xs text-gray-500 flex items-center">
          {hasChanges && '• You have unsaved changes'}
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <h5 className="font-medium text-sm mb-2">Privacy Notice</h5>
        <p className="text-xs text-gray-600">
          We respect your privacy and will only send you notifications you&apos;ve agreed to receive. 
          You can update these preferences anytime. Critical security and billing notifications 
          cannot be disabled for account security purposes.
        </p>
      </div>
    </div>
  );
}
