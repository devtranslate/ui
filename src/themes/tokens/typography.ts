export const typography = {
  fontFamily: {
    sans: '"Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    mono: '"Consolas", ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace'
  },
  display: {
    lg: { fontSize: '6rem', lineHeight: '7rem' },
    md: { fontSize: '5rem', lineHeight: '6rem' },
    sm: { fontSize: '4.5rem', lineHeight: '5rem' }
  },
  heading: {
    xxl: { fontSize: '4rem', lineHeight: '4.5rem' },
    xl: { fontSize: '3.5rem', lineHeight: '4rem' },
    lg: { fontSize: '3rem', lineHeight: '3.5rem' },
    md: { fontSize: '2.5rem', lineHeight: '3rem' },
    sm: { fontSize: '2rem', lineHeight: '2.5rem' },
    xs: { fontSize: '1.5rem', lineHeight: '2rem' },
    xxs: { fontSize: '1.25rem', lineHeight: '1.5rem' }
  },
  body: {
    xl: { fontSize: '1.125rem', lineHeight: '1.375rem' },
    lg: { fontSize: '1rem', lineHeight: '1.25rem' },
    md: { fontSize: '0.875rem', lineHeight: '1.125rem' },
    sm: { fontSize: '0.75rem', lineHeight: '1rem' },
    xs: { fontSize: '0.625rem', lineHeight: '0.875rem' }
  },
  fontWeight: {
    heavy: 900,
    bold: 700,
    medium: 500,
    regular: 400,
    light: 300
  },
  lineHeight: {
    loose: 2,
    relaxed: 1.6,
    snug: 1.4,
    tight: 1.2,
    none: 1
  },
  letterSpacing: {
    loose: '0.24em',
    relaxed: '0.16em',
    snug: '0.08em',
    tight: '0.04em',
    none: '0em'
  }
} as const;
