import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { AssetPair } from './AssetPair';

const meta: Meta<typeof AssetPair> = {
  title: 'Components/AssetPair',
  component: AssetPair,
};

export default meta;
type Story = StoryObj<typeof AssetPair>;

export const BTCtoWBTC: Story = {
  args: {
    fromAmount: '0.062',
    fromAsset: 'BTC',
    fromChain: 'btc',
    toAmount: '0.062',
    toAsset: 'WBTC',
    toChain: 'wbtc',
  },
};

export const WBTCtoBTC: Story = {
  args: {
    fromAmount: '1.5',
    fromAsset: 'WBTC',
    fromChain: 'wbtc',
    toAmount: '1.5',
    toAsset: 'BTC',
    toChain: 'btc',
  },
};
