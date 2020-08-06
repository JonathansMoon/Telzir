import { createGlobalStyle } from 'styled-components';
import 'typeface-montserrat';

import background from '../assets/images/background.svg';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  body {
    background: #F8F8F8 url(${background});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: bottom right;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, h1 {
    font: 14px Montserrat;
  }

  #root {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  button {
    cursor: pointer;
  }

`;
