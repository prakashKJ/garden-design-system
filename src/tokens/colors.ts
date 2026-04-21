/**
 * Garden color tokens.
 *
 * Two-tier system (mirrors the Figma library):
 *   1. `primitives` — raw color values (Rose / Grey / alpha / Green / Red).
 *      Components should NOT consume these directly.
 *   2. `colors`     — semantic tokens (action / text / bg / status).
 *      This is what components should use.
 *
 * Both layers resolve to CSS custom properties defined in
 * src/styles/garden.css. Never hardcode hex in components.
 */

export const primitives = {
  rose500:       'var(--rose-500)',
  rose200:       'var(--rose-200)',
  roseHover500:  'var(--rose-hover-500)',

  grey900:       'var(--grey-900)',
  grey700:       'var(--grey-700)',
  grey500:       'var(--grey-500)',
  grey200:       'var(--grey-200)',
  greyHover700:  'var(--grey-hover-700)',

  white100: 'var(--white-100)',
  white70:  'var(--white-70)',
  white50:  'var(--white-50)',
  white30:  'var(--white-30)',
  white10:  'var(--white-10)',

  grey100: 'var(--grey-100)',
  grey70:  'var(--grey-70)',
  grey50:  'var(--grey-50)',
  grey30:  'var(--grey-30)',
  grey10:  'var(--grey-10)',

  green: 'var(--green)',
  red:   'var(--red)',
} as const;

export const colors = {
  action: {
    primary:        'var(--color-action-primary)',
    primaryHover:   'var(--color-action-primary-hover)',
    secondary:      'var(--color-action-secondary)',
    secondaryHover: 'var(--color-action-secondary-hover)',
    tertiary:       'var(--color-action-tertiary)',
  },
  text: {
    primary:   'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    white:     'var(--color-text-white)',
  },
  bg: {
    base:           'var(--color-bg-base)',
    white:          'var(--color-bg-white)',
    overlayStrong:  'var(--color-bg-overlay-strong)',
    overlayMid:     'var(--color-bg-overlay-mid)',
    overlaySoft:    'var(--color-bg-overlay-soft)',
    overlaySubtle:  'var(--color-bg-overlay-subtle)',
  },
  status: {
    success: 'var(--color-status-success)',
    error:   'var(--color-status-error)',
  },

  /** @deprecated use colors.action.primary */
  brand:             'var(--color-action-primary)',
  /** @deprecated use colors.action.primaryHover */
  brandHover:        'var(--color-action-primary-hover)',
  /** @deprecated use colors.action.tertiary */
  brandSecondary:    'var(--color-action-tertiary)',
  /** @deprecated use colors.action.secondary */
  brandPurple:       'var(--color-action-secondary)',
  /** @deprecated use colors.action.secondaryHover */
  brandPurpleHover:  'var(--color-action-secondary-hover)',
  /** @deprecated use colors.text.primary */
  textPrimary:       'var(--color-text-primary)',
  /** @deprecated use colors.text.secondary */
  textSecondary:     'var(--color-text-secondary)',
  /** @deprecated use colors.bg.overlayStrong */
  surfaceCard:       'var(--color-bg-overlay-strong)',
  /** @deprecated use colors.bg.overlayMid */
  surfaceNested:     'var(--color-bg-overlay-mid)',
  /** @deprecated use colors.bg.overlaySoft */
  surfaceSubtle:     'var(--color-bg-overlay-soft)',
  /** @deprecated use colors.bg.base */
  bgBase:            'var(--color-bg-base)',
  /** @deprecated use colors.bg.white */
  bgDarkSoft:        'var(--color-bg-white)',
  /** @deprecated use colors.status.success */
  positive:          'var(--color-status-success)',
  /** @deprecated use colors.status.error */
  negative:          'var(--color-status-error)',
} as const;
