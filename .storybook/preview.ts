import type { Preview } from '@storybook/react';
import { themes } from 'storybook/internal/theming/create';

const preview: Preview = {
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
    }
  }
};

export default preview;
