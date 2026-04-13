import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  parameters: { backgrounds: { default: 'garden-base' } },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Empty: Story = {
  args: { placeholder: 'Search by transaction hash or address' },
};

export const WithValue: Story = {
  args: { value: '1tbq0e...4xqX' },
};
