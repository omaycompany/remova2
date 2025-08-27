'use client';

interface Step {
  id: string;
  title: string;
  description?: string;
  status: 'completed' | 'in_progress' | 'pending' | 'error';
  timestamp?: string;
  details?: string;
}

interface ProgressStepperProps {
  steps: Step[];
  className?: string;
}

export default function ProgressStepper({ steps, className = '' }: ProgressStepperProps) {
  const getStepIcon = (status: Step['status']) => {
    switch (status) {
      case 'completed':
        return (
          <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      case 'in_progress':
        return (
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
          </div>
        );
      case 'error':
        return (
          <div className="w-8 h-8 bg-error rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        );
      default: // pending
        return (
          <div className="w-8 h-8 bg-base-300 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-base-content/40 rounded-full" />
          </div>
        );
    }
  };

  const getStepLineColor = (currentStatus: Step['status'], nextStatus?: Step['status']) => {
    if (currentStatus === 'completed') return 'bg-success';
    if (currentStatus === 'in_progress') return 'bg-primary';
    if (currentStatus === 'error') return 'bg-error';
    return 'bg-base-300';
  };

  const getTextColor = (status: Step['status']) => {
    switch (status) {
      case 'completed':
        return 'text-success';
      case 'in_progress':
        return 'text-primary';
      case 'error':
        return 'text-error';
      default:
        return 'text-base-content/60';
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {steps.map((step, index) => (
        <div key={step.id} className="relative">
          {/* Vertical line to next step */}
          {index < steps.length - 1 && (
            <div className="absolute left-4 top-8 w-0.5 h-6 bg-base-300">
              <div 
                className={`w-full transition-all duration-300 ${
                  step.status === 'completed' ? 'h-full bg-success' : 'h-0'
                }`} 
              />
            </div>
          )}
          
          {/* Step content */}
          <div className="flex items-start space-x-4">
            {/* Step icon */}
            <div className="flex-shrink-0">
              {getStepIcon(step.status)}
            </div>
            
            {/* Step details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className={`text-sm font-medium ${getTextColor(step.status)}`}>
                  {step.title}
                </h3>
                {step.timestamp && (
                  <span className="text-xs text-base-content/50">
                    {step.timestamp}
                  </span>
                )}
              </div>
              
              {step.description && (
                <p className="mt-1 text-sm text-base-content/70">
                  {step.description}
                </p>
              )}
              
              {step.details && (
                <div className="mt-2 text-xs text-base-content/60 bg-base-200 rounded-lg p-2">
                  {step.details}
                </div>
              )}
              
              {/* Status badge */}
              <div className="mt-2">
                <span className={`
                  inline-flex items-center px-2 py-1 text-xs font-medium rounded-full
                  ${step.status === 'completed' ? 'bg-success/10 text-success' : ''}
                  ${step.status === 'in_progress' ? 'bg-primary/10 text-primary' : ''}
                  ${step.status === 'error' ? 'bg-error/10 text-error' : ''}
                  ${step.status === 'pending' ? 'bg-base-300 text-base-content/60' : ''}
                `}>
                  {step.status === 'completed' && 'Completed'}
                  {step.status === 'in_progress' && 'In Progress'}
                  {step.status === 'error' && 'Error'}
                  {step.status === 'pending' && 'Pending'}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

