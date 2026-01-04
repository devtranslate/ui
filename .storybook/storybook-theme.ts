import { create } from 'storybook/theming';
import { theme } from '../src/themes';

export default create({
  base: 'light',

  // Branding
  brandTitle: 'Devtranslate UI',
  brandImage: './storybook-logo.svg',

  // Colors
  colorPrimary: theme.color.blueGray[700],
  colorSecondary: theme.color.red[400],

  // UI Colors
  appBg: theme.color.gray[50],
  appContentBg: theme.color.white,
  appPreviewBg: theme.color.white,
  appBorderColor: theme.color.gray[200],

  // Text Colors
  textColor: theme.color.gray[700],
  textInverseColor: theme.color.gray[100],
  textMutedColor: theme.color.gray[500],

  // Toolbar Colors
  barTextColor: theme.color.gray[500],
  barHoverColor: theme.color.red[400],
  barSelectedColor: theme.color.red[400],
  barBg: theme.color.gray[50],

  // Form Colors
  inputBg: theme.color.white,
  inputBorder: theme.color.gray[200],
  inputTextColor: theme.color.gray[700],

  // Fonts
  fontBase: theme.typography.fontFamily.sans,
  fontCode: theme.typography.fontFamily.mono
});
