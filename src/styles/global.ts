import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
  }

  body{
    min-height: 100vh;
    display: flex;
    align-items: center;
    /* background-image: url("/images/background.jpeg"); */
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(28,79,99,1) 0%, rgba(117,212,249,1) 100%);
  }

  a{
    text-decoration: none;
  }
  
  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
  }
`