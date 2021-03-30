import React from 'react';
import { createGlobalStyle } from 'styled-components';
import NavBar from './NavBar.jsx';
import { Banner } from './Styles/banner.js'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
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

  <NavBar/>
  <Banner />
  <div>
    I am a react test
   </div>
  </>
  )
  };

export default App;
