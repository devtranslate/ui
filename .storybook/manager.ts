import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import './manager.css';

const theme = create({
  base: 'light',

  // Branding
  brandTitle: 'Devtranslate UI',
  brandImage: './images/logo.svg',

  // Colors
  colorPrimary: '#334155',
  colorSecondary: '#F87171',

  // UI
  appBg: '#FAFAFA',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#E4E4E7',

  // Text Colors
  textColor: '#3F3F46',
  textInverseColor: '#F4F4F5',
  textMutedColor: '#71717A',

  // Toolbar default and active colors
  barTextColor: '#71717A',
  barHoverColor: '#F87171',
  barSelectedColor: '#F87171',
  barBg: '#FAFAFA',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#E4E4E7',
  inputTextColor: '#3F3F46',
  inputBorderRadius: 4,

  // Fonts
  fontBase:
    '"Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  fontCode:
    '"Consolas", ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace'
});

addons.setConfig({ theme });
