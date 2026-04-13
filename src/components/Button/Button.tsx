import React from 'react';
import { colors } from '../../tokens';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'disabled';
export type ButtonSize = 'large' | 'medium' | 'small';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, { bg: string; bgHover: string; color: string }> = {
  primary: { bg: colors.action.primary, bgHover: colors.action.primaryHover, color: '#FFFFFF' },
  secondary: { bg: colors.action.secondary, bgHover: colors.action.secondaryHover, color: '#FFFFFF' },
  tertiary: { bg: colors.action.tertiary, bgHover: colors.action.tertiary, color: colors.text.primary },
  disabled: { bg: colors.bg.base, bgHover: colors.bg.base, color: colors.text.secondary },
};

const sizeStyles: Record<ButtonSize, { height: number; fontSize: number }> = {
  large: { height: 48, fontSize: 16 },
  medium: { height: 40, fontSize: 14 },
  small: { height: 36, fontSize: 12 },
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
}) => {
  const v = variantStyles[variant];
  const s = sizeStyles[size];
  const [hovered, setHovered] = React.useState(false);

  return (
    <button
      onClick={variant !== 'disabled' ? onClick : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: s.height,
        minWidth: 120,
        padding: '0 24px',
        borderRadius: 12,
        border: 'none',
        cursor: variant === 'disabled' ? 'not-allowed' : 'pointer',
        backgroundColor: hovered ? v.bgHover : v.bg,
        color: v.color,
        fontFamily: "'Haffer', sans-serif",
        fontWeight: 500,
        fontSize: s.fontSize,
        transition: 'background-color 0.15s ease',
      }}
    >
      {children}
    </button>
  );
};
