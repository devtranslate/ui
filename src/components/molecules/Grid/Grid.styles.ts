export type BreakpointMap<T> = { [size in BreakpointSizes]?: T };
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { BreakpointSizes } from 'src/themes/types';
import { GridStyledProps } from './Grid.types';

export const GridStyled = styled.div<GridStyledProps>`
  display: grid;

  ${({
    theme,
    gap,
    rowGap,
    columnGap,
    templateColumns,
    templateRows,
    alignItems,
    justifyItems,
    alignContent,
    justifyContent
  }) => css`
    ${gap && `gap: ${theme.spacing[gap]};`}
    ${rowGap && `row-gap: ${theme.spacing[rowGap]};`}
    ${columnGap && `column-gap: ${theme.spacing[columnGap]};`}
    ${templateRows && `grid-template-rows: ${templateRows};`}
    ${templateColumns && `grid-template-columns: ${templateColumns};`}
    ${alignItems && `align-items: ${alignItems};`}
    ${justifyItems && `justify-items: ${justifyItems};`}
    ${alignContent && `align-content: ${alignContent};`}
    ${justifyContent && `justify-content: ${justifyContent};`}
  `}
`;
