import {
  TypographyBodySizes,
  TypographyLetterSpacingSizes,
  TypographyWeightSizes
} from 'src/themes/types';

export type TextProps = {
  /** HTML element or React component used as the main tag for the text. */
  as?: React.ElementType;
  /** Text color. Accepts only the theme key (e.g., 'blue[500]'). */
  color?: string;
  /** Font size and line height. */
  size?: TypographyBodySizes;
  /** Font weight. */
  weight?: TypographyWeightSizes;
  /** Letter spacing. */
  letterSpacing?: TypographyLetterSpacingSizes;
  /** Text capitalization style. */
  textTransform?: React.CSSProperties['textTransform'];
  /** Line clamp limit for truncating text. */
  lineClamp?: number;
  /** Text alignment. */
  textAlign?: React.CSSProperties['textAlign'];
  /** Defines the text content. */
  children?: React.ReactNode;
  /** Inline style for the text. */
  style?: React.CSSProperties;
};

export type TextStyledProps = {
  color?: TextProps['color'];
  size?: TextProps['size'];
  weight?: TextProps['weight'];
  letterSpacing?: TextProps['letterSpacing'];
  textTransform?: TextProps['textTransform'];
  textAlign?: TextProps['textAlign'];
  lineClamp?: TextProps['lineClamp'];
};
