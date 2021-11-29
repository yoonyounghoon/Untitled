import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import palette from './palette';

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
    color:${palette.black};
  }
`;

export default GlobalStyle;
