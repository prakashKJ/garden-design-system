import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { GardenTable, TableColumn } from './GardenTable';

const meta: Meta<typeof GardenTable> = {
  title: 'Components/GardenTable',
  component: GardenTable,
  argTypes: {
    size: { control: 'select', options: ['large', 'small'] },
  },
};

export default meta;
type Story = StoryObj<typeof GardenTable>;

/* ── Status badge helper ── */
const statusColors: Record<string, string> = {
  Expired: '#FFE6B2',
  Completed: '#B6FBE3',
  'In progress': '#C2E9FF',
  'Not initiated': '#C2E9FF',
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      height: 24,
      borderRadius: 24,
      padding: '4px 12px 4px 8px',
      backgroundColor: statusColors[status] || '#C2E9FF',
      border: 'none',
    }}
  >
    <span className="garden-h5-regular">{status}</span>
  </div>
);

/* ── Table (Large) — Transaction table ── */
const largeCols: TableColumn[] = [
  { key: 'created', header: 'Created', width: 64 },
  { key: 'address', header: 'Address', width: 183 },
  { key: 'value', header: 'Value', width: 64 },
  { key: 'source', header: 'Source', width: 121 },
  {
    key: 'status',
    header: 'Status',
    width: 100,
    render: (val: string) => <StatusBadge status={val} />,
  },
];

const largeData = [
  { created: 'now', address: 'bc1q...kpz2  →  0x1754...672f', value: '$6485.90', source: 'Integrator name', status: 'Expired' },
  { created: 'now', address: 'bc1q...kpz2  →  0x1754...672f', value: '$6485.90', source: 'Uniswap', status: 'Completed' },
  { created: '1 min', address: 'bc1q...kpz2  →  0x1754...672f', value: '$6485.90', source: 'Garden SDK', status: 'In progress' },
  { created: 'now', address: 'bc1q...kpz2  →  0x1754...672f', value: '$6485.90', source: 'Garden SDK', status: 'Not initiated' },
];

export const TransactionTable: Story = {
  args: { columns: largeCols, data: largeData, size: 'large' },
};

/* ── Table (Small) — Staking table ── */
const smallCols: TableColumn[] = [
  { key: 'staked', header: 'Staked SEED', width: 69 },
  { key: 'rewards', header: 'Rewards', width: 66 },
  { key: 'votes', header: 'Votes', width: 64 },
  { key: 'apy', header: 'APY', width: 64 },
  { key: 'endDate', header: 'End date', width: 80 },
  {
    key: 'action',
    header: '',
    isIconAction: true,
    render: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 6.5H7M9 6.5H12M4 9.5H7M9 9.5H12" stroke="var(--color-garden-text-secondary)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
];

const smallData = [
  { staked: '4,200', rewards: '$84.44', votes: '4', apy: '12%', endDate: '02/03/2026' },
  { staked: '21,000', rewards: '$10,424.74', votes: '20', apy: '20%', endDate: '02/03/2026' },
  { staked: '4,200', rewards: '$47.44', votes: '4', apy: '12%', endDate: '02/03/2026' },
  { staked: '4,200', rewards: '$32.11', votes: '8', apy: '24%', endDate: '02/03/2026' },
];

export const StakingTable: Story = {
  args: { columns: smallCols, data: smallData, size: 'small' },
};
