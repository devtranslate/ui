type ColorShades = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type ColorMap = Record<ColorShades, string>;

export type Color = {
  black: string;
  white: string;
  red: ColorMap;
  orange: ColorMap;
  yellow: ColorMap;
  green: ColorMap;
  blue: ColorMap;
  purple: ColorMap;
  pink: ColorMap;
  blueGray: ColorMap;
  gray: ColorMap;
};
