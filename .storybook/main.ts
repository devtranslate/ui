import type { StorybookConfig } from '@storybook/react-webpack5';

import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/stories/Introduction.mdx',
    '../src/stories/fundamentals/**/*.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ],
  framework: '@storybook/react-webpack5',
  staticDirs: ['.', '../src'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => {
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      }
    }
  },
  webpackFinal: async (config) => {
    if (!config.resolve) config.resolve = {};
    if (!config.resolve.alias || Array.isArray(config.resolve.alias)) {
      config.resolve.alias = {};
    }
    (config.resolve.alias as Record<string, string>)['src'] = path.resolve(process.cwd(), 'src');
    return config;
  }
};

export default config;
