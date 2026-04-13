import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TabSwitch } from './TabSwitch';

const meta: Meta<typeof TabSwitch> = {
  title: 'Molecules/TabSwitch',
  component: TabSwitch,
};

export default meta;
type Story = StoryObj<typeof TabSwitch>;

export const FirstActive: Story = {
  args: { tabs: ['Garden pass', 'Custom'], activeIndex: 0 },
};

export const SecondActive: Story = {
  args: { tabs: ['Garden pass', 'Custom'], activeIndex: 1 },
};
