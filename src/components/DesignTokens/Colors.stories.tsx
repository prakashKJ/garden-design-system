import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

const Swatch: React.FC<{ name: string; cssVar: string; lightVal: string; darkVal: string }> = ({ name, cssVar, lightVal, darkVal }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
    <span style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-medium)', fontSize: 13, color: 'var(--color-garden-text-primary)', width: 160 }}>{name}</span>
    <div style={{ width: 24, height: 24, background: `var(${cssVar})`, borderRadius: 6, border: '1px solid rgba(0,0,0,0.08)', flexShrink: 0 }} />
    <span style={{ fontFamily: 'var(--font-garden)', fontSize: 11, color: 'var(--color-garden-text-secondary)', width: 160 }}>{lightVal}</span>
    <span style={{ fontFamily: 'var(--font-garden)', fontSize: 11, color: 'var(--color-garden-text-secondary)' }}>{darkVal}</span>
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ marginBottom: 28 }}>
    <div style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-medium)', fontSize: 12, color: 'var(--color-garden-text-secondary)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12 }}>{title}</div>
    <div style={{ display: 'flex', marginBottom: 8, gap: 12 }}>
      <span style={{ fontFamily: 'var(--font-garden)', fontSize: 11, color: 'var(--color-garden-text-secondary)', width: 160 }}>Token</span>
      <span style={{ width: 24 }} />
      <span style={{ fontFamily: 'var(--font-garden)', fontSize: 11, color: 'var(--color-garden-text-secondary)', width: 160 }}>Light</span>
      <span style={{ fontFamily: 'var(--font-garden)', fontSize: 11, color: 'var(--color-garden-text-secondary)' }}>Dark</span>
    </div>
    {children}
  </div>
);

const AllTokens = () => (
  <div style={{ padding: 32 }}>
    <h2 style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--text-display-md)', color: 'var(--color-garden-text-primary)', margin: '0 0 8px' }}>Color Tokens</h2>
    <p style={{ fontFamily: 'var(--font-garden)', fontSize: 'var(--text-body-md)', color: 'var(--color-garden-text-secondary)', margin: '0 0 32px' }}>Semantic tokens — use these CSS variables in components. Never hardcode hex.</p>

    <Section title="Surfaces">
      <Swatch name="surface-card (bg-70)" cssVar="--color-garden-surface-card" lightVal="rgba(255,255,255,0.70)" darkVal="rgba(34,36,43,0.70)" />
      <Swatch name="surface-nested (bg-50)" cssVar="--color-garden-surface-nested" lightVal="rgba(255,255,255,0.50)" darkVal="rgba(34,36,43,0.50)" />
      <Swatch name="surface-subtle (bg-30)" cssVar="--color-garden-surface-subtle" lightVal="rgba(255,255,255,0.30)" darkVal="rgba(34,36,43,0.30)" />
    </Section>

    <Section title="Brand & Actions">
      <Swatch name="brand (primary CTA)" cssVar="--color-garden-brand" lightVal="#FC79C1" darkVal="#FC79C1" />
      <Swatch name="brand-hover" cssVar="--color-garden-brand-hover" lightVal="#FF65BA" darkVal="#FF65BA" />
      <Swatch name="brand-purple (secondary)" cssVar="--color-garden-brand-purple" lightVal="#473C75" darkVal="#473C75" />
      <Swatch name="brand-purple-hover" cssVar="--color-garden-brand-purple-hover" lightVal="#402E8E" darkVal="#402E8E" />
      <Swatch name="brand-secondary (tertiary)" cssVar="--color-garden-brand-secondary" lightVal="#FFC4E4" darkVal="#FFC4E4" />
    </Section>

    <Section title="Text">
      <Swatch name="text-primary" cssVar="--color-garden-text-primary" lightVal="#473C75" darkVal="#FFFFFF" />
      <Swatch name="text-secondary" cssVar="--color-garden-text-secondary" lightVal="#908AAD" darkVal="rgba(255,255,255,0.5)" />
    </Section>

    <Section title="Status (text only — never as bg pill)">
      <Swatch name="positive" cssVar="--color-garden-positive" lightVal="#1DC089" darkVal="#1DC089" />
      <Swatch name="negative" cssVar="--color-garden-negative" lightVal="#FF005C" darkVal="#FF005C" />
    </Section>

    <Section title="Backgrounds">
      <Swatch name="bg-base" cssVar="--color-garden-bg-base" lightVal="#E4EBF2" darkVal="#09090C" />
      <Swatch name="bg-dark-soft" cssVar="--color-garden-bg-dark-soft" lightVal="#22242B" darkVal="#22242B" />
    </Section>
  </div>
);

const meta: Meta = {
  title: 'Tokens/Colors',
  parameters: { backgrounds: { default: 'white' } },
};

export default meta;
type Story = StoryObj;

export const SemanticTokens: Story = { render: () => <AllTokens /> };
