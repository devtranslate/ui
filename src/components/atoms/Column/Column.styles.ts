import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ColumnStyledProps } from './Column.types';

export const ColumnStyled = styled.div<ColumnStyledProps>`
  ${({ area, colSpan, rowSpan }) => css`
    ${area && `grid-area: ${area};`}
    ${colSpan && `grid-column: ${colSpan};`}
    ${rowSpan && `grid-row: ${rowSpan};`}
  `}

  ${({ colStart, rowStart, colEnd, rowEnd }) => css`
    ${colStart && `grid-column-start: ${colStart};`}
    ${rowStart && `grid-row-start: ${rowStart};`}
    ${colEnd && `grid-column-end: ${colEnd};`}
    ${rowEnd && `grid-row-end: ${rowEnd};`}
  `}

  ${({ alignSelf, justifySelf }) => css`
    ${alignSelf && `align-self: ${alignSelf};`}
    ${justifySelf && `justify-self: ${justifySelf};`}
  `}
`;
