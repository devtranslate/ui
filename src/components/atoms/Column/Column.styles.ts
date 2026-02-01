import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ColumnStyledProps } from './Column.types';

export const ColumnStyled = styled.div<ColumnStyledProps>`
  ${({ colSpan, rowSpan, colStart, rowStart, colEnd, rowEnd, alignSelf, justifySelf }) => css`
    ${colSpan && `grid-column: ${colSpan};`}
    ${rowSpan && `grid-row: ${rowSpan};`}
    ${colStart && `grid-column-start: ${colStart};`}
    ${rowStart && `grid-row-start: ${rowStart};`}
    ${colEnd && `grid-column-end: ${colEnd};`}
    ${rowEnd && `grid-row-end: ${rowEnd};`}
    ${alignSelf && `align-self: ${alignSelf};`}
    ${justifySelf && `justify-self: ${justifySelf};`}
  `}
`;
