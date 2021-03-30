import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans', sans-serif;

  }

  h1, h2, h3 {
    font-family: 'Open Sans', sans-serif;
  }
`

const App = () => {

  return (
    <>
  <GlobalStyle />
  <h1> MV-PIZZA </h1>
  <div>
    I am a react test
   </div>
  </>
  )
  };

export default App;