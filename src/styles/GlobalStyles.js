import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-white: #FAFAFA;  // primary text
  --color-black: #121212;  // primary dark

  --color-primary-dark:#2b8f9e;
  --color-primary-light:#27aabe;


  --color-grey-1: #D5D5D5; // secondary text
  --color-grey-2: #2B2B2B; // border grey
  --color-grey-3: #171717; // primary grey

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
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  line-height: 1.6;
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, var(--color-black), var(--color-grey-3));
  color: var(--color-white);
 
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
  color: inherit;
}

p {
  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
}
`;

export default GlobalStyles;
