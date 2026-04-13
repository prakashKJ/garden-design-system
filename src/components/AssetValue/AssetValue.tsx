import React from 'react';
import { colors, font } from '../../tokens';
import { ChainIcon } from '../ChainIcon/ChainIcon';

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
      <span style={{
        fontFamily: font.family,
        fontWeight: font.weight.regular,
        fontSize: font.size.bodyLg,
        color: active ? colors.textPrimary : colors.textSecondary,
        textAlign: 'right',
      }}>
        {value}
      </span>
      <div style={{ display: 'flex', position: 'relative', width: 38, height: 20, opacity: active ? 1 : 0.7 }}>
        <div style={{ position: 'absolute', left: 0 }}><ChainIcon chain="wbtc" size={20} /></div>
        <div style={{ position: 'absolute', left: 18 }}><ChainIcon chain="eth" size={20} /></div>
      </div>
    </div>
  );
};
