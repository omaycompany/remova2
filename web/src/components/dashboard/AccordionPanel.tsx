'use client';

import React, { useState } from 'react';

interface ActionButton {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'warning' | 'error';
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

interface AccordionPanelProps {
  title: string;
  subtitle?: string;
  badge?: {
    text: string;
    variant?: 'info' | 'success' | 'warning' | 'error';
  };
  defaultExpanded?: boolean;
  actions?: ActionButton[];
  children: React.ReactNode;
  className?: string;
}

export default function AccordionPanel({
  title,
  subtitle,
  badge,
  defaultExpanded = false,
  actions = [],
  children,
  className = ''
}: AccordionPanelProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const getBadgeStyles = (variant: string = 'info') => {
    const styles = {
      info: 'bg-info/10 text-info border-info/20',
      success: 'bg-success/10 text-success border-success/20',
      warning: 'bg-warning/10 text-warning border-warning/20',
      error: 'bg-error/10 text-error border-error/20'
    };
    return styles[variant as keyof typeof styles] || styles.info;
  };

  const getButtonStyles = (variant: string = 'primary') => {
    const styles = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outline: 'btn-outline',
      ghost: 'btn-ghost',
      warning: 'btn-warning',
      error: 'btn-error'
    };
    return styles[variant as keyof typeof styles] || styles.primary;
  };

  return (
    <div className={`card bg-base-100 border border-base-300 ${className}`}>
      {/* Header */}
      <div className="card-body p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-3 flex-1 text-left group"
          >
            {/* Expand/Collapse Icon */}
            <svg 
              className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            
            {/* Title and Subtitle */}
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h3 className="text-base font-medium group-hover:text-primary transition-colors">
                  {title}
                </h3>
                {badge && (
                  <span className={`
                    px-2 py-1 text-xs font-medium rounded-full border
                    ${getBadgeStyles(badge.variant)}
                  `}>
                    {badge.text}
                  </span>
                )}
              </div>
              {subtitle && (
                <p className="mt-1 text-sm text-base-content/70">
                  {subtitle}
                </p>
              )}
            </div>
          </button>
          
          {/* Quick Actions (always visible) */}
          {actions.length > 0 && (
            <div className="flex items-center space-x-2 ml-4">
              {actions.slice(0, 2).map((action, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    action.onClick();
                  }}
                  disabled={action.disabled || action.loading}
                  className={`btn btn-sm ${getButtonStyles(action.variant)}`}
                >
                  {action.loading && (
                    <span className="loading loading-spinner loading-xs mr-1"></span>
                  )}
                  {action.label}
                </button>
              ))}
              
              {/* More actions dropdown */}
              {actions.length > 2 && (
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01" />
                    </svg>
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-base-300">
                    {actions.slice(2).map((action, index) => (
                      <li key={index}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            action.onClick();
                          }}
                          disabled={action.disabled || action.loading}
                          className="w-full text-left"
                        >
                          {action.loading && (
                            <span className="loading loading-spinner loading-xs mr-1"></span>
                          )}
                          {action.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Expandable Content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-base-300">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

// Example usage component
export function ExampleAccordions() {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  const handleAction = async (actionId: string) => {
    setLoadingStates(prev => ({ ...prev, [actionId]: true }));
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoadingStates(prev => ({ ...prev, [actionId]: false }));
    console.log(`Action ${actionId} completed`);
  };

  return (
    <div className="space-y-4 max-w-4xl">
      <AccordionPanel
        title="CBP Manifest Confidentiality"
        subtitle="Secure your future shipments at the source"
        badge={{ text: "Active", variant: "success" }}
        defaultExpanded={true}
        actions={[
          {
            label: "View Filing",
            variant: "outline",
            onClick: () => console.log("View CBP filing")
          },
          {
            label: "Download Certificate",
            variant: "primary",
            onClick: () => console.log("Download certificate")
          }
        ]}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-base-content/70">Filing Status:</span>
              <span className="text-sm font-medium text-success">Approved</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-base-content/70">Reference:</span>
              <span className="text-sm font-mono">MC-2024-001234</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-base-content/70">Valid Until:</span>
              <span className="text-sm">December 31, 2024</span>
            </div>
          </div>
          <div className="bg-base-200 rounded-lg p-3">
            <h4 className="text-sm font-medium mb-2">Coverage</h4>
            <ul className="text-sm text-base-content/70 space-y-1">
              <li>• All import/export manifests</li>
              <li>• Supplier information</li>
              <li>• Shipping details</li>
              <li>• Trade relationships</li>
            </ul>
          </div>
        </div>
      </AccordionPanel>

      <AccordionPanel
        title="Historical Data Takedowns"
        subtitle="Remove existing data from public platforms"
        badge={{ text: "2 Pending", variant: "warning" }}
        actions={[
          {
            label: "Start Campaign",
            variant: "primary",
            onClick: () => handleAction('takedown'),
            loading: loadingStates.takedown
          },
          {
            label: "View Report",
            variant: "outline",
            onClick: () => console.log("View takedown report")
          },
          {
            label: "Configure Platforms",
            variant: "ghost",
            onClick: () => console.log("Configure platforms")
          }
        ]}
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="stat bg-base-200 rounded-lg">
              <div className="stat-title text-xs">Platforms Scanned</div>
              <div className="stat-value text-lg">42</div>
            </div>
            <div className="stat bg-base-200 rounded-lg">
              <div className="stat-title text-xs">Data Removed</div>
              <div className="stat-value text-lg text-success">38</div>
            </div>
            <div className="stat bg-base-200 rounded-lg">
              <div className="stat-title text-xs">In Progress</div>
              <div className="stat-value text-lg text-warning">4</div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Status</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Panjiva</td>
                  <td><span className="badge badge-success badge-sm">Removed</span></td>
                  <td>2 hours ago</td>
                </tr>
                <tr>
                  <td>ImportGenius</td>
                  <td><span className="badge badge-warning badge-sm">In Progress</span></td>
                  <td>1 day ago</td>
                </tr>
                <tr>
                  <td>TradeMap</td>
                  <td><span className="badge badge-success badge-sm">Removed</span></td>
                  <td>3 days ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </AccordionPanel>

      <AccordionPanel
        title="Anonymity Monitoring"
        subtitle="Ongoing surveillance for new data exposures"
        badge={{ text: "7 Alerts", variant: "error" }}
        actions={[
          {
            label: "Run Check",
            variant: "primary",
            onClick: () => handleAction('monitor'),
            loading: loadingStates.monitor
          },
          {
            label: "Configure",
            variant: "outline",
            onClick: () => console.log("Configure monitoring")
          }
        ]}
      >
        <div className="space-y-4">
          <div className="alert alert-warning">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h4 className="font-medium">New exposures detected</h4>
              <p className="text-sm">7 new data exposures found across 3 platforms in the last 24 hours.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="stat bg-base-200 rounded-lg">
              <div className="stat-title text-xs">Scan Frequency</div>
              <div className="stat-value text-sm">Weekly</div>
            </div>
            <div className="stat bg-base-200 rounded-lg">
              <div className="stat-title text-xs">Platforms</div>
              <div className="stat-value text-sm">40+</div>
            </div>
            <div className="stat bg-base-200 rounded-lg">
              <div className="stat-title text-xs">Last Scan</div>
              <div className="stat-value text-sm">2h ago</div>
            </div>
            <div className="stat bg-base-200 rounded-lg">
              <div className="stat-title text-xs">Auto Remove</div>
              <div className="stat-value text-sm text-success">On</div>
            </div>
          </div>
        </div>
      </AccordionPanel>
    </div>
  );
}