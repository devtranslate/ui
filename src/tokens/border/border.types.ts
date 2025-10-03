type BorderStyleSizes = 'none' | 'solid' | 'dashed' | 'dotted' | 'double';
type BorderWidthSizes = 'none' | 'hairline' | 'thin' | 'thick' | 'heavy';
type BorderRadiusSizes = 'sharp' | 'small' | 'medium' | 'large' | 'pill' | 'circle';

type BorderStyleMap = Record<BorderStyleSizes, string>;
type BorderWidthMap = Record<BorderWidthSizes, string>;
type BorderRadiusMap = Record<BorderRadiusSizes, string>;

type OutlineStyleMap = Record<BorderStyleSizes, string>;
type OutlineWidthMap = Record<BorderWidthSizes, string>;
type OutlineOffsetMap = Record<BorderWidthSizes, string>;

export type Border = {
  style: BorderStyleMap;
  width: BorderWidthMap;
  radius: BorderRadiusMap;
};

export type Outline = {
  style: OutlineStyleMap;
  width: OutlineWidthMap;
  offset: OutlineOffsetMap;
};
