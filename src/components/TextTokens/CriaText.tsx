import React from 'react';
import { Typography } from '../Typography';

export interface CriaTextBaseProps extends React.HTMLAttributes<HTMLElement> {
  /** Override the semantic element */
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

export const CriaTextBody1: React.FC<CriaTextBaseProps> = ({ as, children, className = '', ...props }) => {
  const Element = (as || 'p') as keyof JSX.IntrinsicElements;
  return (
    <Typography
      as={Element}
      variant="body"
      color="content"
      className={className}
      {...(props as any)}
    >
      {children}
    </Typography>
  );
};

export const CriaTextBody2: React.FC<CriaTextBaseProps> = ({ as, children, className = '', ...props }) => {
  const Element = (as || 'p') as keyof JSX.IntrinsicElements;
  return (
    <Typography
      as={Element}
      variant="bodySmall"
      color="content"
      className={className}
      {...(props as any)}
    >
      {children}
    </Typography>
  );
};

export const CriaTextBody1Inverse: React.FC<CriaTextBaseProps> = ({ as, children, className = '', ...props }) => {
  const Element = (as || 'p') as keyof JSX.IntrinsicElements;
  return (
    <Typography
      as={Element}
      variant="body"
      color="inverse"
      className={className}
      {...(props as any)}
    >
      {children}
    </Typography>
  );
};

export const CriaTextTitle1: React.FC<CriaTextBaseProps> = ({ as, children, className = '', ...props }) => {
  // Defaults to h2 per requirements (even though title1 maps to h1 in Typography)
  const Element = (as || 'h2') as keyof JSX.IntrinsicElements;
  return (
    <Typography
      as={Element}
      variant="title1"
      color="primary"
      weight="bold"
      className={className}
      {...(props as any)}
    >
      {children}
    </Typography>
  );
};

export const CriaTextTitle2: React.FC<CriaTextBaseProps> = ({ as, children, className = '', ...props }) => {
  // Defaults to h3 per requirements
  const Element = (as || 'h3') as keyof JSX.IntrinsicElements;
  return (
    <Typography
      as={Element}
      variant="title2"
      color="primary"
      weight="semiBold"
      className={className}
      {...(props as any)}
    >
      {children}
    </Typography>
  );
};

export const CriaTextImportant: React.FC<CriaTextBaseProps> = ({ as, children, className = '', ...props }) => {
  const Element = (as || 'span') as keyof JSX.IntrinsicElements;
  return (
    <Typography
      as={Element}
      variant="body"
      color="content"
      weight="medium"
      className={className}
      {...(props as any)}
    >
      {children}
    </Typography>
  );
};

export const CriaTextAlert: React.FC<CriaTextBaseProps> = ({ as, children, className = '', ...props }) => {
  const Element = (as || 'span') as keyof JSX.IntrinsicElements;
  return (
    <Typography
      as={Element}
      variant="body"
      color="error"
      weight="medium"
      className={className}
      {...(props as any)}
    >
      {children}
    </Typography>
  );
};

export default CriaTextBody1;


