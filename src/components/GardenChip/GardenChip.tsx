import React from 'react';
import '../../styles/garden.css';

export type ChipIconMode = 'none' | 'trailing' | 'leading' | 'both' | 'icon-only';

interface GardenChipProps {
  /** Text label — ignored when icon mode is 'icon-only' */
  label?: string;
  /** Which icon slots to show */
  iconMode?: ChipIconMode;
  /** Leading icon (left side) — 20×20 React node */
  leadingIcon?: React.ReactNode;
  /** Trailing icon (right side) — 20×20 React node */
  trailingIcon?: React.ReactNode;
}

/**
 * GardenChip — Pill-shaped chip, default size 32px height.
 * 5 icon modes:
 *   none:      text only, px 12px
 *   trailing:  text + icon, pl 12px pr 8px, gap 8px
 *   leading:   icon + text, pl 8px pr 12px, gap 8px
 *   both:      icon + text + icon, px 8px, gap 8px
 *   icon-only: single icon, 32×32, px 8px, centered
 *
 * bg: white, radius: full (pill), text: H3 Regular (16px/20px).
 */
export const GardenChip: React.FC<GardenChipProps> = ({
  label = '250 SEED',
  iconMode = 'none',
  leadingIcon,
  trailingIcon,
}) => {
  const defaultIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="8.5" stroke="var(--color-garden-text-secondary)" strokeWidth="1.5" />
    </svg>
  );

  const leading = leadingIcon || defaultIcon;
  const trailing = trailingIcon || defaultIcon;

  const getPadding = () => {
    switch (iconMode) {
      case 'none': return 'var(--spacing-garden-1) var(--spacing-garden-3)';
      case 'trailing': return 'var(--spacing-garden-1) var(--spacing-garden-2) var(--spacing-garden-1) var(--spacing-garden-3)';
      case 'leading': return 'var(--spacing-garden-1) var(--spacing-garden-3) var(--spacing-garden-1) var(--spacing-garden-2)';
      case 'both': return 'var(--spacing-garden-1) var(--spacing-garden-2)';
      case 'icon-only': return 'var(--spacing-garden-1) var(--spacing-garden-2)';
    }
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: iconMode === 'icon-only' ? 'center' : undefined,
        gap: iconMode === 'none' ? 0 : 'var(--spacing-garden-2)',
        height: 32,
        width: iconMode === 'icon-only' ? 32 : undefined,
        padding: getPadding(),
        backgroundColor: 'var(--color-garden-bg-white, white)',
        borderRadius: 'var(--radius-garden-full)',
        border: 'none',
        boxShadow: 'none',
        overflow: 'clip',
        whiteSpace: 'nowrap',
      }}
    >
      {(iconMode === 'leading' || iconMode === 'both') && leading}
      {iconMode === 'icon-only' && leading}
      {iconMode !== 'icon-only' && (
        <span className="garden-h3-regular" style={{ whiteSpace: 'nowrap' }}>{label}</span>
      )}
      {(iconMode === 'trailing' || iconMode === 'both') && trailing}
    </div>
  );
};
