const borderStyles = {
  none: 'none',
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
  double: 'double'
} as const;

const borderWidths = {
  none: '0px',
  hairline: '1px',
  thin: '2px',
  thick: '4px',
  heavy: '8px'
} as const;

export const border = {
  style: borderStyles,
  width: borderWidths,
  radius: {
    sharp: '0px',
    small: '4px',
    medium: '8px',
    large: '16px',
    pill: '40px',
    circle: '100%'
  }
} as const;

export const outline = {
  style: borderStyles,
  width: borderWidths,
  offset: {
    none: '0px',
    hairline: '1px',
    thin: '2px',
    thick: '4px',
    heavy: '8px'
  }
} as const;
