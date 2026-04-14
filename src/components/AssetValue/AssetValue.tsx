import React from 'react';
import '../../styles/garden.css';
import { ChainLogo } from '../ChainLogo/ChainLogo';

interface AssetValueProps {
  value?: string;
  active?: boolean;
}

export const AssetValue: React.FC<AssetValueProps> = ({
  value = '0.06212967',
  active = true,
}) => {
  return (
    <div style={{ display: 'flex', gap: 'var(--spacing-garden-2)', alignItems: 'center' }}>
      <span className={active ? 'garden-h3-regular' : 'garden-h3-regular garden-text-secondary'}>
        {value}
      </span>
      <div style={{ display: 'flex', position: 'relative', width: 38, height: 20, opacity: active ? 1 : 0.7 }}>
        <div style={{ position: 'absolute', left: 0 }}><ChainLogo chain="btc" size={20} /></div>
        <div style={{ position: 'absolute', left: 18 }}><ChainLogo chain="eth" size={20} /></div>
      </div>
    </div>
  );
};
