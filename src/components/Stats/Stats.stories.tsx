import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Stats } from './Stats';

const meta: Meta<typeof Stats> = {
  title: 'Molecules/Stats',
  component: Stats,
  parameters: { backgrounds: { default: 'garden-base' } },
};

export default meta;
type Story = StoryObj<typeof Stats>;

export const WithInfoIcon: Story = {
  args: { label: 'APY', value: '72 %', showInfoIcon: true },
};

export const WithoutInfoIcon: Story = {
  args: { label: 'APY', value: '72 %', showInfoIcon: false },
};
