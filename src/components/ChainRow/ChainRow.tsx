import React from 'react';
import '../../styles/garden.css';
import { ChainLogo, Chain } from '../ChainLogo/ChainLogo';

interface ChainRowProps {
  chains?: Chain[];
}

const defaultChains: Chain[] = ['btc', 'eth', 'sol'];

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
            background: 'var(--color-bg-overlay-soft)',
            borderRadius: 'var(--radius-garden-inner)',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          <ChainLogo chain={chain} size={24} />
        </div>
      ))}
    </div>
  );
};
