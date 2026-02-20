import { designTokens } from './index';

// Theme
export type Theme = typeof designTokens & {};

// Border

// Breakpoint

// Color
export type ColorKeys = keyof Theme['color'];
export type ColorShades = keyof Theme['color'][ColorKeys];
export type Color = `${ColorKeys}[${ColorShades}]`;

// Elevation

// Opacity

// Spacing

// Typography
export type TypographyDisplaySizes = keyof Theme['typography']['display'];
export type TypographyHeadingSizes = keyof Theme['typography']['heading'];
export type TypographyBodySizes = keyof Theme['typography']['body'];
export type TypographyWeightSizes = keyof Theme['typography']['fontWeight'];
export type TypographyLineHeightSizes = keyof Theme['typography']['lineHeight'];
export type TypographyLetterSpacingSizes = keyof Theme['typography']['letterSpacing'];
