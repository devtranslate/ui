type TypographyFontSizes = 'lg' | 'md' | 'sm';
type TypographyFontWeightSizes = 'heavy' | 'bold' | 'medium' | 'regular' | 'light';
type TypographySpacingSizes = 'loose' | 'relaxed' | 'snug' | 'tight' | 'none';

type TypographyDisplayMap = Record<TypographyFontSizes, string>;
type TypographyHeadingMap = Record<TypographyFontSizes | 'xxl' | 'xl' | 'xs' | 'xxs', string>;
type TypographyBodyMap = Record<TypographyFontSizes | 'xl' | 'xs', string>;

type TypographyLineHeightMap = Record<TypographySpacingSizes, number>;
type TypographyFontWeightMap = Record<TypographyFontWeightSizes, number>;
type TypographyLetterSpacingMap = Record<TypographySpacingSizes, string>;

export type Typography = {
  fontFamily: {
    sans: string;
    mono: string;
  };
  fontSize: {
    display: TypographyDisplayMap;
    heading: TypographyHeadingMap;
    body: TypographyBodyMap;
  };
  lineHeight: TypographyLineHeightMap;
  fontWeight: TypographyFontWeightMap;
  letterSpacing: TypographyLetterSpacingMap;
};
