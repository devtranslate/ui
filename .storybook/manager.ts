import type { API } from 'storybook/manager-api';
import { addons } from 'storybook/manager-api';
import storybookTheme from './storybook-theme';

interface StoryData {
  title?: string;
  name?: string;
}

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

addons.register('PageTitleAddon', (api) => {
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

addons.setConfig({ theme: storybookTheme });
