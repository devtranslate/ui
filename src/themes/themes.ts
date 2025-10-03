import { Theme, ThemeName } from './themes.types';
import { lightTheme } from './definitions/light';
import { darkTheme } from './definitions/dark';

export const themes = {
  light: lightTheme,
  dark: darkTheme
};

export const useTheme = (themeName: ThemeName = 'light'): Theme => {
  return themes[themeName];
};
