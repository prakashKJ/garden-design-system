import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { GardenCard } from './GardenCard';
import { GardenButton } from '../GardenButton/GardenButton';

const meta: Meta<typeof GardenCard> = {
  title: 'Components/GardenCard',
  component: GardenCard,
  argTypes: {
    variant: { control: 'select', options: ['default', 'nested'] },
  },
};

export default meta;
type Story = StoryObj<typeof GardenCard>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-garden-4)' }}>
        <span style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--text-heading-lg)', color: 'var(--color-garden-text-primary)' }}>
          Swap BTC → WBTC
        </span>
        <div style={{
          backgroundColor: 'var(--color-garden-surface-nested)',
          borderRadius: 'var(--radius-garden-inner)',
          padding: 'var(--spacing-garden-3)',
          border: 'none',
        }}>
          <span style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-regular)', fontSize: 'var(--text-body-sm)', color: 'var(--color-garden-text-secondary)' }}>
            Amount
          </span>
          <div style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--text-heading-lg)', color: 'var(--color-garden-text-primary)', marginTop: 4 }}>
            0.06212967
          </div>
        </div>
        <GardenButton variant="primary" size="lg" fullWidth>Swap</GardenButton>
      </div>
    ),
  },
};

export const LayeringDemo: Story = {
  name: 'Layering Model (70→50→30)',
  render: () => (
    <GardenCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-garden-3)' }}>
        <span style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--text-body-md)', color: 'var(--color-garden-text-primary)' }}>
          Card (bg-70 + blur)
        </span>
        <GardenCard variant="nested">
          <span style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-regular)', fontSize: 'var(--text-body-md)', color: 'var(--color-garden-text-primary)' }}>
            Nested input (bg-50)
          </span>
        </GardenCard>
        <div style={{
          backgroundColor: 'var(--color-garden-surface-subtle)',
          borderRadius: 'var(--radius-garden-inner)',
          padding: 'var(--spacing-garden-3)',
          border: 'none',
        }}>
          <span style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-regular)', fontSize: 'var(--text-body-sm)', color: 'var(--color-garden-text-secondary)' }}>
            Metadata row (bg-30)
          </span>
        </div>
      </div>
    </GardenCard>
  ),
};
