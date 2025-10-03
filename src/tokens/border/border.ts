import { Border, Outline } from './border.types';

const sharedStyle = {
  none: 'none',
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
  double: 'double'
};

const sharedWidth = {
  none: '0px',
  hairline: '1px',
  thin: '2px',
  thick: '4px',
  heavy: '8px'
};

export const border: Border = {
  style: sharedStyle,
  width: sharedWidth,
  radius: {
    sharp: '0px',
    small: '4px',
    medium: '8px',
    large: '16px',
    pill: '40px',
    circle: '100%'
  }
};

export const outline: Outline = {
  style: sharedStyle,
  width: sharedWidth,
  offset: {
    none: '0px',
    hairline: '1px',
    thin: '2px',
    thick: '4px',
    heavy: '8px'
  }
};
