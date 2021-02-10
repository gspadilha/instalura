import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { ThemeType } from '.';

type ThemeProps = {
  theme: ThemeType;
};

export const GlobalStyle = createGlobalStyle<ThemeProps>`
  * {
    box-sizing: border-box;
  }

  ${normalize}

  html, body {
    display: flex;
    min-height:100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily}
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
