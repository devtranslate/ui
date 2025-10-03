import '@emotion/react';
import { Theme as CustomTheme } from '../themes/themes.types';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
