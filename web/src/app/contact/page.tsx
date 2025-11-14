"use client";
import React, { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError('');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string || '';
    const phone = formData.get('phone') as string || '';
    const subject = formData.get('subject') as string || 'Privacy Consultation';
    const message = formData.get('message') as string;

    try {
      // Try API route first (works on Next.js server)
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      // If API route doesn't exist (404) or fails, fall back to mailto
      if (response.status === 404 || !response.ok) {
        throw new Error('API route not available');
      }

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage(result.message || 'Thank you for your message! We will respond within 24 hours.');
        e.currentTarget.reset();
      } else {
        setSubmitError(result.error || `Server error (${response.status}). Please try again or email notifications@remova.org directly.`);
      }
    } catch (error) {
      // Fallback to mailto for static sites (GitHub Pages)
      console.log('API route unavailable, using mailto fallback');
      const mailtoBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\n\nMessage:\n${message}`
      );
      const mailtoSubject = encodeURIComponent(subject);
      window.location.href = `mailto:notifications@remova.org?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      setSubmitMessage('Your email client should open. If it doesn\'t, please email notifications@remova.org directly.');
      e.currentTarget.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10L90 50L50 90L10 50Z' fill='%236366f1' opacity='0.4'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%236366f1' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 px-6 py-3 rounded-full mb-8 border border-blue-200 backdrop-blur-sm shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="font-bold text-lg">GET IN TOUCH</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8 bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Contact Our<br />
              <span className="text-blue-600">Privacy Experts</span>
            </h1>
            
            <p className="text-2xl leading-relaxed opacity-80 mb-12 max-w-4xl mx-auto text-gray-700 font-medium">
              Ready to protect your business data? Get in touch with our team for a confidential consultation about your privacy needs.
            </p>

            <div className="flex flex-col lg:flex-row gap-6 justify-center mb-12">
              <a href="#contact-form" className="btn btn-primary btn-lg text-xl px-12 py-6 font-black shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-2 border-blue-600">
                📧 Send Message
              </a>
              <a href="mailto:notifications@remova.org" className="btn btn-outline btn-lg text-xl px-12 py-6 font-bold border-2 border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white transition-all shadow-xl">
                ✉️ Email Directly
              </a>
              <a
                href="https://calendar.app.google/fUNW34GaHfSkApPs7"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-lg text-xl px-12 py-6 font-black shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-2 border-secondary">
                📅 Book a Call
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-gray-200">
                <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-gray-700">24h Response</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-gray-200">
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-gray-700">Confidential</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-gray-200">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-bold text-gray-700">Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10L70 40L40 70L10 40Z' fill='%236366f1' opacity='0.4'/%3E%3Ccircle cx='40' cy='40' r='25' fill='none' stroke='%236366f1' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 px-6 py-3 rounded-full mb-8 border border-blue-200 backdrop-blur-sm shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="font-bold text-lg">COMPANY INFORMATION</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-[0.9] bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              How to Reach Us
            </h2>
            <p className="text-2xl opacity-80 font-medium text-gray-700 max-w-4xl mx-auto">
              Multiple ways to connect with our privacy protection team
            </p>
          </div>
          
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            {/* Email */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-blue-300 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-800">Email</h3>
                <p className="text-gray-600 mb-4">notifications@remova.org</p>
                <a href="mailto:notifications@remova.org" className="btn btn-primary btn-sm font-black shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Send Email
                </a>
              </div>
            </div>
            
            {/* Phone */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-emerald-300 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-800">Phone</h3>
                <p className="text-gray-600 mb-4">+1 351 215-0442</p>
                <a href="tel:+13512150442" className="btn btn-outline btn-sm font-bold border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors">
                  Call Us
                </a>
              </div>
            </div>
            
            {/* Address */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-purple-300 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-800">Address</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  1111B S Governors Ave<br />
                  STE 39322<br />
                  Dover, DE 19904
                </p>
                <div className="btn btn-outline btn-sm font-bold border-2 border-purple-600 text-purple-700 cursor-default">
                  Headquarters
                </div>
              </div>
            </div>
            
            {/* Response Time */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-orange-300 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-800">Response</h3>
                <p className="text-gray-600 mb-4">Within 24 hours</p>
                <div className="btn btn-outline btn-sm font-bold border-2 border-orange-600 text-orange-700 cursor-default">
                  Fast Reply
                </div>
              </div>
            </div>
          </div>
          
          {/* Company Information */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 border border-blue-200 shadow-2xl">
              <h3 className="text-3xl font-black mb-8 text-gray-800">Remova Inc.</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div>
                  <h4 className="text-lg font-black text-gray-800 mb-3">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday<br />9:00 AM - 6:00 PM EST</p>
                </div>
                <div>
                  <h4 className="text-lg font-black text-gray-800 mb-3">Security</h4>
                  <p className="text-gray-600">All communications<br />encrypted & confidential</p>
                </div>
                <div>
                  <h4 className="text-lg font-black text-gray-800 mb-3">Service</h4>
                  <p className="text-gray-600">Enterprise privacy<br />protection specialists</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="mailto:notifications@remova.org"
                  className="btn btn-primary"
                >
                  Email notifications@remova.org
                </a>
                <a
                  href="tel:+13512150442"
                  className="btn btn-outline"
                >
                  Call +1 351 215-0442
                </a>
                <a
                  href="https://calendar.app.google/fUNW34GaHfSkApPs7"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  Schedule a meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-slate-50/30 to-blue-50/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 10L110 60L60 110L10 60Z' fill='%236366f1' opacity='0.4'/%3E%3Ccircle cx='60' cy='60' r='40' fill='none' stroke='%236366f1' stroke-width='2' opacity='0.3'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-60 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-500/10 to-blue-500/10 text-gray-600 px-6 py-3 rounded-full mb-8 border border-gray-200 backdrop-blur-sm shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-bold text-lg">CONTACT FORM</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-[0.9] bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <p className="text-2xl opacity-80 font-medium text-gray-700">
                Tell us about your privacy needs and we'll get back to you within 24 hours
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden">
              <div className="p-12">
                {submitMessage && (
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 p-6 rounded-2xl mb-8">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-bold text-emerald-700">{submitMessage}</span>
                    </div>
                  </div>
                )}
                
                {submitError && (
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 p-6 rounded-2xl mb-8">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="font-bold text-red-700">{submitError}</span>
                    </div>
                  </div>
                )}
                
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-bold text-gray-800 mb-3">Your Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-white shadow-sm"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-gray-800 mb-3">Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-white shadow-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-bold text-gray-800 mb-3">Company</label>
                      <input 
                        type="text" 
                        name="company"
                        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-white shadow-sm"
                        placeholder="Your Company Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-gray-800 mb-3">Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-white shadow-sm"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-bold text-gray-800 mb-3">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-white shadow-sm"
                      placeholder="Privacy consultation request"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-bold text-gray-800 mb-3">Message *</label>
                    <textarea 
                      name="message" 
                      required
                      rows={6}
                      className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-white shadow-sm resize-none"
                      placeholder="Tell us about your privacy protection needs..."
                    />
                  </div>
                  
                  <div className="flex flex-col gap-6 pt-6">
                    <div className="flex justify-center">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn btn-primary btn-lg text-xl px-12 py-6 font-black shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-2 border-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-3">
                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          '📧 Send Message'
                        )}
                      </button>
                    </div>
                    
                    <div className="text-center border-t border-gray-200 pt-6">
                      <p className="text-sm text-gray-600 mb-3">Prefer direct email?</p>
                      <a 
                        href="mailto:notifications@remova.org" 
                        className="btn btn-outline btn-lg font-bold border-2 border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white transition-all shadow-xl"
                      >
                        ✉️ notifications@remova.org
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Privacy Note */}
            <div className="mt-12 text-center">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-lg font-black text-gray-800">Your Privacy is Protected</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  All communications are encrypted and confidential. We never share your information with third parties and respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

