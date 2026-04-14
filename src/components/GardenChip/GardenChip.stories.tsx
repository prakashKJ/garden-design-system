import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { GardenChip } from './GardenChip';
import { ChainLogo } from '../ChainLogo/ChainLogo';

const meta: Meta<typeof GardenChip> = {
  title: 'Components/GardenChip',
  component: GardenChip,
  argTypes: {
    iconMode: { control: 'select', options: ['none', 'trailing', 'leading', 'both', 'icon-only'] },
  },
};

export default meta;
type Story = StoryObj<typeof GardenChip>;

export const NoIcon: Story = {
  args: { label: '250 SEED', iconMode: 'none' },
};

export const TrailingIcon: Story = {
  args: { label: '250 SEED', iconMode: 'trailing' },
};

export const LeadingIcon: Story = {
  args: { label: '250 SEED', iconMode: 'leading' },
};

export const BothIcons: Story = {
  args: {
    label: '250 SEED',
    iconMode: 'both',
    leadingIcon: <ChainLogo chain="btc" size={20} />,
  },
};

export const IconOnly: Story = {
  args: {
    iconMode: 'icon-only',
    leadingIcon: <ChainLogo chain="btc" size={20} />,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-garden-3)', alignItems: 'flex-start' }}>
      <GardenChip label="250 SEED" iconMode="none" />
      <GardenChip label="250 SEED" iconMode="trailing" />
      <GardenChip label="250 SEED" iconMode="leading" />
      <GardenChip label="250 SEED" iconMode="both" leadingIcon={<ChainLogo chain="btc" size={20} />} />
      <GardenChip iconMode="icon-only" leadingIcon={<ChainLogo chain="btc" size={20} />} />
    </div>
  ),
};
