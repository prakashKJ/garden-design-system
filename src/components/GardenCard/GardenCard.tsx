import React from 'react';
import { colors, radius, spacing } from '../../tokens';

export type CardVariant = 'default' | 'nested';

interface GardenCardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  maxWidth?: number;
}

export const GardenCard: React.FC<GardenCardProps> = ({
  children,
  variant = 'default',
  maxWidth = 480,
}) => {
  return (
    <div
      style={{
        backgroundColor: variant === 'default' ? colors.surfaceCard : colors.surfaceNested,
        backdropFilter: variant === 'default' ? 'blur(var(--backdrop-blur-garden))' : undefined,
        borderRadius: variant === 'default' ? radius.outer : radius.inner,
        padding: spacing[4],
        border: 'none',
        boxShadow: 'none',
        maxWidth,
        width: '100%',
      }}
    >
      {children}
    </div>
  );
};
