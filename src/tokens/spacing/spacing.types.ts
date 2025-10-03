type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

export type SpacingSizes = Enumerate<24>;

export type SpacingTypes =
  | 'padding'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingTop'
  | 'margin'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop';

export type SpacingTypesMap = Partial<Record<SpacingTypes, string>>;

export type Spacing = Record<SpacingSizes, string>;
