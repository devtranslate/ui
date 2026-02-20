import { SpacingSizes } from 'src/themes/types';

export type GridProps = {
  /** HTML element or React component used as the main tag for the grid. */
  as?: React.ElementType;
  /** Spacing between rows and columns. */
  gap?: SpacingSizes;
  /** Spacing between rows. */
  rowGap?: SpacingSizes;
  /** Spacing between columns. */
  columnGap?: SpacingSizes;
  /** Controls the number and size of grid columns. */
  templateColumns?: string;
  /** Controls the number and size of grid rows. */
  templateRows?: string;
  /** Alignment of items along the row axis. */
  alignItems?: React.CSSProperties['alignItems'];
  /** Alignment of items along the column axis. */
  justifyItems?: React.CSSProperties['justifyItems'];
  /** Alignment of the grid content along the row axis. */
  alignContent?: React.CSSProperties['alignContent'];
  /** Alignment of the grid content along the column axis. */
  justifyContent?: React.CSSProperties['justifyContent'];
  /** Defines the Grid content. */
  children?: React.ReactNode;
  /** Inline style for the grid. */
  style?: React.CSSProperties;
};

export type GridStyledProps = {
  gap?: GridProps['gap'];
  rowGap?: GridProps['rowGap'];
  columnGap?: GridProps['columnGap'];
  templateRows?: GridProps['templateRows'];
  templateColumns?: GridProps['templateColumns'];
  alignItems?: GridProps['alignItems'];
  justifyItems?: GridProps['justifyItems'];
  alignContent?: GridProps['alignContent'];
  justifyContent?: GridProps['justifyContent'];
};
