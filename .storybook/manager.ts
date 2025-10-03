import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
import type { API } from '@storybook/manager-api';

interface StoryData {
  title?: string;
  name?: string;
}

addons.setConfig({
  theme: create({
    base: 'light',

    // Branding
    brandTitle: 'Devtranslate UI',
    brandImage: './images/logo.svg',

    // Colors
    colorPrimary: '#334155',
    colorSecondary: '#F87171',

    // UI Colors
    appBg: '#FAFAFA',
    appContentBg: '#FFFFFF',
    appPreviewBg: '#FFFFFF',
    appBorderColor: '#E4E4E7',

    // Text Colors
    textColor: '#3F3F46',
    textInverseColor: '#F4F4F5',
    textMutedColor: '#71717A',

    // Toolbar Colors
    barTextColor: '#71717A',
    barHoverColor: '#F87171',
    barSelectedColor: '#F87171',
    barBg: '#FAFAFA',

    // Form Colors
    inputBg: '#FFFFFF',
    inputBorder: '#E4E4E7',
    inputTextColor: '#3F3F46',

    // Fonts
    fontBase:
      '"Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    fontCode:
      '"Consolas", ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace'
  })
});

const getCurrentStoryData = (api: API): StoryData | null => {
  try {
    return api.getCurrentStoryData();
  } catch {
    return null;
  }
};

const formatPageTitle = (storyData: StoryData | null): string => {
  const PAGE_TITLE = 'Devtranslate UI';

  if (!storyData) {
    return PAGE_TITLE;
  }

  const { title, name } = storyData;

  if (title && name) {
    const componentName = title.split('/').pop();
    const storyName = name !== 'Docs' ? name : '';
    return `${componentName} ${storyName}`.trim() + ` | ${PAGE_TITLE}`;
  }

  if (name) {
    return `${name} | ${PAGE_TITLE}`;
  }

  return PAGE_TITLE;
};

addons.register('TitleAddon', (api) => {
  const titleElement = document.querySelector('title');

  if (!titleElement) {
    return;
  }

  const observer = new MutationObserver(() => {
    if (document.title.endsWith('Storybook')) {
      const storyData = getCurrentStoryData(api);
      document.title = formatPageTitle(storyData);
    }
  });

  observer.observe(titleElement, {
    childList: true,
    subtree: true,
    characterData: true
  });
});
