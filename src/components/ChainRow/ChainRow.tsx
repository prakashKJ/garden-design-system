import React from 'react';
import '../../styles/garden.css';

interface Chain {
  name: string;
  color: string;
}

interface ChainRowProps {
  chains?: Chain[];
}

const defaultChains: Chain[] = [
  { name: 'BTC', color: 'var(--color-chain-btc)' },
  { name: 'ETH', color: 'var(--color-chain-eth)' },
  { name: 'Stacks', color: 'var(--color-chain-stacks)' },
  { name: 'Arbitrum', color: 'var(--color-chain-arbitrum)' },
  { name: 'Sei', color: 'var(--color-chain-sei)' },
  { name: 'Base', color: 'var(--color-chain-base)' },
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
            background: 'var(--color-garden-surface-subtle)',
            borderRadius: 'var(--radius-garden-inner)',
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
