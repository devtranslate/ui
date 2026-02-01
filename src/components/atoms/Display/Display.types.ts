import { TypographyDisplaySizes, TypographyLetterSpacingSizes } from 'src/themes/types';

export type DisplayProps = {
  /** HTML element or React component used as the main tag for the display. */
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  /** Display color. Accepts only the theme key (e.g., 'blue[500]'). */
  color?: string;
  /** Font size and line height. */
  size?: TypographyDisplaySizes;
  /** Letter spacing. */
  letterSpacing?: TypographyLetterSpacingSizes;
  /** Display capitalization style. */
  textTransform?: React.CSSProperties['textTransform'];
  /** Line clamp limit for truncating display. */
  lineClamp?: number;
  /** Display alignment. */
  textAlign?: React.CSSProperties['textAlign'];
  /** Defines the display content. */
  children?: React.ReactNode;
};

export type DisplayStyledProps = {
  color?: DisplayProps['color'];
  size?: DisplayProps['size'];
  letterSpacing?: DisplayProps['letterSpacing'];
  textTransform?: DisplayProps['textTransform'];
  textAlign?: DisplayProps['textAlign'];
  lineClamp?: DisplayProps['lineClamp'];
};
