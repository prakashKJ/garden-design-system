import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ChainRow } from './ChainRow';

const meta: Meta<typeof ChainRow> = {
  title: 'Molecules/ChainRow',
  component: ChainRow,
  parameters: { backgrounds: { default: 'garden-base' } },
};

export default meta;
type Story = StoryObj<typeof ChainRow>;

export const Default: Story = {};
