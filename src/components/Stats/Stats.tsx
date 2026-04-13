import React from 'react';
import { colors } from '../../tokens';

interface StatsProps {
  label?: string;
  value?: string;
  showInfoIcon?: boolean;
}

export const Stats: React.FC<StatsProps> = ({
  label = 'APY',
  value = '72 %',
  showInfoIcon = true,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <span
          style={{
            fontFamily: "'Haffer', sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: '16px',
            color: colors.text.primary,
          }}
        >
          {label}
        </span>
        {showInfoIcon && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke={colors.text.secondary} strokeWidth="1" />
            <text x="6" y="9" textAnchor="middle" fontSize="8" fill={colors.text.secondary}>i</text>
          </svg>
        )}
      </div>
      <span
        style={{
          fontFamily: "'Haffer', sans-serif",
          fontWeight: 400,
          fontSize: 20,
          lineHeight: '24px',
          color: colors.text.primary,
        }}
      >
        {value}
      </span>
    </div>
  );
};
