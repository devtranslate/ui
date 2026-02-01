export type ColumnProps = {
  /** HTML element or React component used as the main tag for the column. */
  as?: React.ElementType;
  /** Specifies how many columns the column item should span. */
  colSpan?: number | string;
  /** Specifies how many rows the column item should span. */
  rowSpan?: number | string;
  /** Grid column start position. */
  colStart?: number | string;
  /** Grid row start position. */
  rowStart?: number | string;
  /** Grid column end position. */
  colEnd?: number | string;
  /** Grid row end position. */
  rowEnd?: number | string;
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
  colSpan?: ColumnProps['colSpan'];
  rowSpan?: ColumnProps['rowSpan'];
  colStart?: ColumnProps['colStart'];
  rowStart?: ColumnProps['rowStart'];
  colEnd?: ColumnProps['colEnd'];
  rowEnd?: ColumnProps['rowEnd'];
  alignSelf?: ColumnProps['alignSelf'];
  justifySelf?: ColumnProps['justifySelf'];
};
