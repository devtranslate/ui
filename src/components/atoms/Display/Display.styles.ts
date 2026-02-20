import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { DisplayStyledProps } from './Display.types';

const getThemeColor = (theme: any, color?: string) => {
  const colorDefault = 'inherit';
  const themeBaseColors = ['white', 'black'];

  if (!color) {
    return colorDefault;
  }

  if (themeBaseColors.includes(color)) {
    return theme.color[color] ?? colorDefault;
  }

  const [key, shade] = color.split('[');

  if (key && shade) {
    const shadeValue = shade.replaceAll(']', '');
    return theme.color[key]?.[shadeValue] ?? colorDefault;
  }

  return colorDefault;
};

export const DisplayStyled = styled.span<DisplayStyledProps>`
  ${({ theme, color, size, letterSpacing }) => css`
    color: ${getThemeColor(theme, color)};
    font-weight: ${theme.typography.fontWeight.light};

    ${letterSpacing && `letter-spacing: ${theme.typography.letterSpacing[letterSpacing]};`};
    ${size &&
    `
      font-size: ${theme.typography.display[size].fontSize};
      line-height: ${theme.typography.display[size].lineHeight};
    `}
  `};

  ${({ textTransform, textAlign, lineClamp }) => css`
    ${textTransform && `text-transform: ${textTransform};`}
    ${textAlign && `text-align: ${textAlign};`}
    ${lineClamp &&
    `
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: ${lineClamp};
      -webkit-box-orient: vertical;
    `}
  `};
`;
