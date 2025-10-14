import '@emotion/react';
import { Theme as DefaultTheme } from '../themes/types';

declare module '@emotion/react' {
  export interface Theme extends DefaultTheme {}
}
