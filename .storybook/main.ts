import type { StorybookConfig } from '@storybook/react-webpack5';
import { managerHead } from './manager-head';

const config: StorybookConfig = {
  stories: [
    '../src/stories/Introduction.mdx',
    '../src/stories/fundamentals/**/*.mdx',
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
  staticDirs: ['.'],
  managerHead: (head) => `${head} ${managerHead}`
};

export default config;
