import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-white: #FAFAFA;  
  --color-black: #121212;  

  --color-primary-dark:#2b8f9e;
  --color-primary-light:#27aabe;
  --color-secondary-dark:#ff44ff;


  --color-grey-1: #D5D5D5; 
  --color-grey-2: #2B2B2B; 
  --color-grey-3: #171717; 

  --color-muted: #494949; 
  --color-effect-glass: rgba(18, 18, 18, 0.99);

  --border-sm: 0.1rem solid var(--color-grey-2);
  --border-md: 0.3rem solid var(--color-grey-2);
}

::selection {
  color: var(--color-white);
  background-color: var(--color-primary-dark);
}

*, 
*::before, 
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  overflow-y: scroll;
  scrollbar-color: var(--color-grey-2) var(--color-grey-3);
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.7;
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, var(--color-black), var(--color-grey-3));
  color: var(--color-white); 
}

a {
  color: inherit;
  text-decoration: none;
}

button, 
input, 
textarea {
  font: inherit;
}

p {
  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
}
`;

export default GlobalStyles;
