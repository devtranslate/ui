import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GridStyledProps } from './Grid.types';

export const GridStyled = styled.div<GridStyledProps>`
  display: grid;
  width: 100%;

  ${({ theme, gap, rowGap, columnGap }) => css`
    ${gap && `gap: ${theme.spacing[gap]};`}
    ${rowGap && `row-gap: ${theme.spacing[rowGap]};`}
    ${columnGap && `column-gap: ${theme.spacing[columnGap]};`}
  `}

  ${({ autoFlow, autoColumns, autoRows }) => css`
    ${autoFlow && `grid-auto-flow: ${autoFlow};`}
    ${autoColumns && `grid-auto-columns: ${autoColumns};`}
    ${autoRows && `grid-auto-rows: ${autoRows};`}
  `}

  ${({ templateColumns, templateRows, areas }) => css`
    ${templateRows && `grid-template-rows: ${templateRows};`}
    ${templateColumns && `grid-template-columns: ${templateColumns};`}
    ${areas && `grid-template-areas: ${areas};`};
  `}

  ${({ alignItems, justifyItems, alignContent, justifyContent }) => css`
    ${alignItems && `align-items: ${alignItems};`}
    ${justifyItems && `justify-items: ${justifyItems};`}
    ${alignContent && `align-content: ${alignContent};`}
    ${justifyContent && `justify-content: ${justifyContent};`}
  `}
`;
