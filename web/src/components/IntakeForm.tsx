"use client";

import { useState } from 'react';

interface IntakeFormProps {
  plan: 'stealth' | 'vanish' | 'shield';
  onSubmit?: (data: IntakeFormData) => void;
  className?: string;
}

export interface IntakeFormData {
  // Company Information
  companyName: string;
  legalCompanyName: string;
  companyType: 'corporation' | 'llc' | 'partnership' | 'sole_proprietorship' | 'other';
  foundedYear: string;
  employeeCount: string;
  annualRevenue: string;
  website: string;
  
  // Business Details
  primaryIndustry: string;
  products: string;
  services: string;
  targetMarkets: string[];
  
  // Contact Information
  primaryContactName: string;
  primaryContactTitle: string;
  primaryContactEmail: string;
  primaryContactPhone: string;
  companyAddress: string;
  
  // Trade Information
  importExportActivity: 'imports' | 'exports' | 'both' | 'neither';
  primaryTradingPartners: string;
  keySuppliers: string;
  tradingVolume: string;
  
  // Privacy Concerns
  currentPrivacyConcerns: string;
  previousDataLeaks: boolean;
  previousDataLeaksDetails?: string;
  sensitiveBusinessInfo: string;
  competitorConcerns: string;
  
  // Service Preferences
  urgencyLevel: 'immediate' | 'within_week' | 'within_month' | 'standard';
  preferredCommunication: 'email' | 'phone' | 'slack' | 'teams';
  notificationPreferences: string[];
  
  // Additional Information
  specialRequirements: string;
  additionalComments: string;
}

const industries = [
  'Manufacturing', 'Technology', 'Healthcare', 'Finance', 'Retail',
  'Automotive', 'Textiles', 'Electronics', 'Chemicals', 'Food & Beverage',
  'Machinery', 'Construction', 'Energy', 'Aerospace', 'Agriculture', 'Other'
];

const markets = [
  'North America', 'Europe', 'Asia-Pacific', 'Latin America', 
  'Middle East', 'Africa', 'Global'
];

const employeeCounts = [
  '1-10', '11-50', '51-200', '201-500', '501-1000', '1000+'
];

const revenueRanges = [
  'Under $1M', '$1M-$10M', '$10M-$50M', '$50M-$100M', '$100M-$500M', '$500M+'
];

export default function IntakeForm({ plan, onSubmit, className = '' }: IntakeFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;
  
  const [formData, setFormData] = useState<IntakeFormData>({
    companyName: '',
    legalCompanyName: '',
    companyType: 'corporation',
    foundedYear: '',
    employeeCount: '',
    annualRevenue: '',
    website: '',
    primaryIndustry: '',
    products: '',
    services: '',
    targetMarkets: [],
    primaryContactName: '',
    primaryContactTitle: '',
    primaryContactEmail: '',
    primaryContactPhone: '',
    companyAddress: '',
    importExportActivity: 'neither',
    primaryTradingPartners: '',
    keySuppliers: '',
    tradingVolume: '',
    currentPrivacyConcerns: '',
    previousDataLeaks: false,
    previousDataLeaksDetails: '',
    sensitiveBusinessInfo: '',
    competitorConcerns: '',
    urgencyLevel: 'standard',
    preferredCommunication: 'email',
    notificationPreferences: [],
    specialRequirements: '',
    additionalComments: ''
  });

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayUpdate = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field as keyof IntakeFormData] as string[]), value]
        : (prev[field as keyof IntakeFormData] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit form data
      const response = await fetch('/api/intake/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, plan }),
      });

      if (response.ok) {
        onSubmit?.(formData);
      } else {
        throw new Error('Failed to submit intake form');
      }
    } catch (error) {
      console.error('Intake form submission error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Company Information';
      case 2: return 'Business Details';
      case 3: return 'Contact Information';
      case 4: return 'Trade Activity';
      case 5: return 'Privacy & Security';
      case 6: return 'Service Preferences';
      default: return 'Intake Form';
    }
  };

        return (
    <div className={`bg-white rounded-3xl border border-gray-200 shadow-lg ${className}`}>
      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Complete Your {plan === 'stealth' ? 'Stealth' : plan === 'vanish' ? 'Vanish' : 'Shield'} Setup
          </h2>
          <p className="text-gray-600">
            Help us configure your privacy protection services for maximum effectiveness
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm font-medium text-gray-600">{getStepTitle()}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Company Information */}
          {currentStep === 1 && (
          <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Company Name (as known publicly) *</span>
                </label>
                <input
                  type="text"
                    className="input input-bordered w-full"
                  value={formData.companyName}
                  onChange={(e) => updateFormData('companyName', e.target.value)}
                    required
                    placeholder="Your Company"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Legal Company Name *</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={formData.legalCompanyName}
                    onChange={(e) => updateFormData('legalCompanyName', e.target.value)}
                    required
                    placeholder="Your Company LLC"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Company Type *</span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    value={formData.companyType}
                    onChange={(e) => updateFormData('companyType', e.target.value)}
                    required
                  >
                    <option value="corporation">Corporation</option>
                    <option value="llc">LLC</option>
                    <option value="partnership">Partnership</option>
                    <option value="sole_proprietorship">Sole Proprietorship</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Founded Year *</span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered w-full"
                    value={formData.foundedYear}
                    onChange={(e) => updateFormData('foundedYear', e.target.value)}
                    required
                    min="1800"
                    max={new Date().getFullYear()}
                    placeholder="2020"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Employee Count *</span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    value={formData.employeeCount}
                    onChange={(e) => updateFormData('employeeCount', e.target.value)}
                    required
                  >
                    <option value="">Select range</option>
                    {employeeCounts.map(count => (
                      <option key={count} value={count}>{count}</option>
                    ))}
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Annual Revenue</span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    value={formData.annualRevenue}
                    onChange={(e) => updateFormData('annualRevenue', e.target.value)}
                  >
                    <option value="">Prefer not to say</option>
                    {revenueRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Company Website</span>
                </label>
                <input
                  type="url"
                  className="input input-bordered w-full"
                  value={formData.website}
                  onChange={(e) => updateFormData('website', e.target.value)}
                  placeholder="https://yourcompany.com"
                />
              </div>
            </div>
          )}

          {/* Step 2: Business Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Primary Industry *</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  value={formData.primaryIndustry}
                  onChange={(e) => updateFormData('primaryIndustry', e.target.value)}
                  required
                >
                  <option value="">Select industry</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Primary Products *</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-24"
                  value={formData.products}
                  onChange={(e) => updateFormData('products', e.target.value)}
                  required
                  placeholder="Describe your main products..."
                />
            </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Primary Services</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-24"
                  value={formData.services}
                  onChange={(e) => updateFormData('services', e.target.value)}
                  placeholder="Describe your main services..."
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Target Markets *</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                  {markets.map(market => (
                    <label key={market} className="label cursor-pointer justify-start gap-3">
                <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        checked={formData.targetMarkets.includes(market)}
                        onChange={(e) => handleArrayUpdate('targetMarkets', market, e.target.checked)}
                      />
                      <span className="label-text text-sm">{market}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Contact Information */}
          {currentStep === 3 && (
          <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Primary Contact Name *</span>
                </label>
                <input
                  type="text"
                    className="input input-bordered w-full"
                  value={formData.primaryContactName}
                  onChange={(e) => updateFormData('primaryContactName', e.target.value)}
                    required
                  placeholder="John Smith"
                />
              </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Title/Position *</span>
                </label>
                <input
                  type="text"
                    className="input input-bordered w-full"
                  value={formData.primaryContactTitle}
                  onChange={(e) => updateFormData('primaryContactTitle', e.target.value)}
                    required
                    placeholder="CEO, VP Operations, etc."
                />
            </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email Address *</span>
                </label>
                <input
                  type="email"
                    className="input input-bordered w-full"
                  value={formData.primaryContactEmail}
                  onChange={(e) => updateFormData('primaryContactEmail', e.target.value)}
                    required
                    placeholder="john@company.com"
                />
              </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Phone Number</span>
                </label>
                <input
                  type="tel"
                    className="input input-bordered w-full"
                  value={formData.primaryContactPhone}
                  onChange={(e) => updateFormData('primaryContactPhone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Company Address *</span>
              </label>
                <textarea
                  className="textarea textarea-bordered w-full h-20"
                value={formData.companyAddress}
                onChange={(e) => updateFormData('companyAddress', e.target.value)}
                  required
                  placeholder="Street address, city, state, country, postal code"
              />
              </div>
            </div>
          )}

          {/* Step 4: Trade Activity */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Import/Export Activity *</span>
                </label>
                <div className="flex flex-wrap gap-4 mt-2">
                  {[
                    { value: 'imports', label: 'Imports Only' },
                    { value: 'exports', label: 'Exports Only' },
                    { value: 'both', label: 'Both Imports & Exports' },
                    { value: 'neither', label: 'No International Trade' }
                  ].map(option => (
                    <label key={option.value} className="label cursor-pointer gap-3">
                <input
                        type="radio"
                        name="importExportActivity"
                        className="radio"
                        value={option.value}
                        checked={formData.importExportActivity === option.value}
                        onChange={(e) => updateFormData('importExportActivity', e.target.value)}
                      />
                      <span className="label-text">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Primary Trading Partners</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-24"
                  value={formData.primaryTradingPartners}
                  onChange={(e) => updateFormData('primaryTradingPartners', e.target.value)}
                  placeholder="List your main international trading partners, customers, or markets..."
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Key Suppliers</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-24"
                  value={formData.keySuppliers}
                  onChange={(e) => updateFormData('keySuppliers', e.target.value)}
                  placeholder="List your main suppliers or vendor relationships..."
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Annual Trading Volume</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  value={formData.tradingVolume}
                  onChange={(e) => updateFormData('tradingVolume', e.target.value)}
                >
                  <option value="">Prefer not to say</option>
                  <option value="under-1m">Under $1M</option>
                  <option value="1m-10m">$1M - $10M</option>
                  <option value="10m-50m">$10M - $50M</option>
                  <option value="50m-100m">$50M - $100M</option>
                  <option value="over-100m">Over $100M</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 5: Privacy & Security */}
          {currentStep === 5 && (
          <div className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Current Privacy Concerns *</span>
              </label>
                <textarea
                  className="textarea textarea-bordered w-full h-32"
                  value={formData.currentPrivacyConcerns}
                  onChange={(e) => updateFormData('currentPrivacyConcerns', e.target.value)}
                  required
                  placeholder="What specific privacy threats or exposures are you most concerned about? What brought you to Remova?"
                />
              </div>

              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                    <input
                      type="checkbox"
                    className="checkbox"
                    checked={formData.previousDataLeaks}
                    onChange={(e) => updateFormData('previousDataLeaks', e.target.checked)}
                  />
                  <span className="label-text font-semibold">Have you experienced previous data leaks or privacy breaches?</span>
                  </label>
            </div>

              {formData.previousDataLeaks && (
                <div className="form-control ml-8">
                  <label className="label">
                    <span className="label-text font-semibold">Previous Data Leak Details</span>
              </label>
              <textarea
                    className="textarea textarea-bordered w-full h-24"
                    value={formData.previousDataLeaksDetails}
                    onChange={(e) => updateFormData('previousDataLeaksDetails', e.target.value)}
                    placeholder="Please describe the incident(s) and what information was exposed..."
                  />
            </div>
              )}

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Most Sensitive Business Information *</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-24"
                  value={formData.sensitiveBusinessInfo}
                  onChange={(e) => updateFormData('sensitiveBusinessInfo', e.target.value)}
                  required
                  placeholder="What types of business information would be most damaging if exposed to competitors?"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Specific Competitor Concerns</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-24"
                  value={formData.competitorConcerns}
                  onChange={(e) => updateFormData('competitorConcerns', e.target.value)}
                  placeholder="Are there specific competitors you're concerned about? Any known competitive intelligence activities?"
                />
              </div>
            </div>
          )}

          {/* Step 6: Service Preferences */}
          {currentStep === 6 && (
          <div className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Implementation Urgency *</span>
              </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  {[
                    { value: 'immediate', label: 'Immediate (Active threat)', bg: 'bg-red-50 border-red-200' },
                    { value: 'within_week', label: 'Within 1 week', bg: 'bg-orange-50 border-orange-200' },
                    { value: 'within_month', label: 'Within 1 month', bg: 'bg-yellow-50 border-yellow-200' },
                    { value: 'standard', label: 'Standard timeline', bg: 'bg-green-50 border-green-200' }
                  ].map(option => (
                    <label key={option.value} className={`p-4 rounded-lg border-2 cursor-pointer ${option.bg} ${formData.urgencyLevel === option.value ? 'ring-2 ring-blue-500' : ''}`}>
                    <input
                        type="radio"
                        name="urgencyLevel"
                        className="radio mr-3"
                        value={option.value}
                        checked={formData.urgencyLevel === option.value}
                        onChange={(e) => updateFormData('urgencyLevel', e.target.value)}
                      />
                      <span className="font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Preferred Communication Method *</span>
              </label>
                <div className="flex flex-wrap gap-4 mt-2">
                  {[
                    { value: 'email', label: 'Email' },
                    { value: 'phone', label: 'Phone' },
                    { value: 'slack', label: 'Slack' },
                    { value: 'teams', label: 'Microsoft Teams' }
                ].map(option => (
                    <label key={option.value} className="label cursor-pointer gap-3">
                    <input
                      type="radio"
                        name="preferredCommunication"
                        className="radio"
                      value={option.value}
                        checked={formData.preferredCommunication === option.value}
                        onChange={(e) => updateFormData('preferredCommunication', e.target.value)}
                    />
                      <span className="label-text">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Notification Preferences</span>
              </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {[
                    'Breach alerts', 'Weekly reports', 'Monthly summaries', 
                    'Service updates', 'Platform changes', 'Account notifications'
                  ].map(notification => (
                    <label key={notification} className="label cursor-pointer justify-start gap-3">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        checked={formData.notificationPreferences.includes(notification)}
                        onChange={(e) => handleArrayUpdate('notificationPreferences', notification, e.target.checked)}
                      />
                      <span className="label-text text-sm">{notification}</span>
                  </label>
                ))}
              </div>
            </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Special Requirements</span>
              </label>
              <textarea
                  className="textarea textarea-bordered w-full h-24"
                  value={formData.specialRequirements}
                  onChange={(e) => updateFormData('specialRequirements', e.target.value)}
                  placeholder="Any specific compliance requirements, industry regulations, or special considerations..."
              />
            </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Additional Comments</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-24"
                  value={formData.additionalComments}
                  onChange={(e) => updateFormData('additionalComments', e.target.value)}
                  placeholder="Anything else you'd like us to know about your business or privacy needs?"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <button
              type="button"
              className={`btn btn-outline ${currentStep === 1 ? 'btn-disabled' : ''}`}
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          Previous
        </button>

            <div className="text-center">
              <span className="text-sm text-gray-500">
                {currentStep} of {totalSteps} steps completed
              </span>
            </div>

            {currentStep < totalSteps ? (
          <button
                type="button"
                className="btn btn-primary"
            onClick={nextStep}
          >
            Next Step
          </button>
        ) : (
          <button
                type="submit"
                className={`btn btn-primary btn-lg ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Complete Setup'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}