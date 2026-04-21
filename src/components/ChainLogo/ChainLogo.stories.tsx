import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { ChainLogo } from './ChainLogo';

const meta: Meta<typeof ChainLogo> = {
  title: 'Atoms/ChainLogo',
  component: ChainLogo,
  argTypes: {
    chain: { control: 'select', options: ['btc', 'eth', 'sol'] },
    size: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof ChainLogo>;

export const BTC: Story = { args: { chain: 'btc', size: 24 } };
export const ETH: Story = { args: { chain: 'eth', size: 24 } };
export const SOL: Story = { args: { chain: 'sol', size: 24 } };

export const AllChains: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-garden-4)', alignItems: 'center' }}>
      <ChainLogo chain="btc" size={32} />
      <ChainLogo chain="eth" size={32} />
      <ChainLogo chain="sol" size={32} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-garden-4)', alignItems: 'center' }}>
      <ChainLogo chain="btc" size={16} />
      <ChainLogo chain="btc" size={20} />
      <ChainLogo chain="btc" size={24} />
      <ChainLogo chain="btc" size={32} />
    </div>
  ),
};
