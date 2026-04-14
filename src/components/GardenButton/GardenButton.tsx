import React from 'react';
import '../../styles/garden.css';

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

const sizeMap: Record<ButtonSize, { height: number; textClass: string; padding: string }> = {
  sm: { height: 36, textClass: 'garden-h5-medium', padding: '0 var(--spacing-garden-3)' },
  md: { height: 40, textClass: 'garden-h4-medium', padding: '0 var(--spacing-garden-4)' },
  lg: { height: 48, textClass: 'garden-h3-medium', padding: '0 var(--spacing-garden-4)' },
};

const variantStyles: Record<ButtonVariant, { bg: string; bgHover: string; color: string }> = {
  primary: { bg: 'var(--color-garden-brand)', bgHover: 'var(--color-garden-brand-hover)', color: 'white' },
  ghost: { bg: 'var(--color-garden-surface-subtle)', bgHover: 'var(--color-garden-surface-nested)', color: 'var(--color-garden-text-primary)' },
  icon: { bg: 'var(--color-garden-surface-nested)', bgHover: 'var(--color-garden-surface-card)', color: 'var(--color-garden-text-primary)' },
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
  const v = variantStyles[variant];

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={disabled}
      className={s.textClass}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: s.height,
        width: variant === 'icon' ? s.height : fullWidth ? '100%' : undefined,
        minWidth: variant === 'icon' ? undefined : 120,
        padding: variant === 'icon' ? '0' : s.padding,
        borderRadius: variant === 'icon' ? 'var(--radius-garden-full)' : 'var(--radius-garden-inner)',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        backgroundColor: hovered && !disabled ? v.bgHover : v.bg,
        color: v.color,
        transition: 'background-color 0.15s ease, opacity 0.15s ease',
        boxShadow: 'none',
      }}
    >
      {children}
    </button>
  );
};
