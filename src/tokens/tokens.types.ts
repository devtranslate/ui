import { Border } from './border/border.types';
import { Breakpoint } from './breakpoint/breakpoint.types';
import { Color } from './color/color.types';
import { Elevation } from './elevation/elevation.types';
import { Opacity } from './opacity/opacity.types';
import { Spacing } from './spacing/spacing.types';
import { Typography } from './typography/typography.types';

export type Tokens = {
  border: Border;
  breakpoint: Breakpoint;
  color: Color;
  elevation: Elevation;
  opacity: Opacity;
  spacing: Spacing;
  typography: Typography;
};
