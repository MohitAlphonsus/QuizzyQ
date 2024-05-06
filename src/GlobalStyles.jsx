import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-display: 'Oswald', sans-serif;
    --font-body: 'Open Sans', sans-serif;
    --color-white : #fff;
  
 

 [data-theme="dark"] {
    --color-primary:#040625; 
    --color-secondary : #040710; 
    --color-accent: #fca605; 
    --color-neutral: #ebebeb; 
    --color-neutral-2: #111;
    --color-bg-option-box: #0d1029;
    
    --bg-gradient: radial-gradient(at right center, var(--color-secondary), var(--color-primary));
 }

 [data-theme="light"] {
    --color-primary:#9A9EFF; 
    --color-secondary : #D5DDF8; 
    --color-accent: #470681; 
    --color-neutral: #111; 
    --color-neutral-2: #f7f7f7;
    --color-bg-option-box:#3b3d67;

    --bg-gradient: radial-gradient(at right center, var(--color-secondary), var(--color-primary));
 }
}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: none;

  }

  html {font-size:62.5%;    overflow-x: hidden;}

  html, body {
    height: 100%;
  }

  body {
    font-size: 1.6rem;
    font-family: var(--font-body);
    background: var(--bg-gradient);
    padding: 2rem;
    color: var(--color-neutral);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
  }

  button {
    font:inherit
  }
`;
