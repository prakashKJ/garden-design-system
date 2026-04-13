import React from 'react';
import { colors, font } from '../../tokens';
import { ChainIcon } from '../ChainIcon/ChainIcon';

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
      <span style={{ fontFamily: font.family, fontWeight: font.weight.regular, fontSize: font.size.headingLg, color: colors.textPrimary }}>
        {label}
      </span>
      <div style={{ display: 'flex', gap: 'var(--spacing-garden-1)', alignItems: 'center' }}>
        {network === 'L1' ? (
          <ChainIcon chain="btc" size={20} />
        ) : (
          <div style={{ display: 'flex', position: 'relative', width: 38, height: 20 }}>
            <div style={{ position: 'absolute', left: 0 }}><ChainIcon chain="wbtc" size={20} /></div>
            <div style={{ position: 'absolute', left: 18 }}><ChainIcon chain="eth" size={20} /></div>
          </div>
        )}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6 8L10 12L14 8" stroke="var(--color-garden-text-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};
