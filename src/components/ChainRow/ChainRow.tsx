import React from 'react';
import { colors, radius } from '../../tokens';
import { ChainIcon } from '../ChainIcon/ChainIcon';

type Chain = 'btc' | 'eth' | 'wbtc' | 'stacks' | 'arbitrum' | 'base' | 'sei';

interface ChainRowProps {
  chains?: Chain[];
}

const defaultChains: Chain[] = ['btc', 'eth', 'stacks', 'arbitrum', 'sei', 'base'];

export const ChainRow: React.FC<ChainRowProps> = ({ chains = defaultChains }) => {
  return (
    <div style={{ display: 'flex', gap: 'var(--spacing-garden-2)' }}>
      {chains.map((chain) => (
        <div
          key={chain}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 56,
            height: 40,
            background: colors.surfaceSubtle,
            borderRadius: radius.inner,
            padding: 'var(--spacing-garden-2) var(--spacing-garden-4)',
            border: 'none',
          }}
        >
          <ChainIcon chain={chain} size={24} />
        </div>
      ))}
    </div>
  );
};
