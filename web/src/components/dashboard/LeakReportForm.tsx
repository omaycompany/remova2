'use client';

import { useState } from 'react';

interface LeakReportFormProps {
  onClose: () => void;
  onSubmit: (leakData: { url: string; platform: string; description: string; urgency: string }) => void;
}

export default function LeakReportForm({ onClose, onSubmit }: LeakReportFormProps) {
  const [formData, setFormData] = useState({
    url: '',
    platform: '',
    description: '',
    urgency: 'normal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.url && formData.platform && formData.description) {
      onSubmit(formData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Report Data Leak</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">URL Where Data Found *</label>
            <input
              type="url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/your-data"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Platform/Website *</label>
            <input
              type="text"
              value={formData.platform}
              onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., ImportGenius, Panjiva, etc."
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Describe what data is exposed (shipment details, company info, etc.)"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Urgency Level</label>
            <select
              value={formData.urgency}
              onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="low">Low - General exposure</option>
              <option value="normal">Normal - Standard takedown</option>
              <option value="high">High - Sensitive data exposed</option>
              <option value="urgent">Urgent - Competitive threat</option>
            </select>
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
