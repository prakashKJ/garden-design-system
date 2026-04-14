import React from 'react';
import '../../styles/garden.css';

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
    <div style={{ display: 'flex', gap: 'var(--spacing-garden-2)', alignItems: 'center' }}>
      <span className="garden-h2-regular">
        {label}
      </span>
      <div style={{ display: 'flex', gap: 'var(--spacing-garden-1)', alignItems: 'center' }}>
        {network === 'L1' ? (
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--color-chain-btc)', flexShrink: 0 }} />
        ) : (
          <div style={{ display: 'flex', position: 'relative', width: 38, height: 20 }}>
            <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--color-chain-btc)', position: 'absolute', left: 0 }} />
            <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--color-chain-eth)', position: 'absolute', left: 18 }} />
          </div>
        )}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6 8L10 12L14 8" stroke="var(--color-garden-text-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};
