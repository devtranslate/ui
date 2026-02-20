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
  templateColumns?: React.CSSProperties['gridTemplateColumns'];
  /** Controls the number and size of grid rows. */
  templateRows?: React.CSSProperties['gridTemplateRows'];
  /** Grid areas property. */
  areas?: React.CSSProperties['gridArea'];
  /** Grid auto-flow property. */
  autoFlow?: React.CSSProperties['gridAutoFlow'];
  /** Grid auto-columns property. */
  autoColumns?: React.CSSProperties['gridAutoColumns'];
  /** Grid auto-rows property. */
  autoRows?: React.CSSProperties['gridAutoRows'];
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
  templateColumns?: GridProps['templateColumns'];
  templateRows?: GridProps['templateRows'];
  areas?: GridProps['areas'];
  autoFlow?: GridProps['autoFlow'];
  autoColumns?: GridProps['autoColumns'];
  autoRows?: GridProps['autoRows'];
  alignItems?: GridProps['alignItems'];
  justifyItems?: GridProps['justifyItems'];
  alignContent?: GridProps['alignContent'];
  justifyContent?: GridProps['justifyContent'];
};
