import React from 'react';
import '../../styles/garden.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'disabled';
export type ButtonSize = 'lg' | 'md' | 'sm';

interface GardenButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  fullWidth?: boolean;
}

const sizeMap: Record<ButtonSize, { height: number; textClass: string }> = {
  lg: { height: 48, textClass: 'garden-h3-medium' },
  md: { height: 40, textClass: 'garden-h4-medium' },
  sm: { height: 36, textClass: 'garden-h5-medium' },
};

const variantStyles: Record<ButtonVariant, { bg: string; bgHover: string; color: string }> = {
  primary: {
    bg: 'var(--color-action-primary)',
    bgHover: 'var(--color-action-primary-hover)',
    color: 'white',
  },
  secondary: {
    bg: 'var(--color-action-secondary)',
    bgHover: 'var(--color-action-secondary-hover)',
    color: 'white',
  },
  tertiary: {
    bg: 'var(--color-action-tertiary)',
    bgHover: 'var(--color-action-tertiary)',
    color: 'var(--color-text-primary)',
  },
  disabled: {
    bg: 'var(--color-bg-base)',
    bgHover: 'var(--color-bg-base)',
    color: 'var(--color-text-secondary)',
  },
};

export const GardenButton: React.FC<GardenButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  fullWidth = false,
}) => {
  const [hovered, setHovered] = React.useState(false);
  const s = sizeMap[size];
  const v = variantStyles[variant];
  const isDisabled = variant === 'disabled';

  return (
    <button
      onClick={!isDisabled ? onClick : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={isDisabled}
      className={s.textClass}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: s.height,
        width: fullWidth ? '100%' : undefined,
        minWidth: 120,
        padding: '0 var(--spacing-garden-6)',
        borderRadius: 'var(--radius-garden-inner)',
        border: 'none',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        backgroundColor: hovered && !isDisabled ? v.bgHover : v.bg,
        color: v.color,
        transition: 'background-color 0.15s ease',
        boxShadow: 'none',
        overflow: 'clip',
      }}
    >
      {children}
    </button>
  );
};
