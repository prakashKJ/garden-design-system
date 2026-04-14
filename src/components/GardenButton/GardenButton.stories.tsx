import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { GardenButton } from './GardenButton';

const meta: Meta<typeof GardenButton> = {
  title: 'Components/GardenButton',
  component: GardenButton,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'disabled'] },
    size: { control: 'select', options: ['lg', 'md', 'sm'] },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof GardenButton>;

export const Primary: Story = {
  args: { children: 'Swap', variant: 'primary', size: 'lg' },
};

export const Secondary: Story = {
  args: { children: 'Swap', variant: 'secondary', size: 'lg' },
};

export const Tertiary: Story = {
  args: { children: 'Swap', variant: 'tertiary', size: 'lg' },
};

export const Disabled: Story = {
  args: { children: 'Swap', variant: 'disabled', size: 'lg' },
};

export const DefaultStates: Story = {
  name: 'All Sizes — Default',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-garden-4)' }}>
      {(['lg', 'md', 'sm'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', gap: 'var(--spacing-garden-4)', alignItems: 'center' }}>
          <GardenButton variant="primary" size={size}>Swap</GardenButton>
          <GardenButton variant="secondary" size={size}>Swap</GardenButton>
          <GardenButton variant="tertiary" size={size}>Swap</GardenButton>
          <GardenButton variant="disabled" size={size}>Swap</GardenButton>
        </div>
      ))}
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div style={{
      width: 400,
      padding: 'var(--spacing-garden-4)',
      background: 'var(--color-garden-surface-card)',
      backdropFilter: 'blur(var(--backdrop-blur-garden))',
      borderRadius: 'var(--radius-garden-outer)',
      border: 'none',
    }}>
      <GardenButton variant="primary" size="lg" fullWidth>Connect Wallet</GardenButton>
    </div>
  ),
};
