import 'styled-components';
import type { Theme } from './theme.styles';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
