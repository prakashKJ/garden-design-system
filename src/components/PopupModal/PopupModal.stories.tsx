import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { PopupModal } from './PopupModal';

const meta: Meta<typeof PopupModal> = {
  title: 'Organisms/PopupModal',
  component: PopupModal,
};

export default meta;
type Story = StoryObj<typeof PopupModal>;

export const Default: Story = {
  args: {
    title: 'Hide transaction',
    description: 'Are you sure you want to hide this transaction?\nThis action does not affect the status or validity of the ongoing transaction.',
    actionLabel: 'Hide transaction',
  },
};

export const ShortText: Story = {
  args: {
    title: 'Confirm',
    description: 'Are you sure?',
    actionLabel: 'Confirm',
  },
};
