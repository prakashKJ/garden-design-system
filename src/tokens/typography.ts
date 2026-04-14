export const font = {
  family: 'var(--font-garden)',
  weight: {
    regular: 'var(--font-weight-regular)',
    medium: 'var(--font-weight-medium)',
  },
  size: {
    h1: 'var(--text-h1)',   // 32px
    h2: 'var(--text-h2)',   // 20px
    h3: 'var(--text-h3)',   // 16px
    h4: 'var(--text-h4)',   // 14px
    h5: 'var(--text-h5)',   // 12px
    h6: 'var(--text-h6)',   // 10px
  },
  lineHeight: {
    h1: 'var(--line-height-h1)',   // 40px
    h2: 'var(--line-height-h2)',   // 20px
    h3: 'var(--line-height-h3)',   // 20px
    h4: 'var(--line-height-h4)',   // 20px
    h5: 'var(--line-height-h5)',   // 16px
    h6: 'var(--line-height-h6)',   // 12px
  },
} as const;
