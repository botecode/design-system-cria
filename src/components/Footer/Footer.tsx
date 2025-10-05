import React, { useCallback } from 'react';

export interface FooterLink {
  href: string;
  label: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

export interface FooterSocialLink {
  href: string;
  label: string;
  icon: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Visual variant of the footer
   * @default 'default'
   */
  variant?: 'default' | 'dark' | 'light' | 'minimal';
  
  /**
   * Size of the footer
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Whether to make the footer sticky to the bottom
   * @default false
   */
  sticky?: boolean;
  
  /**
   * Whether to make the footer fixed positioned
   * @default false
   */
  fixed?: boolean;
  
  /**
   * Whether to show a border
   * @default false
   */
  border?: boolean;
  
  /**
   * Whether to show a shadow
   * @default false
   */
  shadow?: boolean;
  
  /**
   * Whether to make the footer full width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Whether to enable responsive behavior
   * @default false
   */
  responsive?: boolean;
  
  /**
   * Copyright text or custom copyright component
   */
  copyright?: string | React.ReactNode;
  
  /**
   * Array of links or custom links component
   */
  links?: FooterLink[] | React.ReactNode;
  
  /**
   * Array of social links or custom social links component
   */
  socialLinks?: FooterSocialLink[] | React.ReactNode;
  
  /**
   * Callback function when a link is clicked
   */
  onLinkClick?: (href: string, label: string) => void;
  
  /**
   * Callback function when a social link is clicked
   */
  onSocialClick?: (href: string, label: string, icon: string) => void;
  
  /**
   * Children elements
   */
  children?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({
  variant = 'default',
  size = 'md',
  sticky = false,
  fixed = false,
  border = false,
  shadow = false,
  fullWidth = false,
  responsive = false,
  copyright,
  links,
  socialLinks,
  onLinkClick,
  onSocialClick,
  className = '',
  style = {},
  children,
  ...props
}) => {
  // Build CSS classes
  const baseClasses = ['cria-footer'];
  
  // Add variant class
  baseClasses.push(`cria-footer--${variant}`);
  
  // Add size class
  baseClasses.push(`cria-footer--size-${size}`);
  
  // Add positioning classes
  if (sticky) {
    baseClasses.push('cria-footer--sticky');
  }
  
  if (fixed) {
    baseClasses.push('cria-footer--fixed');
  }
  
  // Add visual effect classes
  if (border) {
    baseClasses.push('cria-footer--border');
  }
  
  if (shadow) {
    baseClasses.push('cria-footer--shadow');
  }
  
  if (fullWidth) {
    baseClasses.push('cria-footer--full-width');
  }
  
  if (responsive) {
    baseClasses.push('cria-footer--responsive');
  }
  
  // Add custom className
  if (className) {
    baseClasses.push(className);
  }
  
  const classes = baseClasses.join(' ');
  
  // Handle link clicks
  const handleLinkClick = useCallback((href: string, label: string, event: React.MouseEvent) => {
    if (onLinkClick) {
      event.preventDefault();
      onLinkClick(href, label);
    }
  }, [onLinkClick]);
  
  // Handle social link clicks
  const handleSocialClick = useCallback((href: string, label: string, icon: string, event: React.MouseEvent) => {
    if (onSocialClick) {
      event.preventDefault();
      onSocialClick(href, label, icon);
    }
  }, [onSocialClick]);
  
  // Render links
  const renderLinks = () => {
    if (!links) return null;
    
    if (React.isValidElement(links)) {
      return links;
    }
    
    if (Array.isArray(links)) {
      return (
        <nav className="cria-footer__links" aria-label="Footer navigation">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target={link.target || '_self'}
                  rel={link.rel}
                  onClick={(e) => handleLinkClick(link.href, link.label, e)}
                  className="cria-footer__link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      );
    }
    
    return null;
  };
  
  // Render social links
  const renderSocialLinks = () => {
    if (!socialLinks) return null;
    
    if (React.isValidElement(socialLinks)) {
      return socialLinks;
    }
    
    if (Array.isArray(socialLinks)) {
      return (
        <nav className="cria-footer__social" aria-label="Social media links">
          <ul>
            {socialLinks.map((socialLink, index) => (
              <li key={index}>
                <a
                  href={socialLink.href}
                  target={socialLink.target || '_blank'}
                  rel={socialLink.rel || 'noopener noreferrer'}
                  onClick={(e) => handleSocialClick(socialLink.href, socialLink.label, socialLink.icon, e)}
                  className="cria-footer__social-link"
                  aria-label={socialLink.label}
                >
                  <span className={`cria-footer__social-icon cria-footer__social-icon--${socialLink.icon}`}>
                    {socialLink.icon}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      );
    }
    
    return null;
  };
  
  // Render copyright
  const renderCopyright = () => {
    if (!copyright) return null;
    
    if (React.isValidElement(copyright)) {
      return <div className="cria-footer__copyright">{copyright}</div>;
    }
    
    if (typeof copyright === 'string') {
      return (
        <div className="cria-footer__copyright">
          <span>{copyright}</span>
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <footer
      className={classes}
      style={style}
      {...props}
    >
      {/* Main footer content */}
      {children && (
        <div className="cria-footer__content">
          {children}
        </div>
      )}
      
      {/* Footer sections */}
      <div className="cria-footer__sections">
        {/* Links section */}
        {renderLinks()}
        
        {/* Social links section */}
        {renderSocialLinks()}
        
        {/* Copyright section */}
        {renderCopyright()}
      </div>
    </footer>
  );
};
