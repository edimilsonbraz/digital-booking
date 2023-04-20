import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --white: #fff;
    --primary: #F0572D;
    --light: #EFEFEF;
    --title: #31363F;
    --text: #191B1D;
  }

  body,input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  input:focus {
    outline-color: var(--primary);
    box-shadow: 0 0 0 2px var(--primary);
  }

  a {
	text-decoration: none;
  }

  p {
    color: var(--text);
  }

  button {
    cursor: pointer;
  }

  h1 {
    color: var(--primary);
    font-size: 2.25rem;
  }

  h2 {
    color: var(--primary);
    font-size: 1.8rem;
  }

  h3 {
    color: var(--primary);
    font-size: 1.125rem;
  }

  .containerGlobal {
    width: 100%;
    max-width: 78rem;
    margin-right: auto;
    margin-left: auto;
  }

`
