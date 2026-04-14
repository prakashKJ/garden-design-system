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

/* ── Status icons from Paper ── */
const StatusIcon: React.FC<{ status: string }> = ({ status }) => {
  const fill = 'var(--color-garden-text-primary)';
  if (status === 'Expired') return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
      <path d="M6 8.5C6.142 8.5 6.26 8.452 6.356 8.356C6.452 8.26 6.5 8.142 6.5 8C6.5 7.858 6.452 7.74 6.356 7.644C6.26 7.548 6.142 7.5 6 7.5C5.858 7.5 5.74 7.548 5.644 7.644C5.548 7.74 5.5 7.858 5.5 8C5.5 8.142 5.548 8.26 5.644 8.356C5.74 8.452 5.858 8.5 6 8.5ZM5.5 6.5H6.5V3.5H5.5V6.5ZM6 11C5.308 11 4.658 10.869 4.05 10.606C3.442 10.344 2.913 9.988 2.462 9.537C2.013 9.088 1.656 8.558 1.394 7.95C1.131 7.342 1 6.692 1 6C1 5.308 1.131 4.658 1.394 4.05C1.656 3.442 2.013 2.913 2.462 2.462C2.913 2.013 3.442 1.656 4.05 1.394C4.658 1.131 5.308 1 6 1C6.692 1 7.342 1.131 7.95 1.394C8.558 1.656 9.088 2.013 9.537 2.462C9.988 2.913 10.344 3.442 10.606 4.05C10.869 4.658 11 5.308 11 6C11 6.692 10.869 7.342 10.606 7.95C10.344 8.558 9.988 9.088 9.537 9.537C9.088 9.988 8.558 10.344 7.95 10.606C7.342 10.869 6.692 11 6 11ZM6 10C7.117 10 8.063 9.613 8.838 8.838C9.613 8.063 10 7.117 10 6C10 4.883 9.613 3.938 8.838 3.163C8.063 2.388 7.117 2 6 2C4.883 2 3.938 2.388 3.163 3.163C2.388 3.938 2 4.883 2 6C2 7.117 2.388 8.063 3.163 8.838C3.938 9.613 4.883 10 6 10Z" fill={fill} />
    </svg>
  );
  if (status === 'Completed') return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4.774 9L1.924 6.15L2.637 5.438L4.774 7.575L9.362 2.988L10.074 3.7L4.774 9Z" fill={fill} />
    </svg>
  );
  // In progress + Not initiated share the same clock icon
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
      <path d="M7.651 8.35L8.351 7.65L6.501 5.8V3.5H5.501V6.2L7.651 8.35ZM6.001 11C5.309 11 4.659 10.869 4.051 10.606C3.443 10.344 2.913 9.988 2.463 9.537C2.013 9.088 1.657 8.558 1.395 7.95C1.132 7.342 1.001 6.692 1.001 6C1.001 5.308 1.132 4.658 1.395 4.05C1.657 3.442 2.013 2.913 2.463 2.462C2.913 2.013 3.443 1.656 4.051 1.394C4.659 1.131 5.309 1 6.001 1C6.693 1 7.343 1.131 7.951 1.394C8.559 1.656 9.088 2.013 9.538 2.462C9.988 2.913 10.345 3.442 10.607 4.05C10.87 4.658 11.001 5.308 11.001 6C11.001 6.692 10.87 7.342 10.607 7.95C10.345 8.558 9.988 9.088 9.538 9.537C9.088 9.988 8.559 10.344 7.951 10.606C7.343 10.869 6.693 11 6.001 11ZM6.001 10C7.109 10 8.053 9.61 8.832 8.831C9.611 8.052 10.001 7.108 10.001 6C10.001 4.892 9.611 3.948 8.832 3.169C8.053 2.39 7.109 2 6.001 2C4.893 2 3.949 2.39 3.17 3.169C2.391 3.948 2.001 4.892 2.001 6C2.001 7.108 2.391 8.052 3.17 8.831C3.949 9.61 4.893 10 6.001 10Z" fill={fill} />
    </svg>
  );
};

/* ── Status badge helper ── */
const statusColors: Record<string, string> = {
  Expired: 'var(--color-garden-status-expired-bg)',
  Completed: 'var(--color-garden-status-completed-bg)',
  'In progress': 'var(--color-garden-status-progress-bg)',
  'Not initiated': 'var(--color-garden-status-progress-bg)',
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--spacing-garden-1)',
      height: 'var(--spacing-garden-6)',
      borderRadius: 'var(--radius-garden-full)',
      padding: 'var(--spacing-garden-1) var(--spacing-garden-3) var(--spacing-garden-1) var(--spacing-garden-2)',
      backgroundColor: statusColors[status] || 'var(--color-garden-status-progress-bg)',
      border: 'none',
      whiteSpace: 'nowrap',
    }}
  >
    <StatusIcon status={status} />
    <span className="garden-h5-regular" style={{ whiteSpace: 'nowrap' }}>{status}</span>
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
    width: 110,
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
