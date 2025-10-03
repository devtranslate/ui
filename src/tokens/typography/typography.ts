import { Typography } from './typography.types';

export const typography: Typography = {
  fontFamily: {
    sans: '"Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    mono: '"Consolas", ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace'
  },
  fontSize: {
    display: {
      lg: '6rem',
      md: '5rem',
      sm: '4.5rem'
    },
    heading: {
      xxl: '4rem',
      xl: '3.5rem',
      lg: '3rem',
      md: '2.5rem',
      sm: '2rem',
      xs: '1.5rem',
      xxs: '1.25rem'
    },
    body: {
      xl: '1.125rem',
      lg: '1rem',
      md: '0.875rem',
      sm: '0.75rem',
      xs: '0.625rem'
    }
  },
  lineHeight: {
    loose: 2.0,
    relaxed: 1.6,
    snug: 1.4,
    tight: 1.2,
    none: 1.0
  },
  fontWeight: {
    heavy: 900,
    bold: 700,
    medium: 500,
    regular: 400,
    light: 300
  },
  letterSpacing: {
    loose: '24%',
    relaxed: '16%',
    snug: '8%',
    tight: '4%',
    none: '0%'
  }
};
