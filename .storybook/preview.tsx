import { css, Global, ThemeProvider } from '@emotion/react';
import type { StoryFn, StoryContext } from '@storybook/react';
import { styles, theme } from '../src/themes';
import previewTheme from './theme';

export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: theme.breakpoint.xs.min, height: '667px' }
        },
        tablet: {
          name: 'Tablet',
          styles: { width: theme.breakpoint.sm.min, height: '1024px' }
        },
        desktop: {
          name: 'Desktop',
          styles: { width: theme.breakpoint.md.min, height: '768px' }
        },
        widescreen: {
          name: 'Widescreen',
          styles: { width: theme.breakpoint.lg.min, height: '1024px' }
        },
        ultrawide: {
          name: 'Ultra Wide (4K)',
          styles: { width: theme.breakpoint.xl.min, height: '1080px' }
        }
      }
    },
    backgrounds: {
      default: 'Claro',
      values: [
        { name: 'Claro', value: theme.color.gray[50] },
        { name: 'Escuro', value: theme.color.gray[900] }
      ]
    },
    docs: {
      theme: previewTheme
    }
  }
};

const withThemeProvider = (storyFn: StoryFn, context: StoryContext) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles} />
      {storyFn(context.args, context)}
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
