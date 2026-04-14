import React from 'react';
import { colors, radius, spacing, font } from '../../tokens';

export type ButtonVariant = 'primary' | 'ghost' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface GardenButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
}

const sizeMap: Record<ButtonSize, { height: number; fontSize: string; padding: string }> = {
  sm: { height: 36, fontSize: font.size.h5, padding: `0 ${spacing[3]}` },
  md: { height: 40, fontSize: font.size.h4, padding: `0 ${spacing[4]}` },
  lg: { height: 48, fontSize: font.size.h3, padding: `0 ${spacing[4]}` },
};

export const GardenButton: React.FC<GardenButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  fullWidth = false,
}) => {
  const [hovered, setHovered] = React.useState(false);
  const s = sizeMap[size];

  const getStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: variant === 'icon' ? s.height : s.height,
      width: variant === 'icon' ? s.height : fullWidth ? '100%' : undefined,
      minWidth: variant === 'icon' ? undefined : 120,
      padding: variant === 'icon' ? '0' : s.padding,
      borderRadius: variant === 'icon' ? radius.full : radius.inner,
      border: 'none',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: font.family,
      fontWeight: font.weight.medium,
      fontSize: s.fontSize,
      transition: 'background-color 0.15s ease',
      boxShadow: 'none',
    };

    switch (variant) {
      case 'primary':
        return {
          ...base,
          backgroundColor: hovered && !disabled ? colors.brandHover : colors.brand,
          color: '#FFFFFF',
        };
      case 'ghost':
        return {
          ...base,
          backgroundColor: colors.surfaceSubtle,
          color: colors.textPrimary,
        };
      case 'icon':
        return {
          ...base,
          backgroundColor: colors.surfaceNested,
          color: colors.textPrimary,
        };
    }
  };

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={getStyles()}
    >
      {children}
    </button>
  );
};
