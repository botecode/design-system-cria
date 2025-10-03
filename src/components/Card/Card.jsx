import React from 'react';

// Card Component
export const Card = ({ 
  children, 
  variant = 'default', 
  className = '', 
  style = {},
  ...props 
}) => {
  const baseStyles = "bg-white border border-gray-200 rounded-lg";
  
  const variantStyles = {
    default: "shadow-sm",
    elevated: "shadow-lg",
    outlined: "border-2 border-gray-300",
    flat: "shadow-none"
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <div className={classes} style={style} {...props}>
      {children}
    </div>
  );
};

// CardHeader Component
export const CardHeader = ({ 
  children, 
  className = '', 
  style = {},
  ...props 
}) => {
  return (
    <div 
      className={`px-6 py-4 border-b border-gray-200 ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

// CardContent Component
export const CardContent = ({ 
  children, 
  className = '', 
  style = {},
  ...props 
}) => {
  return (
    <div 
      className={`px-6 py-4 ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

// CardFooter Component
export const CardFooter = ({ 
  children, 
  className = '', 
  style = {},
  ...props 
}) => {
  return (
    <div 
      className={`px-6 py-4 border-t border-gray-200 ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

// Default export
export default {
  Card,
  CardHeader,
  CardContent,
  CardFooter
};
