import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  #__next {
    height: 100%;
  }

  body {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 1000px) {
    :root {
      font-size: 62.5%;
    }
  }
  @media (max-width: 800px) {
    :root {
      font-size: 62.5%;
    }
  }
`
