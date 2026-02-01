import { css } from '@emotion/react';
import { Theme } from '../types';

export const globalStyles = (theme: Theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

  * {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${theme.typography.fontFamily.sans};
    font-size: ${theme.typography.body.lg.fontSize};
    line-height: ${theme.typography.body.lg.lineHeight};
    color: ${theme.color.gray[700]};
  }

  code,
  pre {
    font-family: ${theme.typography.fontFamily.mono};
  }

  b {
    font-weight: ${theme.typography.fontWeight.bold};
  }

  strong {
    font-weight: ${theme.typography.fontWeight.heavy};
  }

  i {
    font-style: italic;
  }

  small {
    font-size: ${theme.typography.body.xs.fontSize};
    line-height: ${theme.typography.body.xs.lineHeight};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: ${theme.typography.heading.xxs.fontSize};
    line-height: ${theme.typography.heading.xxs.lineHeight};
    font-weight: ${theme.typography.fontWeight.bold};
  }
`;
