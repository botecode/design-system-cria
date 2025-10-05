import React from 'react';
import { Typography } from '../Typography';
import { colors, spacing, radii, shadows } from '../../tokens';

export interface VersionProps {
  /**
   * Custom version string. If not provided, will use package.json version.
   */
  version?: string;
  /**
   * Whether to show the version in a badge format.
   * @default false
   */
  badge?: boolean;
  /**
   * Whether to show additional build information.
   * @default false
   */
  showBuildInfo?: boolean;
  /**
   * Custom class name for the version component.
   */
  className?: string;
  /**
   * Custom inline style for the version component.
   */
  style?: React.CSSProperties;
  /**
   * The size of the version text.
   * @default 'body2'
   */
  size?: 'caption' | 'body2' | 'body' | 'h6' | 'h5';
  /**
   * The color variant of the version text.
   * @default 'secondary'
   */
  variant?: 'primary' | 'secondary' | 'muted' | 'success' | 'warning' | 'error';
}

export const Version: React.FC<VersionProps> = ({
  version,
  badge = false,
  showBuildInfo = false,
  className = '',
  style,
  size = 'body2',
  variant = 'secondary',
}) => {
  // Get version from package.json if not provided
  const currentVersion = version || '0.1.0'; // Fallback version
  
  // Get build info if requested
  const buildInfo = showBuildInfo ? {
    buildTime: new Date().toISOString(),
    nodeVersion: process.env.NODE_VERSION || 'unknown',
    buildEnv: process.env.NODE_ENV || 'development',
  } : null;

  const getVariantColor = () => {
    switch (variant) {
      case 'primary':
        return colors.primary[600];
      case 'secondary':
        return colors.gray[600];
      case 'muted':
        return colors.gray[500];
      case 'success':
        return colors.success[600];
      case 'warning':
        return colors.warning[600];
      case 'error':
        return colors.error[600];
      default:
        return colors.gray[600];
    }
  };

  const versionStyles: React.CSSProperties = {
    color: getVariantColor(),
    ...style,
  };

  const badgeStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: `${spacing[1]} ${spacing[2]}`,
    backgroundColor: colors.gray[100],
    border: `1px solid ${colors.gray[200]}`,
    borderRadius: radii.sm,
    boxShadow: shadows.xs,
    ...versionStyles,
  };

  const buildInfoStyles: React.CSSProperties = {
    marginTop: spacing[1],
    fontSize: '0.75rem',
    color: colors.gray[500],
    fontFamily: 'monospace',
  };

  if (badge) {
    return (
      <div className={`version-badge ${className}`} style={badgeStyles}>
        <Typography variant={size} style={{ color: 'inherit', margin: 0 }}>
          v{currentVersion}
        </Typography>
        {showBuildInfo && buildInfo && (
          <div style={buildInfoStyles}>
            <div>Build: {buildInfo.buildTime}</div>
            <div>Node: {buildInfo.nodeVersion}</div>
            <div>Env: {buildInfo.buildEnv}</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`version ${className}`} style={versionStyles}>
      <Typography variant={size} style={{ color: 'inherit', margin: 0 }}>
        v{currentVersion}
      </Typography>
      {showBuildInfo && buildInfo && (
        <div style={buildInfoStyles}>
          <div>Build: {buildInfo.buildTime}</div>
          <div>Node: {buildInfo.nodeVersion}</div>
          <div>Env: {buildInfo.buildEnv}</div>
        </div>
      )}
    </div>
  );
};

Version.displayName = 'Version';
