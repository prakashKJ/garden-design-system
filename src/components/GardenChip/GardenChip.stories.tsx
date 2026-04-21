import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { GardenChip } from './GardenChip';
import { ChainLogo } from '../ChainLogo/ChainLogo';

const meta: Meta<typeof GardenChip> = {
  title: 'Molecules/Chip',
  component: GardenChip,
  argTypes: {
    iconMode: { control: 'select', options: ['none', 'trailing', 'leading', 'both', 'icon-only'] },
    size: { control: 'select', options: ['default', 'small'] },
  },
};

export default meta;
type Story = StoryObj<typeof GardenChip>;

export const NoIcon: Story = {
  args: { label: '250 SEED', iconMode: 'none', size: 'default' },
};

export const TrailingIcon: Story = {
  args: { label: '250 SEED', iconMode: 'trailing', size: 'default' },
};

export const LeadingIcon: Story = {
  args: { label: '250 SEED', iconMode: 'leading', size: 'default' },
};

export const BothIcons: Story = {
  args: {
    label: '250 SEED',
    iconMode: 'both',
    size: 'default',
    leadingIcon: <ChainLogo chain="btc" size={20} />,
  },
};

export const IconOnly: Story = {
  args: {
    iconMode: 'icon-only',
    size: 'default',
    leadingIcon: <ChainLogo chain="btc" size={20} />,
  },
};

export const DefaultSize: Story = {
  name: 'All Variants — Default',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-garden-3)', alignItems: 'flex-start' }}>
      <GardenChip label="250 SEED" iconMode="none" size="default" />
      <GardenChip label="250 SEED" iconMode="trailing" size="default" />
      <GardenChip label="250 SEED" iconMode="leading" size="default" />
      <GardenChip label="250 SEED" iconMode="both" size="default" leadingIcon={<ChainLogo chain="btc" size={20} />} />
      <GardenChip iconMode="icon-only" size="default" leadingIcon={<ChainLogo chain="btc" size={20} />} />
    </div>
  ),
};

export const SmallSize: Story = {
  name: 'All Variants — Small',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-garden-3)', alignItems: 'flex-start' }}>
      <GardenChip label="250 SEED" iconMode="none" size="small" />
      <GardenChip label="250 SEED" iconMode="trailing" size="small" />
      <GardenChip label="250 SEED" iconMode="leading" size="small" />
      <GardenChip label="250 SEED" iconMode="both" size="small" leadingIcon={<ChainLogo chain="btc" size={12} />} />
      <GardenChip iconMode="icon-only" size="small" leadingIcon={<ChainLogo chain="btc" size={12} />} />
    </div>
  ),
};

export const SizeComparison: Story = {
  name: 'Size Comparison',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-garden-8)', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-garden-3)', alignItems: 'flex-start' }}>
        <span className="garden-h5-medium garden-text-secondary">Default (32px)</span>
        <GardenChip label="250 SEED" iconMode="none" size="default" />
        <GardenChip label="250 SEED" iconMode="trailing" size="default" />
        <GardenChip label="250 SEED" iconMode="leading" size="default" />
        <GardenChip label="250 SEED" iconMode="both" size="default" leadingIcon={<ChainLogo chain="btc" size={20} />} />
        <GardenChip iconMode="icon-only" size="default" leadingIcon={<ChainLogo chain="btc" size={20} />} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-garden-3)', alignItems: 'flex-start' }}>
        <span className="garden-h5-medium garden-text-secondary">Small (24px)</span>
        <GardenChip label="250 SEED" iconMode="none" size="small" />
        <GardenChip label="250 SEED" iconMode="trailing" size="small" />
        <GardenChip label="250 SEED" iconMode="leading" size="small" />
        <GardenChip label="250 SEED" iconMode="both" size="small" leadingIcon={<ChainLogo chain="btc" size={12} />} />
        <GardenChip iconMode="icon-only" size="small" leadingIcon={<ChainLogo chain="btc" size={12} />} />
      </div>
    </div>
  ),
};
