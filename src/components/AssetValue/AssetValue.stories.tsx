import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { AssetValue } from './AssetValue';

const meta: Meta<typeof AssetValue> = {
  title: 'Molecules/AssetValue',
  component: AssetValue,
  parameters: { backgrounds: { default: 'garden-base' } },
};

export default meta;
type Story = StoryObj<typeof AssetValue>;

export const Active: Story = { args: { value: '0.06212967', active: true } };
export const Inactive: Story = { args: { value: '0.06212967', active: false } };
