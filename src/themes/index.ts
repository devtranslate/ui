import { css } from '@emotion/react';
import { globalStyles } from './styles/global';
import { resetStyles } from './styles/reset';
import { border, outline } from './tokens/border/border';
import { breakpoint } from './tokens/breakpoint/breakpoint';
import { color } from './tokens/color/color';
import { elevation } from './tokens/elevation/elevation';
import { opacity } from './tokens/opacity/opacity';
import { spacing } from './tokens/spacing/spacing';
import { typography } from './tokens/typography/typography';

export const designTokens = {
  border,
  outline,
  breakpoint,
  color,
  elevation,
  opacity,
  spacing,
  typography
} as const;

export const theme = { ...designTokens };

export const styles = css`
  ${resetStyles}
  ${globalStyles(theme)}
`;
