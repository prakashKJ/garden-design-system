import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { SwapInput } from './SwapInput';

const meta: Meta<typeof SwapInput> = {
  title: 'Molecules/SwapInput',
  component: SwapInput,
  argTypes: {
    variant: { control: 'radio', options: ['send', 'receive'] },
    network: { control: 'radio', options: ['L1', 'L2'] },
  },
};

export default meta;
type Story = StoryObj<typeof SwapInput>;

export const Send: Story = {
  args: {
    variant: 'send',
    amount: '0.3256',
    usdValue: '~$224.51',
    asset: 'BTC',
    network: 'L1',
    balance: '1.012 BTC',
  },
};

export const Receive: Story = {
  args: {
    variant: 'receive',
    amount: '0.3252744',
    usdValue: '~$223.51',
    asset: 'WBTC',
    network: 'L2',
    eta: '~2m 30s',
  },
};

export const Pair: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-garden-3)' }}>
      <SwapInput
        variant="send"
        amount="0.3256"
        usdValue="~$224.51"
        asset="BTC"
        network="L1"
        balance="1.012 BTC"
      />
      <SwapInput
        variant="receive"
        amount="0.3252744"
        usdValue="~$223.51"
        asset="WBTC"
        network="L2"
        eta="~2m 30s"
      />
    </div>
  ),
};
