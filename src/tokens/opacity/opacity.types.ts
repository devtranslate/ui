type OpacityLevels =
  | 'transparent'
  | 'semiTransparent'
  | 'veiled'
  | 'translucent'
  | 'clouded'
  | 'opaque';

export type OpacityMap = Record<OpacityLevels, string>;

export type Opacity = OpacityMap;
