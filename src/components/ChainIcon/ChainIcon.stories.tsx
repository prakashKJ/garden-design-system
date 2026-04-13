import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ChainIcon } from './ChainIcon';

const meta: Meta<typeof ChainIcon> = {
  title: 'Components/ChainIcon',
  component: ChainIcon,
  argTypes: {
    chain: { control: 'select', options: ['btc', 'eth', 'wbtc', 'stacks', 'arbitrum', 'base', 'sei'] },
    size: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof ChainIcon>;

export const BTC: Story = { args: { chain: 'btc', size: 24 } };
export const ETH: Story = { args: { chain: 'eth', size: 24 } };

export const AllChains: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {(['btc', 'eth', 'wbtc', 'stacks', 'arbitrum', 'base', 'sei'] as const).map((chain) => (
        <ChainIcon key={chain} chain={chain} size={32} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <ChainIcon chain="btc" size={16} />
      <ChainIcon chain="btc" size={20} />
      <ChainIcon chain="btc" size={24} />
      <ChainIcon chain="btc" size={32} />
      <ChainIcon chain="btc" size={40} />
    </div>
  ),
};
