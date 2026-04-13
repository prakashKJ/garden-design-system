import React from 'react';
import { colors, font } from '../../tokens';

export type StatusVariant = 'success' | 'pending' | 'failed';

interface StatusBadgeProps {
  variant: StatusVariant;
  children: React.ReactNode;
}

const variantColor: Record<StatusVariant, string> = {
  success: colors.positive,
  pending: colors.textSecondary,
  failed: colors.negative,
};

/**
 * StatusBadge renders colored TEXT only — never a background pill.
 * This is a Garden cardinal rule: status = colored text, no bg.
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({ variant, children }) => {
  return (
    <span
      style={{
        fontFamily: font.family,
        fontWeight: font.weight.medium,
        fontSize: font.size.bodySm,
        color: variantColor[variant],
      }}
    >
      {children}
    </span>
  );
};
