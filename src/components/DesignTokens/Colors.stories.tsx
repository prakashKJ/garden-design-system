import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

/* ──────────────────────────────────────────────────────────────
   Shared primitives for the swatch tables.
   ────────────────────────────────────────────────────────────── */

const CHECKER_BG =
  'repeating-conic-gradient(rgba(0,0,0,0.08) 0% 25%, transparent 0% 50%) 0 0 / 12px 12px';

const fontLabel: React.CSSProperties = {
  fontFamily: 'var(--font-garden)',
  fontSize: 13,
  color: 'var(--color-text-primary)',
};

const fontMuted: React.CSSProperties = {
  fontFamily: 'var(--font-garden)',
  fontSize: 12,
  color: 'var(--color-text-secondary)',
};

const sectionHeader: React.CSSProperties = {
  fontFamily: 'var(--font-garden)',
  fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'],
  fontSize: 13,
  color: 'var(--color-text-secondary)',
  padding: '20px 0 12px',
};

const rowStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '24px 200px 1fr 1fr',
  gap: 12,
  alignItems: 'center',
  padding: '10px 0',
  borderTop: '1px solid var(--color-bg-overlay-subtle)',
};

const Swatch: React.FC<{ value: string; size?: number }> = ({ value, size = 22 }) => (
  <div
    aria-hidden
    style={{
      width: size,
      height: size,
      borderRadius: 6,
      background: CHECKER_BG,
      flexShrink: 0,
    }}
  >
    <div style={{ width: '100%', height: '100%', borderRadius: 6, background: value }} />
  </div>
);

const PaletteIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5Z"
      fill="var(--color-text-secondary)"
    />
    <circle cx="6.5" cy="11.5" r="1.5" fill="var(--color-bg-base)" />
    <circle cx="9.5" cy="7.5" r="1.5" fill="var(--color-bg-base)" />
    <circle cx="14.5" cy="7.5" r="1.5" fill="var(--color-bg-base)" />
    <circle cx="17.5" cy="11.5" r="1.5" fill="var(--color-bg-base)" />
  </svg>
);

/* ──────────────────────────────────────────────────────────────
   Token chip — shows a small swatch + the primitive reference
   name, e.g. "Raw colors/Rose 500". Used in the semantic table.
   ────────────────────────────────────────────────────────────── */
const TokenChip: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 10px',
      borderRadius: 8,
      background: 'var(--color-bg-overlay-subtle)',
      maxWidth: 'fit-content',
    }}
  >
    <Swatch value={value} size={18} />
    <span style={fontLabel}>{label}</span>
  </div>
);

/* ──────────────────────────────────────────────────────────────
   Data — one declarative list per screenshot, so each story is
   a straight render of a real token table.
   ────────────────────────────────────────────────────────────── */

type SemRow = {
  name: string;
  light: { value: string; label: string };
  dark: { value: string; label: string };
};

type SemSection = { title: string; rows: SemRow[] };

const SEMANTIC_SECTIONS: SemSection[] = [
  {
    title: 'Colors / Action',
    rows: [
      { name: 'Primary',         light: { value: 'var(--rose-500)',       label: 'Raw colors/Rose 500' },       dark: { value: 'var(--rose-500)',       label: 'Raw colors/Rose 500' } },
      { name: 'Primary hover',   light: { value: 'var(--rose-hover-500)', label: 'Raw colors/Rose hover 500' }, dark: { value: 'var(--rose-hover-500)', label: 'Raw colors/Rose hover 500' } },
      { name: 'Secondary',       light: { value: 'var(--grey-700)',       label: 'Raw colors/Grey 700' },       dark: { value: 'var(--grey-700)',       label: 'Raw colors/Grey 700' } },
      { name: 'Secondary hover', light: { value: 'var(--grey-hover-700)', label: 'Raw colors/Grey hover 700' }, dark: { value: 'var(--grey-hover-700)', label: 'Raw colors/Grey hover 700' } },
      { name: 'Tertiary',        light: { value: 'var(--rose-200)',       label: 'Raw colors/Rose 200' },       dark: { value: 'var(--rose-200)',       label: 'Raw colors/Rose 200' } },
    ],
  },
  {
    title: 'Colors / Text',
    rows: [
      { name: 'Primary',    light: { value: 'var(--grey-700)',  label: 'Raw colors/Grey 700' },   dark: { value: 'var(--white-100)', label: 'Raw colors/White 100%' } },
      { name: 'Secondary',  light: { value: 'var(--grey-500)',  label: 'Raw colors/Grey 500' },   dark: { value: 'var(--white-50)',  label: 'Raw colors/white 50%' } },
      { name: 'White text', light: { value: 'var(--white-100)', label: 'Raw colors/White 100%' }, dark: { value: 'var(--white-100)', label: 'Raw colors/White 100%' } },
    ],
  },
  {
    title: 'Colors / bg',
    rows: [
      { name: 'Base',             light: { value: 'var(--grey-200)',  label: 'Raw colors/Grey 200' },    dark: { value: 'var(--grey-900)',  label: 'Raw colors/Grey 900' } },
      { name: 'White',            light: { value: 'var(--white-100)', label: 'Raw colors/White 100%' },  dark: { value: 'var(--grey-100)',  label: 'Raw colors/grey 100%' } },
      { name: '70 Overlay strong', light: { value: 'var(--white-70)',  label: 'Raw colors/white 70%' },   dark: { value: 'var(--grey-70)',   label: 'Raw colors/grey 70%' } },
      { name: '50 Overlay mid',    light: { value: 'var(--white-50)',  label: 'Raw colors/white 50%' },   dark: { value: 'var(--grey-50)',   label: 'Raw colors/grey 50%' } },
      { name: '30 Overlay soft',   light: { value: 'var(--white-30)',  label: 'Raw colors/white 30%' },   dark: { value: 'var(--grey-30)',   label: 'Raw colors/grey 30%' } },
      { name: '10 Overlay subtle', light: { value: 'var(--white-10)',  label: 'Raw colors/white 10%' },   dark: { value: 'var(--grey-10)',   label: 'Raw colors/grey 10%' } },
    ],
  },
  {
    title: 'Colors / Status',
    rows: [
      { name: 'Success', light: { value: 'var(--green)', label: 'Raw colors/Green' }, dark: { value: 'var(--green)', label: 'Raw colors/Green' } },
      { name: 'Error',   light: { value: 'var(--red)',   label: 'Raw colors/Red' },   dark: { value: 'var(--red)',   label: 'Raw colors/Red' } },
    ],
  },
];

type RawRow = { name: string; value: string; hex: string; alpha?: number };

const RAW_COLORS: RawRow[] = [
  { name: 'Rose 500',       value: 'var(--rose-500)',       hex: 'FC79C1' },
  { name: 'Rose 200',       value: 'var(--rose-200)',       hex: 'FFC4E4' },
  { name: 'Rose hover 500', value: 'var(--rose-hover-500)', hex: 'FF65BA' },
  { name: 'Grey 900',       value: 'var(--grey-900)',       hex: '09090C' },
  { name: 'Grey 700',       value: 'var(--grey-700)',       hex: '473C75' },
  { name: 'Grey 500',       value: 'var(--grey-500)',       hex: '908AAD' },
  { name: 'Grey 200',       value: 'var(--grey-200)',       hex: 'E4EBF2' },
  { name: 'Grey hover 700', value: 'var(--grey-hover-700)', hex: '402E8E' },
  { name: 'White 100%',     value: 'var(--white-100)',      hex: 'FFFFFF' },
  { name: 'white 70%',      value: 'var(--white-70)',       hex: 'FFFFFF', alpha: 70 },
  { name: 'white 50%',      value: 'var(--white-50)',       hex: 'FFFFFF', alpha: 50 },
  { name: 'white 30%',      value: 'var(--white-30)',       hex: 'FFFFFF', alpha: 30 },
  { name: 'white 10%',      value: 'var(--white-10)',       hex: 'FFFFFF', alpha: 10 },
  { name: 'grey 100%',      value: 'var(--grey-100)',       hex: '22242B' },
  { name: 'grey 70%',       value: 'var(--grey-70)',        hex: '22242B', alpha: 70 },
  { name: 'grey 50%',       value: 'var(--grey-50)',        hex: '22242B', alpha: 50 },
  { name: 'grey 30%',       value: 'var(--grey-30)',        hex: '22242B', alpha: 30 },
  { name: 'grey 10%',       value: 'var(--grey-10)',        hex: '22242B', alpha: 10 },
  { name: 'Green',          value: 'var(--green)',          hex: '1DC089' },
  { name: 'Red',            value: 'var(--red)',            hex: 'FF005C' },
];

/* ──────────────────────────────────────────────────────────────
   Renderers
   ────────────────────────────────────────────────────────────── */

const SemanticTable: React.FC = () => (
  <div>
    {/* header */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '24px 200px 1fr 1fr',
        gap: 12,
        padding: '10px 0',
        ...fontMuted,
      }}
    >
      <span />
      <span>Name</span>
      <span>Light</span>
      <span>Dark</span>
    </div>

    {SEMANTIC_SECTIONS.map((section) => (
      <div key={section.title}>
        <div style={sectionHeader}>
          {section.title.split(' / ')[0]} / <strong style={{ color: 'var(--color-text-primary)' }}>{section.title.split(' / ')[1]}</strong>
        </div>
        {section.rows.map((row) => (
          <div key={section.title + row.name} style={rowStyle}>
            <PaletteIcon />
            <span style={fontLabel}>{row.name}</span>
            <TokenChip value={row.light.value} label={row.light.label} />
            <TokenChip value={row.dark.value} label={row.dark.label} />
          </div>
        ))}
      </div>
    ))}
  </div>
);

const RawTable: React.FC = () => (
  <div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '24px 200px 1fr 100px',
        gap: 12,
        padding: '10px 0',
        ...fontMuted,
      }}
    >
      <span />
      <span>Name</span>
      <span>Value</span>
      <span />
    </div>

    <div style={sectionHeader}>
      <strong style={{ color: 'var(--color-text-primary)' }}>Raw colors</strong>
    </div>

    {RAW_COLORS.map((c) => (
      <div
        key={c.name}
        style={{
          display: 'grid',
          gridTemplateColumns: '24px 200px 1fr 100px',
          gap: 12,
          alignItems: 'center',
          padding: '10px 0',
          borderTop: '1px solid var(--color-bg-overlay-subtle)',
        }}
      >
        <PaletteIcon />
        <span style={fontLabel}>{c.name}</span>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <Swatch value={c.value} />
          <span style={fontLabel}>{c.hex}</span>
        </div>
        <span style={fontMuted}>{c.alpha != null ? `${c.alpha} %` : ''}</span>
      </div>
    ))}
  </div>
);

const Page: React.FC<{ title: string; subtitle: string; children: React.ReactNode }> = ({ title, subtitle, children }) => (
  <div
    style={{
      padding: 32,
      minHeight: '100vh',
      background: 'var(--color-bg-base)',
      color: 'var(--color-text-primary)',
    }}
  >
    <h2
      style={{
        fontFamily: 'var(--font-garden)',
        fontSize: 'var(--text-h1)',
        margin: '0 0 4px',
      }}
    >
      {title}
    </h2>
    <p style={{ ...fontMuted, margin: '0 0 24px' }}>{subtitle}</p>
    {children}
  </div>
);

/* ──────────────────────────────────────────────────────────────
   Stories
   ────────────────────────────────────────────────────────────── */

const meta: Meta = {
  title: 'Atoms/Tokens/Colors',
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const SemanticTokens: Story = {
  render: () => (
    <Page
      title="Semantic tokens"
      subtitle="Consume these in components. Each token resolves to a primitive per theme."
    >
      <SemanticTable />
    </Page>
  ),
};

export const Primitives: Story = {
  render: () => (
    <Page
      title="Raw colors (primitives)"
      subtitle="The only place hex values live. Components should not consume these directly — use the semantic tokens."
    >
      <RawTable />
    </Page>
  ),
};
