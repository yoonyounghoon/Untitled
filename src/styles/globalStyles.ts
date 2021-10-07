import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * { 
     box-sizing: border-box;
  }

  html,body,#root{
     height: 100%;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyle;
