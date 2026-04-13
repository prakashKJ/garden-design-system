import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { StatusBadge } from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  argTypes: {
    variant: { control: 'select', options: ['success', 'pending', 'failed'] },
  },
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Success: Story = { args: { variant: 'success', children: 'Completed' } };
export const Pending: Story = { args: { variant: 'pending', children: 'Pending' } };
export const Failed: Story = { args: { variant: 'failed', children: 'Failed' } };

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <StatusBadge variant="success">Completed</StatusBadge>
      <StatusBadge variant="pending">Pending</StatusBadge>
      <StatusBadge variant="failed">Failed</StatusBadge>
    </div>
  ),
};
