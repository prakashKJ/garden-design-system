import React from 'react';
import { colors, font } from '../../tokens';
import { ChainIcon } from '../ChainIcon/ChainIcon';

type Chain = 'btc' | 'eth' | 'wbtc' | 'stacks' | 'arbitrum' | 'base' | 'sei';

interface AssetPairProps {
  fromAmount: string;
  fromAsset: string;
  fromChain: Chain;
  toAmount: string;
  toAsset: string;
  toChain: Chain;
}

export const AssetPair: React.FC<AssetPairProps> = ({
  fromAmount,
  fromAsset,
  fromChain,
  toAmount,
  toAsset,
  toChain,
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-garden-2)' }}>
      <span style={{
        fontFamily: font.family,
        fontWeight: font.weight.medium,
        fontSize: font.size.bodyLg,
        color: colors.textPrimary,
      }}>
        {fromAmount}
      </span>
      <ChainIcon chain={fromChain} size={20} />
      <span style={{
        fontFamily: font.family,
        fontWeight: font.weight.regular,
        fontSize: font.size.bodyMd,
        color: colors.textSecondary,
      }}>
        {fromAsset}
      </span>
      <span style={{
        fontFamily: font.family,
        fontSize: font.size.bodyLg,
        color: colors.textSecondary,
      }}>
        →
      </span>
      <span style={{
        fontFamily: font.family,
        fontWeight: font.weight.medium,
        fontSize: font.size.bodyLg,
        color: colors.textPrimary,
      }}>
        {toAmount}
      </span>
      <ChainIcon chain={toChain} size={20} />
      <span style={{
        fontFamily: font.family,
        fontWeight: font.weight.regular,
        fontSize: font.size.bodyMd,
        color: colors.textSecondary,
      }}>
        {toAsset}
      </span>
    </div>
  );
};
