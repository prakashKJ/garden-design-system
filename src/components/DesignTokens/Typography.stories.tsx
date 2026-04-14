import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

const styles = [
  { name: 'H1 Medium', size: '32px', lineHeight: '40px', weight: 'var(--font-weight-medium)', cssSize: 'var(--text-h1)', cssLh: 'var(--line-height-h1)' },
  { name: 'H2 Medium', size: '20px', lineHeight: '20px', weight: 'var(--font-weight-medium)', cssSize: 'var(--text-h2)', cssLh: 'var(--line-height-h2)' },
  { name: 'H2 Regular', size: '20px', lineHeight: '20px', weight: 'var(--font-weight-regular)', cssSize: 'var(--text-h2)', cssLh: 'var(--line-height-h2)' },
  { name: 'H3 Medium', size: '16px', lineHeight: '20px', weight: 'var(--font-weight-medium)', cssSize: 'var(--text-h3)', cssLh: 'var(--line-height-h3)' },
  { name: 'H3 Regular', size: '16px', lineHeight: '20px', weight: 'var(--font-weight-regular)', cssSize: 'var(--text-h3)', cssLh: 'var(--line-height-h3)' },
  { name: 'H4 Medium', size: '14px', lineHeight: '20px', weight: 'var(--font-weight-medium)', cssSize: 'var(--text-h4)', cssLh: 'var(--line-height-h4)' },
  { name: 'H4 Regular', size: '14px', lineHeight: '20px', weight: 'var(--font-weight-regular)', cssSize: 'var(--text-h4)', cssLh: 'var(--line-height-h4)' },
  { name: 'H5 Medium', size: '12px', lineHeight: '16px', weight: 'var(--font-weight-medium)', cssSize: 'var(--text-h5)', cssLh: 'var(--line-height-h5)' },
  { name: 'H5 Regular', size: '12px', lineHeight: '16px', weight: 'var(--font-weight-regular)', cssSize: 'var(--text-h5)', cssLh: 'var(--line-height-h5)' },
  { name: 'H6 Medium', size: '10px', lineHeight: '12px', weight: 'var(--font-weight-medium)', cssSize: 'var(--text-h6)', cssLh: 'var(--line-height-h6)' },
  { name: 'H6 Regular', size: '10px', lineHeight: '12px', weight: 'var(--font-weight-regular)', cssSize: 'var(--text-h6)', cssLh: 'var(--line-height-h6)' },
];

const dividers = [0, 1, 3, 5, 7, 9]; // indices after which to draw a line

const TypographyScale = () => (
  <div style={{ padding: 32 }}>
    <h2 style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--text-h1)', lineHeight: 'var(--line-height-h1)', color: 'var(--color-garden-text-primary)', margin: '0 0 8px' }}>Typography</h2>
    <p style={{ fontFamily: 'var(--font-garden)', fontWeight: 'var(--font-weight-regular)', fontSize: 'var(--text-h4)', lineHeight: 'var(--line-height-h4)', color: 'var(--color-garden-text-secondary)', margin: '0 0 32px' }}>
      Font: Haffer — Weights: 430 (regular), 570 (medium) — never use 400 or 500
    </p>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {styles.map((s, i) => (
        <React.Fragment key={s.name}>
          <div style={{
            fontFamily: 'var(--font-garden)',
            fontWeight: s.weight,
            fontSize: s.cssSize,
            lineHeight: s.cssLh,
            color: 'var(--color-garden-text-primary)',
            padding: '8px 0',
          }}>
            {s.name} - Haffer - {s.size} / line height {s.lineHeight.replace('px', '')}
          </div>
          {dividers.includes(i) && (
            <div style={{ width: '100%', height: 1, background: 'var(--color-garden-bg-base)', margin: '8px 0' }} />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: { backgrounds: { default: 'white' } },
};

export default meta;
type Story = StoryObj;

export const Scale: Story = { render: () => <TypographyScale /> };
