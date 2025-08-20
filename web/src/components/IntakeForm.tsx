'use client';

import { useState } from 'react';

interface IntakeData {
  // Step 1: Company Information
  companyName: string;
  legalBusinessName: string;
  industry: string;
  companySize: string;
  yearEstablished: string;
  website: string;
  
  // Step 2: Contact Information
  primaryContactName: string;
  primaryContactTitle: string;
  primaryContactEmail: string;
  primaryContactPhone: string;
  companyAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  
  // Step 3: Trade Information
  tradingCountries: string[];
  primaryProducts: string;
  monthlyShipments: string;
  averageShipmentValue: string;
  keyPartners: string;
  competitiveSensitivity: string;
  
  // Step 4: Current Exposure
  knownExposures: string[];
  discoveryMethod: string;
  urgencyLevel: string;
  additionalConcerns: string;
  
  // Step 5: Service Preferences
  preferredContactMethod: string;
  reportingFrequency: string;
  specialRequests: string;
  nda: boolean;
  termsAccepted: boolean;
}

const initialData: IntakeData = {
  companyName: '',
  legalBusinessName: '',
  industry: '',
  companySize: '',
  yearEstablished: '',
  website: '',
  primaryContactName: '',
  primaryContactTitle: '',
  primaryContactEmail: '',
  primaryContactPhone: '',
  companyAddress: '',
  city: '',
  state: '',
  zipCode: '',
  country: 'United States',
  tradingCountries: [],
  primaryProducts: '',
  monthlyShipments: '',
  averageShipmentValue: '',
  keyPartners: '',
  competitiveSensitivity: '',
  knownExposures: [],
  discoveryMethod: '',
  urgencyLevel: '',
  additionalConcerns: '',
  preferredContactMethod: 'email',
  reportingFrequency: 'weekly',
  specialRequests: '',
  nda: false,
  termsAccepted: false,
};

const steps = [
  { id: 1, title: 'Company Details', description: 'Basic company information' },
  { id: 2, title: 'Contact Information', description: 'Primary contact and address' },
  { id: 3, title: 'Trade Profile', description: 'Your international trade activities' },
  { id: 4, title: 'Current Exposure', description: 'Known data exposure concerns' },
  { id: 5, title: 'Service Preferences', description: 'How you want to work with us' },
];

const countries = [
  'United States', 'Canada', 'Mexico', 'United Kingdom', 'Germany', 'France', 'Italy', 'Spain',
  'Netherlands', 'Belgium', 'Switzerland', 'China', 'Japan', 'South Korea', 'India', 'Singapore',
  'Australia', 'Brazil', 'Argentina', 'Chile', 'Colombia', 'Turkey', 'UAE', 'Saudi Arabia',
  'Other'
];

const industries = [
  'Manufacturing', 'Electronics', 'Automotive', 'Textiles & Apparel', 'Food & Beverage',
  'Chemicals', 'Pharmaceuticals', 'Medical Devices', 'Industrial Equipment', 'Consumer Goods',
  'Technology', 'Energy', 'Mining', 'Agriculture', 'Logistics', 'Other'
];

const companySizes = [
  '1-10 employees', '11-50 employees', '51-200 employees', '201-500 employees', 
  '501-1000 employees', '1000+ employees'
];

export default function IntakeForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<IntakeData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<IntakeData>>({});

  const updateFormData = (field: keyof IntakeData, value: string | string[] | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<IntakeData> = {};

    switch (step) {
      case 1:
        if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
        if (!formData.legalBusinessName.trim()) newErrors.legalBusinessName = 'Legal business name is required';
        if (!formData.industry) newErrors.industry = 'Industry is required';
        if (!formData.companySize) newErrors.companySize = 'Company size is required';
        break;
      case 2:
        if (!formData.primaryContactName.trim()) newErrors.primaryContactName = 'Contact name is required';
        if (!formData.primaryContactEmail.trim()) newErrors.primaryContactEmail = 'Email is required';
        if (!formData.companyAddress.trim()) newErrors.companyAddress = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.country) newErrors.country = 'Country is required';
        break;
      case 3:
        if (formData.tradingCountries.length === 0) newErrors.tradingCountries = 'At least one trading country is required' as string;
        if (!formData.primaryProducts.trim()) newErrors.primaryProducts = 'Primary products description is required';
        break;
      case 4:
        if (!formData.urgencyLevel) newErrors.urgencyLevel = 'Urgency level is required';
        break;
      case 5:
        if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms' as string;
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    try {
      // TODO: Submit to API
      console.log('Submitting intake data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to thank you or dashboard
      window.location.href = '/thank-you?intake=completed';
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name (Trading Name) *
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => updateFormData('companyName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Acme Trading Company"
                />
                {errors.companyName && <p className="text-red-600 text-xs mt-1">{errors.companyName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Legal Business Name *
                </label>
                <input
                  type="text"
                  value={formData.legalBusinessName}
                  onChange={(e) => updateFormData('legalBusinessName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Acme Trading Company LLC"
                />
                {errors.legalBusinessName && <p className="text-red-600 text-xs mt-1">{errors.legalBusinessName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Industry *
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => updateFormData('industry', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select industry</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
                {errors.industry && <p className="text-red-600 text-xs mt-1">{errors.industry}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Size *
                </label>
                <select
                  value={formData.companySize}
                  onChange={(e) => updateFormData('companySize', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select size</option>
                  {companySizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                {errors.companySize && <p className="text-red-600 text-xs mt-1">{errors.companySize}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Year Established
                </label>
                <input
                  type="number"
                  min="1800"
                  max={new Date().getFullYear()}
                  value={formData.yearEstablished}
                  onChange={(e) => updateFormData('yearEstablished', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="2020"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Website
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => updateFormData('website', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://acmetrading.com"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Primary Contact Name *
                </label>
                <input
                  type="text"
                  value={formData.primaryContactName}
                  onChange={(e) => updateFormData('primaryContactName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Smith"
                />
                {errors.primaryContactName && <p className="text-red-600 text-xs mt-1">{errors.primaryContactName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title/Position
                </label>
                <input
                  type="text"
                  value={formData.primaryContactTitle}
                  onChange={(e) => updateFormData('primaryContactTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="CEO, Trading Director, etc."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.primaryContactEmail}
                  onChange={(e) => updateFormData('primaryContactEmail', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@acmetrading.com"
                />
                {errors.primaryContactEmail && <p className="text-red-600 text-xs mt-1">{errors.primaryContactEmail}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.primaryContactPhone}
                  onChange={(e) => updateFormData('primaryContactPhone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Address *
              </label>
              <input
                type="text"
                value={formData.companyAddress}
                onChange={(e) => updateFormData('companyAddress', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="123 Business Street, Suite 100"
              />
              {errors.companyAddress && <p className="text-red-600 text-xs mt-1">{errors.companyAddress}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City *
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => updateFormData('city', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="New York"
                />
                {errors.city && <p className="text-red-600 text-xs mt-1">{errors.city}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State/Province
                </label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => updateFormData('state', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="NY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ZIP/Postal Code
                </label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => updateFormData('zipCode', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="10001"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country *
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => updateFormData('country', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
                {errors.country && <p className="text-red-600 text-xs mt-1">{errors.country}</p>}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Countries You Trade With *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-60 overflow-y-auto border border-gray-300 rounded-lg p-3">
                {countries.filter(country => country !== 'Other').map(country => (
                  <label key={country} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={formData.tradingCountries.includes(country)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          updateFormData('tradingCountries', [...formData.tradingCountries, country]);
                        } else {
                          updateFormData('tradingCountries', formData.tradingCountries.filter(c => c !== country));
                        }
                      }}
                      className="text-blue-600"
                    />
                    {country}
                  </label>
                ))}
              </div>
              {errors.tradingCountries && <p className="text-red-600 text-xs mt-1">{errors.tradingCountries}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Products/Services *
              </label>
              <textarea
                value={formData.primaryProducts}
                onChange={(e) => updateFormData('primaryProducts', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the main products or services your company imports/exports..."
              />
              {errors.primaryProducts && <p className="text-red-600 text-xs mt-1">{errors.primaryProducts}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Shipments (approximate)
                </label>
                <select
                  value={formData.monthlyShipments}
                  onChange={(e) => updateFormData('monthlyShipments', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select range</option>
                  <option value="1-5">1-5 shipments</option>
                  <option value="6-20">6-20 shipments</option>
                  <option value="21-50">21-50 shipments</option>
                  <option value="51-100">51-100 shipments</option>
                  <option value="100+">100+ shipments</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Average Shipment Value
                </label>
                <select
                  value={formData.averageShipmentValue}
                  onChange={(e) => updateFormData('averageShipmentValue', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select range</option>
                  <option value="Under $10k">Under $10,000</option>
                  <option value="$10k-$50k">$10,000 - $50,000</option>
                  <option value="$50k-$100k">$50,000 - $100,000</option>
                  <option value="$100k-$500k">$100,000 - $500,000</option>
                  <option value="$500k+">$500,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Key Trading Partners (Optional)
              </label>
              <textarea
                value={formData.keyPartners}
                onChange={(e) => updateFormData('keyPartners', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="List important suppliers, customers, or partners you want to protect..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Competitive Sensitivity Level
              </label>
              <select
                value={formData.competitiveSensitivity}
                onChange={(e) => updateFormData('competitiveSensitivity', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select sensitivity level</option>
                <option value="low">Low - Basic trade info is okay to be public</option>
                <option value="medium">Medium - Some competitive concerns</option>
                <option value="high">High - Trade data is highly sensitive</option>
                <option value="critical">Critical - Any exposure causes significant damage</option>
              </select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Known Data Exposures (Check all that apply)
              </label>
              <div className="space-y-2">
                {[
                  'Panjiva (S&P Global)',
                  'ImportGenius', 
                  'ImportYeti',
                  'Trademo',
                  'Descartes Datamyne',
                  'Volza',
                  'ImportKey',
                  'MarineTraffic',
                  'Other platform (specify in additional concerns)',
                  'Not sure / Haven\'t checked'
                ].map(platform => (
                  <label key={platform} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={formData.knownExposures.includes(platform)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          updateFormData('knownExposures', [...formData.knownExposures, platform]);
                        } else {
                          updateFormData('knownExposures', formData.knownExposures.filter(p => p !== platform));
                        }
                      }}
                      className="text-blue-600"
                    />
                    {platform}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                How did you discover data exposure?
              </label>
              <select
                value={formData.discoveryMethod}
                onChange={(e) => updateFormData('discoveryMethod', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select method</option>
                <option value="google-search">Google search results</option>
                <option value="competitor-intelligence">Competitor told us</option>
                <option value="partner-notification">Partner/supplier notified us</option>
                <option value="direct-browsing">Direct platform browsing</option>
                <option value="media-coverage">Media coverage or news</option>
                <option value="security-audit">Security audit or compliance review</option>
                <option value="other">Other</option>
                <option value="none">Haven&apos;t discovered any yet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Urgency Level *
              </label>
              <select
                value={formData.urgencyLevel}
                onChange={(e) => updateFormData('urgencyLevel', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select urgency</option>
                <option value="critical">Critical - Immediate action needed</option>
                <option value="high">High - Need protection within 1-2 weeks</option>
                <option value="medium">Medium - Need protection within 1 month</option>
                <option value="low">Low - Preventive protection is fine</option>
              </select>
              {errors.urgencyLevel && <p className="text-red-600 text-xs mt-1">{errors.urgencyLevel}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Concerns or Context
              </label>
              <textarea
                value={formData.additionalConcerns}
                onChange={(e) => updateFormData('additionalConcerns', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any specific concerns, deadlines, or additional context we should know..."
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method
              </label>
              <div className="space-y-2">
                {[
                  { value: 'email', label: 'Email updates (recommended)' },
                  { value: 'phone', label: 'Phone calls for important updates' },
                  { value: 'dashboard', label: 'Dashboard notifications only' },
                  { value: 'mixed', label: 'Mix of email and phone' }
                ].map(option => (
                  <label key={option.value} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={option.value}
                      checked={formData.preferredContactMethod === option.value}
                      onChange={(e) => updateFormData('preferredContactMethod', e.target.value)}
                      className="text-blue-600"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reporting Frequency
              </label>
              <div className="space-y-2">
                {[
                  { value: 'realtime', label: 'Real-time alerts (for urgent matters)' },
                  { value: 'weekly', label: 'Weekly summary reports (recommended)' },
                  { value: 'monthly', label: 'Monthly comprehensive reports' },
                  { value: 'quarterly', label: 'Quarterly reviews only' }
                ].map(option => (
                  <label key={option.value} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="reportingFrequency"
                      value={option.value}
                      checked={formData.reportingFrequency === option.value}
                      onChange={(e) => updateFormData('reportingFrequency', e.target.value)}
                      className="text-blue-600"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Special Requests or Requirements
              </label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) => updateFormData('specialRequests', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any special requirements, compliance needs, or custom requests..."
              />
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="space-y-4">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={formData.nda}
                    onChange={(e) => updateFormData('nda', e.target.checked)}
                    className="mt-1 text-blue-600"
                  />
                  <span className="text-sm">
                    I would like to sign a mutual Non-Disclosure Agreement (NDA) before sharing detailed company information
                  </span>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={(e) => updateFormData('termsAccepted', e.target.checked)}
                    className="mt-1 text-blue-600"
                  />
                  <span className="text-sm">
                    I accept the <a href="/terms" className="text-blue-600 underline" target="_blank">Terms of Service</a> and <a href="/privacy" className="text-blue-600 underline" target="_blank">Privacy Policy</a> *
                  </span>
                </label>
                {errors.termsAccepted && <p className="text-red-600 text-xs">{errors.termsAccepted}</p>}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-medium text-gray-900">
            Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
          </div>
          <div className="text-sm text-gray-500">
            {Math.round((currentStep / steps.length) * 100)}% Complete
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {steps[currentStep - 1].description}
        </p>
      </div>

      {/* Form Content */}
      <div className="p-6">
        {renderStep()}
      </div>

      {/* Navigation */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {currentStep < steps.length ? (
          <button
            onClick={nextStep}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Next Step
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </div>
            ) : (
              'Submit Intake'
            )}
          </button>
        )}
      </div>
    </div>
  );
}
