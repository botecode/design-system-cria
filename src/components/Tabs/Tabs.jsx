import React, { useState, useEffect } from 'react';

export const Tabs = ({
  items = [],
  activeTab: controlledActiveTab,
  defaultActiveTab,
  onChange,
  variant = 'default',
  size = 'md',
  orientation = 'horizontal',
  fullWidth = false,
  showContent = true,
  className = '',
  style = {},
  ...props
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(
    controlledActiveTab || defaultActiveTab || (items.length > 0 ? items[0].id : '')
  );

  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;

  const handleTabChange = (tabId) => {
    if (onChange) {
      onChange(tabId);
    } else {
      setInternalActiveTab(tabId);
    }
  };

  // Base styles
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Variant styles
  const variantStyles = {
    default: "border-b-2 border-transparent hover:border-gray-300 focus:ring-blue-500",
    pills: "rounded-lg hover:bg-gray-100 focus:ring-blue-500",
    underline: "border-b-2 border-transparent hover:border-gray-400 focus:ring-blue-500",
    cards: "border border-gray-200 rounded-lg hover:border-gray-300 focus:ring-blue-500"
  };

  // Size styles
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base", 
    lg: "px-5 py-2.5 text-lg"
  };

  // Active styles
  const activeStyles = {
    default: "border-blue-500 text-blue-600",
    pills: "bg-blue-100 text-blue-600",
    underline: "border-blue-500 text-blue-600",
    cards: "border-blue-500 bg-blue-50 text-blue-600"
  };

  // Container classes
  const containerClass = orientation === 'vertical' 
    ? 'flex flex-col space-y-2' 
    : fullWidth 
      ? 'flex w-full' 
      : 'flex space-x-8';

  const contentClass = orientation === 'vertical' 
    ? 'ml-4 flex-1' 
    : 'mt-4';

  return (
    <div className={className} style={style} {...props}>
      {/* Tab Navigation */}
      <div className={orientation === 'vertical' ? 'flex' : 'border-b border-gray-200'}>
        <nav 
          className={`-mb-px ${containerClass}`}
          role="tablist"
          aria-label="Tabs"
        >
          {items.map((item) => {
            const isActive = item.id === activeTab;
            const isDisabled = item.disabled;
            
            const tabClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
              isActive ? activeStyles[variant] : 'text-gray-500 hover:text-gray-700'
            } ${fullWidth ? 'flex-1' : ''} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`;

            return (
              <button
                key={item.id}
                className={tabClass}
                onClick={() => !isDisabled && handleTabChange(item.id)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${item.id}`}
                id={`tab-${item.id}`}
                disabled={isDisabled}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
                {item.badge && <span className="ml-2">{item.badge}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      {showContent && (
        <div className={contentClass}>
          {items.map((item) => {
            if (item.id !== activeTab) return null;
            
            return (
              <div
                key={item.id}
                role="tabpanel"
                aria-labelledby={`tab-${item.id}`}
                id={`tabpanel-${item.id}`}
              >
                {item.content}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Tabs;




