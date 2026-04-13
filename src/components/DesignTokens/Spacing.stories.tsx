import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

const spacingScale = [
  { name: 'garden-1', size: '4px' },
  { name: 'garden-2', size: '8px' },
  { name: 'garden-3', size: '12px' },
  { name: 'garden-4', size: '16px' },
  { name: 'garden-5', size: '20px' },
  { name: 'garden-6', size: '24px' },
  { name: 'garden-8', size: '32px' },
  { name: 'garden-10', size: '40px' },
  { name: 'garden-12', size: '48px' },
  { name: 'garden-16', size: '64px' },
  { name: 'garden-20', size: '80px' },
];

const radii = [
  { name: 'sm', size: '6px', use: 'small elements' },
  { name: 'inner', size: '12px', use: 'buttons, inputs, list rows' },
  { name: 'outer', size: '16px', use: 'cards, panels, toasts' },
  { name: 'full', size: '9999px', use: 'circular/pill' },
];

const SpacingAndRadii = () => (
  <div style={{ padding: 32 }}>
    <h2 style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--text-display-md)', color: 'var(--color-garden-text-primary)', margin: '0 0 32px' }}>Spacing & Radii</h2>

    <div style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-medium)', fontSize: 12, color: 'var(--color-garden-text-secondary)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 16 }}>Spacing Scale</div>
    {spacingScale.map(({ name, size }) => (
      <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 10 }}>
        <span style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-medium)', fontSize: 13, color: 'var(--color-garden-text-primary)', width: 100 }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-garden)', fontSize: 13, color: 'var(--color-garden-text-secondary)', width: 50 }}>{size}</span>
        <div style={{ width: `var(--spacing-${name})`, height: 20, background: 'var(--color-garden-brand)', borderRadius: 2 }} />
      </div>
    ))}

    <div style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-medium)', fontSize: 12, color: 'var(--color-garden-text-secondary)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 16, marginTop: 40 }}>Corner Radius</div>
    <div style={{ display: 'flex', gap: 24 }}>
      {radii.map(({ name, size, use }) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
          <div style={{ width: 80, height: 80, border: `2px solid var(--color-garden-brand-purple)`, borderRadius: `var(--radius-garden-${name})` }} />
          <span style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-medium)', fontSize: 13, color: 'var(--color-garden-text-primary)' }}>{name}</span>
          <span style={{ fontFamily: 'var(--font-garden)', fontSize: 11, color: 'var(--color-garden-text-secondary)' }}>{size}</span>
          <span style={{ fontFamily: 'var(--font-garden)', fontSize: 10, color: 'var(--color-garden-text-secondary)', textAlign: 'center' }}>{use}</span>
        </div>
      ))}
    </div>

    <div style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-medium)', fontSize: 12, color: 'var(--color-garden-text-secondary)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12, marginTop: 40 }}>Backdrop Blur</div>
    <div style={{ fontFamily: 'var(--font-garden)', fontSize: 13, color: 'var(--color-garden-text-primary)' }}>
      <code>--backdrop-blur-garden: 150px</code> — always pair with surface-card on primary containers.
    </div>
  </div>
);

const meta: Meta = {
  title: 'Tokens/Spacing & Radii',
  parameters: { backgrounds: { default: 'white' } },
};

export default meta;
type Story = StoryObj;

export const All: Story = { render: () => <SpacingAndRadii /> };
