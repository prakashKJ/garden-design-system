import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { colors, darkColors } from '../../tokens';

const ColorSwatch: React.FC<{ name: string; light: string; dark: string }> = ({ name, light, dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
    <span style={{ fontFamily: "'Haffer', sans-serif", fontWeight: 500, fontSize: 13, color: '#473C75', width: 140 }}>{name}</span>
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', width: 200 }}>
      <div style={{ width: 24, height: 24, background: light, borderRadius: 6, border: '1px solid #E4EBF2' }} />
      <span style={{ fontFamily: "'Haffer', sans-serif", fontSize: 11, color: '#908AAD' }}>{light}</span>
    </div>
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', width: 200 }}>
      <div style={{ width: 24, height: 24, background: dark, borderRadius: 6, border: '1px solid #555' }} />
      <span style={{ fontFamily: "'Haffer', sans-serif", fontSize: 11, color: '#908AAD' }}>{dark}</span>
    </div>
  </div>
);

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div style={{ marginBottom: 12, marginTop: 24 }}>
    <span style={{ fontFamily: "'Haffer', sans-serif", fontWeight: 500, fontSize: 12, color: '#908AAD', textTransform: 'uppercase', letterSpacing: 1.5 }}>{title}</span>
    <div style={{ display: 'flex', padding: '6px 0', borderBottom: '1px solid #E4EBF2', marginTop: 8 }}>
      <span style={{ fontFamily: "'Haffer', sans-serif", fontWeight: 500, fontSize: 11, color: '#908AAD', width: 140 }}>Token</span>
      <span style={{ fontFamily: "'Haffer', sans-serif", fontWeight: 500, fontSize: 11, color: '#908AAD', width: 200 }}>Light</span>
      <span style={{ fontFamily: "'Haffer', sans-serif", fontWeight: 500, fontSize: 11, color: '#908AAD', width: 200 }}>Dark</span>
    </div>
  </div>
);

const ColorTokens = () => (
  <div style={{ padding: 32, fontFamily: "'Haffer', sans-serif" }}>
    <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: 28, color: '#473C75', margin: '0 0 8px 0' }}>Color Tokens</h2>
    <p style={{ fontSize: 14, color: '#908AAD', margin: '0 0 16px 0' }}>Semantic tokens with light & dark mode</p>

    <SectionHeader title="Colors / Action" />
    <ColorSwatch name="Primary" light={colors.action.primary} dark={darkColors.action.primary} />
    <ColorSwatch name="Primary Hover" light={colors.action.primaryHover} dark={darkColors.action.primaryHover} />
    <ColorSwatch name="Secondary" light={colors.action.secondary} dark={darkColors.action.secondary} />
    <ColorSwatch name="Secondary Hover" light={colors.action.secondaryHover} dark={darkColors.action.secondaryHover} />
    <ColorSwatch name="Tertiary" light={colors.action.tertiary} dark={darkColors.action.tertiary} />

    <SectionHeader title="Colors / Text" />
    <ColorSwatch name="Primary" light={colors.text.primary} dark={darkColors.text.primary} />
    <ColorSwatch name="Secondary" light={colors.text.secondary} dark={darkColors.text.secondary} />
    <ColorSwatch name="White text" light={colors.text.white} dark={darkColors.text.white} />

    <SectionHeader title="Colors / bg" />
    <ColorSwatch name="Base" light={colors.bg.base} dark={darkColors.bg.base} />
    <ColorSwatch name="White" light={colors.bg.white} dark={darkColors.bg.white} />
    <ColorSwatch name="70% Overlay" light={colors.bg.overlay70} dark={darkColors.bg.overlay70} />
    <ColorSwatch name="50% Overlay" light={colors.bg.overlay50} dark={darkColors.bg.overlay50} />
    <ColorSwatch name="30% Overlay" light={colors.bg.overlay30} dark={darkColors.bg.overlay30} />
    <ColorSwatch name="10% Overlay" light={colors.bg.overlay10} dark={darkColors.bg.overlay10} />

    <SectionHeader title="Colors / Status" />
    <ColorSwatch name="Success" light={colors.status.success} dark={darkColors.status.success} />
    <ColorSwatch name="Error" light={colors.status.error} dark={darkColors.status.error} />
  </div>
);

const meta: Meta = {
  title: 'Tokens/Colors',
  parameters: { backgrounds: { default: 'white' } },
};

export default meta;
type Story = StoryObj;

export const AllColors: Story = {
  render: () => <ColorTokens />,
};
