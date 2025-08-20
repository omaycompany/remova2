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
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-base-200 to-secondary/5">
      {/* Background decorative elements */}
      {backgroundElements && (
        <>
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl transform translate-x-40 translate-y-40"></div>
        </>
      )}
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {badge && (
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  {badge.icon || defaultIcon}
                  <span className="font-semibold">{badge.text}</span>
                </div>
              )}
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {title}
                {titleAccent && (
                  <span className="text-primary block md:inline md:ml-3">{titleAccent}</span>
                )}
              </h1>
              
              <p className="text-xl leading-relaxed opacity-80">
                {description}
              </p>
            </div>

            {/* Key features */}
            {features && features.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Key Features:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-${feature.color} rounded-full`}></div>
                      <span className="text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA buttons */}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {primaryCta && (
                  <Link href={primaryCta.href} className="btn btn-primary btn-lg">
                    {primaryCta.text}
                    {primaryCta.icon && (
                      <span className="ml-2">{primaryCta.icon}</span>
                    )}
                  </Link>
                )}
                {secondaryCta && (
                  <Link href={secondaryCta.href} className="btn btn-outline btn-lg">
                    {secondaryCta.text}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Right column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main illustration card */}
              <div className="card bg-base-100 border border-base-300 shadow-2xl">
                <div className="card-body p-8">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto">
                      {visual.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2">{visual.title}</h3>
                      <p className="text-sm opacity-70">{visual.description}</p>
                    </div>
                    
                    {/* Stats */}
                    {visual.stats && visual.stats.length > 0 && (
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-base-300">
                        {visual.stats.map((stat, index) => (
                          <div key={index} className="text-center">
                            <div className={`text-2xl font-bold text-${stat.color}`}>{stat.value}</div>
                            <div className="text-xs opacity-60">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-warning" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}