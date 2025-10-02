import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    '../src/stories/Introduction.mdx',
    '../src/stories/DesignTokens.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(ts|tsx)'
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  staticDirs: ['../src/static']
};

export default config;
