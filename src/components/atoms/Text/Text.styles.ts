import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TextStyledProps } from './Text.types';

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
    const shadeValue = shade.replace(']', '');
    return theme.color[key]?.[shadeValue] ?? colorDefault;
  }

  return colorDefault;
};

export const TextStyled = styled.p<TextStyledProps>`
  ${({ theme, color, size, weight, letterSpacing, textTransform, textAlign, lineClamp }) => css`
    color: ${getThemeColor(theme, color)};

    ${weight && `font-weight: ${theme.typography.fontWeight[weight]};`}
    ${letterSpacing && `letter-spacing: ${theme.typography.letterSpacing[letterSpacing]};`};
    ${textTransform && `text-transform: ${textTransform};`}
    ${textAlign && `text-align: ${textAlign};`}


    ${size &&
    `
      font-size: ${theme.typography.body[size].fontSize};
      line-height: ${theme.typography.body[size].lineHeight};
    `}

    ${lineClamp &&
    `
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: ${lineClamp};
      -webkit-box-orient: vertical;
    `}
  `};
`;
