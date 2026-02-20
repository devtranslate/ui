import React from 'react';

export type ColumnProps = {
  /** HTML element or React component used as the main tag for the column. */
  as?: React.ElementType;
  /** Grid area name for CSS Grid layout. */
  area?: React.CSSProperties['gridArea'];
  /** Specifies how many columns the column item should span. */
  colSpan?: React.CSSProperties['gridColumnEnd'];
  /** Specifies how many rows the column item should span. */
  rowSpan?: React.CSSProperties['gridRowEnd'];
  /** Grid column start position. */
  colStart?: React.CSSProperties['gridColumnStart'];
  /** Grid row start position. */
  rowStart?: React.CSSProperties['gridRowStart'];
  /** Grid column end position. */
  colEnd?: React.CSSProperties['gridColumnEnd'];
  /** Grid row end position. */
  rowEnd?: React.CSSProperties['gridRowEnd'];
  /** Controls the vertical alignment of the column. */
  alignSelf?: React.CSSProperties['alignSelf'];
  /** Controls the horizontal alignment of the column. */
  justifySelf?: React.CSSProperties['justifySelf'];
  /** Defines the column content. */
  children?: React.ReactNode;
  /** Inline style for the column. */
  style?: React.CSSProperties;
};

export type ColumnStyledProps = {
  area?: ColumnProps['area'];
  colSpan?: ColumnProps['colSpan'];
  rowSpan?: ColumnProps['rowSpan'];
  colStart?: ColumnProps['colStart'];
  rowStart?: ColumnProps['rowStart'];
  colEnd?: ColumnProps['colEnd'];
  rowEnd?: ColumnProps['rowEnd'];
  alignSelf?: ColumnProps['alignSelf'];
  justifySelf?: ColumnProps['justifySelf'];
};
