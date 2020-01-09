import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #fff;
    line-height: 1.5;
    font-size: 16px;
    color: #2f2f2f;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    margin-bottom: 1.5rem;
  }
  h1 {
    font-size: 3.5rem;
    line-height: 1.3;
  } 
  
  h2 {
    font-size: 3rem;
  } 
  
  h3 {
    font-size: 2.75rem;
  } 
  
  h4 {
    font-size: 2.25rem;
  } 
  
  h5 {
    font-size: 1.75rem;
  } 
  
  h6 {
    font-size: 1.25rem;
  } 
  
  strong {
    font-weight: 700;
  }
  p {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    margin-bottom: 1.5rem;
    padding: 0;
  }
  span,
  strong,
  em {
    display: inline;
  }
`;