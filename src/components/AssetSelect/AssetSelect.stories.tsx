import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { AssetSelect } from './AssetSelect';

const meta: Meta<typeof AssetSelect> = {
  title: 'Molecules/AssetSelect',
  component: AssetSelect,
  argTypes: {
    network: { control: 'select', options: ['L1', 'L2'] },
  },
  parameters: { backgrounds: { default: 'garden-base' } },
};

export default meta;
type Story = StoryObj<typeof AssetSelect>;

export const L1: Story = { args: { network: 'L1' } };
export const L2: Story = { args: { network: 'L2' } };
