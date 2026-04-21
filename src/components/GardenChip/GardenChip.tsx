import React from 'react';
import '../../styles/garden.css';

export type ChipIconMode = 'none' | 'trailing' | 'leading' | 'both' | 'icon-only';
export type ChipSize = 'default' | 'small';

interface GardenChipProps {
  /** Text label — ignored when icon mode is 'icon-only' */
  label?: string;
  /** Which icon slots to show */
  iconMode?: ChipIconMode;
  /** default (32px) or small (24px) */
  size?: ChipSize;
  /** Leading icon (left side) */
  leadingIcon?: React.ReactNode;
  /** Trailing icon (right side) */
  trailingIcon?: React.ReactNode;
  /** Override the chip background. Defaults to #FFFFFF. */
  backgroundColor?: string;
}

/**
 * GardenChip — Pill-shaped chip in two sizes.
 *
 * Default (32px): text H3 Regular (16px), icons 20px, gap 8px
 * Small (24px):   text H5 Regular (12px), icons 12px, gap 4px
 *
 * 5 icon modes: none, trailing, leading, both, icon-only
 */
export const GardenChip: React.FC<GardenChipProps> = ({
  label = '250 SEED',
  iconMode = 'none',
  size = 'default',
  leadingIcon,
  trailingIcon,
  backgroundColor,
}) => {
  const isSmall = size === 'small';
  const iconSize = isSmall ? 12 : 20;
  const chipHeight = isSmall ? 24 : 32;
  const gapVar = isSmall ? 'var(--spacing-garden-1)' : 'var(--spacing-garden-2)';
  const textClass = isSmall ? 'garden-h5-regular' : 'garden-h3-regular';

  const defaultIcon = (
    <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" style={{ flexShrink: 0 }}>
      <circle cx={iconSize / 2} cy={iconSize / 2} r={iconSize / 2 - 1.5} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
    </svg>
  );

  const leading = leadingIcon || defaultIcon;
  const trailing = trailingIcon || defaultIcon;

  const getPadding = () => {
    switch (iconMode) {
      case 'none':      return 'var(--spacing-garden-1) var(--spacing-garden-3)';
      case 'trailing':  return 'var(--spacing-garden-1) var(--spacing-garden-2) var(--spacing-garden-1) var(--spacing-garden-3)';
      case 'leading':   return 'var(--spacing-garden-1) var(--spacing-garden-3) var(--spacing-garden-1) var(--spacing-garden-2)';
      case 'both':      return 'var(--spacing-garden-1) var(--spacing-garden-2)';
      case 'icon-only': return 'var(--spacing-garden-1) var(--spacing-garden-2)';
    }
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: iconMode === 'icon-only' ? 'center' : undefined,
        gap: iconMode === 'none' ? 0 : gapVar,
        height: chipHeight,
        width: iconMode === 'icon-only' ? chipHeight : undefined,
        padding: getPadding(),
        backgroundColor: backgroundColor ?? 'white',
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
        <span className={textClass} style={{ whiteSpace: 'nowrap' }}>{label}</span>
      )}
      {(iconMode === 'trailing' || iconMode === 'both') && trailing}
    </div>
  );
};
