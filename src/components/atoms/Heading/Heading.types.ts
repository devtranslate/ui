import { Color, TypographyHeadingSizes, TypographyLetterSpacingSizes } from 'src/themes/types';

export type HeadingProps = {
  /** HTML element or React component used as the main tag for the heading. */
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  /** Heading color. Accepts only the theme key (e.g., 'blue[500]'). */
  color?: Color;
  /** Font size and line height. */
  size?: TypographyHeadingSizes;
  /** Letter spacing. */
  letterSpacing?: TypographyLetterSpacingSizes;
  /** Heading capitalization style. */
  textTransform?: React.CSSProperties['textTransform'];
  /** Line clamp limit for truncating heading. */
  lineClamp?: React.CSSProperties['lineClamp'];
  /** Heading alignment. */
  textAlign?: React.CSSProperties['textAlign'];
  /** Defines the heading content. */
  children?: React.ReactNode;
  /** Inline style for the heading. */
  style?: React.CSSProperties;
};

export type HeadingStyledProps = {
  color?: HeadingProps['color'];
  size?: HeadingProps['size'];
  letterSpacing?: HeadingProps['letterSpacing'];
  textTransform?: HeadingProps['textTransform'];
  textAlign?: HeadingProps['textAlign'];
  lineClamp?: HeadingProps['lineClamp'];
};
