import React from 'react';
import '../../styles/garden.css';

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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-garden-1)' }}>
      <div style={{ display: 'flex', gap: 'var(--spacing-garden-1)', alignItems: 'center' }}>
        <span className="garden-h5-medium">
          {label}
        </span>
        {showInfoIcon && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="var(--color-garden-text-secondary)" strokeWidth="1" />
            <text x="6" y="9" textAnchor="middle" fontSize="8" fill="var(--color-garden-text-secondary)">i</text>
          </svg>
        )}
      </div>
      <span className="garden-h2-regular">
        {value}
      </span>
    </div>
  );
};
