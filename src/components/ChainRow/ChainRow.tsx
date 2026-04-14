import React from 'react';
import { colors, radius } from '../../tokens';

interface Chain {
  name: string;
  color: string;
}

interface ChainRowProps {
  chains?: Chain[];
}

const defaultChains: Chain[] = [
  { name: 'BTC', color: '#F7931A' },
  { name: 'ETH', color: '#627EEA' },
  { name: 'Stacks', color: '#141416' },
  { name: 'Arbitrum', color: '#DBE4EE' },
  { name: 'Sei', color: '#7EDCCA' },
  { name: 'Base', color: '#FF6B35' },
];

export const ChainRow: React.FC<ChainRowProps> = ({ chains = defaultChains }) => {
  return (
    <div style={{ display: 'flex', gap: 'var(--spacing-garden-2)' }}>
      {chains.map((chain) => (
        <div
          key={chain.name}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 56,
            height: 40,
            background: colors.surfaceSubtle,
            borderRadius: radius.inner,
            border: 'none',
            boxShadow: 'none',
          }}
        >
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: chain.color }} />
        </div>
      ))}
    </div>
  );
};
