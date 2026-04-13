import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { GardenButton } from './GardenButton';

const meta: Meta<typeof GardenButton> = {
  title: 'Components/GardenButton',
  component: GardenButton,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'ghost', 'icon'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof GardenButton>;

export const Primary: Story = {
  args: { children: 'Swap', variant: 'primary', size: 'lg' },
};

export const PrimaryDisabled: Story = {
  args: { children: 'Swap', variant: 'primary', size: 'lg', disabled: true },
};

export const Ghost: Story = {
  args: { children: 'Cancel', variant: 'ghost', size: 'md' },
};

export const Icon: Story = {
  args: { children: '↕', variant: 'icon', size: 'md' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['lg', 'md', 'sm'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <GardenButton variant="primary" size={size}>Swap</GardenButton>
          <GardenButton variant="ghost" size={size}>Cancel</GardenButton>
          <GardenButton variant="icon" size={size}>↕</GardenButton>
          <GardenButton variant="primary" size={size} disabled>Swap</GardenButton>
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
