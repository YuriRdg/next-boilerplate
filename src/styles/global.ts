import { createGlobalStyle, css } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('../fonts/poppins-v15-latin-regular.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('../fonts/poppins-v15-latin-700.woff2') format('woff2')
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
${({ theme }) => css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
  }
`}

`

export default GlobalStyles
