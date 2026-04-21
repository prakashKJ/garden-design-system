import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { GardenInput } from './GardenInput';

const meta: Meta<typeof GardenInput> = {
  title: 'Molecules/Input',
  component: GardenInput,
};

export default meta;
type Story = StoryObj<typeof GardenInput>;

export const Empty: Story = {
  args: {
    label: 'Refund address',
    placeholder: 'Your Bitcoin address',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Refund address',
    placeholder: 'Your Bitcoin address',
    value: 'bc1q...kpz2',
  },
};
