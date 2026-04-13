import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

const TypeRow: React.FC<{ name: string; cssVar: string; size: string }> = ({ name, cssVar, size }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 16 }}>
    <span style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--text-body-sm)', color: 'var(--color-garden-text-secondary)', width: 120, flexShrink: 0 }}>{name}</span>
    <span style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--text-body-sm)', color: 'var(--color-garden-text-secondary)', width: 50, flexShrink: 0 }}>{size}</span>
    <span style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-medium)', fontSize: `var(${cssVar})`, color: 'var(--color-garden-text-primary)' }}>
      Garden Design System
    </span>
  </div>
);

const TypographyScale = () => (
  <div style={{ padding: 32 }}>
    <h2 style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--text-display-md)', color: 'var(--color-garden-text-primary)', margin: '0 0 8px' }}>Typography</h2>
    <p style={{ fontFamily: 'var(--font-garden)', fontSize: 'var(--text-body-md)', color: 'var(--color-garden-text-secondary)', margin: '0 0 8px' }}>
      Font: <strong>Haffer</strong> → system-ui (last-resort only)
    </p>
    <p style={{ fontFamily: 'var(--font-garden)', fontSize: 'var(--text-body-sm)', color: 'var(--color-garden-text-secondary)', margin: '0 0 32px' }}>
      Weights: 430 (regular), 570 (medium), 600 (semibold), 700 (bold) — never use 400 or 500.
    </p>
    <TypeRow name="display-lg" cssVar="--text-display-lg" size="56px" />
    <TypeRow name="display-md" cssVar="--text-display-md" size="32px" />
    <TypeRow name="heading-lg" cssVar="--text-heading-lg" size="24px" />
    <TypeRow name="heading-md" cssVar="--text-heading-md" size="18px" />
    <TypeRow name="body-lg" cssVar="--text-body-lg" size="16px" />
    <TypeRow name="body-md" cssVar="--text-body-md" size="14px" />
    <TypeRow name="body-sm" cssVar="--text-body-sm" size="12px" />
    <TypeRow name="caption" cssVar="--text-caption" size="11px" />
  </div>
);

const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: { backgrounds: { default: 'white' } },
};

export default meta;
type Story = StoryObj;

export const Scale: Story = { render: () => <TypographyScale /> };
