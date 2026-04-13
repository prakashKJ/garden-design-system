import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'disabled'],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
  },
  parameters: {
    backgrounds: { default: 'garden-base' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: 'Swap', variant: 'primary', size: 'large' },
};

export const Secondary: Story = {
  args: { children: 'Swap', variant: 'secondary', size: 'large' },
};

export const Tertiary: Story = {
  args: { children: 'Swap', variant: 'tertiary', size: 'large' },
};

export const Disabled: Story = {
  args: { children: 'Swap', variant: 'disabled', size: 'large' },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Button variant="primary" size="large">Swap</Button>
        <Button variant="secondary" size="large">Swap</Button>
        <Button variant="tertiary" size="large">Swap</Button>
        <Button variant="disabled" size="large">Swap</Button>
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Button variant="primary" size="medium">Swap</Button>
        <Button variant="secondary" size="medium">Swap</Button>
        <Button variant="tertiary" size="medium">Swap</Button>
        <Button variant="disabled" size="medium">Swap</Button>
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Button variant="primary" size="small">Swap</Button>
        <Button variant="secondary" size="small">Swap</Button>
        <Button variant="tertiary" size="small">Swap</Button>
        <Button variant="disabled" size="small">Swap</Button>
      </div>
    </div>
  ),
};
