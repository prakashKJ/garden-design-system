import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

const Rule: React.FC<{ num: number; text: string }> = ({ num, text }) => (
  <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
    <span style={{
      fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-bold)',
      fontSize: 'var(--text-h4)', color: 'var(--color-garden-negative)',
      width: 24, flexShrink: 0,
    }}>{num}.</span>
    <span style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-regular)', fontSize: 'var(--text-h4)', color: 'var(--color-garden-text-primary)' }}>
      {text}
    </span>
  </div>
);

const Example: React.FC<{ wrong: string; right: string }> = ({ wrong, right }) => (
  <div style={{ display: 'flex', gap: 24, marginBottom: 16 }}>
    <div style={{ flex: 1 }}>
      <span style={{ fontFamily: 'var(--font-garden)', fontSize: 'var(--text-h5)', color: 'var(--color-garden-negative)', fontWeight: 'var(--font-weight-medium)' }}>Wrong</span>
      <code style={{ display: 'block', fontFamily: 'monospace', fontSize: 12, color: 'var(--color-garden-text-secondary)', marginTop: 4, background: 'var(--color-garden-surface-subtle)', padding: 'var(--spacing-garden-2)', borderRadius: 'var(--radius-garden-sm)', border: 'none' }}>{wrong}</code>
    </div>
    <div style={{ flex: 1 }}>
      <span style={{ fontFamily: 'var(--font-garden)', fontSize: 'var(--text-h5)', color: 'var(--color-garden-positive)', fontWeight: 'var(--font-weight-medium)' }}>Right</span>
      <code style={{ display: 'block', fontFamily: 'monospace', fontSize: 12, color: 'var(--color-garden-text-primary)', marginTop: 4, background: 'var(--color-garden-surface-subtle)', padding: 'var(--spacing-garden-2)', borderRadius: 'var(--radius-garden-sm)', border: 'none' }}>{right}</code>
    </div>
  </div>
);

const CardinalRules = () => (
  <div style={{ padding: 32, maxWidth: 720 }}>
    <h2 style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--text-h1)', color: 'var(--color-garden-text-primary)', margin: '0 0 8px' }}>Cardinal Rules</h2>
    <p style={{ fontFamily: 'var(--font-garden)', fontSize: 'var(--text-h4)', color: 'var(--color-garden-text-secondary)', margin: '0 0 32px' }}>
      These override any default instinct. If a rule conflicts with a habit, follow the rule.
    </p>

    <Rule num={1} text="NEVER add border to any element. Separation comes from opacity layers and backdrop blur." />
    <Rule num={2} text="NEVER use solid white backgrounds on containers. Surfaces use semi-transparent white (bg-30 / bg-50 / bg-70) with backdrop-blur-garden." />
    <Rule num={3} text="NEVER hardcode hex, rgb, or px color values in components. Always reference a semantic token." />
    <Rule num={4} text="NEVER use arbitrary Tailwind values like text-[#473C75] or p-[13px]. If a value isn't tokenized, it doesn't belong." />
    <Rule num={5} text="Font stack is Haffer → system defaults. Weights: 430 (regular), 570 (medium). Never use 400 or 500." />
    <Rule num={6} text="NEVER use box-shadow. Depth = opacity layering + blur." />
    <Rule num={7} text="ALWAYS include border-none explicitly on every container and interactive element." />
    <Rule num={8} text="ALWAYS use existing components from this Storybook. If a component doesn't exist yet, ASK the user before creating it — add '// TODO: needs Garden DS component' and flag it. NEVER invent a parallel version." />
    <Rule num={9} text="Cards/stacks MUST have minimum padding of 12px (spacing-3) or 16px (spacing-4). Smaller cards use 12px, standard cards use 16px. Padding can increase for larger containers but never go below 12px." />
    <Rule num={10} text="TABLE RULES: Min column width 64px (except trailing icon-only actions). Column width = largest content in that column. Gap between columns uses multiples of 8 (64, 72, 80, 88). Large table = 40px rows + 80px gap. Small table = 36px rows + 64px gap. Row padding-inline: 24px. Even rows use bg-50 surface. Header uses H5 Regular, cells use H4 Regular." />

    <h3 style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--text-h2)', color: 'var(--color-garden-text-primary)', margin: '32px 0 16px' }}>Examples</h3>

    <Example
      wrong='bg-white border border-gray-200 rounded-xl shadow-md'
      right='bg-garden-surface-card backdrop-blur-garden rounded-garden-outer border-none'
    />
    <Example
      wrong='bg-pink-500 text-white rounded-lg border border-pink-600'
      right='<GardenButton variant="primary">Swap</GardenButton>'
    />
    <Example
      wrong='<span className="bg-green-100 text-green-700 px-2 rounded">OK</span>'
      right='<span className="text-garden-positive text-body-sm">OK</span>'
    />
    <Example
      wrong='style={{ color: "#473C75" }}'
      right='color: var(--color-garden-text-primary)'
    />

    <h3 style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--text-h2)', color: 'var(--color-garden-text-primary)', margin: '32px 0 16px' }}>Layer Stacking Model</h3>
    <pre style={{ fontFamily: 'monospace', fontSize: 13, color: 'var(--color-garden-text-primary)', background: 'var(--color-garden-surface-subtle)', padding: 'var(--spacing-garden-4)', borderRadius: 'var(--radius-garden-inner)', border: 'none', lineHeight: 1.8 }}>
{`Page gradient (lavender → grey → mint)
  └─ Card: surface-card (70%) + blur-garden
       └─ Input: surface-nested (50%), no border
       └─ Metadata row: surface-subtle (30%)
       └─ Button: solid brand fill, no border`}
    </pre>
  </div>
);

const meta: Meta = {
  title: 'Guide/Cardinal Rules',
  parameters: { backgrounds: { default: 'white' } },
};

export default meta;
type Story = StoryObj;

export const Rules: Story = { render: () => <CardinalRules /> };
