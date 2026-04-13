import React from 'react';
import { colors } from '../../tokens';

type Network = 'L1' | 'L2';

interface AssetSelectProps {
  network?: Network;
  asset?: string;
}

export const AssetSelect: React.FC<AssetSelectProps> = ({
  network = 'L1',
  asset,
}) => {
  const label = asset || (network === 'L1' ? 'BTC' : 'WBTC');

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <span
        style={{
          fontFamily: "'Haffer', sans-serif",
          fontWeight: 400,
          fontSize: 20,
          lineHeight: '24px',
          color: colors.text.primary,
        }}
      >
        {label}
      </span>
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        {network === 'L1' ? (
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: '#F7931A',
            }}
          />
        ) : (
          <div style={{ display: 'flex', position: 'relative', width: 38, height: 20 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: '#F7931A',
                position: 'absolute',
                left: 0,
              }}
            />
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: '#627EEA',
                position: 'absolute',
                left: 18,
              }}
            />
          </div>
        )}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6 8L10 12L14 8" stroke={colors.text.secondary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};
