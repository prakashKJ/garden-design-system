/**
 * Garden semantic color tokens.
 * These reference CSS custom properties from garden.css.
 * NEVER hardcode hex in components — always use these tokens.
 */
export const colors = {
  brand: 'var(--color-garden-brand)',
  brandHover: 'var(--color-garden-brand-hover)',
  brandSecondary: 'var(--color-garden-brand-secondary)',
  brandPurple: 'var(--color-garden-brand-purple)',
  brandPurpleHover: 'var(--color-garden-brand-purple-hover)',

  textPrimary: 'var(--color-garden-text-primary)',
  textSecondary: 'var(--color-garden-text-secondary)',

  surfaceCard: 'var(--color-garden-surface-card)',
  surfaceNested: 'var(--color-garden-surface-nested)',
  surfaceSubtle: 'var(--color-garden-surface-subtle)',

  bgBase: 'var(--color-garden-bg-base)',
  bgDarkSoft: 'var(--color-garden-bg-dark-soft)',

  positive: 'var(--color-garden-positive)',
  negative: 'var(--color-garden-negative)',
} as const;
