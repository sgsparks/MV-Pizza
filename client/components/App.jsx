import React from 'react';
import { createGlobalStyle } from 'styled-components';
import NavBar from './NavBar.jsx';
import Menu from './Menu.jsx';
import { Banner } from './Styles/banner.js';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Noto Sans', sans-serif;

  }

  h1, h2, h3 {
    font-family: 'Open Sans', sans-serif;
  }
`;

const App = () => (
  <>
    <GlobalStyle />

    <NavBar />
    <Banner />
    <Menu />
    <div />
  </>
);

export default App;
