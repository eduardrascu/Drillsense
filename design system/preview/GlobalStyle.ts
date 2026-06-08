import { createGlobalStyle } from 'styled-components';
import { colors } from '@src/themes';

// Preview-shell chrome only. Canvas + text pulled from the DS token set
// (tokens.ts) so even the host page stays on-brand.
export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', sans-serif;
    background: ${colors.ui.gray['14']};
    color: ${colors.ui.gray['01']};
    -webkit-font-smoothing: antialiased;
  }
`;
