import React from 'react';

type Chain = 'btc' | 'eth' | 'wbtc' | 'stacks' | 'arbitrum' | 'base' | 'sei';

const chainConfig: Record<Chain, { bg: string; label: string }> = {
  btc: { bg: '#F7931A', label: '₿' },
  eth: { bg: '#627EEA', label: 'Ξ' },
  wbtc: { bg: '#F7931A', label: 'W' },
  stacks: { bg: '#141416', label: 'S' },
  arbitrum: { bg: '#2D374B', label: 'A' },
  base: { bg: '#0052FF', label: 'B' },
  sei: { bg: '#7EDCCA', label: 'S' },
};

interface ChainIconProps {
  chain: Chain;
  size?: number;
}

export const ChainIcon: React.FC<ChainIconProps> = ({ chain, size = 24 }) => {
  const config = chainConfig[chain];
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: config.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontSize: size * 0.5,
        fontFamily: 'var(--font-garden)',
        fontWeight: 'var(--font-weight-medium)',
        flexShrink: 0,
      }}
    >
      {config.label}
    </div>
  );
};
