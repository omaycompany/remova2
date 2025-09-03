import React from "react";
import Link from "next/link";

interface PageHeroProps {
  badge?: {
    text: string;
    icon?: React.ReactNode;
  };
  title: string;
  titleAccent?: string;
  description: string;
  features?: Array<{
    icon: string;
    text: string;
    color: "primary" | "secondary" | "accent";
  }>;
  primaryCta?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  visualCard?: {
    icon: React.ReactNode;
    title: string;
    description: string;
    stats?: Array<{
      value: string;
      label: string;
      color: "primary" | "secondary" | "accent" | "success";
    }>;
  };
  backgroundElements?: boolean;
}

export default function PageHero({
  badge,
  title,
  titleAccent,
  description,
  features,
  primaryCta,
  secondaryCta,
  visualCard,
  backgroundElements = true,
}: PageHeroProps) {
  const defaultIcon = (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
    </svg>
  );

  const defaultVisual = {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
      </svg>
    ),
    title: "Secure Service",
    description: "Professional data protection solutions",
    stats: [
      { value: "24/7", label: "Support", color: "primary" as const },
      { value: "99%", label: "Uptime", color: "secondary" as const },
      { value: "Pro", label: "Grade", color: "accent" as const },
    ],
  };

  const visual = visualCard || defaultVisual;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10L90 50L50 90L10 50Z' fill='%233b82f6' opacity='0.4'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%233b82f6' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Enhanced Background decorative elements */}
      {backgroundElements && (
        <>
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-100 rounded-full blur-3xl opacity-30 animate-pulse delay-500"></div>
        </>
      )}
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Enhanced Content */}
          <div className="space-y-10">
            <div className="space-y-8">
              {badge && (
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 px-6 py-3 rounded-full border border-blue-200 backdrop-blur-sm shadow-lg">
                  <div className="relative">
                    {badge.icon || defaultIcon}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                  </div>
                  <span className="font-bold text-lg">{badge.text}</span>
                </div>
              )}
              
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                {title}
                {titleAccent && (
                  <span className="text-blue-600 block mt-2">{titleAccent}</span>
                )}
              </h1>
              
              <p className="text-2xl leading-relaxed text-gray-700 font-medium">
                {description}
              </p>
            </div>

            {/* Enhanced Key features */}
            {features && features.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-gray-800">Key Features:</h3>
                <div className="grid grid-cols-1 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/70 border border-blue-200 shadow-sm hover:shadow-lg transition-all">
                      <div className="text-2xl">{feature.icon}</div>
                      <span className="text-lg font-bold text-gray-800">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Enhanced CTA buttons */}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col lg:flex-row gap-6">
                {primaryCta && (
                  <Link href={primaryCta.href} className="group btn btn-primary btn-lg text-xl px-12 py-6 font-black shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-2 border-blue-600">
                    <span className="flex items-center gap-3">
                      {primaryCta.text}
                      {primaryCta.icon && (
                        <span className="group-hover:translate-x-1 transition-transform">{primaryCta.icon}</span>
                      )}
                    </span>
                  </Link>
                )}
                {secondaryCta && (
                  <Link href={secondaryCta.href} className="btn btn-outline btn-lg text-xl px-12 py-6 font-bold border-2 border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white transition-all shadow-xl">
                    {secondaryCta.text}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Right column - Enhanced Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Enhanced Main illustration card */}
              <div className="bg-white/80 backdrop-blur-md border-2 border-blue-200 shadow-2xl rounded-3xl overflow-hidden">
                <div className="p-10">
                  <div className="text-center space-y-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-blue-200">
                      {visual.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-black mb-4 text-gray-800">{visual.title}</h3>
                      <p className="text-lg text-gray-600 font-medium">{visual.description}</p>
                    </div>
                    
                    {/* Enhanced Stats */}
                    {visual.stats && visual.stats.length > 0 && (
                      <div className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-blue-100">
                        {visual.stats.map((stat, index) => (
                          <div key={index} className="text-center">
                            <div className={`text-3xl font-black text-blue-600 mb-2`}>{stat.value}</div>
                            <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/20 pointer-events-none rounded-3xl"></div>
              </div>
              
              {/* Enhanced Floating elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center shadow-lg border border-emerald-200">
                <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center shadow-lg border border-orange-200">
                <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            {/* Enhanced Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 rounded-3xl transform rotate-2 scale-105 -z-10 border border-blue-100"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-pink-50/20 rounded-3xl transform -rotate-1 scale-110 -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}