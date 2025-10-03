import { ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
import { themes } from 'storybook/internal/theming/create';
import { useTheme } from '../src/themes/themes';
import type { StoryFn, StoryContext } from '@storybook/react';

export const preview: Preview = {
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
          styles: {
            width: '375px',
            height: '667px'
          }
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px'
          }
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '900px'
          }
        },
        widescreen: {
          name: 'Widescreen',
          styles: {
            width: '1280px',
            height: '1080px'
          }
        },
        ultrawide: {
          name: 'Ultra Wide (4K)',
          styles: {
            width: '1536px',
            height: '1080px'
          }
        }
      }
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'Claro',
          value: '#FAFAFA'
        },
        {
          name: 'Escuro',
          value: '#27272A'
        }
      ]
    },
    docs: {
      theme: {
        ...themes.light,
        textColor: '#3F3F46',
        fontBase:
          '"Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        fontCode:
          '"Consolas", ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace'
      }
    }
  }
};

const withThemeProvider = (storyFn: StoryFn, context: StoryContext) => {
  return (
    <ThemeProvider theme={useTheme()}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
      </style>
      {storyFn(context.args, context)}
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
